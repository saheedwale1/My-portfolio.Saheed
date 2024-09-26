import React from "react";
import { Link } from "react-router-dom";
import home from "../styles/home.module.css";

const HomePage = () => {
  return (
    <div className={home.container}>
      <h1>Welcome to My Portfolio!</h1>
      <p className={home.paragraph}>
        Our mission is to bring your idea's into reality
      </p>
      <div>
        <Link to="/about">
          <button className={home.button}>Learn More About Me</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
