"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import { useStore } from "@/store/useStore";

export default function Emergingffect({
  children,
  isPopup = false,
  delay = 0,
  fullHeight = true,
  flexDirection = "",
}: {
  children: React.ReactNode;
  isPopup?: boolean;
  delay?: number;
  fullHeight?: boolean;
  flexDirection?: string;
}) {
  // State to prevent re-running animations on every render
  const [isAnimating, setIsAnimating] = useState(true);
  const { isClicked, toggleIsClicked, popupContent } = useStore();

  useEffect(() => {
    setTimeout(() => setIsAnimating(false), 1000); // Stops animation after mount
  }, []);

  return (
    <motion.div
      className={`${
        fullHeight && `min-h-screen`
      } bg-gray-100 flex ${flexDirection} items-center justify-center`}
      initial={{ opacity: isAnimating ? 0 : 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay }}
    >
      {isPopup && isClicked && popupContent && (
        <AnimatePresence>
          <Popup
            handleClick={() => toggleIsClicked()}
            imgSrc={popupContent.imgSrc}
            imgAlt={popupContent.imgAlt}
            text={popupContent.text}
          ></Popup>
        </AnimatePresence>
      )}

      {children}
    </motion.div>
  );
}
