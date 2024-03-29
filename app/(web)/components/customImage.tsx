import * as React from "react";
import Image from "next/image";

export interface ICustomImageProps {
  src: any;
  alt: string;
  priority?: boolean;
}

export default function CustomImage({ src, alt, priority }: ICustomImageProps) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        style={{ width: "inherit", height: "auto" }}
        priority={priority ? true : false}
      />
    </div>
  );
}
