// import React from 'react';
import { useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

    const [result, setResult] = useState("");
    console.log('result', result)
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "57b52d6f-ce9f-4d3c-aaa8-ab8b4847716c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            alert("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    const personalInfo = [
        {
            icon: <FaEnvelope className="mr-2 text-white" />,
            label: 'usamadeveloper14@gmail.com'
        },
        {
            icon: <FaPhone className="mr-2 text-white" />,
            label: '+92 333 1411367'
        },
        {
            icon: <FaMapMarkerAlt className="mr-2 text-white" />,
            label: 'Lahore, Pakistan'
        },
    ];

    return (
        <>
            <div className="bg-gradient-to-r from-[#E0AEA3] to-[#3B403B]">
                <div className="container">
                    <div className="py-16 ">
                        <div className="flex justify-center relative mb-10 md:mb-20 ">
                            <h1 className="text-6xl z-[2] text-white">Contact</h1>
                            <img className="hidden md:block absolute z-[1] left-1/2" src={theme_pattern} alt="" />
                        </div>

                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-2/6 pr-4">
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
                                <form onSubmit={onSubmit} className="bg-[#1d2b3a] p-10 rounded-xl shadow-md mt-10 lg:mt-0">
                                    <div className="inputbox mb-8 relative">
                                        {/* <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label> */}
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            // placeholder="Enter Your Name"
                                            className="w-full p-5 bg-[#1d2b3a] rounded-md outline-none text-white text-lg h-16 duration-500"
                                            required="required"
                                        />
                                        <span className="uppercase text-white absolute left-0 pointer-events-none text-lg duration-500">Your Name</span>
                                    </div>
                                    <div className="inputbox mb-8 relative">
                                        {/* <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label> */}
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            // placeholder="Enter Your Email"
                                            className="w-full p-5 bg-[#1d2b3a] rounded-md outline-none text-white text-lg h-16 duration-500"
                                            required="required"
                                        />
                                        <span className="uppercase text-white absolute left-0 pointer-events-none text-lg duration-500">Your Email ID</span>
                                    </div>
                                    <div className="inputbox mb-8 relative">
                                        {/* <label htmlFor="msg" className="block text-gray-700 font-semibold mb-2">Your Message Here</label> */}
                                        <textarea
                                            name="msg"
                                            id="msg"
                                            rows="5"
                                            // placeholder="Write your message..."
                                            className="w-full p-5 bg-[#1d2b3a] rounded-md outline-none text-white text-lg duration-500"
                                            required="required"
                                        ></textarea>
                                        <span className="uppercase text-white absolute left-0 pointer-events-none text-lg duration-500">Your Message</span>
                                    </div>
                                    <button type="submit" className="cursor-pointer workbutton relative bg-white tracking-widest text-white text-2xl px-[30px] py-[10px] transition-all duration-5000 ease-in-out hover:scale-105">
                                        <span>Submit<i className=""></i></span>
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
