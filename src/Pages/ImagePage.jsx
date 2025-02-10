import { useParams } from 'react-router-dom';
// import myWork from "../assets/mywork_data"; 
import projects from "../ProjectsData/projects_data"
import { useEffect } from 'react';

const ProjectPreview = () => {
    const { id } = useParams();
    const project = projects.find(work => work.no === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div className="text-center text-white mt-20">Project not found</div>;
    }

    return (
        <>
            <div className="bg-black">
                <div className="container mx-auto py-10">
                    <div className="w-full">
                        <h1 className='text-center text-white text-5xl uppercase font-bold mb-6'>{project.name}</h1>
                        <img src={project.img} alt={project.name} className="max-w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectPreview;
