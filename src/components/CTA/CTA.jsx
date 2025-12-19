import "./CTA.css";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="cta">
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Let’s build something meaningful together</h2>

        <p>
          I’m always open to discussing new projects, design ideas, or
          opportunities to learn and grow.
        </p>

        <button className="cta-btn">Get in Touch</button>
      </motion.div>
    </section>
  );
}
