// import React from 'react'
import CanvasBackground from "../Components/CanvasBackground";
import MyWork from "../Components/MyWork/MyWork";
import Navbar from "../Components/Navbar/Navbar"

const MyOwrk = () => {
    return (
        <>
            <div className="relative min-h-screen py-[20px]">
                <CanvasBackground />
                <Navbar/>
                <MyWork/>
            </div>
        </>

    );
}

export default MyOwrk
