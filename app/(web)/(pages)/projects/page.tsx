import * as React from 'react';
import ProjectsMainUI from '../../ui/pages/projects/projectsMainUI';
import getProjects from '../../lib/data/getProjects';

export interface IProjectsProps {
}

export default async function Projects (props: IProjectsProps) {

    const projects = await getProjects();

  return (
    <div className="pt-16">
      <ProjectsMainUI projects={projects}/>
    </div>
  );
}
