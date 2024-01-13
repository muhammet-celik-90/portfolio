"use client";

import * as React from "react";
import SectionTitle from "../../components/sectionTitle";
import CertificatesCard from "./certificatesCard";
import { certificates } from "../../lib/data/getCertificates";
import SeeMoreButton from "./seeMoreButton";

export interface ICertificatesMainProps {}

export default function CertificatesMain(props: ICertificatesMainProps) {
  const [limit, setLimit] = React.useState(3);
  const [open,setOpen] = React.useState(false)

  const handleClick = () => {
    if(limit === 3) {
      setLimit(certificates.length)
    }else {
      setLimit(3)
    }
    setOpen(!open)
  }

  return (
    <div className="h-full bg-neutral-900 p-5">
      <SectionTitle>My Certificates</SectionTitle>
      <div 
        className="h-full flex flex-row flex-wrap gap-2 items-center justify-center">
        {certificates.slice(0, limit).map((certificate, index) => (
          <CertificatesCard key={index} certificate={certificate} />
        ))}
      </div>
      <SeeMoreButton handleClick={handleClick} open={open}/>
    </div>
  );
}
