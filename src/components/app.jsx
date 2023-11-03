"use client";
import React from 'react'
import dynamic from "next/dynamic";
// import { Canvas } from "@react-three/offscreen"
// import { Canvas } from '@react-three/fiber'
// import { Stats } from '@react-three/drei'
// import { OrbitControls } from '@react-three/drei'
// import { useSpring } from '@react-spring/core'
// import { a } from '@react-spring/web'
// const Balance = dynamic(() => import("./balance"), {ssr: false})

// const AppScene = dynamic(() => import("./spaciality"), {ssr: false})
const Ripple = dynamic(() => import("./ripple"), {ssr: false});

export default function App() {
  // const [{ background }, set] = useSpring({ background: '#f0f0f0'}, [])

  return (
    <main>
      <div className='h-screen w-screen'>
        <Ripple />
      </div>
    </main>
  )
}

    {/* // <Canvas
    //     worker={worker} fallback={<AppScene />}
    //     shadows dpr={[1, 1.5]} gl={{ antialias: false }} 
    //     camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} 
    //     style={{height: 500, borderRadius: 25 }}
    // /> */}

    // <a.main className="bg-[#f0f0f0] h-screen w-screen">
    //    <Canvas className="canvas" dpr={[1, 2]}>
    //      <Balance setBg={set} />
    //      <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
    //      <Stats />
    //    </Canvas>
    // </a.main>

    // <main>
    //   <div className='h-screen w-screen'>
    //     <AppScene />
    //   </div>
    // </main>