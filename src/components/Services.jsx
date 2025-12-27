import React from 'react';
import styles from '../styles/Services.module.css';
import { services } from '../data/servicesData';

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.sectionTitle}>SERVICE</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={styles.cardGlow}></div>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <button className={styles.serviceLink}>Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;