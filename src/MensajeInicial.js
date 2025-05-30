import { Box, Typography } from "@mui/material";
import ScrollReveal from "./ScrollReveal";
const cursiveTitle = {
  fontFamily: "'Great Vibes', cursive",
  color: "#a29782",
  textAlign: "center",
};
export default function SeccionInvitacion() {
  return (
    <Box px={2} py={5} textAlign="center">
      <ScrollReveal>
        <Typography
          variant="h2"
          sx={{
            ...cursiveTitle,
            fontSize: {
              xs: "3.5rem",
              sm: "3.5rem",
            },
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
