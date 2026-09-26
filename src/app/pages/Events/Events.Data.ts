import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChurchIcon from "@mui/icons-material/Church";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import type { Text } from "../../i18n/LanguageContext";

// Icon + colours per category, so each event only needs to name its category.
export const categoryStyles = {
  Liturgy: { Icon: ChurchIcon, bg: "#dcfce7", color: "#16a34a" },
  Feast: { Icon: CelebrationIcon, bg: "#fef3c7", color: "#b45309" },
  Devotion: { Icon: FavoriteIcon, bg: "#fce7f3", color: "#db2777" },
  Meeting: { Icon: GroupsIcon, bg: "#dbeafe", color: "#1d4ed8" },
  Formation: { Icon: MenuBookIcon, bg: "#f3e8ff", color: "#7c3aed" },
  Service: { Icon: VolunteerActivismIcon, bg: "#fee2e2", color: "#dc2626" },
  Remembrance: { Icon: LocalFloristIcon, bg: "#e0f2fe", color: "#0284c7" },
};

export type EventCategory = keyof typeof categoryStyles;

export const categoryLabels: Record<EventCategory, Text> = {
  Liturgy: { en: "Liturgy", ml: "ആരാധനക്രമം" },
  Feast: { en: "Feast", ml: "തിരുനാൾ" },
  Devotion: { en: "Devotion", ml: "ഭക്താനുഷ്ഠാനം" },
  Meeting: { en: "Meeting", ml: "യോഗം" },
  Formation: { en: "Formation", ml: "വിശ്വാസപരിശീലനം" },
  Service: { en: "Service", ml: "സേവനം" },
  Remembrance: { en: "Remembrance", ml: "അനുസ്മരണം" },
};

export interface ChurchEvent {
  title: string;
  category: EventCategory;
  description: string;
  /** First day, as "YYYY-MM-DD". */
  date: string;
  /** Last day for multi-day events, as "YYYY-MM-DD". The event is hidden once this (or `date`) has passed. */
  endDate?: string;
  time: string;
  location: string;
  /** Malayalam versions of the text fields; any field left out is shown in English. */
  ml?: Partial<Pick<ChurchEvent, "title" | "description" | "time" | "location">>;
}

const MAIN_CHURCH = "St. Mary's Forane Church";

/** Date this list was last edited, as "YYYY-MM-DD". Shown on the Events page as "Last updated";
 *  change it whenever `events` changes. */
export const eventsLastUpdated = "2026-09-26";

