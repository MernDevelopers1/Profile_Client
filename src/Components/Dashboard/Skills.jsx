import MainStructure from "./MainStructure";

import React, { useState } from "react";
import { FaPlus, FaTrash, FaRegEdit, FaCheck, FaTimes } from "react-icons/fa";

const SkillsSection = () => {
  const [skills, setSkills] = useState([
    { name: "Python", percent: 80 },
    { name: "Data Analysis", percent: 75 },
    { name: "Machine Learning", percent: 60 },
    { name: "Deep Learning", percent: 50 },
  ]);

  const [newSkill, setNewSkill] = useState({ name: "", percent: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [editSkill, setEditSkill] = useState({ name: "", percent: "" });

  // Add new skill
  const handleAddSkill = () => {
    if (!newSkill.name || !newSkill.percent) return;
    setSkills([...skills, { ...newSkill, percent: Number(newSkill.percent) }]);
    setNewSkill({ name: "", percent: "" });
  };

  // Delete skill
  const handleDeleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Start edit mode
  const handleEditSkill = (index) => {
    setEditIndex(index);
    setEditSkill(skills[index]);
  };

  // Save edited skill
  const handleSaveEdit = () => {
    const updated = [...skills];
    updated[editIndex] = editSkill;
    setSkills(updated);
    setEditIndex(null);
    setEditSkill({ name: "", percent: "" });
  };

  return (
    <MainStructure padding={"p-6"}>
      <h3 className="text-xl font-bold text-gray-800 mb-5">
        SKILL & TECHNOLOGY
      </h3>

      <div className="flex flex-col gap-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              {editIndex === idx ? (
                <>
                  <input
                    type="text"
                    className="border rounded px-2 py-1 text-sm w-1/2"
                    value={editSkill.name}
                    onChange={(e) =>
                      setEditSkill({ ...editSkill, name: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="border rounded px-2 py-1 text-sm w-16"
                    value={editSkill.percent}
                    onChange={(e) =>
                      setEditSkill({
                        ...editSkill,
                        percent: Number(e.target.value),
                      })
                    }
                  />
                </>
              ) : (
                <>
                  <span className="font-medium text-gray-700">
                    {skill.name}
                  </span>
                  <span className="text-gray-700 font-semibold">
                    {skill.percent}%
                  </span>
                </>
              )}
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-1">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 justify-end text-sm">
              {editIndex === idx ? (
                <>
                  <button
                    className="text-green-600 hover:text-green-700"
                    onClick={handleSaveEdit}
                  >
                    <FaCheck />
                  </button>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setEditIndex(null)}
                  >
                    <FaTimes />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="text-blue-600 hover:text-blue-700"
                    onClick={() => handleEditSkill(idx)}
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleDeleteSkill(idx)}
                  >
                    <FaTrash />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add new skill form */}
      <div className="mt-6 border-t pt-4">
        <h4 className="font-semibold text-gray-700 mb-2">Add New Skill</h4>
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Skill Name"
            className="border rounded px-2 py-1 flex-1"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="%"
            min="0"
            max="100"
            className="border rounded px-2 py-1 w-20"
            value={newSkill.percent}
            onChange={(e) =>
              setNewSkill({ ...newSkill, percent: e.target.value })
            }
          />
          <button
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1"
            onClick={handleAddSkill}
          >
            <FaPlus /> Add
          </button>
        </div>
      </div>
    </MainStructure>
  );
};

export default SkillsSection;
