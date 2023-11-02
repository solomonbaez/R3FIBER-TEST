"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("@/components/app"), { ssr: false });
const Home: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <div className="h-screen w-screen">
        <App/>
      </div>
    </main>
  );
};

export default Home;