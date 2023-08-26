import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"

export type children = {
      children: ReactNode,
}

export type LayoutPropsTypes = {
      children: ReactNode,
      title?: string,
      description?: string,
}

export type NextPageWithLayout = NextPage & {
      getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
      Component: NextPageWithLayout
}

export interface IMenu {
      description: string;
      icon: string;
      link: string;
      title: string;
}