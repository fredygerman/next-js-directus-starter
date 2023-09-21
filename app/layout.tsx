import "@/styles/globals.css"
import { Metadata } from "next"

import { RootLayoutProps } from "@/types/general"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ProgressBar } from "@/components/misc/progress"
import CustomProvider from "@/components/misc/state-provider"
// import Seo from "@/components/misc/seo"
import { TailwindIndicator } from "@/components/misc/tailwind-indicator"
import { ToasterWrapper } from "@/components/misc/toaster-wrapper"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "TypeScript",
    "Directus",
    "Headless CMS",
  ],
  authors: [
    {
      name: `${siteConfig.author ? siteConfig.author : "@fredygerman_"}`,
      url: `${
        siteConfig.authorUrl ? siteConfig.authorUrl : "https://fredygerman.com"
      }`,
    },
  ],
  creator: `${siteConfig.author ? siteConfig.author : "@fredygerman_"}`,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.links.home,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.links.home}/og.jpg`],
    creator: `${siteConfig.author ? siteConfig.author : "@fredygerman_"}`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.links.home}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
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
          <ProgressBar />
          <CustomProvider>
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </CustomProvider>
          <ToasterWrapper />
          <TailwindIndicator />
          {/* </Seo> */}
        </body>
      </html>
    </>
  )
}
