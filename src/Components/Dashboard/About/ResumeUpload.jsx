import { useRef } from "react";

const ResumeUpload = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle image upload/change logic here
    // e.target.files[0] contains the selected file
  };
  return (
    <div className=" w-full flex flex-col justify-center items-center p-5 border-y-2 border-gray-300">
      <p className=" mb-2">Upload Your Resume</p>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        onClick={handleButtonClick}
        className="ml-4 px-4 py-2 w-[90%] bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Upload Resume
      </button>
    </div>
  );
};

export default ResumeUpload;
