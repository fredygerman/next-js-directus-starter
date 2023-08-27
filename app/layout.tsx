"use client"

import "@/styles/globals.css"
import { usePathname } from "next/navigation"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import AppLayout from "@/components/layout/app/AppLayout"
import Seo from "@/components/misc/seo"
import { TailwindIndicator } from "@/components/misc/tailwind-indicator"
import { ThemeProvider } from "@/components/misc/theme-provider"
import { Header } from "@/components/navigation/app/header"
import DashboardLayout from "@/components/layout/dashboard/DashboardLayout"

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// }

interface RootLayoutProps {
  children: React.ReactNode
}

const publicRoutes = ["/", "/login", "/signup", "/forgot-password"]

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname()
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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <Seo> */}
            {/* <div className="relative flex min-h-screen flex-col"> */}
            <div >
              {/* {pathname.startsWith("/admin") ? (
                <div className="flex-none">
                  <AppLayout>
                    <div className="flex-1">{children}</div>
                  </AppLayout>
                </div>
              ) : null}
              {pathname.startsWith("/app") ? (
                <div className="flex-none">
                  <AppLayout>
                    <div className="flex-1">{children}</div>
                  </AppLayout>
                </div>
              ) : null}
              {publicRoutes.includes(pathname) ? null : (
                <div className="flex-none">
                  <AppLayout>
                    <div className="flex-1">{children}</div>
                  </AppLayout>
                </div>
              )} */}
                 {!pathname.startsWith("/admin") ? (
                <div className="flex-none">
                  <AppLayout>
                    <div className="flex-1">{children}</div>
                  </AppLayout>
                </div>
              ) : 
              <div className="flex-none">
                <DashboardLayout>{children}</DashboardLayout>
              </div> }
            </div>
            <TailwindIndicator />
            {/* </Seo> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
