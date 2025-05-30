import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { es } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { Favorite } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import ScrollReveal from "./ScrollReveal";
import AnimatedImage from "./img-savethedate";
import CountdownTimer from "./CountdownTimer";
import SeccionInvitacion from "./MensajeInicial";
import bible_background from "./img/bible_background.jpg";

const cursiveTitle = {
  fontFamily: "'Great Vibes', cursive",
  color: "#a29782",
  textAlign: "center",
};

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
const CustomPickerDay = React.memo(({ day, selectedDay, ...other }) => {
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
          color: "transparent !important",
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
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.5rem", // menos exagerado
                color: "#213628",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
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
});

const greenColor = "#213628";

export default function SeccionCentral({ selectedDate }) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <ScrollReveal>
          <SeccionInvitacion />
        </ScrollReveal>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={4}
          px={2}
        >
          <Card
            sx={{
              position: "relative",
              maxWidth: 600,
              p: 4,
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: 8,
              textAlign: "center",
              backgroundImage: `url(${bible_background})`, // tu imagen suave
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // Capa oscura semitransparente sobre la imagen
              "&::before": {
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.7)", // blanco semitransparente
                zIndex: 1,
              },
            }}
          >
            <CardContent sx={{ position: "relative", zIndex: 2 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Great Vibes', cursive",
                  color: greenColor,
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2.2rem",
                    md: "2.8rem",
                  },
                }}
              >
                “Por eso el hombre deja a su padre y a su madre, y se une a su
                mujer, y los dos se funden en un solo ser.”
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  mt: 3,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "#8C5A1F",
                }}
              >
                Génesis 2:24
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box pt={5}>
          <AnimatedImage />
        </Box>

        <Grid container spacing={0} justifyContent="center">
          <ScrollReveal duration={1} ease="easeOut" direction="down">
            <Typography variant="h3" sx={{ ...cursiveTitle, pt: 5 }}>
              Save The Date
            </Typography>
          </ScrollReveal>

          <Grid columns={12}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={es}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <StaticDatePicker
                  displayStaticWrapperAs="desktop"
                  value={selectedDate}
                  onChange={() => {}}
                  slots={{
                    day: (props) => (
                      <CustomPickerDay {...props} selectedDay={selectedDate} />
                    ),
                  }}
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    p: 2,
                    bgcolor: "#f8f8f5",
                    "& .MuiTypography-root": {
                      fontSize: "1rem",
                      color: greenColor,
                    },
                  }}
                  slotProps={{
                    calendarHeader: {
                      sx: {
                        "& .MuiPickersCalendarHeader-label": {
                          fontSize: "1.5rem",
                          fontFamily: "'Playfair Display', sans-serif",
                          color: greenColor,
                        },
                        "& .MuiPickersArrowSwitcher-root": {
                          display: "none",
                        },
                        "& .MuiButtonBase-root": {
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

        <Grid columnSpacing={12} pt={5}>
          <ScrollReveal direction="up">
            <Typography variant="h3" sx={{ ...cursiveTitle }}>
              Faltan...
            </Typography>
          </ScrollReveal>
          <CountdownTimer />
        </Grid>
      </Box>
    </Box>
  );
}
