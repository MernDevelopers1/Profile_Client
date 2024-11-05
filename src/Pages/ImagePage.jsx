// src/pages/ProjectPreview.js
// import React from 'react';
import { useParams } from 'react-router-dom';
import myWork from "../assets/mywork_data"; // Adjust the path as needed

const ProjectPreview = () => {
    const { id } = useParams(); // Capture the ID from the URL
    const project = myWork.find(work => work.w_no === parseInt(id));

    if (!project) {
        return <div className="text-center text-white mt-20">Project not found</div>;
    }

    return (
        <div className="">
            <h2 className="text-6xl text-center my-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {project.w_name}
            </h2>

            <div className="">
                <img src={project.w_img} alt={project.w_name} className="max-w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default ProjectPreview;
