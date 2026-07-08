import React from 'react';
import styles from '../styles/Stats.module.css';
import { FaFolder, FaLightbulb, FaBolt, FaClock } from "react-icons/fa";

const Stats = () => {
  return (
    <section className={styles.stats}>
      <h2 className={styles.sectionTitle}>STATS</h2>
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <div className={styles.statIcon}><FaFolder /></div>
          <div className={styles.statNumber}>10+</div>
          <div className={styles.statLabel}>Projects Completed</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statIcon}><FaLightbulb /></div>
          <div className={styles.statNumber}>20+</div>
          <div className={styles.statLabel}>UI/UX Case Studies</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statIcon}><FaBolt /></div>
          <div className={styles.statNumber}>1000+</div>
          <div className={styles.statLabel}>Hours of Practice</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statIcon}><FaClock /></div>
          <div className={styles.statNumber}>2+</div>
          <div className={styles.statLabel}>Years Learning & Building</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;