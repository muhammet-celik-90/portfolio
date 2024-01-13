import * as React from 'react';

export interface ICertificatesTextProps {
    children?: React.ReactNode;
}

export default function CertificatesText ({children}: ICertificatesTextProps) {
  return (
    <div>
      {children}
    </div>
  );
}
