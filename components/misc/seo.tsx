import Head from "next/head"

import { siteConfig } from "@/config/site"

//   export const metadata: Metadata = {
//         title: {
//           default: siteConfig.name,
//           template: `%s - ${siteConfig.name}`,
//         },
//         description: siteConfig.description,
//         themeColor: [
//           { media: "(prefers-color-scheme: light)", color: "white" },
//           { media: "(prefers-color-scheme: dark)", color: "black" },
//         ],
//         icons: {
//           icon: "/favicon.ico",
//           shortcut: "/favicon-16x16.png",
//           apple: "/apple-touch-icon.png",
//         },
//       }

export default function Seo({
  title = siteConfig.name,
  description = siteConfig.description,
  siteName = siteConfig.name,
  canonical = siteConfig.canonical,
  ogImage = siteConfig.image,
  ogType = siteConfig.type,
  twitterHandle = siteConfig.twitterHandle,
  DOMAIN = siteConfig.domain,
  shortcutIcon = siteConfig.icons.shortcut,
  appleIcon = siteConfig.icons.apple,
}: {
  title?: string
  description?: string
  siteName?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterHandle?: string
  DOMAIN?: string
  shortcutIcon?: string
  appleIcon?: string
}) {
  return (
    <Head>
      <title key="title">{`${title} – ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_image" property="og:image" content={ogImage} />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${siteName}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

      <link rel="canonical" href={canonical ?? DOMAIN} />

      <link rel="shortcut icon" href={shortcutIcon} />

      <link rel="apple-touch-icon" href={appleIcon} />
    </Head>
  )
}