// Source: parish announcements dated 27 September 2026.
export const events: ChurchEvent[] = [
  // ── Sunday, 27 September ──
  {
    title: "Fifth Sunday of the Eliya–Sliva–Moses Season",
    category: "Liturgy",
    description:
      "Holy Masses today are led by Family Units 50 and 51 and the St. Vincent de Paul Society.",
    date: "2026-09-27",
    time: "All Sunday Masses",
    location: MAIN_CHURCH,
    ml: {
      title: "ഏലിയാ–സ്ലീവാ–മൂശെ കാലം അഞ്ചാം ഞായർ",
      description: "ഈ ഞായറാഴ്ചത്തെ വി. കുർബാനകൾക്ക് 50, 51 കുടുംബയൂണിറ്റുകളും സെന്റ് വിൻസെന്റ് ഡി പോൾ സംഘടനയും നേതൃത്വം നൽകുന്നു.",
      time: "എല്ലാ ഞായറാഴ്ച കുർബാനകളും",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Darshana Sabha General Body Meeting",
    category: "Meeting",
    description: "General body meeting of the Darshana Sabha.",
    date: "2026-09-27",
    time: "After the 7:30 AM Holy Mass",
    location: MAIN_CHURCH,
    ml: {
      title: "ദർശന സഭ ജനറൽബോഡി മീറ്റിംഗ്",
      description: "ദർശന സഭയുടെ ജനറൽബോഡി യോഗം.",
      time: "രാവിലെ 7:30-ന്റെ വി. കുർബാനയ്ക്കു ശേഷം",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Family Unit Gatherings",
    category: "Meeting",
    description: "Family gatherings in Family Units 46 to 64.",
    date: "2026-09-27",
    time: "As arranged by each unit",
    location: "Family Units 46–64",
    ml: {
      title: "കുടുംബസമ്മേളനങ്ങൾ",
      description: "46 മുതൽ 64 വരെയുള്ള കുടുംബയൂണിറ്റുകളിൽ കുടുംബസമ്മേളനങ്ങൾ.",
      time: "ഓരോ യൂണിറ്റും നിശ്ചയിക്കുന്ന സമയത്ത്",
      location: "കുടുംബയൂണിറ്റുകൾ 46–64",
    },
  },
  {
    title: "Rupatha Animators' Visit to Catechism",
    category: "Formation",
    description:
      "The diocesan animators' team is visiting to guide and review our faith formation activities, and the parish warmly welcomes them. Parents, please bring your children on time.",
    date: "2026-09-27",
    time: "During catechism classes",
    location: "Parish Catechism School",
    ml: {
      title: "രൂപത ആനിമേറ്റേഴ്സ് ടീമിന്റെ മതബോധന സന്ദർശനം",
      description: "നമ്മുടെ വിശ്വാസ പരിശീലന പ്രവർത്തനങ്ങൾക്ക് ആവശ്യമായ നിർദ്ദേശങ്ങൾ നൽകുന്നതിനും പ്രവർത്തനങ്ങൾ വിലയിരുത്തുന്നതിനുമായി രൂപത ആനിമേറ്റേഴ്സ് ടീം എത്തുന്നു; അവർക്ക് സ്നേഹപൂർവ്വമായ സ്വാഗതം. മാതാപിതാക്കൾ കുട്ടികളെ കൃത്യസമയത്ത് എത്തിക്കാൻ ശ്രദ്ധിക്കുക.",
      time: "മതബോധന ക്ലാസ് സമയത്ത്",
      location: "ഇടവക മതബോധന വിദ്യാലയം",
    },
  },
  {
    title: "Catechism Teachers' Meeting with Diocesan Animators",
    category: "Formation",
    description: "Meeting of the catechism teachers together with the diocesan animators' team.",
    date: "2026-09-27",
    time: "After the third Holy Mass",
    location: MAIN_CHURCH,
    ml: {
      title: "രൂപത ആനിമേറ്റേഴ്സിനോടൊപ്പം അധ്യാപക മീറ്റിംഗ്",
      description: "രൂപത ആനിമേറ്റേഴ്സ് ടീമിനോടൊപ്പം മതബോധന അധ്യാപകരുടെ യോഗം.",
      time: "മൂന്നാമത്തെ വി. കുർബാനയ്ക്കു ശേഷം",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Jesus Youth Prayer Meeting",
    category: "Devotion",
    description: "Prayer meeting of the parish Jesus Youth group.",
    date: "2026-09-27",
    time: "After the third Holy Mass",
    location: MAIN_CHURCH,
    ml: {
      title: "ജീസസ് യൂത്ത് പ്രാർത്ഥനാ യോഗം",
      description: "ഇടവകയിലെ ജീസസ് യൂത്ത് കൂട്ടായ്മയുടെ പ്രാർത്ഥനാ യോഗം.",
      time: "മൂന്നാമത്തെ വി. കുർബാനയ്ക്കു ശേഷം",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Logos Quiz",
    category: "Formation",
    description:
      "Everyone who has registered should come well prepared for the exam. Unit leaders who have not yet collected the hall tickets should get them from the catechism office and hand them out in their units.",
    date: "2026-09-27",
    time: "2:00 PM – 3:30 PM",
    location: "S.H. School",
    ml: {
      title: "ലോഗോസ് ക്വിസ്",
      description: "പേര് രജിസ്റ്റർ ചെയ്ത എല്ലാവരും നന്നായി പഠിച്ചൊരുങ്ങി പരീക്ഷയ്ക്ക് എത്തണം. ഹാൾടിക്കറ്റ് വാങ്ങാത്ത യൂണിറ്റ് ഭാരവാഹികൾ മതബോധന ഓഫീസിൽ നിന്ന് അത് വാങ്ങി യൂണിറ്റുകളിൽ വിതരണം ചെയ്യണം.",
      time: "ഉച്ചയ്ക്ക് 2:00 – 3:30",
      location: "എസ്.എച്ച്. സ്കൂൾ",
    },
  },
  {
    title: "Feast of St. Vincent de Paul",
    category: "Feast",
    description:
      "Solemn feast Mass and Novena led by the parish St. Vincent de Paul Society, followed by the distribution of the nercha (blessed offering).",
    date: "2026-09-27",
    time: "5:00 PM",
    location: MAIN_CHURCH,
    ml: {
      title: "വി. വിൻസെന്റ് ഡി പോളിന്റെ തിരുനാൾ",
      description: "ഇടവകയിലെ വിൻസെന്റ് ഡി പോൾ സൊസൈറ്റിയുടെ നേതൃത്വത്തിൽ ആഘോഷമായ തിരുനാൾ കുർബാനയും നൊവേനയും നേർച്ച വിതരണവും.",
      time: "വൈകിട്ട് 5:00",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },

  // ── This week ──
  {
    title: "Priests' House Visit and Blessing – Unit 48",
    category: "Service",
    description:
      "The priests will visit homes in Family Unit 48 to pray for God's mercy and bless each family.",
    date: "2026-09-28",
    time: "Monday",
    location: "Family Unit 48",
    ml: {
      title: "വൈദികരുടെ ഭവന സന്ദർശനവും ആശീർവാദവും – യൂണിറ്റ് 48",
      description: "ദൈവകരുണയ്ക്കായി പ്രാർത്ഥിക്കാനും കുടുംബങ്ങളെ ആശീർവദിക്കാനുമായി വൈദികർ കുടുംബയൂണിറ്റ് 48-ലെ വീടുകൾ സന്ദർശിക്കുന്നു.",
      time: "തിങ്കളാഴ്ച",
      location: "കുടുംബയൂണിറ്റ് 48",
    },
  },
  {
    title: "Feast of the Archangels Michael, Gabriel and Raphael",
    category: "Feast",
    description: "The Church celebrates the feast of the Archangels Michael, Gabriel and Raphael.",
    date: "2026-09-29",
    time: "All Holy Masses",
    location: MAIN_CHURCH,
    ml: {
      title: "മിഖായേൽ, ഗബ്രിയേൽ, റഫായേൽ മാലാഖമാരുടെ തിരുനാൾ",
      description: "മിഖായേൽ, ഗബ്രിയേൽ, റഫായേൽ മാലാഖമാരുടെ തിരുനാൾ സഭ ആഘോഷിക്കുന്നു.",
      time: "എല്ലാ വി. കുർബാനകളിലും",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Central Committee Executive Meeting",
    category: "Meeting",
    description: "Executive meeting of the parish central committee.",
    date: "2026-09-29",
    time: "4:00 PM",
    location: MAIN_CHURCH,
    ml: {
      title: "കേന്ദ്രസമിതി എക്സിക്യൂട്ടീവ് മീറ്റിംഗ്",
      description: "ഇടവക കേന്ദ്രസമിതിയുടെ എക്സിക്യൂട്ടീവ് യോഗം.",
      time: "വൈകിട്ട് 4:00",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Litany and Novena – St. Antony's Chapel",
    category: "Devotion",
    description: "Weekly Tuesday Litany and Novena.",
    date: "2026-09-29",
    time: "6:00 PM",
    location: "St. Antony's Chapel, near the KSRTC bus station",
    ml: {
      title: "ലദീഞ്ഞും നൊവേനയും – സെന്റ് ആന്റണീസ് കപ്പേള",
      description: "എല്ലാ ചൊവ്വാഴ്ചയുമുള്ള ലദീഞ്ഞും നൊവേനയും.",
      time: "വൈകിട്ട് 6:00",
      location: "സെന്റ് ആന്റണീസ് കപ്പേള, കെ.എസ്.ആർ.ടി.സി. ബസ് സ്റ്റേഷനു സമീപം",
    },
  },
  {
    title: "Priests' House Visit and Blessing – Unit 64",
    category: "Service",
    description:
      "The priests will visit homes in Family Unit 64 to pray for God's mercy and bless each family. This concludes this year's house visits.",
    date: "2026-09-30",
    time: "Wednesday",
    location: "Family Unit 64",
    ml: {
      title: "വൈദികരുടെ ഭവന സന്ദർശനവും ആശീർവാദവും – യൂണിറ്റ് 64",
      description: "ദൈവകരുണയ്ക്കായി പ്രാർത്ഥിക്കാനും കുടുംബങ്ങളെ ആശീർവദിക്കാനുമായി വൈദികർ കുടുംബയൂണിറ്റ് 64-ലെ വീടുകൾ സന്ദർശിക്കുന്നു. ഈ യൂണിറ്റോടുകൂടി ഭവന സന്ദർശനം അവസാനിക്കുന്നു.",
      time: "ബുധനാഴ്ച",
      location: "കുടുംബയൂണിറ്റ് 64",
    },
  },
  {
    title: "Feast of St. Thérèse of the Child Jesus",
    category: "Feast",
    description: "The Church celebrates the feast of St. Thérèse of the Child Jesus (St. Thérèse of Lisieux).",
    date: "2026-10-01",
    time: "All Holy Masses",
    location: MAIN_CHURCH,
    ml: {
      title: "വിശുദ്ധ കൊച്ചുത്രേസ്യയുടെ തിരുനാൾ",
      description: "വിശുദ്ധ കൊച്ചുത്രേസ്യയുടെ തിരുനാൾ സഭ ആഘോഷിക്കുന്നു.",
      time: "എല്ലാ വി. കുർബാനകളിലും",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Litany and Novena – St. Roch's Chapel",
    category: "Devotion",
    description: "Weekly Thursday Litany and Novena.",
    date: "2026-10-01",
    time: "6:00 PM",
    location: "St. Roch's Chapel",
    ml: {
      title: "ലദീഞ്ഞും നൊവേനയും – വി. റോക്കിയുടെ കപ്പേള",
      description: "എല്ലാ വ്യാഴാഴ്ചയുമുള്ള ലദീഞ്ഞും നൊവേനയും.",
      time: "വൈകിട്ട് 6:00",
      location: "വി. റോക്കിയുടെ കപ്പേള",
    },
  },
  {
    title: "Holy Mass and Novena – Lourdes Matha Chapel, Mariyapuram",
    category: "Devotion",
    description: "Weekly Thursday Holy Mass, Litany and Novena.",
    date: "2026-10-01",
    time: "5:30 PM",
    location: "Lourdes Matha Chapel, Mariyapuram",
    ml: {
      title: "വി. കുർബാനയും നൊവേനയും – ലൂർദ് മാതാ കുരിശുപള്ളി, മരിയാപുരം",
      description: "എല്ലാ വ്യാഴാഴ്ചയുമുള്ള വി. കുർബാന, ലദീഞ്ഞ്, നൊവേന.",
      time: "വൈകിട്ട് 5:30",
      location: "ലൂർദ് മാതാ കുരിശുപള്ളി, മരിയാപുരം",
    },
  },
  {
    title: "Feast of the Guardian Angels",
    category: "Feast",
    description: "The Church celebrates the feast of the Holy Guardian Angels.",
    date: "2026-10-02",
    time: "All Holy Masses",
    location: MAIN_CHURCH,
    ml: {
      title: "കാവൽ മാലാഖമാരുടെ തിരുനാൾ",
      description: "കാവൽ മാലാഖമാരുടെ തിരുനാൾ സഭ ആഘോഷിക്കുന്നു.",
      time: "എല്ലാ വി. കുർബാനകളിലും",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Church Cleaning",
    category: "Service",
    description:
      "Family Units 50 and 51 and the St. Vincent de Paul Society will clean the church. Last Friday's cleaning was done by Units 47, 48 and 49, and the parish thanks them.",
    date: "2026-10-02",
    time: "Friday",
    location: MAIN_CHURCH,
    ml: {
      title: "പള്ളി ക്ലീനിങ്",
      description: "50, 51 കുടുംബയൂണിറ്റുകളും സെന്റ് വിൻസെന്റ് ഡി പോൾ സംഘടനയും പള്ളി വൃത്തിയാക്കും. കഴിഞ്ഞ വെള്ളിയാഴ്ച 47, 48, 49 യൂണിറ്റുകളാണ് ക്ലീനിങ് നടത്തിയത്; അവർക്ക് ഇടവകയുടെ പേരിലുള്ള നന്ദി.",
      time: "വെള്ളിയാഴ്ച",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "First Friday Confession for the Sick",
    category: "Devotion",
    description:
      "Monthly confession for the sick on the first Friday. Anyone who would like a priest to visit should give their name at the parish office before Wednesday, 30 September.",
    date: "2026-10-02",
    time: "Friday",
    location: "Homes of the sick",
    ml: {
      title: "മാസാദ്യ രോഗി കുമ്പസാരം",
      description: "മാസാദ്യ വെള്ളിയാഴ്ചയിലെ രോഗി കുമ്പസാരം. താൽപര്യമുള്ളവർ സെപ്റ്റംബർ 30 ബുധനാഴ്ചയ്ക്ക് മുമ്പായി പള്ളി ഓഫീസിൽ പേരുകൾ നൽകണം.",
      time: "വെള്ളിയാഴ്ച",
      location: "രോഗികളുടെ ഭവനങ്ങൾ",
    },
  },
  {
    title: "Bible Class",
    category: "Formation",
    description: "Bible study class for parishioners.",
    date: "2026-10-02",
    time: "4:00 PM – 6:00 PM",
    location: MAIN_CHURCH,
    ml: {
      title: "ബൈബിൾ ക്ലാസ്",
      description: "ഇടവകാംഗങ്ങൾക്കായുള്ള ബൈബിൾ ക്ലാസ്.",
      time: "വൈകിട്ട് 4:00 – 6:00",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Litany and Novena – Market Chapel",
    category: "Devotion",
    description: "Weekly Friday Litany and Novena.",
    date: "2026-10-02",
    time: "6:00 PM",
    location: "Market Chapel",
    ml: {
      title: "ലദീഞ്ഞും നൊവേനയും – മാർക്കറ്റ് കപ്പേള",
      description: "എല്ലാ വെള്ളിയാഴ്ചയുമുള്ള ലദീഞ്ഞും നൊവേനയും.",
      time: "വൈകിട്ട് 6:00",
      location: "മാർക്കറ്റ് കപ്പേള",
    },
  },
  {
    title: "Holy Mass and Novena – Chenathunad Chapel",
    category: "Devotion",
    description: "Weekly Saturday Holy Mass, Litany and Novena.",
    date: "2026-10-03",
    time: "6:00 PM",
    location: "Chenathunad Chapel",
    ml: {
      title: "വി. കുർബാനയും നൊവേനയും – ചേനത്തുനാട് കുരിശുപള്ളി",
      description: "എല്ലാ ശനിയാഴ്ചയുമുള്ള വി. കുർബാന, ലദീഞ്ഞ്, നൊവേന.",
      time: "വൈകിട്ട് 6:00",
      location: "ചേനത്തുനാട് കുരിശുപള്ളി",
    },
  },

  // ── Sunday, 4 October ──
  {
    title: "Sunday Masses Led by Units 52, 53 and 54",
    category: "Liturgy",
    description: "Holy Masses on this Sunday are led by Family Units 52, 53 and 54.",
    date: "2026-10-04",
    time: "All Sunday Masses",
    location: MAIN_CHURCH,
    ml: {
      title: "ഞായറാഴ്ച കുർബാനകൾ – യൂണിറ്റുകൾ 52, 53, 54",
      description: "ഈ ഞായറാഴ്ചത്തെ വി. കുർബാനകൾക്ക് 52, 53, 54 കുടുംബയൂണിറ്റുകൾ നേതൃത്വം നൽകും.",
      time: "എല്ലാ ഞായറാഴ്ച കുർബാനകളും",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Family Unit Leaders' General Body Meeting",
    category: "Meeting",
    description: "General body meeting of the leaders of all 64 family units.",
    date: "2026-10-04",
    time: "After the 7:30 AM Holy Mass",
    location: MAIN_CHURCH,
    ml: {
      title: "കുടുംബയൂണിറ്റ് ഭാരവാഹികളുടെ ജനറൽബോഡി മീറ്റിംഗ്",
      description: "64 കുടുംബയൂണിറ്റുകളിലെയും ഭാരവാഹികളുടെ ജനറൽബോഡി യോഗം.",
      time: "രാവിലെ 7:30-ന്റെ വി. കുർബാനയ്ക്കു ശേഷം",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Catechism Half-Yearly Exams Begin",
    category: "Formation",
    description:
      "The half-yearly catechism exams begin. This Sunday's exam is for Classes 1 to 6. Classes 1 to 3 sit the exam in their own classrooms, and Classes 4, 5 and 6 at S.H. Convent School. Children should come well prepared.",
    date: "2026-10-04",
    time: "2:00 PM – 3:30 PM",
    location: "Parish Catechism School & S.H. Convent School",
    ml: {
      title: "മതബോധന അർദ്ധ വാർഷിക പരീക്ഷകൾ ആരംഭം",
      description: "മതബോധന അർദ്ധ വാർഷിക പരീക്ഷകൾ ആരംഭിക്കുന്നു. ഈ ഞായറാഴ്ച ഒന്നാം ക്ലാസ് മുതൽ ആറാം ക്ലാസ് വരെയുള്ള കുട്ടികൾക്കാണ് പരീക്ഷ. ഒന്നു മുതൽ മൂന്നു വരെയുള്ള കുട്ടികൾക്ക് അവരവരുടെ ക്ലാസുകളിലും 4, 5, 6 ക്ലാസുകാർക്ക് എസ്.എച്ച്. കോൺവെന്റ് സ്കൂളിലുമാണ് പരീക്ഷ. കുട്ടികൾ പഠിച്ചൊരുങ്ങി പരീക്ഷയ്ക്ക് എത്തണം.",
      time: "ഉച്ചയ്ക്ക് 2:00 – 3:30",
      location: "ഇടവക മതബോധന വിദ്യാലയവും എസ്.എച്ച്. കോൺവെന്റ് സ്കൂളും",
    },
  },

  // ── October: Rosary Month ──
  {
    title: "Rosary in Family Homes",
    category: "Devotion",
    description:
      "October is the Rosary Month. Family units will pray the Rosary in homes in groups, as convenient for each unit. Units near the Chenathunad and Mariyapuram chapels should pray the Rosary in homes on the days there is no solemn Rosary at those chapels. Every home in the parish is asked to display a rosary at the front of the house from 1 October.",
    date: "2026-10-01",
    endDate: "2026-10-20",
    time: "As arranged by each unit",
    location: "Family Units",
    ml: {
      title: "വീടുകളിൽ ജപമാല",
      description: "ഒക്ടോബർ ജപമാല മാസമാണ്. കുടുംബയൂണിറ്റുകളിൽ സൗകര്യമനുസരിച്ച് ഗ്രൂപ്പ് അടിസ്ഥാനത്തിൽ വീടുകളിൽ ജപമാല. ചേനത്തുനാട്, മരിയാപുരം കുരിശുപള്ളികൾക്ക് സമീപമുള്ള യൂണിറ്റുകൾ അവിടങ്ങളിൽ ആഘോഷമായ ജപമാല നടക്കാത്ത ദിവസങ്ങളിൽ വീടുകളിലെ ജപമാല ക്രമീകരിക്കണം. ഒക്ടോബർ ഒന്നു മുതൽ ഇടവകയിലെ എല്ലാ വീടുകളുടെയും മുൻപിൽ ജപമാല പ്രദർശിപ്പിക്കാൻ ശ്രദ്ധിക്കുക.",
      time: "ഓരോ യൂണിറ്റും നിശ്ചയിക്കുന്ന സമയത്ത്",
      location: "കുടുംബയൂണിറ്റുകൾ",
    },
  },
  {
    title: "Rosary Month – Chenathunad Chapel",
    category: "Devotion",
    description:
      "Holy Mass, Adoration and Rosary every evening. Every parishioner should join the solemn Rosary at one of the centres for ten days.",
    date: "2026-10-01",
    endDate: "2026-10-10",
    time: "6:00 PM",
    location: "Chenathunad Chapel",
    ml: {
      title: "ജപമാല മാസം – ചേനത്തുനാട് കുരിശുപള്ളി",
      description: "എല്ലാ ദിവസവും വൈകിട്ട് വി. കുർബാന, ആരാധന, ജപമാല. ഇടവകാംഗങ്ങൾ ഏതെങ്കിലും ഒരു കേന്ദ്രത്തിലെ പത്തുദിവസത്തെ ആഘോഷമായ ജപമാലയിൽ പങ്കെടുക്കണം.",
      time: "വൈകിട്ട് 6:00",
      location: "ചേനത്തുനാട് കുരിശുപള്ളി",
    },
  },
  {
    title: "Half-Day Seminar – 800th Anniversary of St. Francis of Assisi",
    category: "Formation",
    description:
      "To mark the 800th anniversary of the feast of St. Francis of Assisi, the parish's Secular Franciscan members are holding a half-day seminar for parishioners, with a seminar, Holy Mass and lunch. Everyone who can is welcome. So that enough food can be prepared, please give your name at the parish office by Sunday, 4 October.",
    date: "2026-10-07",
    time: "9:30 AM – 1:00 PM",
    location: MAIN_CHURCH,
    ml: {
      title: "അർദ്ധദിന സെമിനാർ – വി. ഫ്രാൻസിസ് അസീസിയുടെ 800-ാം വാർഷികം",
      description: "വി. ഫ്രാൻസിസ് അസീസിയുടെ തിരുനാളിന്റെ 800-ാം വാർഷികത്തോടനുബന്ധിച്ച് ഇടവകയിലെ ഫ്രാൻസിസ്കൻ അത്മായസഭാംഗങ്ങൾ ഇടവക ജനങ്ങൾക്കായി ഒരു അർദ്ധദിന സെമിനാർ സംഘടിപ്പിക്കുന്നു. സെമിനാർ, വിശുദ്ധ കുർബാന, ഉച്ചഭക്ഷണം എന്നിവ ഉണ്ടായിരിക്കും. സാധിക്കുന്ന എല്ലാവരും പങ്കെടുക്കണം. ഭക്ഷണം തയ്യാറാക്കുന്നതിന്റെ എണ്ണം ലഭിക്കുന്നതിനായി പങ്കെടുക്കുന്നവർ ഒക്ടോബർ 4 ഞായറാഴ്ചക്കുള്ളിൽ പള്ളി ഓഫീസിൽ പേരുകൾ നൽകണം.",
      time: "രാവിലെ 9:30 – ഉച്ചയ്ക്ക് 1:00",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Rosary Month – Mariyapuram Chapel",
    category: "Devotion",
    description:
      "Holy Mass, Adoration and Rosary every evening. Every parishioner should join the solemn Rosary at one of the centres for ten days.",
    date: "2026-10-11",
    endDate: "2026-10-20",
    time: "6:00 PM",
    location: "Mariyapuram Chapel",
    ml: {
      title: "ജപമാല മാസം – മരിയാപുരം കുരിശുപള്ളി",
      description: "എല്ലാ ദിവസവും വൈകിട്ട് വി. കുർബാന, ആരാധന, ജപമാല. ഇടവകാംഗങ്ങൾ ഏതെങ്കിലും ഒരു കേന്ദ്രത്തിലെ പത്തുദിവസത്തെ ആഘോഷമായ ജപമാലയിൽ പങ്കെടുക്കണം.",
      time: "വൈകിട്ട് 6:00",
      location: "മരിയാപുരം കുരിശുപള്ളി",
    },
  },

  // ── Mission Sunday auctions (October is also Mission Month) ──
  ...(
    [
      {
        date: "2026-10-11",
        en: "Zones 1, 2 and 3 (Units 1–18 and 21–24)",
        ml: "1, 2, 3 മേഖലകൾ (യൂണിറ്റുകൾ 1–18, 21–24)",
      },
      {
        date: "2026-10-18",
        en: "Zones 4, 5 and 6 (Units 19, 20 and 25–40)",
        ml: "4, 5, 6 മേഖലകൾ (യൂണിറ്റുകൾ 19, 20, 25–40)",
      },
      {
        date: "2026-10-25",
        en: "Zones 7, 8, 9 and 10 (Units 41–64)",
        ml: "7, 8, 9, 10 മേഖലകൾ (യൂണിറ്റുകൾ 41–64)",
      },
      {
        date: "2026-11-01",
        en: "Businesses",
        ml: "വ്യാപാര സ്ഥാപനങ്ങൾ",
      },
    ] as const
  ).map(
    ({ date, en, ml }): ChurchEvent => ({
      title: `Mission Sunday Auction – ${en.replace(/ \(.*\)$/, "")}`,
      category: "Service",
      description: `Auction of items collected to support the missions, from ${en === "Businesses" ? "businesses" : en}. 75% of the proceeds will support the Shamshabad Mission and 25% will go to the parish central committee. Leaders should bring the items to the mini parish hall between 5:00 PM and 7:00 PM on the Saturday before.`,
      date,
      time: "Sunday",
      location: MAIN_CHURCH,
      ml: {
        title: `മിഷൻ ഞായർ ഉൽപ്പന്നലേലം – ${ml.replace(/ \(.*\)$/, "")}`,
        description: `മിഷൻ പ്രവർത്തനങ്ങളെ സഹായിക്കുന്നതിനായി ശേഖരിക്കുന്ന ഉൽപ്പന്നങ്ങളുടെ ലേലം: ${ml}. ലഭിക്കുന്ന തുകയുടെ 75% ഷംഷാബാദ് മിഷനെ സഹായിക്കാനും 25% ഇടവകയിലെ കേന്ദ്ര സമിതി പ്രവർത്തനങ്ങൾക്കുമാണ്. തലേന്ന് ശനിയാഴ്ച വൈകിട്ട് 5 മുതൽ 7 മണിക്ക് മുമ്പായി ഉൽപ്പന്നങ്ങൾ മിനി പാരിഷ്ഹാളിൽ എത്തിക്കാൻ ഭാരവാഹികൾ ശ്രദ്ധിക്കണം.`,
        time: "ഞായറാഴ്ച",
        location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
      },
    }),
  ),

  // ── Rosary Month, continued ──
  {
    title: "Rosary Month – Parish Church",
    category: "Devotion",
    description:
      "Holy Mass and Adoration, with the Rosary led by the parish associations. Every parishioner should join the solemn Rosary at one of the centres for ten days.",
    date: "2026-10-21",
    endDate: "2026-10-30",
    time: "5:00 PM",
    location: MAIN_CHURCH,
    ml: {
      title: "ജപമാല മാസം – ഇടവക പള്ളി",
      description: "വി. കുർബാനയും ആരാധനയും; ഭക്തസംഘടനകളുടെ നേതൃത്വത്തിൽ ജപമാല. ഇടവകാംഗങ്ങൾ ഏതെങ്കിലും ഒരു കേന്ദ്രത്തിലെ പത്തുദിവസത്തെ ആഘോഷമായ ജപമാലയിൽ പങ്കെടുക്കണം.",
      time: "വൈകിട്ട് 5:00",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },
  {
    title: "Rosary Month Closing Celebration",
    category: "Feast",
    description:
      "Solemn Holy Mass, a Rosary procession around the town, Adoration and the closing blessing. Each of the 10 zones will present a tableau of Our Lady.",
    date: "2026-10-31",
    time: "5:00 PM",
    location: MAIN_CHURCH,
    ml: {
      title: "ജപമാല മാസ സമാപനം",
      description: "ആഘോഷമായ വി. കുർബാന, ടൗൺ ചുറ്റി ജപമാല പ്രദക്ഷിണം, ആരാധന, സമാപന ആശീർവാദം. 10 മേഖലകളിൽ നിന്നും മാതാവിന്റെ ഓരോ ടാബ്ലോ ഉണ്ടായിരിക്കും.",
      time: "വൈകിട്ട് 5:00",
      location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി",
    },
  },

  // ── November: Raza Qurbana for the departed, by zone ──
  ...(
    [
      ["2026-11-09", 1],
      ["2026-11-10", 2],
      ["2026-11-11", 3],
      ["2026-11-16", 4],
      ["2026-11-17", 5],
      ["2026-11-18", 6],
      ["2026-11-23", 7],
      ["2026-11-24", 8],
      ["2026-11-26", 9],
      ["2026-11-30", 10],
    ] as const
  ).map(
    ([date, zone]): ChurchEvent => ({
      title: `Raza Qurbana for the Departed – Zone ${zone}`,
      category: "Remembrance",
      description: `Raza Qurbana for parishioners of Zone ${zone} who have passed away, followed by the common Office for the Dead in the cemetery, where the graves of the zone's families will be blessed with holy water and prayed over. The celebrants will be the four parish priests, together with priests from the parish who belong to the zone. Families of these priests should invite them in advance. Each unit contributes ₹500 to the liturgy fund so the priests can be booked. Unit leaders should pay it at the parish office or through the central committee leaders as soon as possible and have the Raza Qurbana entered in the liturgy diary.${zone === 2 ? " All units in this zone have already paid." : ""}`,
      date,
      time: "10:30 AM",
      location: `${MAIN_CHURCH} & Cemetery`,
      ml: {
        title: `മരിച്ചവർക്കായുള്ള റാസ കുർബാന – മേഖല ${zone}`,
        description: `മരണംമൂലം വേർപെട്ടുപോയ മേഖല ${zone}-ലെ ഇടവകാംഗങ്ങൾക്കായുള്ള റാസ കുർബാന; തുടർന്ന് സിമിത്തേരിയിൽ പൊതു ഒപ്പീസും മേഖലയിലെ കുടുംബങ്ങളുടെ കബറിടങ്ങളിൽ വിശുദ്ധജലം തളിച്ചുള്ള പ്രാർത്ഥനയും. ഇവിടത്തെ നാല് വൈദികരും മേഖലയിലുൾപ്പെട്ട ഇടവക വൈദികരുമായിരിക്കും കാർമികർ; ഈ വൈദികരെ അവരുടെ കുടുംബാംഗങ്ങൾ മുൻകൂട്ടി ക്ഷണിക്കണം. അച്ചന്മാരെ ബുക്ക് ചെയ്യുന്നതിനായി ഓരോ യൂണിറ്റും ₹500 തിരുക്കർമ്മ ധർമ്മത്തിലേക്ക് നൽകണം; ഈ തുക എത്രയും വേഗം പള്ളി ഓഫീസിൽ നേരിട്ടോ കേന്ദ്രസമിതി ഭാരവാഹികൾ വഴിയോ നൽകി തിരുക്കർമ്മ ഡയറിയിൽ റാസ കുർബാന ബുക്ക് ചെയ്യണം.${zone === 2 ? " ഈ മേഖലയിലെ എല്ലാ യൂണിറ്റുകളും തുക അടച്ചിട്ടുണ്ട്." : ""}`,
        time: "രാവിലെ 10:30",
        location: "സെന്റ് മേരീസ് ഫൊറോന പള്ളിയും സിമിത്തേരിയും",
      },
    }),
  ),
];
