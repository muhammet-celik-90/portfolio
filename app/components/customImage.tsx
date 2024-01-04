import * as React from 'react';
import Image from 'next/image';

export interface ICustomImageProps {
    src: any;
    alt: string;
}

export default function CustomImage ({src, alt}: ICustomImageProps) {
  return (
    <div>
      <Image src={src} alt={alt} style={{width: 'inherit', height: 'auto'}} />
    </div>
  );
}
