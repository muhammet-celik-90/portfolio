'use client'

import { useScrollPosition } from "../../lib/hooks/useScroll";
import Link from "next/link";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface IAboutTextProps {}

export default function AboutText(props: IAboutTextProps) {

  const scroll = useScrollPosition();
  return (
    <div
      className={twMerge(
        "flex flex-col justify-center items-center sm:items-start h-full gap-5 mt-5 sm:mt-0",
        scroll > 200 && 'slide-right'
      )}
    >
      <p className="font-bold text-xl sm:text-4xl">About me</p>
      <p className="text-sm">
        Hello! I am Muhammet Çelik, a Frontend Developer and my passion for the
        web world led me to this exciting field.{" "}
      </p>
      <p className="text-sm">
        I have been working in this field since 2019. I started writing code
        with curiosity and enthusiasm. The pleasure of solving problems, the
        existence of ready-to-learn technologies and the need for constant
        self-improvement led me to this field.
      </p>
      <Link href="/about">
        <button className="btn btn-primary">Learn More</button>
      </Link>
    </div>
  );
}
