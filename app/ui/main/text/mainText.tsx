import * as React from "react";
import Socials from "./socials";

export interface IMainTextProps {}

export default function MainText(props: IMainTextProps) {
  return (
    <div className="order-2 sm:order-1 mt-5 sm:mt-0 text-center sm:text-start grid gap-y-2 slide-right">
      <div>
        <p className="text-white text-3xl font-bold">Muhammet</p>
        <p className="text-white text-3xl font-bold">ÇELİK</p>
      </div>
      <p className="text-gray-500 text-lg">Frontend Developer</p>
      <Socials/>
    </div>
  );
}
