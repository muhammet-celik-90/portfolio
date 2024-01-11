import * as React from "react";

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
        <div className="glass max-w-48 w-48 my-3 rounded-xl p-2">
          <h2 className="card-title text-black text-3xl font-bold">
            {certificate.label}
          </h2>
          <p className="text-black font-semibold">{certificate.description}</p>
        </div>
        <a href={certificate.href} target="_blank" className="btn min-w-20">
          See
        </a>
      </div>
    </div>
  );
}
