// Import the required icons from react-icons
import { FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineMoreTime } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";


// Define the ServiceData array with service objects
const ServiceData = [
    {
        img1: FaHtml5,
        name: "Design to HTML",
        desc: "Transforming design mockups (like PSD) into fully functional HTML websites."
    },
    {
        img1: FaBootstrap,
        name: "Bootstrap",
        desc: "Utilizing Bootstrap framework to create responsive and mobile-first websites."
    },
    {
        img1: RiTailwindCssFill,
        name: "Tailwind",
        desc: "Implementing Tailwind CSS to develop highly customizable and responsive designs."
    },
    {
        img1: FaReact,
        name: "React JS",
        desc: "Building dynamic and interactive web applications using React JS."
    },
    {
        img1: FaNodeJs,
        name: "Node JS",
        desc: "Creating modern web interfaces with Vue.js, focusing on real-time updates."
    },
    {
        img1: MdOutlineMoreTime,
        name: "Best Practices",
        desc: "Implementing industry best practices for web development, ensuring quality and maintainability."
    }
];

// Export the ServiceData array as default
export default ServiceData;
