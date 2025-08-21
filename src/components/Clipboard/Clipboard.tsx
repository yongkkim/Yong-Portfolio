"use client";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import React from "react";

interface ClipboardPopupProps {
  contactInfo: string;
  isCopied: boolean;
  setIsCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

const Clipboard = forwardRef<HTMLDivElement, ClipboardPopupProps>(
  ({ contactInfo, isCopied, setIsCopied }, ref) => {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(contactInfo);
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 7000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };

    return (
      <div
        ref={ref}
        className="absolute w-fit whitespace-nowrap top-[-55px] left-[-25px] bg-[#262626] flex text-white indicator rounded-[8px]"
      >
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 w-fit py-[5px] px-[10px] rounded-[8px]"
        >
          <div className="flex items-center gap-1 stroke-text-sm">
            <span className="py-[5px] pr-[5px] text-white font-bold rounded-r-[8px]">
              {contactInfo}
            </span>
            <span className="w-[20px] h-[20px]">
              {isCopied ? (
                <motion.img
                  src="/checkMark.svg"
                  className="bg-white rounded-full p-[2px]"
                  initial={false}
                  animate={isCopied ? { y: [0, -5, 0] } : { y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              ) : (
                <img
                  className="bg-white rounded-full p-[2px]"
                  src="/copy.svg"
                />
              )}
            </span>
          </div>
        </button>
      </div>
    );
  }
);

export default Clipboard;
