"use client";
import React from "react";
import "../styles/Experiences.css";

const Experiences: React.FC = () => {
  const experience = [
    {
      name: "FXDX (Backend Developer)",
      logo: "coinsLogo/fxdx.png",
      description:
        "Led the v2 subgraph creation and migration to Envio, enhanced data retrieval, developed real-time price APIs with Redis caching, designed backend keepers for asset management, and pitched our product to potential partners.",
      duration: "May 2024 - July 2024",
      url: "https://fxdx.exchange/",
    },
    {
      name: "FXDX (Blockchain Developer)",
      logo: "coinsLogo/fxdx.png",
      description:
        "Built the backend for the airdrop dashboard, optimized calculations with parallel queries, and created subgraphs for IDO contract testing and vesting tracking.",
      duration: "August 2023 - December 2023",
      url: "https://fxdx.exchange/",
    },
    {
      name: "Kryptomerch (Community Manager)",
      logo: "coinsLogo/kryptomerch.jpg",
      description:
        "I managed Kryptomerch's Discord server and contributed to the successful IDO of the DB Cooper NFT collection.",
      duration: "August 2022 - May 2023",
      url: "https://kryptomerch.io/",
    },
  ];
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
