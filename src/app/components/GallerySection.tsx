import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const BLUE = "#2563eb";
const DARK = "#0f172a";

export default function GallerySection() {
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

  const galleryItems = [
    { id: 1, title: "Church Exterior", colSpan: 2, rowSpan: 2 },
    { id: 2, title: "Interior Altar", colSpan: 1, rowSpan: 1 },
    { id: 3, title: "Grotto", colSpan: 1, rowSpan: 1 },
    { id: 4, title: "Feast Celebration", colSpan: 1, rowSpan: 1 },
    { id: 5, title: "Community Service", colSpan: 1, rowSpan: 1 },
    { id: 6, title: "Prayer Time", colSpan: 2, rowSpan: 1 },
  ];

  return (
    <Box component="section" ref={ref} sx={{ position: "relative", py: 16, overflow: "hidden", bgcolor: "transparent" }}>
      <motion.div
        style={{ position: "absolute", top: "25%", left: "-50%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: 1280, mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography sx={{ color: BLUE, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", mb: 1.5 }}>
              Our Heritage
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: DARK, mb: 2, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Photo{" "}
              <Box component="span" sx={{ background: "linear-gradient(to right, #2563eb, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Gallery
              </Box>
            </Typography>
            <Typography sx={{ color: "rgba(15,23,42,0.7)", fontSize: "1.1rem", maxWidth: 600, mx: "auto" }}>
              Moments of faith, worship, and community at Holy Family Church
            </Typography>
          </Box>
        </motion.div>

        {/* Gallery Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
            gridAutoRows: 256,
            gap: 2,
          }}
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              style={{
                gridColumn: `span ${item.colSpan}`,
                gridRow: `span ${item.rowSpan}`,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid rgba(37,99,235,0.25)",
                  boxShadow: "0 4px 24px rgba(37,99,235,0.1)",
                  cursor: "pointer",
                  "&:hover .gallery-overlay": { opacity: 1 },
                }}
              >
                <Box
                  sx={{
                    width: "100%", height: "100%",
                    background: "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(239,246,255,0.8) 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <svg width="60" height="60" viewBox="0 0 100 100">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="rgba(37,99,235,0.3)" strokeWidth="1" />
                    <circle cx="40" cy="35" r="8" fill="rgba(37,99,235,0.2)" />
                    <polyline points="15,85 35,55 55,75 85,25" fill="none" stroke="rgba(37,99,235,0.3)" strokeWidth="1" />
                  </svg>
                </Box>
                <Box
                  className="gallery-overlay"
                  sx={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(37,99,235,0.45) 0%, transparent 60%)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    display: "flex", alignItems: "flex-end", p: 3,
                  }}
                >
                  <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "1rem" }}>{item.title}</Typography>
                </Box>
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
            View Full Gallery
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
