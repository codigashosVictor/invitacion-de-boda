import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const cursiveTitle = {
  fontFamily: "'Great Vibes', cursive",
  color: "#a29782",
  textAlign: "center",
};
export default function HeroSection({ img_portada, AnimatedButton }) {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
      sx={{
        backgroundImage: `url(${img_portada})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          py: 4,
        }}
      >
        <MotionTypography
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          variant="h1"
          component="h1"
          textAlign="center"
          sx={{
            ...cursiveTitle,
            fontSize: {
              xs: "4rem",
              sm: "5.5rem",
              md: "5.5rem",
              lg: "5.5rem",
            },
          }}
          marginTop={5}
        >
          Nos Casamos
        </MotionTypography>

        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Great Vibes', cursive",
              color: "#fff",
            }}
          >
            Michell
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Alex Brush', cursive",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#fff",
              mt: -2,
            }}
          >
            &amp;
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontFamily: "'Great Vibes', cursive", color: "#fff", pt: 1 }}
          >
            Victor
          </Typography>
          <Typography
            sx={{
              ...cursiveTitle,
              fontSize: "1.5rem",
              mt: 1,
            }}
          >
            06.09.2025
          </Typography>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <AnimatedButton>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "2em",
                color: "#fff",
              }}
            />
          </AnimatedButton>
        </MotionBox>
      </Box>
    </Box>
  );
}
