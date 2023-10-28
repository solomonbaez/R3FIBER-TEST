import { Canvas } from "@react-three/fiber"
import RotatingBox from "@/components/rotatingBox"

function ThreeFiberCanvas() {
    return (
        <div id="canvas-container" className="h-screen w-screen">
            <Canvas className="bg-white">
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 2]} intensity={0.5} />
                <RotatingBox position={[0, 0, 0]}/>
            </Canvas>
        </div>
    );
}

export default ThreeFiberCanvas;