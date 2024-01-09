import * as React from 'react';

export interface ISectionTitleProps {
    children?: React.ReactNode;
}

export default function SectionTitle ({children}: ISectionTitleProps) {
  return (
    <div className='my-5 text-center text-3xl font-bold'>
      {children}
    </div>
  );
}
