"use client";
import { useStore } from "@/store/useStore";
import TypingEffect from "../TypingEffect/TypingEffect";

export default function ProjectDescTemplate() {
  const { selectedContent } = useStore();

  const setText = (infoArray: string[]) => {
    return (
      <ul className="list-none w-full mb-[10px]">
        {infoArray.map((bullet: string) => (
          <li key={bullet} className="mb-[5px]">
            {bullet}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="h-fit bg-white bg-white p-1 flex flex-col items-center justify-center rounded-lg">
      <div className="flex flex-col w-full max-h-[400px] p-[15px] bg-black text-white text-[13px] rounded-lg overflow-auto thin-scrollbar">
        {setText(selectedContent["description"])}
        <div className="text-[15px]">
          <TypingEffect
            section="project"
            speed={30}
            fadeInDuration={1000}
            text={`Tech Stack: ${(selectedContent["techStack"] ?? []).join(
              ", "
            )}`}
          />
        </div>
      </div>
    </div>
  );
}
