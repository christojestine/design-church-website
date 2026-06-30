import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const BLUE = "#2563eb";
const BLUE_LIGHT = "#3b82f6";
const DARK = "#0f172a";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        bgcolor: "transparent",
      }}
    >
      {/* Animated background blobs */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <motion.div
          style={{ position: "absolute", top: "-25%", left: "-25%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          style={{ position: "absolute", top: "50%", right: "-25%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </Box>

      {/* Floating particles */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: 4, height: 4,
              backgroundColor: "rgba(59,130,246,0.3)",
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.4, 0.1], y: [0, -100, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </Box>

      {/* Quote card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateZ: -5 }}
        animate={{ opacity: 1, y: 0, rotateZ: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ position: "absolute", bottom: 80, right: 160, maxWidth: 280, zIndex: 30 }}
      >
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            bgcolor: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(20px)",
            border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: 4,
            p: 3,
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <AutoAwesomeIcon sx={{ color: BLUE_LIGHT, fontSize: 20, mt: 0.25, flexShrink: 0 }} />
            <Box>
              <Typography sx={{ color: DARK, fontSize: "1.05rem", fontStyle: "italic", fontWeight: 300, lineHeight: 1.6, mb: 1 }}>
                "Let your light shine before others."
              </Typography>
              <Typography sx={{ color: BLUE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                Matthew 5:16
              </Typography>
            </Box>
          </Stack>
        </Box>
      </motion.div>

      {/* Main content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, md: 6, lg: 10 },
          py: 12,
          minHeight: "100vh",
        }}
      >
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ flex: 1, maxWidth: 640 }}
        >
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Box
              sx={{
                display: "inline-flex", alignItems: "center", gap: 1, mb: 3,
                px: 2, py: 0.75, borderRadius: 50,
                bgcolor: "rgba(239,246,255,0.9)",
                border: "1px solid rgba(191,219,254,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 16, color: BLUE }} />
              <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: BLUE }}>
                Welcome to Holy Family Church
              </Typography>
            </Box>
          </motion.div>

          {/* Headline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", md: "4rem", lg: "5rem" },
                fontWeight: 900,
                color: DARK,
                mb: 3,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              A Place of<br />
              <Box component="span" sx={{ background: `linear-gradient(to right, ${BLUE}, ${BLUE_LIGHT}, #06b6d4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Faith.
              </Box><br />
              A Family in Christ.
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, color: "#475569", mb: 5, lineHeight: 1.7, fontWeight: 300 }}>
              We are a vibrant Catholic community rooted in faith, worship, and service. Join us as we grow together in God's love.
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 6 }}>
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
                Join Us This Sunday
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrowIcon />}
                sx={{
                  borderRadius: 50, px: 4, py: 1.5, fontSize: "1rem", fontWeight: 700,
                  borderColor: "#93c5fd", color: BLUE,
                  bgcolor: "rgba(255,255,255,0.8)",
                  "&:hover": { bgcolor: "rgba(239,246,255,0.8)", borderColor: BLUE_LIGHT, boxShadow: "0 4px 20px rgba(37,99,235,0.25)", transform: "scale(1.05)" },
                }}
              >
                Watch Live Mass
              </Button>
            </Stack>
          </motion.div>

          {/* Info cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {[
                { Icon: LocationOnIcon, label: "LOCATION", text: "Holy Family Church, Kadavanthra, Kochi" },
                { Icon: AccessTimeIcon, label: "SUNDAY MASS", text: "7:00 AM | 9:00 AM | 6:00 PM" },
              ].map(({ Icon, label, text }) => (
                <Box
                  key={label}
                  sx={{
                    p: 2, borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.85)" },
                    transition: "all 0.3s",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Icon sx={{ fontSize: 20, color: BLUE, mt: 0.25, flexShrink: 0 }} />
                    <Box>
                      <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, color: BLUE, letterSpacing: "0.12em", mb: 0.25 }}>{label}</Typography>
                      <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: DARK }}>{text}</Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Box>
          </motion.div>
        </motion.div>

        {/* Right - visual */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, flex: 1, alignItems: "center", justifyContent: "center", position: "relative", height: "100vh" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ position: "relative", width: "100%", height: "100%", maxWidth: 400 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ position: "absolute", inset: 0, borderRadius: 32, background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)", filter: "blur(40px)" }}
            />
            <Box
              sx={{
                position: "relative", height: "100%", borderRadius: 4, overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                border: "2px solid rgba(255,255,255,0.3)",
                background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                    <path d="M50 10C40 20 30 30 30 50C30 70 40 80 50 90C60 80 70 70 70 50C70 30 60 20 50 10Z" stroke="rgba(37,99,235,0.4)" strokeWidth="1" />
                    <rect x="40" y="10" width="20" height="80" fill="rgba(37,99,235,0.3)" />
                    <rect x="20" y="35" width="60" height="20" fill="rgba(37,99,235,0.3)" />
                  </svg>
                </motion.div>
                <Typography sx={{ color: BLUE, fontWeight: 600, mt: 1 }}>Holy Family Church</Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}
      >
        <Stack alignItems="center" spacing={1}>
          <Typography sx={{ fontSize: "0.875rem", color: "#64748b", fontWeight: 500 }}>Scroll to explore</Typography>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 24, height: 40, borderRadius: 50, border: "2px solid #93c5fd", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 8 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 4, height: 8, backgroundColor: BLUE, borderRadius: 50 }}
            />
          </motion.div>
        </Stack>
      </motion.div>
    </Box>
  );
}
