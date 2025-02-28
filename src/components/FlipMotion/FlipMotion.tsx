"use client";
import { motion } from "framer-motion";

export default function FlipMotion({
  style,
  imgSrc,
  imgAlt,
  imgText,
  handleClick,
}: {
  style: string;
  imgSrc: string;
  imgAlt: string;
  imgText: string;
  handleClick: (value: boolean) => void;
}) {
  return (
    <motion.div
      className={`${style} relative`}
      style={{ perspective: 1000 }}
      onClick={() => handleClick(true)}
    >
      <motion.div
        className="w-full h-full relative cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
        }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* FRONT SIDE (Image) */}
        <motion.img
          src={imgSrc}
          alt={imgAlt}
          className="absolute inset-0 w-full h-full object-cover rounded-[20%]"
          style={{
            backfaceVisibility: "hidden",
          }}
        />

        {/* BACK SIDE (Black Background) */}
        <motion.div
          className="flex justify-center items-center absolute inset-0 bg-white rounded-[20%] text-[17px]"
          style={{
            transform: "rotateY(180deg)", // Ensure it's the back side
            backfaceVisibility: "hidden",
          }}
        >
          {imgText}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
