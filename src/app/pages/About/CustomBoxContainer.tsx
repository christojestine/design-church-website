import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ScrollReveal } from "../../components/ScrollReveal";
import type { AboutSectionData } from "./About.data";

const glassCard = {
  background: "rgba(255,255,255,0.6)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.85)",
  borderRadius: "20px",
  boxShadow: "0 4px 24px rgba(30,64,175,0.07)",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "&:hover": {
    background: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(29,78,216,0.2)",
    boxShadow: "0 16px 48px rgba(29,78,216,0.13)",
    transform: "translateY(-8px) perspective(800px) rotateX(1.5deg)",
  },
};

const imageBox = {
  borderRadius: "20px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.85)",
  boxShadow: "0 12px 40px rgba(29,78,216,0.12)",
  transition: "all 0.4s ease",
  "&:hover": {
    boxShadow: "0 20px 60px rgba(29,78,216,0.2)",
    transform: "scale(1.02) perspective(1000px) rotateY(2deg)",
  },
};

export default function CustomBoxContainer({
  chipLabel,
  title,
  description,
  image,
  imageAlt,
  secondaryImage,
  secondaryImageAlt,
  tertiaryImage,
  tertiaryImageAlt,
  imageOnRight,
  py,
}: AboutSectionData) {
  const images = [
    { src: image, alt: imageAlt, height: 400 },
    ...(secondaryImage
      ? [
          {
            src: secondaryImage,
            alt: secondaryImageAlt ?? imageAlt,
            height: 240,
          },
        ]
      : []),
    ...(tertiaryImage
      ? [{ src: tertiaryImage, alt: tertiaryImageAlt ?? imageAlt, height: 200 }]
      : []),
  ];

  const imageColumn = (
    <Grid size={{ xs: 12, md: 3 }}>
      <ScrollReveal direction="left" style={{ height: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {images.map(({ src, alt, height }) => (
            <Box key={`${alt}-${src}`} sx={imageBox}>
              <ImageWithFallback
                src={src}
                alt={alt}
                style={{
                  width: "100%",
                  height,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Box>
      </ScrollReveal>
    </Grid>
  );

  const textColumn = (
    <Grid size={{ xs: 12, md: 9 }}>
      <ScrollReveal direction="right" delay={0.2} style={{ height: "100%" }}>
        <Box sx={{ ...glassCard, p: { xs: 4, md: 5 } }}>
          <Chip
            label={chipLabel}
            size="small"
            sx={{
              background: "rgba(29,78,216,0.08)",
              color: "#1d4ed8",
              fontWeight: 600,
              mb: 2,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 2.5,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: "#475569", lineHeight: 1.85 }}>
            {description}
          </Typography>
        </Box>
      </ScrollReveal>
    </Grid>
  );

  return (
    <Box sx={{ py, px: 3, maxWidth: 1800, mx: "auto" }}>
      <Grid container spacing={5} sx={{ alignItems: "center" }}>
        {imageOnRight ? (
          <>
            {textColumn}
            {imageColumn}
          </>
        ) : (
          <>
            {imageColumn}
            {textColumn}
          </>
        )}
      </Grid>
    </Box>
  );
}
