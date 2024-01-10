import * as React from "react";
import { PiPhoneCallLight } from "react-icons/pi";
import { personalInformation } from "@/app/(web)/lib/getPersonal";

export interface IPhoneProps {}

export default function Phone(props: IPhoneProps) {
  return (
    <div>
      <a
        className="flex flex-row items-center btn-link"
        href={`tel:${personalInformation.whatsapp}`}
        target="_blank"
      >
        <PiPhoneCallLight
          style={{ fontSize: "2rem" }}
          className="mr-3"
        />
        Call Me
      </a>
    </div>
  );
}
