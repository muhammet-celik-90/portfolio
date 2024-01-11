import SectionTitle from "@/app/(web)/components/sectionTitle";
import * as React from "react";
import ProjectCard from "./card/projectCard";
import Link from "next/link";

export interface IProjectsProps {
  selectedProjects: any;
}

export default function Projects({ selectedProjects }: IProjectsProps) {
  return (
    <div className="h-full sm:h-[35rem] p-3 sm:p-5">
      <SectionTitle>Selected Projects</SectionTitle>
      <div className="flex flex-row justify-center flex-wrap items-center gap-3">
        {selectedProjects.map((project: any, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="flex flex-row w-full justify-center my-3">
        <Link href="/projects" className="btn btn-primary text-center w-full max-w-32">
          All Projects
        </Link>
      </div>
    </div>
  );
}
