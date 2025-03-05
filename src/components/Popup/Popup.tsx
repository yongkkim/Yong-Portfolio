"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Popup({
  handleClick,
  imgSrc,
  imgAlt,
  text,
}: {
  handleClick?: (value: boolean) => void;
  imgSrc: string;
  imgAlt: string;
  text: string;
}) {
  return (
    <motion.div
      key="popup"
      className="fixed inset-0 bg-white bg-opacity-[0.65] z-40 flex items-center justify-center cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => handleClick?.(false)}
    >
      <motion.div
        className="w-[700px] h-[500px] bg-white border-[0.5px] flex items-center justify-center rounded-lg shadow-[0_4px_8px_0_rgba(0,0,0,0.4),0_6px_20px_0_rgba(0,0,0,0.4)]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col h-full p-[15px] overflow-auto thin-scrollbar">
          <div className="w-full h-[70%] relative flex-shrink-0">
            <Image
              src={imgSrc}
              alt={imgAlt}
              layout="fill"
              objectFit="fill"
              className="rounded-lg"
            />
          </div>

          <span className="block w-full mt-4">{text}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
