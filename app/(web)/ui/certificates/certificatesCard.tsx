import * as React from "react";
import CertificatesCardButton from "./certificatesCardButton";
import CertificatesCardText from "./certificatesCardText";

export interface ICertificatesCardProps {
  certificate: {
    label: string;
    description: string;
    image: string;
    href: string;
  };
}

export default function CertificatesCard({
  certificate,
}: ICertificatesCardProps) {
  return (
    <div
      className="w-96 h-72 bg-primary rounded-xl"
      style={{
        backgroundImage: `url("${certificate.image}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 350px",
        backgroundPosition: "center center",
      }}
    >
      <div className="bg-neutral-900 opacity-30 h-full"></div>
      <div className="relative z-[9] -top-2/3 left-2 h-40 flex flex-col justify-around items-start">
        <CertificatesCardText label={certificate.label} description={certificate.description}/>
        <CertificatesCardButton href={certificate.href}/>
      </div>
    </div>
  );
}
