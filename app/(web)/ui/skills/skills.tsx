"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { skillsIcons } from "@/app/(web)/lib/getSkillsIcons";
import Image from "next/image";

export interface ISkillsProps {}

export default function Skills(props: ISkillsProps) {
  const [skills, setSkills] = React.useState(skillsIcons);
  return (
    <div className="h-48 bg-neutral-900 flex flex-row items-center p-5 justify-center w-full opacity-60">
      <Swiper
        slidesPerView={3}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 4,
          },
          480: {
            slidesPerView: 6,
          },
          640: {
            slidesPerView: 8,
          },
          1000: {
            slidesPerView: 10,
          },
        }}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill}
              alt="skills-icons"
              width={50}
              height={50}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
