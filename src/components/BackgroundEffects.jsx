import React from 'react';
import styles from '../styles/BackgroundEffects.module.css';

const BackgroundEffects = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <div className={styles.fireflyContainer}>
        {[...Array(15)].map((_, i) => (
          <div key={i} className={styles.firefly}></div>
        ))}
      </div>
    </>
  );
};

export default BackgroundEffects;