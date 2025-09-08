import { useStore } from "@/store/useStore";
import { experience } from "@/constants/constants";
import clsx from "clsx";

interface expObject {
  company: string;
  position: string;
  duration: string;
  logo: string;
  description: Array<string>;
}

export default function MobileExperienceCard() {
  const { toggleIsClicked, setSelectedContent } = useStore();

  const handleClick = (exp: expObject) => {
    toggleIsClicked("career");
    setSelectedContent(exp);
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-center w-[80%] mt-[50%] overflow-hidden"
      )}
    >
      <div className={clsx("flex flex-col gap-4 h-full")}>
        {experience.map((exp) => (
          <div
            key={exp.company}
            onClick={() => {
              handleClick(exp);
            }}
            className={clsx(
              "h-full border-4 border-white p-4 flex items-center rounded-[20px] justify-start cursor-pointer"
            )}
          >
            <div className="flex p-1 justify-center h-1/2 bg-white rounded-[20px]">
              <img src={exp.logo} className="w-[80px] rounded-full" />
            </div>
            <div className="flex w-full justify-center">
              <div className="flex flex-col w-full pl-[25px] text-[14px] text-white">
                <span>
                  <b>{exp.company}</b>
                </span>
                <span>
                  <i>{exp.position}</i>
                </span>
                <span>
                  <i>{exp.duration}</i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
