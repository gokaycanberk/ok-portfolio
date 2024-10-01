import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  id: number;
  title: string;
  image: string;
  category: string;
  year: number;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  image,
  category,
  year,
  description,
}) => {
  return (
    <Link to={`/projects/${id}`} className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h2>{title}</h2>
        <span>{category}</span>
        <span>{year}</span>
        <span>{description}</span>
      </div>
    </Link>
  );
};
export default ProjectCard;
