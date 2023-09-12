"use client"
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";
import {usePathname} from "next/navigation"
import { useEffect, useState } from "react";
import type { Url } from "url";
import { capitalizeFirstLetter } from "@/helpers/string";

const convertBreadcrumb = (path: string) => {
  let crum = path
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü");
  return capitalizeFirstLetter(crum);
};

const Breadcrums = () => {
  // const router = useRouter();
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<any>>([]);

  useEffect(() => {
    if (pathname) {
      const linkPath = pathname.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [pathname]);

  if (!breadcrumbs) {
    return null;
  }

  const checkHomeRedirection = (): string | undefined => {
    if (pathname.startsWith("/admin")) {
      return "/admin";
    }

    if (pathname.startsWith("/app")) {
      return "/app";
    }
  };

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link href={`${checkHomeRedirection()}`}>
          <HomeOutlined style={{ height: "18px", width: "18px" }} />
        </Link>
      </Breadcrumb.Item>
      {breadcrumbs?.length > 0 &&
        breadcrumbs?.map((breadcrumb, _i) => {
          return (
            <Breadcrumb.Item key={_i}>
              <Link href={breadcrumb.href} className="text-base">
                {convertBreadcrumb(breadcrumb.breadcrumb)}
              </Link>
            </Breadcrumb.Item>
          );
        })}
    </Breadcrumb>
  );
};

export default Breadcrums;
