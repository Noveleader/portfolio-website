"use client"
import React from "react";
import "../styles/Projects.css";

const Projects: React.FC = () => {
    const repositories = [
        { name: "Repo 1", description: "A cool project about X", language: "JavaScript", stars: 100, lastUpdated: "July 2023" },
        { name: "Repo 2", description: "A cool project about Y", language: "TypeScript", stars: 200, lastUpdated: "June 2023" },
        { name: "Repo 3", description: "A cool project about Z", language: "Python", stars: 150, lastUpdated: "May 2023" },
        { name: "Repo 4", description: "A cool project about A", language: "Java", stars: 250, lastUpdated: "April 2023" },
        { name: "Repo 5", description: "A cool project about B", language: "C++", stars: 300, lastUpdated: "March 2023" },
        { name: "Repo 6", description: "A cool project about C", language: "Go", stars: 50, lastUpdated: "February 2023" },
    ];

    return (
        <div className="Projects">
            <p>Projects</p>
            <div className="ProjectsGrid">
                {repositories.map((repo, index) => (
                    <div className="ProjectCard" key={index}>
                        <h3>{repo.name}</h3>
                        <p className="Description">{repo.description}</p>
                        <div className="CardFooter">
                            <span className="Language">{repo.language}</span>
                            <span className="Stars">★ {repo.stars}</span>
                            <span className="Updated">Updated {repo.lastUpdated}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
