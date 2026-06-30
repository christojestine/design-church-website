import { Outlet, useLocation } from "react-router";
import { useEffect, lazy, Suspense } from "react";
import { Box } from "@mui/material";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const MarianBackground3D = lazy(
  () => import("./components/MarianBackground3D"),
);

const keyframes = `
  @keyframes driftOrb {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
    33% { transform: translate(40px, -55px) scale(1.08); opacity: 0.9; }
    66% { transform: translate(-25px, 30px) scale(0.94); opacity: 0.6; }
  }
  @keyframes shimmerGrid {
    0%, 100% { opacity: 0.04; }
    50% { opacity: 0.09; }
  }
`;

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        bgcolor: "#eff6ff",
      }}
    >
      <style>{keyframes}</style>

      {/* ── Original light-theme CSS background ── */}
      <Box sx={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden" }}>
        {/* Sky-blue → warm cream base gradient */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, #dbeafe 0%, #ede9fe 35%, #fef9ef 65%, #e0f2fe 100%)",
          }}
        />

        {/* Orb 1 – sky blue */}
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            left: "5%",
            width: 550,
            height: 550,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "driftOrb 12s ease-in-out infinite",
          }}
        />

        {/* Orb 2 – warm gold */}
        <Box
          sx={{
            position: "absolute",
            bottom: "8%",
            right: "3%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "driftOrb 16s ease-in-out infinite 4s",
          }}
        />

        {/* Orb 3 – soft violet */}
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            right: "28%",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "driftOrb 14s ease-in-out infinite 8s",
          }}
        />

        {/* Orb 4 – emerald */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(5,150,105,0.12) 0%, transparent 70%)",
            filter: "blur(55px)",
            animation: "driftOrb 18s ease-in-out infinite 2s",
          }}
        />

        {/* Dot grid */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(29,78,216,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            animation: "shimmerGrid 8s ease-in-out infinite",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
          }}
        />

        {/* Perspective floor grid */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%",
            backgroundImage: `
            linear-gradient(rgba(29,78,216,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,78,216,0.04) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "bottom center",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />

        {/* Vignette */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.2) 100%)",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* ── Transparent 3D floating elements on top ── */}
      <Suspense fallback={null}>
        <MarianBackground3D />
      </Suspense>

      {/* Scrollable content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navigation />
        <Box component="main" sx={{ flex: 1 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
