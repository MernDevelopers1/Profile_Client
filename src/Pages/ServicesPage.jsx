// import React from 'react'
import CanvasBackground from "../Components/CanvasBackground";
import Navbar from "../Components/Navbar/Navbar"
import Services from "../Components/Services/Services";
const ServicesPage = () => {
    return (
        <>
            <div className="relative min-h-screen py-[20px] pt-20">
                <CanvasBackground />
                <Navbar/>
                <Services showAll={true}/>
            </div>
        </>

    );
}

export default ServicesPage
