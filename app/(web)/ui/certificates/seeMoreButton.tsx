'use client'

import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export interface ISeeMoreButtonProps {
  handleClick: any;
  open: boolean;
}

export default function SeeMoreButton({ handleClick, open }: ISeeMoreButtonProps) {

    
  return (
    <div className="flex flex-row justify-center my-3">
      <button className="btn btn-primary" onClick={handleClick}>
        {open === true ? <IoIosArrowUp /> : <IoIosArrowDown />}
        {open === true ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
}
