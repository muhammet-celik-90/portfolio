import * as React from "react";
import NavLogo from "./navlogo";
import NavLargeMenu from "./navmenus/navLargeMenu";
import NavMobileMenu from "./navmenus/navMobileMenu";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <div className="navbar bg-base-100 fixed p-5 z-10">
      <NavLogo/>
      <NavLargeMenu/>
      <NavMobileMenu/>
    </div>
  );
}
