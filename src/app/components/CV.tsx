"use client";
import React from "react";
import "../styles/CV.css";

const CV: React.FC = () => {
  return (
    <div className="buttonContainer">
      <a
        href="/AnkushJhaResume.pdf"
        className="downloadCVButton"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <p>Download CV</p>
        <i className="fas fa-chevron-right Arrow"></i>
      </a>
    </div>
  );
};

export default CV;
