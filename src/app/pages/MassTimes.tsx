import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import { ScrollReveal } from "../components/ScrollReveal";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChurchIcon from "@mui/icons-material/AccountBalance";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WhatsappIcon from "@mui/icons-material/WhatsApp";

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

const schedule = [
  {
    category: "Sunday",
    icon: ChurchIcon,
    bgColor: "#dbeafe",
    iconColor: "#1d4ed8",
    services: ["6:00 AM", "7:30 AM", "9:30 AM", "5:00 PM", "7:00 PM"],
  },
  {
    category: "2nd Sunday of the Month",
    icon: CalendarTodayIcon,
    bgColor: "#ede9fe",
    iconColor: "#7c3aed",
    services: ["6:00 AM", "7:30 AM", "9:30 AM", "5:00 PM"],
  },
  {
    category: "Monday - Saturday",
    icon: AccessTimeIcon,
    bgColor: "#fef3c7",
    iconColor: "#b45309",
    services: ["6:00 AM", "7:15 AM", "5:00 PM", "7:00 PM"],
  },
];

const confessions = [
  { day: "Monday to Saturday", time: "During the time of Holy Mass" },
  { day: "2nd Sunday of the Month", time: "4:00 PM to 7:00 PM" },
  { day: "By Appointment", time: "Contact the parish office" },
];

const vachabhishekaSayanam = [
  { day: "2nd Sunday of the Month", time: "5:00 PM to 9:00 PM" },
];

export default function MassTimes() {
  return (
    <Box>
      <Box sx={{ textAlign: "center", py: { xs: 4, md: 4 }, px: 3 }}>
        <ScrollReveal>
          <Chip
            label="Worship Schedule"
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
            Mass Times
          </Typography>
        </ScrollReveal>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 }, px: 3 }}>
        <Box sx={{ maxWidth: 1000, mx: "auto" }}>
          <Grid container spacing={4}>
            {schedule.map(
              ({ category, icon: Icon, bgColor, iconColor, services }, i) => (
                <Grid key={i} size={{ xs: 12, md: 4 }}>
                  <ScrollReveal delay={i * 0.15} style={{ height: "100%" }}>
                    <Card sx={{ ...glassCard, height: "100%" }}>
                      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 3,
                          }}
                        >
                          <Box
                            sx={{
                              width: 52,
                              height: 52,
                              borderRadius: "14px",
                              background: bgColor,
                              border: `1px solid ${iconColor}22`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: `0 4px 12px ${iconColor}18`,
                            }}
                          >
                            <Icon sx={{ fontSize: 26, color: iconColor }} />
                          </Box>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "#0f172a",
                              fontWeight: 700,
                              fontSize: "1.1rem",
                            }}
                          >
                            {category}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            alignItems: "center",
                          }}
                        >
                          {services.map((t, j) => (
                            <Chip
                              key={j}
                              label={t}
                              size="small"
                              sx={{
                                background: bgColor,
                                border: `1px solid ${iconColor}20`,
                                color: iconColor,
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                px: 2,
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </Grid>
              ),
            )}
          </Grid>
        </Box>
      </Box>

      <Box sx={{ px: 3, pb: { xs: 4, md: 4 } }}>
        <ScrollReveal delay={0.1}>
          <Box
            sx={{
              maxWidth: 700,
              mx: "auto",
              background: "rgba(29,78,216,0.05)",
              border: "1px solid rgba(29,78,216,0.12)",
              borderRadius: "16px",
              p: 3,
              display: "flex",
              gap: 2,
            }}
          >
            <InfoOutlinedIcon
              sx={{ color: "#1d4ed8", flexShrink: 0, mt: 0.3 }}
            />
            <Typography
              sx={{ color: "#475569", fontSize: "0.925rem", lineHeight: 1.75 }}
            >
              Apart from the regular timings, some special masses will also be
              held on certain days. For updates, please join our WhatsApp
              community.
            </Typography>
            <Button
              aria-label="Join WhatsApp Community"
              href="#"
              target="_blank"
              startIcon={<WhatsappIcon />}
              sx={{
                background: "rgba(29,78,216,0.08)",
                border: "1px solid rgba(29,78,216,0.15)",
                color: "#1d4ed8",
                ml: "auto",
                borderRadius: "12px",
                textTransform: "none",
                px: 2.5,
                py: 1,
                "&:hover": { background: "rgba(29,78,216,0.1)" },
              }}
            >
              <Typography
                sx={{
                  color: "#1d4ed8",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                Join
              </Typography>
            </Button>
          </Box>
        </ScrollReveal>
      </Box>

      <Box sx={{ py: { xs: 4, md: 4 }, px: 3 }}>
        <Box sx={{ maxWidth: 700, mx: "auto" }}>
          <ScrollReveal>
            <Box sx={{ textAlign: "center", mb: 5 }}>
              <Chip
                label="Sacrament"
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
                  fontSize: { xs: "1.8rem", md: "2.4rem" },
                  fontWeight: 800,
                  color: "#0f172a",
                }}
              >
                Confession Times
              </Typography>
            </Box>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Card sx={glassCard}>
              <CardContent sx={{ p: 4 }}>
                {confessions.map((c, i) => (
                  <Box key={i}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        py: 2,
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#334155", fontWeight: 500 }}>
                        {c.day}
                      </Typography>
                      <Typography sx={{ color: "#1d4ed8", fontWeight: 600 }}>
                        {c.time}
                      </Typography>
                    </Box>
                    {i < confessions.length - 1 && (
                      <Divider sx={{ borderColor: "rgba(29,78,216,0.07)" }} />
                    )}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>
        </Box>
      </Box>

      <Box sx={{ py: { xs: 4, md: 4 }, px: 3 }}>
        <Box sx={{ maxWidth: 700, mx: "auto" }}>
          <ScrollReveal>
            <Box sx={{ textAlign: "center", mb: 5 }}>
              <Chip
                label="Sacrament"
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
                  fontSize: { xs: "1.8rem", md: "2.4rem" },
                  fontWeight: 800,
                  color: "#0f172a",
                }}
              >
                Vachabhisheka Sayanam
              </Typography>
            </Box>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Card sx={glassCard}>
              <CardContent sx={{ p: 4 }}>
                {vachabhishekaSayanam.map((c, i) => (
                  <Box key={i}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        py: 2,
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#334155", fontWeight: 500 }}>
                        {c.day}
                      </Typography>
                      <Typography sx={{ color: "#1d4ed8", fontWeight: 600 }}>
                        {c.time}
                      </Typography>
                    </Box>
                    {i < vachabhishekaSayanam.length - 1 && (
                      <Divider sx={{ borderColor: "rgba(29,78,216,0.07)" }} />
                    )}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>
        </Box>
      </Box>
    </Box>
  );
}
