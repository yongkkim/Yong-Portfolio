"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypingEffect({
  text,
  speed = 100,
  delay = 0,
  section = "home",
  fadeInDuration = 0,
  showCursor = true,
  title = true,
  body = false,
}: {
  text: string;
  speed?: number;
  delay?: number;
  section?: string;
  fadeInDuration?: number;
  showCursor?: boolean;
  title?: boolean;
  body?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(showCursor);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < text.length) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible, speed, text]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay + fadeInDuration);

    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (
      isCursorVisible &&
      (!title || body) &&
      (section === "skills" || section == "projects")
    ) {
      const cursorFadeOut = setTimeout(() => {
        setIsCursorVisible(false);
      }, delay + (section === "skills" ? 1500 : 3200));
      return () => clearTimeout(cursorFadeOut);
    }
  }, [isCursorVisible]);

  return (
    <motion.span
      className="flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }} // You can sync this with EmergingEffect if needed
    >
      <h1
        className={clsx(
          "text-white tracking-[-1px]",
          section === "home" && "stroke-text-md",
          "max-md:text-2xl stroke-text-sm",
          (section === "projects" || section === "skills") && body
            ? "md:text-lg max-md:text-base"
            : "text-3xl max-[475px]:text-xl"
        )}
      >
        {text.slice(0, index)}
      </h1>
      {isCursorVisible && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className={clsx(
            "text-white ml-1",
            "max-md:text-2xl",
            (section === "projects" || section === "skills") && body
              ? "md:text-lg max-md:text-base"
              : "text-3xl max-[475px]:leading-[1.5rem]"
          )}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
}
