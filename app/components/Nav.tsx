"use client"

import Image from "next/image";
import Link from "next/link";
import LogoMdc from "../../public/logo.svg";
import { ThemeToggle } from "./ThemeToogle";

export default function Nav() {
  return (
    <nav className="max-w-[1680px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300">
      <div>
        <Link href={"/"}>
          <Image className="w-12 h-12" width={30} height={30} src={LogoMdc} alt="Logo Mdc"/>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle></ThemeToggle>    
      </div>
    </nav>
  )
}

