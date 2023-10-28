"use client"
import { useRef } from "react";
import { useFrame } from "@react-three/fiber"

function RotatingBox({position}) {
    const myMesh = useRef();

    useFrame(( state, delta ) => {
        myMesh.current.rotation.x += delta
    })

    return (
        <mesh position={position} ref={myMesh}>
            <boxGeometry args={[2, 2, 2]} />
            <meshPhysicalMaterial/>
        </mesh>
    )
}

export default RotatingBox;