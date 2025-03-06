"use client";
import { motion } from "framer-motion";

export default function LineEffect({
  children,
  delay = 4,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative w-full h-[25px] group"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: delay }}
    >
      <span className="text-white transition-color duration-300 ease-in-out group-hover:text-shadow-green">
        {children}
      </span>
      <span className="absolute left-0 bottom-0 h-0.5 bg-white w-full scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
    </motion.div>
  );
}
