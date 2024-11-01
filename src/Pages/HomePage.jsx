
// import React from 'react';
import About from "../Components/About/About";
import CanvasBackground from "../Components/CanvasBackground";
import CanvasForServices from "../Components/CanvasForServices"
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/HeroSection";
import MyWork from "../Components/MyWork/MyWork";
import Navbar from "../Components/Navbar/Navbar"
import Services from "../Components/Services/Services";


const HomePage = () => {
    return (
        <>
            <div className="relative min-h-screen py-[20px]">
                <CanvasBackground />
                <Navbar />
                <HeroSection />
            </div>
            <About />
            <div className="relative min-h-screen py-[20px]">
                <CanvasForServices/>
                <Services />
            </div>
            {/* <Services /> */}
            <MyWork showAll={false} />
            <Contact/>
            <Footer/>
        </>

    );
};

export default HomePage;
