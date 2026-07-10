import React, { useState, useEffect } from 'react';
import styles from '../styles/Hero.module.css';
import logo from '../assets/logo.png';

const roles = [
  'A UI/UX Designer',
  'A Frontend Developer',
  'An AI/ML Enthusiast',
  'A Creative Thinker',
  'A Problem Solver',
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setAnimating(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1AeoxgZC8dwT8sNOyTbqmYrF7Sgl6yTqH/view?usp=drive_link', '_blank', 'noopener,noreferrer');
  };

  const handleMyProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroGreeting}>Hey! I'm Harsh</h1>
          <h2 className={`${styles.heroTitle} ${animating ? styles.heroTitleExit : styles.heroTitleEnter}`}>
            {roles[currentRoleIndex]}
          </h2>
          <p className={styles.heroDescription}>
            I help brands and startups transform their ideas into beautiful, 
            functional products that users love. With expertise in modern web 
            technologies and design principles, I create experiences that matter.
          </p>
          <div className={styles.heroButtons}>
            <button 
              className={`${styles.btnPrimary} ${styles.animatedBtn}`}
              onClick={handleDownloadResume}
            >
              <span>Download Resume</span>
            </button>
            <button 
              className={`${styles.btnSecondary} ${styles.animatedBtn}`}
              onClick={handleMyProjectsClick}
            >
              <span>My Projects</span>
            </button>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImage}>
            <div className={styles.imageBorder}></div>
            <img src={logo} alt="Profile" />
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>↓</div>
    </section>
  );
};

export default Hero;