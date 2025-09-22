"use client";

import TypingEffect from "@/components/TypingEffect/TypingEffect";
import clsx from "clsx";
import EmergingEffect from "@/components/EmergingEffect/EmergingEffect";
import { skills, skillAreas } from "@/constants/constants";
import React from "react";

export default function ClientSkills() {
  return (
    <div
      className={clsx(
        "grid w-[85%] mt-[150px] overflow-hidden",
        "grid-cols-2 md:grid-cols-4"
      )}
    >
      {Object.entries(skills).map(([skillType, skillList], areaIndex) => (
        <div className="flex flex-col items-start" key={skillType}>
          <EmergingEffect delay={4 + areaIndex * 0.5} align="start">
            <span className="text-white tracking-[-1px] text-3xl max-xl:text-2xl stroke-text-md mb-[10px] mr-[10px]">
              {skillAreas[areaIndex]}
            </span>
          </EmergingEffect>

          <EmergingEffect delay={4.5 + areaIndex * 0.5} align="start">
            <div className="flex flex-col mr-[5px]">
              {skillList.map((skill, index) => (
                <TypingEffect
                  key={`${skillType}-${skill}`}
                  section="skills"
                  delay={4500 + index * 500}
                  fadeInDuration={500}
                  text={skill}
                  speed={50}
                  showCursor={skillList.length - 1 === index}
                  body={true}
                />
              ))}
            </div>
          </EmergingEffect>
        </div>
      ))}
    </div>
  );
}
