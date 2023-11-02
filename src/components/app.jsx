"use client";
import React from 'react'
import dynamic from "next/dynamic";
// import { Canvas } from "@react-three/offscreen"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import Scene from '@/components/balance'


// const AppScene = dynamic(() => import("./positivity"), {ssr: false})
// const worker = new Worker(new URL('./worker.jsx', import.meta.url))

const Spaciality = dynamic(() => import("./spaciality"), {ssr: false})

export default function App() {
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])

  return (
    // <Canvas
    //     worker={worker} fallback={<AppScene />}
    //     shadows dpr={[1, 1.5]} gl={{ antialias: false }} 
    //     camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} 
    //     style={{height: 500, borderRadius: 25 }}
    // />
    // <Canvas
    //     // worker={worker} fallback={<AppScene />}
    //     shadows dpr={[1, 1.5]} gl={{ antialias: false }} 
    //     camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} 
    //     style={{height: 500, borderRadius: 25 }}
    // >
    //     <AppScene />
    // </Canvas>
    // <Spaciality />
    <a.main style={{ background }}>
      <Canvas className="canvas" dpr={[1, 2]}>
        <Scene setBg={set} />
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </a.main>
  )
}
