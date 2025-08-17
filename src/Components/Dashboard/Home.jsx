import { useState } from "react";
import { BiEdit } from "react-icons/bi";

const Home = () => {
  const [data, setData] = useState({
    title: "Dashboard Title",
    subTitle: "Dashboard Sub Title",
    content: "This is the main content of the dashboard.",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="h-full flex justify-center items-center">
      <div className="p-4 h-[95%] w-[95%] shadow-2xl bg-white rounded-xl">
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
        <div className="mt-4 relative">
          <h2 className="text-lg mt-2">Title</h2>
          <p className=" text-gray-700">
            This is your main dashboard content area.
          </p>
          <BiEdit className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-gray-700" />
          <h2 className="text-lg mt-4">Sub Title</h2>
          <p className="text-gray-700">
            This is a sub-section of your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
