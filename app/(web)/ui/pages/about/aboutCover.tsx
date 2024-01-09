import * as React from "react";
import Image from "next/image";
import cover from "@/public/covers/about.png";

export interface IAboutCoverProps {}

export default function AboutCover(props: IAboutCoverProps) {
  return (
    <div className="w-full">
      <Image
        src={cover}
        alt="about-cover"
        style={{ width: "inherit", height: "auto" }}
      />
    </div>
  );
}
