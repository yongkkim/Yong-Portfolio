"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import { useStore } from "@/store/useStore";

export default function AnimationEffect({
  children,
  isPopup = false,
}: {
  children: React.ReactNode;
  isPopup?: boolean;
}) {
  // State to prevent re-running animations on every render
  const [isAnimating, setIsAnimating] = useState(true);
  const { isClicked, toggleIsClicked, popupContent } = useStore();

  useEffect(() => {
    setTimeout(() => setIsAnimating(false), 1000); // Stops animation after mount
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      initial={{ opacity: isAnimating ? 0 : 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
        {isPopup && isClicked && popupContent && (
          <Popup
            handleClick={() => toggleIsClicked()}
            imgSrc={popupContent.imgSrc}
            imgAlt={popupContent.imgAlt}
            text={popupContent.text}
          ></Popup>
        )}
      </AnimatePresence>

      {children}
    </motion.div>
  );
}
