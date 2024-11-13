import { useEffect, useRef, useState } from 'react';
import theme_pattern from "../../assets/theme_pattern.svg";
// import skillsimage from "../../assets/skills.jpg";

const skills = [
    { name: "HTML", progress: 70 },
    { name: "CSS", progress: 75 },
    { name: "Bootstrap", progress: 80 },
    { name: "JS", progress: 50 },
    { name: "Tailwind", progress: 80 },
    { name: "React.js", progress: 60 },
    { name: "Next JS", progress: 50 },
    { name: "Vue.js", progress: 60 },
    { name: "Flutter", progress: 60 },
    { name: "Fire-Base", progress: 50 }
];

const About = () => {
    const [inView, setInView] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is in view
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div ref={aboutRef} className="container">
            <div className="my-10 md:my-20">
                {/* Title Section */}
                <div className="flex justify-center relative mb-10">
                    <h1 className="text-6xl text-white">About Me</h1>
                    <img className="hidden md:block absolute z-[-1] left-1/2" src={theme_pattern} alt="" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 bg-gray-600 p-5 md:p-10 rounded-2xl bg-opacity-25">
                    {/* Left Image (30% Width) */}
                    {/* <div className="w-full lg:w-1/4 flex items-center">
                        <img
                            src={skillsimage}
                            alt="Placeholder"
                            className="w-full h-auto rounded-lg shadow-lg p-3 md:p-20 lg:p-0"
                        />
                    </div> */}

                    {/* Right Content (70% Width) */}
                    <div className="w-full flex flex-col space-y-6 px-4 md:px-0">
                        <p className="text-white font-light text-[20px] text-justify">
                            I am a skilled front-end developer specializing in responsive web applications using HTML, CSS, Bootstrap, Tailwind, React.js, and Vue.js. I create user-friendly interfaces that enhance user experience across all devices. With expertise in modern frameworks and design principles, I deliver high-quality, visually appealing web solutions that drive engagement and results for businesses.
                        </p>

                        {/* Skills with Progress Bars */}
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center space-x-4 transition-transform transform duration-300 ease-in-out hover:scale-105">
                                    {/* Skill Name */}
                                    <span className="w-32 bg-gradient-to-r from-[#D36135] via-[#83BCA9] to-[#83BCA9] bg-clip-text text-transparent">
                                        {skill.name}
                                    </span>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-gray-300 rounded h-4 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#D36135] via-[#A24936] to-[#83BCA9] transition-all duration-1000 ease-out"
                                            style={{ width: inView ? `${skill.progress}%` : '0%' }}
                                        ></div>
                                    </div>

                                    {/* Progress Percentage */}
                                    <span className="ml-2 text-white">{skill.progress}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
