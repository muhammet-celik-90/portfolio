import * as React from "react";
import CertificatesCardButton from "./certificatesCardButton";
import CertificatesCardAvatar from "./certificatesCardAvatar";
import CertificatesTitle from "./certificatesTitle";
import CertificatesText from "./certificatesText";

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
    <div className="card w-96 bg-neutral-800 p-3 flex flex-row gap-3">
      <CertificatesCardAvatar image={certificate.image} label={certificate.label}/>
      <div className="flex flex-col justify-center">
        <CertificatesTitle>{certificate.label}</CertificatesTitle>
        <CertificatesText>{certificate.description}</CertificatesText>
        <CertificatesCardButton href={certificate.href}/>
      </div>
    </div>
  );
}
