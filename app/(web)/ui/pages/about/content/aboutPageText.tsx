import * as React from "react";
import { personalInformation } from "@/app/(web)/lib/getPersonal";

export interface IAboutPageTextProps {}

export default function AboutPageText(props: IAboutPageTextProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold">Hello! I am Muhammet &Ccedil;elik,</h2>

      <p>&nbsp;</p>

      <h3>
        a <strong>Frontend Developer</strong> and my passion for the web world
        led me to this exciting field.
      </h3>

      <h3>
        <br />I have been working in this field since <strong>2019</strong>. I
        started writing code with <em>curiosity </em>and <em>enthusiasm</em>.
        The <em>pleasure of solving problems</em>, the{" "}
        <em>existence of ready-to-learn technologies</em> and the{" "}
        <em>need for constant self-improvement</em> led me to this field.
      </h3>

      <h3>
        <br />
        Even though I was working in another industry, doing my own thing, and
        being very successful, I never stopped writing code.{" "}
        <em>Writing code is a passion for me.</em> Because of this passion, I
        decided to continue my career in this field. Because I know that success
        is inevitable as a result of this passion. I also love keeping up with
        what&#39;s new in the technology world and learning new skills.
      </h3>

      <h3>
        <br />
        <strong>As a Frontend Developer</strong>, I aim to keep up with the
        rapidly changing and developing nature of the web world and create
        excellent user experiences. I continue to improve myself with every new
        project and I am happy to contribute to more people interacting in the
        digital world.
      </h3>

      <h3>
        <br />I now continue my career, which I started in Turkey, in Germany. I
        know <strong>Turkish </strong>and <strong>English</strong>, and I am
        currently learning <strong>German</strong>. I also have PHP and MySQL
        knowledge. My goals include learning <strong>Node Js</strong> and{" "}
        <strong>PostgreSql</strong> and working on the backend area.
      </h3>

      <h3>
        <br />
        Don&#39;t hesitate to{" "}
        <a href={`https://wa.me/${personalInformation.whatsapp}`} target="_blank" className="btn-link">contact me</a>
        . I am open to any kind of collaboration or project. Thank you!
      </h3>
    </div>
  );
}
