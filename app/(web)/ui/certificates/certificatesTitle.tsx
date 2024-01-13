import * as React from 'react';

export interface ICertificatesTitleProps {
    children?: React.ReactNode;
}

export default function CertificatesTitle ({children}: ICertificatesTitleProps) {
  return (
    <div className='font-bold text-2xl'>
      {children}
    </div>
  );
}
