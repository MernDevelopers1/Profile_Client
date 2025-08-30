import MainStructure from "./MainStructure";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short", // change to "long" if you want full month name
    year: "numeric",
  });
};

const ExperienceEducation = () => {
  const [experience, setExperience] = useState([
    {
      id: 1,
      role: "Senior Product Designer",
      company: "Company A",
      description: "Description of the job role and responsibilities",
      startDate: "2019-06-01",
      endDate: "Present",
    },
    {
      id: 2,
      role: "UX Designer",
      company: "Company B",
      description: "Description of the job role and responsibilities",
      startDate: "2017-01-01",
      endDate: "2019-05-01",
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "M.A. in Graphic Design",
      school: "University Y",
      yearStart: "2012-01-01",
      yearEnd: "2014-01-01",
    },
    {
      id: 2,
      degree: "B.A. in Fine Arts",
      school: "University X",
      yearStart: "2008-01-01",
      yearEnd: "2012-01-01",
    },
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [formType, setFormType] = useState(""); // "experience" or "education"
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id, type) => {
    if (type === "experience") {
      setExperience(experience.filter((item) => item.id !== id));
    } else {
      setEducation(education.filter((item) => item.id !== id));
    }
  };

  const handleSave = (item, type) => {
    if (type === "experience") {
      if (item.id) {
        setExperience(experience.map((e) => (e.id === item.id ? item : e)));
      } else {
        setExperience([...experience, { ...item, id: Date.now() }]);
      }
    } else {
      if (item.id) {
        setEducation(education.map((e) => (e.id === item.id ? item : e)));
      } else {
        setEducation([...education, { ...item, id: Date.now() }]);
      }
    }
    setEditingItem(null);
    setFormType("");
    setShowModal(false);
  };

  return (
    <MainStructure>
      <div className="max-h-[83vh] overflow-y-auto">
        {/* EXPERIENCE SECTION */}
        <h3 className="text-lg font-semibold mb-2">Experience</h3>
        <div className="border-l-2 border-gray-300 pl-4 space-y-4">
          {experience.map((item) => (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-5 top-2 w-3 h-3 bg-gray-400 rounded-full"></span>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{item.role}</h4>
                  <p className="text-blue-600">{item.company}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-gray-500 text-sm">
                    {formatDate(item.startDate)} –{" "}
                    {item.endDate === "Present"
                      ? "Present"
                      : formatDate(item.endDate)}
                  </p>
                </div>
                <div className="flex gap-2 text-gray-600">
                  <button
                    onClick={() => {
                      setEditingItem(item);
                      setFormType("experience");
                      setShowModal(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(item.id, "experience")}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ADD NEW EXPERIENCE */}
        <button
          onClick={() => {
            setEditingItem(null);
            setFormType("experience");
            setShowModal(true);
          }}
          className="mt-3 text-sm text-blue-600 hover:underline"
        >
          + Add Experience
        </button>

        <hr className="my-4" />

        {/* EDUCATION SECTION */}
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        <div className="space-y-3">
          {education.map((item) => (
            <div key={item.id} className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{item.degree}</h4>
                <p className="text-blue-600">{item.school}</p>
                <p className="text-gray-500 text-sm">
                  {formatDate(item.yearStart)} –{" "}
                  {item.yearEnd === "Present"
                    ? "Present"
                    : formatDate(item.yearEnd)}
                </p>
              </div>
              <div className="flex gap-2 text-gray-600">
                <button
                  onClick={() => {
                    setEditingItem(item);
                    setFormType("education");
                    setShowModal(true);
                  }}
                >
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(item.id, "education")}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ADD NEW EDUCATION */}
        <button
          onClick={() => {
            setEditingItem(null);
            setFormType("education");
            setShowModal(true);
          }}
          className="mt-3 text-sm text-blue-600 hover:underline"
        >
          + Add Education
        </button>
      </div>

      {/* Popup Modal for Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <Form
              type={formType}
              item={editingItem}
              onSave={handleSave}
              onCancel={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </MainStructure>
  );
};

const Form = ({ type, item, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    item ||
      (type === "experience"
        ? {
            role: "",
            company: "",
            description: "",
            startDate: "",
            endDate: "",
            isContinuing: false,
          }
        : {
            degree: "",
            school: "",
            yearStart: "",
            yearEnd: "",
            isContinuing: false,
          })
  );

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setFormData({
      ...formData,
      [name]: inputType === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData };
    if (formData.isContinuing) {
      if (type === "experience") data.endDate = "Present";
      else data.yearEnd = "Present";
    }
    onSave(data, type);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 space-y-2">
      {type === "experience" ? (
        <>
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            className="w-full border rounded p-2"
            required
          />
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full border rounded p-2"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded p-2"
          />
          <div className="flex gap-2">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-1/2 border rounded p-2"
              required
            />
            {!formData.isContinuing && (
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-1/2 border rounded p-2"
                required
              />
            )}
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="isContinuing"
              checked={formData.isContinuing}
              onChange={handleChange}
            />
            Continuing
          </label>
        </>
      ) : (
        <>
          <input
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="Degree"
            className="w-full border rounded p-2"
            required
          />
          <input
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="School / University"
            className="w-full border rounded p-2"
            required
          />
          <div className="flex gap-2">
            <input
              type="date"
              name="yearStart"
              value={formData.yearStart}
              onChange={handleChange}
              className="w-1/2 border rounded p-2"
              required
            />
            {!formData.isContinuing && (
              <input
                type="date"
                name="yearEnd"
                value={formData.yearEnd}
                onChange={handleChange}
                className="w-1/2 border rounded p-2"
                required
              />
            )}
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="isContinuing"
              checked={formData.isContinuing}
              onChange={handleChange}
            />
            Continuing
          </label>
        </>
      )}

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border px-4 py-2 rounded hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExperienceEducation;
