import getConfig from "next/config"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/misc/icons"

const { publicRuntimeConfig } = getConfig()
const version = publicRuntimeConfig?.version

export function Footer() {
  const date = new Date()

  const socials = siteConfig.socials

  return (
    <footer className="flex w-full flex-col bg-white px-4 pt-12 md:pt-24">
            <hr className="mt-5 w-full border border-primary leading-[10px] md:mb-5" />
      <div className="container-wrapper flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:justify-between md:gap-16">
        <div className="flex flex-col gap-8">
          {/* <Image
            src={siteConfig.icons.logo}
            alt="logo"
            className="w-48 cursor-pointer md:w-56"
            width={250}
            height={50}
            priority={true}
          /> */}
           <Icons.logo  className="w-14 cursor-pointer md:w-24" />
           {socials.length > 0 && (
  <div className="flex justify-center gap-5 md:pr-10">
    {socials.map((social, index) => {
      let icon = null;
      switch (social.name) {
        case "Facebook":
          icon = <Icons.facebook className="h-5 w-5" />;
          break;
        case "Twitter":
          icon = <Icons.twitter className="h-5 w-5" />;
          break;
        case "Instagram":
          icon = <Icons.instagram className="h-5 w-5" />;
          break;
        case "LinkedIn":
          icon = <Icons.linkedIn className="h-5 w-5" />;
          break;
        case "YouTube":
          icon = <Icons.youTube className="h-5 w-5" />;
          break;
        case "GitHub":
          icon = <Icons.gitHub className="h-5 w-5" />;
          break;
        default:
          break;
      }
      return (
        <Link href={social.url} className="flex items-center space-x-2" key={index}>
          {icon}
        </Link>
      );
    })}
  </div>
)}
        </div>
        <ul className="leadng-5 flex list-none flex-col gap-1 text-center text-sm font-normal not-italic text-[#1E1E1E] md:text-start">
          <li className="text-base font-semibold leading-6">Company</li>
          <li>
            <a
              href={siteConfig.links.about}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              About {siteConfig.name}
            </a>
          </li>
          <li>
            <Link
              href={siteConfig.links.privacyPolicy}
              className="hover:underline"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href={siteConfig.links.termsAndConditions}
              className="hover:underline"
            >
              Terms and Conditions
            </Link>
          </li>
        </ul>
        <ul className="leadng-5 flex list-none flex-col gap-1 text-center text-sm font-normal not-italic text-[#1E1E1E] md:text-start">
          <li className="text-base font-semibold leading-6">Support</li>
          <li>
            <a
              href={
                siteConfig.contacts.find(
                  (contact) => contact.name === "Customer Service"
                )?.url ?? ""
              }
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Call Customer Service
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 py-10">
        <div className="text-center text-xs font-medium leading-5 text-black ">
          ©{date.getFullYear()}. A product of {siteConfig.name}. All rights
        </div>
        <span className="text-[8px] text-gray-600">{version}</span>
      </div>
    </footer>
  )
}
