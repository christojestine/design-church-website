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
import { ministries } from "./Ministries.Data";

export default function Ministries() {
  return (
    <Box>
      <Box sx={{ textAlign: "center", py: { xs: 8, md: 10 }, px: 3 }}>
        <ScrollReveal>
          <Chip
            label="Get Involved"
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
            Our Ministries
          </Typography>
          <Typography
            sx={{
              color: "#475569",
              fontSize: "1.15rem",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Discover meaningful ways to connect, grow, and serve within our
            church community
          </Typography>
        </ScrollReveal>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 }, px: 3 }}>
        <Box sx={{ maxWidth: 1280, mx: "auto" }}>
          <Grid container spacing={3}>
            {ministries.map(({ Icon, title, description, bg, color }, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
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
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#64748b",
                          fontSize: "0.88rem",
                          lineHeight: 1.75,
                          flex: 1,
                        }}
                      >
                        {description}
                      </Typography>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
