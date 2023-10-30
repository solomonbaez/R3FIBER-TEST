// import dynamic from "next/dynamic";
// const App = dynamic(() => import("@/components/app"), { ssr: false })

// export default function Home() {
//   return (
//     <App/>
//   )
// }

"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/offscreen';

const AppScene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function App() {
  const [worker, setWorker] = useState<Worker | null>(null); 

  useEffect(() => {
    const workerInstance = new Worker(new URL('@/components/worker', import.meta.url), { type: 'module' });
    setWorker(workerInstance);

    return () => {
      workerInstance.terminate();
    };
  }, []);

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        {worker ? ( // Conditional rendering
          <Canvas
            worker={worker}
            fallback={<AppScene />}
            shadows
            dpr={[1, 1.5]}
            gl={{ antialias: false }}
            camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
            style={{ height: 500, borderRadius: 25 }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="h-screen w-screen flex items-center justify-center bg-black-600">
        <h1 className="text-8xl text-white">Hello, World!</h1>
      </div>
    </>
  );
}
