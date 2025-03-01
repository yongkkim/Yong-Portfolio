"use client";

import { useStore } from "@/store/useStore";
import AnimationEffect from "@/components/AnimationEffect/AnimationEffect";
import FlipMotion from "@/components/FlipMotion/FlipMotion";
import {
  careerInfo,
  collegeInfo,
  beforeCollegeInfo,
} from "@/constants/constants";

export default function ClientAbout() {
  const { toggleIsClicked } = useStore();

  return (
    <AnimationEffect isPopup={true}>
      <div>
        <h1 className="text-4xl font-bold text-center">
          My Journey: High School, College, and Career
        </h1>
        <div className="flex justify-center gap-[130px] mt-12">
          <FlipMotion
            style="w-[200px] h-[200px]"
            imgSrc="/myHighSchool.jpg"
            imgAlt="Campus"
            imgText="In High School"
            handleClick={() => toggleIsClicked(beforeCollegeInfo)}
          />
          <FlipMotion
            style="w-[200px] h-[200px]"
            imgSrc="/campus.jpg"
            imgAlt="Campus"
            imgText="In College"
            handleClick={() => toggleIsClicked(collegeInfo)}
          />
          <FlipMotion
            style="w-[200px] h-[200px]"
            imgSrc="/career.jpg"
            imgAlt="Career"
            imgText="In My Career"
            handleClick={() => toggleIsClicked(careerInfo)}
          />
        </div>
      </div>
      <div></div>
    </AnimationEffect>
  );
}
