import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { AdvancedLink } from "@/components/advanced/advanced-link"
import { Icons } from "@/components/misc/icons"
import { ProfileIcon } from "@/components/misc/profile-icon"
import { ThemeToggle } from "@/components/misc/theme-toggle"
import { MainNav } from "@/components/navigation/main-nav"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        {/* Desktop */}

        <div className="hidden w-full items-center justify-between px-4 md:flex">
          <div className="flex items-center space-x-2">
            <AdvancedLink
              href="/"
              className="flex items-center space-x-2"
              analyticsValue="clicked_logo"
              analyticsProperties={{ location: "header" }}
            >
              <Icons.logo className="h-6 w-6" />
            </AdvancedLink>

            <span className="hidden items-end font-bold md:flex  ">
              {siteConfig.name}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <MainNav items={siteConfig.mainNav} />
          </div>

          <div className="flex items-center space-x-2">
            <AdvancedLink
              href={
                siteConfig.socials.find((social) => social.name === "Github")
                  ?.url ?? "#"
              }
              target="_blank"
              rel="noreferrer"
              analyticsValue="clicked_github"
              analyticsProperties={{ location: "header" }}
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
            </AdvancedLink>
            {/* <AdvancedLink
              href={
                siteConfig.socials.find((social) => social.name === "Twitter")
                  ?.url ?? "#"
              }
              target="_blank"
              rel="noreferrer"
              analyticsValue="clicked_twitter"
              analyticsProperties={{ location: "header" }}
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
            </AdvancedLink> */}
            <ThemeToggle />
            <ProfileIcon />
          </div>
        </div>

        {/* Mobile */}

        <div className="flex w-full items-center justify-between px-4 md:hidden">
          <div className="flex items-center space-x-2">
            <MainNav items={siteConfig.mainNav} />
          </div>

          <div className="flex items-center space-x-2">
            <AdvancedLink
              href="/"
              className="flex items-center space-x-2"
              analyticsValue="clicked_logo"
              analyticsProperties={{ location: "header" }}
            >
              <Icons.logo className="h-6 w-6" />
            </AdvancedLink>
          </div>

          <div className="flex items-center space-x-2">
            {" "}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
