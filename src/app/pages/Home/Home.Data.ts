import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChurchHelicamView from "../../assets/images/1.webp";
import ChurchAltar from "../../assets/images/2.webp";
import ChurchFrontView from "../../assets/images/3.webp";
import ChurchGrotto from "../../assets/images/4.webp";
import type { Text } from "../../i18n/LanguageContext";


export const massSchedule = [
  {
    day: "Sunday",
    times: ["6:00 AM", "7:30 AM", "9:30 AM", "5:00 PM", "7:00 PM"],
  },
  { day: "Mon – Fri", times: ["6:00 AM", "7:15 AM", "5:00 PM", "7:00 PM"] },
];

export const ministries: {
  Icon: typeof FavoriteIcon;
  title: Text;
  description: Text;
  color: string;
  iconColor: string;
}[] = [
  {
    Icon: FavoriteIcon,
    title: { en: "Outreach", ml: "സാമൂഹിക സേവനം" },
    description: {
      en: "Serving our community through acts of compassion and care.",
      ml: "കരുണയും കരുതലും നിറഞ്ഞ പ്രവൃത്തികളിലൂടെ സമൂഹത്തെ സേവിക്കുന്നു.",
    },
    color: "#fee2e2",
    iconColor: "#dc2626",
  },
  {
    Icon: GroupsIcon,
    title: { en: "Youth Ministry", ml: "യുവജന ശുശ്രൂഷ" },
    description: {
      en: "Empowering the next generation to grow in faith and fellowship.",
      ml: "വിശ്വാസത്തിലും കൂട്ടായ്മയിലും വളരാൻ പുതുതലമുറയെ ശക്തിപ്പെടുത്തുന്നു.",
    },
    color: "#dbeafe",
    iconColor: "#1d4ed8",
  },
  {
    Icon: MenuBookIcon,
    title: { en: "Bible Study", ml: "ബൈബിൾ പഠനം" },
    description: {
      en: "Deepening our understanding of Scripture together.",
      ml: "വിശുദ്ധ ഗ്രന്ഥത്തെക്കുറിച്ചുള്ള അറിവ് ഒരുമിച്ച് ആഴപ്പെടുത്തുന്നു.",
    },
    color: "#fef3c7",
    iconColor: "#b45309",
  },
];

export const heroSlides: { src: string; alt: Text; label: Text }[] = [
  {
    src: ChurchHelicamView,
    alt: { en: "Aerial view of the church", ml: "പള്ളിയുടെ ആകാശദൃശ്യം" },
    label: { en: "House of God", ml: "ദൈവാലയം" },
  },
  {
    src: ChurchAltar,
    alt: { en: "The church altar", ml: "പള്ളിയിലെ അൾത്താര" },
    label: { en: "Sacred Interior", ml: "ദേവാലയത്തിനുള്ളിൽ" },
  },
  {
    src: ChurchFrontView,
    alt: { en: "Front view of the church", ml: "പള്ളിയുടെ മുൻവശം" },
    label: { en: "Evening Prayer", ml: "സന്ധ്യാപ്രാർത്ഥന" },
  },
  {
    src: ChurchGrotto,
    alt: { en: "The Marian grotto", ml: "മരിയൻ ഗ്രോട്ടോ" },
    label: { en: "Grotto Shrine", ml: "ഗ്രോട്ടോ" },
  },
];
