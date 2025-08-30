import { useState, useEffect, useRef } from "react";

const ProjectCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();
  const isHovered = useRef(false);

  useEffect(() => {
    if (!images || images.length === 0) return;
    if (isHovered.current) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [images, current]);

  const handleMouseEnter = () => {
    isHovered.current = true;
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="relative w-full h-40 overflow-hidden rounded-t-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slide Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`project-img-${idx}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`block w-2 h-2 rounded-full transition ${
                idx === current ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
