import { useRef } from "react";
import { Link } from "react-router";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ScrollReveal } from "../components/ScrollReveal";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import ChurchHelicamView from "../assets/images/1.JPG";
import ChurchAltar from "../assets/images/2.jpg";
import ChurchFrontView from "../assets/images/3.jpg";
import ChurchGrotto from "../assets/images/4.jpeg";
// Replace local 5th image with Instagram post link
const OldAltar =
  "https://www.instagram.com/p/DUcEUZUj6Zi/?igsh=MW5qY25pcHRncXg5ZA==";

const heroSlides = [
  { src: ChurchHelicamView, alt: "Slide 1", label: "House of God" },
  { src: ChurchAltar, alt: "Slide 2", label: "Sacred Interior" },
  { src: ChurchFrontView, alt: "Slide 3", label: "Evening Prayer" },
  { src: ChurchGrotto, alt: "Slide 4", label: "Grotto Shrine" },
  { src: OldAltar, alt: "Slide 5", label: "Blessed Grounds" },
];

const glassCard = {
  background: "rgba(255,255,255,0.6)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.85)",
  borderRadius: "20px",
  boxShadow: "0 4px 24px rgba(30,64,175,0.07), 0 1px 3px rgba(0,0,0,0.05)",
  transition: "all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "&:hover": {
    background: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(29,78,216,0.2)",
    boxShadow: "0 16px 48px rgba(29,78,216,0.14), 0 4px 12px rgba(0,0,0,0.06)",
    transform: "translateY(-8px) perspective(800px) rotateX(1.5deg)",
  },
};

const massSchedule = [
  {
    day: "Sunday",
    times: ["6:00 AM", "7:30 AM", "9:30 AM", "5:00 PM", "7:00 PM"],
  },
  { day: "Mon – Fri", times: ["6:00 AM", "7:15 AM", "5:00 PM", "7:00 PM"] },
];

const ministries = [
  {
    Icon: FavoriteIcon,
    title: "Outreach",
    description: "Serving our community through acts of compassion and care.",
    color: "#fee2e2",
    iconColor: "#dc2626",
  },
  {
    Icon: GroupsIcon,
    title: "Youth Ministry",
    description:
      "Empowering the next generation to grow in faith and fellowship.",
    color: "#dbeafe",
    iconColor: "#1d4ed8",
  },
  {
    Icon: MenuBookIcon,
    title: "Bible Study",
    description: "Deepening our understanding of Scripture together.",
    color: "#fef3c7",
    iconColor: "#b45309",
  },
];

const upcomingEvents = [
  {
    title: "Youth Group Meeting",
    date: "June 8, 2026",
    time: "6:00 PM",
    location: "Parish Hall",
  },
  {
    title: "Bible Study",
    date: "June 10, 2026",
    time: "7:00 PM",
    location: "Community Room",
  },
  {
    title: "Choir Practice",
    date: "June 11, 2026",
    time: "7:30 PM",
    location: "Church",
  },
];

