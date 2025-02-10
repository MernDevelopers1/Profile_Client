import React, { useEffect } from 'react';
import { FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineMoreTime } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";

const serviceData = [
    {
        icons: FaHtml5,
        name: "Design to HTML",
        desc: "Transforming design mockups (like PSD) into fully functional HTML websites."
    },
    {
        icons: FaBootstrap,
        name: "Bootstrap",
        desc: "Utilizing Bootstrap framework to create responsive and mobile-first websites."
    },
    {
        icons: RiTailwindCssFill,
        name: "Tailwind",
        desc: "Implementing Tailwind CSS to develop highly customizable and responsive designs."
    },
    {
        icons: FaReact,
        name: "React JS",
        desc: "Building dynamic and interactive web applications using React JS."
    },
    {
        icons: FaNodeJs,
        name: "Node JS",
        desc: "Creating modern web interfaces with Vue.js, focusing on real-time updates."
    },
    {
        icons: MdOutlineMoreTime,
        name: "Best Practices",
        desc: "Implementing industry best practices for web development, ensuring quality and maintainability."
    }
];

const Services = () => {

    useEffect(() => {
        if (window.$) {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 5000,
                autoplayHoverPause: false,
                autoplayTimeout: 10000,
                smartSpeed: 800,
                navText: [
                    "<span class='text-3xl text-black'>&#10094;</span>",
                    "<span class='text-3xl text-black'>&#10095;</span>"
                ],
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 },
                    1000: { items: 3 }
                }
            });
        }
    }, []);

    return (
        <section className="bg-customred py-20 relative overflow-hidden">
            <div className="absolute -top-64 -right-64 bg-[#00000044] bg-opacity-5 rounded-full h-[700px] w-[700px]" data-aos="fade-left" data-aos-duration="3000"></div>
            <div className="absolute -bottom-64 -left-72 bg-[#00000044] bg-opacity-5 rounded-full h-[700px] w-[700px]" data-aos="fade-right" data-aos-duration="3000"></div>
            <div className="container mx-auto px-6">
                <h2 className="text-5xl sm:text-7xl font-bold uppercase text-customblack text-center mb-10" data-aos="zoom-in" data-aos-duration="2000">
                    What I’m <span className="text-black">Great At</span>
                </h2>
                <div className="owl-carousel owl-theme py-5">
                    {serviceData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-black p-6 rounded-xl text-center transition-all duration-700 ease-in-out hover:scale-95 hover:rotate-2 min-h-64"
                        >
                            <div className="mb-4 text-6xl text-customred flex justify-center items-center">
                                {React.createElement(service.icons)}
                            </div>
                            <h3 className="text-3xl font-semibold text-customblack mb-2">{service.name}</h3>
                            <p className="text-customblack text-lg font-redhat">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
