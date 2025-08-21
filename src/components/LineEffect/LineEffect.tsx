"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function LineEffect({
  children,
  delay = 4,
  color = "white",
  shadow = true,
  fontStyle = "",
  isCurrentPage = false,
  paddingBottom = "0",
}: {
  children: React.ReactNode;
  delay?: number;
  color?: string;
  shadow?: boolean;
  fontStyle?: string;
  isCurrentPage?: boolean;
  paddingBottom?: string;
}) {
  return (
    <motion.div
      className={clsx("relative w-full h-fit group", `pb-[${paddingBottom}]`)}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: delay }}
    >
      <span
        className={clsx(
          "transition-color duration-300 ease-in-out",
          `text-${color}`,
          isCurrentPage && "text-shadow-green",
          !isCurrentPage && shadow && "group-hover:text-shadow-green",
          fontStyle === "italic" || fontStyle === ""
            ? fontStyle
            : fontStyle === "bold"
            ? "font-bold"
            : "italic font-bold"
        )}
      >
        {children}
        <span
          className={clsx(
            "absolute left-0 bottom-0 h-0.5 w-full scale-x-0 origin-left transition-transform duration-300 ease-in-out",
            isCurrentPage ? "scale-x-100" : "group-hover:scale-x-100",
            `bg-${color}`
          )}
        />
      </span>
    </motion.div>
  );
}
