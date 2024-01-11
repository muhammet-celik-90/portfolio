import * as React from "react";

export interface ICertificatesCardTextProps {
    label: string;
    description: string;
}

export default function CertificatesCardText(
  {label, description}: ICertificatesCardTextProps
) {
  return (
    <div className="glass max-w-48 w-48 my-3 rounded-xl p-2">
      <h2 className="card-title text-black text-3xl font-bold">
        {label}
      </h2>
      <p className="text-black font-semibold">{description}</p>
    </div>
  );
}
