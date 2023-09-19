import { DirectusAsset } from "react-directus"

type BlogPost = {
  id: any
  title: string
}

type BlogSettings = {
  display_promotions: boolean
}

export type MyCollections = {
  posts: BlogPost
  settings: BlogSettings
}
