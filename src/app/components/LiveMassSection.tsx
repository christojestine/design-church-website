import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const BLUE = "#2563eb";
const BLUE_LIGHT = "#3b82f6";
const DARK = "#0f172a";

export default function LiveMassSection() {
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

  return (
    <Box component="section" ref={ref} sx={{ position: "relative", py: 16, overflow: "hidden", bgcolor: "transparent" }}>
      <motion.div
        style={{ position: "absolute", bottom: "-50%", right: "-25%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: 1100, mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography sx={{ color: BLUE, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", mb: 1.5 }}>
              Join Us Anytime
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: DARK, mb: 2, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Watch Live Holy{" "}
              <Box component="span" sx={{ background: `linear-gradient(to right, ${BLUE}, ${BLUE_LIGHT})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Mass
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Video Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: "relative" }}
        >
          <Box
            sx={{
              borderRadius: 4, overflow: "hidden",
              border: "1px solid rgba(37,99,235,0.25)",
              boxShadow: "0 16px 48px rgba(37,99,235,0.12)",
              position: "relative",
              aspectRatio: "16/9",
              bgcolor: "rgba(239,246,255,0.8)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {/* Background decoration */}
            <Box sx={{ position: "absolute", inset: 0, opacity: 0.3 }}>
              <svg width="100%" height="100%" viewBox="0 0 1200 800">
                <rect fill="#eff6ff" width="1200" height="800" />
                <circle cx="600" cy="400" r="300" fill="rgba(37,99,235,0.1)" />
              </svg>
            </Box>

            {/* Play button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={{ position: "relative", zIndex: 20 }}>
              <Box
                sx={{
                  width: 96, height: 96, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})`,
                  boxShadow: "0 8px 32px rgba(37,99,235,0.45)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": { boxShadow: "0 12px 48px rgba(37,99,235,0.6)" },
                  transition: "all 0.3s",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `2px solid ${BLUE}` }}
                />
                <PlayArrowIcon sx={{ fontSize: 44, color: "#fff", ml: 0.5 }} />
              </Box>
            </motion.div>
          </Box>

          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ position: "absolute", bottom: -24, right: -24, width: 192, height: 192, background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(30px)", zIndex: -1, pointerEvents: "none" }}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <Typography sx={{ color: "rgba(15,23,42,0.7)", fontSize: "1.05rem", mb: 3 }}>
            Join our live Holy Mass broadcast every Sunday at 7:00 AM, 9:00 AM, and 6:00 PM
          </Typography>
          <Button
            variant="contained"
            startIcon={<PlayArrowIcon />}
            sx={{
              borderRadius: 50, px: 4, py: 1.5, fontWeight: 700, fontSize: "0.95rem",
              background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})`,
              boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
              "&:hover": { background: `linear-gradient(135deg, #1d4ed8, ${BLUE})`, boxShadow: "0 6px 28px rgba(37,99,235,0.55)" },
            }}
          >
            Watch Now
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
