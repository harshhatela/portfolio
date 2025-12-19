import "./About.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I’m Harsh, a UI/UX designer and frontend developer who enjoys turning
          complex ideas into clean, user-friendly digital experiences.
        </p>

        <p>
          I work across design and development — from Figma to responsive React
          interfaces — constantly learning through real-world projects.
        </p>

        <div className="about-stats">
          <div>
            <h3>10+</h3>
            <span>Projects</span>
          </div>
          <div>
            <h3>2+</h3>
            <span>Years Learning</span>
          </div>
          <div>
            <h3>1000+</h3>
            <span>Hours Practice</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
