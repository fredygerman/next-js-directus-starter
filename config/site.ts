export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: "Next Js Starter",
  name: "Next-js-starter",
  canonical: "https://nextjs-starter-shadcn.vercel.app/",
  domain: "https://nextjs-starter-shadcn.vercel.app/",
  image:
    "https://storage.googleapis.com/brandflow-bucket/personal/blog/portfolio-og.jpg",
  type: "website",
  twitterHandle: "@fredygerman_",
  description:
    "Amazing starter with Next.js, TypeScript, ESLint, Prettier, chadcn-ui",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/fredygerman_",
    github: "https://github.com/fdagreat",
    docs: "https://ui.shadcn.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}
