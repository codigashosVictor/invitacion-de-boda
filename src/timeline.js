import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import ChurchIcon from "@mui/icons-material/Church";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Typography } from "@mui/material";

export default function TimelineProgram() {
  return (
    <Timeline position="alternate">
      {[
        {
          time: "4:00 pm",
          label: "Ceremonia",
          icon: (
            <ChurchIcon
              sx={{
                color: "#C4BBA9",
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
              }}
            />
          ),
        },
        {
          time: "06:00 pm",
          label: "Recepción",
          icon: (
            <LocalBarIcon
              sx={{
                color: "#C4BBA9",
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
              }}
            />
          ),
        },
        {
          time: "7:00 pm",
          label: "Cena",
          icon: (
            <RestaurantIcon
              sx={{
                color: "#C4BBA9",
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
              }}
            />
          ),
        },
        {
          time: "08:00 pm",
          label: "Vals",
          icon: (
            <MusicNoteIcon
              sx={{
                color: "#C4BBA9",
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
              }}
            />
          ),
        },
      ].map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0", fontSize: "1.6em", color: "#2E2E2E" }}
            align={index % 2 === 0 ? "right" : "left"}
          >
            {item.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: "#4A5335" }}>{item.icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: 4 }}>
            <Typography
              sx={{
                fontSize: "1.8em",
                fontFamily: "'Playfair Display', serif",
                color: "#4A5335",
              }}
              component="span"
            >
              {item.label}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
