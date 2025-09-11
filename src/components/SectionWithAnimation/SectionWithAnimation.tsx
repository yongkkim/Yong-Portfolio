"use client";

import { useEffect, useRef } from "react";
import { useStore } from "@/store/useStore";
import Menu from "../Menu/Menu";
import TypingEffect from "../TypingEffect/TypingEffect";
export default function SectionWithAnimation({
  id,
  title,
  video,
  children,
}: {
  id: string;
  title: string;
  video: string;
  children: React.ReactNode;
}) {
  const { isVisibleSections, setSectionVisible, isMobile, setSectionIndex } =
    useStore();
  const isVisible = isVisibleSections[id];
  const sectionRef = useRef(null);
  const sectionOrder = [
    "home",
    "about",
    "career",
    "projects",
    "skills",
    "contact",
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;

          // Check if the section has already been marked as visible before
          if (entry.isIntersecting && !isVisibleSections[sectionId]) {
            const index = sectionOrder.indexOf(sectionId);
            setSectionIndex(() => index);
            setSectionVisible(sectionId, true);
          }
        });
      },
      { threshold: isMobile ? 0.5 : 1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisibleSections, setSectionVisible, isMobile]);

  return (
    <section ref={sectionRef} id={id}>
      <div className="h-screen flex flex-col w-full items-center relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full opacity-[0.3] z-[-1] object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        {isVisible && (
          <>
            {!isMobile && (
              <div className="max-md:h-auto max-md:absolute max-md:top-0 max-md:left-0 max-md:right-0 max-md:m-auto">
                <Menu direction="row" size="50" delay={0} />
              </div>
            )}
            <div className="absolute top-[100px] left-[100px] max-md:left-0 max-md:right-0 max-md:flex max-md:justify-center">
              <TypingEffect section={id} delay={1500} text={title} speed={70} />
            </div>
            {children}
          </>
        )}
      </div>
    </section>
  );
}
