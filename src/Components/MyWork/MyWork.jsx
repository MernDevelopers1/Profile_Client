// import React from 'react';
import theme_pattern from "../../assets/theme_pattern.svg";
import myWork from "../../assets/mywork_data";
import { Link } from "react-router-dom"; // Assuming you are using React Router

const MyWork = ({ showAll }) => {
    return (
        <div className="container">
            <div className="py-20">
                <div className="flex justify-center relative mb-20">
                    <h1 className="text-6xl text-white text-center">My Latest Work</h1>
                    <img className="hidden lg:block absolute z-[-1] left-1/2" src={theme_pattern} alt="" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 flex-col items-center">
                    {myWork.slice(0, showAll ? myWork.length : 6).map((work, index) => (
                        <div key={index} className="relative group overflow-hidden">
                            {/* Image with scale effect on hover */}
                            <img
                                className="work-image h-[300px] box-border w-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
                                src={work.w_img}
                                alt=""
                            />

                            {/* Overlay with buttons */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                                <Link to={`/preview/${work.w_no}`}>
                                    <button
                                        className="cursor-pointer workbutton relative bg-white tracking-widest text-white text-2xl px-[30px] py-[10px] transition-all duration-500 ease-in-out hover:scale-105"
                                    >
                                        <span>Preview<i></i></span>
                                    </button>
                                </Link>
                                <Link to={`/code/${work.w_no}`}>
                                    <button className="cursor-pointer workbutton relative ml-5 bg-white tracking-widest text-white text-2xl px-[30px] py-[10px] transition-all duration-5000 ease-in-out hover:scale-105">
                                        <span>Code<i></i></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
                {/* Show More button only when not showing all items */}
                {!showAll && (
                    <div className="flex justify-center mt-10">
                        <Link to="/work">
                            <button
                                className="workbutton relative bg-white tracking-widest text-white text-2xl mt-10 px-[30px] py-[10px] transition-transform duration-500 ease-in-out hover:scale-105">
                                <span>Show More<i></i></span>
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyWork;
