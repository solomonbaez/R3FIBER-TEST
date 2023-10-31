"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import _debounce from "lodash/debounce"
import _throttle from "lodash/throttle"

const App = dynamic(() => import("@/components/app"), { ssr: false });

const Home: React.FC = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

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