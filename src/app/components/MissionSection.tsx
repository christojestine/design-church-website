import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const BLUE = "#2563eb";
const BLUE_LIGHT = "#3b82f6";
const DARK = "#0f172a";

export default function MissionSection() {
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
      {/* Background blobs */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <motion.div
          style={{ position: "absolute", top: "-25%", left: "25%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3], x: [0, 40, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          style={{ position: "absolute", bottom: 0, right: "-25%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2], x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </Box>

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: 1280, mx: "auto", px: { xs: 3, md: 6 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 6, alignItems: "center" }}>

          {/* Left - image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", minHeight: 384 }}
          >
            <Box
              sx={{
                position: "relative", height: 384, borderRadius: 4, overflow: "hidden",
                border: "2px solid rgba(191,219,254,0.6)",
                boxShadow: "0 25px 50px rgba(37,99,235,0.12)",
                background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
                display: "flex", alignItems: "center", justifyContent: "center",
                "&:hover": { border: "2px solid rgba(147,197,253,0.8)", boxShadow: "0 25px 50px rgba(37,99,235,0.2)" },
                transition: "all 0.3s",
              }}
            >
              <motion.div animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                  <path d="M50 10C40 20 30 30 30 50C30 70 40 80 50 90C60 80 70 70 70 50C70 30 60 20 50 10Z" stroke="rgba(37,99,235,0.4)" strokeWidth="0.5" />
                </svg>
              </motion.div>
            </Box>
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ position: "absolute", bottom: -24, right: -24, width: 160, height: 160, background: "radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none" }}
            />
          </motion.div>

          {/* Right - content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
              <Box
                sx={{
                  display: "inline-flex", alignItems: "center", gap: 1, mb: 4,
                  px: 2, py: 1, borderRadius: 50,
                  bgcolor: "rgba(239,246,255,0.6)",
                  border: "1px solid rgba(191,219,254,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: BLUE, animation: "pulse 2s infinite" }} />
                <Typography sx={{ color: BLUE, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Our Purpose
                </Typography>
              </Box>
            </motion.div>

            <Typography
              variant="h2"
              sx={{ fontWeight: 900, color: DARK, mb: 4, fontSize: { xs: "2.5rem", md: "3.5rem" }, lineHeight: 1.1 }}
            >
              Our{" "}
              <Box component="span" sx={{ background: `linear-gradient(to right, ${BLUE}, ${BLUE_LIGHT}, #06b6d4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Mission
              </Box>
            </Typography>

            <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" }, color: "#475569", mb: 5, lineHeight: 1.8, fontWeight: 300 }}>
              To lead people into a growing relationship with Jesus Christ and empower them to make a difference in the world.
            </Typography>

            {/* Scripture */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
              <Box
                sx={{
                  mb: 5, pl: 4, py: 3, px: 3,
                  borderLeft: `4px solid ${BLUE}`,
                  bgcolor: "rgba(239,246,255,0.5)",
                  borderRadius: "0 12px 12px 0",
                }}
              >
                <Typography sx={{ color: BLUE, fontStyle: "italic", fontSize: "1.1rem", fontWeight: 300, mb: 1 }}>
                  "Go therefore and make disciples of all nations..."
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                  Matthew 28:19
                </Typography>
              </Box>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ChevronRightIcon />}
                sx={{
                  borderRadius: 50, px: 4, py: 1.5, fontSize: "1rem", fontWeight: 700,
                  background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})`,
                  boxShadow: "0 4px 24px rgba(37,99,235,0.45)",
                  "&:hover": { background: `linear-gradient(135deg, #1d4ed8, ${BLUE})`, transform: "scale(1.05)", boxShadow: "0 6px 32px rgba(37,99,235,0.6)" },
                }}
              >
                Learn More About Our Mission
              </Button>
            </motion.div>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
