"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypingEffect({
  text,
  speed = 100,
  delay = 0,
  section = "home",
}: {
  text: string;
  speed?: number;
  delay?: number;
  section?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
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
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <motion.span
      className="flex text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <h1
        className={clsx(
          "text-white text-3xl tracking-[-1px] z-[-1]",
          section === "home" ? "stroke-text-lg" : "stroke-text-sm-bigger",
          "max-lg:text-3xl max-md:text-2xl max-[475px]:text-xl"
        )}
      >
        {text.slice(0, index)}
      </h1>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        className={clsx(
          "text-white ml-1 text-2xl",
          "max-lg:text-2xl max-[475px]:leading-[1.5rem]"
        )}
      >
        |
      </motion.span>
    </motion.span>
  );
}
