import { useEffect, useState } from 'react';
import profile from '../../assets/profile_u.avif';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const text = "I am Usama, A front-End Web Developer";
    const [displayedText, setDisplayedText] = useState('');
    const typingSpeed = 100;

    useEffect(() => {
        let index = 0;
        const type = () => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
                setTimeout(type, typingSpeed);
            }
        };

        if (displayedText === '') {
            type();
        }

        return () => {
            index = text.length;
        };
    }, [text]);

    return (
        <div className="container flex flex-col items-center min-h-screen">
            <div className="text-center mt-24 md:mt-28 lg:mt-32">
                <div className="imagebox flex justify-center items-center">
                    <img className="w-60 mx-auto rounded-full z-10" src={profile} alt="Profile" />
                    <h3 className=''>Usama Nasir<br /> <span>Front End Developer</span></h3>
                    <button>Hire me</button>
                </div>

                <h1 className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent text-3xl lg:text-6xl
                md:text-4xl  mb-5">
                    {displayedText}
                </h1>
                <p className='text-white font-light text-base md:text-lg leading-snug'>
                    I am a skilled front-end developer specializing in responsive web applications using HTML, CSS, Bootstrap, Tailwind, React.js, and Vue.js.
                    I create user-friendly interfaces that enhance user experience across all devices. With expertise in modern frameworks and design principles,
                    I deliver high-quality, visually appealing web solutions that drive engagement and results for businesses.
                </p>
            </div>
            <div className='flex mt-10 gap-4 bg-transparent md:bg-gray-500 md:bg-opacity-50 md:rounded-xl p-0 md:p-10'>
                <Link to="/contact" className="herobutton relative inline-block text-[#03e9f4] cursor-pointer py-[25px] px-4 md:px-[30px] uppercase tracking-[4px] text-lg font-semibold transition duration-500 overflow-hidden">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    CONNECT
                </Link>
                <a
                    href="/public/Usama Nasir Resume.pdf" // Replace with the actual path to your PDF
                    target="_blank"
                    rel="noopener noreferrer" // This is a security best practice
                    className="herobutton relative inline-block text-[#03e9f4] cursor-pointer py-[25px] px-4 md:px-[30px] uppercase tracking-[4px] text-lg font-semibold transition duration-500 overflow-hidden"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Resume
                </a>

            </div>
        </div>


    );
}

export default HeroSection;
