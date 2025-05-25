import { Box, Typography } from "@mui/material";
import ScrollReveal from "./ScrollReveal";

export default function SeccionInvitacion() {
  return (
    <Box px={2} py={5} textAlign="center">
      <ScrollReveal>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: {
              xs: "3.5rem",
              sm: "3.5rem",
            },
            background: "linear-gradient(90deg, #213628, #8C5A1F, #213628)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ¡Estas Invitado!
        </Typography>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Typography
          variant="body1"
          color="text.secondary"
          mt={2}
          fontSize={{ xs: "1rem", sm: "1.2rem" }}
        >
          Michell & Victor te esperan para celebrar juntos el 06.09.2025
        </Typography>
      </ScrollReveal>
    </Box>
  );
}
