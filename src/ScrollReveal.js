// ScrollReveal.js
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  ease = "easeOut",
  direction = "up", // ← puede ser "up", "down", "left", "right"
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Definir el offset en base a la dirección
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 };
      case "down":
        return { opacity: 0, y: -40 };
      case "left":
        return { opacity: 0, x: 40 };
      case "right":
        return { opacity: 0, x: -40 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, ease, delay }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
