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
  const { sectionIndex, setSectionIndex, toggleIsClicked, clickedSection } =
    useStore();

  // Detect scroll direction and update sectionIndex
  let isScrolling = false;
  const handleScroll = (event: WheelEvent) => {
    const { clickedSection, isMobileMenuOpen, setIsMobileMenuOpen, isMobile } =
      useStore.getState();
    if (clickedSection !== "" && clickedSection !== "home") return;

    if (isScrolling) return;
    isScrolling = true;

    setTimeout(() => {
      isScrolling = false;
    }, 700); // Prevents rapid scrolling

    setSectionIndex((prevIndex) => {
      const nextIndex = event.deltaY > 0 ? prevIndex + 1 : prevIndex - 1;
      if (isMobileMenuOpen && isMobile) {
        setIsMobileMenuOpen(false);
      }
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
      <SectionWithAnimation
        id="about"
        title="ABOUT ME: A BULLISH TREND IN MY LIFE"
        video="/aboutBG.mp4"
      >
        <About />
      </SectionWithAnimation>
      <SectionWithAnimation
        id="career"
        title="MY CAREER: DRIVEN BY GROWTH"
        video="/careerBG.mp4"
      >
        <Career />
      </SectionWithAnimation>
      <SectionWithAnimation
        id="projects"
        title="MY PROJECTS: IDEAS IN ACTION"
        video="/projectBG.mp4"
      >
        <Project />
      </SectionWithAnimation>
      <SectionWithAnimation
        id="skills"
        title="MY SKILLS: MASTER THE STACK"
        video="/skills.mp4"
      >
        <Skills />
      </SectionWithAnimation>
      <SectionWithAnimation
        id="contact"
        title="LET'S CHAT: WORK ON THINGS TOGETHER!"
        video="/contact.mp4"
      >
        <Contact />
      </SectionWithAnimation>
    </main>
  );
}
