import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCarousel from "./ProjectCarousel";

const ProjectCard = ({ project, onEdit, onDelete }) => {
  return (
    <div className="border rounded-lg bg-white shadow-sm flex flex-col">
      <ProjectCarousel images={project.images} />
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
            onClick={onEdit}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="px-3 py-1 border text-red-600 rounded hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
