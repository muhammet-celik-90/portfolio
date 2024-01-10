import * as React from "react";
import Whatsapp from "./contacts/whatsapp";
import Email from "./contacts/email";
import Socials from "../../main/text/socials";
import Phone from "./contacts/phone";

export interface IContactContentUIProps {}

export default function ContactContentUI(props: IContactContentUIProps) {
  return (
    <div className="py-10 px-5 flex flex-col gap-y-5">
      <Phone />
      <Whatsapp />
      <Email />
      <Socials />
    </div>
  );
}
