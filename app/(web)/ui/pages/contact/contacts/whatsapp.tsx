import * as React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { personalInformation } from "@/app/(web)/lib/getPersonal";

export interface IWhatsappProps {}

export default function Whatsapp(props: IWhatsappProps) {
  return (
    <div>
      <a
        className="flex flex-row items-center btn-link"
        href={`https://wa.me/${personalInformation.whatsapp}`}
        target="_blank"
      >
        <FaWhatsapp
          style={{ fontSize: "2rem" }}
          className="mr-3"
        />
        Send Message
      </a>
    </div>
  );
}
