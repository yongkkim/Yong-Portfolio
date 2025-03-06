"use client";

import { ReactElement, useEffect, useState } from "react";
import { useStore } from "@/store/useStore";
export default function SectionWithAnimation({
  id,
  children,
}: //   animationClass,
{
  id: string;
  children: React.ReactNode;
  //   animationClass: string;
}) {
  const { setSectionVisible } = useStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setSectionVisible(entry.target.id, entry.isIntersecting);
        });
      },
      { threshold: 0.8 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return <section id={id}>{children}</section>;
}
