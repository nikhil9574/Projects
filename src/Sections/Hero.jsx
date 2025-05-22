import React, {Suspense} from 'react'
import {Robot} from "../Componenets/Robot.jsx";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";

export const Hero = () => {
    return (
        <div className="pr-8 pl-8">
            {/* Text block */}
            <div className="text-3xl font-bold text-white relative top-[350px] pl-7">
                hii my name is nikhil
            </div>

            {/* Canvas wrapper with relative positioning */}
            <div className="bg-[#898989] rounded-2xl mt-8 relative" style={{ height: "700px" }}>
                {/* Overlay for Logo and Buttons */}
                <div className="absolute top-4 left-4 flex items-center space-x-4 z-10">
                    {/* Logo */}
                    <img src="src/assets/logo.png" alt="Logo" className="h-14 w-14 object-contain" />
                </div>

                <div className="absolute top-4 right-4 flex space-x-4 z-10">
                    {/* Buttons */}
                    <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-[#D9D9D9] hover:text-black transition">
                        Button 1
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-[#D9D9D9] hover:text-black transition">
                        Button 2
                    </button>
                </div>

                <div className={'relative top-[350px] pl-7'}>
                    <div className={'text-white text-5xl font-bold shareTech'}>Hi! I'm Nikhil prajapati</div>
                    <p className={'text-white text-2xl'}>I am 3D web developer</p>
                </div>

                {/* 3D Canvas */}
                <Canvas style={{ height: "700px" }}>
                    <PerspectiveCamera makeDefault position={[0, 2, 5]} />
                    <ambientLight intensity={0.5} />
                    <directionalLight intensity={2} position={[2, 2, 2]} />

                    <Suspense fallback={null}>
                        <Robot scale={1.2} rotation={[0, 2 * Math.PI, 0]} position={[0, 0.5, 0]} />
                    </Suspense>

                    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                </Canvas>
            </div>
        </div>

    )
}
