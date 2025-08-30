import { useState, useRef } from "react";

const ProjectForm = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    project || {
      title: "",
      description: "",
      techStack: "",
      github: "",
      liveDemo: "",
      images: [],
    }
  );
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  const handleRemoveImage = (idx) => {
    setFormData((prev) => {
      const updatedImages = prev.images.filter((_, i) => i !== idx);
      return { ...prev, images: updatedImages };
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(formData);
      }}
      className="bg-white p-4 rounded-lg shadow-md space-y-3"
    >
      <h3 className="text-lg font-semibold mb-2">
        {project ? "Edit Project" : "New Project"}
      </h3>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border rounded p-2"
        required
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border rounded p-2"
        required
      />

      <input
        name="techStack"
        value={formData.techStack}
        onChange={handleChange}
        placeholder="Tech Stack"
        className="w-full border rounded p-2"
        required
      />

      <input
        name="github"
        value={formData.github || ""}
        onChange={handleChange}
        placeholder="GitHub Link"
        className="w-full border rounded p-2"
      />

      <input
        name="liveDemo"
        value={formData.liveDemo || ""}
        onChange={handleChange}
        placeholder="Live Demo Link"
        className="w-full border rounded p-2"
      />

      {/* Image Upload */}
      <div>
        <label className="block font-medium mb-2">Project Images</label>
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mb-2"
        >
          Upload Images
        </button>
        <input
          type="file"
          multiple
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />
        {/* Preview Images */}
        <div className="flex gap-3 flex-wrap mt-2">
          {formData.images &&
            formData.images.map((img, idx) => (
              <div key={idx} className="relative w-24 h-24">
                <img
                  src={img.url}
                  alt={`preview-${idx}`}
                  className="w-full h-full object-cover rounded border"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(idx)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                  title="Remove"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
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

export default ProjectForm;
