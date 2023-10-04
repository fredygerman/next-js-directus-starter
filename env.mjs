import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // Directus
    DIRECTUS_URL: z.string(),
    DIRECTUS_TOKEN_EXPIRATION_ADJUSTMENT: z.string(),
    DIRECTUS_USER_CREATOR_TOKEN: z.string().optional(),
    DIRECTUS_DEFAULT_ROLE_ID: z.string(),
    DIRECTUS_PROJECT_NAME: z.string().optional(),

    // Github
    GITHUB_ACCESS_TOKEN: z.string().optional(),
  },
  client: {
    // App
    NEXT_PUBLIC_APP_URL: z.string(),
    NODE_ENV: z.string().optional(),

    // Posthog
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
    NEXT_PUBLIC_HOST_URL: z.string().optional(),
  },
  runtimeEnv: {
    // App
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,

    DIRECTUS_URL: process.env.DIRECTUS_URL,
    DIRECTUS_TOKEN_EXPIRATION_ADJUSTMENT:
      process.env.DIRECTUS_TOKEN_EXPIRATION_ADJUSTMENT,
    DIRECTUS_DEFAULT_ROLE_ID: process.env.DIRECTUS_DEFAULT_ROLE_ID,
    DIRECTUS_USER_CREATOR_TOKEN: process.env.DIRECTUS_USER_CREATOR_TOKEN,
    DIRECTUS_PROJECT_NAME: process.env.DIRECTUS_PROJECT_NAME,

    // Posthog
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,

    // Github
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
  },
})
