"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimationEffect({
  children,
  isPopup = false,
  isClicked,
  handleClick,
}: {
  children: React.ReactNode;
  isPopup?: boolean;
  isClicked?: boolean;
  handleClick?: (value: boolean) => void; //function manage Boolean state
}) {
  // State to prevent re-running animations on every render
  const [isAnimating, setIsAnimating] = useState(true);

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
      {/* Handle Popup with AnimatePresence */}
      <AnimatePresence>
        {isPopup && isClicked && (
          <motion.div
            key="popup"
            className="fixed inset-0 bg-white bg-opacity-[0.95] z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => handleClick?.(false)}
          >
            <motion.div
              className="w-[400px] h-[400px] bg-gray-200 flex items-center justify-center rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-xl font-bold">Expanded View</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </motion.div>
  );
}
