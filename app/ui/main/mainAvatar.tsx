import * as React from "react";
import portfolio from "@/public/images/portfolio.webp";
import CustomImage from "@/app/components/customImage";

export interface IMainAvatarProps {}

export default function MainAvatar(props: IMainAvatarProps) {
  return (
    <div className="w-full sm:w-96 order-1 sm:order-2 slide-top">
      <CustomImage src={portfolio} alt="main-avatar-pic" />
    </div>
  );
}
