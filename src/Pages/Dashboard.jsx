import Nav from "../Components/Dashboard/Nav";
import Sidebar from "../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex max-h-screen overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div
        className="flex flex-col  transition-all duration-300"
        style={{
          width: isSidebarOpen ? "calc(100% - 240px)" : "calc(100% - 80px)",
        }}
      >
        <Nav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
