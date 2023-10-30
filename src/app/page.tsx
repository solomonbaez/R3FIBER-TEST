"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import _debounce from "lodash/debounce"
const App = dynamic(() => import("@/components/app"), { ssr: false });

const components: React.JSX.Element[] = [

  <div key="dashboard" className="h-screen w-screen flex items-center justify-center">
    <App/>
  </div>,

  <div key="about" className="h-screen w-screen flex items-center justify-center bg-black-600">
      <h1 className="text-8xl text-white">Hello, World!</h1>
  </div>

]

const Home: React.FC = () => {
  const [visibleComponents, setVisibleComponents] = useState<number[]>([0, 1]); // Start with the first two components.

  const debouncedHandleScrollRef = useRef<() => void>();
  useEffect(() => {
    var newIndex: number = 0
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      newIndex += Math.floor(window.scrollY / windowHeight);
      console.log(newIndex, components.length)

      // Ensure we always have two components in the visibleComponents array.
      if (newIndex !== visibleComponents[0]) {
        const newVisibleComponents = [newIndex, newIndex + 1];
        setVisibleComponents(newVisibleComponents);
      }
    };

    debouncedHandleScrollRef.current = _debounce(handleScroll, 100);
    const debounceHandler = debouncedHandleScrollRef.current

    window.addEventListener('scroll', debounceHandler);
    return () => {
      window.removeEventListener('scroll', debounceHandler);
    };
  }, []);

  return (
    <main>
      <div>
        {visibleComponents.map((index) => (
          <div key={index} className="scroll-smooth snap-none overscroll-none">
            {components[index % (components.length)]}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
