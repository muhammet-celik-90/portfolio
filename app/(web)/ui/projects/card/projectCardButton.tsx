import * as React from "react";
import Link from "next/link";

export interface IProjectCardButtonProps {
  href: string;
}

export default function ProjectCardButton({ href }: IProjectCardButtonProps) {
  return (
    <div>
      <a href={href} className="btn btn-primary btn-outline min-w-24" target="_blank">Visit
      </a>
    </div>
  );
}
