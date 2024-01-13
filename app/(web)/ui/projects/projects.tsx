"use client";

import SectionTitle from "@/app/(web)/components/sectionTitle";
import * as React from "react";
import ProjectCard from "./card/projectCard";
import Link from "next/link";
import { useScrollPosition } from "../../lib/hooks/useScroll";
import { motion } from "framer-motion";

export interface IProjectsProps {
  selectedProjects: any;
}

export default function Projects({ selectedProjects }: IProjectsProps) {
  const scroll = useScrollPosition();
  return (
    <div className="h-full p-3">
      <SectionTitle>Selected Projects</SectionTitle>
      <div className="flex flex-row justify-center flex-wrap items-center gap-3 h-full">
        {selectedProjects.map((project: any, index: number) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
      <div className="flex flex-row w-full justify-center my-3">
        <Link
          href="/projects"
          className="btn btn-primary text-center w-full max-w-32"
        >
          All Projects
        </Link>
      </div>
    </div>
  );
}