export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 600, md: 780 },
          overflow: "hidden",
        }}
      >
        {/* ── Background Carousel (Swiper) ── */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            /* Swiper fill */
            "& .swiper": { height: "100%", width: "100%" },
            "& .swiper-wrapper": { height: "100%" },
            "& .swiper-slide": { height: "100%" },
            /* Pagination — pill dots, bottom-right */
            "& .swiper-pagination": {
              bottom: "28px !important",
              right: "40px !important",
              left: "auto !important",
              width: "auto !important",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            },
            "& .swiper-pagination-bullet": {
              background: "rgba(255,255,255,0.45)",
              opacity: 1,
              width: 8,
              height: 8,
              borderRadius: "4px",
              transition: "all 0.35s ease",
              margin: "0 !important",
            },
            "& .swiper-pagination-bullet-active": {
              background: "white",
              width: 28,
              borderRadius: "4px",
            },
          }}
        >
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            speed={1400}
            style={{ height: "100%" }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {heroSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                <Box
                  sx={{
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={slide.src}
                    alt={slide.alt}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                  {/* Slide label */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 36,
                      left: { xs: 24, md: "50%" },
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: "100px",
                      px: 2,
                      py: 0.5,
                      zIndex: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      {slide.label}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradient overlay: strong on left, fades to right */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
              background: {
                xs: "linear-gradient(180deg, rgba(10,18,40,0.75) 0%, rgba(10,18,40,0.55) 60%, rgba(10,18,40,0.35) 100%)",
                md: "linear-gradient(100deg, rgba(10,18,40,0.92) 0%, rgba(10,18,40,0.75) 35%, rgba(10,18,40,0.28) 65%, rgba(10,18,40,0.05) 100%)",
              },
            }}
          />
        </Box>

        {/* ── Custom Nav Arrows — rendered at top z-index, always clickable ── */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 1.5, md: 2.5 },
          }}
        >
          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{
              pointerEvents: "auto",
              width: 38,
              height: 38,
              background: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "white",
              transition: "all 0.25s ease",
              "&:hover": {
                background: "rgba(255,255,255,0.28)",
                border: "1px solid rgba(255,255,255,0.75)",
                transform: "scale(1.1)",
              },
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: 22 }} />
          </IconButton>
          <IconButton
            onClick={() => swiperRef.current?.slideNext()}
            sx={{
              pointerEvents: "auto",
              width: 38,
              height: 38,
              background: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "white",
              transition: "all 0.25s ease",
              "&:hover": {
                background: "rgba(255,255,255,0.28)",
                border: "1px solid rgba(255,255,255,0.75)",
                transform: "scale(1.1)",
              },
            }}
          >
            <ChevronRightIcon sx={{ fontSize: 22 }} />
          </IconButton>
        </Box>

        {/* ── Content Card — LEFT aligned ── */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            minHeight: { xs: 600, md: 780 },
            display: "flex",
            alignItems: "center",
            px: { xs: 3, md: 7, lg: 10 },
            py: { xs: 8, md: 0 },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: 620, md: 1000 },
            }}
          >
            {/* — Eyebrow — */}
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 1.5,
                  background: "rgba(255,255,255,0.5)",
                  borderRadius: 1,
                }}
              />
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Welcome to
              </Typography>
            </Box>

            {/* — Headline — */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", md: "3.2rem", lg: "3.7rem" },
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                mb: 1,
                background:
                  "linear-gradient(135deg, #93c5fd 0%, #c4b5fd 55%, #fcd34d 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              St.Mary's Forane Church
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", md: "3.2rem", lg: "3.7rem" },
                fontWeight: 800,
                color: "white",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                mb: 3.5,
                textShadow: "0 4px 32px rgba(0,0,0,0.35)",
              }}
            >
              Chalakudy
            </Typography>

            {/* — Divider line — */}
            <Box
              sx={{
                width: 56,
                height: 3,
                borderRadius: 2,
                background: "linear-gradient(90deg, #3b82f6, #a78bfa)",
                mb: 3,
              }}
            />

            {/* — Subtitle — */}
            <Typography
              sx={{
                fontSize: { xs: "0.97rem", md: "1.07rem" },
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.8,
                mb: 4.5,
                maxWidth: 420,
              }}
            >
              SHRINE OF THE NATIVITY OF OUR LADY,
              <br />
              MARIAN PILGRIM CENTER
            </Typography>

            {/* — Buttons — */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button
                component={Link}
                to="/about"
                variant="contained"
                size="large"
                sx={{
                  px: 3.5,
                  py: 1.4,
                  borderRadius: "14px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  background:
                    "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
                  boxShadow: "0 8px 28px rgba(29,78,216,0.45)",
                  letterSpacing: "0.01em",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)",
                    boxShadow: "0 12px 36px rgba(29,78,216,0.55)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Learn More About Us →
              </Button>
              <Button
                component={Link}
                to="/mass-times"
                variant="outlined"
                size="large"
                startIcon={<AccessTimeIcon />}
                sx={{
                  px: 3.5,
                  py: 1.4,
                  borderRadius: "14px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderColor: "rgba(255,255,255,0.4)",
                  color: "white",
                  backdropFilter: "blur(8px)",
                  "&:hover": {
                    background: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.85)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View Mass Times
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Welcome Section */}
      <Box sx={{ py: { xs: 2, md: 6 }, px: 3, maxWidth: 1280, mx: "auto" }}>
        <Grid container spacing={5} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal direction="left" style={{ height: "100%" }}>
              <Box sx={{ ...glassCard, p: { xs: 4, md: 5 } }}>
                <Chip
                  label="Our Story"
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
                  }}
                >
                  Welcome{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Home
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    color: "#475569",
                    mb: 2.5,
                    lineHeight: 1.8,
                    fontSize: "1.02rem",
                  }}
                >
                  St. Mary's Forane Church, Chalakudy, traces its origins to the
                  early Christian community founded through the mission of St.
                  Thomas the Apostle, who arrived in India in 52 AD. The first
                  church was established around 600 AD and later relocated to
                  its present site in the 13th century, reflecting centuries of
                  faith and communal harmony. Renowned for the miraculous
                  **Swayamvara Altar**, the church has long been a center of
                  Marian devotion. In 1987, it was declared a **Marian Pilgrim
                  Centre** in recognition of its spiritual and historical
                  significance. The church is also known for its majestic
                  Gothic-style belfry, the Marian Grotto built in 2000, and the
                  Perpetual Adoration Centre established in 2001. A major
                  attraction is the **Holy Land**, inaugurated in 2006,
                  featuring life-size biblical replicas, sacred relics, and
                  artistic recreations of key events from the life of Jesus,
                  offering pilgrims a profound spiritual experience.
                </Typography>
                <Button
                  href="https://maps.app.goo.gl/NCCH7mXPgpeR62P67"
                  target="_blank"
                  variant="contained"
                  size="large"
                  sx={{ px: 4 }}
                >
                  Plan Your Visit
                </Button>
              </Box>
            </ScrollReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal
              direction="right"
              delay={0.2}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.85)",
                  boxShadow:
                    "0 12px 40px rgba(29,78,216,0.12), 0 2px 8px rgba(0,0,0,0.06)",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    boxShadow:
                      "0 20px 60px rgba(29,78,216,0.2), 0 4px 12px rgba(0,0,0,0.08)",
                    transform: "scale(1.02) perspective(1000px) rotateY(-2deg)",
                  },
                }}
              >
                <ImageWithFallback
                  src={ChurchAltar}
                  alt="Church altar"
                  style={{
                    width: "100%",
                    height: 340,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <ImageWithFallback
                  src={ChurchFrontView}
                  alt="Church front view"
                  style={{
                    width: "100%",
                    height: 340,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Box>

      {/* Ministries */}
      <Box sx={{ py: { xs: 8, md: 10 }, px: 3 }}>
        <Box sx={{ maxWidth: 1280, mx: "auto" }}>
          <ScrollReveal>
            <Box sx={{ textAlign: "center", mb: 7 }}>
              <Chip
                label="Get Involved"
                sx={{
                  background: "rgba(180,83,9,0.08)",
                  color: "#b45309",
                  fontWeight: 600,
                  mb: 2,
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  fontWeight: 800,
                  color: "#0f172a",
                  mb: 1.5,
                }}
              >
                Our Ministries
              </Typography>
              <Typography sx={{ color: "#64748b", fontSize: "1.05rem" }}>
                Discover ways to connect and serve
              </Typography>
            </Box>
          </ScrollReveal>
          <Grid container spacing={4}>
            {ministries.map(
              ({ Icon, title, description, color, iconColor }, i) => (
                <Grid key={i} size={{ xs: 12, md: 4 }}>
                  <ScrollReveal delay={i * 0.1} style={{ height: "100%" }}>
                    <Card sx={{ ...glassCard, height: "100%" }}>
                      <CardContent sx={{ p: 4 }}>
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: "18px",
                            background: color,
                            border: `1px solid ${iconColor}22`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 3,
                            boxShadow: `0 4px 16px ${iconColor}18`,
                          }}
                        >
                          <Icon sx={{ fontSize: 32, color: iconColor }} />
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#0f172a",
                            fontWeight: 700,
                            mb: 1.5,
                            fontSize: "1.1rem",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#64748b",
                            lineHeight: 1.75,
                            fontSize: "0.92rem",
                          }}
                        >
                          {description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </Grid>
              ),
            )}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Button
              component={Link}
              to="/ministries"
              variant="contained"
              size="large"
              sx={{ px: 4 }}
            >
              Explore All Ministries
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Upcoming Events */}
      <Box sx={{ py: { xs: 8, md: 10 }, px: 3 }}>
        <Box sx={{ maxWidth: 1280, mx: "auto" }}>
          <ScrollReveal>
            <Box sx={{ textAlign: "center", mb: 7 }}>
              <Chip
                label="What's On"
                sx={{
                  background: "rgba(124,58,237,0.08)",
                  color: "#7c3aed",
                  fontWeight: 600,
                  mb: 2,
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  fontWeight: 800,
                  color: "#0f172a",
                  mb: 1.5,
                }}
              >
                Upcoming Events
              </Typography>
              <Typography sx={{ color: "#64748b", fontSize: "1.05rem" }}>
                Mark your calendar and join us
              </Typography>
            </Box>
          </ScrollReveal>
          <Grid container spacing={3} sx={{ maxWidth: 1000, mx: "auto" }}>
            {upcomingEvents.map((event, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <ScrollReveal delay={i * 0.12} style={{ height: "100%" }}>
                  <Card sx={{ ...glassCard, height: "100%" }}>
                    <CardContent sx={{ p: 3.5 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          background:
                            "linear-gradient(135deg, #ede9fe, #dbeafe)",
                          border: "1px solid rgba(124,58,237,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2.5,
                        }}
                      >
                        <CalendarTodayIcon
                          sx={{ fontSize: 24, color: "#7c3aed" }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#0f172a",
                          fontWeight: 700,
                          mb: 1.5,
                          fontSize: "0.97rem",
                        }}
                      >
                        {event.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.4,
                        }}
                      >
                        <Typography
                          sx={{ color: "#64748b", fontSize: "0.875rem" }}
                        >
                          {event.date}
                        </Typography>
                        <Typography
                          sx={{ color: "#64748b", fontSize: "0.875rem" }}
                        >
                          {event.time}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <LocationOnIcon
                            sx={{ fontSize: 14, color: "#1d4ed8" }}
                          />
                          <Typography
                            sx={{ color: "#64748b", fontSize: "0.875rem" }}
                          >
                            {event.location}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
