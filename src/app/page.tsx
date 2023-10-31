"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = dynamic(() => import("@/components/app"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {

  useEffect(() => {
    let sections = gsap.utils.toArray<HTMLDivElement>("div"),
      currentSection = sections[0];

    gsap.defaults({overwrite: 'auto', duration: 0.3});

    // stretch out the body height according to however many sections there are. 
    gsap.set("body", {height: (sections.length * 100) + "%"});

    // create a ScrollTrigger for each section
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        // when a new section activates (from either direction), set the section accordinglyl.
        onToggle: self => self.isActive && setSection(section)
      });
    });

    function setSection(newSection: HTMLDivElement) {
      if (newSection !== currentSection) {
        gsap.to(currentSection, {scale: 0.8, autoAlpha: 0})
        gsap.to(newSection, {scale: 1, autoAlpha: 1});
        currentSection = newSection;
      }
    }

    // handles the infinite part, wrapping around at either end....
    ScrollTrigger.create({
      start: 1,
      end: () => ScrollTrigger.maxScroll(window) - 1,
      onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
      onLeave: self => self.scroll(2)
    }).scroll(2);
  }, [])

  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, []);

  return (
    <main className="overflow-hidden">

      <div key="dashboard" className="h-screen w-screen flex items-center justify-center">
        <App/>
      </div>

      <div key="about" className="h-screen w-screen flex items-center justify-center bg-black-600">
          <h1 className="text-8xl text-white">Hello, World!</h1>
      </div>

      <div key="projects" className="h-screen w-screen flex items-center justify-center bg-black-600">
          <h1 className="text-8xl text-white">This is a test!</h1>
      </div>
    </main>
  );
};

export default Home;