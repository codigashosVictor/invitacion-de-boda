import "./css/Counter.css";
import Countdown from "react-countdown";
import { Typography, Grid, Card, CardContent } from "@mui/material";
const weddingDate = new Date("2025-09-06T18:00:00").getTime();

const CountdownTimer = () => {
  return (
    <Countdown
      date={weddingDate}
      renderer={({ days, hours, minutes, seconds }) => (
        <div>
          <Grid container spacing={2} justifyContent="center">
            {[
              { label: "Días", value: days },
              { label: "Horas", value: hours },
              { label: "Minutos", value: minutes },
              { label: "Segundos", value: seconds },
            ].map((item, index) => (
              <Grid size={{ xs: 3, sm: 3, md: 3, lg: 3 }} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#f7f4ef",
                    borderRadius: 3,
                    minHeight: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardContent
                    sx={{
                      textAlign: "center",
                      padding: "16px !important",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Great Vibes', cursive",
                        color: "#213628", // verde olivo oscuro\
                        fontSize: {
                          xs: "2.5rem",
                          sm: "1.4rem",
                          md: "1.8rem",
                        },
                      }}
                    >
                      {String(item.value).padStart(2, "0")}
                    </Typography>
                  </CardContent>
                </Card>

                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: {
                      xs: "1rem",
                      sm: "1.4rem",
                      md: "1.8rem",
                    },
                    textAlign: "center",
                    color: "#a29782", // dorado suave
                    fontStyle: "italic",
                    mt: 1,
                  }}
                >
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    ></Countdown>
  );
};

export default CountdownTimer;
