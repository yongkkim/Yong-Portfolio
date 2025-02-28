"use client";
import { motion } from "framer-motion";

export default function BorderEffect({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="relative w-full h-[25px] group"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <span className="text-black transition-color duration-300 ease-in-out group-hover:text-blue-500">
        {children}
      </span>
      <span className="absolute left-0 bottom-0 h-0.5 bg-blue-500 w-full scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
    </motion.div>
  );
}
