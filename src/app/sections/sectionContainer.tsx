"use client";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import Home from "./home/page";
import About from "./about/page";
import Career from "./career/page";
import Project from "./project/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import SectionWithAnimation from "@/components/SectionWithAnimation/SectionWithAnimation";

export default function SectionContainer() {
  const {
    sectionIndex,
    setSectionIndex,
    toggleIsClicked,
    clickedSection,
    isMobileClicked,
    setIsMobileClicked,
    isMobile,
  } = useStore();

  // Detect scroll direction and update sectionIndex
  let isScrolling = false;
  const handleScroll = (event: WheelEvent) => {
    if (clickedSection !== "" && clickedSection !== "home") return;

    if (isScrolling) return;
    isScrolling = true;

    setTimeout(() => {
      isScrolling = false;
    }, 700); // Prevents rapid scrolling

    setSectionIndex((prevIndex) => {
      const nextIndex = event.deltaY > 0 ? prevIndex + 1 : prevIndex - 1;
      if (!isMobileClicked && isMobile) setIsMobileClicked();
      return Math.max(0, Math.min(nextIndex, 5));
    });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [clickedSection]);

  // Automatically scroll to the updated section
  useEffect(() => {
    const sections = document.getElementsByTagName("section");
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: "smooth" });
      toggleIsClicked("");
    }
  }, [sectionIndex]);

  return (
    <main className="h-screen overflow-hidden scroll-smooth">
      <section id="home">
        <Home />
      </section>
      <SectionWithAnimation id="about">
        <About />
      </SectionWithAnimation>
      <SectionWithAnimation id="career">
        <Career />
      </SectionWithAnimation>
      <SectionWithAnimation id="projects">
        <Project />
      </SectionWithAnimation>
      <SectionWithAnimation id="skills">
        <Skills />
      </SectionWithAnimation>
      <SectionWithAnimation id="contact">
        <Contact />
      </SectionWithAnimation>
    </main>
  );
}
