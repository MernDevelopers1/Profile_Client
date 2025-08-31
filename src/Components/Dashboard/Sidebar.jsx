import { FaUser, FaCog, FaUserGraduate, FaCertificate } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
const menuItems = [
  { icon: <MdDashboard />, text: "Dashboard", Link: "/dashboard" },
  { icon: <FaUser />, text: "About Me", Link: "/dashboard/about" },
  {
    icon: <AiOutlineFundProjectionScreen />,
    text: "Projects",
    Link: "/dashboard/projects",
  },
  {
    icon: <FaUserGraduate />,
    text: "Education & Experiance",
    Link: "/dashboard/education_experience",
  },
  {
    icon: <RiComputerFill />,
    text: "Skills & Technology",
    Link: "/dashboard/skills_technologies",
  },
  {
    icon: <FaCertificate />,
    text: "Certifications & Achivements",
    Link: "/dashboard/certifications_achievements",
  },
  { icon: <FaCog />, text: "Settings", Link: "/dashboard/settings" },
];

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`min-h-screen bg-black text-white flex flex-col transition-all duration-300`}
      style={{
        width: isSidebarOpen ? "240px" : "80px",
      }}
    >
      <div className="flex items-center justify-center h-14">
        <h1
          className={`text-lg transition-all duration-300 ${
            isSidebarOpen
              ? "block opacity-100 scale-100"
              : "hidden opacity-0 scale-90"
          }`}
        >
          Dashboard
        </h1>
      </div>
      <div className="flex-1 mt-8 space-y-4">
        {menuItems.map((item, index) => (
          <Link to={item.Link} key={index}>
            <div
              className={`flex items-center gap-4 px-4 py-2 hover:bg-gray-800 transition cursor-pointer`}
            >
              <span
                className={`text-lg transition-transform duration-300 ${
                  isSidebarOpen ? "scale-110 rotate-0" : "scale-125 rotate-0"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`whitespace-nowrap transition-all duration-300 ${
                  isSidebarOpen
                    ? "opacity-100 scale-100 ml-0"
                    : "opacity-0 scale-90 ml-[-16px] w-0"
                }`}
              >
                {item.text}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
