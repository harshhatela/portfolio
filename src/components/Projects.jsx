import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';
import { projects } from '../data/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web Design', 'Mobile App', 'Branding', 'UI/UX'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (projectUrl) => {
    if (projectUrl) {
      window.open(projectUrl, '_blank');
    }
  };

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>PROJECT</h2>
      
      <div className={styles.filterContainer}>
        <div className={styles.radioInputs}>
          {categories.map((category) => (
            <label key={category} className={styles.radio}>
              <input
                type="radio"
                name="category"
                checked={activeFilter === category}
                onChange={() => setActiveFilter(category)}
              />
              <span className={styles.name}>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className={styles.projectCard} 
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleProjectClick(project.url)}
          >
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className={styles.projectLink}>Learn More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;