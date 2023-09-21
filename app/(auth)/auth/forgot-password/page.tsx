import Link from "next/link"

import { cn } from "@/lib/utils"
import { ForgotPasswordAuthForm } from "@/components/auth/forgot-password/ForgotPasswordAuthForm"

export default function IndexPage() {
  return (
    <>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              You Forgot Password? 😅
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and we will send you a link to reset your
              password.
            </p>
          </div>
          <ForgotPasswordAuthForm />

          <div className="flex flex-row justify-center">
            <Link href="/auth/login" className={cn("w-1/2 text-center ")}>
              <span className=" text-sm text-muted-foreground underline  hover:text-primary">
                Go to Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
