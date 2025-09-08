"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function EmergingEffect({
  children,
  delay = 0,
  align = "center",
}: {
  children: React.ReactNode;
  delay?: number;
  align?: string;
}) {
  // State to prevent re-running animations on every render
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsAnimating(false), 1000); // Stops animation after mount
  }, []);

  return (
    <motion.div
      className={clsx(
        "flex justify-center",
        align === "center" ? "items-center" : "items-start"
      )}
      initial={{ opacity: isAnimating ? 0 : 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
