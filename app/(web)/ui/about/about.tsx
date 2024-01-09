import * as React from "react";
import AboutImage from "./aboutImage";
import AboutText from "./aboutText";
import { twMerge } from "tailwind-merge";

export interface IAboutProps {}

export default function About(props: IAboutProps) {

  return (
    <div className={twMerge("sm:h-[35rem] h-full bg-zinc-900 p-5 flex sm:flex-row flex-col")}>
      <div className="w-full h-full">
        <AboutImage />
      </div>
      <div className="w-full h-full">
        <AboutText />
      </div>
    </div>
  );
}
