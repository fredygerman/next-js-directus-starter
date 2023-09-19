import { ReactNode } from "react"

import { Footer } from "@/components/navigation/app/AppFooter"
import { Header } from "@/components/navigation/app/AppHeader"

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-none">
      <Header />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  )
}

export default AuthLayout
