import * as React from "react";

export interface ICertificateCardsAvatarProps {
    image: string;
}

export default function CertificateCardsAvatar(
  {image}: ICertificateCardsAvatarProps
) {
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}
