import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1d4ed8", light: "#3b82f6", dark: "#1e40af" },
    secondary: { main: "#b45309", light: "#d97706", dark: "#92400e" },
    background: { default: "#eff6ff", paper: "rgba(255,255,255,0.7)" },
    text: { primary: "#0f172a", secondary: "#475569" },
    divider: "rgba(30,64,175,0.12)",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.03em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 12,
          padding: "10px 24px",
          transition: "all 0.3s ease",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
          boxShadow: "0 4px 20px rgba(29,78,216,0.35)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(135deg, #1e40af, #1d4ed8)",
            boxShadow: "0 6px 28px rgba(29,78,216,0.5)",
            transform: "translateY(-2px)",
          },
        },
        outlinedPrimary: {
          borderColor: "rgba(29,78,216,0.4)",
          color: "#1d4ed8",
          "&:hover": {
            background: "rgba(29,78,216,0.07)",
            borderColor: "#1d4ed8",
            boxShadow: "0 4px 16px rgba(29,78,216,0.18)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #b45309, #d97706)",
          boxShadow: "0 4px 20px rgba(180,83,9,0.3)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(135deg, #92400e, #b45309)",
            boxShadow: "0 6px 28px rgba(180,83,9,0.45)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.85)",
          borderRadius: 20,
          boxShadow: "0 4px 24px rgba(30,64,175,0.07), 0 1px 3px rgba(0,0,0,0.06)",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
