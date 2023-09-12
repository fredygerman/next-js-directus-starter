import "@/styles/globals.css"
import { Metadata } from "next"
import { headers } from "next/headers"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Seo from "@/components/misc/seo"
import { TailwindIndicator } from "@/components/misc/tailwind-indicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const publicRoutes = ["/", "/login", "/signup", "/forgot-password"]

export default function RootLayout({ children }: RootLayoutProps) {
  const headersList = headers()

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {/* <Seo> */}

          <div className="relative flex min-h-screen flex-col">{children}</div>

          <TailwindIndicator />
          {/* </Seo> */}
        </body>
      </html>
    </>
  )
}
