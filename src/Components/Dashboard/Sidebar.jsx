import { FaHome, FaUser, FaCog } from "react-icons/fa";

const menuItems = [
  { icon: <FaHome />, text: "Home" },
  { icon: <FaUser />, text: "Profile" },
  { icon: <FaCog />, text: "Settings" },
];

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`h-screen bg-black text-white flex flex-col transition-all duration-300`}
      style={{
        width: isSidebarOpen ? "240px" : "80px",
      }}
    >
      <div className="flex items-center justify-center h-14">
        <h1 className={`text-lg ${isSidebarOpen ? "block" : "hidden"}`}>
          Dashboard
        </h1>
      </div>
      <div className="flex-1 mt-8 space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-4 py-2 hover:bg-gray-800 transition"
          >
            <span className="text-lg">{item.icon}</span>
            {isSidebarOpen && (
              <span className="whitespace-nowrap">{item.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
