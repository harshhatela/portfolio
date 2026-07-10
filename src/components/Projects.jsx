import React, { useState, useCallback, useRef } from 'react';
import styles from '../styles/Projects.module.css';
import { projects } from '../data/projectsData';
import { FiGithub, FiExternalLink, FiLock, FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingIdx, setAnimatingIdx] = useState(null);
  const [animDirection, setAnimDirection] = useState(null); // 'out' or 'in'

  const categories = ['All', 'Full-Stack', 'Frontend/Web', 'UI/UX Design'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const total = filteredProjects.length;

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentIndex(0);
    setIsAnimating(false);
    setAnimatingIdx(null);
    setAnimDirection(null);
  };

  const goNext = useCallback(() => {
    if (isAnimating || total <= 1) return;
    setIsAnimating(true);
    setAnimatingIdx(currentIndex);
    setAnimDirection('out');

    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % total);
      setAnimatingIdx(null);
      setAnimDirection(null);
      setTimeout(() => setIsAnimating(false), 50);
    }, 400);
  }, [isAnimating, currentIndex, total]);

  const goPrev = useCallback(() => {
    if (isAnimating || total <= 1) return;
    setIsAnimating(true);
    const newIndex = (currentIndex - 1 + total) % total;
    setAnimatingIdx(newIndex);
    setAnimDirection('in');

    // Force the new card to start off-screen, then transition in
    requestAnimationFrame(() => {
      setCurrentIndex(newIndex);
      setAnimatingIdx(null);
      setAnimDirection(null);
      setTimeout(() => setIsAnimating(false), 500);
    });
  }, [isAnimating, currentIndex, total]);

  const getCardClass = (index) => {
    if (animatingIdx === index && animDirection === 'out') return styles.animatingOut;
    if (animatingIdx === index && animDirection === 'in') return styles.animatingIn;
    if (index === currentIndex) return styles.active;
    if (index === (currentIndex + 1) % total) return styles.next1;
    if (index === (currentIndex + 2) % total) return styles.next2;
    return '';
  };

  // Determine eyebrow label for a project
  const getEyebrow = (project, globalIndex) => {
    const num = String(globalIndex + 1).padStart(2, '0');
    const catMap = {
      'Full-Stack': 'Full-Stack',
      'Frontend/Web': 'Web App',
      'UI/UX Design': 'UI/UX',
    };
    const cat = catMap[project.category] || project.category;
    // Extract a domain hint from techStack or title
    let domain = '';
    if (project.title.includes('LocalDoc')) domain = 'AI';
    else if (project.title.includes('Citizen')) domain = 'Civic Tech';
    else if (project.title.includes('Zyphra')) domain = 'EdTech';
    else if (project.title.includes('Tiffinly')) domain = 'Food';
    else if (project.title.includes('Truth')) domain = 'Journalism';
    else if (project.title.includes('Nivaan')) domain = 'Healthcare';
    else if (project.title.includes('Agro')) domain = 'Agriculture';
    else if (project.title.includes('Portfolio')) domain = 'Personal';
    return `${num} • ${cat}${domain ? ` • ${domain}` : ''}`;
  };

  // Check if a project is a mobile-app card (Tiffinly or AgroSmart)
  // Replaced by imageFit in data

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>PROJECTS</h2>

      <div className={styles.filterWrapper}>
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

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        {/* Desktop left arrow */}
        <button
          className={`${styles.navBtn} ${styles.navBtnLeft} ${styles.desktopNav}`}
          onClick={goPrev}
          aria-label="Previous project"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Card stack */}
        <div className={styles.cardStackWrapper}>
          {filteredProjects.map((project, index) => {
            // Find the original index in the full projects array for consistent numbering
            const globalIndex = projects.indexOf(project);
            const cardPositionClass = getCardClass(index);

            return (
              <article
                key={project.title}
                className={`${styles.projectCard} ${cardPositionClass}`}
              >
                {/* Left — Content */}
                <div className={styles.cardLeft}>
                  <div className={styles.eyebrow}>{getEyebrow(project, globalIndex)}</div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  {project.subtitle && (
                    <p className={styles.subtitle}>{project.subtitle}</p>
                  )}
                  <p className={styles.description}>{project.description}</p>

                  {project.highlights && (
                    <div className={styles.highlights}>
                      {project.highlights.map((h, idx) => (
                        <span key={idx} className={styles.highlightItem}>{h}</span>
                      ))}
                    </div>
                  )}

                  {project.techStack && (
                    <div className={styles.techStack}>
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  )}

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

                {/* Right — Image */}
                <div className={styles.cardRight}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className={project.imageFit === 'contain' ? styles.containImage : ''}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Desktop right arrow */}
        <button
          className={`${styles.navBtn} ${styles.navBtnRight} ${styles.desktopNav}`}
          onClick={goNext}
          aria-label="Next project"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Mobile nav buttons */}
      <div className={styles.mobileNavBtns}>
        <button className={styles.navBtn} onClick={goPrev} aria-label="Previous project">
          <FiChevronLeft size={20} />
        </button>
        <button className={styles.navBtn} onClick={goNext} aria-label="Next project">
          <FiChevronRight size={20} />
        </button>
      </div>

      {/* Counter */}
      {total > 0 && (
        <div className={styles.cardCounter}>
          {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      )}

      {/* View More — links to GitHub profile */}
      <div className={styles.viewMoreContainer}>
        <a
          href="https://github.com/harshhatela"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.animatedBtn} ${styles.btnPrimary} ${styles.viewMoreBtn}`}
        >
          <span>View More Projects <FiArrowRight /></span>
        </a>
      </div>
    </section>
  );
};

export default Projects;