import * as React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export interface IMenuButtonProps {
    open: boolean;
    handleClick: any;
}

export default function MenuButton({open, handleClick}: IMenuButtonProps) {
  
  return (
    <div onClick={handleClick} className="swap swap-rotate">
      <IoClose
        style={{ fontSize: "1.5rem" }}
        className={twMerge(
          open === false ? "swap-on fill-current" : "swap-off fill-current"
        )}
      />
      <RiMenu3Fill
        style={{ fontSize: "1.5rem" }}
        className={twMerge(open === true && "swap-on fill-current")}
      />
    </div>
  );
}
