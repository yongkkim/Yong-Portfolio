"use client";

import { useStore } from "@/store/useStore";
import { AnimatePresence, motion } from "framer-motion";
import EmergingEffect from "@/components/EmergingEffect/EmergingEffect";
import CircleButton from "@/components/CircleButton/CircleButton";
import Popup from "@/components/Popup/Popup";
import { aboutInto } from "@/constants/constants";
import { lineSegments } from "@/constants/constants";
import { useState, useEffect } from "react";

interface LineProperties {
  scale: number;
  translateX: number;
}

interface LineSegmentsProp {
  type: string;
  length: number;
  x: number;
  y: number;
  angle: number;
  isHoverable?: boolean;
  about: number;
  isClicked?: boolean;
}

export default function ClientAbout() {
  const {
    clickedSection,
    clickedIndex,
    toggleIsClicked,
    popupContent,
    fullScreenPopup,
  } = useStore();

  const [lineProperties, setLineProperties] = useState<LineProperties>({
    scale: 1,
    translateX: -25,
  });

  const handleClick = (index: number, line: LineSegmentsProp) => {
    toggleIsClicked("about", aboutInto[line.about - 1].text, index);
  };

  useEffect(() => {
    const updateScale = () => {
      setLineProperties((prev) => ({
        ...prev,
        scale:
          window.innerWidth < 440
            ? 0.55
            : window.innerWidth <= 1024
            ? 0.65
            : window.innerWidth <= 1440
            ? 0.8
            : 1,
        translateX:
          window.innerWidth < 768 ? -5 : window.innerWidth <= 1440 ? -15 : -25,
      }));
    };

    updateScale(); // Set initial scale
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <EmergingEffect delay={1}>
      <motion.div
        initial={{ x: "-25%", scale: lineProperties.scale }}
        animate={{
          x:
            clickedSection === "about" && !fullScreenPopup
              ? `${lineProperties.translateX - 10}%`
              : `${lineProperties.translateX}%`,
          scale: lineProperties.scale,
        }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 flex justify-center items-center pb-[45px] z-[1]"
      >
        {lineSegments.map((line, index) => (
          <motion.div
            key={index}
            className="relative w-[100px] border-white border-[1px] z-0 shadow-[0_0_6px_3px_rgba(0,143,17,0.6)]"
            style={{
              transform: `rotate(${line.angle}deg) translate(${line.x}px, ${line.y}px)`,
            }}
          >
            {index === 0 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex">
                <div
                  className="w-[30px] border-white border-t-[2px] border-r-[2px] shadow-[0_0_6px_3px_rgba(0,143,17,0.6)]"
                  style={{
                    transform: "rotate(135deg) translate(-18px, -33px)",
                  }}
                ></div>
                <div
                  className="w-[30px] border-white border-b-[2px] border-r-[2px] shadow-[0_0_6px_3px_rgba(0,143,17,0.6)]"
                  style={{
                    transform: "rotate(-135deg) translate(3px, 12px)",
                  }}
                ></div>
              </div>
            )}
            {line.isHoverable && line.about && (
              <CircleButton
                label={aboutInto[line.about - 1].label}
                isClicked={clickedIndex === index}
                handleClick={() => handleClick(index, line)}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        {clickedSection === "about" && (
          <Popup key="about-popup" text={popupContent}></Popup>
        )}
      </AnimatePresence>
    </EmergingEffect>
  );
}
