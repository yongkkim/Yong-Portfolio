import { useStore } from "@/store/useStore";
import { experience } from "@/constants/constants";
import { AnimatePresence } from "framer-motion";
import Popup from "@/components/Popup/Popup";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ExperienceTemplate from "../ExperienceTemplate/ExperienceTemplate";

interface expObject {
  company: string;
  position: string;
  duration: string;
  logo: string;
  description: Array<string>;
}

export default function MobileExperienceCard() {
  const { toggleIsClicked, clickedSection, setSelectedExp, selectedExp } =
    useStore();
  const [hoveredIndex, setHoveredIndex] = useState<number>();

  const handleClick = (exp: expObject) => {
    toggleIsClicked("career");
    setSelectedExp(exp);
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-center w-[80%] mt-[150px] overflow-hidden",
        "max-lg:mt-[200px]"
      )}
    >
      <div className={clsx("flex flex-col gap-4 h-full")}>
        {experience.map((exp, index) => (
          <div
            key={exp.company}
            onMouseEnter={() => {
              setHoveredIndex(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(index);
            }}
            onClick={() => {
              handleClick(exp);
            }}
            className={clsx(
              "h-full bg-[rgba(111,190,169,0.77)] p-4 flex items-center rounded-[20px] justify-start cursor-pointer"
            )}
          >
            <div className="flex p-1 justify-center h-1/2 bg-[rgb(144,212,185)] rounded-[20px]">
              <img src={exp.logo} className="w-[80px] rounded-full" />
            </div>
            <div className="flex w-full justify-center">
              <div className="flex flex-col w-2/3 text-[14px] text-center text-white">
                <span>
                  <b>{exp.company}</b>
                </span>
                <span>
                  <i>{exp.position}</i>
                </span>
                <span>
                  <i>{exp.duration}</i>
                </span>
              </div>
            </div>
          </div>
        ))}
        {clickedSection === "career" && (
          <Popup section="career" template={true} />
        )}
      </div>
    </div>
  );
}
