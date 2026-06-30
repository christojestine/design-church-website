import { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, TextField, Button, Chip, Alert } from "@mui/material";
import { ScrollReveal } from "../components/ScrollReveal";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";

const glassCard = {
  background: "rgba(255,255,255,0.6)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.85)",
  borderRadius: "20px",
  boxShadow: "0 4px 24px rgba(30,64,175,0.07)",
};

const inputSx = {
  "& .MuiOutlinedInput-root": {
    background: "rgba(255,255,255,0.5)",
    "& fieldset": { borderColor: "rgba(29,78,216,0.18)" },
    "&:hover fieldset": { borderColor: "rgba(29,78,216,0.35)" },
    "&.Mui-focused fieldset": { borderColor: "#1d4ed8", boxShadow: "0 0 0 3px rgba(29,78,216,0.08)" },
  },
  "& .MuiInputLabel-root": { color: "#94a3b8" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#1d4ed8" },
  "& .MuiOutlinedInput-input": { color: "#0f172a" },
};

const info = [
  { Icon: LocationOnIcon, label: "Address", value: "123 Church Street\nCommunity City, ST 12345", multiline: true, bg: "#dbeafe", color: "#1d4ed8" },
  { Icon: PhoneIcon, label: "Phone", value: "(555) 123-4567", multiline: false, bg: "#dcfce7", color: "#16a34a" },
  { Icon: EmailOutlinedIcon, label: "Email", value: "info@gracecommunity.org", multiline: false, bg: "#fef3c7", color: "#b45309" },
  { Icon: AccessTimeIcon, label: "Office Hours", value: "Mon–Fri: 9:00 AM – 5:00 PM\nSat–Sun: 8:00 AM – 1:00 PM", multiline: true, bg: "#ede9fe", color: "#7c3aed" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box>
      <Box sx={{ textAlign: "center", py: { xs: 8, md: 10 }, px: 3 }}>
        <ScrollReveal>
          <Chip label="Get In Touch" sx={{ background: "rgba(29,78,216,0.08)", color: "#1d4ed8", fontWeight: 600, mb: 2 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4rem" }, fontWeight: 800, color: "#0f172a", mb: 2, letterSpacing: "-0.03em" }}>
            Contact Us
          </Typography>
          <Typography sx={{ color: "#475569", fontSize: "1.15rem" }}>
            We'd love to hear from you. Reach out and we'll get back to you soon.
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
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", mb: 4, fontSize: { xs: "1.5rem", md: "1.8rem" } }}>
                      Send a Message
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
                        Thank you! Your message has been sent. We'll get back to you within 1–2 business days.
                      </Alert>
                    ) : (
                      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                        <Grid container spacing={2.5}>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField fullWidth label="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} sx={inputSx} />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField fullWidth label="Email Address" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} sx={inputSx} />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2.5}>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField fullWidth label="Phone (optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} sx={inputSx} />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField fullWidth label="Subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} sx={inputSx} />
                          </Grid>
                        </Grid>
                        <TextField fullWidth label="Message" multiline rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} sx={inputSx} />
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{ alignSelf: "flex-start", px: 4 }}
                        >
                          Send Message
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
                  <ScrollReveal key={label} direction="right" delay={i * 0.1}>
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
                      <CardContent sx={{ p: 3, display: "flex", gap: 2.5, alignItems: multiline ? "flex-start" : "center" }}>
                        <Box sx={{ width: 48, height: 48, borderRadius: "13px", background: bg, border: `1px solid ${color}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 4px 12px ${color}15` }}>
                          <Icon sx={{ fontSize: 22, color }} />
                        </Box>
                        <Box>
                          <Typography sx={{ color, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", mb: 0.5 }}>{label}</Typography>
                          <Typography sx={{ color: "#334155", lineHeight: 1.7, fontSize: "0.92rem", whiteSpace: "pre-line" }}>{value}</Typography>
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
