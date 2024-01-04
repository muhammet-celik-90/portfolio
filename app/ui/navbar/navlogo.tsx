import * as React from "react";
import logo from "@/public/images/logo.webp";
import Image from "next/image";
import Link from "next/link";

export interface INavLogoProps {}

export default function NavLogo(props: INavLogoProps) {
  return (
    <div className="navbar-start">
      <Link href="/" className="w-8 lg:w-12">
        <Image
          src={logo}
          alt="logo"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </Link>
    </div>
  );
}
