"use client"

import * as React from "react"
import Link from "next/link"
import { storedUser } from "@/store/slices/auth"

import { MainNavProps } from "@/types/general"
import { cn } from "@/lib/utils"
import { useStoreSelector } from "@/hooks/useStore"
import { Icons } from "@/components/misc/icons"

export function MainNav({ items }: MainNavProps) {
  const user = useStoreSelector(storedUser)

  // if we have the user we remove the login and sign in item on the nav bar
  if (user && items) {
    items = items.filter(
      (item) => item.title !== "Login" && item.title !== "Sign In"
    )
  }

  return (
    <>
      {/* Desktop navbar */}
      <nav className="hidden px-1 md:flex md:items-center md:justify-between md:gap-6">
        {items?.length ? (
          <nav className="flex gap-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </nav>

      {/* Mobile navbar */}

      <nav className="flex items-center justify-between px-1 md:hidden">
        <Link href="/" className="flex items-start space-x-2">
          <Icons.menu className="h-4 w-4" />
        </Link>
      </nav>
    </>
  )
}
