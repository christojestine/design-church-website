import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router";
import HomeIcon from "@mui/icons-material/Home";

export default function NotFound() {
  return (
    <Box sx={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      minHeight: "70vh", textAlign: "center", px: 3,
    }}>
      <Typography sx={{
        fontSize: { xs: "6rem", md: "9rem" },
        fontWeight: 900,
        background: "linear-gradient(135deg, #1d4ed8, #7c3aed, #b45309)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1,
        mb: 2,
      }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ color: "#0f172a", fontWeight: 700, mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography sx={{ color: "#64748b", fontSize: "1.1rem", mb: 5, maxWidth: 440, lineHeight: 1.75 }}>
        The page you're looking for doesn't exist or has been moved. Let's get you back home.
      </Typography>
      <Button
        component={Link} to="/"
        variant="contained"
        size="large"
        startIcon={<HomeIcon />}
        sx={{ px: 4 }}
      >
        Back to Home
      </Button>
    </Box>
  );
}
