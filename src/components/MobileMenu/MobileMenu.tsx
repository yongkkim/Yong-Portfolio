import { useStore } from "@/store/useStore";
import Menu from "../Menu/Menu";
import { useEffect } from "react";

export default function MobileMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useStore();

  return (
    <>
      {isMobileMenuOpen ? (
        <>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsMobileMenuOpen(false)}
            className="cursor-pointer"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 10.9394L16.9697 5.96961L18.0304 7.03027L13.0606 12L18.0303 16.9697L16.9697 18.0304L12 13.0607L7.03045 18.0302L5.96979 16.9696L10.9393 12L5.96973 7.03042L7.03039 5.96976L12 10.9394Z"
                fill="#1F2328"
              ></path>
            </g>
          </svg>
          <Menu delay={0} />
        </>
      ) : (
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="white"
          stroke="white"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setIsMobileMenuOpen(true)}
          className="cursor-pointer"
        >
          <g id="SVGRepo_bgCarrier"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328"></path>
            <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328"></path>
            <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328"></path>
          </g>
        </svg>
      )}
    </>
  );
}
