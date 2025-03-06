"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import LineEffect from "@/components/LineEffect/LineEffect";
import Menu from "@/components/Menu/Menu";
import { summary } from "@/constants/constants";

export default function ClientHome() {
  return (
    <div className="min-h-screen flex pt-[150px] w-full pl-[100px] relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full opacity-[0.4] z-[-1] object-cover"
      >
        <source src="/homeBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex w-[55%] ml-[120px] flex-col">
        <div className="flex mb-2 text-white">
          <motion.h1
            initial={{ translateY: -30, opacity: 0 }} // Start slightly above
            animate={{ translateY: 0, opacity: 1 }} // Drop into place
            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }} // Smooth drop effect
            className="mb-[10px] stroke-text-sm"
          >
            Hi, I'm Yong Kuk Kim
          </motion.h1>
        </div>
        <TypingEffect delay={2000} text={"FRONTEND DEVELOPER"} />
        <motion.div
          initial={{ translateY: -30, opacity: 0 }} // Start slightly above
          animate={{ translateY: 0, opacity: 1 }} // Drop into place
          transition={{ duration: 0.7, ease: "easeOut", delay: 4 }} // Smooth drop effect
          className="text-white w-1/2 mt-[10px] mb-[10px] text-xs stroke-text-sm"
        >
          {summary}
        </motion.div>
      </div>
      <Menu />
    </div>
  );
}
