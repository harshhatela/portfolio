import React from 'react';
import styles from '../styles/IntroScreen.module.css';

const IntroScreen = () => {
  return (
    <div className={styles.introScreen}>
      <div className={styles.lightSource}></div>
      <div className={styles.introContent}>
        <h1 className={styles.introName}>
          <span>H</span>
          <span>a</span>
          <span>r</span>
          <span>s</span>
          <span>h</span>
        </h1>
        <p className={styles.introTagline}>UI/UX Designer & Developer</p>
      </div>
      <div className={styles.magicalParticles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default IntroScreen;