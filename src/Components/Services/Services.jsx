// import React from 'react'
import serviceData from "../../assets/services_data"
// import arrowicon from "../../assets/arrow_icon.svg"
const Services = ({showAll}) => {
    return (
        <>
            <div className=" p-4 text-white text-center">
                <div className="container">
                    <div className="py-10 md:py-20">
                        <h1 className="text-4xl md:text-6xl text-white">My Services</h1>
                        <div className="mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 md:py-20">
                                {
                                    serviceData.slice(0, showAll ? serviceData.length : 6).map((service, index) => {
                                        return (
                                            <div key={index} className="servicesanimation bg-[#343330] rounded-xl py-10 flex flex-col items-center text-center transition-transform transform duration-300 ease-in-out hover:scale-105
                                            hover:bg-gradient-to-r hover:from-[#3f0028] hover:to-[#482300]">
                                                <h3 className="text-[28px] font-semibold">{service.s_no}</h3>
                                                <h2 className="text-[38px] font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                                                    {service.s_name}
                                                </h2>
                                                <p className="mt-2 text-gray-500">{service.s_desc}</p>
                                                <div className="mt-auto">
                                                    <a href="/" className="text-blue-500 hover:underline">Read More</a>
                                                    {/* <img src={arrowicon} alt="Arrow icon" className="mt-2 inline-block" /> */}
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Services
