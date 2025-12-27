import React from 'react';
import styles from '../styles/Hero.module.css';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroGreeting}>Hey! I'm Harsh</h1>
          <h2 className={styles.heroTitle}>A UI/UX Designer</h2>
          <p className={styles.heroDescription}>
            I help brands and startups transform their ideas into beautiful, 
            functional products that users love. With expertise in modern web 
            technologies and design principles, I create experiences that matter.
          </p>
          <div className={styles.heroButtons}>
            <button className={`${styles.btnPrimary} ${styles.animatedBtn}`}>
              <span>Download Resume</span>
            </button>
            <button className={`${styles.btnSecondary} ${styles.animatedBtn}`}>
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