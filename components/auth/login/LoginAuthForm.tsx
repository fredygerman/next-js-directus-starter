"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { login } from "@/actions/authForms"
import { logoutUser, setAuthState, storedUser } from "@/store/slices/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { usePostHog } from "posthog-js/react"
import { useDirectus } from "react-directus"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { useStoreDispatch, useStoreSelector } from "@/hooks/useStore"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const accountFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(100, {
      message: "Password must not be longer than 100 characters.",
    }),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function LoginAuthForm() {
  const dispatch = useStoreDispatch()
  // check if there is a localStorage logged-out item, tell user they have been logged out and remove the item
  if (typeof window !== "undefined") {
    if (localStorage.getItem("logged-out")) {
      dispatch(logoutUser())
      toast({
        title: "Oh no! Your Session Expired.",
        description: "Please log in again.",
        variant: "destructive",
      })
      localStorage.removeItem("logged-out")
    }
  }
  const posthog = usePostHog()

  const router = useRouter()
  let user = useStoreSelector(storedUser)
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })

  const onSubmit = async (data: AccountFormValues) => {
    const { email, password } = data

    const loginResult = await login(email, password)
    // console.log("login result :", loginResult)

    toast({
      title: loginResult.success ? "Success 🥳 " : "Error 🫤",
      variant: loginResult.success ? "default" : "destructive",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-background p-4">
          <code className="text-primary">{loginResult.message}</code>
        </pre>
      ),
    })

    if (loginResult.success) {
      dispatch(setAuthState(loginResult.data))
      posthog?.identify(loginResult.data.user.id, {
        email: loginResult.data.user.email,
      })
      posthog?.group("role", loginResult.data.user.role)
      posthog?.capture("user_log_in")
      // await 2 seconds to allow the auth state to be set
      await new Promise((resolve) => setTimeout(resolve, 2000))
      router.push("/")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row space-x-2">
          <Button type="submit" className={cn("w-1/2 ")}>
            Login
          </Button>
          <Link href="/auth/sign-in" className={cn("w-1/2 text-center ")}>
            <Button variant="ghost">Sign In</Button>
          </Link>
        </div>
        {/* forgot password  */}
        <div className="flex flex-row justify-center">
          <Link
            href="/auth/forgot-password"
            className={cn("w-1/2 text-center ")}
          >
            <span className=" text-sm text-muted-foreground underline  hover:text-primary">
              Forgot Password?
            </span>
          </Link>
        </div>
      </form>
    </Form>
  )
}
