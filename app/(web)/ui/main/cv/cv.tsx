import * as React from "react";
import { FiDownloadCloud } from "react-icons/fi";

export interface ICVButtonProps {}

export default function CVButton(props: ICVButtonProps) {
  return (
    <a href="/pdf/cv.pdf" download className="flex flex-row items-center gap-2 btn btn-outline">
      <FiDownloadCloud style={{ fontSize: "1.5rem" }} />
      <p>Download CV</p>
    </a>
  );
}
