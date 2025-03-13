import { motion } from "framer-motion";

export default function TwinkleCircle({
  label,
  isClicked,
}: {
  label?: string;
  isClicked: boolean;
}) {
  return (
    <div className="relative group">
      <label className="absolute left-[-20px] top-[-45px] whitespace-nowrap text-white pointer-events-none group-hover:stroke-text-sm">
        {label}
      </label>
      <svg
        className="w-[25px] h-[25px] absolute z-10 left-[-21px] top-[-14px] cursor-pointer"
        viewBox="0 0 100 100"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static Outer Circle */}
        <circle r="45" cx="50" cy="50" fill="#008f11" />

        {/* Animated Inner Circle */}
        <motion.circle
          r="35"
          cx="50"
          cy="50"
          fill={isClicked ? "red" : "white"}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </svg>
    </div>
  );
}
