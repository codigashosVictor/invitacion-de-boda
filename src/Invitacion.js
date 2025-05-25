import "./index.css";
import { keyframes } from "@mui/system";
import { useParams } from "react-router-dom";

import TimeLineProgram from "../src/timeline";
import Carousel from "./Carousel-img";
import HeroSection from "./Hero";
import ScrollReveal from "./ScrollReveal";
import DressCode from "./DressCode";
import SeccionCentral from "./SeccionCentral";
import {
  Typography,
  Button,
  Grid,
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { LocalBar, LocationOn } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import ChurchIcon from "@mui/icons-material/Church";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// images
import img_portada from "../src/img/header_5.jpg";
import img_places from "../src/img/background_places.jpeg";
import { useState } from "react";

const familias = [
  { nombre: "Lopez", asistentes: 4 },
  { nombre: "Ramirez", asistentes: 2 },
  { nombre: "Garcia", asistentes: 3 },
];

const blink = keyframes`
  0%, 100% { opacity: 1; transform: translateY(0); }
  50% { opacity: 0.5; transform: translateY(5px); }
`;

const AnimatedButton = styled(Button)({
  animation: `${blink} 1.5s infinite`,
  fontSize: "2rem",
  color: "white",
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
});
const cursiveText = {
  fontFamily: "'Great Vibes', cursive",
  color: "#e1cfa6",
  textAlign: "center",
};

export default function Invitaction() {
  const selectedDate = new Date(2025, 8, 6);
  const { familia } = useParams();
  const familiaData = familias.find(
    (f) => f.nombre.toLowerCase() === familia?.toLowerCase()
  );

  const maxAsistentes = familiaData?.asistentes || 0;
  const [asistentesSeleccionados, setAsisetntesSeleccionados] = useState("");

  const handleChange = (event) => {
    setAsisetntesSeleccionados(event.target.value);
  };

  return (
    <main>
      {/* Header Main */}
      <div>
        <HeroSection
          img_portada={img_portada}
          AnimatedButton={AnimatedButton}
        />
      </div>

      <div>
        <SeccionCentral selectedDate={selectedDate} />
      </div>

      {/* Carousel Photos */}
      <Box p={5}>
        <Carousel />
      </Box>

      {/* Box Places & Locations */}
      <Box
        sx={{
          position: "relative",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mt: "20px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-40px",
            left: "0px",
            right: "0px",
            bottom: "20px",
            backgroundImage: `url(${img_places})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px)",
            zIndex: 1,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${img_places})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 2,
          },
        }}
      >
        {/* Grid Places & Locations */}
        <Grid
          container
          spacing={0}
          p={2}
          sx={{
            zIndex: 3,
            position: "relative",
          }}
        >
          <Grid>
            {/* Church */}
            <ScrollReveal direction="right">
              <Box mt={3}>
                <ChurchIcon
                  sx={{ fontSize: "6em", color: "#e1cfa6" }}
                ></ChurchIcon>
                <Typography variant="h4" sx={{ ...cursiveText }}>
                  Ceremonia
                </Typography>
                <Grid
                  container
                  direction="row"
                  spacing={4}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  textAlign="center"
                >
                  <Grid>
                    <Typography variant="h6" color="#a29782">
                      11va IAFCJ
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderColor: "#C38C3F",
                      height: "3rem",
                      mx: 1,
                    }}
                  />
                  <Grid>
                    <Typography variant="h6" color="#a29782">
                      04:00 pm
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  container
                  columnSpacing={{ xs: 1 }}
                  justifyContent="center"
                  display="flex"
                >
                  <Grid size={12} paddingBottom={4}>
                    <Typography variant="caption" color="#213628">
                      Calle José Manuel Velasco 11, Nueva Tijuana, 22435
                      Tijuana, B.C.
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "#213628",
                        background:
                          "linear-gradient(90deg, #e1cfa6 0%, #e1cfa6 50%, #e1cfa6 100%)",
                        borderRadius: "50px", // fully rounded
                        padding: "10px 20px",
                      }}
                      endIcon={
                        <LocationOn sx={{ color: "#a29782" }}></LocationOn>
                      }
                    >
                      Como Llegar
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </ScrollReveal>

            {/* Ceremonia */}
            <ScrollReveal direction="left">
              <Box py={10}>
                <LocalBar sx={{ fontSize: "6em", color: "#e1cfa6" }}></LocalBar>
                <Typography variant="h4" sx={{ ...cursiveText }}>
                  Recepccion
                </Typography>

                <Grid
                  container
                  columnSpacing={{ xs: 1 }}
                  justifyContent="center"
                  display="flex"
                >
                  <Grid size={12} paddingBottom={4}>
                    <Typography variant="caption" color="#213628">
                      Uabc 17108, Otay Constituyentes, 22457 Tijuana, B.C.
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "#213628",
                        background:
                          "linear-gradient(90deg, #e1cfa6 0%, #e1cfa6 50%, #e1cfa6 100%)",
                        borderRadius: "50px", // fully rounded
                        padding: "10px 20px",
                      }}
                      endIcon={
                        <LocationOn sx={{ color: "#a29782" }}></LocationOn>
                      }
                    >
                      Como Llegar
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Box>

      {/* Box Dress code and Program timeline */}
      <div>
        <DressCode />
      </div>

      {/* Timeline */}
      <Box
        py={10}
        sx={{
          position: "relative",
          backgroundImage: `url(${img_places})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography
            sx={{
              letterSpacing: ".2rem",
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "5rem",
                lg: "6rem",
              },
              fontFamily: "'Great Vibes', cursive",
              color: "#e1cfa6",
              textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
            }}
            data-aos="fade-up"
          >
            Programa
          </Typography>
          <TimeLineProgram />
        </Box>
      </Box>

      {/* Regalo */}
      <Box
        bgcolor="#9fa99a"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        py={6}
        px={2}
      >
        <Grid
          container
          maxWidth="md"
          sx={{
            border: "6px double #e1cfa6",
            borderRadius: 4,
            backgroundColor: "#ffffffaa", // blanco con opacidad para que resalte sobre el fondo
            backdropFilter: "blur(3px)",
            padding: { xs: 3, md: 5 },
            boxShadow: 5,
          }}
        >
          <Grid columns={12}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              {/* Imagen opcional arriba */}
              {/* <img src="/images/sobre.png" alt="img" width={130} /> */}

              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#5A4B2C",
                  fontWeight: 500,
                }}
              >
                Tu presencia es nuestro mejor regalo,
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1.1rem",
                  color: "#5A4B2C",
                }}
              >
                pero si deseas obsequiarnos algo puedes hacerlo de las
                siguientes formas:
              </Typography>

              <MailOutlineIcon
                sx={{
                  fontSize: "4rem",
                  color: "#8C5A1F",
                  animation: "swing 2s ease-in-out infinite",
                  "@keyframes swing": {
                    "0%": { transform: "rotate(0deg)" },
                    "25%": { transform: "rotate(20deg)" },
                    "50%": { transform: "rotate(0deg)" },
                    "75%": { transform: "rotate(-20deg)" },
                    "100%": { transform: "rotate(0deg)" },
                  },
                }}
              />

              {/* <MailOutlineIcon
                sx={{
                  fontSize: "4rem",
                  color: "#8C5A1F",
                  animation: "bounce 1.5s ease-in-out infinite",
                  "@keyframes bounce": {
                    "0%, 100%": {
                      transform: "translateY(0)",
                    },
                    "50%": {
                      transform: "translateY(-10px)",
                    },
                  },
                }}
              /> */}

              <Typography
                variant="h5"
                sx={{
                  color: "#8C5A1F",
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "2.2rem",
                }}
              >
                Lluvia de sobres
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {familiaData ? (
        <Box
          sx={{
            bgcolor: "#f3f0e9",
            py: 8,
            px: 2,
            textAlign: "center",
            borderTop: "6px double #e1cfa6",
            borderBottom: "6px double #e1cfa6",
            mb: 10,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Great Vibes', cursive",
              color: "#a29782",
              mb: 2,
              fontSize: { xs: "2.5rem", sm: "3rem" },
            }}
          >
            ¡Bienvenidos familia {familia}!
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Great Vibes', cursive",
              color: "#8C5A1F",
              mb: 2,
              fontSize: { xs: "1.8rem", sm: "2.2rem" },
            }}
          >
            ¡Queremos compartir este día tan especial contigo!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#5c5240",
              mb: 4,
              fontSize: "1.1rem",
            }}
          >
            Por favor selecciona cuántos asistirán:
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              maxWidth: 400,
              mx: "auto",
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="select-asistentes-label">Asistentes</InputLabel>
              <Select
                labelId="select-asistentes-label"
                value={asistentesSeleccionados}
                onChange={handleChange}
                label="Asistentes"
              >
                {Array.from({ length: maxAsistentes }, (_, i) => i + 1).map(
                  (num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>

            {asistentesSeleccionados && (
              <Typography sx={{ color: "#8C5A1F" }}>
                Has confirmado <strong>{asistentesSeleccionados}</strong>{" "}
                asistente(s).
              </Typography>
            )}

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#8C5A1F",
                  color: "#fff",
                  px: 4,
                  fontWeight: "bold",
                  borderRadius: "25px",
                  boxShadow: 3,
                  "&:hover": {
                    bgcolor: "#6d4716",
                  },
                }}
              >
                Confirmar
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#8C5A1F",
                  borderColor: "#8C5A1F",
                  px: 3,
                  fontWeight: "bold",
                  borderRadius: "25px",
                  "&:hover": {
                    bgcolor: "#f1e5d4",
                  },
                }}
              >
                No podré asistir
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography variant="h6" color="error">
          Invitación no válida. Verifica tu enlace.
        </Typography>
      )}
    </main>
  );
}
