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
import clsx from "clsx";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

export default function SectionContainer() {
  const {
    sectionIndex,
    setSectionIndex,
    toggleIsClicked,
    clickedSection,
    setIsMobile,
    setFullScreenPopup,
    isMobile,
    setIsTrackingFrozen,
  } = useStore();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Tailwind md breakpoint
      setIsMobile(isMobile);
      setFullScreenPopup(isMobile);
    };

    // run once on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile, setFullScreenPopup]);

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
    }, 700);

    setSectionIndex((prevIndex) => {
      const nextIndex = event.deltaY > 0 ? prevIndex + 1 : prevIndex - 1;
      if (isMobileMenuOpen && isMobile) {
        setIsMobileMenuOpen(false);
      }
      return Math.max(0, Math.min(nextIndex, 5));
    });
  };
  useEffect(() => {
    if (isMobile) {
      const section = document.getElementById(clickedSection);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
      document.body.style.overflow = clickedSection ? "hidden" : "auto";
      setIsTrackingFrozen(!!clickedSection);
    }

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [clickedSection, isMobile]);

  // Automatically scroll to the updated section
  useEffect(() => {
    const sections = document.getElementsByTagName("section");
    if (sections[sectionIndex]) {
      if (!isMobile) {
        sections[sectionIndex].scrollIntoView({ behavior: "smooth" });
      }
      toggleIsClicked("");
    }
  }, [sectionIndex]);

  return (
    <main
      className={clsx(
        "scroll-smooth",
        isMobile ? "h-auto overflow-y-scroll" : "h-screen overflow-hidden"
      )}
    >
      {isMobile && (
        <div className="fixed top-4 left-4 z-50">
          <MobileMenu />
        </div>
      )}
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
