"use client";

import LineEffect from "@/components/LineEffect/LineEffect";
import { motion } from "framer-motion";
import { useState, useEffect, useLayoutEffect } from "react";
import { useStore } from "@/store/useStore";
import clsx from "clsx";

export default function Menu({
  direction = "col", //col or row
  size = "",
  delay = 4,
}: {
  direction?: string;
  size?: string;
  delay?: number;
}) {
  const {
    sectionIndex,
    setSectionIndex,
    isMobileClicked,
    setIsMobileClicked,
    isMobile,
  } = useStore();
  const [flexDirection, setFlexDirection] = useState<string>(
    direction || "flex-col"
  );
  const [menuSize, setMenuSize] = useState<string>(size);
  const [menuBG, setMenuBG] = useState<string>("menu-background");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setMenuSize(size !== "" ? `w-[${size}%]` : "");
  }, []);

  useEffect(() => {
    setCurrentIndex(sectionIndex);
  }, [sectionIndex]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (isMobileClicked) {
        setFlexDirection("flex-col");
        setMenuBG("mobile-menu-background");
      } else if (width < 768) {
        setFlexDirection("flex-row");
      } else {
        setFlexDirection(direction === "col" ? "flex-col" : "");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileClicked, direction]);

  const handleSectionClick = (index: number, id: string) => {
    setSectionIndex(() => index);
    scrollToSection(id);
    if (isMobile) {
      setIsMobileClicked();
    }
  };

  const handleLineDelay = () => {
    return isMobileClicked ? 0 : 1;
  };
  return (
    <nav className={`flex flex-col items-center ${menuSize}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: delay }}
        className={`flex ${flexDirection} gap-10 w-full h-full z-[5] p-[15px] rounded-[10px] ${menuBG} max-md:gap-[1.5rem] max-[475px]:gap-[1rem]`}
      >
        <button
          onClick={() => handleSectionClick(0, "home")}
          className={clsx("link")}
        >
          <LineEffect
            delay={handleLineDelay()}
            isCurrentPage={sectionIndex === 0}
          >
            Home
          </LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(1, "about")}
          className={clsx("link")}
        >
          <LineEffect
            delay={handleLineDelay()}
            isCurrentPage={sectionIndex === 1}
          >
            About
          </LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(2, "career")}
          className={clsx("link")}
        >
          <LineEffect
            delay={handleLineDelay()}
            isCurrentPage={sectionIndex === 2}
          >
            Career
          </LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(3, "projects")}
          className={clsx("link")}
        >
          <LineEffect
            delay={handleLineDelay()}
            isCurrentPage={sectionIndex === 3}
          >
            Projects
          </LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(4, "skills")}
          className={clsx("link")}
        >
          <LineEffect
            delay={handleLineDelay()}
            isCurrentPage={sectionIndex === 4}
          >
            Skills
          </LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(5, "contact")}
          className={clsx("link")}
        >
          <LineEffect
            delay={handleLineDelay()}
            isCurrentPage={sectionIndex === 5}
          >
            Contact
          </LineEffect>
        </button>
      </motion.div>
    </nav>
  );
}
