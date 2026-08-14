import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import { ScrollReveal } from "../../components/ScrollReveal";
import ChurchFrontView from "../../assets/images/3.webp";

const glassCard = {
  background: "rgba(255,255,255,0.6)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.85)",
  borderRadius: "22px",
  boxShadow: "0 4px 24px rgba(30,64,175,0.07)",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "&:hover": {
    background: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(29,78,216,0.2)",
    boxShadow: "0 16px 48px rgba(29,78,216,0.13)",
    transform: "translateY(-8px) perspective(800px) rotateX(1.5deg)",
  },
};

const organizationSections = [
  {
    title: "Parish Under Forane",
    items: [
      "St. Antony’s Church, Perambra",
      "St. Joseph’s Church, Aloor",
      "Our Lady of Grace Church, Aloor (West)",
      "Little Flower Church, Potta",
      "Our Lady of Rosary Church, Karoor",
      "Our Lady of Fathima Church, Vellanchira",
      "Our Lady of Grace Church, Thuruthiparambu",
      "Our Lady of Perpetual Help Church, West Chalakudy",
      "St. Sebastian’s Church, Thachudaparambu",
      "St. Joseph’s Church, North Chalakudy",
      "St. Antony’s Church, Kottatt",
      "Our Lady of Perpetual Help Church, Koodapuzha",
      "Our Lady of Lourdes Church, Elinjipra",
      "St. Francis Assisi Church, Bethlehem-Elinjipra",
      "St. Joseph’s Church, Mettipadam",
      "St. George Church, Pariyaram",
      "St. Mary’s, Thessery",
    ],
    accent: "#f59e0b",
  },
  {
    title: "Main Chapels (Kurishe Palli)",
    items: [
      "St. Mary's Chapel, Chenathunad",
      "Our Lady of Lourdes Chapel, Mariyapuram",
    ],
    accent: "#1d4ed8",
  },
  {
    title: "Chapels",
    items: [
      "Sacred Heart Chapel (Church Compound)",
      "St. Mary's Chapel (South Bazaar)",
      "St. Mary's Chapel (Chenathunad)",
      "St. Roch's Chapel (Govt. Hospital)",
      "St. Sebastian's Chapel (Vettukadavu)",
      "St. Sebastian's Chapel (Idukoodu)",
      "St. Sebastian's Chapel (Market Road)",
      "St. Joseph's Chapel (Koodapuzha)",
      "St. Sebastian's Chapel (Near ITI Puthuparambu)",
      "St. Antony's Chapel (Opposite KSRTC)",
      "Cross Chapel - West Bazaar",
      "Holy Cross - Railway Station",
    ],
    accent: "#7c3aed",
  },
  {
    title: "Schools Under Church",
    items: ["St.Mary's LP School Chalakudy"],
    accent: "#16a34a",
  },
];

export default function Organizations() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          minHeight: 360,
          px: 3,
          py: { xs: 8, md: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0 }}>
          <Box
            component="img"
            src={ChurchFrontView}
            alt="St. Mary's Forane Church"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.7), rgba(59,130,246,0.45))",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            background: "rgba(255,255,255,0.52)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.85)",
            borderRadius: "26px",
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 5 },
            maxWidth: 860,
            boxShadow: "0 12px 50px rgba(29,78,216,0.12)",
          }}
        >
          <Chip
            label="Our Organisation"
            sx={{
              background: "rgba(29,78,216,0.08)",
              color: "#1d4ed8",
              fontWeight: 700,
              mb: 2,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.4rem", md: "3.8rem" },
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.03em",
            }}
          >
            St. Mary's Forane Church
          </Typography>
          <Typography
            sx={{
              color: "#334155",
              fontSize: "1.04rem",
              mt: 1.5,
              lineHeight: 1.7,
            }}
          >
            A community rooted in faith, service, and pastoral care.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: 3, py: { xs: 4, md: 8 } }}>
        <Box sx={{ maxWidth: 1400, mx: "auto" }}>
          <Box
            sx={{
              position: "relative",
              mb: 5,
              pb: 1,
              "&::before": {
                content: '""',
                position: "absolute",
                left: "10%",
                right: "10%",
                top: 30,
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(29,78,216,0.15), rgba(29,78,216,0.8), rgba(29,78,216,0.15))",
                borderRadius: 999,
              },
            }}
          >
            <Grid
              container
              spacing={4}
              sx={{ position: "relative", zIndex: 1 }}
            >
              {organizationSections.map((section, index) => (
                <Grid key={section.title} size={{ xs: 12, md: 3 }}>
                  <ScrollReveal delay={index * 0.12} style={{ height: "100%" }}>
                    <Card
                      sx={{
                        ...glassCard,
                        height: "100%",
                        position: "relative",
                        borderTop: `4px solid ${section.accent}`,
                        overflow: "visible",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: -18,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: section.accent,
                          border: "4px solid rgba(255,255,255,0.95)",
                          boxShadow: `0 0 0 6px ${section.accent}20`,
                          zIndex: 2,
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: -48,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 2,
                          height: 30,
                          background:
                            "linear-gradient(180deg, rgba(29,78,216,0.08), rgba(29,78,216,0.7), rgba(29,78,216,0.08))",
                          borderRadius: 999,
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            color: "#0f172a",
                            textAlign: "center",
                            mb: 2.5,
                            fontSize: { xs: "1.15rem", md: "1.3rem" },
                          }}
                        >
                          {section.title}
                        </Typography>

                        <List disablePadding sx={{ m: 0 }}>
                          {section.items.map((item) => (
                            <ListItem
                              key={item}
                              disableGutters
                              sx={{
                                alignItems: "flex-start",
                                py: 0.7,
                                pl: 0,
                              }}
                            >
                              <ListItemIcon sx={{ minWidth: 20, mt: 0.6 }}>
                                <CircleIcon
                                  sx={{
                                    fontSize: 8,
                                    color: section.accent,
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={item}
                                slotProps={{
                                  primary: {
                                    sx: {
                                      color: "#334155",
                                      fontSize: "0.94rem",
                                      lineHeight: 1.7,
                                      fontWeight: 500,
                                    },
                                  },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
