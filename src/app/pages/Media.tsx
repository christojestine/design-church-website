import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Tabs,
  Tab,
} from "@mui/material";
import { ScrollReveal } from "../components/ScrollReveal";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import img1 from "@/imports/118A1922.jpg";
import img2 from "@/imports/118A2142-q1i6wlsiqm03o4ehgyalbdplv9c71xmkizsndnfwxy_bcccfee6.jpg";
import img3 from "@/imports/118A2327.jpg";
import img4 from "@/imports/118A2143.jpg";
import img5 from "@/imports/118A2143-q1i6wlsiqm03o4ehgyalbdplv9c71xmkizsndnfwxy_2ac44f49.jpg";

const glassCard = {
  background: "rgba(255,255,255,0.6)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.85)",
  borderRadius: "20px",
  boxShadow: "0 4px 24px rgba(30,64,175,0.07)",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "&:hover": {
    background: "rgba(255,255,255,0.82)",
    border: "1px solid rgba(29,78,216,0.2)",
    boxShadow: "0 16px 48px rgba(29,78,216,0.13)",
    transform: "translateY(-8px) perspective(800px) rotateX(1.5deg)",
  },
};

const videos = [
  {
    id: "tqvVgHlAVKw",
    title:
      "ഓശാന തിരുക്കര്‍മ്മങ്ങള്‍ | Palm Sunday | Highlight Video | St.Mary's Forane Church Chalakudy",
    description:
      "Palm Sunday highlights from St.Mary's Forane Church Chalakudy.",
  },
  {
    id: "Ckygkq-Zl2o",
    title:
      "പീഡാനുഭവ ശൂസ്രൂഷകൾ | Good Friday | Highlight Video | St.Mary's Forane Church",
    description: "Good Friday highlights and reflections.",
  },
  {
    id: "99X0Cd7O0ZY",
    title:
      "Beyond The Veil | Nothing on earth is greater than one Holy Mass | St.Mary's Forane Church Chalakudy",
    description: "A feature on the significance of the Holy Mass.",
  },
  {
    id: "z5gxl1B5uMw",
    title: "ക്രിസ്തുജയന്തി - 2025 |  മഹാജൂബിലി സമാപന കരോൾ | Highlight Video",
    description: "Highlights from the 2025 Mahajubilee closing carol.",
  },
];

const photos = [
  { shortcode: "DWqoDqIDyrk", caption: "Instagram Post 1" },
  { shortcode: "DXD9hF6j1G-", caption: "Instagram Post 2" },
  { shortcode: "DWojRfwj_zj", caption: "Instagram Post 3" },
  { shortcode: "DWdUey8j2Hu", caption: "Instagram Post 4" },
];

export default function Media() {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    // Inject Instagram embed script if not present
    if (
      !document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]',
      )
    ) {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // If script already loaded, try to process embeds
      const w = window as any;
      try {
        if (
          w.instgrm &&
          w.instgrm.Embeds &&
          typeof w.instgrm.Embeds.process === "function"
        ) {
          w.instgrm.Embeds.process();
        }
      } catch (err) {
        // swallow embed processing errors to avoid breaking the app
        // console.warn('Instagram embed process error', err);
      }
    }
  }, [tab]);

  return (
    <Box>
      <Box sx={{ textAlign: "center", py: { xs: 8, md: 10 }, px: 3 }}>
        <ScrollReveal>
          <Chip
            label="Church Media"
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
              fontSize: { xs: "2.8rem", md: "4rem" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 2,
              letterSpacing: "-0.03em",
            }}
          >
            Media Center
          </Typography>
        </ScrollReveal>
      </Box>

      {/* Tab switcher */}
      <Box sx={{ maxWidth: 480, mx: "auto", px: 3, mb: 7 }}>
        <Box
          sx={{
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.9)",
            borderRadius: "16px",
            p: 0.7,
            boxShadow: "0 4px 20px rgba(29,78,216,0.08)",
          }}
        >
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            sx={{
              "& .MuiTabs-indicator": {
                background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
                borderRadius: "10px",
                height: "100%",
                zIndex: 0,
                boxShadow: "0 4px 12px rgba(29,78,216,0.3)",
              },
              "& .MuiTab-root": {
                color: "#64748b",
                fontWeight: 600,
                zIndex: 1,
                borderRadius: "10px",
                minHeight: 44,
                transition: "all 0.3s",
                fontSize: "0.9rem",
              },
              "& .Mui-selected": { color: "white !important" },
            }}
          >
            <Tab
              icon={<VideocamIcon sx={{ fontSize: 18 }} />}
              iconPosition="start"
              label="Videos"
            />
            <Tab
              icon={<PhotoLibraryIcon sx={{ fontSize: 18 }} />}
              iconPosition="start"
              label="Photos"
            />
          </Tabs>
        </Box>
      </Box>

      {/* Videos */}
      {tab === 0 && (
        <Box sx={{ px: 3, pb: { xs: 10, md: 14 } }}>
          <Box sx={{ maxWidth: 1280, mx: "auto" }}>
            <Grid container spacing={3}>
              {videos.map((v, i) => (
                <Grid key={i} size={{ xs: 12, md: 6 }}>
                  <ScrollReveal delay={i * 0.1} style={{ height: "100%" }}>
                    <Card sx={glassCard}>
                      <CardContent sx={{ p: 0 }}>
                        <Box
                          sx={{
                            position: "relative",
                            paddingTop: "56.25%",
                            background: "rgba(15,23,42,0.04)",
                            borderRadius: "20px 20px 0 0",
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            component="iframe"
                            src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                            title={v.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              border: "none",
                            }}
                          />
                        </Box>
                        <Box sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: 36,
                                height: 36,
                                borderRadius: "10px",
                                background:
                                  "linear-gradient(135deg, #1d4ed8, #2563eb)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                mt: 0.25,
                                boxShadow: "0 4px 12px rgba(29,78,216,0.3)",
                              }}
                            >
                              <PlayArrowIcon
                                sx={{ fontSize: 20, color: "white" }}
                              />
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  color: "#0f172a",
                                  fontWeight: 700,
                                  mb: 0.5,
                                  fontSize: "0.97rem",
                                }}
                              >
                                {v.title}
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#64748b",
                                  fontSize: "0.875rem",
                                  lineHeight: 1.6,
                                }}
                              >
                                {v.description}
                              </Typography>
                            </Box>
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
      )}

      {/* Photos */}
      {tab === 1 && (
        <Box sx={{ px: 3, pb: { xs: 10, md: 14 } }}>
          <Box sx={{ maxWidth: 1280, mx: "auto" }}>
            <Grid container spacing={3}>
              {photos.map((photo, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: i === 0 ? 8 : 4 }}>
                  <ScrollReveal delay={i * 0.1} style={{ height: "100%" }}>
                    <Box
                      sx={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.85)",
                        boxShadow: "0 8px 32px rgba(29,78,216,0.1)",
                        position: "relative",
                        p: 0,
                      }}
                    >
                      <Box
                        component="iframe"
                        src={`https://www.instagram.com/p/${photo.shortcode}/embed`}
                        title={photo.caption}
                        loading="lazy"
                        sx={{ width: "100%", height: 520, border: "none" }}
                      />
                    </Box>
                  </ScrollReveal>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  );
}
