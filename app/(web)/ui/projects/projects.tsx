import SectionTitle from "@/app/(web)/components/sectionTitle";
import * as React from "react";
import ProjectCard from "./card/projectCard";

export interface IProjectsProps {
  projects: any;
}

export default function Projects({ projects }: IProjectsProps) {
  return (
    <div className="h-full sm:h-[33rem] p-3 sm:p-5">
      <SectionTitle>Selected Projects</SectionTitle>
      <div className="flex flex-row justify-center flex-wrap items-center gap-3">
        {projects.map((project: any, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
