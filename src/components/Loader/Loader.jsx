import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0b0b0b",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ color: "#ff8a65" }}
      >
        Harsh
      </motion.h1>
    </motion.div>
  );
}
