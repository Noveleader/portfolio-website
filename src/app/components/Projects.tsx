"use client";
import React from "react";
import "../styles/Projects.css";
import { repositories } from "../utils/data";

const Projects: React.FC = () => {
  return (
    <div className="Projects">
      <p className="Heading">Projects</p>
      <div className="ProjectsGrid">
        {repositories.map((repo, index) => (
          <div className="ProjectCard" key={index}>
            <h3>{repo.name}</h3>
            <p className="Description">{repo.description}</p>
            <div className="CardFooter">
              <span className="Language">{repo.language}</span>
              <a
                href={repo.url}
                className="Arrow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
