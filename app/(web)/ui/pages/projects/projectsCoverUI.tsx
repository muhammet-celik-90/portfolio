import * as React from "react";
import Image from "next/image";
import cover from "@/public/covers/projects.webp";

export interface IProjectsCoverUIProps {}

export default function ProjectsCoverUI(props: IProjectsCoverUIProps) {
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
