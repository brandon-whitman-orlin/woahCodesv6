import React from "react";
import "./ItemGrid.css";

const ItemGrid = ({ projects }) => {
  return (
    <div className="item-grid">
      {projects.map((project, index) => (
        <div className="grid-item" key={index}>
          <video src={project.video} autoPlay loop playsInline muted />
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <a href={project.learn} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Try It Out
          </a>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;
