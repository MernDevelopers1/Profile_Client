import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // const toggleDropdown = (index) => {
  //   setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  // };

  return (
    <>
      <nav className="bg-white px-5 xxl:px-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto py-3">
          <a href="/" className="flex items-center text-[#555555] text-3xl font-bold">
            <span className="text-darkyellow text-3xl font-bold">Port-</span> FOLIO<span className="text-darkyellow font-bold">.</span>
          </a>
          
          <button
            onClick={toggleSidebar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xxl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-darkyellow bg-opacity-90 text-black shadow-lg transform transition-transform duration-1000 ease-out xxl:hidden z-30 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <button
              onClick={closeSidebar}
              className="absolute top-4 right-4 text-black text-4xl focus:outline-none"
            >
              &times;
            </button>
            <ul className="flex flex-col py-6 pl-6 pr-10">
              <li>
                <Link to="/" onClick={closeSidebar} className="block py-2 px-2 mr-8 text-lg hover:bg-gray-700 hover:text-white rounded-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeSidebar} className="block py-2 px-2 mr-8 text-lg hover:bg-gray-700 hover:text-white rounded-lg">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={closeSidebar} className="block py-2 px-2 mr-8 text-lg hover:bg-gray-700 hover:text-white rounded-lg">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" onClick={closeSidebar} className="block py-2 px-2 mr-8 text-lg hover:bg-gray-700 hover:text-white rounded-lg">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeSidebar} className="block py-2 px-2 mr-8 text-lg hover:bg-gray-700 hover:text-white rounded-lg">
                  Contact us
                </Link>
              </li>
              {/* <button
                onClick={() => toggleDropdown(1)}
                className="flex items-center text-lg justify-between w-full py-2 px-2 text-black rounded hover:bg-gray-700 hover:text-white"
              >
                Dropdown 1
                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div
                className={`z-10 ${openDropdownIndex === 1 ? 'block' : 'hidden'} font-normal m-0 bg-gray-700 divide-y rounded-md shadow w-64`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a href="#" className="block text-lg px-4 py-2 hover:bg-gray-100 text-white hover:text-black">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block text-lg px-4 py-2 hover:bg-gray-100 text-white hover:text-black">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block text-lg px-4 py-2 hover:bg-gray-100 text-white hover:text-black">Earnings</a>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => toggleDropdown(2)}
                className="flex items-center justify-between w-full text-lg py-2 px-2 text-black rounded hover:bg-gray-700 hover:text-white"
              >
                Dropdown 2
                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div
                className={`z-10 ${openDropdownIndex === 2 ? 'block' : 'hidden'} font-normal m-0 bg-gray-700 divide-y divide-gray-100 rounded-md shadow w-64`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a href="#" className="block text-lg text-white hover:text-black px-4 py-2 hover:bg-gray-100">dr1</a>
                  </li>
                  <li>
                    <a href="#" className="block text-lg text-white hover:text-black px-4 py-2 hover:bg-gray-100">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block text-lg text-white hover:text-black px-4 py-2 hover:bg-gray-100">Earnings</a>
                  </li>
                </ul>
              </div> */}
            </ul>
          </div>
          <div
            id="overlay"
            className={`fixed inset-0 bg-black bg-opacity-50 ${isSidebarOpen ? '' : 'hidden'} xxl:hidden z-20 backdrop-blur-sm transition-opacity duration-300 ease-in-out`}
            onClick={closeSidebar}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


