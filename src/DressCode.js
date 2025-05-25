import { Box, Grid, Stack, Typography } from "@mui/material";

const colors = ["#4A5335", "#6B704B", "#A09788", "#C4BBA9"]; // Example colors

export default function DressCode() {
  return (
    <Box
      bgcolor="#9fa99a"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      py={6}
    >
      <Grid container justifyContent="center">
        <Grid
          size={{ xs: 11, sm: 10, md: 8, lg: 6 }}
          sx={{
            border: "6px double #e1cfa6",
            borderRadius: 4,
            backgroundColor: "#ffffffaa", // blanco con opacidad para que resalte sobre el fondo
            backdropFilter: "blur(3px)",
            boxShadow: 5,
            p: { xs: 4, md: 5 },
            bgcolor: "#fdfcf8",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              letterSpacing: ".3rem",
              fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "4.5rem",
              },
              fontFamily: "'Great Vibes', cursive",
              color: "#e1cfa6",
              mb: 3,
            }}
            data-aos="fade-right"
          >
            Vestimenta
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              color: "#4A5335",
              mb: 2,
            }}
            data-aos="fade-left"
          >
            Formal
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            mt={3}
            data-aos="zoom-in"
          >
            {colors.map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: color,
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
