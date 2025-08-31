import React, { useState } from "react";
import AboutFields from "./AboutFields";
import { FaRegEdit } from "react-icons/fa";

const initialInfo = {
  Name: "john",
  Email: "testing",
  Phone: "testing",
  Address: "testing",
  Freelance: "testing",
  Languages: "testing",
  Title: "testing",
  Description: "This is a short description about John Doe...",
};

const AboutInfo = () => {
  const [info, setInfo] = useState(initialInfo);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(info);

  const handleEditClick = () => {
    setEditMode(true);
    setFormData(info);
  };

  const handleCancel = () => {
    setEditMode(false);
    setFormData(info);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(formData);
    setEditMode(false);
    // send formData to backend here
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-lg mt-2 flex flex-col divide-y relative ${
        !editMode && "pt-10"
      }`}
    >
      {/* Edit Icon */}
      {!editMode && (
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-600"
          onClick={handleEditClick}
          aria-label="Edit Info"
        >
          <FaRegEdit size={18} />
        </button>
      )}

      <form onSubmit={handleSubmit}>
        {Object.keys(info).map((key) => (
          <AboutFields
            key={key}
            title={key}
            value={editMode ? formData[key] : info[key]}
            editMode={editMode}
            onChange={handleChange}
          />
        ))}
        {editMode && (
          <div className="flex justify-end gap-3 px-4 py-4 sticky bottom-0 bg-white border-t">
            <button
              type="button"
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AboutInfo;
