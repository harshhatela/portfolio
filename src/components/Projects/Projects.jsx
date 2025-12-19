import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Framer Motion.",
    tech: "React • CSS",
  },
  {
    title: "UI/UX Case Study",
    description: "Complete design process from research to UI.",
    tech: "Figma • UX",
  },
  {
    title: "Dashboard UI",
    description: "Responsive admin dashboard interface.",
    tech: "HTML • CSS • JS",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
            <button className="project-btn">View Project</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
