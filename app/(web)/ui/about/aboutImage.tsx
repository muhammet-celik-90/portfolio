"use client";

import * as React from "react";
import aboutIllustration from "@/public/illustrations/about.svg";
import { twMerge } from "tailwind-merge";
import { useScrollPosition } from "../../lib/hooks/useScroll";
import CustomImage from "@/app/(web)/components/customImage";

export interface IAboutImageProps {}

export default function AboutImage(props: IAboutImageProps) {
  const scroll = useScrollPosition();

  return (
    <div
      className={twMerge(
        "flex flex-row items-center h-full",
        scroll > 200 && "slide-right"
      )}
    >
      <CustomImage src={aboutIllustration} alt="about-illustration" />
    </div>
  );
}
