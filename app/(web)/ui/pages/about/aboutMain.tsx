import * as React from "react";
import AboutCover from "./aboutCover";
import AboutContent from "./content/aboutContent";

export interface IAboutMainProps {}

export default function AboutMain(props: IAboutMainProps) {
  return (
    <div>
      <AboutCover />
      <AboutContent />
    </div>
  );
}
