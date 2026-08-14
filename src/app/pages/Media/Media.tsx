import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ScrollReveal } from "../../components/ScrollReveal";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";
import { glassCard } from "../../../styles/style";
import { videos, photos } from "./Media.Data";

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
