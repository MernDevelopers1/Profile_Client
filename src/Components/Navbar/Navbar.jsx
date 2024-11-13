import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if a menu item is active based on the current URL path
  const isActive = (path) => location.pathname === path;

  // Toggle function to open/close navbar
  const toggleNavbar = () => setIsOpen(!isOpen);

  // Close navbar on page change
  React.useEffect(() => {
    setIsOpen(false);  // Close the navbar on location (page) change
  }, [location]);

  return (
    <nav className="z-10 container absolute top-0 right-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-6xl font-semibold whitespace-nowrap bg-gradient-to-r from-[#A24936] to-[#83BCA9] bg-clip-text text-transparent">
            Usama
          </span>
        </a>
        
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-center text-sm text-white rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 text-center bg-gray-700 md:bg-transparent md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            {["home", "about", "services", "work", "contact"].map((item) => {
              const path = `/${item === "home" ? "" : item}`;
              return (
                <li
                  key={item}
                  className={`relative cursor-pointer ${
                    isActive(path) ? "text-[#D36135] border-b-2 border-[#A24936]" : "text-white"
                  }`}
                >
                  <Link to={path} className="block py-2 px-3 text-lg font-medium md:p-0">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                  {isActive(path) && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#A24936] to-[#A24936]"></span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        
        <Link to="/contact" className="hidden lg:block cursor-pointer workbutton hover:-mx-[27px] relative bg-white tracking-widest text-white text-2xl px-[30px] py-[10px] transition-all duration-5000 ease-in-out hover:scale-105">
          <span>Connect with me<i></i></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
