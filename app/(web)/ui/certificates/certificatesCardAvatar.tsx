import * as React from "react";

export interface ICertificateCardsAvatarProps {
    image: string;
    label: string;
}

export default function CertificateCardsAvatar(
  {image, label}: ICertificateCardsAvatarProps
) {
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={image} alt={label} />
        </div>
      </div>
    </div>
  );
}
