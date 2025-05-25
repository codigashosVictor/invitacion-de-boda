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
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontSize: "1.8em" }}
          align="right"
          color="text.secondary"
        >
          4:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#4A5335" }}>
            <ChurchIcon sx={{ color: "#C4BBA9" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px" }}>
          <Typography sx={{ fontSize: "1.8em" }} component="span">
            Ceremonia
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          color="text.secondary"
          sx={{ m: "auto 0", fontSize: "1.8em" }}
        >
          06:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#4A5335" }}>
            <LocalBarIcon sx={{ color: "#C4BBA9" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px" }}>
          <Typography sx={{ fontSize: "1.8em" }} component="span">
            Recepción
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0", fontSize: "1.8em" }}
          align="right"
          color="text.secondary"
        >
          7:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#4A5335" }}>
            <RestaurantIcon sx={{ color: "#C4BBA9" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px" }}>
          <Typography sx={{ fontSize: "1.8em" }} component="span">
            Cena
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          color="text.secondary"
          sx={{ m: "auto 0", fontSize: "1.8em" }}
        >
          08:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "#4A5335" }}>
            <MusicNoteIcon sx={{ color: "#C4BBA9" }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "20px" }}>
          <Typography sx={{ fontSize: "1.8em" }} component="span">
            Vals
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
