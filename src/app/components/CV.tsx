"use client";
import React from "react";
import "../styles/CV.css";

const CV: React.FC = () => {
  return (
    <div className="buttonContainer">
      <button className="downloadCVButton">
        <p>Download CV</p>
        <a
          href="/AnkushJhaResume.pdf"
          className="Arrow"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </button>
    </div>
  );
};

export default CV;
