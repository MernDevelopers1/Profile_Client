// import React from 'react';
import { useEffect } from "react";
import projects from "../../ProjectsData/projects_data";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload';

const MyWork = ({ showAll }) => {

    useEffect(() => {
        window.scrollTo(0, 0);

        AOS.init();
    }, []);



    return (
        <div className="bg-white">
            <div className="container mx-auto">
                <div className="py-8 md:py-20 px-2 xl:px-0">
                    <div className="flex justify-center relative mb-4 md:mb-8">
                        <h1 className="text-2xl md:text-4xl font-medium text-lightblack text-center">My Latest Work</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 flex-col items-center" data-aos="fade-up" data-aos-duration="3000" >
                        {projects.slice(0, showAll ? projects.length : 6).map((work, index) => (
                            <div key={index} className="relative group overflow-hidden">
                                <Link to={`/preview/${work.w_no}`} className="">
                                    <LazyLoad
                                        height={300}
                                        offset={100}
                                        placeholder={<div className="h-[300px] w-full bg-gray-200 animate-pulse"></div>}
                                    >
                                        <img
                                            className="h-[300px] w-full rounded-md object-cover object-top transition-transform duration-700 ease-out group-hover:scale-90 border-2 border-black"
                                            src={work.img}
                                            alt={`Work ${index + 1}`}
                                        />
                                    </LazyLoad>
                                </Link>
                            </div>
                        ))}
                    </div>
                    {!showAll && (
                        <div className="flex justify-center mt-10">
                            <Link to="/work">
                                <button
                                    className="text-black text-xl px-8 py-2 rounded-lg bg-lightyellow transition-transform duration-300 ease-in-out hover:scale-105">
                                    <span>Show More<i></i></span>
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyWork;
