import { useState, useRef, useEffect } from "react";
import { FaBars, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../ReduxConfig/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Nav = ({ isSidebarOpen, toggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);
  const logout = () => {
    // Dispatch logout action here
    Dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        // Optionally, you can redirect or show a message after logout
        console.log("Logged out successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div className="h-14 bg-black flex justify-between items-center px-4">
      {/* Left Toggle Button */}
      <button
        onClick={toggleSidebar}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="text-white text-lg p-2 rounded hover:bg-gray-800 transition"
      >
        {isHovered ? (
          isSidebarOpen ? (
            <FaArrowLeft />
          ) : (
            <FaArrowRight />
          )
        ) : (
          <FaBars />
        )}
      </button>
      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center cursor-pointer hover:bg-gray-800 p-2"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          {/* Right Avatar */}
          <div className="bg-red-700 rounded-full h-10 w-10 mr-1">
            <img
              src="/assets/images/male avatar.png"
              alt="User Avatar"
              className="h-full w-full rounded-full"
            />
          </div>
          <RiArrowDropDownFill className="text-white text-2xl" />
        </div>
        {showDropdown && (
          <div className="text-white ml-2 absolute right-0 top-12 shadow-lg bg-white w-28 z-10">
            <ul className="text-black">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Settings
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
