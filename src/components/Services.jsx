import React, { useState, useEffect } from 'react';
import styles from '../styles/Services.module.css';
import { services } from '../data/servicesData';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section className={styles.services} id="services">
      <h2 className={styles.sectionTitle}>SERVICE</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div 
            key={index} 
            className={styles.serviceCard} 
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => handleServiceClick(service)}
          >
            <div className={styles.cardGlow}></div>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <button className={styles.serviceLink}>Learn More →</button>
          </div>
        ))}
      </div>
      
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Services;