import { Link } from "react-router";
import { Box, Typography, Grid, Divider, IconButton } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsappIcon from "@mui/icons-material/WhatsApp";

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Mass Times", path: "/mass-times" },
  { label: "Ministries", path: "/ministries" },
  { label: "Media", path: "/media" },
  { label: "Contact Us", path: "/contact" },
];

const socialIcons = [
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: YouTubeIcon, label: "YouTube" },
  { Icon: WhatsappIcon, label: "WhatsApp" },
];

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "rgba(255, 255, 255, 0.68)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(255,255,255,0.9)",
        boxShadow: "0 -4px 30px rgba(29,78,216,0.06)",
        mt: "auto",
      }}
    >
      <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 3, md: 6 }, py: 7 }}>
        <Grid container spacing={5}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
            >
              <AccountBalanceIcon
                sx={{
                  fontSize: 28,
                  color: "#1d4ed8",
                  filter: "drop-shadow(0 2px 6px rgba(29,78,216,0.3))",
                }}
              />
              <Typography
                sx={{ fontWeight: 800, color: "#0f172a", fontSize: "1rem" }}
              >
                St.Mary's Forane Church Chalakudy
              </Typography>
            </Box>
            <Typography
              sx={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.8 }}
            >
              A welcoming community of faith, hope, and love. Join us as we grow
              together in Christ.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              sx={{
                color: "#1d4ed8",
                fontWeight: 700,
                mb: 2.5,
                letterSpacing: "0.1em",
                fontSize: "0.75rem",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Box
                    component={Link}
                    to={link.path}
                    sx={{
                      color: "#475569",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      display: "inline-block",
                      transition: "all 0.25s ease",
                      "&:hover": { color: "#1d4ed8", pl: 0.75 },
                    }}
                  >
                    {link.label}
                  </Box>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              sx={{
                color: "#1d4ed8",
                fontWeight: 700,
                mb: 2.5,
                letterSpacing: "0.1em",
                fontSize: "0.75rem",
                textTransform: "uppercase",
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                {
                  Icon: LocationOnIcon,
                  text: "123 Church Street\nCommunity City, ST 12345",
                  multiline: true,
                },
                { Icon: PhoneIcon, text: "(555) 123-4567", multiline: false },
                {
                  Icon: EmailOutlinedIcon,
                  text: "info@gracecommunity.org",
                  multiline: false,
                },
              ].map(({ Icon, text, multiline }) => (
                <Box
                  key={text}
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: multiline ? "flex-start" : "center",
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: 17,
                      color: "#1d4ed8",
                      mt: multiline ? 0.25 : 0,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: "0.875rem",
                      whiteSpace: "pre-line",
                      lineHeight: 1.6,
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Social */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                color: "#1d4ed8",
                fontWeight: 700,
                mb: 2.5,
                letterSpacing: "0.1em",
                fontSize: "0.75rem",
                textTransform: "uppercase",
              }}
            >
              Connect With Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {socialIcons.map(({ Icon, label }) => (
                <IconButton
                  key={label}
                  aria-label={label}
                  href="#"
                  sx={{
                    width: 42,
                    height: 42,
                    background: "rgba(29,78,216,0.08)",
                    border: "1px solid rgba(29,78,216,0.15)",
                    color: "#1d4ed8",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(29,78,216,0.16)",
                      boxShadow: "0 4px 16px rgba(29,78,216,0.25)",
                      transform: "translateY(-3px) scale(1.1)",
                      border: "1px solid rgba(29,78,216,0.3)",
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 5, mb: 3, borderColor: "rgba(29,78,216,0.1)" }} />

        <Typography
          sx={{ textAlign: "center", color: "#94a3b8", fontSize: "0.82rem" }}
        >
          &copy; {new Date().getFullYear()} St.Mary's Forane Church Chalakudy .
          All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
