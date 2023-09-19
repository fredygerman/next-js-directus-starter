"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function AuthHeaderButton() {
  const pathname = usePathname()

  return pathname === "/auth/login" ? (
    <Link
      href="/auth/sign-in"
      className={cn("absolute right-4 top-4 md:right-8 md:top-8")}
    >
      <Button variant="ghost">Sign Up</Button>
    </Link>
  ) : pathname === "/auth/sign-in" ? (
    <Link
      href="/auth/login"
      className={cn("absolute right-4 top-4 md:right-8 md:top-8")}
    >
      <Button variant="ghost">Login</Button>
    </Link>
  ) : pathname === "/auth/forgot-password" ? (
    <Link
      href="/auth/login"
      className={cn("absolute right-4 top-4 md:right-8 md:top-8")}
    >
      <Button variant="ghost">Login</Button>
    </Link>
  ) : null
}
