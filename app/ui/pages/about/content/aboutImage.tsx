import * as React from 'react';
import image from '@/public/illustrations/about.svg'
import CustomImage from '@/app/components/customImage';

export interface IAboutImageProps {
}

export default function AboutImage (props: IAboutImageProps) {
  return (
    <div>
      {/* <Image src={image} alt='about-page-image' style={{width: 'inherit', height: 'auto'}} /> */}
      <CustomImage src={image} alt='about-page-image'/>
    </div>
  );
}
