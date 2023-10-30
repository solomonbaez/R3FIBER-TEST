"use client";
import { lazy } from "react"
// import { Canvas } from "@react-three/offscreen"
import { Canvas } from "@react-three/fiber"

const AppScene = lazy(() => import("./Scene"))
const worker = new Worker(new URL('./worker.jsx', import.meta.url), { type: 'module' })

export default function App() {
  return (
    // <Canvas
    //     worker={worker} fallback={<AppScene />}
    //     shadows dpr={[1, 1.5]} gl={{ antialias: false }} 
    //     camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} 
    //     style={{height: 500, borderRadius: 25 }}
    // />
    <Canvas
        // worker={worker} fallback={<AppScene />}
        shadows dpr={[1, 1.5]} gl={{ antialias: false }} 
        camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} 
        style={{height: 500, borderRadius: 25 }}
    >
        <AppScene />
    </Canvas>

  )
}
