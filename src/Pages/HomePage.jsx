
// import React from 'react';
import About from "../Components/About/About";
// import Contact from "../Components/Contact/Contact";
// import Footer from "../Components/Footer/Footer";
// import HeroSection from "../Components/HeroSection/HeroSection";
// import MyWork from "../Components/MyWork/MyWork";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar/Navbar"
// import Services from "../Components/Services/Services";
import Topbar from "../Components/Topbar";


const HomePage = () => {
    return (
        <>
            <Topbar/>
            <Navbar />
            <Banner/>
            <About />
            {/* <div className="py-[20px] bg-gray-600">
                <Services showAll={false} />
            </div> */}
            {/* <Services /> */}
            {/* <MyWork showAll={false} />
            <Contact/>
            <Footer/> */}
        </>

    );
};

export default HomePage;
