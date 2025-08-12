import React from 'react'
import {CONTACT} from "../constants/index.js";
import {motion as _motion} from "framer-motion";

const ContactUs = () => {
    return (
        <div className={'text-center pb-7'}>
            <_motion.h2 whileInView={{opacity:1 , y:0}} transition={{duration:1.5}} initial={{opacity:0 , y:-100}} className={'text-3xl font-semibold pt-20 pb-7'}>Contact Us</_motion.h2>

            <_motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className={'mt-2 text-stone-400'}>{CONTACT.email}</_motion.p>

            <_motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className={'mt-2 text-stone-400'}>{CONTACT.phoneNo}</_motion.p>

            <_motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className={'mt-2 text-stone-400'}>{CONTACT.address}</_motion.p>

        </div>
    )
}
export default ContactUs
