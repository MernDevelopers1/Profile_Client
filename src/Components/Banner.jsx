import { useEffect } from "react"
import ss from "../assets/ban1.jpg"

const Banner = () => {
    useEffect(() => {
        AOS.init();
    })

    return (
        <>
            <div className="relative py-32 lg:py-56">
                <div className="absolute inset-0  bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60" style={{ backgroundImage: `url(${ss})` }}></div>
                <div className="relative container mx-auto px-2 xl:px-0">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-customblack text-7xl md:text-[150px] font-bold leading-none mb-6 uppercase text-center stroke-text"
                            data-aos="zoom-in" data-aos-duration="2000">
                            Design Deliver Deploy
                        </h1>
                        <p className="text-customblack mb-6 text-lg md:text-2xl font-redhat text-center font-normal px-0 md:px-20 lg:px-64"
                            data-aos="fade-up" data-aos-duration="2000">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque aut beatae illo nihil velit nulla ut perferendis maxime inventore!
                        </p>
                        <a href="/public/Usama Resume.pdf" target="blank" data-aos="fade-up"
                            data-aos-duration="2000" className=" bg-customred px-7 md:px-14 py-2 md:py-4 text-customblack text-lg md:text-2xl hover:bg-customblack hover:text-customred uppercase">Get in touch</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
