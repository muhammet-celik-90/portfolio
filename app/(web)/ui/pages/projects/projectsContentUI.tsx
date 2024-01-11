"use client";

import * as React from "react";
import ProjectCard from "../../projects/card/projectCard";
import { motion } from "framer-motion";

const container = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    translateY: 20,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};

export interface IProjectsContentUIProps {
  projects: any;
}

export default function ProjectsContentUI({
  projects,
}: IProjectsContentUIProps) {
  return (
    <motion.div
      className="p-5 flex flex-row flex-wrap justify-center gap-3"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project: any, index: number) => (
        <motion.div key={index} variants={item}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
