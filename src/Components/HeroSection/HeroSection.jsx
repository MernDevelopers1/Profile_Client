import { useEffect, useState } from 'react';
import profile from '../../assets/profile_u.avif';

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

        if(displayedText === '') {
            type();
        }

        return () => {
            index = text.length;
        };
    }, [text]);

    return (
        <div className="container flex flex-col items-center min-h-screen">
            <div className="text-center mt-24 md:mt-28 lg:mt-40">
                <img className='w-60 mx-auto mb-5 rounded-full' src={profile} alt="Profile" />
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
            <div className='flex mt-7'>
                <a className="items-center cursor-pointer text-white px-3 md:px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-lg md:text-xl rounded-full transition-transform transform duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:scale-105 mr-2">
                    Connect
                </a>
                <a className="items-center cursor-pointer text-white px-3 md:px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-lg md:text-xl rounded-full transition-transform transform duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:scale-105">
                    Resume
                </a>
            </div>
        </div>


    );
}

export default HeroSection;
