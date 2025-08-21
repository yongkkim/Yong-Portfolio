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
import LineEffect from "@/components/LineEffect/LineEffect";
import ProjectDescTemplate from "@/components/Template/ProjectDescTemplate";

interface contentObject {
  company?: string;
  position?: string;
  duration?: string;
  logo?: string;
  techStack?: Array<string>;
  description: Array<string>;
  bgColor?: string;
}

export default function ClientProject() {
  const { isVisibleSections, isMobile, popupContent, setSelectedContent } =
    useStore();
  const [isMobileView, setIsMobileView] = useState(false);
  const isVisible = isVisibleSections["projects"];

  useEffect(() => {
    const updateExpView = () => {
      setIsMobileView(window.innerWidth < 600);
    };

    updateExpView();
    window.addEventListener("resize", updateExpView);
    return () => window.removeEventListener("resize", updateExpView);
  }, []);

  const { toggleIsClicked, clickedSection } = useStore();
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  const handleClick = (content: contentObject) => {
    toggleIsClicked("projects");
    setSelectedContent(content);
  };

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
              section="projects"
              delay={1500}
              text={"MY PROJECTS: IDEAS IN ACTION"}
              speed={70}
            />
          </div>
          <EmergingEffect delay={1}>
            <div
              className={clsx(
                "flex items-center justify-center w-full h-[300px] mt-[150px] overflow-hidden",
                "max-lg:mt-[200px] max-[425px]:h-auto"
              )}
            >
              <div
                className={clsx(
                  "flex gap-4 h-full",
                  "min-[425px]:w-[80%] max-[425px]:flex-col"
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
                      "relative w-[250px] h-full bg-white p-2 flex flex-col items-center rounded-[20px] justify-start"
                    )}
                  >
                    <motion.div
                      transition={{ duration: 0.3 }}
                      className="flex justify-center bg-white w-full h-full relative"
                    >
                      <img className="rounded-[20px]" src={proj.image} />
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
                          className={clsx(
                            "absolute inset-0 z-0 rounded-[20px] flex flex-col text-[14px] text-center text-white",
                            "max-[425px]:mt-0 pt-[10px]"
                          )}
                        >
                          <span
                            className={clsx(
                              "pb-[5px] mb-[15px] text-[18px]",
                              "max-[425px]:mb-0"
                            )}
                          >
                            <b>{proj.name}</b>
                          </span>
                          <span
                            className="p-[10px] cursor-pointer"
                            onClick={() => {
                              handleClick({
                                techStack: proj.menu.techStack,
                                description: proj.menu.description,
                              });
                            }}
                          >
                            <LineEffect delay={0} paddingBottom="5px">
                              Descriptions
                            </LineEffect>
                          </span>
                          <span className="p-[10px] cursor-pointer">
                            <LineEffect delay={0} paddingBottom="5px">
                              Video
                            </LineEffect>
                          </span>
                          <a
                            href={proj.menu.repo}
                            target="_blank"
                            className="p-[10px] cursor-pointer"
                          >
                            <LineEffect delay={0} paddingBottom="5px">
                              Github
                            </LineEffect>
                          </a>
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            <AnimatePresence>
              {clickedSection === "projects" && (
                <Popup Template={ProjectDescTemplate} />
              )}
            </AnimatePresence>
          </EmergingEffect>
        </>
      )}
    </div>
  );
}
