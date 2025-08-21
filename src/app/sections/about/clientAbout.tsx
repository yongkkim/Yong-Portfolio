"use client";

import { useStore } from "@/store/useStore";
import Menu from "@/components/Menu/Menu";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import { AnimatePresence, motion } from "framer-motion";
import EmergingEffect from "@/components/EmergingEffect/EmergingEffect";
import TwinkleCircle from "@/components/CircleButton/CircleButton";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import Popup from "@/components/Popup/Popup";
import { aboutInto } from "@/constants/constants";
import { lineSegments } from "@/constants/constants";
import { useState, useEffect } from "react";
import clsx from "clsx";

interface LineProperties {
  scale: number;
  translateX: number;
}

export default function ClientAbout() {
  const {
    clickedSection,
    clickedIndex,
    toggleIsClicked,
    popupContent,
    isVisibleSections,
    fullScreenPopup,
    isMobile,
  } = useStore();

  const isVisible = isVisibleSections["about"];

  const [lineProperties, setLineProperties] = useState<LineProperties>({
    scale: 1,
    translateX: -25,
  });

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
    <div className="h-screen flex flex-col w-full items-center relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full opacity-[0.3] z-[-1] object-cover"
      >
        <source src="/aboutBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isVisible && (
        <>
          <div
            className={clsx(
              "max-md:h-auto max-md:absolute max-md:top-0 max-md:left-0 max-md:right-0 max-md:m-auto"
            )}
          >
            {isMobile ? (
              <MobileMenu />
            ) : (
              <Menu direction="row" size="50" delay={0} />
            )}
          </div>
          <div
            className={clsx(
              "absolute top-[100px] left-[100px]",
              "max-md:left-0 max-md:right-0 max-md:flex max-md:justify-center"
            )}
          >
            <TypingEffect
              section="about"
              delay={1500}
              text={"ABOUT ME: A BULLISH TREND IN MY LIFE"}
              speed={70}
            />
          </div>
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
                    <TwinkleCircle
                      label={aboutInto[line.about - 1].label}
                      isClicked={clickedIndex === index}
                      handleClick={() =>
                        toggleIsClicked(
                          "about",
                          aboutInto[line.about - 1].text,
                          index
                        )
                      }
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
        </>
      )}
    </div>
  );
}
