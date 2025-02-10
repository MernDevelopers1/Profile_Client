import { useEffect } from "react"


const About = () => {


    useEffect(() => {
        AOS.init();
    })

    return (
        <>
            <div className="bg-black pt-20 relative overflow-hidden">
                {/* Background Circles (Hidden on Small Screens) */}
                <div className="absolute hidden lg:block -top-44 -right-64 bg-customblack bg-opacity-5 rounded-full h-[700px] w-[700px]" data-aos="fade-left" data-aos-duration="3000"></div>
                <div className="absolute hidden lg:block -bottom-44 -left-72 bg-customblack bg-opacity-5 rounded-full h-[700px] w-[700px]" data-aos="fade-right" data-aos-duration="3000"></div>

                <div className="container mx-auto pb-10 text-center px-4 sm:px-6 md:px-8 xl:px-0">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-customblack" data-aos="zoom-in" data-aos-duration="2000">
                        Meet the Mind Behind <span className="text-customred">the Magic</span>
                    </h2>

                    <div className="relative flex flex-col justify-center items-center h-auto lg:h-[900px] mx-auto mt-6">
                        {/* Background Circles */}
                        <div className="absolute hidden md:block bg-customblack bg-opacity-5 rounded-full h-[400px] w-[400px] lg:h-[800px] lg:w-[800px]" data-aos="fade-up" data-aos-duration="2000"></div>
                        <div className="absolute hidden md:block bg-customblack bg-opacity-10 rounded-full h-[300px] w-[300px] lg:h-[600px] lg:w-[600px]" data-aos="fade-up" data-aos-duration="2200"></div>
                        <div className="absolute hidden md:block bg-customblack bg-opacity-5 rounded-full h-[200px] w-[200px] lg:h-[400px] lg:w-[400px]" data-aos="fade-up" data-aos-duration="2400"></div>

                        {/* Center Text Container */}
                        <div className="relative z-10 flex flex-col justify-center items-center text-center sm:px-8">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-customblack font-redhat mb-6 md:mb-10  md:px-12 xl:px-[400px]" data-aos="fade-up" data-aos-duration="2000">
                                Hey, I am <span className="text-customred italic ml-1 mr-1 underline font-semibold">Usama</span>, a passionate Front-End Developer specializing in React JS and Tailwind UI/UX.
                            </p>

                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-customblack leading-tight mb-6 md:mb-10" data-aos="fade-up" data-aos-duration="3000">
                                Get the Service You Need to <br />
                                <span className='text-customred'>Make More Money</span> - Faster and Smarter!
                            </h3>

                            <p className="text-customblack text-base sm:text-lg md:text-xl lg:text-2xl px-0 sm:px-10 md:px-20 lg:px-44 font-redhat mb-6 md:mb-10" data-aos="zoom-in" data-aos-duration="2000">
                                I’m a passionate Front-End Developer specializing in React.js, Tailwind CSS, HTML, and CSS, with experience in Node.js. I’ve built multiple front-end projects, crafting seamless, responsive, and high-performance web applications. My focus is on clean, maintainable code and delivering engaging user experiences. Whether it’s developing dynamic UIs, optimizing performance, or ensuring pixel-perfect designs, I bring creativity and technical expertise to every project.
                            </p>

                            <a href="/public/Usama Resume.pdf" target="blank"
                                className="bg-customred text-customblack px-8 sm:px-10 md:px-14 py-3 sm:py-4 text-lg sm:text-xl transition-all duration-500 ease-out hover:bg-customblack hover:text-customred uppercase">
                                Check Out My CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About

