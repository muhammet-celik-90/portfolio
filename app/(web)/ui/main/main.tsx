import * as React from "react";
import Navbar from "../navbar/navbar";
import MainAvatar from "./mainAvatar";
import MainText from "./text/mainText";
import MainCV from "./cv/mainCV";
import Skills from "../skills/skills";
import About from "../about/about";
import Projects from "../projects/projects";

export interface IMainProps {
  selectedProjects: any;
}

export default function Main({selectedProjects}: IMainProps) {
  return (
    <div className="sm:h-screen h-full">
      {/* <Navbar /> */}
      <div className="pt-20 sm:pt-0 flex flex-col sm:flex-row justify-start sm:justify-around items-center h-full py-5 px-2">
        <MainText />
        <MainAvatar />
        <MainCV />
      </div>
      <Skills />
      <About/>
      <Projects selectedProjects={selectedProjects}/>
    </div>
  );
}
