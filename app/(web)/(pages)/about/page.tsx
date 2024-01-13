import * as React from "react";
import AboutMain from "@/app/(web)/ui/pages/about/aboutMain";
import { Metadata } from "next/types";
import Footer from "../../ui/footer/footer";

export interface IAboutProps {}

const metaTitle = "About";
const metaDescription =
  "This is the web page containing the about information of Frontend Developer Muhammet ÇELİK.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
  },
};

export default function About(props: IAboutProps) {
  return (
    <div className="pt-16 sm:pt-0">
      <AboutMain />
      <Footer/>
    </div>
  );
}
