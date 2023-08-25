import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <>
      <header className="flex items-center justify-between w-full h-16 px-4 bg-white border-b border-gray-200">
        <div className="flex justify-between flex-1">
          <ModeToggle />
        </div>
      </header>
    </>
  );
}
