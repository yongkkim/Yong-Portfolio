import LineEffect from "../LineEffect/LineEffect";

interface ExperienceInfo {
  company: string;
  position: string;
  duration: string;
  numYear: string;
  description: string[];
}

export default function Experience({
  experienceInfo,
}: {
  experienceInfo: ExperienceInfo;
}) {
  return (
    <div className="flex flex-col w-[70%] max-h-[410px] gap-4 p-4 bg-white rounded-[20px] mt-4 mb-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.2)]">
      <div className="flex w-full p-4">
        <h1 className="mb-2">
          <b>{experienceInfo.company}</b>
        </h1>
        <h1 className="mb-2">
          <b>{experienceInfo.position}</b>
        </h1>
        <i>{experienceInfo.duration}</i>
        <i>{experienceInfo.numYear}</i>
      </div>
      <div className="w-full p-4 overflow-y-auto thin-scrollbar">
        <ul className="list-disc pl-5">
          {experienceInfo.description.map((desc, index) => (
            <LineEffect key={`${experienceInfo.company}_desc_${index}`}>
              <li className="mb-2 font-100 cursor-pointer hover:text-[#ff5733]">
                {desc}
              </li>
            </LineEffect>
          ))}
        </ul>
      </div>
    </div>
  );
}
