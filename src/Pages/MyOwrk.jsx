// import React from 'react'
// import CanvasBackground from "../Components/CanvasBackground";
import MyWork from "../Components/MyWork/MyWork";
import Navbar from "../Components/Navbar/Navbar"

const MyOwrk = () => {
    return (
        <>
            <div className="pt-20">
                <Navbar/>
                <MyWork showAll={true}/>
            </div>
        </>

    );
}

export default MyOwrk
