import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ElderlyIcon from "@mui/icons-material/Elderly";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SchoolIcon from "@mui/icons-material/School";
import type { Text } from "../../i18n/LanguageContext";

export const ministries: {
  Icon: typeof FavoriteIcon;
  title: Text;
  description: Text;
  bg: string;
  color: string;
}[] = [
  {
    Icon: FavoriteIcon,
    title: { en: "Community Outreach", ml: "സാമൂഹിക സേവനം" },
    description: {
      en: "Serving our neighbors through food pantries, clothing drives, and support programs.",
      ml: "ഭക്ഷ്യവിതരണം, വസ്ത്രശേഖരണം, സഹായ പദ്ധതികൾ എന്നിവയിലൂടെ അയൽക്കാരെ സേവിക്കുന്നു.",
    },
    bg: "#fee2e2",
    color: "#dc2626",
  },
  {
    Icon: GroupsIcon,
    title: { en: "Youth Ministry", ml: "യുവജന ശുശ്രൂഷ" },
    description: {
      en: "A dynamic program empowering teens and young adults to grow in faith and leadership.",
      ml: "കൗമാരക്കാരെയും യുവജനങ്ങളെയും വിശ്വാസത്തിലും നേതൃത്വത്തിലും വളരാൻ പ്രാപ്തരാക്കുന്ന ഊർജ്ജസ്വലമായ പ്രവർത്തനം.",
    },
    bg: "#dbeafe",
    color: "#1d4ed8",
  },
  {
    Icon: MenuBookIcon,
    title: { en: "Bible Study", ml: "ബൈബിൾ പഠനം" },
    description: {
      en: "Weekly in-depth study of Scripture in a supportive and welcoming small group setting.",
      ml: "സ്നേഹപൂർവം സ്വാഗതം ചെയ്യുന്ന ചെറുകൂട്ടായ്മകളിൽ ആഴ്ചതോറും വിശുദ്ധ ഗ്രന്ഥത്തിന്റെ ആഴമേറിയ പഠനം.",
    },
    bg: "#fef3c7",
    color: "#b45309",
  },
  {
    Icon: MusicNoteIcon,
    title: { en: "Choir & Worship", ml: "ഗായകസംഘവും ആരാധനയും" },
    description: {
      en: "Lifting voices in praise through traditional hymns and contemporary worship music.",
      ml: "പരമ്പരാഗത ഗീതങ്ങളിലൂടെയും ആധുനിക ആരാധനാഗാനങ്ങളിലൂടെയും ദൈവത്തെ സ്തുതിക്കുന്നു.",
    },
    bg: "#ede9fe",
    color: "#7c3aed",
  },
  {
    Icon: ChildCareIcon,
    title: { en: "Children's Ministry", ml: "കുട്ടികളുടെ ശുശ്രൂഷ" },
    description: {
      en: "Nurturing the faith of our youngest members with age-appropriate programs.",
      ml: "പ്രായത്തിനനുസരിച്ചുള്ള പരിപാടികളിലൂടെ കുഞ്ഞുങ്ങളുടെ വിശ്വാസം വളർത്തുന്നു.",
    },
    bg: "#e0f2fe",
    color: "#0284c7",
  },
  {
    Icon: ElderlyIcon,
    title: { en: "Senior Ministry", ml: "മുതിർന്നവരുടെ ശുശ്രൂഷ" },
    description: {
      en: "Providing community, care, and spiritual support for our senior congregation members.",
      ml: "ഇടവകയിലെ മുതിർന്ന അംഗങ്ങൾക്ക് കൂട്ടായ്മയും കരുതലും ആത്മീയ പിന്തുണയും നൽകുന്നു.",
    },
    bg: "#dcfce7",
    color: "#16a34a",
  },
  {
    Icon: VolunteerActivismIcon,
    title: { en: "Volunteer Corps", ml: "സന്നദ്ധ സേവന സംഘം" },
    description: {
      en: "Coordinating volunteers who give their time and talents to serve within and beyond our church.",
      ml: "ദേവാലയത്തിനകത്തും പുറത്തും സമയവും കഴിവുകളും സേവനത്തിനായി നൽകുന്ന സന്നദ്ധപ്രവർത്തകരെ ഏകോപിപ്പിക്കുന്നു.",
    },
    bg: "#fff7ed",
    color: "#ea580c",
  },
  {
    Icon: SchoolIcon,
    title: { en: "Religious Education", ml: "മതബോധനം" },
    description: {
      en: "Faith formation programs for children, teens, and adults seeking deeper understanding.",
      ml: "വിശ്വാസത്തെക്കുറിച്ച് ആഴത്തിൽ അറിയാൻ ആഗ്രഹിക്കുന്ന കുട്ടികൾക്കും കൗമാരക്കാർക്കും മുതിർന്നവർക്കുമുള്ള വിശ്വാസപരിശീലന പരിപാടികൾ.",
    },
    bg: "#fce7f3",
    color: "#db2777",
  },
];
