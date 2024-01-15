import * as React from "react";
import ProjectsMainUI from "../../ui/pages/projects/projectsMainUI";
import getProjects from "../../lib/data/getProjects";
import { Metadata } from "next/types";
import Footer from "../../ui/footer/footer";

export interface IProjectsProps {}

const metaTitle = "Projects";
const metaDescription =
  "This is the web page containing the projects information of Frontend Developer Muhammet ÇELİK.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
  },
};

export default async function Projects(props: IProjectsProps) {
  const projects = await getProjects();

  return (
    <div className="pt-16">
      <ProjectsMainUI projects={projects} />
    </div>
  );
}
