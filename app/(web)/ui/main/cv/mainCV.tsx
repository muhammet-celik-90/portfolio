import * as React from "react";
import { FiDownloadCloud } from "react-icons/fi";
import WAButton from "./whatsapp";
import CVButton from "./cv";

export interface IMainCVProps {}

export default function MainCV(props: IMainCVProps) {
  return (
    <div className="order-3 mt-5 sm:mt-0 grid gap-3 slide-left">
      <WAButton/>
      <CVButton/>
    </div>
  );
}
