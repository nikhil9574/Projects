

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useThree} from "@react-three/fiber"
import {useFrame} from "@react-three/fiber"

export function Robot(props) {
    const { nodes, materials } = useGLTF('src/assets/kawaii__cute_flying_robot.glb')
    const modelRef = useRef()
    const { mouse, viewport } = useThree()

    useFrame(() => {
        if (modelRef.current) {
            const x = (mouse.x * Math.PI) / 2
            const y = (mouse.y * Math.PI) / 2
            modelRef.current.rotation.y = x /3
            modelRef.current.rotation.x = -y /3
        }
    })

    return (
        <group {...props} dispose={null} ref={modelRef}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <lineSegments geometry={nodes.Object_2.geometry} material={materials['Material.002']} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials['Material.003']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('src/assets/kawaii__cute_flying_robot.glb')
