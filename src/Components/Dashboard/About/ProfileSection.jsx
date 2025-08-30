import React, { useRef } from "react";

const ProfileSection = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle image upload/change logic here
    // e.target.files[0] contains the selected file
  };

  return (
    <div className="flex items-center justify-center p-5">
      <div className="relative rounded-full bg-white w-32 h-32 md:w-48 md:h-48">
        <img
          src="/assets/images/male avatar.png"
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="absolute bottom-2 right-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg flex items-center justify-center"
          aria-label="Upload or change profile image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ProfileSection;
