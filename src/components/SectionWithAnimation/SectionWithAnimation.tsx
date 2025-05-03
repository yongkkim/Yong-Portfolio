"use client";

import { useEffect, useRef } from "react";
import { useStore } from "@/store/useStore";
export default function SectionWithAnimation({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { isVisibleSections, setSectionVisible } = useStore();
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;

          // Check if the section has already been marked as visible before
          if (entry.isIntersecting && !isVisibleSections[sectionId]) {
            setSectionVisible(sectionId, true);
          }
        });
      },
      { threshold: 1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisibleSections, setSectionVisible]);

  return (
    <section ref={sectionRef} id={id}>
      {children}
    </section>
  );
}
