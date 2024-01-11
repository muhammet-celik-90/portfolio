import * as React from "react";
import { navlinks } from "../../lib/getNavlinks";
import Link from "next/link";
import Socials from "../main/text/socials";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="flex flex-row flex-wrap justify-center gap-4">
        {navlinks.map((nav, index) => (
          <Link href={nav.href} key={index} className="link link-hover">
            {nav.label}
          </Link>
        ))}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Socials />
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Muhammet ÇELİK</p>
      </aside>
    </footer>
  );
}
