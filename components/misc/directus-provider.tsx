"use client"

import * as React from "react"
import { DirectusProvider } from "react-directus"

// import { MyCollections } from "@/types/directus-types"

export function MyDirectusProvider({ children, ...props }: any) {
  return (
    <DirectusProvider apiUrl="https://api.example.com" options={{}}>
      {children}
    </DirectusProvider>
  )
}
