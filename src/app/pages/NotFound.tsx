import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import { useLanguage, type Text } from "../i18n/LanguageContext";

const text = {
  title: { en: "Page Not Found", ml: "പേജ് കണ്ടെത്താനായില്ല" },
  body: {
    en: "The page you're looking for doesn't exist or has been moved. Let's get you back home.",
    ml: "നിങ്ങൾ തിരയുന്ന പേജ് നിലവിലില്ല, അല്ലെങ്കിൽ മാറ്റിയിരിക്കുന്നു. ഹോം പേജിലേക്ക് മടങ്ങാം.",
  },
  back: { en: "Back to Home", ml: "ഹോം പേജിലേക്ക്" },
} satisfies Record<string, Text>;

export default function NotFound() {
  const { tr } = useLanguage();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center",
        px: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "6rem", md: "9rem" },
          fontWeight: 900,
          background: "linear-gradient(135deg, #1d4ed8, #7c3aed, #b45309)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          mb: 2,
        }}
      >
        404
      </Typography>
      <Typography
        variant="h4"
        sx={{ color: "#0f172a", fontWeight: 700, mb: 2 }}
      >
        {tr(text.title)}
      </Typography>
      <Typography
        sx={{
          color: "#64748b",
          fontSize: "1.1rem",
          mb: 5,
          maxWidth: 440,
          lineHeight: 1.75,
        }}
      >
        {tr(text.body)}
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        startIcon={<HomeIcon />}
        sx={{ px: 4 }}
      >
        {tr(text.back)}
      </Button>
    </Box>
  );
}
