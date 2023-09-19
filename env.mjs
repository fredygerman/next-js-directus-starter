import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    //  DIRECTUS_URL: z.string().min(1), // this is how all the validation should be but for now since none of these are required we can leave them as optional
    DIRECTUS_URL: z.string().url().optional(),
    DIRECTUS_PROJECT_NAME: z.string().optional(),
    GITHUB_CLIENT_ID: z.string().optional(),
    GITHUB_CLIENT_SECRET: z.string().optional(),
    GITHUB_ACCESS_TOKEN: z.string().optional(),
    SMTP_FROM: z.string().optional(),
    POSTMARK_API_TOKEN: z.string().optional(),
    POSTMARK_SIGN_IN_TEMPLATE: z.string().optional(),
    POSTMARK_ACTIVATION_TEMPLATE: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string(),
  },
  runtimeEnv: {
    DIRECTUS_URL: process.env.DIRECTUS_URL,
    DIRECTUS_PROJECT_NAME: process.env.DIRECTUS_PROJECT_NAME,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
    SMTP_FROM: process.env.SMTP_FROM,
    POSTMARK_API_TOKEN: process.env.POSTMARK_API_TOKEN,
    POSTMARK_SIGN_IN_TEMPLATE: process.env.POSTMARK_SIGN_IN_TEMPLATE,
    POSTMARK_ACTIVATION_TEMPLATE: process.env.POSTMARK_ACTIVATION_TEMPLATE,

    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
})