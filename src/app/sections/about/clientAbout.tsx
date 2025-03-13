"use client";

import { useStore } from "@/store/useStore";
import Menu from "@/components/Menu/Menu";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import { motion } from "framer-motion";
import Emergingffect from "@/components/EmergingEffect/EmergingEffect";
import TwinkleCircle from "@/components/TwinkleCircle/TwinkleCircle";
import { aboutInto } from "@/constants/constants";
import { useState } from "react";

interface lineSegment {
  type: string;
  length: number;
  x: number;
  y: number;
  angle: number;
  isHoverable: boolean;
  about: number;
  isClicked: boolean;
}

export default function ClientAbout() {
  const { isClicked, clickedIndex, toggleIsClicked, isVisibleSections } =
    useStore();
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
      about: 3,
      isClicked: false,
    }, // Third straight
    {
      type: "diagonal",
      length: 100,
      x: 214,
      y: 136,
      angle: -45,
      isHoverable: false,
    }, // Third diagonal
    {
      type: "straight",
      length: 100,
      x: 63,
      y: -20,
      angle: 0,
      isHoverable: true,
      about: 2,
      isClicked: false,
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
      about: 1,
      isClicked: false,
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
            <TypingEffect
              delay={1500}
              text={"ABOUT ME: A BULLISH TREND IN MY LIFE"}
              speed={80}
            />
          </div>
          <Emergingffect isPopup={true} delay={1}>
            <motion.div
              initial={{ left: "25%" }}
              animate={{ left: isClicked ? "100px" : "25%" }}
              transition={{ duration: 0.5 }}
              className="absolute flex justify-center items-center min-h-[inherit] pb-[45px]"
            >
              {lineSegments.map((line, index) => (
                <motion.div
                  key={index}
                  className="relative w-[100px] border-white border-[1px] z-0 shadow-[0_0_6px_3px_rgba(0,143,17,0.6)]"
                  style={{
                    transform: `rotate(${line.angle}deg) translate(${line.x}px, ${line.y}px)`,
                  }}
                  onClick={() =>
                    line.about &&
                    toggleIsClicked(true, index, aboutInto[line.about - 1])
                  }
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
                    <TwinkleCircle
                      label={aboutInto[line.about - 1].label}
                      isClicked={clickedIndex === index}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </Emergingffect>
        </>
      )}
    </div>
  );
}
