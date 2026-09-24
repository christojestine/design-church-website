import React from "react";
import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  Chip,
  Button,
  Zoom,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import { useLanguage, type Text } from "../../i18n/LanguageContext";

const labels = {
  profile: { en: "PRIEST PROFILE", ml: "വൈദിക വിവരങ്ങൾ" },
  birth: { en: "Date of Birth", ml: "ജനനത്തീയതി" },
  feast: { en: "Feast Day", ml: "നാമഹേതുക തിരുനാൾ" },
  ordination: { en: "Date of Ordination", ml: "പൗരോഹിത്യ സ്വീകരണം" },
  homeParish: { en: "Home Parish", ml: "സ്വന്തം ഇടവക" },
} satisfies Record<string, Text>;

export interface Priest {
  name: Text;
  role: Text;
  color: string;
  photo: string;
  dateofbirth: string;
  dateofordination: string;
  homeparish: Text;
  feastday: Text;
  currentposition: Text;
}

interface PriestProfileDialogProps {
  open: boolean;
  onClose: () => void;
  onExited?: () => void;
  priest: Priest;
}

const PriestDetailsModal = ({
  open,
  onClose,
  onExited,
  priest,
}: PriestProfileDialogProps) => {
  const { tr } = useLanguage();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slots={{
        transition: Zoom,
      }}
      transitionDuration={{ enter: 380, exit: 180 }}
      slotProps={{
        transition: { onExited } as object,
        paper: {
          sx: {
            borderRadius: 2,
            overflow: "hidden",
            background: "rgba(255,255,255,0.97)",
            boxShadow: "0 24px 80px rgba(20, 40, 80, 0.25)",
          },
        },
      }}
    >
      {/* Top accent */}
      <Box
        sx={{
          height: 6,
          background: "linear-gradient(90deg, #1d4ed8, #2563eb, #60a5fa)",
        }}
      />

      <DialogContent sx={{ p: { xs: 3, md: 5 } }}>
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            backgroundColor: "#f1f5f9",
            "&:hover": {
              backgroundColor: "#e2e8f0",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Header */}
        <Stack spacing={1.5} sx={{ alignItems: "center" }}>
          <Chip
            label={tr(labels.profile)}
            size="small"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              color: "#15803d",
              backgroundColor: "#dcfce7",
            }}
          />

          <Avatar
            src={priest.photo}
            alt={tr(priest.name)}
            sx={{
              width: 150,
              height: 150,
              border: "5px solid white",
              boxShadow: "0 8px 30px rgba(30,64,175,0.2)",
              backgroundColor: "#dbeafe",
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              textAlign: "center",
              color: "#172033",
              fontFamily: '"Noto Serif Malayalam", Georgia, serif',
            }}
          >
            {tr(priest.name)}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: "#2563eb",
              fontWeight: 700,
            }}
          >
            {tr(priest.role)}
          </Typography>
        </Stack>

        <Divider sx={{ my: 4 }} />

        {/* Information */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <InfoCard
              icon={<CakeOutlinedIcon />}
              label={tr(labels.birth)}
              value={priest.dateofbirth}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <InfoCard
              icon={<CalendarMonthOutlinedIcon />}
              label={tr(labels.feast)}
              value={tr(priest.feastday)}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <InfoCard
              icon={<VolunteerActivismOutlinedIcon />}
              label={tr(labels.ordination)}
              value={priest.dateofordination}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <InfoCard
              icon={<ChurchOutlinedIcon />}
              label={tr(labels.homeParish)}
              value={tr(priest.homeparish)}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.2,
        height: "100%",
        borderRadius: 3,
        border: "1px solid #e2e8f0",
        backgroundColor: "#ffffff",
        transition: "all 0.25s ease",

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px rgba(15,23,42,0.08)",
          borderColor: "#bfdbfe",
        },
      }}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2563eb",
            backgroundColor: "#eff6ff",
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "#64748b",
              fontWeight: 600,
            }}
          >
            {label}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#172033",
              fontWeight: 700,
              mt: 0.3,
            }}
          >
            {value}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default PriestDetailsModal;
