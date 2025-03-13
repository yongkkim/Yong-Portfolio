"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CloseIcon from "../CloseIcon/CloseIcon";

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
      className="z-40 absolute w-[35%] top-[200px] right-[80px] pr-[20px] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative h-fit bg-white border-[0.5px] flex items-center justify-center rounded-lg shadow-[0_4px_8px_0_rgba(0,0,0,0.4),0_6px_20px_0_rgba(0,0,0,0.4)]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.4 }}
      >
        <CloseIcon />
        <div className="flex flex-col h-full p-[15px] bg-black text-white text-[13px] rounded-lg overflow-auto thin-scrollbar">
          {false && (
            <div className="w-full h-[70%] relative flex-shrink-0">
              <Image
                src={imgSrc}
                alt={imgAlt}
                layout="fill"
                objectFit="fill"
                className="rounded-lg"
              />
            </div>
          )}

          <span className="block w-full">{text}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
