import * as React from "react";
import AboutImage from "./aboutImage";
import AboutPageText from "./aboutPageText";

export interface IAboutContentProps {}

export default function AboutContent(props: IAboutContentProps) {
  return (
    <div className="p-2 sm:p-8">
      <div className="float-left sm:w-96 w-full my-5">
        <AboutImage />
      </div>
      <div className="p-2 sm:p-5">
        <AboutPageText/>
      </div>
    </div>
  );
}
