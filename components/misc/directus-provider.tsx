"use client"

import * as React from "react"
import { DirectusProvider } from "react-directus"

import { env } from "@/env.mjs"

// import { createDirectus, authentication, rest, login } from '@directus/sdk';

// import { MyCollections } from "@/types/directus-types"

export function MyDirectusProvider({ children }: any) {
  // const client = createDirectus('directus_project_url').with(authentication()).with(rest());

  return (
    <DirectusProvider apiUrl={`${env.DIRECTUS_URL}`} options={{}}>
      {children}
    </DirectusProvider>
  )
}
