import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Chip, Stack, Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const BLUE = "#2563eb";
const DARK = "#0f172a";

export default function EventsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const events = [
    { title: "Sunday Holy Mass", date: "June 8, 2026", time: "7:00 AM - 9:00 AM", location: "Main Church", type: "Weekly" },
    { title: "Novena to Our Lady", date: "June 12-20, 2026", time: "6:00 PM", location: "Grotto", type: "Special" },
    { title: "Youth Prayer Meeting", date: "June 15, 2026", time: "6:00 PM", location: "Parish Hall", type: "Monthly" },
    { title: "Bible Study", date: "June 18, 2026", time: "7:00 PM", location: "Community Room", type: "Weekly" },
  ];

  return (
    <Box component="section" ref={ref} sx={{ position: "relative", py: 16, overflow: "hidden", bgcolor: "transparent" }}>
      <motion.div
        style={{ position: "absolute", top: "50%", left: "33%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: 1280, mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography sx={{ color: BLUE, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", mb: 1.5 }}>
              Community Calendar
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: DARK, mb: 2, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Upcoming{" "}
              <Box component="span" sx={{ background: "linear-gradient(to right, #2563eb, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Events
              </Box>
            </Typography>
            <Typography sx={{ color: "rgba(15,23,42,0.7)", fontSize: "1.1rem", maxWidth: 600, mx: "auto" }}>
              Join us for meaningful spiritual experiences and community fellowship
            </Typography>
          </Box>
        </motion.div>

        {/* Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 3 }}>
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Box
                sx={{
                  height: "100%", p: 3, borderRadius: 3,
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(37,99,235,0.25)",
                  bgcolor: "rgba(255,255,255,0.65)",
                  boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
                  transition: "all 0.3s",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.9)", boxShadow: "0 12px 40px rgba(37,99,235,0.18)" },
                }}
              >
                <Chip
                  label={event.type}
                  size="small"
                  sx={{ mb: 2, bgcolor: "rgba(37,99,235,0.1)", color: BLUE, fontWeight: 700, fontSize: "0.7rem" }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700, color: DARK, mb: 2, fontSize: "1rem" }}>
                  {event.title}
                </Typography>
                <Stack spacing={1.25}>
                  {[
                    { Icon: CalendarTodayIcon, text: event.date },
                    { Icon: AccessTimeIcon, text: event.time },
                    { Icon: LocationOnIcon, text: event.location },
                  ].map(({ Icon, text }) => (
                    <Stack key={text} direction="row" alignItems="center" spacing={1}>
                      <Icon sx={{ fontSize: 15, color: BLUE, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.85rem", color: "rgba(15,23,42,0.7)" }}>{text}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: 50, px: 4, py: 1.5, fontWeight: 700, fontSize: "0.95rem",
              borderColor: "rgba(37,99,235,0.4)", color: BLUE,
              bgcolor: "rgba(239,246,255,0.6)",
              "&:hover": { bgcolor: "rgba(239,246,255,0.9)", borderColor: BLUE, boxShadow: "0 4px 20px rgba(37,99,235,0.25)" },
            }}
          >
            View All Events
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
