import "./index.css";
import { keyframes } from "@mui/system";
import TimeLineProgram from "../src/timeline";
import Carousel from "./Carousel-img";
import HeroSection from "./Hero";
import AnimatedImage from "./img-savethedate";
import ScrollReveal from "./ScrollReveal";
import {
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Stack,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

import ChurchIcon from "@mui/icons-material/Church";
import { Check, Favorite, LocalBar, LocationOn } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Countdown from "react-countdown";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { styled } from "@mui/material/styles";
import { es } from "date-fns/locale";

// images
import img_portada from "../src/img/header_5.jpg";
import img_timeline from "../src/img/background_1.jpeg";
import img_places from "../src/img/background_places.jpeg";

const weddingDate = new Date("2025-09-06T18:00:00").getTime();

// icon heart
const PinkHeart = styled(Favorite)({
  color: "#b6c0b0",
  fontSize: "3.5rem",
});

// style day selected
const DayWrapper = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// custom selected day
const CustomPickerDay = (props) => {
  const { day, selectedDay, ...other } = props;
  const isSelectedDay =
    selectedDay &&
    day.getDate() === selectedDay.getDate() &&
    day.getMonth() === selectedDay.getMonth() &&
    day.getFullYear() === selectedDay.getFullYear();

  return (
    <PickersDay
      {...other}
      day={day}
      sx={{
        "&.Mui-selected": {
          backgroundColor: "transparent !important",
          color: "transparent",
        },
      }}
    >
      <DayWrapper>
        {isSelectedDay ? (
          <>
            <PinkHeart />
            <Typography
              variant="caption"
              sx={{
                fontFamily: "'Zapfino', cursive",
                color: "#213628 !important",
                position: "absolute",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {day.getDate()}
            </Typography>
          </>
        ) : (
          day.getDate()
        )}
      </DayWrapper>
    </PickersDay>
  );
};

const blink = keyframes`
  0%, 100% { opacity: 1; transform: translateY(0); }
  50% { opacity: 0.5; transform: translateY(5px); }
`;
// main colors #C38C3F, #233e30, #F6D78B, #a29782, #8C5A1F, #BF8A4C
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
// App.js
export default function App() {
  const selectedDate = new Date(2025, 8, 6);
  const colors = ["#4A5335", "#6B704B", "#A09788", "#C4BBA9"]; // Example colors

  return (
    <main>
      {/* Header Main */}
      <div>
        <HeroSection
          img_portada={img_portada}
          AnimatedButton={AnimatedButton}
        />
        {/* Puedes seguir con más secciones aquí */}
      </div>

      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
        // sx={{
        //   backgroundImage: `url(${background_1})`,
        //   backgroundSize: "100%",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <Box
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ScrollReveal>
            <SeccionInvitacion />
          </ScrollReveal>

          <Grid container justifyContent="center">
            <Card
              sx={{
                bgcolor: "#b6c0b0",
                maxWidth: 500,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  component="div"
                  sx={{
                    // fontFamily: "'Dancing Script', cursive",
                    fontStyle: "italic",
                    color: "#213628",
                    fontSize: {
                      xs: "1.5rem", // mobile (extra small)
                      sm: "1.5rem", // tablet small
                      md: "3.5rem", // tablet/desktop medium
                      lg: "4.5rem", // desktop large
                    },
                  }}
                >
                  "Por eso el hombre deja a su padre y a su madre, y se une a su
                  mujer, y los dos se funden en un solo ser."{" "}
                  <b>Génesis 2:24</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Box pt={5}>
            <AnimatedImage />
          </Box>

          <Grid container spacing={0} justifyContent="center">
            <ScrollReveal duration={1} ease="easeOut" direction="down">
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  fontFamily: "'Zapfino'",
                  color: "#a29782",
                  paddingTop: "2.5em",
                }}
                data-aos="fade-right"
              >
                Save The Date
              </Typography>
            </ScrollReveal>
            <Grid size={12}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={es}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    value={selectedDate}
                    onChange={() => {}}
                    slots={{
                      day: (props) => (
                        <CustomPickerDay
                          {...props}
                          selectedDay={selectedDate}
                        />
                      ),
                    }}
                    sx={{
                      // backgroundColor: "transparent",
                      "& .MuiTypography-root": {
                        fontSize: "1rem",
                        color: "#213628",
                        fontStyle: "bold",
                      },
                    }}
                    slotProps={{
                      calendarHeader: {
                        sx: {
                          "& .MuiPickersCalendarHeader-label": {
                            fontSize: "1.5rem", // Tamaño de letra
                            fontFamily: "'Playfair Display', sans-serif",
                            color: "#213628", // Color
                          },
                          // Ocultar flechas
                          "& .MuiPickersArrowSwitcher-root ": {
                            display: "none",
                          },
                          "& .MuiButtonBase-root ": {
                            display: "none",
                          },
                        },
                      },
                    }}
                  />
                </Box>
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid size={12} pt={5} paddingBottom={5}>
            <ScrollReveal direction="up">
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  fontFamily: "'Zapfino'",
                  color: "#a29782",
                }}
                data-aos="fade-left"
              >
                Faltan...
              </Typography>
            </ScrollReveal>
            <Countdown
              date={weddingDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <div>
                  <Grid
                    container
                    columns={4}
                    paddingX={1}
                    paddingTop={1}
                    spacing={{ xs: 1, sm: 3, md: 3, lg: 4 }}
                  >
                    <Grid size={1}>
                      <Card
                        variant="outlined"
                        className="card-counter"
                        sx={{
                          bgcolor: "#b6c0b0",
                          borderRadius: "15px",
                        }}
                      >
                        <Box className="counter-number">
                          <CardContent sx={{ flex: "1", maxHeight: "0px" }}>
                            <Typography
                              component="div"
                              variant="h4"
                              sx={{
                                fontFamily: "'Zapfino', cursive",
                                fontSize: {
                                  xs: "1.5rem", // mobile (extra small)
                                  sm: "2rem", // tablet small
                                  md: "5.5rem", // tablet/desktop medium
                                  lg: "6.5rem", // desktop large
                                },
                                color: "#213628",
                              }}
                            >
                              {String(days).padStart(2, "0")}
                            </Typography>
                          </CardContent>
                        </Box>
                      </Card>
                      <Typography
                        sx={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: {
                            xs: "1.2rem", // mobile (extra small)
                            sm: "2rem", // tablet small
                            md: "5.5rem", // tablet/desktop medium
                            lg: "6.5rem", // desktop large
                          },
                          color: "#a29782",
                          fontStyle: "italic",
                          textAlign: "center",
                        }}
                      >
                        Dias
                      </Typography>
                    </Grid>

                    <Grid size={1}>
                      <Card
                        variant="outlined"
                        className="card-counter"
                        sx={{
                          bgcolor: "#b6c0b0",
                          borderRadius: "15px",
                        }}
                      >
                        <Box className="counter-number">
                          <CardContent sx={{ flex: "1", maxHeight: "10px " }}>
                            <Typography
                              component="div"
                              variant="h4"
                              sx={{
                                fontFamily: "'Zapfino', sans-serif",
                                fontSize: {
                                  xs: "1.5rem", // mobile (extra small)
                                  sm: "2rem", // tablet small
                                  md: "5.5rem", // tablet/desktop medium
                                  lg: "6.5rem", // desktop large
                                },
                                color: "#213628",
                              }}
                            >
                              {String(hours).padStart(2, "0")}
                            </Typography>
                          </CardContent>
                        </Box>
                      </Card>
                      <Typography
                        sx={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: {
                            xs: "1.2rem", // mobile (extra small)
                            sm: "2rem", // tablet small
                            md: "5.5rem", // tablet/desktop medium
                            lg: "6.5rem", // desktop large
                          },
                          color: "#a29782",
                          fontStyle: "italic",
                          textAlign: "center",
                        }}
                      >
                        Horas
                      </Typography>
                    </Grid>

                    <Grid size={1}>
                      <Card
                        variant="outlined"
                        className="card-counter"
                        sx={{
                          bgcolor: "#b6c0b0",
                          borderRadius: "15px",
                        }}
                      >
                        <Box className="counter-number">
                          <CardContent sx={{ flex: "1", maxHeight: "10px" }}>
                            <Typography
                              component="div"
                              variant="h4"
                              sx={{
                                fontFamily: "'Zapfino', sans-serif",
                                fontSize: {
                                  xs: "1.5rem", // mobile (extra small)
                                  sm: "2rem", // tablet small
                                  md: "5.5rem", // tablet/desktop medium
                                  lg: "6.5rem", // desktop large
                                },
                                color: "#213628",
                              }}
                            >
                              {String(minutes).padStart(2, "0")}
                            </Typography>
                          </CardContent>
                        </Box>
                      </Card>
                      <Typography
                        sx={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: {
                            xs: "1.2rem", // mobile (extra small)
                            sm: "2rem", // tablet small
                            md: "5.5rem", // tablet/desktop medium
                            lg: "6.5rem", // desktop large
                          },
                          color: "#a29782",
                          fontStyle: "italic",
                          textAlign: "center",
                        }}
                      >
                        Minutos
                      </Typography>
                    </Grid>

                    <Grid size={1}>
                      <Card
                        variant="outlined"
                        className="card-counter"
                        sx={{
                          bgcolor: "#b6c0b0",
                          borderRadius: "15px",
                        }}
                      >
                        <Box className="counter-number">
                          <CardContent sx={{ flex: "1", maxHeight: "10px" }}>
                            <Typography
                              component="div"
                              variant="h4"
                              sx={{
                                fontFamily: "'Zapfino', sans-serif",
                                fontSize: {
                                  xs: "1.5rem", // mobile (extra small)
                                  sm: "2rem", // tablet small
                                  md: "5.5rem", // tablet/desktop medium
                                  lg: "6.5rem", // desktop large
                                },
                                color: "#213628",
                              }}
                            >
                              {String(seconds).padStart(2, "0")}
                            </Typography>
                          </CardContent>
                        </Box>
                      </Card>
                      <Typography
                        sx={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: {
                            xs: "1.2rem", // mobile (extra small)
                            sm: "2rem", // tablet small
                            md: "5.5rem", // tablet/desktop medium
                            lg: "6.5rem", // desktop large
                          },
                          color: "#a29782",
                          fontStyle: "italic",
                          textAlign: "center",
                        }}
                      >
                        Segundos
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              )}
            ></Countdown>
          </Grid>
        </Box>
      </Box>

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
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'Zapfino'",
                    color: "#e1cfa6",
                    fontWeight: "bold",
                  }}
                >
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
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'Zapfino'",
                    color: "#e1cfa6",
                    fontWeight: "bold",
                  }}
                >
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
      <Box
        bgcolor="#9fa99a"
        justifyContent="center"
        alignItems="center"
        display="flex"
        textAlign="center"
      >
        {/* Dress Code */}
        <Grid container spacing={0} p={2}>
          <Grid sx={{ padding: "20px", border: "5px solid #e1cfa6" }}>
            <Box pt={5}>
              <Typography
                variant="h4"
                sx={{
                  etterSpacing: ".4rem",
                  fontSize: {
                    xs: "2.5rem", // mobile (extra small)
                    sm: "3.5rem", // tablet small
                    md: "5.5rem", // tablet/desktop medium
                    lg: "6.5rem", // desktop large
                  },
                  fontFamily: "'Zapfino'",
                  color: "#e1cfa6",
                  fontWeight: "bold",
                }}
                data-aos="fade-right"
              >
                Vestimenta
              </Typography>
              <Grid container size={12} sx={{ justifyContent: "center" }}>
                <img src="" alt="test" width={170}></img>
              </Grid>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  fontFamily: "'Zapfino'",
                  color: "#4A5335",
                  fontWeight: "bold",
                }}
                data-aos="fade-left"
              >
                Formal
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                marginTop={3}
              >
                {colors.map((color, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%", // Circle shape
                      backgroundColor: color,
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Timeline */}
      <Box
        mb={0}
        sx={{
          backgroundImage: `url(${img_timeline})`,
        }}
      >
        <Box pt={35} textAlign="center">
          <Typography
            sx={{
              letterSpacing: ".4rem",
              fontSize: {
                xs: "2.5rem", // mobile (extra small)
                sm: "3.5rem", // tablet small
                md: "5.5rem", // tablet/desktop medium
                lg: "6.5rem", // desktop large
              },
              fontFamily: "'Zapfino'",
              color: "#e1cfa6",
              fontWeight: "bold",
            }}
            data-aos="fade-up"
          >
            Programa
          </Typography>
        </Box>
        <TimeLineProgram />
      </Box>

      {/* Regalo */}
      <Box
        mt={-2}
        bgcolor="#9fa99a"
        justifyContent="center"
        alignItems="center"
        display="flex"
        textAlign="center"
      >
        {/* Dress Code */}
        <Grid container spacing={0} p={2}>
          <Grid sx={{ padding: "20px", border: "5px solid #e1cfa6" }}>
            <Box>
              <Grid container size={12} sx={{ justifyContent: "center" }}>
                <img src="" alt="img" width={170}></img>
              </Grid>
              <Typography variant="h5" sx={{}}>
                Tu presencia es nuestro mejor regalo, pero si deseas
                obsequiarnos algo puedes hacerlo de las siguientes formas:
              </Typography>
              <MailOutlineIcon
                sx={{ fontSize: "3.5em", color: "#8C5A1F" }}
              ></MailOutlineIcon>
              <Typography variant="h5" color="#F6D78B">
                Lluvia de sobres
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Container>
        <Grid spacing={0} paddingY={4}>
          <Grid size={12} height={350}>
            <Grid container>
              <Grid size={12}>
                <Typography
                  variant="h1"
                  component="h1"
                  paddingTop={4}
                  textAlign="center"
                  sx={{
                    letterSpacing: ".4rem",
                    fontSize: {
                      xs: "2.5rem", // mobile (extra small)
                      sm: "4.5rem", // tablet small
                      md: "5.5rem", // tablet/desktop medium
                      lg: "6.5rem", // desktop large
                    },
                    background:
                      "linear-gradient(90deg, #213628 0%, #C38C3F 50%, #213628 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  data-aos="fade-down"
                >
                  Confirma tu asistencia!
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography textAlign="center">
                  Los mejores momentos de la vida merecen ser compartidos
                </Typography>
              </Grid>
              <Grid
                size={12}
                justifyContent="center"
                display="flex"
                padding={2}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "#213628",
                    background:
                      "linear-gradient(90deg, #8C5A1F 0%, #F6D78B 50%, #8C5A1F 100%)",
                    borderRadius: "50px", // fully rounded
                    padding: "10px 20px",
                  }}
                  endIcon={<Check></Check>}
                >
                  Confirmar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );

  function SeccionInvitacion() {
    return (
      <Box px={2} py={10} textAlign="center">
        <ScrollReveal>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
              },
              background: "linear-gradient(90deg, #213628, #C38C3F, #213628)",
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
}
