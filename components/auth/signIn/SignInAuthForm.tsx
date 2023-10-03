"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { register } from "@/actions/authForms"
import { setAuthState } from "@/store/slices/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { usePostHog } from "posthog-js/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { useStoreDispatch } from "@/hooks/useStore"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const accountFormSchema = z.object({
  first_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

  last_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

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
const defaultValues: Partial<AccountFormValues> = {}

export function SignInAuthForm() {
  const router = useRouter()
  const dispatch = useStoreDispatch()
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })
  const posthog = usePostHog()

  const onSubmit = async (data: AccountFormValues) => {
    const { email, password, first_name, last_name } = data
    const registerResult = await register(
      email,
      password,
      first_name,
      last_name
    )
    console.log("Login Result : ", registerResult)

    toast({
      title: registerResult.success ? "Success 🥳 " : "Error 🫤",
      variant: registerResult.success ? "default" : "destructive",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-background p-4">
          <code className="text-primary">{registerResult.message}</code>
        </pre>
      ),
    })

    if (registerResult.success) {
      dispatch(setAuthState(registerResult.data))
      posthog?.identify(registerResult.data.user.id, {
        email: registerResult.data.user.email,
      })
      posthog?.group("role", registerResult.data.user.role)
      posthog?.capture("user_sign_in")
      // wait for 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000))
      router.push("/")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
            Sign In with Email
          </Button>
          <Link href="/auth/login" className={cn("w-1/2 text-center ")}>
            <Button variant="ghost">Login</Button>
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
