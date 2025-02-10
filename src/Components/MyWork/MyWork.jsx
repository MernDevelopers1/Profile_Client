// import React from 'react';
import { useEffect } from "react";
import projects from "../../ProjectsData/projects_data";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


const MyWork = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    useEffect(() => {
        if (window.$) {
            $('.work-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,

                dots: false,
                autoplay: true,
                autoplaySpeed: 10000,
                autoplayHoverPause: false,
                autoplayTimeout: 10000,
                smartSpeed: 800,
                navText:
                    [
                        `<span class="custom-prev">${FaArrowLeft()}</span>`,
                        `<span class="custom-next">${FaArrowRight()}</span>`
                    ],
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 },
                    1100: { items: 3 }
                }
            });
        }
    }, []);



    return (
        <>
            <div className="bg-black py-10 md:py-20 relative overflow-hidden">
                <div className="absolute hidden md:block -top-64 -right-64 bg-customblack bg-opacity-10 rounded-full h-[700px] w-[700px]" data-aos="fade-left" data-aos-duration="3000"></div>
                <div className="absolute hidden md:block -bottom-64 -left-72 bg-customblack bg-opacity-10 rounded-full h-[700px] w-[700px]" data-aos="fade-right" data-aos-duration="3000"></div>
                <div className="container mx-auto px-3 xl:px-0">
                    <h2 className="text-3xl md:text-5xl  font-bold uppercase text-customblack text-center mb-8 md:mb-14" data-aos="zoom-in" data-aos-duration="2000">
                        My Recent <span className="text-customred">Creations</span>
                    </h2>
                    <div className="owl-carousel work-carousel owl-theme">
                        {projects.map((service, index) => (
                            <Link
                                key={index}
                                to={`/preview/${service.no}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(`/preview/${service.no}`, "_blank");
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="relative bg-black rounded-xl text-center transition-all duration-700 ease-in-out hover:scale-95 overflow-hidden">
                                    <img src={service.img} alt="" className="w-full h-[300px] object-cover blur-sm" />
                                    <div className="absolute inset-0 bg-customred bg-opacity-80 flex flex-col justify-center items-center">
                                        <h3 className=" text-xl md:text-3xl uppercase font-semibold text-black">{service.name}</h3>
                                        <p className="text-black text-lg md:text-2xl font-bold font-redhat">{service.desc}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyWork;

