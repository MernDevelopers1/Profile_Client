// import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center py-10">
                    <div className="max-w-lg">
                        <h1 className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent text-4xl leading-tight font-bold mb-4">
                            USAMA DOGAR
                        </h1>
                        <p className="text-gray-300 font-light text-lg">
                            I excel at creating user-friendly interfaces that enhance user experience across all devices.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-start mt-6 md:mt-0 gap-5">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="px-4 h-14 min-w-[300px] py-3 rounded-full border border-gray-300 bg-black bg-opacity-20 mr-0 md:mr-2 mb-2 md:mb-0"
                        />
                        <a className="cursor-pointer workbutton relative bg-white tracking-widest text-white text-2xl px-[30px] py-[10px] transition-all duration-5000 ease-in-out hover:scale-105">
                            <span>Subscribe<i></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
