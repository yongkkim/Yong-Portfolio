"use client";

import TypingEffect from "@/components/TypingEffect/TypingEffect";
import { useStore } from "@/store/useStore";
import Menu from "@/components/Menu/Menu";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import clsx from "clsx";
import EmergingEffect from "@/components/EmergingEffect/EmergingEffect";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Popup from "@/components/Popup/Popup";
import { projects } from "@/constants/constants";

interface expObject {
  name: string;
}

export default function ClientProject() {
  const { isVisibleSections, isMobile } = useStore();
  const [isMobileView, setIsMobileView] = useState(false);
  const isVisible = isVisibleSections["project"];

  useEffect(() => {
    const updateExpView = () => {
      setIsMobileView(window.innerWidth < 600);
    };

    updateExpView();
    window.addEventListener("resize", updateExpView);
    return () => window.removeEventListener("resize", updateExpView);
  }, []);

  const { toggleIsClicked, clickedSection, setSelectedExp, selectedExp } =
    useStore();
  const [experience, updateExperience] = useState<Array<expObject>>(projects);
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  const middleIndex = Math.floor(experience.length / 2);

  const rotateLeft = () => {
    updateExperience((prev) => [...prev.slice(1), prev[0]]);
  };

  const rotateRight = () => {
    updateExperience((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  // const handleClick = (exp: expObject) => {
  //   toggleIsClicked("career");
  //   setSelectedExp(exp);
  // };

  return (
    <div className="h-screen flex flex-col w-full items-center relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full opacity-[0.3] z-[-1] object-cover"
      >
        <source src="/projectBG.mp4" type="video/mp4" />
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
              text={"MY PROJECTS: DEVELOPING WITHOUT LIMITS"}
              speed={70}
            />
          </div>
          <EmergingEffect delay={1}>
            <div
              className={clsx(
                "flex items-center justify-center w-full h-[300px] mt-[150px] overflow-hidden",
                "max-lg:mt-[200px]"
              )}
            >
              <div
                className={clsx(
                  "flex gap-4 h-full",
                  "max-lg:w-[80%] max-md:w-[60%]"
                )}
              >
                {projects.map((proj, index) => (
                  <motion.div
                    key={proj.name}
                    transition={{
                      duration: 0.5,
                    }}
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(-1);
                    }}
                    className={clsx(
                      "relative w-[250px] h-full bg-white p-4 flex flex-col items-center rounded-[20px] justify-start"
                    )}
                  >
                    <motion.div
                      transition={{ duration: 0.3 }}
                      className="flex justify-center bg-white w-full h-full relative"
                    >
                      <img src="/work.jpg" />
                    </motion.div>
                    {hoveredIndex === index && (
                      <>
                        <motion.div
                          initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                          animate={{
                            backgroundColor:
                              index === hoveredIndex
                                ? "rgba(0, 0, 0, 0.7)"
                                : "rgba(0, 0, 0, 0)",
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="absolute inset-0 z-0 rounded-[20px]"
                        >
                          <div className="flex flex-col  mt-4 text-[14px] text-center text-white">
                            <span>
                              <b>{proj.name}</b>
                            </span>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </EmergingEffect>
        </>
      )}
    </div>
  );
}
