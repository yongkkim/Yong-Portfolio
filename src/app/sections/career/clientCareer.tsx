"use client";

import TypingEffect from "@/components/TypingEffect/TypingEffect";
import { useStore } from "@/store/useStore";
import Menu from "@/components/Menu/Menu";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import clsx from "clsx";
import EmergingEffect from "@/components/EmergingEffect/EmergingEffect";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import { useEffect, useState } from "react";
import MobileExperienceCard from "@/components/MobileExperienceCard/MobileExperienceCard";

export default function ClientCareer() {
  const { isVisibleSections, isMobile } = useStore();
  const [isMobileView, setIsMobileView] = useState(false);
  const isVisible = isVisibleSections["career"];

  useEffect(() => {
    const updateExpView = () => {
      setIsMobileView(window.innerWidth < 600);
    };

    updateExpView();
    window.addEventListener("resize", updateExpView);
    return () => window.removeEventListener("resize", updateExpView);
  }, []);

  return (
    <div className="h-screen flex flex-col w-full items-center relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full opacity-[0.3] z-[-1] object-cover"
      >
        <source src="/careerBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      {isVisible && (
        <>
          <div className="max-md:h-auto max-md:absolute max-md:top-0 max-md:left-0 max-md:right-0 max-md:m-auto">
            {isMobile ? (
              <MobileMenu />
            ) : (
              <Menu direction="row" size="50" delay={0} />
            )}
          </div>
          <div className="absolute top-[100px] left-[100px] max-md:left-0 max-md:right-0 max-md:flex max-md:justify-center">
            <TypingEffect
              section="career"
              delay={1500}
              text={"MY CAREER: DRIVEN BY GROWTH"}
              speed={70}
            />
          </div>
          <EmergingEffect delay={1}>
            {isMobileView ? <MobileExperienceCard /> : <ExperienceCard />}
          </EmergingEffect>
        </>
      )}
    </div>
  );
}
