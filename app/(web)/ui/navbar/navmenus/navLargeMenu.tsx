import * as React from "react";
import Link from "next/link";
import { navlinks } from "@/app/(web)/lib/getNavlinks";

export interface INavLargeMenuProps {}

export default function NavLargeMenu(props: INavLargeMenuProps) {
  return (
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {navlinks.map((navlink) => (
          <li key={navlink.label}>
            <Link href={navlink.href} title={navlink.label}>{navlink.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
