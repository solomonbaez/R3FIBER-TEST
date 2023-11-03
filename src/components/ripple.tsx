"use client";
import * as THREE from "three";
import { Text, TorusKnot, Stats } from '@react-three/drei'
import { Physics, RigidBody, BallCollider, RapierRigidBody } from "@react-three/rapier"
import { Canvas, ReactThreeFiber, useFrame } from '@react-three/fiber'
import { LayerMaterial, Normal, Fresnel, Displace, Noise } from 'lamina'
import { Displace as Disp, Normal as Norm } from 'lamina/vanilla'
import { useRef } from 'react'

export default function Index() {
	return (
		<Canvas
			camera={{
				position: [0, 0, 8],
				fov: 50,
				aspect: window.innerWidth / window.innerHeight,
				near: 0.1,
				far: 2000
			}}
			dpr={window.devicePixelRatio}>
			<color attach="background" args={['#000000']} />
			{/* <OrbitControls /> */}

      {/* <Physics gravity={[0, 0, 0]}> */}
				<WaveTorus />
      {/* </Physics> */}
      <Text
        scale={[0.5, 0.5, 2]}
				position={[0, 0, 2]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        HELLO WORLD
      </Text>
			<Stats />
		</Canvas>
	)
}

function WaveTorus() {
	const dispRef = useRef<Disp>(null)
	const normRef = useRef<Norm>(null)

	useFrame(({ clock }) => {
		const esp = clock.getElapsedTime()

		const u_direction_key = Object.keys(normRef.current!.uniforms).find((key) =>
			key.endsWith('direction')
		)
		if (u_direction_key) {
			normRef.current!.uniforms[u_direction_key].value.set(
				1 + Math.sin(esp),
				1 + Math.sin(esp + Math.PI * 0.5),
				1 + Math.sin(esp + Math.PI)
			)
		}

		const u_offset_key = Object.keys(dispRef.current!.uniforms).find((key) =>
			key.endsWith('offset')
		)
		if (u_offset_key) {
			dispRef.current!.uniforms[u_offset_key].value.addScalar(0.005)
		}
	})

	return (
		<TorusKnot args={[1, 0.3, 300, 100, 2, 3]}>
			<LayerMaterial>
				<Normal ref={normRef} />
				<Fresnel mode="multiply" intensity={0.9} power={3} bias={0} />
				<Displace ref={dispRef} mapping="local" type="simplex" strength={0.2} scale={1} />
				<Noise type="simplex" mapping="local" scale={500} colorA="#fff" mode="overlay" />
			</LayerMaterial>
		</TorusKnot>
	)
}
