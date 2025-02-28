"use client";

import { useStore } from "@/store/useStore";
import AnimationEffect from "@/components/AnimationEffect/AnimationEffect";
import FlipMotion from "@/components/FlipMotion/FlipMotion";

export default function ClientAbout() {
  const { isClicked, toggleIsClicked } = useStore();

  return (
    <AnimationEffect
      handleClick={toggleIsClicked}
      isClicked={isClicked}
      isPopup={true}
    >
      <div>
        <h1 className="text-4xl font-bold text-center">
          My Journey: From College to Career
        </h1>
        <div className="flex justify-center gap-[180px] mt-12">
          <FlipMotion
            style="w-[200px] h-[200px]"
            imgSrc="/campus.jpg"
            imgAlt="Campus"
            imgText="During College"
            handleClick={toggleIsClicked}
          />
          <FlipMotion
            style="w-[200px] h-[200px]"
            imgSrc="/career.jpg"
            imgAlt="Career"
            imgText="During Career"
            handleClick={toggleIsClicked}
          />
        </div>
      </div>
      <div></div>
    </AnimationEffect>
  );
}
