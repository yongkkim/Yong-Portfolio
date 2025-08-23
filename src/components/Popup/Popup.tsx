"use client";

import { motion } from "framer-motion";
import CloseIcon from "../CloseIcon/CloseIcon";
import clsx from "clsx";
import { useRef, useEffect } from "react";
import { useStore } from "@/store/useStore";

export default function Popup({
  text,
  Template,
}: {
  imgSrc?: string;
  imgAlt?: string;
  text?: string[] | string;
  Template?: React.ComponentType<{}>;
  keepStyle?: boolean;
}) {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { fullScreenPopup, setPopupHeight, clickedSection } = useStore();
  useEffect(() => {
    if (popupRef.current) {
      setPopupHeight(popupRef.current.clientHeight);
    }
  }, [fullScreenPopup]);

  const popupText = () => {
    if (Array.isArray(text)) {
      return (
        <ul className="list-none w-full">
          {text.map((bullet) => (
            <li key={bullet} className="mb-[5px]">
              {bullet}
            </li>
          ))}
        </ul>
      );
    }

    return <span className="block w-full">{text}</span>;
  };

  return (
    <>
      <motion.div
        ref={popupRef}
        key="popup"
        className={clsx(
          "z-40 absolute top-[200px] md:right-[20px] w-[35%] pr-[20px] justify-center",
          // Template && "max-lg:",
          Template
            ? "max-md:absolute md:right-auto xl:w-[50%] w-[80%]"
            : "max-md:relative",
          Template && clickedSection === "career" && "max-[576px]:top-[100px]",
          "max-md:flex max-md:w-full max-md:items-center max-md:pr-0 max-md:mx-auto max-md:bg-[rgba(0,0,0,0.7)] max-md:bg-opacity-[0.35]"
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <CloseIcon />
        {Template ? (
          <Template />
        ) : (
          <div className="h-fit bg-white border-[0.5px] flex items-center justify-center rounded-lg shadow-[0_4px_8px_0_rgba(0,0,0,0.4),0_6px_20px_0_rgba(0,0,0,0.4)]">
            <div className="flex flex-col w-full max-h-[400px] p-[15px] bg-black text-white text-[13px] rounded-lg overflow-auto thin-scrollbar">
              {popupText()}
            </div>
          </div>
        )}
      </motion.div>
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-0"></div>
    </>
  );
}
