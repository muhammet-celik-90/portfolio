import * as React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { personalInformation } from "@/app/lib/getPersonal";

export interface IWAButtonProps {}

export default function WAButton(props: IWAButtonProps) {
  const wa = personalInformation.whatsapp
  return (
    <div className="flex flex-row items-center gap-2 btn btn-neutral">
      <FaWhatsapp style={{ fontSize: "1.5rem" }} />
      <a href={`https://wa.me/${wa}`} target="_blank">Whatsapp</a>
    </div>
  );
}
