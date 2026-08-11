import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChurchHelicamView from "../../assets/images/1.webp";
import ChurchAltar from "../../assets/images/2.webp";
import ChurchFrontView from "../../assets/images/3.webp";
import ChurchGrotto from "../../assets/images/4.webp";


export const massSchedule = [
  {
    day: "Sunday",
    times: ["6:00 AM", "7:30 AM", "9:30 AM", "5:00 PM", "7:00 PM"],
  },
  { day: "Mon – Fri", times: ["6:00 AM", "7:15 AM", "5:00 PM", "7:00 PM"] },
];

export const ministries = [
  {
    Icon: FavoriteIcon,
    title: "Outreach",
    description: "Serving our community through acts of compassion and care.",
    color: "#fee2e2",
    iconColor: "#dc2626",
  },
  {
    Icon: GroupsIcon,
    title: "Youth Ministry",
    description:
      "Empowering the next generation to grow in faith and fellowship.",
    color: "#dbeafe",
    iconColor: "#1d4ed8",
  },
  {
    Icon: MenuBookIcon,
    title: "Bible Study",
    description: "Deepening our understanding of Scripture together.",
    color: "#fef3c7",
    iconColor: "#b45309",
  },
];

export const upcomingEvents = [
  {
    title: "Parish Council",
    date: "August, 2026",
    time: "6:00 PM",
    location: "Parish Hall",
  },
  {
    title: "Retreat for Parish",
    date: "June 10, 2026",
    time: "7:00 PM",
    location: "Community Room",
  },
  {
    title: "Choir Practice",
    date: "June 11, 2026",
    time: "7:30 PM",
    location: "Church",
  },
];

export const heroSlides = [
  { src: ChurchHelicamView, alt: "Slide 1", label: "House of God" },
  { src: ChurchAltar, alt: "Slide 2", label: "Sacred Interior" },
  { src: ChurchFrontView, alt: "Slide 3", label: "Evening Prayer" },
  { src: ChurchGrotto, alt: "Slide 4", label: "Grotto Shrine" },
];