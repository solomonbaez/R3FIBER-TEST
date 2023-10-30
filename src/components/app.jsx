"use client";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/offscreen"

const AppScene = dynamic(() => import("./Scene"), { ssr: false })
const worker = new Worker(new URL('./worker.jsx', import.meta.url), { type: 'module' })

export default function App() {
  return (
    <>
        <div className="h-screen w-screen flex items-center justify-center bg-black">
            <Canvas
                worker={worker} fallback={<AppScene />}
                shadows dpr={[1, 1.5]} gl={{ antialias: false }} 
                camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }} 
                style={{height: 500, borderRadius: 25 }}
            />
        </div>
        <div className="h-screen w-screen flex items-center justify-center bg-black-600">
            <h1 className="text-8xl text-white">Hello, World!</h1>
        </div>
    </>
  )
}
