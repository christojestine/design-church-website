import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { ScrollReveal } from "../../components/ScrollReveal";
import PriestDetailsModal from "./PriestDetailsModal";
import type { Priest } from "./PriestDetailsModal";

import frVarghese from "../../assets/images/Fr.Varghese.webp";
import frAlbin from "../../assets/images/Fr.Albin.webp";
import frJoyal from "../../assets/images/Fr.Joyal.webp";
import frSinto from "../../assets/images/Fr.Sinto.webp";

export default function ParishTeam() {
  const [open, setOpen] = useState(false);
  const [selectedPriest, setSelectedPriest] = useState<Priest | null>(null);

  const openModal = (priest: Priest) => {
    setSelectedPriest(priest);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  const glassCard = {
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.85)",
    borderRadius: "20px",
    boxShadow: "0 4px 24px rgba(30,64,175,0.07)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    "&:hover": {
      background: "rgba(255,255,255,0.8)",
      border: "1px solid rgba(29,78,216,0.2)",
      boxShadow: "0 16px 48px rgba(29,78,216,0.13)",
      transform: "translateY(-8px) perspective(800px) rotateX(1.5deg)",
    },
  };

  const priest = [
    {
      name: "Fr. Varghese Pathadan",
      role: "Vicar",
      color: "#dbeafe",
      photo: frVarghese,
      dateofbirth: "02/10/1958",
      dateofordination: "31/12/1985",
      homeparish: "Poovathussery",
      feastday: "24/04/2026",
      currentposition: "Vicar of St. Mary’s Forane Church Chalakudy",
    },
    {
      name: "Fr. Albin Pudussery ",
      role: "Asst Vicar",
      color: "#ede9fe",
      photo: frAlbin,
      dateofbirth: "02/10/1958",
      dateofordination: "30-12-2024",
      homeparish: "Poovathussery",
      feastday: "24/04/2026",
      currentposition: "Vicar of St. Mary’s Forane Church Chalakudy",
    },
    {
      name: "Fr. Joyal",
      role: "Asst Vicar",
      color: "#fef3c7",
      photo: frJoyal,
      dateofbirth: "02/10/1958",
      dateofordination: "31/12/1985",
      homeparish: "Poovathussery",
      feastday: "24/04/2026",
      currentposition: "Vicar of St. Mary’s Forane Church Chalakudy",
    },
    {
      name: "Fr. Sinto",
      role: "Asst Vicar",
      color: "#fef3c7",
      photo: frSinto,
      dateofbirth: "02/10/1958",
      dateofordination: "31/12/1985",
      homeparish: "Poovathussery",
      feastday: "24/04/2026",
      currentposition: "Vicar of St. Mary’s Forane Church Chalakudy",
    },
  ];
  const parishCouncil = [
    {
      name: "Fr. Varghese Pathadan",
      role: "Vicar",
      color: "#dbeafe",
      photo: frVarghese,
    },
    {
      name: "Fr. Albin",
      role: "Asst Vicar",
      color: "#ede9fe",
      photo: frAlbin,
    },
    {
      name: "Fr. Joyal",
      role: "Asst Vicar",
      color: "#fef3c7",
      photo: frJoyal,
    },
    {
      name: "Fr. Sinto",
      role: "Asst Vicar",
      color: "#fef3c7",
      photo: frSinto,
    },
    {
      name: "Fr. Sinto",
      role: "Asst Vicar",
      color: "#fef3c7",
      photo: frSinto,
    },
  ];
  return (
    <Box sx={{ py: { xs: 4, md: 5 }, px: 3, pb: { xs: 10, md: 14 } }}>
      {selectedPriest && (
        <PriestDetailsModal
          open={open}
          priest={selectedPriest}
          onClose={closeModal}
          onExited={() => setSelectedPriest(null)}
        />
      )}
      <Box sx={{ mx: "auto", maxWidth: 1400 }}>
        <ScrollReveal>
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Chip
              label="Our Priest Team"
              sx={{
                background: "rgba(22,163,74,0.08)",
                color: "#16a34a",
                fontWeight: 600,
                mb: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.6rem" },
                fontWeight: 800,
                color: "#0f172a",
                mb: 1.5,
              }}
            >
              Priest
            </Typography>
            <Typography sx={{ color: "#64748b", fontSize: "1.05rem" }}>
              Priest team of St. Mary’s Forane Church Chalakudy, who are
              dedicated to serving the spiritual needs of the parish community.
            </Typography>
          </Box>
        </ScrollReveal>
        {/* Row 1 — Vicar centred */}
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {priest.slice(0, 1).map((member, i) => (
            <Grid key={i} size={{ xs: 12, sm: 8, md: 4 }}>
              <ScrollReveal delay={i * 0.12} style={{ height: "100%" }}>
                <Card
                  sx={{
                    ...glassCard,
                    height: "100%",
                    textAlign: "center",
                  }}
                  onClick={() => openModal(member)}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                        mx: "auto",
                        mb: 2.5,
                        border: "3px solid rgba(255,255,255,0.9)",
                        boxShadow: "0 4px 16px rgba(29,78,216,0.12)",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#0f172a",
                        fontWeight: 700,
                        mb: 0.5,
                        fontSize: "1rem",
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#1d4ed8",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        mb: 1.5,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>

        {/* Row 2 — remaining staff (Asst Vicars) */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {priest.slice(1).map((member, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <ScrollReveal delay={(i + 1) * 0.12} style={{ height: "100%" }}>
                <Card
                  sx={{
                    ...glassCard,
                    height: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => openModal(member)}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                        mx: "auto",
                        mb: 2.5,
                        border: "3px solid rgba(255,255,255,0.9)",
                        boxShadow: "0 4px 16px rgba(29,78,216,0.12)",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#0f172a",
                        fontWeight: 700,
                        mb: 0.5,
                        fontSize: "1rem",
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#1d4ed8",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        mb: 1.5,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mx: "auto", mt: "8px", pt: "10px" }}>
        <ScrollReveal>
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Chip
              label="Our Parish Council"
              sx={{
                background: "rgba(22,163,74,0.08)",
                color: "#16a34a",
                fontWeight: 600,
                mb: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.6rem" },
                fontWeight: 800,
                color: "#0f172a",
                mb: 1.5,
              }}
            >
              Parish Council
            </Typography>
            <Typography sx={{ color: "#64748b", fontSize: "1.05rem" }}>
              The Parish Council of St. Mary’s Forane Church, Chalakudy, works
              hard to manage daily tasks and support the community's spiritual
              and practical needs
            </Typography>
          </Box>
        </ScrollReveal>
        {/* Row 2 — remaining staff (Asst Vicars) */}
        <Grid
          container
          spacing={4}
          sx={{ mt: 4, mx: "auto", maxWidth: 1300, justifyContent: "center" }}
        >
          {parishCouncil.map((member, i) => (
            <Grid key={i} size={{ xs: 6, md: 2 }}>
              <ScrollReveal delay={(i + 1) * 0.12} style={{ height: "100%" }}>
                <Card
                  sx={{ ...glassCard, height: "100%", textAlign: "center" }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 96,
                        height: 96,
                        borderRadius: "50%",
                        mx: "auto",
                        mb: 2.5,
                        border: "3px solid rgba(255,255,255,0.9)",
                        boxShadow: "0 4px 16px rgba(29,78,216,0.12)",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#0f172a",
                        fontWeight: 700,
                        mb: 0.5,
                        fontSize: "1rem",
                      }}
                    >
                      {member.name}
                    </Typography>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
