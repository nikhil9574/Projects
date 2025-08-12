import React from 'react'
import logo from '../assets/raviKumarLogo.webp'
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa'


const Navbar = () => {
    return (
        <div className={'flex justify-between items-center py-6'}>
            <div className={'flex flex-shrink-0 items-center gap-4'}>
                <a href={'/'} aria-label={'Home'}>
                    <img
                        className={'h-10 w-10'}
                        src={logo}
                        alt={'logo'}
                    />
                </a>
            </div>

            <div className={'flex flex-shrink-0 items-center gap-4'}>
                <a href={'#'} aria-label={'Github'} target={'_blank'} rel={'noopener noreferrer'}>
                    <FaGithub />
                </a>
                <a href={'#'} aria-label={'Linkedin'} target={'_blank'} rel={'noopener noreferrer'}>
                    <FaLinkedin />
                </a>

                <a href={'#'} aria-label={'Instagram'} target={'_blank'} rel={'noopener noreferrer'}>
                    <FaInstagram />
                </a>
            </div>
        </div>
    )
}
export default Navbar
