"use client";

import { useStore } from "@/store/useStore";
import AnimationEffect from "@/components/EmergingEffect/EmergingEffect";
import FlipMotion from "@/components/FlipMotion/FlipMotion";
import { aboutInto } from "@/constants/constants";

export default function ClientAbout() {
  const { toggleIsClicked } = useStore();

  return (
    <AnimationEffect isPopup={true}>
      <div>
        <h1 className="text-[35px] text-center">
          My Journey: High School, College, and Career
        </h1>
        <div className="flex justify-center gap-[130px] mt-12">
          {aboutInto.map((item) => (
            <FlipMotion
              key={item.imgText}
              style="w-[200px] h-[200px]"
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              imgText={item.imgText}
              handleClick={() => toggleIsClicked(item.popup)}
            />
          ))}
        </div>
      </div>
      <div></div>
    </AnimationEffect>
  );
}
