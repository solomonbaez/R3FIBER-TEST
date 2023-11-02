"use client";
import dynamic from "next/dynamic";
// import { Canvas } from "@react-three/offscreen"
import { Canvas } from "@react-three/fiber"

// const AppScene = dynamic(() => import("./positivity"), {ssr: false})
// const worker = new Worker(new URL('./worker.jsx', import.meta.url))

const Spaciality = dynamic(() => import("./spaciality"), {ssr: false})

export default function App() {
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
    <Spaciality />
  )
}
