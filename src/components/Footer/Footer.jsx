import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
        
        <div className="footer-section">
          <h4>Follow Me</h4>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Harsh Hatela. All rights reserved.</p>
        <div className="footer-social">
          <a href="mailto:harsh@example.com">📧</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">💼</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">💻</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;