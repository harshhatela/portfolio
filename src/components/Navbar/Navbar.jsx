import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="logo">
          <span className="dot" /> Harsh
        </div>

        <button className="menu-btn" onClick={() => setOpen(true)}>
          MENU
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6 }}
          >
            <button className="close-btn" onClick={() => setOpen(false)}>✕</button>

            <ul>
              {sections.map((id) => (
                <li
                  key={id}
                  className={active === id ? "active" : ""}
                  onClick={() => scrollTo(id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
