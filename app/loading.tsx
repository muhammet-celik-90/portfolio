import * as React from "react";
import logo from "@/public/images/logo.webp";
import Image from "next/image";

export interface ILoadingProps {}

export default function Loading(props: ILoadingProps) {
  return (
    <div className="h-screen flex flex-row items-center justify-center">
      <div className="loader"></div>
      <div className="absolute z-10">
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>
    </div>
  );
}
