import * as React from "react";
import Image from "next/image";
import cover from "@/public/covers/about.png";
import AboutMain from "@/app/ui/pages/about/aboutMain";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div className="pt-16 sm:pt-0">
      <AboutMain />
    </div>
  );
}
