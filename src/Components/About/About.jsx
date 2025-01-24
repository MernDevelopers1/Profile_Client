
import {
    faCss3,
    faNodeJs,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { DiMongodb } from "react-icons/di";
import { DiNodejs } from "react-icons/di";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    return (
        <>
            <div className="bg-white">
                <div className="container mx-auto about-page py-10 md:py-20 px-4">
                    <div className="flex flex-col lg:flex-row items-center md:items-start gap-10">
                        {/* Text Zone */}
                        <div className="text-zone w-full lg:w-[70%] px-4">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                I am a very ambitious front-end developer looking for a role in an
                                established IT company with the opportunity to work with the latest
                                technologies on challenging and diverse projects.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                I am quite confident, naturally curious, and perpetually working on
                                improving my chops one design problem at a time.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                If I need to define myself in one sentence, that would be a family
                                person, father of a beautiful daughter, a sports fanatic,
                                photography enthusiast, and tech-obsessed!!!
                            </p>
                        </div>

                        {/* Stage Cube */}
                        <div className="stage-cube-cont w-full lg:w-[30%] flex justify-center items-center lg:mt-0">
                            <div className="cubespinner relative">
                                <div className="face1 transform rotate-45">
                                    <DiMongodb className='text-green-600' size={"170"} />

                                </div>
                                <div className="face2 transform rotate-45">
                                    <FontAwesomeIcon icon={faHtml5} color="#F06529" size="" />
                                </div>
                                <div className="face3 transform rotate-45">
                                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" size="" />
                                </div>
                                <div className="face4 transform rotate-45">
                                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="" />
                                </div>
                                <div className="face5 transform rotate-45">
                                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size="" />
                                </div>
                                <div className="face6 transform rotate-45">
                                    <DiNodejs size={"170"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About

