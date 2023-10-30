"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
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
  const [visibleComponents, setVisibleComponents] = useState<number[]>([0, 1, 2]); // Start with the first two components.
  var newIndex: number = 0

  useEffect(() => {
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      newIndex += Math.floor(window.scrollY / windowHeight);
      console.log(newIndex, components.length)

      // Ensure we always have two components in the visibleComponents array.
      if (newIndex !== visibleComponents[0]) {
        const newVisibleComponents = [newIndex, newIndex + 1, newIndex + 2];
        setVisibleComponents(newVisibleComponents);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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