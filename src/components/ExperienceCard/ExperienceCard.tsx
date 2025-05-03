import { useStore } from "@/store/useStore";
import { experience as experienceData } from "@/constants/constants";
import { AnimatePresence, motion } from "framer-motion";
import Arrow from "@/components/Arrow/Arrow";
import Popup from "@/components/Popup/Popup";
import { useState } from "react";
import clsx from "clsx";

interface expObject {
  company: string;
  position: string;
  duration: string;
  logo: string;
  description: Array<string>;
}

export default function ExperienceCard() {
  const { toggleIsClicked, clickedSection, setSelectedExp, selectedExp } =
    useStore();
  const [experience, updateExperience] =
    useState<Array<expObject>>(experienceData);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const middleIndex = Math.floor(experience.length / 2);

  const rotateLeft = () => {
    updateExperience((prev) => [...prev.slice(1), prev[0]]);
  };

  const rotateRight = () => {
    updateExperience((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  const handleClick = (exp: expObject) => {
    toggleIsClicked("career");
    setSelectedExp(exp);
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-center w-full h-[300px] mt-[150px] overflow-hidden",
        "max-lg:mt-[200px]"
      )}
    >
      <button className="w-[30px] h-[30px] cursor-pointer" onClick={rotateLeft}>
        <Arrow />
      </button>

      <div
        className={clsx("flex gap-4 h-full", "max-lg:w-[80%] max-md:w-[60%]")}
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ scale: 0.7, opacity: 0.7 }}
            animate={{
              scale: index === middleIndex ? 1 : 0.7,
              opacity: index === middleIndex ? 1 : 0.7,
              backgroundColor:
                index === middleIndex && isHovered
                  ? "rgba(18, 79, 125, 0.5)"
                  : "rgba(77, 120, 127, 0.9)",
            }}
            transition={{
              duration: index === middleIndex ? 0.5 : 0,
            }}
            onMouseEnter={() => {
              if (index === middleIndex) setIsHovered(true);
            }}
            onMouseLeave={() => {
              if (index === middleIndex) setIsHovered(false);
            }}
            onClick={() => {
              index === middleIndex ? handleClick(exp) : {};
            }}
            className={clsx(
              "relative w-[250px] h-full bg-[rgba(111,190,169,0.77)] p-4 flex flex-col items-center rounded-[20px] justify-start",
              index === middleIndex && "cursor-pointer"
            )}
          >
            <motion.div
              animate={index === middleIndex && isHovered ? { scale: 1.1 } : {}}
              transition={{ duration: 0.3 }}
              className="flex justify-center w-full h-1/2 relative bg-white rounded-[20px]"
              style={{ clipPath: "ellipse(100% 90% at 50% 0%)" }}
            >
              <img
                src={exp.logo}
                className="absolute w-[80px] top-[14px] rounded-full"
              />
            </motion.div>
            <motion.div
              animate={index === middleIndex && isHovered ? { scale: 1.1 } : {}}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <div className="flex flex-col text-[14px] text-center text-white">
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
            </motion.div>
          </motion.div>
        ))}
        <AnimatePresence mode="wait">
          {clickedSection === "career" && (
            <Popup section="career" template={true} />
          )}
        </AnimatePresence>
      </div>

      <button
        className="w-[30px] h-[30px] cursor-pointer"
        onClick={rotateRight}
      >
        <Arrow direction="right" />
      </button>
    </div>
  );
}
