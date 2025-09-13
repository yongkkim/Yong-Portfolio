import clsx from "clsx";
import { useStore } from "@/store/useStore";

export default function ExperienceTemplate() {
  const { selectedContent, isMobile } = useStore();

  const darkenColor = (rgbString: string, factor: number) => {
    const rgb = rgbString.match(/\d+/g);
    if (!rgb) return rgbString;

    let [r, g, b] = rgb.map(Number);

    r = Math.max(0, Math.floor(r * (1 - factor)));
    g = Math.max(0, Math.floor(g * (1 - factor)));
    b = Math.max(0, Math.floor(b * (1 - factor)));

    return `rgb(${r},${g},${b})`;
  };

  const getDarkerGradient = () => {
    if (isMobile) return;
    if (!selectedContent?.bgColor) return "rgb(0,0,0)";

    // slightly darken the "from"
    const fromColor = darkenColor(selectedContent.bgColor, 0.3);

    // heavily darken the "to"
    const toColor = darkenColor(selectedContent.bgColor, 0.6);

    return `linear-gradient(to right, ${fromColor}, ${toColor})`;
  };

  return (
    <div
      className={clsx("flex px-6 rounded-[20px]", !isMobile && "p-6")}
      style={{ background: getDarkerGradient() }}
    >
      <div
        className={clsx(
          "relative z-10 flex bg-white",
          "max-[576px]:flex-col",
          !isMobile &&
            "shadow-[0_8px_8px_0_rgba(0,0,0,0.2),0_8px_20px_0_rgba(0,0,0,0.2)]"
        )}
      >
        <ul
          className={clsx(
            "flex flex-1 flex-col items-center p-4 m-2 min-w-[240px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.2),0_2px_8px_0_rgba(0,0,0,0.2)]"
          )}
        >
          <li>
            <img
              src={selectedContent.logo}
              className={clsx("w-[80px] rounded-full")}
            />
          </li>
          <li
            className={clsx(
              "flex mb-[10px] mt-[10px] font-bold text-center text-[15px]"
            )}
          >
            {selectedContent.company}
          </li>
          <li className="flex mb-[10px] text-[13px]">
            {selectedContent.position}
          </li>
          <li className="text-[13px]">{selectedContent.duration}</li>
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
          {selectedContent.description.map((desc, index) => (
            <div
              key={"desc-" + index + "-" + selectedContent.company}
              className="relative"
            >
              <p
                className={clsx(
                  "m-[10px] mr-0 text-shadow-lg",
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
