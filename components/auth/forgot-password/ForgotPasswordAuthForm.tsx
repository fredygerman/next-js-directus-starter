"use client"

import { useRouter } from "next/navigation"
import { forgotPassword } from "@/actions/authForms"
import { zodResolver } from "@hookform/resolvers/zod"
import posthog from "posthog-js"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
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
})

type AccountFormValues = z.infer<typeof accountFormSchema>

export function ForgotPasswordAuthForm() {
  const router = useRouter()
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
  })

  const onSubmit = async (data: AccountFormValues) => {
    const { email } = data
    posthog?.capture("user_forgot_password")
    const result = await forgotPassword(email)
    console.log(result)
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-background p-4">
          <code className="text-primary">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
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
              <FormDescription>
                We will send you a password reset link to this email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row justify-center">
          <Button type="submit" className={cn("w-1/2 ")}>
            Reset Password
          </Button>
        </div>
      </form>
    </Form>
  )
}
