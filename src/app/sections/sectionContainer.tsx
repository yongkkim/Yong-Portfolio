"use client";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import Home from "./home/page";
import About from "./about/page";
import Career from "./career/page";
import Project from "./project/page";
import Contact from "./contact/page";
import SectionWithAnimation from "@/components/SectionWithAnimation/SectionWithAnimation";

export default function SectionContainer() {
  const { sectionIndex, setSectionIndex } = useStore();

  // Detect scroll direction and update sectionIndex
  let isScrolling = false;
  const handleScroll = (event: WheelEvent) => {
    if (isScrolling) return;
    isScrolling = true;

    setTimeout(() => {
      isScrolling = false;
    }, 700); // Prevents rapid scrolling

    setSectionIndex((prevIndex) => {
      const nextIndex = event.deltaY > 0 ? prevIndex + 1 : prevIndex - 1;
      return Math.max(0, Math.min(nextIndex, 4));
    });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  // Automatically scroll to the updated section
  useEffect(() => {
    const sections = document.getElementsByTagName("section");
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: "smooth" });
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
      <section id="career">
        <Career />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
