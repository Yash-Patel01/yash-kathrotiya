import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQG5lTLT_kC9iA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722698201861?e=1741219200&v=beta&t=yEYYxK0MFTxkKzX-3BEQZm8p8Qw8WZHpNohfv8dm4t8" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Yash-Patel01" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yash-kathrotiya/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Yash Kathrotiya</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Yash-Patel01" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yash-kathrotiya/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;