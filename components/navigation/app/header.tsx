import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/layout/app/main-nav"
import { Icons } from "@/components/misc/icons"
import { ThemeToggle } from "@/components/misc/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between space-x-4 sm:space-x-0">

        {/* Desktop */}


        <div className="hidden w-full items-center justify-between px-4 md:flex">

          
<div className="flex items-center space-x-2">

      <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
        </Link>

        <span className="hidden items-end font-bold md:flex  ">{siteConfig.name}</span>
        </div>

        <div className="flex items-center space-x-2">

        <MainNav items={siteConfig.mainNav} />

        </div>
        
        <div className="flex items-center space-x-2">
        <Link
              href={
                siteConfig.socials.find((social) => social.name === "Github")
                  ?.url ?? ""
              }
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={
                siteConfig.socials.find((social) => social.name === "Twitter")
                  ?.url ?? ""
              }
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
        
        <ThemeToggle />

        </div>
        </div>

        {/* Mobile */}

        <div className="flex w-full items-center justify-between px-4 md:hidden">
                   
<div className="flex items-center space-x-2">

  <MainNav items={siteConfig.mainNav} />
</div>

         
<div className="flex items-center space-x-2"><Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
        </Link>
</div>
        
        
                 
<div className="flex items-center space-x-2">  <ThemeToggle /></div>

      
        </div>

      
 
      </div>
    </header>
  )
}
