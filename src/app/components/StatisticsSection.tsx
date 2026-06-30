import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

const BLUE = "#2563eb";
const BLUE_LIGHT = "#3b82f6";
const DARK = "#0f172a";

function AnimatedCounter({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = end / 50;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, 30);
    return () => clearInterval(interval);
  }, [inView, end]);

  return (
    <Typography
      sx={{
        fontSize: { xs: "2.5rem", md: "3rem" },
        fontWeight: 700,
        background: `linear-gradient(to right, ${BLUE}, ${BLUE_LIGHT})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {count.toLocaleString()}{suffix}
    </Typography>
  );
}

export default function StatisticsSection() {
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

  const stats = [
    { end: 10000, suffix: "+", label: "Families" },
    { end: 75, suffix: "+", label: "Years of Faith" },
    { end: 30, suffix: "+", label: "Ministries" },
    { end: 500, suffix: "+", label: "Youth Members" },
  ];

  return (
    <Box component="section" ref={ref} sx={{ position: "relative", py: 16, overflow: "hidden", bgcolor: "transparent" }}>
      <motion.div
        style={{ position: "absolute", top: "-50%", left: "-25%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 3 }}
      />

      <Box sx={{ position: "relative", zIndex: 10, maxWidth: 1200, mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography sx={{ color: BLUE, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", mb: 1.5 }}>
              Our Impact
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, color: DARK, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              By The{" "}
              <Box component="span" sx={{ background: `linear-gradient(to right, ${BLUE}, ${BLUE_LIGHT})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Numbers
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Stats Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 4 }}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Box
                sx={{
                  position: "relative", p: 4, borderRadius: 3, textAlign: "center",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(37,99,235,0.25)",
                  bgcolor: "rgba(255,255,255,0.65)",
                  boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
                  overflow: "hidden",
                  transition: "all 0.3s",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.9)", boxShadow: "0 12px 40px rgba(37,99,235,0.18)" },
                }}
              >
                <AnimatedCounter end={stat.end} suffix={stat.suffix} inView={inView} />
                <Typography sx={{ fontSize: "1.05rem", color: DARK, fontWeight: 600, mt: 1 }}>
                  {stat.label}
                </Typography>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: idx * 0.1 + 0.2 }}
                  style={{ marginTop: 16, height: 3, background: `linear-gradient(to right, transparent, ${BLUE}, transparent)`, borderRadius: 2 }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
