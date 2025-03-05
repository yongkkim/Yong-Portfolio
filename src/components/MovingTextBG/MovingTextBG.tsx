"use client";

import { motion } from "framer-motion";

export default function MovingTextBG() {
  return (
    <div className="mt-[30px] overflow-hidden">
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "100%" }}
        transition={{
          repeat: Infinity, // Repeat infinitely
          repeatType: "loop", // Loop the animation
          duration: 12, // Duration of the animation for one full cycle
          ease: "linear", // Use linear easing for continuous movement
        }}
        className="text-white text-sm font-bold whitespace-nowrap"
      >
        <i>
          Node.js Jest Tailwind JavaScript TypeScript Next.js Vue React
          Full-Stack Front-End
        </i>
      </motion.div>
    </div>
  );
}
