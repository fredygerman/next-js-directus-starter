import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/misc/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
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
