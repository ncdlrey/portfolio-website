import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.imgur.com/jmHsZ87.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ncdlrey" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nicole-delos-reyes-1a8b8b198/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Nicole Delos Reyes</h1>
          <p>Computer Science Undergraduate</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ncdlrey" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nicole-delos-reyes-1a8b8b198/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;