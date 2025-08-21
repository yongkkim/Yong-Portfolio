"use client";

import TypingEffect from "@/components/TypingEffect/TypingEffect";
import { useStore } from "@/store/useStore";
import Menu from "@/components/Menu/Menu";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import clsx from "clsx";
import EmergingEffect from "@/components/EmergingEffect/EmergingEffect";
import { useEffect, useState } from "react";
import { skills, skillAreas } from "@/constants/constants";
import React from "react";

export default function ClientSkills() {
  const { isVisibleSections, isMobile, toggleIsClicked } = useStore();
  const [isMobileView, setIsMobileView] = useState(false);
  const isVisible = isVisibleSections["skills"];

  useEffect(() => {
    const updateExpView = () => {
      setIsMobileView(window.innerWidth < 600);
    };

    toggleIsClicked("skills");

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
        <source src="/skills.mp4" type="video/mp4" />
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
              section="skills"
              delay={1500}
              text={"MY SKILLS: MASTER THE STACK"}
              speed={70}
            />
          </div>

          <div
            className={clsx(
              "grid grid-cols-4 w-[75%] mt-[150px] overflow-hidden",
              "max-lg:mt-[200px]"
            )}
          >
            {Object.entries(skills).map(([skillType, skillList], areaIndex) => (
              <div className="flex flex-col items-start" key={skillType}>
                <EmergingEffect delay={4 + areaIndex * 0.5} align="start">
                  <span className="text-white tracking-[-1px] text-3xl stroke-text-lg mb-[10px]">
                    {skillAreas[areaIndex]}
                  </span>
                </EmergingEffect>

                <EmergingEffect delay={4.5 + areaIndex * 0.5} align="start">
                  <div className="flex flex-col">
                    {skillList.map((skill, index) => (
                      <TypingEffect
                        key={`${skillType}-${skill}`}
                        section="skillList"
                        delay={4500 + index * 500}
                        fadeInDuration={500}
                        text={skill}
                        speed={50}
                        showCursor={skillList.length - 1 === index}
                        body={true}
                      />
                    ))}
                  </div>
                </EmergingEffect>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
