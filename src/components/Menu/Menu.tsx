"use client";

import LineEffect from "@/components/LineEffect/LineEffect";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  const { setSectionIndex } = useStore();
  const [flexDirection, setFlexDirection] = useState(direction);
  const [menuSize, setMenuSize] = useState(size);
  const [menuDelay, setDelay] = useState(delay);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setDelay(delay);
    setFlexDirection(direction === "col" ? "flex-col" : "");
    setMenuSize(size !== "" ? `w-[${size}%]` : "");
  }, []);

  const handleSectionClick = (index: number, id: string) => {
    setSectionIndex(() => index);
    scrollToSection(id);
  };
  return (
    <nav className={`flex flex-col items-center h-2/3 ${menuSize}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: menuDelay }}
        className={`flex ${flexDirection} gap-10 w-full h-full bg-white/5 p-[15px] rounded-[10px] bg-[radial-gradient(#008f11_10%,transparent_10%)] bg-[size:10px_10px]`}
      >
        <button onClick={() => handleSectionClick(0, "home")} className="link">
          <LineEffect delay={1}>Home</LineEffect>
        </button>
        <button onClick={() => handleSectionClick(1, "about")} className="link">
          <LineEffect delay={1}>About</LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(2, "career")}
          className="link"
        >
          <LineEffect delay={1}>Career</LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(3, "projects")}
          className="link"
        >
          <LineEffect delay={1}>Projects</LineEffect>
        </button>
        <button
          onClick={() => handleSectionClick(4, "contact")}
          className="link"
        >
          <LineEffect delay={1}>Contact</LineEffect>
        </button>
      </motion.div>
    </nav>
  );
}
