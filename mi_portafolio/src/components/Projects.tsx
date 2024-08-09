import React from 'react';
import { FaGithub, FaReact, FaEnvelope } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import Hospital from '../assets/Hospital.jpg';
import goShare from '../assets/GoShare.png';
import BrainLearn from '../assets/BrainLearn.png';

interface ProjectCard {
  image: string;
  title: string;
  description: string;
  githubLink: string;
}

const projectData: ProjectCard[] = [
    {
      image: goShare,
      title: 'GoShare',
      description: 'This project is a web application that allows users to create and join rides with others. The application was developed using Django and React.',
      githubLink: 'https://github.com/josedjaykv/GoShare_django',
    },
    {
      image: BrainLearn,
      title: 'BrainLearn',
      description: 'A web application for learning through flashcards, developed with React and Django.',
      githubLink: 'https://github.com/fercho111/BrainLearn',
    },
    {
      image: Hospital,
      title: 'Hospital Administrative Management',
      description: 'A web application for the administrative management of a hospital, developed with Django and React.',
      githubLink: 'https://github.com/AYepesP/HospitalEstructurasDeDatos',
    },
  ];
  
const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="bg-background-secondary rounded-lg shadow-lg overflow-hidden">
            <div className="h-60 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 h-40 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-primary text-xl mb-2">{project.title}</h3>
                <p className="font-body text-secondary text-sm mb-4">{project.description}</p>
              </div>
              <div className="flex justify-center space-x-4">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
                  <FaGithub size={24} />
                </a>
                
                <FaReact size={24} className="text-primary hover:text-secondary" />
                <IoLogoJavascript size={24} className="text-primary hover:text-secondary"/>
                <DiDjango size={30} className="text-primary hover:text-secondary"/>
                

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;