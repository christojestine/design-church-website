import HomeIcon from "@mui/icons-material/Home";
import SavingsIcon from "@mui/icons-material/Savings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChurchIcon from "@mui/icons-material/Church";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ElderlyIcon from "@mui/icons-material/Elderly";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import type { Text } from "../../i18n/LanguageContext";

export type Ministry = {
  Icon: typeof FavoriteIcon;
  title: Text;
  tagline?: Text;
  description: Text;
  items?: Text[];
  bg: string;
  color: string;
};

export type MinistryGroup = {
  title: Text;
  intro?: Text;
  ministries: Ministry[];
};

export const ministryGroups: MinistryGroup[] = [
  {
    title: { en: "Charitable Projects", ml: "ജീവകാരുണ്യ പദ്ധതികൾ" },
    ministries: [
      {
        Icon: HomeIcon,
        title: {
          en: "Koodorukkan Koode Undu – A Home for the Homeless",
          ml: "കൂടൊരുക്കാൻ കൂടെയുണ്ട് – ഭവനരഹിതർക്ക് ഒരു ഭവനം",
        },
        tagline: {
          en: "\"We are with you in building a home.\"",
          ml: "\"വീടൊരുക്കാൻ ഞങ്ങൾ കൂടെയുണ്ട്.\"",
        },
        description: {
          en: "Koodorukkan Koode Undu is our parish housing project that provides homes for homeless families. Funded by the church, the project helps families move from insecurity to the dignity and safety of a home of their own. Parishioners and well-wishers are warmly invited to contribute and become part of this mission of hope.",
          ml: "ഭവനരഹിതരായ കുടുംബങ്ങൾക്ക് വീട് നിർമ്മിച്ചു നൽകുന്ന നമ്മുടെ ഇടവകയുടെ ഭവന പദ്ധതിയാണ് കൂടൊരുക്കാൻ കൂടെയുണ്ട്. ദേവാലയത്തിന്റെ സാമ്പത്തിക സഹായത്തോടെ നടപ്പാക്കുന്ന ഈ പദ്ധതി, അരക്ഷിതാവസ്ഥയിൽ നിന്ന് സ്വന്തം വീടിന്റെ അന്തസ്സിലേക്കും സുരക്ഷിതത്വത്തിലേക്കും കുടുംബങ്ങളെ നയിക്കുന്നു. ഈ പ്രത്യാശയുടെ ദൗത്യത്തിൽ സംഭാവന നൽകി പങ്കുചേരാൻ ഇടവകാംഗങ്ങളെയും അഭ്യുദയകാംക്ഷികളെയും സ്നേഹപൂർവം ക്ഷണിക്കുന്നു.",
        },
        bg: "#dbeafe",
        color: "#1d4ed8",
      },
      {
        Icon: SavingsIcon,
        title: {
          en: "Chillarakkaran Padhathi – Dialysis Support Program",
          ml: "ചില്ലറക്കാരൻ പദ്ധതി – ഡയാലിസിസ് സഹായ പദ്ധതി",
        },
        tagline: { en: "Every coin counts.", ml: "ഓരോ നാണയവും വിലപ്പെട്ടതാണ്." },
        description: {
          en: "Through Chillarakkaran Padhathi, parishioners collect coins and small contributions, which are offered to the church and distributed to dialysis patients who need financial support for their treatment. Small acts of generosity, gathered together, bring real relief to patients and their families.",
          ml: "ചില്ലറക്കാരൻ പദ്ധതിയിലൂടെ ഇടവകാംഗങ്ങൾ ശേഖരിക്കുന്ന നാണയങ്ങളും ചെറിയ സംഭാവനകളും ദേവാലയത്തിൽ സമർപ്പിക്കുകയും, ചികിത്സയ്ക്ക് സാമ്പത്തിക സഹായം ആവശ്യമുള്ള ഡയാലിസിസ് രോഗികൾക്ക് വിതരണം ചെയ്യുകയും ചെയ്യുന്നു. ഒന്നിച്ചു ചേർക്കുന്ന ചെറിയ ഔദാര്യങ്ങൾ രോഗികൾക്കും അവരുടെ കുടുംബങ്ങൾക്കും വലിയ ആശ്വാസമാകുന്നു.",
        },
        bg: "#dcfce7",
        color: "#16a34a",
      },
      {
        Icon: FavoriteIcon,
        title: { en: "Marriage Help Fund", ml: "വിവാഹ സഹായ നിധി" },
        description: {
          en: "Through this fund, the faithful can offer gold coins or sarees to Mother Mary as a gift of devotion. These offerings are then used to support families who need help with the expenses of their children's marriage, so that every couple can begin their life together with dignity and joy.",
          ml: "ഈ നിധിയിലൂടെ വിശ്വാസികൾക്ക് ഭക്തിയുടെ കാഴ്ചയായി പരിശുദ്ധ അമ്മയ്ക്ക് സ്വർണ്ണനാണയങ്ങളോ സാരികളോ സമർപ്പിക്കാം. മക്കളുടെ വിവാഹച്ചെലവുകൾക്ക് സഹായം ആവശ്യമുള്ള കുടുംബങ്ങളെ പിന്തുണയ്ക്കാൻ ഈ കാഴ്ചകൾ ഉപയോഗിക്കുന്നു; അങ്ങനെ ഓരോ ദമ്പതികൾക്കും അന്തസ്സോടെയും സന്തോഷത്തോടെയും ഒരുമിച്ചുള്ള ജീവിതം ആരംഭിക്കാൻ കഴിയുന്നു.",
        },
        bg: "#fee2e2",
        color: "#dc2626",
      },
    ],
  },
  {
    title: { en: "Youth Ministries", ml: "യുവജന ശുശ്രൂഷകൾ" },
    intro: {
      en: "Our parish has a vibrant young community, active through three youth movements.",
      ml: "മൂന്ന് യുവജന പ്രസ്ഥാനങ്ങളിലൂടെ സജീവമായ ഊർജ്ജസ്വലമായ ഒരു യുവസമൂഹം നമ്മുടെ ഇടവകയിലുണ്ട്.",
    },
    ministries: [
      {
        Icon: GroupsIcon,
        title: { en: "Jesus Youth", ml: "ജീസസ് യൂത്ത്" },
        description: {
          en: "An international Catholic youth movement that helps young people grow in prayer, the Word of God and missionary zeal.",
          ml: "പ്രാർത്ഥനയിലും ദൈവവചനത്തിലും പ്രേഷിത തീക്ഷ്ണതയിലും വളരാൻ യുവജനങ്ങളെ സഹായിക്കുന്ന അന്താരാഷ്ട്ര കത്തോലിക്കാ യുവജന പ്രസ്ഥാനം.",
        },
        bg: "#dbeafe",
        color: "#1d4ed8",
      },
      {
        Icon: EmojiPeopleIcon,
        title: {
          en: "KCYM (Kerala Catholic Youth Movement)",
          ml: "കെ.സി.വൈ.എം. (കേരള കാത്തലിക് യൂത്ത് മൂവ്മെന്റ്)",
        },
        description: {
          en: "Forms young people as leaders in faith, service and social responsibility.",
          ml: "വിശ്വാസത്തിലും സേവനത്തിലും സാമൂഹിക ഉത്തരവാദിത്വത്തിലും യുവജനങ്ങളെ നേതാക്കളായി രൂപപ്പെടുത്തുന്നു.",
        },
        bg: "#fff7ed",
        color: "#ea580c",
      },
      {
        Icon: Diversity3Icon,
        title: {
          en: "CLC (Christian Life Community)",
          ml: "സി.എൽ.സി. (ക്രിസ്ത്യൻ ലൈഫ് കമ്മ്യൂണിറ്റി)",
        },
        description: {
          en: "Guides young people to integrate faith and daily life through prayer, reflection and community.",
          ml: "പ്രാർത്ഥനയിലൂടെയും ധ്യാനത്തിലൂടെയും കൂട്ടായ്മയിലൂടെയും വിശ്വാസവും അനുദിന ജീവിതവും സമന്വയിപ്പിക്കാൻ യുവജനങ്ങളെ നയിക്കുന്നു.",
        },
        bg: "#ede9fe",
        color: "#7c3aed",
      },
    ],
  },
  {
    title: { en: "Liturgical Ministries", ml: "ആരാധനാ ശുശ്രൂഷകൾ" },
    ministries: [
      {
        Icon: MusicNoteIcon,
        title: { en: "Choir", ml: "ഗായകസംഘം" },
        description: {
          en: "Our dedicated choir leads the parish in worship through sacred music. It includes both a Junior Choir and a Senior Choir, along with our talented instrumentalists, who together enrich every liturgy and celebration.",
          ml: "സമർപ്പിതരായ നമ്മുടെ ഗായകസംഘം വിശുദ്ധ സംഗീതത്തിലൂടെ ഇടവകയെ ആരാധനയിൽ നയിക്കുന്നു. ജൂനിയർ ഗായകസംഘവും സീനിയർ ഗായകസംഘവും കഴിവുറ്റ വാദ്യോപകരണ വിദഗ്ധരും ഒത്തുചേർന്ന് ഓരോ ആരാധനാക്രമത്തെയും ആഘോഷത്തെയും സമ്പന്നമാക്കുന്നു.",
        },
        bg: "#ede9fe",
        color: "#7c3aed",
      },
      {
        Icon: ChurchIcon,
        title: { en: "Altar Servers", ml: "അൾത്താര ശുശ്രൂഷികൾ" },
        description: {
          en: "Our altar servers are a dedicated team who serve at Holy Mass and all the spiritual activities of the church, assisting the celebrant with reverence and devotion.",
          ml: "വി. കുർബാനയിലും ദേവാലയത്തിലെ എല്ലാ ആത്മീയ ശുശ്രൂഷകളിലും ഭക്തിയോടും ആദരവോടും കൂടെ കാർമ്മികനെ സഹായിക്കുന്ന സമർപ്പിത സംഘമാണ് നമ്മുടെ അൾത്താര ശുശ്രൂഷികൾ.",
        },
        bg: "#fef3c7",
        color: "#b45309",
      },
    ],
  },
  {
    title: { en: "Faith Formation", ml: "വിശ്വാസ പരിശീലനം" },
    ministries: [
      {
        Icon: SchoolIcon,
        title: { en: "Catechism", ml: "മതബോധനം" },
        description: {
          en: "Faith formation for our children is carried out through three catechism units. Through regular classes, our children grow in knowledge of the faith, the sacraments and Christian values.",
          ml: "മൂന്ന് മതബോധന യൂണിറ്റുകളിലൂടെയാണ് നമ്മുടെ കുട്ടികളുടെ വിശ്വാസ പരിശീലനം നടക്കുന്നത്. പതിവ് ക്ലാസുകളിലൂടെ കുട്ടികൾ വിശ്വാസത്തിലും കൂദാശകളിലും ക്രൈസ്തവ മൂല്യങ്ങളിലുമുള്ള അറിവിൽ വളരുന്നു.",
        },
        items: [
          { en: "Parish Unit", ml: "ഇടവക യൂണിറ്റ്" },
          { en: "Mariyapuram Unit", ml: "മരിയാപുരം യൂണിറ്റ്" },
          { en: "SH Unit", ml: "എസ്.എച്ച്. യൂണിറ്റ്" },
        ],
        bg: "#fce7f3",
        color: "#db2777",
      },
      {
        Icon: MenuBookIcon,
        title: { en: "Bible Study Class", ml: "ബൈബിൾ പഠന ക്ലാസ്" },
        description: {
          en: "Our weekly Bible Study Class invites parishioners to journey deeper into the Word of God. It is a space to read, reflect and share, helping each of us become more rooted in faith.",
          ml: "ദൈവവചനത്തിലേക്ക് കൂടുതൽ ആഴത്തിൽ യാത്ര ചെയ്യാൻ നമ്മുടെ പ്രതിവാര ബൈബിൾ പഠന ക്ലാസ് ഇടവകാംഗങ്ങളെ ക്ഷണിക്കുന്നു. വായിക്കാനും ധ്യാനിക്കാനും പങ്കുവയ്ക്കാനുമുള്ള ഈ വേദി നമ്മെ ഓരോരുത്തരെയും വിശ്വാസത്തിൽ കൂടുതൽ വേരൂന്നാൻ സഹായിക്കുന്നു.",
        },
        bg: "#fef3c7",
        color: "#b45309",
      },
      {
        Icon: ElderlyIcon,
        title: { en: "Senior Citizens' Forum", ml: "മുതിർന്ന പൗരന്മാരുടെ വേദി" },
        description: {
          en: "Our senior citizens' group brings together the elders of our parish for fellowship, prayer and shared activities. We honour their wisdom and ensure they remain an active and cherished part of our church community.",
          ml: "ഇടവകയിലെ മുതിർന്നവരെ കൂട്ടായ്മയ്ക്കും പ്രാർത്ഥനയ്ക്കും പൊതുപ്രവർത്തനങ്ങൾക്കുമായി ഒന്നിപ്പിക്കുന്ന സംഘമാണിത്. അവരുടെ ജ്ഞാനത്തെ നാം ആദരിക്കുകയും അവർ ഇടവക സമൂഹത്തിന്റെ സജീവവും പ്രിയപ്പെട്ടതുമായ ഭാഗമായി തുടരുന്നുവെന്ന് ഉറപ്പാക്കുകയും ചെയ്യുന്നു.",
        },
        bg: "#dcfce7",
        color: "#16a34a",
      },
    ],
  },
  {
    title: { en: "Volunteering & Care", ml: "സന്നദ്ധ സേവനവും പരിചരണവും" },
    ministries: [
      {
        Icon: VolunteerActivismIcon,
        title: { en: "Marian Task Force", ml: "മരിയൻ ടാസ്ക് ഫോഴ്സ്" },
        description: {
          en: "A volunteer team ready to serve the parish and the wider community in times of need.",
          ml: "ആവശ്യഘട്ടങ്ങളിൽ ഇടവകയെയും പൊതുസമൂഹത്തെയും സേവിക്കാൻ സന്നദ്ധമായ സന്നദ്ധപ്രവർത്തക സംഘം.",
        },
        bg: "#e0f2fe",
        color: "#0284c7",
      },
      {
        Icon: HealthAndSafetyIcon,
        title: { en: "Palliative Care Unit", ml: "പാലിയേറ്റീവ് കെയർ യൂണിറ്റ്" },
        description: {
          en: "Volunteers who visit and care for the bedridden and chronically ill, offering comfort, companionship and practical support to patients and their families.",
          ml: "കിടപ്പുരോഗികളെയും ദീർഘകാല രോഗികളെയും സന്ദർശിച്ച് പരിചരിക്കുകയും, രോഗികൾക്കും കുടുംബങ്ങൾക്കും ആശ്വാസവും കൂട്ടും പ്രായോഗിക സഹായവും നൽകുകയും ചെയ്യുന്ന സന്നദ്ധപ്രവർത്തകർ.",
        },
        bg: "#fee2e2",
        color: "#dc2626",
      },
    ],
  },
  {
    title: { en: "Associations & Communities", ml: "സംഘടനകളും കൂട്ടായ്മകളും" },
    ministries: [
      {
        Icon: HandshakeIcon,
        title: { en: "St. Vincent de Paul Society", ml: "വി. വിൻസെന്റ് ഡി പോൾ സൊസൈറ്റി" },
        description: {
          en: "Serves the poor and needy of the parish through personal visits and charitable assistance.",
          ml: "നേരിട്ടുള്ള സന്ദർശനങ്ങളിലൂടെയും ധർമ്മസഹായങ്ങളിലൂടെയും ഇടവകയിലെ ദരിദ്രരെയും ആവശ്യക്കാരെയും സേവിക്കുന്നു.",
        },
        bg: "#dbeafe",
        color: "#1d4ed8",
      },
      {
        Icon: SelfImprovementIcon,
        title: { en: "Darshana Sabha", ml: "ദർശന സഭ" },
        description: {
          en: "A community of the faithful devoted to prayer, spiritual growth and service.",
          ml: "പ്രാർത്ഥനയ്ക്കും ആത്മീയ വളർച്ചയ്ക്കും സേവനത്തിനുമായി സമർപ്പിതരായ വിശ്വാസികളുടെ കൂട്ടായ്മ.",
        },
        bg: "#ede9fe",
        color: "#7c3aed",
      },
      {
        Icon: FamilyRestroomIcon,
        title: { en: "Mathrusangham", ml: "മാതൃസംഘം" },
        description: {
          en: "Our mothers' association, bringing together the mothers of the parish in prayer, fellowship and service to families.",
          ml: "ഇടവകയിലെ അമ്മമാരെ പ്രാർത്ഥനയിലും കൂട്ടായ്മയിലും കുടുംബങ്ങൾക്കുള്ള സേവനത്തിലും ഒന്നിപ്പിക്കുന്ന നമ്മുടെ മാതൃസംഘടന.",
        },
        bg: "#fce7f3",
        color: "#db2777",
      },
    ],
  },
];
