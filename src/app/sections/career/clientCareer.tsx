"use client";

import EmergingEffect from "@/components/EmergingEffect/EmergingEffect";
import Experience from "@/components/Experience/Experience";
import { experienceInfo } from "@/constants/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import TypingEffect from "@/components/TypingEffect/TypingEffect";

export default function ClientCareer() {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-[15px] relative">
      <div className="absolute top-[100px] left-[100px]">
        <TypingEffect delay={1500} text={"My Career"} speed={150} />
      </div>
      {/* <EmergingEffect fullHeight={false}>
        <h1 className="text-[35px] moving-text fixed">My Career</h1>
      </EmergingEffect> */}
      {/* <EmergingEffect
        key={index}
        flexDirection={"flex-col"}
        fullHeight={false}
        delay={animationDelay}
      >
        <Experience experienceInfo={experienceInfo[index]} />
      </EmergingEffect>
      <EmergingEffect fullHeight={false} delay={2}>
        <div className="flex justify-between w-[100px] absolute bottom-[25px]">
          <button
            onClick={() =>
              setIndex(index - 1 < 0 ? experienceInfo.length - 1 : index - 1)
            }
          >
            <Image
              src="/arrow_left.svg"
              alt="Arrow Left"
              width={30}
              height={30}
            />
          </button>
          <button
            onClick={() =>
              setIndex(index + 1 > experienceInfo.length - 1 ? 0 : index + 1)
            }
          >
            <Image
              src="/arrow_right.svg"
              alt="Arrow Right"
              width={30}
              height={30}
            />
          </button>
        </div>
      </EmergingEffect> */}
    </div>
  );
}
