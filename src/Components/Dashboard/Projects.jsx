import MainStructure from "./MainStructure";
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectForm from "./ProjectsForm";

// Dummy images for demonstration
const defaultImages = [
  "/assets/images/Login.jpg",
  "/assets/images/Login1.jpeg",
  "/assets/images/Login2.png",
];

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      techStack: "HTML, CSS, JavaScript",
      github: "https://github.com",
      liveDemo: "https://example.com",
      images: [
        "/assets/images/Login2.png",
        "/assets/images/Login1.jpeg",
        "/assets/images/Login.jpg",
      ],
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2",
      techStack: "React, Node.js",
      images: ["/assets/images/Login3.jpg", "/assets/images/Login4.jpg"],
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of project 3",
      techStack: "MongoDB, Express",
      images: ["/assets/images/Login4.jpg", "/assets/images/Login2.png"],
    },
  ]);

  const [editingProject, setEditingProject] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSave = (project) => {
    if (project.id) {
      setProjects((prev) =>
        prev.map((p) => (p.id === project.id ? project : p))
      );
    } else {
      setProjects((prev) => [
        ...prev,
        {
          ...project,
          id: Date.now(),
          images:
            project.images && project.images.length > 0
              ? project.images
              : [
                  defaultImages[
                    Math.floor(Math.random() * defaultImages.length)
                  ],
                ],
        },
      ]);
    }
    setEditingProject(null);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  // Carousel component for project images
  const ProjectCarousel = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef();
    const isHovered = useRef(false);

    useEffect(() => {
      if (!images || images.length === 0) return;
      if (isHovered.current) return;
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(intervalRef.current);
    }, [images, current]);

    const handleMouseEnter = () => {
      isHovered.current = true;
      clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
      isHovered.current = false;
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
    };

    if (!images || images.length === 0) return null;

    return (
      <div
        className="relative w-full h-40 rounded-t-lg overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`project-img-${idx}`}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ transitionProperty: "opacity" }}
          />
        ))}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`block w-2 h-2 rounded-full ${
                  idx === current ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <MainStructure>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Projects</h2>
        <button
          onClick={() => {
            setEditingProject(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
        >
          + New Project
        </button>
      </div>

      {/* Project List */}
      {!showForm && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          style={{
            maxHeight: "70vh",
            overflowY: projects.length > 3 ? "auto" : "visible",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg bg-white shadow-sm flex flex-col"
            >
              {/* Carousel */}
              <ProjectCarousel images={project.images} />
              {/* Details */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Tech Stack: {project.techStack}
                </p>
                <div className="flex gap-4 mt-2 text-blue-600 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
                {/* Actions */}
                <div className="flex gap-2 mt-4 justify-end">
                  <button
                    onClick={() => {
                      setEditingProject(project);
                      setShowForm(true);
                    }}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="px-3 py-1 border text-red-600 rounded hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Form */}
      {showForm && (
        <ProjectForm
          project={editingProject}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}
    </MainStructure>
  );
};

export default Projects;
