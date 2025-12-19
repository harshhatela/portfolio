import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "UI/UX Design",
  "Figma",
  "Python",
  "C",
  "C++",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="skills-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-pill"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -6 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
