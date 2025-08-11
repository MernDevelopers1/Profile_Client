import Main from "../Components/Dashboard/main";
import Nav from "../Components/Dashboard/Nav";
import Sidebar from "../Components/Dashboard/Sidebar";

// const Dashboard = () => {
//   return (
//     <>
//       <div className="flex">
//         <Sidebar />
//         <Nav />
//       </div>
//     </>
//   );
// };

// export default Dashboard;

// pages/Dashboard.tsx
import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Nav from "../components/Nav";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div
        className="flex flex-col  transition-all duration-300"
        style={{
          width: isSidebarOpen ? "calc(100% - 240px)" : "calc(100% - 80px)",
        }}
      >
        <Nav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
