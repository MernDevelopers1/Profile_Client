import React, { useEffect } from 'react';
import serviceData from "../../assets/services_data";

const Services = ({ showAll, Standalone  }) => {


    useEffect(()=> {
        AOS.init();
    })
    return (
        
        <div className={`text-white text-center bg-lightyellow px-2 xl:px-0 ${Standalone ? "full-screen" : ""} `} data-aos="fade-up" data-aos-duration="3000" >
            <div className="container mx-auto" >
                <div className="py-10 md:py-20">
                    <h1 className="text-2xl md:text-4xl font-medium text-gray-800 uppercase mb-8">Skills</h1>
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1" data-aos="flip-up" data-aos-duration="1000" data-aos-easing="ease-in-back">
                            {serviceData.slice(0, showAll ? serviceData.length : 6).map((service, index) => {
                                return (
                                    <div
                                        key={index}
                                        
                                        className="group servicesanimation bg-[#343330] rounded-md py-6 md:py-10 flex flex-col gap-1 md:gap-2 items-center text-center transition-transform transform duration-500 ease-out hover:scale-95 hover:bg-gradient-to-r hover:from-[#2B3B2D] hover:to-[#A24936] px-4"
                                    >
                                        <div className="text-5xl font-semibold text-white">
                                            {React.createElement(service.s_icon)}
                                        </div>
                                        <h2 className="text-2xl md:text-[38px] leading-snug font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                                            {service.s_name}
                                        </h2>
                                        <p className="mt-2 text-gray-300">{service.s_desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
