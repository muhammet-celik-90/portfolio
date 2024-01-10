import * as React from "react";
import ContactCoverUI from "./contactCoverUI";
import ContactContentUI from "./contactContentUI";

export interface IContactMainUIProps {}

export default function ContactMainUI(props: IContactMainUIProps) {
  return (
    <div>
      <ContactCoverUI />
      <ContactContentUI/>
    </div>
  );
}
