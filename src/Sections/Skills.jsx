import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {Robot} from "../Componenets/Robot.jsx";
import {OrbitControls, PerspectiveCamera, useGLTF} from "@react-three/drei";
import {Environment} from "@react-three/drei"

function Java() {
    const { scene } = useGLTF('src/assets/java.glb'); // if in public folder
    return <primitive object={scene} scale={0.01} rotation={[0, 2* Math.PI , 0]}/>;
}

export const Skills = () => {
    return (
        <div>
            <div className={'shareTech text-center  text-black italic text-5xl mt-[100px] mb-[50px]'}>
                Skills
            </div>
            <div className={'pl-8 pr-8'}>
                {/*bg-[#898989]*/}
                <div className={'bg- rounded-2xl h-[678px]'}>
                    {/*<Canvas style={{height: "678px" }}>*/}
                    {/*    <PerspectiveCamera makeDefault position={[0, 0,5]} />*/}
                    {/*    <ambientLight intensity={0.5} />*/}
                    {/*    <directionalLight intensity={2} position={[2, 2, 2]} />*/}
                    {/*    <Suspense fallback={null}>*/}
                    {/*        <Java />*/}
                    {/*    </Suspense>*/}

                    {/*    <OrbitControls  />*/}
                    {/*</Canvas>*/}
                    <div className={'flex flex-col'}>
                        <div className={'flex flex-row justify-evenly p-10 m-5'}>
                            <div>
                                <img src="src/assets/html.png" alt="java" className={'w-[200px] h-[200px] rounded-2xl floating'}/>
                            </div>

                            <div>
                                <img src="src/assets/css.png" alt="java" className={'w-[150px] h-[200px] rounded-2xl floating'}/>
                            </div>

                            <div>
                                <img src="src/assets/JavaScript.png" alt="java" className={'w-[200px] h-[200px] rounded-2xl floating'}/>
                            </div>

                            <div>
                                <img src="src/assets/python.png" alt="java" className={'w-[200px] h-[200px] rounded-2xl floating'}/>
                            </div>
                        </div>

                        <div className={'flex flex-row justify-evenly p-10 m-5'}>
                            <div>
                                <img src="src/assets/java.png" alt="java" className={'w-[270px] h-[200px] rounded-2xl floating'}/>
                            </div>

                            <div>
                                <img src="src/assets/blender.png" alt="java" className={'w-[200px] h-[200px] rounded-2xl floating'}/>
                            </div>

                            <div>
                                <img src="src/assets/React.png" alt="java" className={'w-[200px] h-[200px] rounded-2xl floating'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
