import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const BLUE = "#2563eb";
const BLUE_LIGHT = "#3b82f6";
const DARK = "#0f172a";

export default function TestimonialsSection() {
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

  const testimonials = [
    { name: "Maria Antonia", role: "Parishioner", content: "Holy Family Church has been my spiritual home for over 20 years. The warmth and fellowship here is unmatched. Every visit fills my heart with peace and renewed faith.", rating: 5 },
    { name: "John Sebastian", role: "Community Member", content: "The pastoral care and commitment to service at this parish is truly inspiring. I've seen countless lives touched and transformed through the work of the church.", rating: 5 },
    { name: "Sarah Mathew", role: "Youth Group Leader", content: "The youth programs here are exceptional. Our young members are growing in faith, developing strong moral values, and becoming wonderful leaders in our community.", rating: 5 },
    { name: "David Joseph", role: "Volunteer", content: "Serving at Holy Family Church has given me a profound sense of purpose. The community's dedication to helping others is truly a reflection of Christ's love.", rating: 5 },
  ];

  return (
    <Box component="section" ref={ref} sx={{ position: "relative", py: 16, overflow: "hidden", bgcolor: "transparent" }}>
      <motion.div
        style={{ position: "absolute", top: "-50%", right: 0, width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: 1280, mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography sx={{ color: BLUE, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", mb: 1.5 }}>
              Community Voices
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: DARK, mb: 2, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Parishioner{" "}
              <Box component="span" sx={{ background: `linear-gradient(to right, ${BLUE}, ${BLUE_LIGHT})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Testimonials
              </Box>
            </Typography>
            <Typography sx={{ color: "rgba(15,23,42,0.7)", fontSize: "1.1rem", maxWidth: 600, mx: "auto" }}>
              Hear from members of our faith community
            </Typography>
          </Box>
        </motion.div>

        {/* Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Box
                sx={{
                  height: "100%", p: 4, borderRadius: 3,
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(37,99,235,0.25)",
                  bgcolor: "rgba(255,255,255,0.65)",
                  boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
                  transition: "all 0.3s",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.9)", boxShadow: "0 12px 40px rgba(37,99,235,0.18)" },
                }}
              >
                <Typography sx={{ fontSize: "3.5rem", color: "rgba(37,99,235,0.2)", fontWeight: 700, lineHeight: 1, mb: 2 }}>
                  &ldquo;
                </Typography>
                <Typography sx={{ fontSize: "1.05rem", color: "rgba(15,23,42,0.8)", mb: 3, lineHeight: 1.8 }}>
                  {t.content}
                </Typography>
                <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: idx * 0.1 + 0.3 + i * 0.05 }}>
                      <StarIcon sx={{ fontSize: 20, color: BLUE }} />
                    </motion.div>
                  ))}
                </Stack>
                <Box sx={{ pt: 2, borderTop: "1px solid rgba(37,99,235,0.15)" }}>
                  <Typography sx={{ fontWeight: 700, color: DARK }}>{t.name}</Typography>
                  <Typography sx={{ fontSize: "0.875rem", color: BLUE }}>{t.role}</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
