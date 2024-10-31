// import React from 'react';
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const personalInfo = [
        {
            icon: <FaEnvelope className="mr-2 text-white" />,
            label: 'example@mail.com'
        },
        {
            icon: <FaPhone className="mr-2 text-white" />,
            label: '+1234567890'
        },
        {
            icon: <FaMapMarkerAlt className="mr-2 text-white" />,
            label: '123 Main St, City, Country'
        },
    ];

    return (
        <>
            <div className="bg-gradient-to-r from-red-400 to-yellow-400">
                <div className="container">
                    <div className="py-16 ">
                        <div className="flex justify-center relative mb-10 md:mb-20 ">
                            <h1 className="text-6xl z-[2] text-white">Contact</h1>
                            <img className="hidden md:block absolute z-[1] left-1/2" src={theme_pattern} alt="" />
                        </div>

                        <div className="flex flex-col lg:flex-row"> {/* Changed flex direction */}
                            <div className="w-full lg:w-2/6 pr-4"> {/* Changed width to w-full for smaller devices */}
                                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-red-950 bg-clip-text text-transparent mb-5">Feel free to talk</h1>
                                <p className="mb-4 text-white font-light text-lg">
                                    I excel at creating user-friendly interfaces that enhance user experience across all devices, effectively communicating design concepts and collaborating with stakeholders to deliver high-quality web solutions that drive engagement and results.
                                </p>
                                <div>
                                    {
                                        personalInfo.map((info, index) => (
                                            <div className="flex items-center gap-4 mb-2" key={index}>
                                                <span className="">{info.icon}</span>
                                                <span className="text-xl bg-gradient-to-r from-blue-600 to-red-950 bg-clip-text text-transparent">{info.label}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3"> {/* Changed width to w-full for smaller devices */}
                                <form className="bg-gray-600 bg-opacity-35 p-6 rounded-xl shadow-md mt-10 lg:mt-0">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Enter Your Name"
                                            className="w-full p-3 bg-black bg-opacity-20 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter Your Email"
                                            className="w-full p-3 bg-black bg-opacity-20 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="msg" className="block text-gray-700 font-semibold mb-2">Your Message Here</label>
                                        <textarea
                                            name="msg"
                                            id="msg"
                                            rows="5"
                                            placeholder="Write your message..."
                                            className="w-full p-3 bg-black bg-opacity-20 border border-gray-300 rounded-md"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-red-950 text-white font-semibold p-3 rounded-md hover:from-red-950 hover:to-blue-600 transition duration-300"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
