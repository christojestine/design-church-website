import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import CustomBoxContainer from "./CustomBoxContainer";
import { aboutSections } from "./About.data";
import grottoSmall from "@/imports/118A2143-q1i6wlsiqm03o4ehgyalbdplv9c71xmkizsndnfwxy_2ac44f49.jpg";

// The About page component
export default function About() {
  return (
    <Box>
      {/* Hero with real photo */}
      <Box
        sx={{
          position: "relative",
          minHeight: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          px: 3,
          py: 8,
        }}
      >
        <Box sx={{ position: "absolute", inset: 0 }}>
          <ImageWithFallback
            src={grottoSmall}
            alt="Grotto shrine"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(219,234,254,0.82) 0%, rgba(255,255,255,0.72) 100%)",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1px solid rgba(255,255,255,0.85)",
            borderRadius: "24px",
            p: { xs: 4, md: 6 },
            boxShadow: "0 12px 50px rgba(29,78,216,0.1)",
          }}
        >
          <Chip
            label="Our Story"
            sx={{
              background: "rgba(29,78,216,0.08)",
              color: "#1d4ed8",
              fontWeight: 600,
              mb: 2,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.6rem", md: "3.8rem" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 1.5,
              letterSpacing: "-0.03em",
            }}
          >
            About Us
          </Typography>
          <Typography sx={{ color: "#475569", fontSize: "1.15rem" }}>
            Our story, our mission, our faith
          </Typography>
        </Box>
      </Box>

      {/* Sections driven by aboutSections data */}
      {aboutSections.map((section, i) => (
        <CustomBoxContainer key={i} {...section} />
      ))}
    </Box>
  );
}
