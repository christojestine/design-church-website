import type { SxProps, Theme } from "@mui/material/styles";

export const glassCard: SxProps<Theme> = {
  background: "rgba(255,255,255,0.6)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.85)",
  borderRadius: "20px",
  boxShadow: "0 4px 24px rgba(30,64,175,0.07), 0 1px 3px rgba(0,0,0,0.05)",
  transition: "all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "&:hover": {
    background: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(29,78,216,0.2)",
    boxShadow: "0 16px 48px rgba(29,78,216,0.14), 0 4px 12px rgba(0,0,0,0.06)",
    transform: "translateY(-8px) perspective(800px) rotateX(1.5deg)",
  },
};

export const imageBox: SxProps<Theme> = {
  borderRadius: "20px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.85)",
  boxShadow: "0 12px 40px rgba(29,78,216,0.12)",
  transition: "all 0.4s ease",
  "&:hover": {
    boxShadow: "0 20px 60px rgba(29,78,216,0.2)",
    transform: "scale(1.02) perspective(1000px) rotateY(2deg)",
  },
};

export const inputFieldSx: SxProps<Theme> = {
  "& .MuiOutlinedInput-root": {
    background: "rgba(255,255,255,0.5)",
    "& fieldset": { borderColor: "rgba(29,78,216,0.18)" },
    "&:hover fieldset": { borderColor: "rgba(29,78,216,0.35)" },
    "&.Mui-focused fieldset": {
      borderColor: "#1d4ed8",
      boxShadow: "0 0 0 3px rgba(29,78,216,0.08)",
    },
  },
  "& .MuiInputLabel-root": { color: "#94a3b8" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#1d4ed8" },
  "& .MuiOutlinedInput-input": { color: "#0f172a" },
};
