import MainStructure from "./MainStructure";
import { useState } from "react";
import ProjectForm from "./Projects/ProjectsForm";
import ProjectCard from "./Projects/ProjectCard";
import ConfirmDialog from "../../utils/ConfirmDialog";

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

  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

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

  const handleDeleteRequest = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setProjects((prev) => prev.filter((p) => p.id !== deleteId));
    setShowConfirm(false);
    setDeleteId(null);
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

      {/* List or Form */}
      {!showForm ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          style={{
            maxHeight: "70vh",
            overflowY: projects.length > 3 ? "auto" : "visible",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => {
                setEditingProject(project);
                setShowForm(true);
              }}
              onDelete={() => handleDeleteRequest(project.id)}
            />
          ))}
        </div>
      ) : (
        <ProjectForm
          project={editingProject}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* Confirm Dialog */}
      {showConfirm && (
        <ConfirmDialog
          title="Delete Project?"
          message="Are you sure you want to delete this project? This action cannot be undone."
          confirmText="Yes, Delete"
          cancelText="Cancel"
          onConfirm={confirmDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </MainStructure>
  );
};

export default Projects;
