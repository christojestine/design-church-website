import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BLUE = "#2563eb";
const BLUE_LIGHT = "#3b82f6";
const DARK = "#0f172a";

const experiences = [
  { Icon: FavoriteIcon, title: "Worship", description: "Join us for Holy Mass and prayer." },
  { Icon: GroupIcon, title: "Community", description: "Build lifelong friendships." },
  { Icon: MenuBookIcon, title: "Formation", description: "Grow deeper in faith." },
  { Icon: HandshakeIcon, title: "Service", description: "Serve others through ministry." },
];

export default function ParishExperience() {
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
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <motion.div
          style={{ position: "absolute", top: 0, left: "25%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          style={{ position: "absolute", bottom: 0, right: "33%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </Box>

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: 1280, mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 2, px: 2, py: 1, borderRadius: 50, bgcolor: "rgba(239,246,255,0.6)", border: "1px solid rgba(191,219,254,0.4)" }}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: BLUE }} />
                <Typography sx={{ color: BLUE, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Parish Experience
                </Typography>
              </Box>
            </motion.div>
            <Typography variant="h2" sx={{ fontWeight: 900, color: DARK, mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" }, lineHeight: 1.1 }}>
              What We{" "}
              <Box component="span" sx={{ background: `linear-gradient(to right, ${BLUE}, ${BLUE_LIGHT}, #06b6d4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Offer
              </Box>
            </Typography>
            <Typography sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" }, color: "#64748b", maxWidth: 640, mx: "auto", fontWeight: 300 }}>
              Experience spiritual growth, vibrant worship, and meaningful fellowship in our thriving faith community
            </Typography>
          </Box>
        </motion.div>

        {/* Cards */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: { xs: 3, lg: 4 } }}>
          {experiences.map(({ Icon, title, description }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
            >
              <Box
                sx={{
                  height: "100%", p: 4, borderRadius: 4,
                  border: "2px solid rgba(191,219,254,0.5)",
                  bgcolor: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
                  transition: "all 0.3s",
                  "&:hover": {
                    border: "2px solid rgba(147,197,253,0.7)",
                    boxShadow: "0 16px 48px rgba(37,99,235,0.18)",
                    bgcolor: "rgba(255,255,255,0.95)",
                  },
                }}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: idx * 0.12 + 0.2 }}
                >
                  <Box
                    sx={{
                      width: 72, height: 72, borderRadius: 3, mb: 3,
                      background: `linear-gradient(135deg, ${BLUE}, ${BLUE_LIGHT})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 6px 24px rgba(37,99,235,0.35)",
                      transition: "all 0.3s",
                    }}
                  >
                    <Icon sx={{ fontSize: 36, color: "#fff" }} />
                  </Box>
                </motion.div>

                <Typography variant="h5" sx={{ fontWeight: 700, color: DARK, mb: 1.5 }}>
                  {title}
                </Typography>
                <Typography sx={{ color: "#64748b", lineHeight: 1.7, mb: 3, fontWeight: 300, fontSize: "1.05rem" }}>
                  {description}
                </Typography>

                <motion.div whileHover={{ x: 5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, color: BLUE, fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>
                    <Typography sx={{ color: BLUE, fontWeight: 700, fontSize: "0.95rem" }}>Learn More</Typography>
                    <ArrowForwardIcon sx={{ fontSize: 18, color: BLUE }} />
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
