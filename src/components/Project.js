import React from "react";
import styles from "../styles/project.module.css";
import dictionary from "../assets/Dictionary.png";
import foodapp from "../assets/foodapp.png";
import expensetracker from "../assets/expensetracker.png";

const projects = [
  {
    id: 1,
    imageUrl: dictionary,
    title: "Dictionary",
    description:
      "A   reference book or digital resource that lists words in alphabetical order and provides their meanings, pronunciations, word origins, and other relevant information.",
  },
  {
    id: 2,
    imageUrl: expensetracker,
    title: "Expense tracker",
    description:
      "A  mobile or web application designed to help users manage their finances by easily recording daily expenses.",
  },
  {
    id: 3,
    imageUrl: foodapp,
    title: "The food app",
    description:
      "A mobile or web application that allows users to explore, order, and manage meals from their favorite restaurants or grocery stores.",
  },
];

const ProjectsPage = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className={styles.projectImage}
            />
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
