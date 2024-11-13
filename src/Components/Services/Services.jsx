import React from 'react';
import serviceData from "../../assets/services_data";

const Services = ({ showAll }) => {
    return (
        <div className="p-4 text-white text-center">
            <div className="container">
                <div className="py-10 md:py-20">
                    <h1 className="text-4xl md:text-6xl text-white">My Services</h1>
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 md:py-20">
                            {serviceData.slice(0, showAll ? serviceData.length : 6).map((service, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="group servicesanimation bg-[#343330] rounded-xl py-10 flex flex-col items-center text-center transition-transform transform duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-[#2B3B2D] hover:to-[#A24936] px-4"
                                    >
                                        <div className="text-5xl font-semibold text-white group-hover:text-blue-400">
                                            {React.createElement(service.s_icon)}
                                        </div>
                                        <h2 className="text-[38px] font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
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
