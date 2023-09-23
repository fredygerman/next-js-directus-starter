import { ReactElement, ReactNode } from "react"
import { NextPage } from "next"
import { AppProps } from "next/app"

import { NavItem } from "@/types/nav"

export type children = {
  children: ReactNode
}

export type LayoutPropsTypes = {
  children: ReactNode
  title?: string
  description?: string
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type RootLayoutProps = {
  children: React.ReactNode
}

export interface IMenu {
  description: string
  icon: string
  link: string
  title: string
}

export type FormActionResponse = {
  data?: any
  message: string
  success: boolean
}

export type MainNavProps = {
  items?: NavItem[]
}
