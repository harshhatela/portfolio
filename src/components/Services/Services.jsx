import "./Services.css";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Designing clean, intuitive, and user-focused interfaces using proper UX principles and visual hierarchy.",
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive and performant web interfaces using HTML, CSS, JavaScript, and React.",
  },
  {
    title: "Design to Code",
    description:
      "Converting Figma designs into pixel-perfect, responsive, and accessible frontend code.",
  },
  {
    title: "Website Optimization",
    description:
      "Improving layout structure, responsiveness, and UI performance for better user experience.",
  },
];

export default function Services() {
  return (
    <section className="services">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
