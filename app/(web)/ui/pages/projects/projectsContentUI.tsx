"use client";

import * as React from "react";
import ProjectCard from "../../projects/card/projectCard";

export interface IProjectsContentUIProps {
  projects: any;
}

export default function ProjectsContentUI({
  projects,
}: IProjectsContentUIProps) {
  return (
    <div
      className="p-5 flex flex-row flex-wrap justify-center gap-3"
    >
      {projects.map((project: any, index: number) => (
          <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
