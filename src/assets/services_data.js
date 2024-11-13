// Import the required icons from react-icons
import { FaHtml5, FaBootstrap, FaReact, FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineMoreTime } from "react-icons/md";

// Define the Services_Data array with service objects
const Services_Data = [
    {
        s_icon: FaHtml5,
        s_name: "Design to HTML",
        s_desc: "Transforming design mockups (like PSD) into fully functional HTML websites."
    },
    {
        s_icon: FaBootstrap,
        s_name: "Bootstrap",
        s_desc: "Utilizing Bootstrap framework to create responsive and mobile-first websites."
    },
    {
        s_icon: RiTailwindCssFill,
        s_name: "Tailwind",
        s_desc: "Implementing Tailwind CSS to develop highly customizable and responsive designs."
    },
    {
        s_icon: FaReact,
        s_name: "React JS",
        s_desc: "Building dynamic and interactive web applications using React JS."
    },
    {
        s_icon: FaVuejs,
        s_name: "Vue JS",
        s_desc: "Creating modern web interfaces with Vue.js, focusing on real-time updates."
    },
    {
        s_icon: MdOutlineMoreTime,
        s_name: "Best Practices",
        s_desc: "Implementing industry best practices for web development, ensuring quality and maintainability."
    }
];

// Export the Services_Data array as default
export default Services_Data;
