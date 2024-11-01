// import React from 'react'
import CanvasBackground from "../Components/CanvasBackground";
import MyWork from "../Components/MyWork/MyWork";
import Navbar from "../Components/Navbar/Navbar"

const MyOwrk = () => {
    return (
        <>
            <div className="relative min-h-screen py-[20px] pt-20">
                <CanvasBackground />
                <Navbar/>
                <MyWork showAll={true}/>
            </div>
        </>

    );
}

export default MyOwrk
