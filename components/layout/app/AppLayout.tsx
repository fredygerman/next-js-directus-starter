import { ReactNode } from "react"

import { Footer } from "@/components/navigation/app/footer"
import { Header } from "@/components/navigation/app/header"

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-none">
      <Header />
      <div className="min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  )
}

export default AppLayout
