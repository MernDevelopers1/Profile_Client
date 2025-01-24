import { useEffect } from "react";
import projects from "../ProjectsData/projects_data";

const Banner = () => {
    useEffect(() => {
        const $carousel = $(".banner-carousel"); // Define $carousel

        $carousel.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            autoplayHoverPause: false,
            autoplayTimeout: 5000,
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 1 },
            },
        });

        $carousel.on("changed.owl.carousel", function (event) {
            // Remove active class from all slides
            $(".owl-item .flex").removeClass("active-slide");

            // Add active class to the current slide
            const currentIndex = event.item.index;
            $(".owl-item").eq(currentIndex).find(".flex").addClass("active-slide");
        });

        AOS.init();

        return () => {
            $carousel.trigger("destroy.owl.carousel");
        };
    }, []);

    return (
        <div className="relative owl-carousel banner-carousel bg-lightyellow">
            {projects.map((item, index) => (
                <div
                    className={`flex flex-col md:flex-row items-center justify-between container mx-auto py-6 lg:py-20 px-3 xl:px-0 ${
                        index === 0 ? "active-slide" : ""
                    }`}
                    key={index}
                >
                    {/* Text on the left */}
                    <div className="w-full md:w-1/2 px-5 xl:px-0 text-center md:text-left text-slide-in">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-none text-black">
                            Project ShowCase -
                            <span className="text-2xl md:text-3xl lg:text-4xl uppercase font-semibold text-blue-700">
                                {" "}
                                {item.name}
                            </span>
                        </h2>
                        <p className="text-xl leading-tight text-black mb-5 md:mb-0">
                            Check Out my latest Projects
                        </p>
                    </div>

                    {/* Images on the right */}
                    <div className="w-full md:w-1/2 flex gap-1 justify-center items-center image-slide-in">
                        <div className="flex items-center justify-center h-72 lg:h-[400px]">
                            <img src={item.img2} className="object-contain max-h-full" alt="Banner" />
                        </div>
                        <div className="flex items-center justify-center h-72 lg:h-[550px]">
                            <img src={item.img1} className="object-contain max-h-full" alt="Banner" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
