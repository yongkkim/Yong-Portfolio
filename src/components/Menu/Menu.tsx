"use client";

import LineEffect from "@/components/LineEffect/LineEffect";
import { motion } from "framer-motion";
import { useState, useEffect, useLayoutEffect } from "react";
import { useStore } from "@/store/useStore";

export default function Menu({
  direction = "col", //col or row
  size = "",
  delay = 4,
}: {
  direction?: string;
  size?: string;
  delay?: number;
}) {
  const { setSectionIndex, isMobileClicked, setIsMobileClicked, isMobile } =
    useStore();
  const [flexDirection, setFlexDirection] = useState<string>(
    direction || "flex-col"
  );
  const [menuSize, setMenuSize] = useState<string>(size);
  const [menuDelay, setDelay] = useState<number>(delay);
  const [lineDelay, setLineDelay] = useState<number>(1);
  const [menuBG, setMenuBG] = useState<string>("menu-background");
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setMenuSize(size !== "" ? `w-[${size}%]` : "");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (isMobileClicked) {
        setFlexDirection("flex-col");
        setMenuBG("mobile-menu-background");
        setLineDelay(0);
      } else if (width < 768) {
        setFlexDirection("flex-row");
      } else {
        setFlexDirection(direction === "col" ? "flex-col" : "");
      }
    };

    handleResize(); // Set initial state
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
    <nav className={`flex flex-col items-center h-2/3 ${menuSize}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: menuDelay }}
        className={`flex ${flexDirection} gap-10 w-full h-full p-[15px] rounded-[10px] ${menuBG} max-md:gap-[1.5rem]`}
      >
        <button onClick={() => handleSectionClick(0, "home")} className="link">
          <LineEffect delay={handleLineDelay()}>Home</LineEffect>
        </button>
        <button onClick={() => handleSectionClick(1, "about")} className="link">
          <LineEffect delay={handleLineDelay()}>About</LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(2, "career")}
          className="link"
        >
          <LineEffect delay={handleLineDelay()}>Career</LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(3, "projects")}
          className="link"
        >
          <LineEffect delay={handleLineDelay()}>Projects</LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(4, "contact")}
          className="link"
        >
          <LineEffect delay={handleLineDelay()}>Contact</LineEffect>
        </button>
      </motion.div>
    </nav>
  );
}
