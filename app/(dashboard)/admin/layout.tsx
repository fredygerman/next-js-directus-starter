import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/misc/theme-provider"
import { DashboardHeader } from "@/components/navigation/dashboard/DashboardHeader"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      {/* Include shared UI here e.g. a header or sidebar */}

      <nav>
        <DashboardHeader />
      </nav>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </section>
  )
}
