// import React from 'react'
// import CanvasBackground from "../Components/CanvasBackground";
import Navbar from "../Components/Navbar/Navbar"
import Services from "../Components/Services/Services";
const ServicesPage = () => {
    return (
        <>
            <div className="pt-20 bg-gray-700">
                <Navbar/>
                <Services showAll={true}/>
            </div>
        </>

    );
}

export default ServicesPage
