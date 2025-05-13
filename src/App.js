import "./index.css";
import { keyframes } from "@mui/system";
import TimeLineProgram from "../src/timeline";
import Carousel from "./Carousel-img";
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChurchIcon from "@mui/icons-material/Church";
import { Check, Favorite, LocalBar, LocationOn } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Countdown from "react-countdown";
import backgroundHeaderImg_5 from "../src/img/header_5.jpg";
import background1 from "../src/img/invitacion_fondo_1.jpeg";
import background2 from "../src/img/invitacion_fondo_2.jpeg";
import background3 from "../src/img/invitacion_fondo_3.jpeg";
import background4 from "../src/img/timeline_background.jpeg";
import bodyBackground3 from "../src/img/bodyBackground3.jpg";
import bodyBackground5 from "../src/img/53910f5ea507e24c49479e91a5022f34.png";
import background_1 from "../src/img/background_1.jpeg";
import background_vestimenta from "../src/img/image_vestimenta.jpeg";
import background_places from "../src/img/background_places.jpeg";
import background_prgram from "../src/img/background_program.jpeg";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { styled } from "@mui/material/styles";
import { es } from "date-fns/locale";

// import fotos pareja
import vm_list_photo_1 from "../src/img/fotos_pareja/V+M pedida-002.jpg";
import vm_list_photo_2 from "../src/img/fotos_pareja/V+M pedida-021.jpg";
import vm_list_photo_3 from "../src/img/fotos_pareja/V+M pedida-027.jpg";
import vm_list_photo_4 from "../src/img/fotos_pareja/V+M pedida-031.jpg";
import vm_list_photo_5 from "../src/img/fotos_pareja/V+M pedida-041.jpg";
import vm_list_photo_6 from "../src/img/fotos_pareja/V+M pedida-069.jpg";
import vm_list_photo_7 from "../src/img/fotos_pareja/V+M pedida-075.jpg";
import vm_list_photo_8 from "../src/img/fotos_pareja/V+M pedida-053.jpg";

const weddingDate = new Date("2025-09-06T18:00:00").getTime();

const itemData = [
  {
    img: vm_list_photo_1,
    title: "Bed",
  },
  {
    img: vm_list_photo_2,
    title: "Blinds",
  },
  {
    img: vm_list_photo_3,
    title: "Chairs",
  },
  {
    img: vm_list_photo_4,
    title: "Laptop",
  },
  {
    img: vm_list_photo_5,
    title: "Doors",
  },
  {
    img: vm_list_photo_6,
    title: "Coffee",
  },

  {
    img: vm_list_photo_7,
    title: "Coffee",
  },
];

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

const AnimatedButton = styled(Button)({
  animation: `${blink} 1.5s infinite`,
  fontSize: "2rem",
  color: "white", // color verde, puedes cambiarlo
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}); // main colors #C38C3F, #233e30, #F6D78B, #a29782, #8C5A1F, #BF8A4C

// App.js
export default function App() {
  const selectedDate = new Date(2025, 8, 6);
  const colors = ["#4A5335", "#6B704B", "#A09788", "#C4BBA9"]; // Example colors

  return (
    <main>
      {/* Header Main */}
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
        sx={{
          backgroundImage: `url(${backgroundHeaderImg_5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
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
          <Typography
            variant="h1"
            component="h1"
            textAlign="center"
            sx={{
              color: "#BF8A4C",
              fontFamily: "'Dancing Script', cursive",
              fontWeight: "bold",
              fontSize: {
                xs: "4rem", // mobile (extra small)
                sm: "5.5rem", // tablet small
                md: "5.5rem", // tablet/desktop medium
                lg: "5.5rem", // desktop large
              },
            }}
            paddingTop={1}
          >
            Nos Casamos
          </Typography>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Zapfino', cursive",
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
              sx={{ fontFamily: "'Zapfino', cursive", color: "#fff", pt: 1 }}
            >
              Victor
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "1.5rem",
                color: "#BF8A4C",
                mt: 1,
              }}
            >
              06.09.2025
            </Typography>
          </Box>
          <AnimatedButton>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "2em",
                color: "#fff",
              }}
            />
          </AnimatedButton>
        </Box>
      </Box>

      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
        sx={{
          backgroundImage: `url(${background_1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
          <Typography
            variant="h1"
            component="h1"
            paddingTop={20}
            sx={{
              fontFamily: "'Great Vibes', cursive",
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
          >
            ¡Estas Invitado!
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              // fontFamily: "'Playfair Display', cursive",
              paddingTop: "1rem",
            }}
          >
            Nos encantaria que seas parte de este momento tan especial para
            nosotros.
          </Typography>

          <Grid
            container
            justifyContent="center"
            paddingTop={6}
            paddingBottom={5}
          >
            <Card
              sx={{
                bgcolor: "#b6c0b0",
                maxWidth: 500,
                borderRadius: "15px",
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
          <Grid container spacing={0} justifyContent="center">
            <Typography
              variant="h4"
              textAlign="center"
              sx={{
                fontFamily: "'Zapfino'",
                color: "#a29782",
                paddingTop: "2.5em",
              }}
            >
              Save The Date
            </Typography>
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
          <Grid size={12} paddingBottom={30}>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{
                fontFamily: "'Zapfino'",
                color: "#a29782",
              }}
            >
              Faltan...
            </Typography>
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
            backgroundImage: `url(${background_places})`,
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
            backgroundImage: `url(${background_places})`,
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
                    Calle José Manuel Velasco 11, Nueva Tijuana, 22435 Tijuana,
                    B.C.
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

            {/* Ceremonia */}
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
              >
                Vestimenta
              </Typography>
              <Grid container size={12} sx={{ justifyContent: "center" }}>
                <img src="../img/dress-suit.png" width={170}></img>
              </Grid>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  fontFamily: "'Zapfino'",
                  color: "#4A5335",
                  fontWeight: "bold",
                }}
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

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
        sx={{
          backgroundImage: `url(${background_1})`,
          backgroundPosition: "center",
          backgroundSize: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container>
          <Box
            p={15}
            textAlign="center"
            justifyContent="center"
            alignItems="center"
          >
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
            >
              Programa
            </Typography>
            <TimeLineProgram />
          </Box>
        </Grid>
      </Box>

      <Container>
        <Grid spacing={0} paddingY={4}>
          <Grid>
            <Box justifyContent="center" display="flex" textAlign="center">
              <Card
                sx={{
                  bgcolor: "#232e29",
                  maxWidth: 350,
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    color="#F6D78B"
                    sx={{ fontFamily: "monospace" }}
                  >
                    Tu presencia es nuestro mejor regalo, pero si deseas
                    obsequiarnos algo puedes hacerlo de las siguientes formas:
                  </Typography>
                  <MailOutlineIcon
                    sx={{ fontSize: "3.5em", color: "#8C5A1F" }}
                  ></MailOutlineIcon>
                  <Typography variant="h5" color="#F6D78B">
                    Lluvia de sobres
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
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
}
