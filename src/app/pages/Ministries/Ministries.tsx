import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { Link } from "react-router";
import { ScrollReveal } from "../../components/ScrollReveal";
import { glassCard } from "../../../styles/style";
import { ministryGroups } from "./Ministries.Data";
import { useLanguage, type Text } from "../../i18n/LanguageContext";

const text = {
  chip: { en: "Get Involved", ml: "പങ്കുചേരാം" },
  title: { en: "Our Ministries & Outreach", ml: "ശുശ്രൂഷകളും സേവനങ്ങളും" },
  intro: {
    en: "Our parish is a living community of faith, rooted in prayer and expressed through service. Through our charitable projects, ministries and associations, we strive to reach every member of our parish family and to extend Christ's love to those in need.",
    ml: "പ്രാർത്ഥനയിൽ വേരൂന്നി സേവനത്തിലൂടെ പ്രകടമാകുന്ന വിശ്വാസത്തിന്റെ സജീവ സമൂഹമാണ് നമ്മുടെ ഇടവക. ജീവകാരുണ്യ പദ്ധതികളിലൂടെയും ശുശ്രൂഷകളിലൂടെയും സംഘടനകളിലൂടെയും ഇടവക കുടുംബത്തിലെ ഓരോ അംഗത്തിലേക്കും എത്തിച്ചേരാനും ആവശ്യക്കാരിലേക്ക് ക്രിസ്തുവിന്റെ സ്നേഹം പകരാനും നാം പരിശ്രമിക്കുന്നു.",
  },
} satisfies Record<string, Text>;

export default function Ministries() {
  const { tr } = useLanguage();
  return (
    <Box>
      <Box sx={{ textAlign: "center", pt: { xs: 8, md: 10 }, pb: 0, px: 3 }}>
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
          <Typography
            sx={{
              color: "#475569",
              fontSize: "1.15rem",
              maxWidth: 760,
              lineHeight: 1.7,
              mx: "auto",
            }}
          >
            {tr(text.intro)}
          </Typography>
        </ScrollReveal>
      </Box>

      {ministryGroups.map((group, g) => (
        <Box
          key={g}
          sx={{
            pt: { xs: 3, md: 4 },
            pb: g === ministryGroups.length - 1 ? { xs: 4, md: 6 } : 0,
            px: 3,
          }}
        >
          <Box sx={{ maxWidth: 1200, mx: "auto" }}>
            <ScrollReveal>
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.6rem", md: "2rem" },
                    fontWeight: 800,
                    color: "#0f172a",
                  }}
                >
                  {tr(group.title)}
                </Typography>
                {group.intro && (
                  <Typography
                    sx={{
                      color: "#475569",
                      fontSize: "1rem",
                      mt: 1,
                      maxWidth: 640,
                      mx: "auto",
                    }}
                  >
                    {tr(group.intro)}
                  </Typography>
                )}
              </Box>
            </ScrollReveal>
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
              {group.ministries.map(
                (
                  { Icon, title, tagline, description, items, bg, color },
                  i,
                ) => (
                  <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                    <ScrollReveal delay={i * 0.08} style={{ height: "100%" }}>
                      <Card sx={{ ...glassCard, height: "100%" }}>
                        <CardContent
                          sx={{
                            p: 3.5,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Box
                            sx={{
                              width: 58,
                              height: 58,
                              borderRadius: "16px",
                              background: bg,
                              border: `1px solid ${color}22`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mb: 2.5,
                              boxShadow: `0 4px 12px ${color}18`,
                            }}
                          >
                            <Icon sx={{ fontSize: 28, color }} />
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
                            {tr(title)}
                          </Typography>
                          {tagline && (
                            <Typography
                              sx={{
                                color,
                                fontStyle: "italic",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                mb: 1,
                              }}
                            >
                              {tr(tagline)}
                            </Typography>
                          )}
                          <Typography
                            sx={{
                              color: "#64748b",
                              fontSize: "0.88rem",
                              lineHeight: 1.75,
                              flex: 1,
                            }}
                          >
                            {tr(description)}
                          </Typography>
                          {items && (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                                mt: 2,
                              }}
                            >
                              {items.map((item, j) => (
                                <Chip
                                  key={j}
                                  label={tr(item)}
                                  size="small"
                                  sx={{
                                    background: bg,
                                    border: `1px solid ${color}20`,
                                    color,
                                    fontWeight: 600,
                                  }}
                                />
                              ))}
                            </Box>
                          )}
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  </Grid>
                ),
              )}
            </Grid>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
