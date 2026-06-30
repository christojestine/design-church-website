import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";

const BLUE = "#2563eb";
const DARK = "#0f172a";

export default function PriestMessage() {
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
        style={{ position: "absolute", bottom: "-50%", right: "25%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(191,219,254,0.4) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: 960, mx: "auto", px: { xs: 3, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              p: { xs: 4, md: 6 }, borderRadius: 4,
              border: "2px solid rgba(191,219,254,0.5)",
              bgcolor: "rgba(255,255,255,0.8)",
              boxShadow: "0 8px 40px rgba(37,99,235,0.1)",
              backdropFilter: "blur(20px)",
              transition: "all 0.3s",
              "&:hover": { border: "2px solid rgba(147,197,253,0.7)", boxShadow: "0 16px 60px rgba(37,99,235,0.18)" },
            }}
          >
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" }, gap: 5, alignItems: "center" }}>

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ position: "relative", width: "100%", maxWidth: 240 }}>
                  <Box
                    sx={{
                      aspectRatio: "1", borderRadius: 3, overflow: "hidden",
                      border: "2px solid rgba(147,197,253,0.6)",
                      boxShadow: "0 8px 32px rgba(37,99,235,0.15)",
                      background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="30" r="15" fill="rgba(37,99,235,0.25)" />
                      <path d="M50 45 L30 70 L70 70 Z" fill="rgba(37,99,235,0.18)" />
                    </svg>
                  </Box>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ position: "absolute", bottom: -16, right: -16, width: 128, height: 128, background: "radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none" }}
                  />
                </Box>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, color: DARK, mb: 0.75 }}>
                  A Message from Our Priest
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
                  <Typography sx={{ color: BLUE, fontWeight: 600 }}>Rev. Fr. Joseph Thomas</Typography>
                  <Typography sx={{ color: "#64748b", fontSize: "0.875rem" }}>Parish Priest</Typography>
                </Stack>

                <Typography sx={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, mb: 2 }}>
                  "Welcome to our faith community. In these challenging times, we must remember that our church is not just a building, but a gathering of souls united in Christ. Together, we celebrate our faith, support one another in our journey, and work towards making a positive impact in our world."
                </Typography>
                <Typography sx={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, mb: 3 }}>
                  "I invite you to join us in worship, in service, and in fellowship. May your journey with us deepen your faith and bring peace to your heart."
                </Typography>

                <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.5 }}>
                  <Typography sx={{ color: BLUE, fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.8 }}>
                    In Christ's Love,<br />Rev. Fr. Joseph Thomas
                  </Typography>
                </motion.div>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
