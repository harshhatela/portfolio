import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutCard}>
        <h2 className={styles.aboutTitle}>ABOUT ME</h2>
        <p className={styles.aboutText}>
          Hi, I'm Harsh — a full-stack developer who enjoys building thoughtful, well-structured digital products. I focus on creating applications that feel smooth to use, are visually balanced, and work reliably across devices.
          <br/><br/>
          I like working across the entire product flow — from shaping the interface to making sure the logic behind it is solid and scalable. My approach is simple: build things that are clean, purposeful, and easy to interact with.
          <br/><br/>
          I'm constantly learning through hands-on projects and real experimentation, pushing myself to improve both technically and creatively. I enjoy turning ideas into working products and refining them until they feel right.
        </p>
      </div>
    </section>
  );
};

export default About;