import React, { useState } from 'react';
import styles from '../styles/Certificates.module.css';

const Certificates = ({ onClose }) => {
  const certificates = [
    {
      id: 1,
      title: 'Oracle Cloud Infrastructure Certification',
      organization: 'Oracle',
      date: '2024',
      image: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=02DC8AE971725A4152EE0004C1FB024637764151FFCC9DE2A376356E9330CDAD',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=02DC8AE971725A4152EE0004C1FB024637764151FFCC9DE2A376356E9330CDAD',
      category: 'Cloud Computing'
    },
    {
      id: 2,
      title: 'HackCrux Participation Certificate',
      organization: 'Unstop & LNMIIT',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=400&h=300&fit=crop', // Replace with actual image
      link: 'https://certificate.hack2skill.com/user/isrobah25/2025H2S06BAH25-P27621',
      category: 'Hackathon'
    },
    {
      id: 3,
      title: 'Industrial Training - ML & IoT',
      organization: 'MNIT Innovation Centre',
      date: 'July 2024',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop', // Replace with actual image
      link: '#',
      category: 'Training'
    }
  ];

  const handleViewCertificate = (link) => {
    if (link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <div className={styles.certificatesModal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.backgroundEffects}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
          <div className={styles.gradientOrb3}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>My Certificates</h1>
            <p className={styles.subtitle}>A collection of my achievements and certifications</p>
          </div>

          <div className={styles.certificatesGrid}>
            {certificates.map((cert, index) => (
              <div 
                key={cert.id} 
                className={styles.certCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.certImageContainer}>
                  <img src={cert.image} alt={cert.title} className={styles.certImage} />
                  <div className={styles.certOverlay}>
                    <button 
                      className={styles.viewBtn}
                      onClick={() => handleViewCertificate(cert.link)}
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
                <div className={styles.certInfo}>
                  <span className={styles.certCategory}>{cert.category}</span>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <p className={styles.certOrg}>{cert.organization}</p>
                  <p className={styles.certDate}>{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;