import React from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.png';
import { navLinks } from '../data/navLinksData';

const Navbar = ({ scrolled, menuOpen, setMenuOpen }) => {
  const handleLetsTalk = () => {
    const phoneNumber = '918079074033';
    const message = 'Hi Harsh! I came across your portfolio and would love to discuss a potential project with you.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href) => {
    if (href === '/certificates') {
      window.open('/certificates.html', '_blank');
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Harsh Logo" className={styles.siteLogo} />
          <h2>Harsh</h2>
        </div>

        <div className={`${styles.navbarMenu} ${menuOpen ? styles.active : ''}`}>
          {navLinks.map((link, index) => (
            link.href === '/certificates' ? (
              <a 
                key={index}
                href="/certificates.html"
                className={styles.navbarLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.name}
              </a>
            ) : (
              <a 
                key={index} 
                href={link.href} 
                className={styles.navbarLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        <button className={styles.navbarCta} onClick={handleLetsTalk}>Let's Talk</button>

        <div 
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;