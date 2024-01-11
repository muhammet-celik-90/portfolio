import * as React from "react";
import SectionTitle from "../../components/sectionTitle";
import CertificatesCard from "./certificatesCard";
import { certificates } from "../../lib/data/getCertificates";

export interface ICertificatesMainProps {}

export default function CertificatesMain(props: ICertificatesMainProps) {
  return (
    <div className="h-[35rem] bg-neutral-800 p-5">
      <SectionTitle>My Certificates</SectionTitle>
      <div className="h-[27rem] flex flex-row flex-wrap gap-3 items-center justify-center">
        {certificates.map((certificate, index) => (
          <CertificatesCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}
