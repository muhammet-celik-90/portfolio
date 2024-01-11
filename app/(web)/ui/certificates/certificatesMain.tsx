import * as React from "react";
import SectionTitle from "../../components/sectionTitle";
import CertificatesCard from "./certificatesCard";
import { certificates } from "../../lib/data/getCertificates";

export interface ICertificatesMainProps {}

export default function CertificatesMain(props: ICertificatesMainProps) {
  return (
    <div className="sm:h-[35rem] h-full bg-neutral-900 p-5">
      <SectionTitle>My Certificates</SectionTitle>
      <div className="sm:h-[27rem] h-full flex flex-row flex-wrap gap-3 items-center justify-center">
        {certificates.map((certificate, index) => (
          <CertificatesCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}
