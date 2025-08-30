import { useState } from "react";

const ExperienceForm = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    item || {
      role: "",
      company: "",
      description: "",
      startDate: "",
      endDate: "",
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
        {!formData.continue && (
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
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

export default ExperienceForm;
