"use client"

import { ReactNode, useEffect } from "react"
import Link from "next/link"
import posthog from "posthog-js"

export function BetterLink({
  children,
  href, // Extract href directly
  className, // Extract className directly
  onClick, // Extract onClick directly
  analyticsValue, // Extract analyticsValue directly
  analyticsProperties, // Extract analyticsProperties directly
}: {
  children: ReactNode
  href: string
  className?: string
  onClick?: () => void
  analyticsValue?: string
  analyticsProperties?: object | null
}) {
  const captureEvent = () => {
    // Add Posthog tracking when the component is clicked.
    if (analyticsValue) {
      posthog?.capture(`${analyticsValue ?? "clicked_link"}`, {
        properties: analyticsProperties ?? {},
      })
    }
  }

  return (
    <Link
      href={href}
      className={className ?? ""}
      onClick={(e) => {
        captureEvent()
        onClick && onClick()
      }}
    >
      {children}
    </Link>
  )
}
