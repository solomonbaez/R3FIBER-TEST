"use client"
import { useRef } from "react";
import { useFrame } from "@react-three/fiber"

function RotatingBox({position}) {
    const myMesh = useRef();

    useFrame(( state, delta ) => {
        myMesh.current.rotation.x += delta
        myMesh.current.rotation.y += (delta * 2)
        myMesh.current.rotation.z = Math.sin(state.clock.elapsedTime);
    })

    return (
        <mesh position={position} ref={myMesh}>
            <boxGeometry args={[2, 2, 2]} />
            <meshPhysicalMaterial/>
        </mesh>
    )
}

export default RotatingBox;