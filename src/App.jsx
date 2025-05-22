import React from 'react'
import {Navbar} from "./Sections/Navbar.jsx";
import {Hero} from "./Sections/Hero.jsx";
import {Skills} from "./Sections/Skills.jsx";
import {Projects} from "./Sections/Projects.jsx";
import {ContactUs} from "./Sections/ContactUs.jsx";

export const App = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <ContactUs />
        </>
    )
}
