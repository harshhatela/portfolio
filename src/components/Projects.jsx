import React from 'react';
import styles from '../styles/Projects.module.css';
import { projects } from '../data/projectsData';

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>PROJECT</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className={styles.projectLink}>
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;