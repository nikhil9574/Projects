import React from 'react'
import profilePic from '../assets/raviKumarProfile.png'

import {HERO_CONTENT} from "../constants/index.js";
import {motion as _motion} from "framer-motion";


const containerVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.4
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}

const Hero = () => {
    return (
        <div className={'pb-4 lg:mb-36'}>
            <div className={'flex flex-wrap lg:flex-row-reverse'}>
                <div className={'w-full lg:w-1/2'}>
                    <div className={'flex justify-center lg:p-8'}>
                        <_motion.img src={profilePic} alt={'Nikhil prajapati'} className={'border border-stone-600 rounded-3xl'} width={650} height={650} initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1,delay:1.5}}/>
                    </div>

                </div>

                <div className={'w-full lg:w-1/2'}>
                    <_motion.div className={'flex flex-col items-center lg:items-start mt-10'} variants={containerVariants} initial={'hidden'} animate={'visible'}>
                        <_motion.h2 variants={childVariants} className={'pb-4 text-4xl tracking-tighter lg:text-8xl'}>
                            Nikhil Prajapati
                        </_motion.h2>
                        <_motion.span variants={childVariants} className={'bg-gradient-to-r from-stone-300 to-stone-600 text-transparent bg-clip-text tracking-tighter'}>
                            Full Stack Developer
                        </_motion.span>
                        <_motion.p variants={childVariants} className={'my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'}>
                            {HERO_CONTENT}
                        </_motion.p>
                        <_motion.a href={'./resume.pdf'}
                           target={'_blank'}
                           rel={'noopener noreferrer'}
                           className={'bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:text-white hover:bg-stone-800'}
                        >
                            Dowanload resume
                        </_motion.a>
                    </_motion.div>

                </div>
            </div>
        </div>
    )
}
export default Hero
