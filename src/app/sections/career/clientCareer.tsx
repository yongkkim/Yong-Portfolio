"use client";

import TypingEffect from "@/components/TypingEffect/TypingEffect";
import { useStore } from "@/store/useStore";
import Menu from "@/components/Menu/Menu";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import clsx from "clsx";
import EmergingEffect from "@/components/EmergingEffect/EmergingEffect";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import { useEffect, useState } from "react";
import MobileExperienceCard from "@/components/MobileExperienceCard/MobileExperienceCard";
import Popup from "@/components/Popup/Popup";
import ExperienceTemplate from "@/components/Template/ExperienceTemplate";

export default function ClientCareer() {
  const { isVisibleSections, isMobile, clickedSection } = useStore();
  const [isMobileView, setIsMobileView] = useState(false);
  const isVisible = isVisibleSections["career"];

  useEffect(() => {
    const updateExpView = () => {
      setIsMobileView(window.innerWidth < 600);
    };

    updateExpView();
    window.addEventListener("resize", updateExpView);
    return () => window.removeEventListener("resize", updateExpView);
  }, []);

  return (
    <EmergingEffect delay={1}>
      {isMobileView ? <MobileExperienceCard /> : <ExperienceCard />}
      {clickedSection === "career" && <Popup Template={ExperienceTemplate} />}
    </EmergingEffect>
  );
}
