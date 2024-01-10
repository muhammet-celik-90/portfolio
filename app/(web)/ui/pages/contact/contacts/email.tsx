import * as React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { personalInformation } from "@/app/(web)/lib/getPersonal";

export interface IEmailProps {}

export default function Email(props: IEmailProps) {
  return (
    <div>
      <a
        className="flex flex-row items-center btn-link"
        href={`mailto:${personalInformation.email}`}
        target="_blank"
      >
        <MdOutlineEmail
          style={{ fontSize: "2rem" }}
          className="mr-3"
        />
        Send E-mail
      </a>
    </div>
  );
}
