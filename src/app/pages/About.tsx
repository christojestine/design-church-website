import { Box, Typography, Grid, Card, CardContent, Chip } from "@mui/material";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollReveal } from "../components/ScrollReveal";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PublicIcon from "@mui/icons-material/Public";
import churchExterior from "@/imports/118A1922.jpg";
import grottoSmall from "@/imports/118A2143-q1i6wlsiqm03o4ehgyalbdplv9c71xmkizsndnfwxy_2ac44f49.jpg";

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

const values = [
  {
    Icon: FavoriteIcon,
    title: "Love",
    description:
      "We are committed to loving God and loving others as ourselves, creating a welcoming environment for all.",
    bg: "#fee2e2",
    color: "#dc2626",
  },
  {
    Icon: GroupsIcon,
    title: "Community",
    description:
      "We believe in the power of authentic relationships and growing together in faith.",
    bg: "#dbeafe",
    color: "#1d4ed8",
  },
  {
    Icon: MenuBookIcon,
    title: "Truth",
    description:
      "We are grounded in the Word of God and seek to live according to biblical principles.",
    bg: "#fef3c7",
    color: "#b45309",
  },
  {
    Icon: PublicIcon,
    title: "Mission",
    description:
      "We are called to share the gospel and serve our community both locally and globally.",
    bg: "#dcfce7",
    color: "#16a34a",
  },
];

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

      {/* Mission */}
      <Box sx={{ py: { xs: 8, md: 10 }, px: 3, maxWidth: 1280, mx: "auto" }}>
        <Grid container spacing={5} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal direction="left" style={{ height: "100%" }}>
              <Box
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.85)",
                  boxShadow: "0 12px 40px rgba(29,78,216,0.12)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0 20px 60px rgba(29,78,216,0.2)",
                    transform: "scale(1.02) perspective(1000px) rotateY(2deg)",
                  },
                }}
              >
                <ImageWithFallback
                  src={churchExterior}
                  alt="Church exterior"
                  style={{
                    width: "100%",
                    height: 400,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </ScrollReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal
              direction="right"
              delay={0.2}
              style={{ height: "100%" }}
            >
              <Box sx={{ ...glassCard, p: { xs: 4, md: 5 } }}>
                <Chip
                  label="Our Mission"
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
                  Glorifying God Together
                </Typography>
                <Typography
                  sx={{
                    color: "#475569",
                    mb: 2.5,
                    lineHeight: 1.85,
                    fontSize: "1.02rem",
                  }}
                >
                  St.Mary's Forane Church Chalakudy making disciples of Jesus
                  Christ. We are committed to connecting people to God, to one
                  another, and to the world around us.
                </Typography>
                <Typography sx={{ color: "#475569", lineHeight: 1.85 }}>
                  Founded in 1985, we have grown from a small gathering of 50
                  people to a thriving community of over 1,200 families,
                  remaining committed to our founding vision: a church where
                  everyone belongs.
                </Typography>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
