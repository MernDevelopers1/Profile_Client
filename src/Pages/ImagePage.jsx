import { useParams } from 'react-router-dom';
// import myWork from "../assets/mywork_data"; 
import projects from "../ProjectsData/projects_data"
import { useEffect } from 'react';

const ProjectPreview = () => {
    const { id } = useParams();
    const project = projects.find(work => work.w_no === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    if (!project) {
        return <div className="text-center text-white mt-20">Project not found</div>;
    }

    return (
        <div className=" container mx-auto py-10">
            <div className="w-full border border-black">
                <img src={project.w_img} alt={project.w_name} className="max-w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default ProjectPreview;
