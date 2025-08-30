import { useState } from "react";

const EducationForm = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    item || {
      degree: "",
      school: "",
      yearStart: "",
      yearEnd: "",
      continue: false,
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(formData);
      }}
      className="space-y-2"
    >
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
        {!formData.continue && (
          <input
            type="date"
            name="yearEnd"
            value={formData.yearEnd}
            onChange={handleChange}
            className="w-1/2 border rounded p-2"
          />
        )}
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="continue"
          checked={formData.continue}
          onChange={handleChange}
        />
        Continue
      </label>

      <div className="flex gap-3 mt-3">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EducationForm;
