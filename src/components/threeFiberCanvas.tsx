import { Canvas } from "@react-three/fiber"

function ThreeFiberCanvas() {
    return (
        <div id="canvas-container">
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[2, 2, 2]} />
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    );
}

export default ThreeFiberCanvas;