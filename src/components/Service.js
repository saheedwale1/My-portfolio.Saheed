import React from "react";
import styles from "../styles/service.module.css";
import mobile from "../assets/mobile.webp";
import web from "../assets/web.webp";
import uiux from "../assets/uiux.jpeg";

const services = [
  {
    title: "Web Development",
    description:
      "Full-stack web development services, including responsive website design, front-end, and back-end development.",
    imgSrc: web,
  },
  {
    title: "Mobile App Development",
    description:
      "Build high-quality mobile applications for iOS and Android, focusing on user-friendly design and performance.",
    imgSrc: mobile,
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user interfaces that enhance user experience across all platforms.",
    imgSrc: uiux,
  },
];

const ServicesPage = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img
              src={service.imgSrc}
              alt={service.title}
              className={styles.serviceImage}
            />
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
