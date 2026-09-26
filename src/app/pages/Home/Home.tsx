import { useRef } from "react";
import { Link } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ScrollReveal } from "../../components/ScrollReveal";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ministries, heroSlides } from "./Home.Data";
import { getUpcomingEvents } from "../Events/eventDates";
import ChurchAltar from "../../assets/images/2.webp";
import ChurchFrontView from "../../assets/images/3.webp";
import { glassCard } from "../../../styles/style";
import { useLanguage, type Text } from "../../i18n/LanguageContext";

const text = {
  welcomeTo: { en: "Welcome to", ml: "സ്വാഗതം" },
  heroName: { en: "St.Mary's Forane Church", ml: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി" },
  heroPlace: { en: "Chalakudy", ml: "ചാലക്കുടി" },
  shrine: {
    en: "SHRINE OF THE NATIVITY OF OUR LADY,",
    ml: "പരിശുദ്ധ ദൈവമാതാവിന്റെ പിറവിത്തിരുനാൾ ദേവാലയം,",
  },
  pilgrimCentre: { en: "MARIAN PILGRIM CENTER", ml: "മരിയൻ തീർത്ഥാടന കേന്ദ്രം" },
  learnMore: { en: "Learn More About Us →", ml: "കൂടുതൽ അറിയാം →" },
  massTimes: { en: "View Mass Times", ml: "കുർബാന സമയങ്ങൾ" },
  adorationChapel: { en: "Adoration Chapel", ml: "ആരാധനാ ചാപ്പൽ" },
  adorationHours: {
    en: "Monday to Saturday (8:00 AM to 8:00 PM)",
    ml: "തിങ്കൾ മുതൽ ശനി വരെ (രാവിലെ 8:00 മുതൽ രാത്രി 8:00 വരെ)",
  },
  ourStory: { en: "Our Story", ml: "ഞങ്ങളുടെ ചരിത്രം" },
  planVisit: { en: "Plan Your Visit", ml: "സന്ദർശനത്തിനുള്ള വഴി" },
  altarAlt: { en: "Church altar", ml: "പള്ളിയിലെ അൾത്താര" },
  frontAlt: { en: "Church front view", ml: "പള്ളിയുടെ മുൻവശം" },
  getInvolved: { en: "Get Involved", ml: "പങ്കുചേരാം" },
  ourMinistries: { en: "Our Ministries", ml: "ഞങ്ങളുടെ ശുശ്രൂഷകൾ" },
  ministriesIntro: {
    en: "Discover ways to connect and serve",
    ml: "ഒത്തുചേരാനും സേവിക്കാനുമുള്ള വഴികൾ കണ്ടെത്തൂ",
  },
  allMinistries: { en: "Explore All Ministries", ml: "എല്ലാ ശുശ്രൂഷകളും കാണുക" },
  whatsOn: { en: "What's On", ml: "പരിപാടികൾ" },
  upcomingEvents: { en: "Upcoming Events", ml: "വരാനിരിക്കുന്ന പരിപാടികൾ" },
  eventsIntro: {
    en: "Mark your calendar and join us",
    ml: "തീയതികൾ കുറിച്ചുവെച്ച് ഞങ്ങളോടൊപ്പം ചേരൂ",
  },
  allEvents: { en: "Explore All Upcoming Events", ml: "എല്ലാ പരിപാടികളും കാണുക" },
} satisfies Record<string, Text>;

// Gradient word in the "Welcome Home" heading.
const gradientWord = {
  fontFamily: '"Cinzel", "Rachana", "Noto Serif Malayalam", "Georgia", serif',
  fontWeight: 800,
  background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const bold = (children: string) => (
  <Box component="span" sx={{ fontWeight: "bold" }}>
    {children}
  </Box>
);

export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { lang, tr } = useLanguage();
  const upcomingEvents = getUpcomingEvents(lang).slice(0, 3);
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 560, md: 620 },
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
            /* Pagination — pill dots: bottom-centre between the arrows on phones, bottom-right on larger screens */
            "& .swiper-pagination": {
              bottom: { xs: "31px !important", md: "28px !important" },
              right: { xs: "auto !important", md: "40px !important" },
              left: { xs: "50% !important", md: "auto !important" },
              transform: { xs: "translateX(-50%)", md: "none" },
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
                    alt={tr(slide.alt)}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: slide.position ?? "center",
                      display: "block",
                    }}
                  />
                  {/* Slide label (hidden on phones, where it collided with the hero buttons) */}
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
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
                      {tr(slide.label)}
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

        {/* ── Custom Nav Arrows — rendered at top z-index, always clickable.
             Phones: along the bottom edge so they don't cover the headline. ── */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            pointerEvents: "none",
            display: "flex",
            alignItems: { xs: "flex-end", md: "center" },
            justifyContent: "space-between",
            px: { xs: 1.5, md: 2.5 },
            pb: { xs: 2, md: 0 },
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
            minHeight: { xs: 560, md: 620 },
            display: "flex",
            alignItems: "center",
            px: { xs: 3, md: 7, lg: 10 },
            pt: { xs: 6, md: 5 },
            pb: { xs: 11, md: 5 },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: 620, md: 1000 },
            }}
          >
            {/* — Eyebrow — */}
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
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
                {tr(text.welcomeTo)}
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
              {tr(text.heroName)}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", md: "3.2rem", lg: "3.7rem" },
                fontWeight: 800,
                color: "white",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                mb: 2.5,
                textShadow: "0 4px 32px rgba(0,0,0,0.35)",
              }}
            >
              {tr(text.heroPlace)}
            </Typography>

            {/* — Divider line — */}
            <Box
              sx={{
                width: 56,
                height: 3,
                borderRadius: 2,
                background: "linear-gradient(90deg, #3b82f6, #a78bfa)",
                mb: 2.5,
              }}
            />

            {/* — Subtitle — */}
            <Typography
              sx={{
                fontSize: { xs: "0.97rem", md: "1.07rem" },
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.7,
                mb: 2.5,
                maxWidth: 420,
              }}
            >
              {tr(text.shrine)}
              <br />
              {tr(text.pilgrimCentre)}
            </Typography>

            {/* — Adoration chapel hours — */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
                px: 2,
                py: 1,
                borderRadius: "14px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
              }}
            >
              <AccessTimeIcon sx={{ color: "#fcd34d", fontSize: 22 }} />
              <Box>
                <Typography
                  sx={{ color: "white", fontWeight: 700, fontSize: "0.95rem" }}
                >
                  {tr(text.adorationChapel)}
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.72)", fontSize: "0.85rem" }}
                >
                  {tr(text.adorationHours)}
                </Typography>
              </Box>
            </Box>

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
                {tr(text.learnMore)}
              </Button>
              <Button
                component={Link}
                to="/programs"
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
                {tr(text.massTimes)}
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
                  label={tr(text.ourStory)}
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
                  {lang === "ml" ? (
                    <>
                      <Box component="span" sx={gradientWord}>
                        സ്വന്തം ഭവനത്തിലേക്ക്
                      </Box>{" "}
                      സ്വാഗതം
                    </>
                  ) : (
                    <>
                      Welcome{" "}
                      <Box component="span" sx={gradientWord}>
                        Home
                      </Box>
                    </>
                  )}
                </Typography>
                <Typography
                  sx={{
                    color: "#475569",
                    mb: 2.5,
                    lineHeight: 1.8,
                    fontSize: "1.02rem",
                  }}
                >
                  {lang === "ml" ? (
                    <>
                      ക്രിസ്തുവർഷം 52-ൽ ഭാരതത്തിലെത്തിയ മാർ തോമാശ്ലീഹായുടെ
                      പ്രേഷിതപ്രവർത്തനത്തിലൂടെ രൂപംകൊണ്ട ആദിമ ക്രൈസ്തവ
                      സമൂഹത്തിലാണ് ചാലക്കുടി സെന്റ് മേരീസ് ഫൊറോന പള്ളിയുടെ
                      വേരുകൾ. ഏകദേശം എ.ഡി. 600-ൽ സ്ഥാപിതമായ ആദ്യ ദേവാലയം 13-ാം
                      നൂറ്റാണ്ടിൽ ഇന്നത്തെ സ്ഥലത്തേക്ക് മാറ്റി സ്ഥാപിച്ചു.
                      നൂറ്റാണ്ടുകൾ നീണ്ട വിശ്വാസത്തിന്റെയും മതസൗഹാർദ്ദത്തിന്റെയും
                      സാക്ഷ്യമാണിത്. അത്ഭുതകരമായ {bold("സ്വയംവര അൾത്താര")}യാൽ
                      പ്രസിദ്ധമായ ഈ ദേവാലയം ഏറെക്കാലമായി മരിയഭക്തിയുടെ
                      കേന്ദ്രമാണ്. ആത്മീയവും ചരിത്രപരവുമായ പ്രാധാന്യം
                      കണക്കിലെടുത്ത് 1987-ൽ ഇതിനെ{" "}
                      {bold("മരിയൻ തീർത്ഥാടന കേന്ദ്ര")}മായി പ്രഖ്യാപിച്ചു. ഗോഥിക്
                      ശൈലിയിലുള്ള പ്രൗഢമായ മണിമാളിക, 2000-ൽ നിർമ്മിച്ച മരിയൻ
                      ഗ്രോട്ടോ, 2001-ൽ ആരംഭിച്ച നിത്യാരാധന കേന്ദ്രം എന്നിവയും
                      ഇവിടത്തെ സവിശേഷതകളാണ്. 2006-ൽ ഉദ്ഘാടനം ചെയ്ത{" "}
                      {bold("ഹോളി ലാൻഡ്")} ആണ് പ്രധാന ആകർഷണം. യേശുവിന്റെ
                      ജീവിതത്തിലെ പ്രധാന സംഭവങ്ങളുടെ യഥാർത്ഥ വലുപ്പത്തിലുള്ള
                      ബൈബിൾ ശില്പാവിഷ്കാരങ്ങളും തിരുശേഷിപ്പുകളും ഉൾക്കൊള്ളുന്ന
                      ഇത് തീർത്ഥാടകർക്ക് ആഴമേറിയ ആത്മീയാനുഭവം പകരുന്നു.
                    </>
                  ) : (
                    <>
                      St. Mary's Forane Church, Chalakudy, traces its origins to
                      the early Christian community founded through the mission
                      of St. Thomas the Apostle, who arrived in India in 52 AD.
                      The first church was established around 600 AD and later
                      relocated to its present site in the 13th century,
                      reflecting centuries of faith and communal harmony.
                      Renowned for the miraculous {bold("Swayamvara Altar")}, the
                      church has long been a center of Marian devotion. In 1987,
                      it was declared a {bold("Marian Pilgrim Centre")} in
                      recognition of its spiritual and historical significance.
                      The church is also known for its majestic Gothic-style
                      belfry, the Marian Grotto built in 2000, and the Perpetual
                      Adoration Centre established in 2001. A major attraction is
                      the {bold("Holy Land")}, inaugurated in 2006, featuring
                      life-size biblical replicas, sacred relics, and artistic
                      recreations of key events from the life of Jesus, offering
                      pilgrims a profound spiritual experience.
                    </>
                  )}
                </Typography>
                <Button
                  href="https://maps.app.goo.gl/NCCH7mXPgpeR62P67"
                  target="_blank"
                  variant="contained"
                  size="large"
                  sx={{ px: 4 }}
                >
                  {tr(text.planVisit)}
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
                  alt={tr(text.altarAlt)}
                  style={{
                    width: "100%",
                    height: 340,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <ImageWithFallback
                  src={ChurchFrontView}
                  alt={tr(text.frontAlt)}
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
                label={tr(text.getInvolved)}
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
                {tr(text.ourMinistries)}
              </Typography>
              <Typography sx={{ color: "#64748b", fontSize: "1.05rem" }}>
                {tr(text.ministriesIntro)}
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
                          {tr(title)}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#64748b",
                            lineHeight: 1.75,
                            fontSize: "0.92rem",
                          }}
                        >
                          {tr(description)}
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
              {tr(text.allMinistries)}
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
                label={tr(text.whatsOn)}
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
                {tr(text.upcomingEvents)}
              </Typography>
              <Typography sx={{ color: "#64748b", fontSize: "1.05rem" }}>
                {tr(text.eventsIntro)}
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
                          {event.displayDate}
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
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Button
              component={Link}
              to="/events"
              variant="contained"
              size="large"
              sx={{ px: 4 }}
            >
              {tr(text.allEvents)}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
