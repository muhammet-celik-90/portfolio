"use client";

import * as React from "react";
import ProjectCardImage from "./projectCardImage";
import ProjectCardTitle from "./projectCardTitle";
import ProjectCardBadges from "./projectCardBadges";
import ProjectCardButton from "./projectCardButton";

export interface IProjectCardProps {
  project: any;
}

export default function ProjectCard({project}: IProjectCardProps) {

  return (
    <div
      className="card card-compact w-96 bg-base-200 shadow-xl fade-in"
    >
      <figure>
        <ProjectCardImage image={project.image} />
      </figure>
      <div className="card-body">
        <ProjectCardTitle>{project.title}</ProjectCardTitle>
        <ProjectCardBadges
          keywords={project.keywords}
        />
        <div className="card-actions justify-end">
          <ProjectCardButton href={project.href} />
        </div>
      </div>
    </div>
  );
}
