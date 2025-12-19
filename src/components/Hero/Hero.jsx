import "./Hero.css";
import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hey! I’m Harsh</h1>
        <h2>A UI/UX Designer</h2>

        <p>
          I design thoughtful user experiences and build clean interfaces
          with a focus on clarity, usability, and aesthetics.
        </p>

        <div className="hero-buttons">
          <button className="primary">Contact Me</button>
          <button className="secondary">View Projects</button>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src={profile} alt="Harsh profile" />
      </motion.div>
    </section>
  );
}
