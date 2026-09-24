import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TranslateIcon from "@mui/icons-material/Translate";
import { useLanguage } from "../i18n/LanguageContext";

/** Small icon-only switch. The tooltip names the language you'd switch *to*, in that language. */
export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const next = lang === "en" ? "ml" : "en";
  const label = next === "ml" ? "Switch to Malayalam" : "ഇംഗ്ലീഷിലേക്ക് മാറുക";

  return (
    <Tooltip title={label} enterTouchDelay={0}>
      <IconButton
        onClick={() => setLang(next)}
        aria-label={label}
        size="small"
        sx={{
          flexShrink: 0,
          width: 30,
          height: 30,
          color: "#1d4ed8",
          border: "1px solid rgba(29,78,216,0.18)",
          background: "rgba(29,78,216,0.05)",
          transition: "all 0.2s ease",
          "&:hover": {
            background: "rgba(29,78,216,0.1)",
            border: "1px solid rgba(29,78,216,0.3)",
          },
        }}
      >
        <TranslateIcon sx={{ fontSize: "0.95rem" }} />
      </IconButton>
    </Tooltip>
  );
}
