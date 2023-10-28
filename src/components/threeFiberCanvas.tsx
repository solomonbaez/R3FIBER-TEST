import { Canvas } from "@react-three/fiber"

function ThreeFiberCanvas() {
    return (
        <div id="canvas-container">
            <Canvas>
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    );
}

export default ThreeFiberCanvas;