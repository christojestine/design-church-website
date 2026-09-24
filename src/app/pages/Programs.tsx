import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { ScrollReveal } from "../components/ScrollReveal";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChurchIcon from "@mui/icons-material/AccountBalance";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { glassCard } from "../../styles/style";
import { useLanguage, type Text } from "../i18n/LanguageContext";
import { formatClock } from "../i18n/common";

const secondSunday: Text = { en: "2nd Sunday of the Month", ml: "മാസത്തിലെ രണ്ടാം ഞായറാഴ്ച" };

const text = {
  chip: { en: "Worship Schedule", ml: "ആരാധനാ സമയക്രമം" },
  title: { en: "Mass Times", ml: "കുർബാന സമയങ്ങൾ" },
  specialMasses: {
    en: "Apart from the regular timings, some special masses will also be held on certain days. For updates, please join our WhatsApp community.",
    ml: "പതിവ് സമയങ്ങൾക്കു പുറമേ ചില ദിവസങ്ങളിൽ പ്രത്യേക കുർബാനകളും ഉണ്ടായിരിക്കും. പുതിയ വിവരങ്ങൾക്കായി ഞങ്ങളുടെ വാട്ട്സ്ആപ്പ് കൂട്ടായ്മയിൽ ചേരൂ.",
  },
  joinLabel: { en: "Join WhatsApp Community", ml: "വാട്ട്സ്ആപ്പ് കൂട്ടായ്മയിൽ ചേരുക" },
  join: { en: "Join", ml: "ചേരുക" },
  sacrament: { en: "Sacrament", ml: "കൂദാശ" },
  confessionTitle: { en: "Confession Times", ml: "കുമ്പസാര സമയങ്ങൾ" },
  vachabhishekaTitle: { en: "Vachabhisheka Sayanam", ml: "വചനാഭിഷേക ശയനം" },
} satisfies Record<string, Text>;

const schedule = [
  {
    category: { en: "Sunday", ml: "ഞായറാഴ്ച" } as Text,
    icon: ChurchIcon,
    bgColor: "#dbeafe",
    iconColor: "#1d4ed8",
    services: ["6:00 AM", "7:30 AM", "9:30 AM", "5:00 PM", "7:00 PM"],
  },
  {
    category: secondSunday,
    icon: CalendarTodayIcon,
    bgColor: "#ede9fe",
    iconColor: "#7c3aed",
    services: ["6:00 AM", "7:30 AM", "9:30 AM", "5:00 PM"],
  },
  {
    category: { en: "Monday - Saturday", ml: "തിങ്കൾ – ശനി" },
    icon: AccessTimeIcon,
    bgColor: "#fef3c7",
    iconColor: "#b45309",
    services: ["6:00 AM", "7:15 AM", "5:00 PM", "7:00 PM"],
  },
];

const confessions: { day: Text; time: Text }[] = [
  {
    day: { en: "Monday to Saturday", ml: "തിങ്കൾ മുതൽ ശനി വരെ" },
    time: { en: "During the time of Holy Mass", ml: "വി. കുർബാനയുടെ സമയത്ത്" },
  },
  {
    day: secondSunday,
    time: { en: "4:00 PM to 7:00 PM", ml: "വൈകിട്ട് 4:00 മുതൽ 7:00 വരെ" },
  },
  {
    day: { en: "By Appointment", ml: "മുൻകൂട്ടി അറിയിച്ച്" },
    time: { en: "Contact the priest directly", ml: "വൈദികനെ നേരിട്ട് ബന്ധപ്പെടുക" },
  },
];

const vachabhishekaSayanam: { day: Text; time: Text }[] = [
  {
    day: secondSunday,
    time: { en: "5:00 PM to 9:00 PM", ml: "വൈകിട്ട് 5:00 മുതൽ രാത്രി 9:00 വരെ" },
  },
];

export default function Programs() {
  const { lang, tr } = useLanguage();
  return (
    <Box>
      <Box sx={{ textAlign: "center", py: { xs: 4, md: 4 }, px: 3 }}>
        <ScrollReveal>
          <Chip
            label={tr(text.chip)}
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
            {tr(text.title)}
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
                            {tr(category)}
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
                              label={formatClock(t, lang)}
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
              // Phones: the Join button drops to its own full-width row.
              flexWrap: { xs: "wrap", sm: "nowrap" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2,
            }}
          >
            <InfoOutlinedIcon
              sx={{ color: "#1d4ed8", flexShrink: 0, mt: 0.3 }}
            />
            <Typography
              sx={{
                color: "#475569",
                fontSize: "0.925rem",
                lineHeight: 1.75,
                flex: 1,
                minWidth: 0,
              }}
            >
              {tr(text.specialMasses)}
            </Typography>
            <Button
              aria-label={tr(text.joinLabel)}
              href="#"
              target="_blank"
              startIcon={<WhatsappIcon />}
              sx={{
                background: "rgba(29,78,216,0.08)",
                border: "1px solid rgba(29,78,216,0.15)",
                color: "#1d4ed8",
                ml: { xs: 0, sm: "auto" },
                width: { xs: "100%", sm: "auto" },
                flexShrink: 0,
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
                {tr(text.join)}
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
                label={tr(text.sacrament)}
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
                {tr(text.confessionTitle)}
              </Typography>
            </Box>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Card sx={glassCard}>
              <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                {confessions.map((c, i) => (
                  <Box key={i}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        py: 2,
                        gap: 2,
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#334155", fontWeight: 500 }}>
                        {tr(c.day)}
                      </Typography>
                      <Typography
                        sx={{ color: "#1d4ed8", fontWeight: 600, textAlign: "right" }}
                      >
                        {tr(c.time)}
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
                label={tr(text.sacrament)}
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
                {tr(text.vachabhishekaTitle)}
              </Typography>
            </Box>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Card sx={glassCard}>
              <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                {vachabhishekaSayanam.map((c, i) => (
                  <Box key={i}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        py: 2,
                        gap: 2,
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#334155", fontWeight: 500 }}>
                        {tr(c.day)}
                      </Typography>
                      <Typography
                        sx={{ color: "#1d4ed8", fontWeight: 600, textAlign: "right" }}
                      >
                        {tr(c.time)}
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
