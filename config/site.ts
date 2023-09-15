import getConfig from "next/config"

// const { publicRuntimeConfig } = getConfig()
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: "Next Js Directus Starter",
  name: "Next-js-directus-starter",
  canonical: "https://nextjs-starter-shadcn.vercel.app/",
  domain: "https://nextjs-starter-shadcn.vercel.app/",
  image:
    "https://storage.googleapis.com/brandflow-bucket/personal/blog/portfolio-og.jpg",
  type: "website",
  twitterHandle: "@fredygerman_",
  description:
    "Amazing starter with Directus Next.js, TypeScript, ESLint, Prettier, chadcn-ui",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },

    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Login",
      href: "/auth/login",
    },
  ],
  links: {
    home: "/",
    about: "/about",
    blog: "/blog",
    login: "/auth/login",
    signup: "/auth/signup",
    contact: "/contact",
    privacyPolicy: "/privacy-policy",
    termsAndConditions: "/terms-and-conditions",
    dashboard: "/dashboard",
    admin: "/admin",
    adminDashboard: "/admin/dashboard",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    logo: "/logo.svg",
  },
  socials: [
    {
      name: "Twitter",
      url: "https://twitter.com/fredygerman_",
      asset: "/twitter.svg",
    },
    {
      name: "Github",
      url: "https://github.com/fredygerman",
      asset: "/github.svg",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/fredygerman/",
      asset: "/linkedin.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/fredygerman_/",
      asset: "/instagram.svg",
    },
  ],
  contacts: [
    {
      name: "Email",
      url: "mailto:example@gmail.com",
      asset: "/email.svg",
    },
    {
      name: "Phone",
      url: "tel:+1-202-555-0104",
      asset: "/phone.svg",
    },
  ],
  // version: publicRuntimeConfig?.version || "unknown",
  version: "0.0.1",
  author: "fredygerman", // make sure this is also your github username
  authorUrl: "https://github.com/fredygerman",
  gitHubApiRepoName: "fredygerman/next-js-directus-starter",
}
