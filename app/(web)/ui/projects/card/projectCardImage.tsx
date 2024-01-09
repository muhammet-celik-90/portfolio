import * as React from 'react';
import CustomImage from '@/app/(web)/components/customImage';
import { urlFor } from '@/app/(web)/lib/data/getProjects';

export interface IProjectCardImageProps {
  image: any;
}

export default function ProjectCardImage ({image}: IProjectCardImageProps) {
  
  const src = urlFor(image)

  return (
    <div className='w-full h-auto '>
      {/* <CustomImage src={src} alt='project-card-image'/> */}
      <img src={src} alt='project-card-image' style={{width: 'inherit', height: 'auto'}}/>
    </div>
  );
}
