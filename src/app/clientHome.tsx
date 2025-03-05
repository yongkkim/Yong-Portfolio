"use client";

import Link from "next/link";
import LineEffect from "@/components/LineEffect/LineEffect";
import { motion } from "framer-motion";
import MovingTextBG from "@/components/MovingTextBG/MovingTextBG";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
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
        <TypingEffect delay={1800} text={"FRONTEND DEVELOPER"} />
        <motion.div
          initial={{ translateY: -30, opacity: 0 }} // Start slightly above
          animate={{ translateY: 0, opacity: 1 }} // Drop into place
          transition={{ duration: 0.7, ease: "easeOut", delay: 4 }} // Smooth drop effect
          className="text-white w-1/2 mt-[10px] mb-[10px] text-xs stroke-text-sm"
        >
          {summary}
        </motion.div>
      </div>
      <nav className="flex flex-col items-center h-2/3">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 4 }}
          className="flex flex-col gap-10 w-full h-full bg-white/5 p-[15px] rounded-[10px] bg-[radial-gradient(#008f11_10%,transparent_10%)] bg-[size:10px_10px]"
        >
          <Link href="/" className="link">
            <LineEffect>Home</LineEffect>
          </Link>
          <Link href="/sections/about" className="link">
            <LineEffect>About</LineEffect>
          </Link>
          <Link href="/sections/career" className="link">
            <LineEffect>Career</LineEffect>
          </Link>
          <Link href="/sections/project" className="link">
            <LineEffect>Projects</LineEffect>
          </Link>
          <Link href="/sections/contact" className="link">
            <LineEffect>Contact</LineEffect>
          </Link>
        </motion.div>
      </nav>
    </div>
  );
}
