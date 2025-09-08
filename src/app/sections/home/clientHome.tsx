"use client";

import { motion } from "framer-motion";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import Menu from "@/components/Menu/Menu";
import { summary } from "@/constants/constants";
import { useEffect } from "react";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import clsx from "clsx";
import { useStore } from "@/store/useStore";

export default function ClientHome() {
  const { setIsMobile, isMobile, setFullScreenPopup } = useStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 425);
      setFullScreenPopup(window.innerWidth < 768 ? true : false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  return (
    <div
      className={clsx(
        "h-screen flex pt-[150px] w-full relative justify-center",
        "max-lg:pt-[100px]"
      )}
    >
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
      <div
        className={clsx(
          "flex flex-col w-[45%]",
          "max-[1200px]:w-[55%] max-[475px]:w-[80%]"
        )}
      >
        <div className="flex mb-2 text-white">
          <motion.h1
            initial={{ translateY: -30, opacity: 0 }} // Start slightly above
            animate={{ translateY: 0, opacity: 1 }} // Drop into place
            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }} // Smooth drop effect
            className={clsx(
              "mb-[10px] stroke-text-sm",
              "max-[475px]:text-[15px]"
            )}
          >
            Hi, I&apos;m Yong Kuk Kim
          </motion.h1>
        </div>
        <TypingEffect delay={2000} text={"FRONTEND DEVELOPER"} />
        <motion.div
          initial={{ translateY: -30, opacity: 0 }} // Start slightly above
          animate={{ translateY: 0, opacity: 1 }} // Drop into place
          transition={{ duration: 0.7, ease: "easeOut", delay: 4 }} // Smooth drop effect
          className={clsx(
            "text-white w-1/2 mt-[10px] mb-[10px] text-xs stroke-text-sm",
            "max-[1200px]:w-2/3 max-lg:w-[60%] max-md:w-[90%]"
          )}
        >
          {summary}
        </motion.div>
      </div>
      <div
        className={clsx(
          "h-2/3",
          "max-md:h-auto max-md:absolute max-md:top-0 max-md:left-0 max-md:right-0 max-md:m-auto"
        )}
      >
        {isMobile ? <MobileMenu /> : <Menu />}
      </div>
    </div>
  );
}
