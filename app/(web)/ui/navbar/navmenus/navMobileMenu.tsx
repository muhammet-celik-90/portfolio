'use client'

import * as React from "react";
import Link from "next/link";
import { navlinks } from "@/app/(web)/lib/getNavlinks";
import { twMerge } from "tailwind-merge";
import MenuButton from "./menuButton";

export interface INavMobileMenuProps {}

export default function NavMobileMenu(props: INavMobileMenuProps) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="navbar-end lg:hidden">
      <MenuButton handleClick={handleClick} open={open} />
      <ul
        className={twMerge(
          "absolute top-14 menu menu-sm py-4 px-2 shadow bg-base-300 rounded-box w-40",
          open === true ? "flex" : "hidden"
        )}
      >
        {navlinks.map((navlink) => (
          <li key={navlink.label} className="mb-2">
            <Link href={navlink.href} title={navlink.label}>{navlink.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
