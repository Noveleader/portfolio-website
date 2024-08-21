"use client";
import React from "react";
import "../styles/Experiences.css";
import { experience } from "../utils/data";

const Experiences: React.FC = () => {
  return (
    <div className="Experiences">
      <p className="Heading">Experience</p>
      <div className="ExperiencesGrid">
        {experience.map((exp, index) => (
          <div className="ExperienceCard" key={index}>
            <h3>{exp.name}</h3>
            <p className="Description">{exp.description}</p>
            <div className="CardFooter">
              <span className="Duration">{exp.duration}</span>
              <a
                href={exp.url}
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

export default Experiences;
