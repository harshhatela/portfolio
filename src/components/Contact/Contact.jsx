import "./Contact.css";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Contact</h2>
        <p>Let’s connect and build something meaningful.</p>

        <div className="contact-links">
          <a href="mailto:harshhatela@email.com">
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/harshhatela"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/haRshhatela"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/harsh_hatela"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
