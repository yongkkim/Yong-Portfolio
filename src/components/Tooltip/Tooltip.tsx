"use client";
import clsx from "clsx";
import React from "react";

interface TooltipProps {
  label: string;
  errMsg?: boolean;
}

export default function Tooltip({ label, errMsg = false }: TooltipProps) {
  return (
    <div
      className={clsx(
        "absolute z-[10] w-fit whitespace-nowrap top-[-40px] flex text-white indicator rounded-[8px] pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300",
        errMsg
          ? "opacity-1 right-[5px] bg-[rgb(206,83,83)] error"
          : "opacity-0 left-[-25px] bg-[rgb(20,156,115)] label"
      )}
    >
      <div className="flex items-center py-[2px] px-[10px]">
        <span className="text-white font-bold">{label}</span>
      </div>
    </div>
  );
}
