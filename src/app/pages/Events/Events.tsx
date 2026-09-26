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
import { glassCard, pageHeaderSx } from "../../../styles/style";
import { getUpcomingEvents, isInRange, type DateRange } from "./eventDates";
import { categoryLabels, categoryStyles, type EventCategory } from "./Events.Data";
import { useLanguage, type Text } from "../../i18n/LanguageContext";

// shortLabel is shown on phones so all four options fit on one line.
const dateRanges: { value: DateRange; label: Text; shortLabel: Text }[] = [
  { value: "all", label: { en: "All", ml: "എല്ലാം" }, shortLabel: { en: "All", ml: "എല്ലാം" } },
  { value: "today", label: { en: "Today", ml: "ഇന്ന്" }, shortLabel: { en: "Today", ml: "ഇന്ന്" } },
  { value: "week", label: { en: "Next 7 Days", ml: "അടുത്ത 7 ദിവസം" }, shortLabel: { en: "7 Days", ml: "7 ദിവസം" } },
  { value: "month", label: { en: "This Month", ml: "ഈ മാസം" }, shortLabel: { en: "Month", ml: "മാസം" } },
];

const text = {
  chip: { en: "What’s On", ml: "പരിപാടികൾ" },
  title: { en: "Upcoming Events", ml: "വരാനിരിക്കുന്ന പരിപാടികൾ" },
  intro: {
    en: "Join us for fellowship, worship, service, and community moments throughout the year.",
    ml: "വർഷം മുഴുവൻ നടക്കുന്ന കൂട്ടായ്മയിലും ആരാധനയിലും സേവനത്തിലും ഞങ്ങളോടൊപ്പം ചേരൂ.",
  },
  filterLabel: { en: "Filter events by date", ml: "തീയതി അനുസരിച്ച് പരിപാടികൾ തിരയുക" },
  category: { en: "Category", ml: "വിഭാഗം" },
  allCategories: { en: "All Categories", ml: "എല്ലാ വിഭാഗങ്ങളും" },
  noMatch: { en: "No events match this filter.", ml: "ഈ തിരഞ്ഞെടുപ്പിന് ചേരുന്ന പരിപാടികളില്ല." },
  none: {
    en: "There are no upcoming events right now. Please check back soon.",
    ml: "ഇപ്പോൾ വരാനിരിക്കുന്ന പരിപാടികളൊന്നുമില്ല. പിന്നീട് വീണ്ടും നോക്കുക.",
  },
  clear: { en: "Clear filters", ml: "ഫിൽട്ടറുകൾ മാറ്റുക" },
} satisfies Record<string, Text>;

export default function EventsPage() {
  const [range, setRange] = useState<DateRange>("all");
  const [category, setCategory] = useState<EventCategory | "all">("all");
  const { lang, tr } = useLanguage();
  const upcoming = getUpcomingEvents(lang);
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
      <Box sx={pageHeaderSx}>
        <ScrollReveal>
          <Chip
            label={tr(text.chip)}
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
            {tr(text.title)}
          </Typography>
          <Typography
            sx={{
              color: "#475569",
              fontSize: "1.15rem",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            {tr(text.intro)}
          </Typography>
        </ScrollReveal>
      </Box>

      <Box sx={{ pt: 0, pb: { xs: 4, md: 6 }, px: 3 }}>
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
                {lang === "ml"
                  ? `${upcoming.length} പരിപാടികളിൽ ${events.length} എണ്ണം`
                  : `Showing ${events.length} of ${upcoming.length} events`}
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
                  aria-label={tr(text.filterLabel)}
                  sx={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    boxShadow: "0 4px 24px rgba(30,64,175,0.07)",
                    borderRadius: "999px",
                    p: 0.5,
                    width: { xs: "100%", sm: "auto" },
                    "& .MuiToggleButton-root": {
                      flex: { xs: 1, sm: "none" },
                      whiteSpace: "nowrap",
                      border: 0,
                      borderRadius: "999px !important",
                      px: { xs: 1, sm: 1.75 },
                      textTransform: "none",
                      fontWeight: 600,
                      color: "#475569",
                    },
                    "& .MuiToggleButton-root.Mui-selected, & .MuiToggleButton-root.Mui-selected:hover":
                      { background: "#7c3aed", color: "#fff" },
                  }}
                >
                  {dateRanges.map(({ value, label, shortLabel }) => (
                    <ToggleButton key={value} value={value} aria-label={tr(label)}>
                      <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                        {tr(label)}
                      </Box>
                      <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
                        {tr(shortLabel)}
                      </Box>
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
                <TextField
                  select
                  size="small"
                  label={tr(text.category)}
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
                  <MenuItem value="all">{tr(text.allCategories)}</MenuItem>
                  {categories.map((c) => (
                    <MenuItem key={c} value={c}>
                      {tr(categoryLabels[c])}
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
                  ? tr(text.noMatch)
                  : tr(text.none)}
              </Typography>
              {isFiltered && (
                <Button
                  sx={{ mt: 1.5 }}
                  onClick={() => {
                    setRange("all");
                    setCategory("all");
                  }}
                >
                  {tr(text.clear)}
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
                            label={tr(categoryLabels[category])}
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
