import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';
import { projects } from '../data/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  
  const categories = ['All', 'Web Design', 'Mobile App', 'Branding', 'UI/UX'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMore = filteredProjects.length > 6;

  const handleProjectClick = (project) => {
    if (project.url && project.url !== '#' && project.url !== 'https://example.com') {
      window.open(project.url, '_blank');
    } else {
      window.open(`/404.html?project=${encodeURIComponent(project.title)}`, '_blank');
    }
  };

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const handleLoadLess = () => {
    setShowAll(false);
    // Scroll to projects section smoothly
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
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
                onChange={() => handleFilterChange(category)}
              />
              <span className={styles.name}>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {displayedProjects.map((project, index) => (
          <div 
            key={index} 
            className={styles.projectCard} 
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleProjectClick(project)}
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

      {hasMore && (
        <div className={styles.loadMoreContainer}>
          {!showAll ? (
            <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
              <span>Load More Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          ) : (
            <button className={styles.loadLessBtn} onClick={handleLoadLess}>
              <span>Load Less</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;