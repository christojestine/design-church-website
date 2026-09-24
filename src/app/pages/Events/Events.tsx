import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ScrollReveal } from "../../components/ScrollReveal";
import { glassCard } from "../../../styles/style";
import { getUpcomingEvents, isInRange, type DateRange } from "./eventDates";
import { categoryStyles, type EventCategory } from "./Events.Data";

const dateRanges: { value: DateRange; label: string }[] = [
  { value: "all", label: "All" },
  { value: "today", label: "Today" },
  { value: "week", label: "Next 7 Days" },
  { value: "month", label: "This Month" },
];

export default function EventsPage() {
  const [range, setRange] = useState<DateRange>("all");
  const [category, setCategory] = useState<EventCategory | "all">("all");
  const upcoming = getUpcomingEvents();
  // Only offer categories that currently have upcoming events.
  const categories = (Object.keys(categoryStyles) as EventCategory[]).filter(
    (c) => upcoming.some((e) => e.category === c),
  );
  const events = upcoming.filter(
    (e) =>
      isInRange(e, range) && (category === "all" || e.category === category),
  );
  const isFiltered = range !== "all" || category !== "all";
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
          {upcoming.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                mb: 4,
              }}
            >
              <Typography sx={{ color: "#64748b", fontSize: "0.9rem" }}>
                Showing {events.length} of {upcoming.length} events
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 1.5,
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <ToggleButtonGroup
                  exclusive
                  size="small"
                  value={range}
                  onChange={(_, value: DateRange | null) => value && setRange(value)}
                  aria-label="Filter events by date"
                  sx={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    boxShadow: "0 4px 24px rgba(30,64,175,0.07)",
                    borderRadius: "999px",
                    p: 0.5,
                    flexWrap: "wrap",
                    "& .MuiToggleButton-root": {
                      border: 0,
                      borderRadius: "999px !important",
                      px: 1.75,
                      textTransform: "none",
                      fontWeight: 600,
                      color: "#475569",
                    },
                    "& .MuiToggleButton-root.Mui-selected, & .MuiToggleButton-root.Mui-selected:hover":
                      { background: "#7c3aed", color: "#fff" },
                  }}
                >
                  {dateRanges.map(({ value, label }) => (
                    <ToggleButton key={value} value={value}>
                      {label}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
                <TextField
                  select
                  size="small"
                  label="Category"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value as EventCategory | "all")
                  }
                  sx={{
                    minWidth: 170,
                    flex: { xs: 1, sm: "none" },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.7)",
                    },
                  }}
                >
                  <MenuItem value="all">All Categories</MenuItem>
                  {categories.map((c) => (
                    <MenuItem key={c} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          )}
          {events.length === 0 && (
            <Box sx={{ textAlign: "center", color: "#64748b" }}>
              <Typography>
                {isFiltered
                  ? "No events match this filter."
                  : "There are no upcoming events right now. Please check back soon."}
              </Typography>
              {isFiltered && (
                <Button
                  sx={{ mt: 1.5 }}
                  onClick={() => {
                    setRange("all");
                    setCategory("all");
                  }}
                >
                  Clear filters
                </Button>
              )}
            </Box>
          )}
          <Grid container spacing={3}>
            {events.map(
              (
                {
                  Icon,
                  title,
                  category,
                  description,
                  date,
                  displayDate,
                  time,
                  location,
                  bg,
                  color,
                },
                i,
              ) => (
                <Grid key={title + date} size={{ xs: 12, sm: 6, md: 4 }}>
                  <ScrollReveal delay={Math.min(i, 5) * 0.08} style={{ height: "100%" }}>
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
                              {displayDate}
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
