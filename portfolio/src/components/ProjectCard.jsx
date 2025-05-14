import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="project-card">
      <img className="img-Project" src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
