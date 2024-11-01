// import React from 'react'
import About from "../Components/About/About";
import CanvasBackground from "../Components/CanvasBackground";
import Navbar from "../Components/Navbar/Navbar"
const AboutPage = () => {
    return (
        <>
            <div className="relative min-h-screen py-[20px] pt-24">
                <CanvasBackground />
                <Navbar/>
                <About/>
            </div>
        </>

    );
}

export default AboutPage
