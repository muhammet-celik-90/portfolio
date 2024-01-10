import * as React from "react";
import ProjectsCoverUI from "./projectsCoverUI";
import ProjectsContentUI from "./projectsContentUI";

export interface IProjectsMainUIProps {
    projects: any;
}

export default function ProjectsMainUI({projects}: IProjectsMainUIProps) {
  return (
    <div>
      <ProjectsCoverUI />
      <ProjectsContentUI projects={projects}/>
    </div>
  );
}
