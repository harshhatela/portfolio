import React, { useState } from 'react';
import styles from '../styles/IntroScreen.module.css';

const IntroScreen = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 500); // Wait for exit animation
  };

  return (
    <div 
      className={`${styles.introScreen} ${isExiting ? styles.fadeOutFast : ''}`} 
      onClick={handleSkip}
    >
      <button 
        className={styles.skipButton} 
        onClick={(e) => { e.stopPropagation(); handleSkip(); }}
      >
        Skip Intro
      </button>
      
      {/* Warp speed stars background */}
      <div className={styles.warpContainer}>
        {[...Array(40)].map((_, i) => (
          <div key={i} className={styles.warpStar} style={{
            '--top': `${Math.random() * 100}%`,
            '--left': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 2}s`,
            '--duration': `${Math.random() * 1 + 0.5}s`
          }}></div>
        ))}
      </div>

      <div className={styles.introContent}>
        <div className={styles.introName} role="heading" aria-level="2">
          {['H', 'A', 'R', 'S', 'H'].map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
              {letter}
            </span>
          ))}
        </div>
        <p className={styles.introTagline}>UI/UX Designer & Developer</p>
      </div>
    </div>
  );
};

export default IntroScreen;