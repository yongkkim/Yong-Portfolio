"use client";
import { forwardRef } from "react";
import React from "react";

interface PopupLabelProps {
  label: string;
}

export default function PopupLabel({ label }: PopupLabelProps) {
  return (
    <div className="absolute z-[10] w-fit whitespace-nowrap top-[-40px] left-[-25px] bg-[rgb(20,156,115)] flex text-white indicator label rounded-[8px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
      <div className="flex items-center py-[2px] px-[10px]">
        <span className="text-white font-bold">{label}</span>
      </div>
    </div>
  );
}
