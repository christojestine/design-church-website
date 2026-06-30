import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText, Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavigationBarLogo from "../assets/images/Navigation Bar Logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Mass Times", path: "/mass-times" },
  { label: "About", path: "/about" },
  { label: "Ministries", path: "/ministries" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

export function Navigation() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

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
          boxShadow: "0 2px 20px rgba(29,78,216,0.08), 0 1px 0 rgba(29,78,216,0.06)",
        }}
      >
        <Toolbar sx={{ maxWidth: 1280, width: "100%", mx: "auto", px: { xs: 2, md: 4 }, gap: 1 }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex", alignItems: "center", gap: 1.5,
              textDecoration: "none", mr: "auto",
              "&:hover .logo-icon": {
                filter: "drop-shadow(0 0 10px rgba(29,78,216,0.6))",
                transform: "scale(1.18) rotateY(15deg)",
              },
            }}
          >
            <Box
              component="img"
              src={NavigationBarLogo}
              alt="Church Logo"
              className="logo-icon"
              sx={{
                height: 68, width: "auto",
                transition: "all 0.4s ease",
                filter: "drop-shadow(0 2px 6px rgba(29,78,216,0.25))",
              }}
            />
            <Box>
              <Typography sx={{
                fontWeight: 800, fontSize: "1.1rem",
                color: "#0f172a",
                letterSpacing: "-0.01em", lineHeight: 1.2,
              }}>
                St.Mary's Forane Church Chalakudy
              </Typography>
            </Box>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.25 }}>
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={active ? {
                    background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
                    color: "white",
                    boxShadow: "0 4px 16px rgba(29,78,216,0.35)",
                    px: 2, py: 0.8, borderRadius: "10px",
                    "&:hover": {
                      background: "linear-gradient(135deg, #1e40af, #1d4ed8)",
                      boxShadow: "0 6px 20px rgba(29,78,216,0.45)",
                    },
                  } : {
                    color: "#475569",
                    px: 2, py: 0.8, borderRadius: "10px",
                    "&:hover": {
                      color: "#1d4ed8",
                      background: "rgba(29,78,216,0.07)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { md: "none" }, color: "#1d4ed8" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
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
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ color: "#1d4ed8", fontWeight: 700, fontSize: "0.9rem" }}>Menu</Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#475569" }}>
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
                    background: active ? "linear-gradient(135deg, rgba(29,78,216,0.12), rgba(37,99,235,0.08))" : "transparent",
                    border: active ? "1px solid rgba(29,78,216,0.2)" : "1px solid transparent",
                    "&:hover": { background: "rgba(29,78,216,0.07)" },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: { color: active ? "#1d4ed8" : "#475569", fontWeight: active ? 700 : 500, fontSize: "0.95rem" },
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
