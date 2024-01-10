import * as React from "react";
import Image from "next/image";
import cover from "@/public/covers/contact.webp";

export interface IContactCoverUIProps {}

export default function ContactCoverUI(props: IContactCoverUIProps) {
  return (
    <div className="w-full">
      <Image
        src={cover}
        alt="about-cover"
        style={{ width: "inherit", height: "auto" }}
      />
    </div>
  );
}
