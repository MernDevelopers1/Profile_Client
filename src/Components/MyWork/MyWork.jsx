// import React from 'react';s
import theme_pattern from "../../assets/theme_pattern.svg";
import myWork from "../../assets/mywork_data";

const MyWork = ({ showAll }) => {
    return (
        <div className="container">
            <div className="py-20">
                <div className="flex justify-center relative mb-20">
                    <h1 className="text-6xl text-white text-center">My Latest Work</h1>
                    <img className=" hidden lg:block absolute z-[-1] left-1/2" src={theme_pattern} alt="" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 flex-col items-center">
                    {myWork.slice(0, showAll ? myWork.length : 6).map((work, index) => (
                        <div key={index}>
                            <img
                                className="box-border w-full h-full px-5 transition-all duration-300 ease-in cursor-pointer hover:scale-105 hover:border-b hover:border-pink-300 hover:pb-2"
                                src={work.w_img}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
                {/* Show More button only when not showing all items */}
                {!showAll && (
                    <div className="flex justify-center mt-10">
                        <button className="text-white text-2xl mt-10 rounded-full border-b border-white px-12 py-4 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105">
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyWork;
