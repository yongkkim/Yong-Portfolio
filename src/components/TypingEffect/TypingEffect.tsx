"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypingEffect({
  text,
  textSize = "text-5xl",
  speed = 100,
  delay = 0,
}: {
  text: string;
  textSize?: string;
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
      transition={{ duration: 0.5, delay: 2 }}
    >
      <h1 className={`text-white ${textSize} tracking-[-1px] stroke-text-lg`}>
        {text.slice(0, index)}
      </h1>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        className={`text-white ${textSize}`}
      >
        |
      </motion.span>
    </motion.span>
  );
}
