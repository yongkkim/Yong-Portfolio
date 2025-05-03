"use client";

import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "../CloseIcon/CloseIcon";
import clsx from "clsx";
import { useRef, useEffect } from "react";
import { useStore } from "@/store/useStore";
import ExperienceTemplate from "../ExperienceTemplate/ExperienceTemplate";

export default function Popup({
  handleClick,
  imgSrc,
  imgAlt,
  text,
  template = false,
  keepStyle = false,
  section,
}: {
  handleClick?: (value: boolean) => void;
  imgSrc?: string;
  imgAlt?: string;
  text?: string;
  template?: boolean;
  keepStyle?: boolean;
  section?: string;
}) {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { popupFullScreen, setPopupHeight, clickedSection } = useStore();
  useEffect(() => {
    if (popupRef.current) {
      setPopupHeight(popupRef.current.clientHeight);
    }
  }, [popupFullScreen]);

  return (
    <>
      <motion.div
        key="popup"
        className={clsx(
          "z-40 absolute",
          clickedSection === "about" || keepStyle
            ? "w-[35%] top-[200px] right-[80px] pr-[20px]"
            : "inset-0 top-[150px] w-[60%] m-auto",
          (clickedSection === "about" || keepStyle) &&
            "max-[1440px]:right-[20px]",
          clickedSection === "career" && "max-lg:w-[80%]",
          "max-md:fixed max-md:flex max-md:w-full max-md:h-full max-md:top-0 max-md:items-center max-md:right-0 max-md:left-0 max-md:pr-0 max-md:mx-auto max-md:bg-[rgba(0,0,0,0.7)] max-md:bg-opacity-[0.35]"
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <CloseIcon section={section} />
        {template ? (
          <ExperienceTemplate expRef={popupRef} />
        ) : (
          <div
            ref={popupRef}
            className="h-fit bg-white border-[0.5px] flex items-center justify-center rounded-lg shadow-[0_4px_8px_0_rgba(0,0,0,0.4),0_6px_20px_0_rgba(0,0,0,0.4)]"
          >
            <div className="flex flex-col max-h-[400px] p-[15px] bg-black text-white text-[13px] rounded-lg overflow-auto thin-scrollbar">
              <span className="block w-full">{text}</span>
            </div>
          </div>
        )}
      </motion.div>
      {template && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-0"></div>
      )}
    </>
  );
}
