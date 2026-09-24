import GroupsIcon from "@mui/icons-material/Groups";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ChurchIcon from "@mui/icons-material/Church";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

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
}

const MAIN_CHURCH = "St. Mary's Forane Church";

// Source: parish announcements dated 20 September 2026.
export const events: ChurchEvent[] = [
  // ── Sunday, 20 September ──
  {
    title: "Fourth Sunday of the Eliya–Sliva–Moses Season",
    category: "Liturgy",
    description:
      "Holy Masses today are led by Family Units 47, 48 and 49.",
    date: "2026-09-20",
    time: "All Sunday Masses",
    location: MAIN_CHURCH,
  },
  {
    title: "Parish Council Meeting",
    category: "Meeting",
    description: "Meeting of the Parish Council members.",
    date: "2026-09-20",
    time: "After the 7:30 AM Holy Mass",
    location: MAIN_CHURCH,
  },
  {
    title: "AKCC Executive Meeting",
    category: "Meeting",
    description:
      "Executive committee meeting of the All Kerala Catholic Congress (AKCC).",
    date: "2026-09-20",
    time: "After the 7:30 AM Holy Mass",
    location: MAIN_CHURCH,
  },
  {
    title: "Jesus Youth Prayer Meeting",
    category: "Devotion",
    description: "Prayer meeting of the parish Jesus Youth group.",
    date: "2026-09-20",
    time: "After the third Holy Mass",
    location: MAIN_CHURCH,
  },
  {
    title: "KCYM General Body Meeting",
    category: "Meeting",
    description: "General body meeting of the KCYM youth movement.",
    date: "2026-09-20",
    time: "After the third Holy Mass",
    location: MAIN_CHURCH,
  },
  {
    title: "Family Unit Gatherings",
    category: "Meeting",
    description:
      "Family gatherings in Family Units 31 to 45. There is no gathering in Unit 37 this time.",
    date: "2026-09-20",
    time: "As arranged by each unit",
    location: "Family Units 31–45",
  },
  {
    title: "KCYM Scrap Collection",
    category: "Service",
    description:
      "KCYM members will visit homes in Family Units 1, 2 and 3 to collect scrap.",
    date: "2026-09-20",
    time: "Evening",
    location: "Family Units 1, 2 & 3",
  },

  // ── This week ──
  {
    title: "Feast of St. Matthew the Evangelist",
    category: "Feast",
    description: "The Church celebrates the feast of St. Matthew, Apostle and Evangelist.",
    date: "2026-09-21",
    time: "All Holy Masses",
    location: MAIN_CHURCH,
  },
  {
    title: "Priests' Five-Day Camp",
    category: "Formation",
    description:
      "The Vicar is attending the second batch of the five-day camp for priests.",
    date: "2026-09-21",
    endDate: "2026-09-25",
    time: "Monday to Friday",
    location: "Pax, Kallettumkara",
  },
  {
    title: "Litany and Novena – St. Antony's Chapel",
    category: "Devotion",
    description: "Weekly Tuesday Litany and Novena.",
    date: "2026-09-22",
    time: "6:00 PM",
    location: "St. Antony's Chapel, near the KSRTC bus station",
  },
  {
    title: "Mathruvedi General Body Meeting",
    category: "Meeting",
    description: "General body meeting of Mathruvedi, the parish mothers' forum.",
    date: "2026-09-23",
    time: "10:00 AM",
    location: MAIN_CHURCH,
  },
  {
    title: "Feast of St. Padre Pio",
    category: "Feast",
    description: "The Church celebrates the feast of St. Padre Pio.",
    date: "2026-09-23",
    time: "All Holy Masses",
    location: MAIN_CHURCH,
  },
  {
    title: "Litany and Novena – St. Roch's Chapel",
    category: "Devotion",
    description: "Weekly Thursday Litany and Novena.",
    date: "2026-09-24",
    time: "6:00 PM",
    location: "St. Roch's Chapel",
  },
  {
    title: "Holy Mass and Novena – Lourdes Matha Chapel, Mariyapuram",
    category: "Devotion",
    description: "Weekly Thursday Holy Mass, Litany and Novena.",
    date: "2026-09-24",
    time: "5:30 PM",
    location: "Lourdes Matha Chapel, Mariyapuram",
  },
  {
    title: "Church Cleaning",
    category: "Service",
    description:
      "Family Units 47, 48 and 49 will clean the church. Last week's cleaning was done by Units 44, 45 and 46, and the parish thanks them.",
    date: "2026-09-25",
    time: "Friday",
    location: MAIN_CHURCH,
  },
  {
    title: "Priests' House Visit and Blessing – Unit 35",
    category: "Service",
    description:
      "The priests will visit homes in Family Unit 35 to pray for God's mercy and bless each family.",
    date: "2026-09-25",
    time: "Friday",
    location: "Family Unit 35",
  },
  {
    title: "Litany and Novena – Market Chapel",
    category: "Devotion",
    description: "Weekly Friday Litany and Novena.",
    date: "2026-09-25",
    time: "6:00 PM",
    location: "Market Chapel",
  },
  {
    title: "Holy Mass and Novena – Chenathunad Chapel",
    category: "Devotion",
    description: "Weekly Saturday Holy Mass, Litany and Novena.",
    date: "2026-09-26",
    time: "6:00 PM",
    location: "Chenathunad Chapel",
  },

  // ── Sunday, 27 September ──
  {
    title: "Feast of St. Vincent de Paul",
    category: "Feast",
    description:
      "Solemn feast Mass led by the parish St. Vincent de Paul Society. Holy Masses on this day are led by Family Units 50 and 51 and the St. Vincent de Paul Society.",
    date: "2026-09-27",
    time: "5:00 PM",
    location: MAIN_CHURCH,
  },
  {
    title: "Logos Quiz",
    category: "Formation",
    description:
      "Everyone who has registered should come well prepared for the exam. Hall tickets are available at the catechism office. Unit leaders should collect them and hand them out in their units.",
    date: "2026-09-27",
    time: "2:00 PM – 3:30 PM",
    location: "S.H. School",
  },
  {
    title: "Rupatha Animators' Visit to Catechism",
    category: "Formation",
    description:
      "The diocesan animators' team will visit our catechism school. Parents, please bring your children on time.",
    date: "2026-09-27",
    time: "During catechism classes",
    location: "Parish Catechism School",
  },

  // ── Upcoming house visits ──
  {
    title: "Priests' House Visit and Blessing – Unit 48",
    category: "Service",
    description:
      "The priests will visit homes in Family Unit 48 to pray for God's mercy and bless each family.",
    date: "2026-09-28",
    time: "Monday",
    location: "Family Unit 48",
  },
  {
    title: "Priests' House Visit and Blessing – Unit 64",
    category: "Service",
    description:
      "The priests will visit homes in Family Unit 64 to pray for God's mercy and bless each family.",
    date: "2026-09-30",
    time: "Wednesday",
    location: "Family Unit 64",
  },

  // ── October: Rosary Month ──
  {
    title: "Rosary in Family Homes",
    category: "Devotion",
    description:
      "October is the Rosary Month. Family units will pray the Rosary in homes in groups, as convenient for each unit. Units near the Chenathunad and Mariyapuram chapels should pray the Rosary in homes on the days there is no solemn Rosary at those chapels.",
    date: "2026-10-01",
    endDate: "2026-10-20",
    time: "As arranged by each unit",
    location: "Family Units",
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
  },
  {
    title: "Rosary Month – Parish Church",
    category: "Devotion",
    description:
      "Holy Mass and Adoration, with the Rosary led by the parish associations. Every parishioner should join the solemn Rosary at one of the centres for ten days.",
    date: "2026-10-21",
    endDate: "2026-10-30",
    time: "5:00 PM",
    location: MAIN_CHURCH,
  },
  {
    title: "Rosary Month Closing Celebration",
    category: "Feast",
    description:
      "Solemn Holy Mass, a Rosary procession around the town, Adoration and the closing blessing. Each of the 10 zones will present a tableau of Our Lady.",
    date: "2026-10-31",
    time: "5:00 PM",
    location: MAIN_CHURCH,
  },
  {
    title: "Mission Month Auction",
    category: "Service",
    description:
      "October is also Mission Month. Items donated by family units and businesses will be auctioned zone by zone. 75% of the proceeds will support the Shamshabad Mission and 25% will go to the parish central committee. Each zone's date will be announced next Sunday.",
    date: "2026-10-01",
    endDate: "2026-10-31",
    time: "Zone dates to be announced",
    location: "Parish zones",
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
      description: `Raza Qurbana for parishioners of Zone ${zone} who have passed away, followed by the common Office for the Dead in the cemetery, where the graves of the zone's families will be blessed with holy water and prayed over. The celebrants will be the four parish priests, together with priests from the parish who belong to the zone. Families of these priests should invite them in advance. Each unit contributes ₹500 towards the Qurbana. Unit leaders should pay it at the parish office or through the central committee leaders as soon as possible.`,
      date,
      time: "10:30 AM",
      location: `${MAIN_CHURCH} & Cemetery`,
    }),
  ),
];
