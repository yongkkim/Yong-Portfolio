"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypingEffect({
  text,
  speed = 100,
  delay = 0,
}: {
  text: string;
  speed?: number;
  delay?: number;
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
    }, delay); // Delay before starting the typing effect

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <motion.span
      className="flex text-lg font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <h1
        className={`text-white text-5xl max-lg:text-3xl max-md:text-2xl max-[475px]:text-xl tracking-[-1px] stroke-text-lg`}
      >
        {text.slice(0, index)}
      </h1>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        className={`text-white text-5xl max-lg:text-3xl`}
      >
        |
      </motion.span>
    </motion.span>
  );
}
