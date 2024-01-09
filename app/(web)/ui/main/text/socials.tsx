import * as React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { personalInformation } from "@/app/(web)/lib/getPersonal";

export interface ISocialsProps {}

export default function Socials(props: ISocialsProps) {
  const iconStyle = { fontSize: "1.5rem" };
  const buttonStyle = "btn btn-circle btn-outline hover:bg-primary"
  return (
    <div className="flex flex-row gap-2 justify-center sm:justify-start">
      <a href={personalInformation.linkedin} target="_blank" className={buttonStyle}>
        <FaLinkedinIn style={iconStyle} />
      </a>
      <a href={personalInformation.github} target="_blank" className={buttonStyle}>
        <FaGithub style={iconStyle} />
      </a>
      <a href={personalInformation.instagram} target="_blank" className={buttonStyle}>
        <FaInstagram style={iconStyle} />
      </a>
    </div>
  );
}
