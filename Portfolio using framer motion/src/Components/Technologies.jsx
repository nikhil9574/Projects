import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import {SiBlender} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { SiThreedotjs } from "react-icons/si";

import {motion as _motion} from "framer-motion";
const iconVariants=(duration)=>({
    hidden: {
        y:-10
    },
    animate: {
        y:[10,-10],
        transition:{
            ease:"linear",
            duration: duration,
            repeat:Infinity,
            repeatType:"reverse"
        }

    }
})

const Technologies = () => {
    return (
        <div className={'pb-24'}>
            <_motion.h2 whileInView={{opacity:1 , y:0}} transition={{duration:1.5,delay:0.5}} initial={{opacity:0 , y:-100}} className={'text-center text-4xl my-20'}>Technologies</_motion.h2>

            <_motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0 , x:-100}} transition={{duration:2}} className={'flex flex-wrap items-center justify-center gap-4'}>

                <_motion.div variants={iconVariants(1)} initial={'hidden'} animate={'animate'} className={'p-4'}>
                    <RiReactjsLine className={'text-7xl text-cyan-700'}/>
                </_motion.div>

                <_motion.div variants={iconVariants(2)} initial={'hidden'} animate={'animate'} className={'p-4'}>
                    <SiBlender className={'text-7xl text-orange-300'}/>
                </_motion.div>

                <_motion.div variants={iconVariants(3)} initial={'hidden'} animate={'animate'} className={'p-4'}>
                    <FaHtml5 className={'text-7xl text-orange-600'}/>
                </_motion.div>

                <_motion.div variants={iconVariants(4)} initial={'hidden'} animate={'animate'} className={'p-4'}>
                    <FaCss3Alt className={'text-7xl text-blue-600'}/>
                </_motion.div>

                <_motion.div variants={iconVariants(5)} initial={'hidden'} animate={'animate'} className={'p-4'}>
                    <IoLogoJavascript className={'text-7xl text-yellow-400'}/>
                </_motion.div>

                <_motion.div variants={iconVariants(4)} initial={'hidden'} animate={'animate'} className={'p-4'}>
                    <FaJava className={'text-7xl text-red-600'}/>
                </_motion.div>

                <_motion.div variants={iconVariants(3)} initial={'hidden'} animate={'animate'} className={'p-4'}>
                    <FaFigma className={'text-7xl text-pink-600'}/>
                </_motion.div>

                <_motion.div variants={iconVariants(2)} initial={'hidden'} animate={'animate'} className={'p-4'}>
                    <SiThreedotjs className={'text-7xl text-violet-600'}/>

                </_motion.div>

            </_motion.div>
        </div>
    )
}
export default Technologies
