import { useState } from "react";
import { Link, useLocation } from "react-router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavigationBarLogo from "../assets/images/Navigation Bar Logo.webp";
import { useLanguage, type Text } from "../i18n/LanguageContext";
import { churchName } from "../i18n/common";
import { LanguageToggle } from "./LanguageToggle";

const navItems: { label: Text; path: string }[] = [
  { label: { en: "Home", ml: "ഹോം" }, path: "/" },
  { label: { en: "Spiritual Programs", ml: "തിരുക്കർമ്മങ്ങൾ" }, path: "/programs" },
  { label: { en: "Parish Team", ml: "ഇടവക നേതൃത്വം" }, path: "/parish-team" },
  { label: { en: "Ministries", ml: "ശുശ്രൂഷകൾ" }, path: "/ministries" },
  { label: { en: "Events", ml: "പരിപാടികൾ" }, path: "/events" },
  { label: { en: "Organizations", ml: "സ്ഥാപനങ്ങൾ" }, path: "/organizations" },
  { label: { en: "About", ml: "ഞങ്ങളെക്കുറിച്ച്" }, path: "/about" },
  { label: { en: "Media", ml: "മീഡിയ" }, path: "/media" },
  { label: { en: "Contact", ml: "ബന്ധപ്പെടുക" }, path: "/contact" },
];

export function Navigation() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { lang, tr } = useLanguage();
  // Screen width from which the full menu fits on one line (measured); below it the
  // drawer menu is used. Malayalam labels are longer, so they need a wider screen.
  const desktop = `@media (min-width:${lang === "ml" ? 1500 : 1280}px)`;

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(255, 255, 255, 0.72)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.9)",
          boxShadow:
            "0 2px 20px rgba(29,78,216,0.08), 0 1px 0 rgba(29,78,216,0.06)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: lang === "ml" ? 1600 : 1400,
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 4 },
            gap: 1,
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              mr: "auto",
              "&:hover .logo-icon": {
                filter: "drop-shadow(0 0 10px rgba(29,78,216,0.6))",
                transform: "scale(1.18) rotateY(15deg)",
              },
            }}
          >
            <Box
              component="img"
              src={NavigationBarLogo}
              alt={tr({ en: "Church Logo", ml: "പള്ളിയുടെ ലോഗോ" })}
              className="logo-icon"
              sx={{
                height: { xs: 52, sm: 68 },
                width: "auto",
                transition: "all 0.4s ease",
                filter: "drop-shadow(0 2px 6px rgba(29,78,216,0.25))",
              }}
            />
            <Box sx={{ flexShrink: 1, [desktop]: { flexShrink: 0, width: 220 } }}>
              <Typography
                sx={{
                  fontFamily: '"Cinzel", "Noto Serif Malayalam", "Georgia", serif',
                  fontWeight: 800,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  color: "#0f172a",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                {tr(churchName)}
              </Typography>
            </Box>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: "none", [desktop]: { display: "flex" }, gap: 0.25 }}>
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={
                    active
                      ? {
                          background:
                            "linear-gradient(135deg, #1d4ed8, #2563eb)",
                          color: "white",
                          boxShadow: "0 4px 16px rgba(29,78,216,0.35)",
                          px: 1,
                          py: 0.8,
                          whiteSpace: "nowrap",
                          borderRadius: "10px",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #1e40af, #1d4ed8)",
                            boxShadow: "0 6px 20px rgba(29,78,216,0.45)",
                          },
                        }
                      : {
                          color: "#475569",
                          px: 1,
                          py: 0.8,
                          whiteSpace: "nowrap",
                          borderRadius: "10px",
                          "&:hover": {
                            color: "#1d4ed8",
                            background: "rgba(29,78,216,0.07)",
                          },
                        }
                  }
                >
                  {tr(item.label)}
                </Button>
              );
            })}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ color: "#1d4ed8", [desktop]: { display: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <LanguageToggle />
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 270,
              background: "rgba(239,246,255,0.97)",
              backdropFilter: "blur(30px)",
              borderLeft: "1px solid rgba(29,78,216,0.12)",
              boxShadow: "-8px 0 40px rgba(29,78,216,0.1)",
            },
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.9rem" }}
          >
            {tr({ en: "Menu", ml: "മെനു" })}
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "#475569" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(29,78,216,0.1)" }} />
        <List sx={{ px: 1.5, py: 2 }}>
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: "10px",
                    background: active
                      ? "linear-gradient(135deg, rgba(29,78,216,0.12), rgba(37,99,235,0.08))"
                      : "transparent",
                    border: active
                      ? "1px solid rgba(29,78,216,0.2)"
                      : "1px solid transparent",
                    "&:hover": { background: "rgba(29,78,216,0.07)" },
                  }}
                >
                  <ListItemText
                    primary={tr(item.label)}
                    slotProps={{
                      primary: {
                        sx: {
                          color: active ? "#1d4ed8" : "#475569",
                          fontWeight: active ? 700 : 500,
                          fontSize: "0.95rem",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
