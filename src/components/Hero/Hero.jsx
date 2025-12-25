import "./Hero.css";
import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-frame">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Harsh Hatela</h1>
          <h2>UI/UX Designer & Frontend Developer</h2>
          <p>
            I design clean, aesthetic, and user-focused digital experiences and
            build them with modern frontend technologies.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Get in touch</button>
            <button className="btn-secondary">View projects</button>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <img src={profile} alt="Harsh" />
        </motion.div>
      </div>
    </section>
  );
}
