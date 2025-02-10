import { useEffect } from "react"

const Banner = () => {
    useEffect(() => {
        AOS.init();
    })

    return (
        <>
            <div className="relative py-56">
                <div className="absolute inset-0 bg-bgbanner bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60"></div>
                <div className="relative container mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-customblack text-[150px] font-bold leading-none mb-6 uppercase text-center stroke-text"
                            data-aos="zoom-in" data-aos-duration="2000">
                            Design Deliver Deploy
                        </h1>
                        <p className="text-customblack mb-6 text-2xl font-redhat text-center font-normal px-64"
                            data-aos="fade-up" data-aos-duration="2000">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque aut beatae illo nihil velit nulla ut perferendis maxime inventore!
                        </p>
                        <a href="#" data-aos="fade-up"
                            data-aos-duration="2000" className=" bg-customred px-14 py-4 text-customblack text-2xl hover:bg-customblack hover:text-customred uppercase">Get in touch</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
