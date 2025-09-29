import { useStore } from "@/store/useStore";
import { experience as experienceData } from "@/constants/constants";
import { motion } from "framer-motion";
import Arrow from "@/components/Arrow/Arrow";
import { useState } from "react";
import clsx from "clsx";

interface expObject {
  company: string;
  position: string;
  duration: string;
  logo: string;
  description: Array<string>;
  bgColor: string;
}

export default function ExperienceCard() {
  const { toggleIsClicked, setSelectedContent } = useStore();
  const [experience, updateExperience] = useState<Array<expObject>>([
    experienceData[experienceData.length - 1],
    ...experienceData.slice(0, -1),
  ]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const middleIndex = Math.floor(experience.length / 2);

  const rotateLeft = () => {
    updateExperience((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  const rotateRight = () => {
    updateExperience((prev) => [...prev.slice(1), prev[0]]);
  };

  const handleSelectExp = (exp: expObject) => {
    toggleIsClicked("career");
    setSelectedContent(exp);
  };

  const darkenColor = (rgbString: string) => {
    const rgb = rgbString.match(/\d+/g);
    if (!rgb) return rgbString;

    let [r, g, b] = rgb.map(Number);

    r = Math.max(0, Math.floor(r * (1 - 0.7)));
    g = Math.max(0, Math.floor(g * (1 - 0.7)));
    b = Math.max(0, Math.floor(b * (1 - 0.7)));

    return `rgba(${r}, ${g}, ${b}, 0.9)`;
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
                  ? darkenColor(exp.bgColor)
                  : "rgba(51, 51, 51, 0.9)",
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
              if (index === middleIndex) {
                handleSelectExp(exp);
              }
            }}
            className={clsx(
              "relative w-[250px] h-full bg-[rgba(111,190,169,0.77)] p-4 flex flex-col items-center rounded-[20px] justify-start",
              "bg-[#222831] shadow-[0_4px_12px_rgba(0,0,0,0.5)]",
              index === middleIndex && "cursor-pointer"
            )}
          >
            <motion.div
              animate={
                index === middleIndex && isHovered ? { scale: 1.05 } : {}
              }
              transition={{ duration: 0.3 }}
              className="flex justify-center w-full h-1/2 relative bg-white rounded-[20px]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 70%)" }}
            >
              <img
                src={exp.logo}
                className="absolute w-[80px] top-[14px] rounded-full"
              />
            </motion.div>
            <motion.div
              animate={
                index === middleIndex && isHovered ? { scale: 1.05 } : {}
              }
              transition={{ duration: 0.3 }}
              className="flex w-full"
            >
              <div className="flex flex-col text-[14px] text-white">
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
