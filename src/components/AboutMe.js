import React from "react";
import about from "../styles/about.module.css";
import headphoto from "../assets/headphoto.jpg";

const AboutMePage = () => {
  return (
    <div className={about.container}>
      <h1> Saheed Muhammed </h1>
      <img
        src={headphoto}
        alt="Headshot of [Your Name]"
        className="profile-image"
      />
      <p>
        I’m a dedicated software engineer with expertise in web and mobile app
        development. I specialize in building efficient, scalable solutions
        using Python, Java, and JavaScript. Passionate about learning new
        technologies and contributing to impactful projects.
      </p>
      <a
        href="[URL to your PDF Resume]"
        className="resume-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
      </a>
    </div>
  );
};

export default AboutMePage;
