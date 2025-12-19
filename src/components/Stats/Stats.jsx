import "./Stats.css";
import { motion } from "framer-motion";

const stats = [
  { number: "10+", label: "Projects Completed" },
  { number: "2+", label: "Years of Learning" },
  { number: "1000+", label: "Hours of Practice" },
  { number: "15+", label: "Designs Created" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-wrapper">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
