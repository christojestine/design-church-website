import { Box, Typography, Grid, Card, CardContent, Chip, Button } from "@mui/material";
import { Link } from "react-router";
import { ScrollReveal } from "../components/ScrollReveal";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ElderlyIcon from "@mui/icons-material/Elderly";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SchoolIcon from "@mui/icons-material/School";

const glassCard = {
  background: "rgba(255,255,255,0.6)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.85)",
  borderRadius: "20px",
  boxShadow: "0 4px 24px rgba(30,64,175,0.07)",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "&:hover": {
    background: "rgba(255,255,255,0.82)",
    border: "1px solid rgba(29,78,216,0.2)",
    boxShadow: "0 20px 50px rgba(29,78,216,0.14)",
    transform: "translateY(-10px) perspective(800px) rotateX(2deg)",
  },
};

const ministries = [
  { Icon: FavoriteIcon, title: "Community Outreach", description: "Serving our neighbors through food pantries, clothing drives, and support programs.", bg: "#fee2e2", color: "#dc2626" },
  { Icon: GroupsIcon, title: "Youth Ministry", description: "A dynamic program empowering teens and young adults to grow in faith and leadership.", bg: "#dbeafe", color: "#1d4ed8" },
  { Icon: MenuBookIcon, title: "Bible Study", description: "Weekly in-depth study of Scripture in a supportive and welcoming small group setting.", bg: "#fef3c7", color: "#b45309" },
  { Icon: MusicNoteIcon, title: "Choir & Worship", description: "Lifting voices in praise through traditional hymns and contemporary worship music.", bg: "#ede9fe", color: "#7c3aed" },
  { Icon: ChildCareIcon, title: "Children's Ministry", description: "Nurturing the faith of our youngest members with age-appropriate programs.", bg: "#e0f2fe", color: "#0284c7" },
  { Icon: ElderlyIcon, title: "Senior Ministry", description: "Providing community, care, and spiritual support for our senior congregation members.", bg: "#dcfce7", color: "#16a34a" },
  { Icon: VolunteerActivismIcon, title: "Volunteer Corps", description: "Coordinating volunteers who give their time and talents to serve within and beyond our church.", bg: "#fff7ed", color: "#ea580c" },
  { Icon: SchoolIcon, title: "Religious Education", description: "Faith formation programs for children, teens, and adults seeking deeper understanding.", bg: "#fce7f3", color: "#db2777" },
];

export default function Ministries() {
  return (
    <Box>
      <Box sx={{ textAlign: "center", py: { xs: 8, md: 10 }, px: 3 }}>
        <ScrollReveal>
          <Chip label="Get Involved" sx={{ background: "rgba(29,78,216,0.08)", color: "#1d4ed8", fontWeight: 600, mb: 2 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4rem" }, fontWeight: 800, color: "#0f172a", mb: 2, letterSpacing: "-0.03em" }}>
            Our Ministries
          </Typography>
          <Typography sx={{ color: "#475569", fontSize: "1.15rem", maxWidth: 600, mx: "auto" }}>
            Discover meaningful ways to connect, grow, and serve within our church community
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
                    <CardContent sx={{ p: 3.5, height: "100%", display: "flex", flexDirection: "column" }}>
                      <Box sx={{ width: 58, height: 58, borderRadius: "16px", background: bg, border: `1px solid ${color}22`, display: "flex", alignItems: "center", justifyContent: "center", mb: 2.5, boxShadow: `0 4px 12px ${color}18` }}>
                        <Icon sx={{ fontSize: 28, color }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: "#0f172a", fontWeight: 700, mb: 1.5, fontSize: "0.97rem" }}>{title}</Typography>
                      <Typography sx={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.75, flex: 1 }}>{description}</Typography>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, px: 3, textAlign: "center" }}>
        <ScrollReveal direction="scale">
          <Box sx={{
            maxWidth: 780, mx: "auto",
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            border: "1px solid rgba(255,255,255,0.9)",
            borderRadius: "28px",
            p: { xs: 5, md: 7 },
            boxShadow: "0 12px 50px rgba(29,78,216,0.1)",
            position: "relative", overflow: "hidden",
          }}>
            <Box sx={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(29,78,216,0.1), transparent)", filter: "blur(30px)", pointerEvents: "none" }} />
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0f172a", mb: 2, fontSize: { xs: "1.6rem", md: "2.2rem" } }}>
              Ready to Get Involved?
            </Typography>
            <Typography sx={{ color: "#475569", fontSize: "1.02rem", mb: 4, lineHeight: 1.75 }}>
              We'd love to help you find the right ministry fit. Contact us and we'll connect you with the right team.
            </Typography>
            <Button component={Link} to="/contact" variant="contained" size="large" sx={{ px: 5 }}>
              Contact Us
            </Button>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  );
}
