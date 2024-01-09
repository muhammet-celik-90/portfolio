import * as React from "react";

export interface IProjectCardBadgesProps {
  keywords?: string[];
}

export default function ProjectCardBadges({
  keywords,
}: IProjectCardBadgesProps) {
  return (
    <div className="flex flex-row flex-wrap gap-1 h-16 ">
      {keywords?.map((keyword,index) => (
        <div key={index} className="badge badge-ghost badge-outline">{keyword}</div>
      ))}
    </div>
  );
}
