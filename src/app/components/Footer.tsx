"use client";
import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footerContainer">
          <div className="socialIcons">
            <a
              href="https://x.com/0xnoveleader"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="socialsLogo/x.png" alt="X Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankushjha003/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="socialsLogo/linkedin.png" alt="LinkedIn Logo" />
            </a>
            <a
              href="https://github.com/noveleader"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="socialsLogo/github.png" alt="GitHub Logo" />
            </a>
            <a
              href="https://t.me/noveleader"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="socialsLogo/tg.png" alt="Telegram Logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
