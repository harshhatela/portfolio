import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutCard}>
        <h2 className={styles.aboutTitle}>ABOUT</h2>
        <div className={styles.aboutText}>
          <p>
            Hi, I'm Harsh — a developer who enjoys building clean, thoughtful digital experiences using modern web technologies, and occasionally fixing bugs I created five minutes ago.
          </p>
          <p>
            I like working across the full flow of a product, from shaping the interface to making sure everything behind the scenes works smoothly and reliably. Most of my work focuses on websites and web apps that solve real problems, with an emphasis on clarity, usability, and structure rather than unnecessary complexity.
          </p>
          <p>
            I'm still growing, and most of what I've learned comes from hands-on projects — building things, breaking them, and improving them step by step. I take what I build seriously and enjoy refining ideas until they feel simple, purposeful, and complete.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;