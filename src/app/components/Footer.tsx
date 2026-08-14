import { Link } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import NavigationBarLogo from "../assets/images/Navigation Bar Logo.webp";

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Mass Times", path: "/programs" },
  { label: "Ministries", path: "/ministries" },
  { label: "Events", path: "/events" },
  { label: "Organizations", path: "/organizations" },
  { label: "Media", path: "/media" },
  { label: "Contact Us", path: "/contact" },
];

const socialIcons = [
  {
    Icon: FacebookIcon,
    label: "Facebook",
    link: "https://www.facebook.com/chalakudymarianpilgrimcentre/",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    link: "https://www.instagram.com/stmarysforanechurchchalakudy/?hl=en",
  },
  {
    Icon: YouTubeIcon,
    label: "YouTube",
    link: "https://www.youtube.com/@StMarysForaneChurchChalakudy",
  },
  {
    Icon: WhatsappIcon,
    label: "WhatsApp",
    link: "https://wa.me/7012711766",
  },
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
              <Box
                component="img"
                src={NavigationBarLogo}
                alt="Church Logo"
                className="logo-icon"
                sx={{
                  height: 68,
                  width: "auto",
                  transition: "all 0.4s ease",
                  filter: "drop-shadow(0 2px 6px rgba(29,78,216,0.25))",
                }}
              />
              <Typography
                sx={{
                  fontFamily: '"Cinzel", "Georgia", serif',
                  fontWeight: 800,
                  color: "#0f172a",
                  fontSize: "1rem",
                }}
              >
                St.Mary's Forane Church Chalakudy
              </Typography>
            </Box>
            <Typography
              sx={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.8 }}
            >
              St. Mary’s Forane Church, Chalakudy, is one of the 10 Foranes or
              deaneries under the Diocese of Irinjalakuda, which was established
              in 1978 by the bifurcation of Thrissur Diocese.
              <Box component="span" sx={{ fontweight: 700 }}>
                DIOCESE OF IRINJALAKUDA, THRISSUR-KERALA-INDIA
              </Box>
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              sx={{
                color: "#1d4ed8",
                fontFamily: '"Cinzel", "Georgia", serif',
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
                fontFamily: '"Cinzel", "Georgia", serif',
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
                  text: " St. Mary's Forane Church (Shrine of the Nativity of Our Lady), located in Chalakudy, Thrissur district, Kerala 680307.",
                  multiline: true,
                },
                {
                  Icon: PhoneIcon,
                  text: "0480 2701614, 2701314",
                  multiline: false,
                },
                {
                  Icon: EmailOutlinedIcon,
                  text: "stmaryscky@gmail.com",
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
                fontFamily: '"Cinzel", "Georgia", serif',
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
              {socialIcons.map(({ Icon, label, link }) => (
                <IconButton
                  key={label}
                  aria-label={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
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
