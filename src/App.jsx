import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import logo from './assets/logo.png'; 

// redeploy test

// Icons
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaBootstrap, FaPython, FaGitAlt, FaFigma, FaFolder, FaLightbulb, FaBolt, FaClock, FaCode, FaPaintBrush, FaMobileAlt, FaPalette, FaChartLine, FaCommentDots } from "react-icons/fa";
import { SiCplusplus, SiC, SiMysql, SiCanva } from "react-icons/si";

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const skillsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollY(position);
      setScrolled(position > 50);
      setShowBackToTop(position > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const skills = [
    { name: "React", icon: <FaReact />, color: "#00D8FF", top: "15%", left: "25%" },
    { name: "Python", icon: <FaPython />, color: "#3776AB", top: "25%", left: "53%" },
    { name: "Figma", icon: <FaFigma />, color: "#A259FF", top: "22%", left: "72%" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C", top: "36%", left: "32%" },
    { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F0F0F0", top: "36%", left: "83%" }, 
    { name: "C", icon: <SiC />, color: "#A8B9CC", top: "42%", left: "15%" },
    { name: "Canva", icon: <SiCanva />, color: "#FF7F50", top: "47%", left: "72%" }, 
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3", top: "52%", left: "25%" },
    { name: "SQL", icon: <SiMysql />, color: "#F29111", top: "57%", left: "78%" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", top: "65%", left: "22%" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933", top: "65%", left: "55%" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", top: "78%", left: "38%" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", top: "73%", left: "71%" },
  ];

  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce platform with cart and payment integration',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop'
    },
    {
      title: 'Chat App',
      description: 'Real-time messaging application with WebSocket support',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=300&fit=crop'
    },
    {
      title: 'Financial Dashboard',
      description: 'Analytics dashboard for tracking financial metrics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    },
    {
      title: 'Food Delivery App',
      description: 'Mobile-first food ordering platform with restaurant listings',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop'
    },
    {
      title: 'Blog Design UI',
      description: 'Modern blog interface with clean typography and layouts',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop'
    }
  ];

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.'
    },
    {
      icon: <FaPalette />,
      title: 'Branding',
      description: 'Complete brand identity design including logos, color schemes, and brand guidelines.'
    },
    {
      icon: <FaChartLine />,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns to grow your online presence and reach.'
    },
    {
      icon: <FaCommentDots />,
      title: 'Design & Tech Guidance',
      description: 'Helping clients and teams choose the right design approach and technical direction for simple and effective solutions.'
    }
  ];

  if (loading) {
    return (
      <div className="intro-screen">
        <div className="light-source"></div>
        <div className="intro-content">
          <h1 className="intro-name">
            <span>H</span>
            <span>a</span>
            <span>r</span>
            <span>s</span>
            <span>h</span>
          </h1>
          <p className="intro-tagline">UI/UX Designer & Developer</p>
        </div>
        <div className="magical-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <div className="firefly-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="firefly"></div>
        ))}
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="Harsh Logo" className="site-logo" />
            <h2>Harsh</h2>
          </div>

          <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="navbar-cta">Let's Talk</button>

          <div 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">Hey! I'm Harsh</h1>
            <h2 className="hero-title">A UI/UX Designer</h2>
            <p className="hero-description">
              I help brands and startups transform their ideas into beautiful, 
              functional products that users love. With expertise in modern web 
              technologies and design principles, I create experiences that matter.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary animated-btn">
                <span>Download Resume</span>
              </button>
              <button className="btn-secondary animated-btn">
                <span>My Projects</span>
              </button>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <div className="image-border"></div>
              <img src={logo} alt="Profile" />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <section className="about" id="about">
        <div className="about-card">
          <h2 className="about-title">ABOUT ME</h2>
          <p className="about-text">
            Hi, I'm Harsh — a full-stack developer who enjoys building thoughtful, well-structured digital products. I focus on creating applications that feel smooth to use, are visually balanced, and work reliably across devices.
            <br/><br/>
            I like working across the entire product flow — from shaping the interface to making sure the logic behind it is solid and scalable. My approach is simple: build things that are clean, purposeful, and easy to interact with.
            <br/><br/>
            I'm constantly learning through hands-on projects and real experimentation, pushing myself to improve both technically and creatively. I enjoy turning ideas into working products and refining them until they feel right.
          </p>
        </div>
      </section>

      <section className="skills" id="skills" ref={skillsRef}>
        <div className="skills-container-inner">
          <div className="center-text">
            <h1>My Skills & <br /> <span className="highlight">Expertise</span></h1>
          </div>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-chip"
              style={{
                top: skill.top,
                left: skill.left,
                "--color": skill.color,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${6 + Math.random() * 4}s` 
              }}
            >
              <span className="icon">{skill.icon}</span>
              <span className="label">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="section-title">PROJECT</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="project-link">
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        <h2 className="section-title">STATS</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon"><FaFolder /></div>
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><FaLightbulb /></div>
            <div className="stat-number">20+</div>
            <div className="stat-label">UI/UX Case Studies</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><FaBolt /></div>
            <div className="stat-number">1000+</div>
            <div className="stat-label">Hours of Practice</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><FaClock /></div>
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Learning & Building</div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="section-title">SERVICE</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-glow"></div>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-link">Learn More →</button>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Let's Build Something Meaningful Together</h2>
          <p>
            Ready to start your next project? Let's collaborate and create 
            something amazing that makes a real impact.
          </p>
          <div className="cta-actions">
            <button className="btn-primary animated-btn">
              <span>Let's Connect</span>
            </button>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="section-title">CONTACT</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Start A Conversation</h3>
            <p>
              Whether you have a project in mind, need some advice, or just want 
              to say hello, I'd love to hear from you. Drop me a message and I'll 
              get back to you as soon as possible.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">workwithharsh.hatela@gmail.com</span>
              </div>
              {/* <div className="contact-item">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+91 8079074033</span>
              </div> */}
            </div>
          </div>
          <div className="contact-form">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <textarea 
              placeholder="Your Message" 
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <button onClick={handleSubmit} className="btn-submit">
              <span className="btn-text">Send Message</span>
              <div className="plane-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Harsh Logo" className="site-logo" />
              <h3>Harsh</h3>
            </div>
            <p>Building digital experiences that matter. Let's create something amazing together.</p>
            <div className="footer-social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <a href="#services">Web Development</a>
              <a href="#services">UI/UX Design</a>
              <a href="#services">API Integration</a>
              <a href="#services">Consulting</a>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <a href="mailto:workwithharsh.hatela@gmail.com">workwithharsh.hatela@gmail.com</a>
              {/* <a href="tel:+918079074033">+91 8079074033</a> */}
              <a href="#contact">Get in Touch</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Harsh Hatela. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;