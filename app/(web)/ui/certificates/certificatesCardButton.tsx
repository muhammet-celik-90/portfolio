import * as React from "react";

export interface ICertificatesCardButtonProps {
    href: string;
}

export default function CertificatesCardButton(
  {href}: ICertificatesCardButtonProps
) {
  return (
    <a href={href} target="_blank" className="btn-link text-base-content text-start ">
      See
    </a>
  );
}
