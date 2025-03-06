"use client";

import { useStore } from "@/store/useStore";
import Menu from "@/components/Menu/Menu";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import { motion } from "framer-motion";
import Emergingffect from "@/components/EmergingEffect/EmergingEffect";
import TwinkleCircle from "@/components/TwinkleCircle/TwinkleCircle";

export default function ClientAbout() {
  const { toggleIsClicked, isVisibleSections } = useStore();
  const isVisible = isVisibleSections["about"];

  const lineSegments = [
    {
      type: "diagonal",
      length: 100,
      x: 540,
      y: 361,
      angle: -45,
      isHoverable: false,
    }, // Fourth diagonal
    {
      type: "straight",
      length: 100,
      x: 452,
      y: -91,
      angle: 0,
      isHoverable: true,
    }, // Third straight
    {
      type: "straight",
      length: 100,
      x: 214,
      y: 136,
      angle: -45,
      isHoverable: false,
    }, // Third diagonal
    {
      type: "diagonal",
      length: 100,
      x: 63,
      y: -20,
      angle: 0,
      isHoverable: true,
    }, // Second straight
    {
      type: "diagonal",
      length: 100,
      x: -110,
      y: -89,
      angle: -45,
      isHoverable: false,
    }, // Second diagonal
    {
      type: "straight",
      length: 100,
      x: -326,
      y: 50,
      angle: 0,
      isHoverable: true,
    }, // First straight
    {
      type: "diagonal",
      length: 100,
      x: -437,
      y: -313,
      angle: -45,
      isHoverable: false,
    }, // First diagonal
  ];

  return (
    // <AnimationEffect isPopup={true}>
    <div className="min-h-screen flex flex-col w-full items-center relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full opacity-[0.4] z-[-1] object-cover"
      >
        <source src="/aboutBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isVisible && (
        <>
          <Menu direction="row" size="50" delay={0} />
          <div className="absolute top-[100px] left-[100px]">
            <TypingEffect delay={1500} text={"ABOUT ME"} speed={150} />
          </div>
          <Emergingffect>
            <div className="flex justify-center items-center min-h-[inherit] pb-[45px]">
              {lineSegments.map((line, index) => (
                <motion.div
                  key={index}
                  className="relative w-[100px] border-white border-[1px] z-0 shadow-[0_0_6px_3px_rgba(0,143,17,0.6)]"
                  style={{
                    transform: `rotate(${line.angle}deg) translate(${line.x}px, ${line.y}px)`,
                  }}
                >
                  {line.isHoverable && <TwinkleCircle />}
                </motion.div>
              ))}
            </div>
          </Emergingffect>
        </>
      )}
    </div>
    // </AnimationEffect>
  );
}
