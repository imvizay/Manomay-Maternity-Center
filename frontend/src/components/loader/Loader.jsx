import { motion } from "framer-motion";
import '@assets/css/components/loader.css'

const text = "MANOMAY";

function Loader() {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      

      {/* Text */}
      <div className="loader-text">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
              x: [0, -2, 2, -1, 1, 0],
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        className="loader-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6] }}
        transition={{ delay: 1, duration: 1 }}
      >
        Maternity & Nursing Home - Bhopal
      </motion.p>

      {/* Progress bar */}
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>

      {/* Flicker */}
      <motion.div
        className="flicker"
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 0.2, repeat: Infinity }}
      />
    </motion.div>
  );
}

export default Loader;