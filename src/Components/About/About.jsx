import { useEffect } from "react"


const About = () => {


    useEffect(() => {
        AOS.init();
    })

    return (
        <>
            <div className="bg-black pt-20 relative overflow-hidden">
                <div className="absolute -top-44 -right-64 bg-customblack bg-opacity-5 rounded-full h-[700px] w-[700px]" data-aos="fade-left" data-aos-duration="3000"></div>
                <div className="absolute -bottom-44 -left-72 bg-customblack bg-opacity-5 rounded-full h-[700px] w-[700px]" data-aos="fade-right" data-aos-duration="3000"></div>
                <div className="container mx-auto text-center">
                    <h2 className="text-7xl font-bold uppercase text-customblack" data-aos="zoom-in" data-aos-duration="2000">
                        Meet the Mind Behind <span className="text-customred">the Magic</span>
                    </h2>
                    <div className="relative flex justify-center items-center h-[900px] mx-auto">
                        {/* Background Circles */}
                        <div className="absolute bg-customblack bg-opacity-5 rounded-full h-[800px] w-[800px]" data-aos="fade-up" data-aos-duration="2000"></div>
                        <div className="absolute bg-customblack bg-opacity-10 rounded-full h-[600px] w-[600px]" data-aos="fade-up" data-aos-duration="2200"></div>
                        <div className="absolute bg-customblack bg-opacity-5 rounded-full h-[400px] w-[400px]" data-aos="fade-up" data-aos-duration="2400"></div>
                        {/* Center Text Container */}
                        <div className="relative z-10 flex flex-col justify-center items-center text-center">
                            <p className="text-2xl text-customblack font-redhat mb-10 px-[400px]" data-aos="fade-up" data-aos-duration="2000">
                                Hey I am <span className="text-customred italic ml-3 mr-3 underline font-semibold">Usama</span> a passionate front end Developer in React JS, tailwind UI/UX
                            </p>
                            <h3 className="text-7xl font-semibold text-customblack leading-tight mb-10" data-aos="fade-up" data-aos-duration="3000">Get the Serive You Need to <br /> <span className='text-customred'>Make More Money</span> - Faster and Smarter!</h3>
                            <p className="text-customblack text-2xl px-44 font-redhat mb-10" data-aos="zoom-in" data-aos-duration="2000">I’m a passionate Front-End Developer specializing in React.js, Tailwind CSS, HTML, and CSS, with experience in Node.js. I’ve built multiple front-end projects, crafting seamless, responsive, and high-performance web applications. My focus is on clean, maintainable code and delivering engaging user experiences. Whether it’s developing dynamic UIs, optimizing performance, or ensuring pixel-perfect designs, I bring creativity and technical expertise to every project.</p>
                            <a href="/public/Usama Resume.pdf" target="blank" className="bg-customred text-customblack px-14 py-4 text-xl transition-all duration-500 ease-out hover:bg-customblack hover:text-customred uppercase">
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

