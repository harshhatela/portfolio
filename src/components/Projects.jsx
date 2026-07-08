import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Projects.module.css';
import { projects } from '../data/projectsData';
import { FiGithub, FiExternalLink, FiLock, FiChevronRight } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filterRef = useRef(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Full-Stack', 'Frontend/Web', 'UI/UX Design'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  const sizeClassMap = {
    large: styles.cardLarge,
    medium: styles.cardMedium,
    small: styles.cardSmall,
  };

  // Check if filter bar is scrollable
  useEffect(() => {
    const el = filterRef.current;
    if (!el) return;
    const check = () => {
      setShowScrollHint(el.scrollWidth > el.clientWidth + 4);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>PROJECTS</h2>

      <div className={styles.filterWrapper}>
        <div className={styles.radioInputs} ref={filterRef}>
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
        {showScrollHint && <div className={styles.fadeRight} />}
        {showScrollHint && (
          <div className={styles.scrollChevron}>
            <FiChevronRight />
          </div>
        )}
      </div>

      <div className={styles.projectsGrid}>
        {visibleProjects.map((project, index) => (
          <article
            key={project.title}
            className={`${styles.projectCard} ${sizeClassMap[project.size] || styles.cardSmall} ${project.isFeatured ? styles.featuredCard : ''}`}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className={styles.projectImage}>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width="800"
                height="600"
              />
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectInfo}>
                <div className={styles.projectHeader}>
                  <h3>{project.title}</h3>
                  {project.subtitle && (
                    <p className={styles.subtitle}>{project.subtitle}</p>
                  )}
                </div>

                <p className={styles.description}>{project.description}</p>

                {project.highlights && (
                  <div className={styles.highlights}>
                    {project.highlights.map((highlight, idx) => (
                      <span key={idx} className={styles.highlightItem}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {project.techStack && (
                  <div className={styles.techStack}>
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.projectActions}>
                {/* Live Demo / Dribbble / "You're looking at it" */}
                {project.liveUrlLabel ? (
                  <span className={`${styles.animatedBtn} ${styles.btnLooking}`}>
                    <FiExternalLink /> {project.liveUrlLabel}
                  </span>
                ) : project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.animatedBtn} ${styles.btnPrimary}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span><FiExternalLink /> Live Demo</span>
                  </a>
                ) : project.url && project.url !== '#' ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.animatedBtn} ${styles.btnPrimary}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span><FiExternalLink /> View Design</span>
                  </a>
                ) : null}

                {/* GitHub link or Private badge */}
                {project.isPrivate ? (
                  <span className={`${styles.animatedBtn} ${styles.btnPrivate}`}>
                    <FiLock /> Private Repo
                  </span>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.animatedBtn} ${styles.btnSecondary}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span><FiGithub /> GitHub</span>
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length > 5 && (
        <div className={styles.viewMoreContainer}>
          <button 
            className={`${styles.animatedBtn} ${styles.btnPrimary} ${styles.viewMoreBtn}`}
            onClick={() => setShowAll(!showAll)}
          >
            <span>{showAll ? 'View Less' : 'View More'}</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;