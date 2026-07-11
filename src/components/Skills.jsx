import React, { useRef } from 'react';
import styles from '../styles/Skills.module.css';
import { skills } from '../data/skillsData';

const Skills = () => {
  const skillsRef = useRef(null);

  return (
    <section className={styles.skills} id="skills" ref={skillsRef}>
      <div className={styles.skillsContainerInner}>
        <div className={styles.centerText}>
          <h2 className={styles.skillsHeading}>My Skills & <br /> <span className={styles.highlight}>Expertise</span></h2>
        </div>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={styles.skillChip}
            style={{
              "--desktop-top": skill.top,
              "--desktop-left": skill.left,
              "--mobile-top": skill.mobileTop,
              "--mobile-left": skill.mobileLeft,
              "--color": skill.color,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${6 + Math.random() * 4}s` 
            }}
          >
            <span className={styles.icon}>{skill.icon}</span>
            <span className={styles.label}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;