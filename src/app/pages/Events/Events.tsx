import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { Link } from "react-router";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ScrollReveal } from "../../components/ScrollReveal";
import { glassCard } from "../../../styles/style";
import { events } from "./Events.Data";

export default function EventsPage() {
  return (
    <Box>
      <Box sx={{ textAlign: "center", py: { xs: 8, md: 10 }, px: 3 }}>
        <ScrollReveal>
          <Chip
            label="What’s On"
            sx={{
              background: "rgba(124,58,237,0.08)",
              color: "#7c3aed",
              fontWeight: 600,
              mb: 2,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", md: "4rem" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 2,
              letterSpacing: "-0.03em",
            }}
          >
            Upcoming Events
          </Typography>
          <Typography
            sx={{
              color: "#475569",
              fontSize: "1.15rem",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Join us for fellowship, worship, service, and community moments
            throughout the year.
          </Typography>
        </ScrollReveal>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 }, px: 3 }}>
        <Box sx={{ maxWidth: 1280, mx: "auto" }}>
          <Grid container spacing={3}>
            {events.map(
              (
                {
                  Icon,
                  title,
                  category,
                  description,
                  date,
                  time,
                  location,
                  bg,
                  color,
                },
                i,
              ) => (
                <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <ScrollReveal delay={i * 0.08} style={{ height: "100%" }}>
                    <Card sx={{ ...glassCard, height: "100%" }}>
                      <CardContent
                        sx={{
                          p: 3.5,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 58,
                              height: 58,
                              borderRadius: "16px",
                              background: bg,
                              border: `1px solid ${color}22`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: `0 4px 12px ${color}18`,
                            }}
                          >
                            <Icon sx={{ fontSize: 28, color }} />
                          </Box>
                          <Chip
                            label={category}
                            size="small"
                            sx={{
                              background: `${color}1A`,
                              color,
                              fontWeight: 700,
                              borderRadius: "999px",
                            }}
                          />
                        </Box>

                        <Typography
                          variant="h5"
                          sx={{
                            color: "#0f172a",
                            fontWeight: 700,
                            mb: 1.5,
                            fontSize: "1.1rem",
                          }}
                        >
                          {title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#64748b",
                            fontSize: "0.9rem",
                            lineHeight: 1.75,
                            mb: 2,
                            flex: 1,
                          }}
                        >
                          {description}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <CalendarTodayIcon sx={{ fontSize: 15, color }} />
                            <Typography
                              sx={{ color: "#475569", fontSize: "0.82rem" }}
                            >
                              {date}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <AccessTimeIcon sx={{ fontSize: 15, color }} />
                            <Typography
                              sx={{ color: "#475569", fontSize: "0.82rem" }}
                            >
                              {time}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <LocationOnIcon sx={{ fontSize: 15, color }} />
                            <Typography
                              sx={{ color: "#475569", fontSize: "0.82rem" }}
                            >
                              {location}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </Grid>
              ),
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
