import React from 'react';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';
import '../styles/ProjectList.css';

const ProjectList = () => {
  return (
    <div className="project-list">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          image={project.image}
          title={project.title}
          category={project.category}
          year={project.year}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default ProjectList;
