"use client";
import React from "react";
import "../styles/Projects.css";

const Projects: React.FC = () => {
  const repositories = [
    {
      name: "DeriPulse",
      description:
        "Deripulse is a crypto derivatives information hub built using next JS, offering real-time insights into on-chain protocol data using defillama API",
      language: "JavaScript, CSS",
      url: "https://github.com/Noveleader/deripulse-app",
    },
    {
      name: "Hardhat Defi",
      description: "Programmatically lending and borrowing from aave protocol.",
      language: "Solidity, JavaScript",
      url: "https://github.com/Noveleader/Hardhat-defi",
    },
    {
      name: "ERC-20",
      description: "A Simple ERC-20 smart contract implementation.",
      language: "Solidity, JavaScript",
      url: "https://github.com/Noveleader/ERC-20",
    },
    {
      name: "Healthcare SSI",
      description:
        "App Implements SSI in healthcare by storing all the important details of patient on blockchain",
      language: "Dart, JavaScript, Solidity",
      url: "https://github.com/Noveleader/Hackathon-Flutter",
    },
    {
      name: "Hardhat NFT",
      description:
        "A Basic NFT smart contract and related deploying scripts in order to upload NFTs to cloud nodes like pinata.",
      language: "Solidity, JavaScript",
      url: "https://github.com/Noveleader/Hardhat-NFT",
    },
    {
      name: "API CMC",
      description:
        "This is a simple api for CMC that returns total supply and cirulating supply of a token contract address",
      language: "JavaScript",
      url: "https://github.com/Noveleader/api-cmc",
    },
  ];

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
