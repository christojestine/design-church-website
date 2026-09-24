import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import { ScrollReveal } from "../components/ScrollReveal";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import { glassCard, inputFieldSx } from "../../styles/style";
import { useLanguage, type Text } from "../i18n/LanguageContext";

const text = {
  chip: { en: "Get In Touch", ml: "ബന്ധപ്പെടാം" },
  title: { en: "Contact Us", ml: "ഞങ്ങളെ ബന്ധപ്പെടുക" },
  intro: {
    en: "We'd love to hear from you. Reach out and we'll get back to you soon.",
    ml: "നിങ്ങളുടെ സന്ദേശങ്ങൾ ഞങ്ങൾ സന്തോഷത്തോടെ സ്വീകരിക്കുന്നു. ബന്ധപ്പെടൂ, ഞങ്ങൾ എത്രയും വേഗം മറുപടി നൽകാം.",
  },
  formTitle: { en: "Send a Message", ml: "സന്ദേശം അയയ്ക്കുക" },
  thanks: {
    en: "Thank you! Your message has been sent. We'll get back to you within 1–2 business days.",
    ml: "നന്ദി! നിങ്ങളുടെ സന്ദേശം ലഭിച്ചു. 1–2 പ്രവൃത്തി ദിവസങ്ങൾക്കുള്ളിൽ ഞങ്ങൾ മറുപടി നൽകും.",
  },
  name: { en: "Full Name", ml: "പൂർണ്ണ നാമം" },
  email: { en: "Email Address", ml: "ഇമെയിൽ വിലാസം" },
  phone: { en: "Phone (optional)", ml: "ഫോൺ (ആവശ്യമെങ്കിൽ)" },
  subject: { en: "Subject", ml: "വിഷയം" },
  message: { en: "Message", ml: "സന്ദേശം" },
  send: { en: "Send Message", ml: "സന്ദേശം അയയ്ക്കുക" },
} satisfies Record<string, Text>;

const inputSx = inputFieldSx;

const info: {
  Icon: typeof LocationOnIcon;
  label: Text;
  value: Text;
  multiline: boolean;
  bg: string;
  color: string;
}[] = [
  {
    Icon: LocationOnIcon,
    label: { en: "Address", ml: "വിലാസം" },
    value: {
      en: "St. Mary's Forane Church (Shrine of the Nativity of Our Lady),\nlocated in Chalakudy, Thrissur district, Kerala 680307.",
      ml: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി (പരിശുദ്ധ ദൈവമാതാവിന്റെ പിറവിത്തിരുനാൾ ദേവാലയം),\nചാലക്കുടി, തൃശ്ശൂർ ജില്ല, കേരളം 680307.",
    },
    multiline: true,
    bg: "#dbeafe",
    color: "#1d4ed8",
  },
  {
    Icon: PhoneIcon,
    label: { en: "Phone", ml: "ഫോൺ" },
    value: { en: "0480 2701614, 2701314", ml: "0480 2701614, 2701314" },
    multiline: false,
    bg: "#dcfce7",
    color: "#16a34a",
  },
  {
    Icon: EmailOutlinedIcon,
    label: { en: "Email", ml: "ഇമെയിൽ" },
    value: { en: "stmaryscky@gmail.com", ml: "stmaryscky@gmail.com" },
    multiline: false,
    bg: "#fef3c7",
    color: "#b45309",
  },
  {
    Icon: AccessTimeIcon,
    label: { en: "Office Hours", ml: "ഓഫീസ് സമയം" },
    value: { en: "9:00 AM – 5:00 PM (Mon – Sat)", ml: "രാവിലെ 9:00 – വൈകിട്ട് 5:00 (തിങ്കൾ – ശനി)" },
    multiline: false,
    bg: "#ede9fe",
    color: "#7c3aed",
  },
];

export default function Contact() {
  const { tr } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box>
      <Box sx={{ textAlign: "center", py: { xs: 8, md: 10 }, px: 3 }}>
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
          <Typography sx={{ color: "#475569", fontSize: "1.15rem" }}>
            {tr(text.intro)}
          </Typography>
        </ScrollReveal>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 }, px: 3, pb: { xs: 10, md: 14 } }}>
        <Box sx={{ maxWidth: 1100, mx: "auto" }}>
          <Grid container spacing={5} sx={{ alignItems: "flex-start" }}>
            {/* Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <ScrollReveal direction="left">
                <Card sx={glassCard}>
                  <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: "#0f172a",
                        mb: 4,
                        fontSize: { xs: "1.5rem", md: "1.8rem" },
                      }}
                    >
                      {tr(text.formTitle)}
                    </Typography>

                    {submitted ? (
                      <Alert
                        severity="success"
                        sx={{
                          background: "rgba(22,163,74,0.07)",
                          border: "1px solid rgba(22,163,74,0.2)",
                          color: "#15803d",
                          borderRadius: "12px",
                          "& .MuiAlert-icon": { color: "#16a34a" },
                        }}
                      >
                        {tr(text.thanks)}
                      </Alert>
                    ) : (
                      <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2.5,
                        }}
                      >
                        <Grid container spacing={2.5}>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              fullWidth
                              label={tr(text.name)}
                              required
                              value={form.name}
                              onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                              sx={inputSx}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              fullWidth
                              label={tr(text.email)}
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                              }
                              sx={inputSx}
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2.5}>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              fullWidth
                              label={tr(text.phone)}
                              value={form.phone}
                              onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                              }
                              sx={inputSx}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              fullWidth
                              label={tr(text.subject)}
                              required
                              value={form.subject}
                              onChange={(e) =>
                                setForm({ ...form, subject: e.target.value })
                              }
                              sx={inputSx}
                            />
                          </Grid>
                        </Grid>
                        <TextField
                          fullWidth
                          label={tr(text.message)}
                          multiline
                          rows={5}
                          required
                          value={form.message}
                          onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                          }
                          sx={inputSx}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{ alignSelf: "flex-start", px: 4 }}
                        >
                          {tr(text.send)}
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {info.map(({ Icon, label, value, multiline, bg, color }, i) => (
                  <ScrollReveal key={label.en} direction="right" delay={i * 0.1}>
                    <Card
                      sx={{
                        ...glassCard,
                        "&:hover": {
                          background: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(29,78,216,0.2)",
                          boxShadow: "0 12px 36px rgba(29,78,216,0.12)",
                          transform: "translateY(-4px)",
                        },
                        transition: "all 0.35s ease",
                      }}
                    >
                      <CardContent
                        sx={{
                          p: 3,
                          display: "flex",
                          gap: 2.5,
                          alignItems: multiline ? "flex-start" : "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "13px",
                            background: bg,
                            border: `1px solid ${color}20`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            boxShadow: `0 4px 12px ${color}15`,
                          }}
                        >
                          <Icon sx={{ fontSize: 22, color }} />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              color,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              mb: 0.5,
                            }}
                          >
                            {tr(label)}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#334155",
                              lineHeight: 1.7,
                              fontSize: "0.92rem",
                              whiteSpace: "pre-line",
                            }}
                          >
                            {tr(value)}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
