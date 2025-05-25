import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img_v_m from "../src/img/fotos_pareja/t.jpg";

// Framer Motion component
const MotionBox = motion.create(Box);

export default function AnimatedImage({
  width = "100%",
  borderRadius = "16px",
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <MotionBox
      ref={ref}
      component="img"
      src={img_v_m}
      alt="test"
      sx={{
        width,
        maxWidth: "300px",
        borderRadius,
        boxShadow: 3,
        display: "block",
        margin: "0 auto",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
}
