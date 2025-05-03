import clsx from "clsx";
import LineEffect from "../LineEffect/LineEffect";
import { useStore } from "@/store/useStore";

export default function ExperienceTemplate({
  expRef,
}: {
  expRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { selectedExp } = useStore();
  return (
    <div
      ref={expRef}
      className="flex p-6 bg-gradient-to-br from-[rgb(101,197,176)] from-1/2 to-[rgb(47,113,90)] to-1/2 rounded-[20px]"
    >
      <div
        className={clsx(
          "flex bg-white shadow-[0_8px_8px_0_rgba(0,0,0,0.2),0_8px_20px_0_rgba(0,0,0,0.2)]",
          "max-[576px]:flex-col"
        )}
      >
        <ul
          className={clsx(
            "flex flex-col items-center p-4 m-2 min-w-[240px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.2),0_2px_8px_0_rgba(0,0,0,0.2)]",
            "max-md:min-w-fit"
          )}
        >
          <li>
            <img
              src={selectedExp.logo}
              className={clsx("w-[80px] rounded-full")}
            />
          </li>
          <li
            className={clsx(
              "flex mb-[10px] mt-[10px] font-bold text-center text-[15px]"
            )}
          >
            <LineEffect delay={0} color="black" shadow={false} fontStyle="bold">
              {selectedExp.company}
            </LineEffect>
          </li>
          <li className="flex mb-[10px] text-[13px]">
            <LineEffect delay={0} color="black" shadow={false} fontStyle="both">
              {selectedExp.position}
            </LineEffect>
          </li>
          <li className="text-[13px]">
            <LineEffect
              delay={0}
              color="black"
              shadow={false}
              fontStyle="italic"
            >
              {selectedExp.duration}
            </LineEffect>
          </li>
        </ul>
        <div
          className={clsx(
            "w-[4px] h-[90%] bg-gray-400 self-center",
            "max-[576px]:w-[90%] max-[576px]:h-[4px]"
          )}
        ></div>
        <div
          className={clsx(
            "scrollable p-4 m-2 text-[12px] max-h-[350px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.2),0_2px_8px_0_rgba(0,0,0,0.2)] overflow-y-auto",
            "max-[576px]:max-h-[250px]"
          )}
        >
          {selectedExp.description.map((desc, index) => (
            <div
              key={"desc-" + index + "-" + selectedExp.company}
              className="relative"
            >
              <p
                className={clsx(
                  "m-[10px] mr-0 z-[-1] hover:underline text-shadow-lg",
                  index === 0 && "mt-0"
                )}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
