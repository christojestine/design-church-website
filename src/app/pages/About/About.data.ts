import churchExterior from "@/imports/118A1922.jpg";
import HolyLand from "../../assets/images/HolyLand.webp";
import SwayamvaraAltar from "../../assets/images/SwayamvaraAltar.webp";

export interface AboutSectionData {
  chipLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageOnRight: boolean;
  py: { xs: number; md: number };
}

export const aboutSections: AboutSectionData[] = [
  {
    chipLabel: "Our Mission",
    title: "Glorifying God Together",
    description:
      "St.Mary's Forane Church Chalakudy making disciples of Jesus Christ. We are committed to connecting people to God, to one another, and to the world around us. Founded in 1985, we have grown from a small gathering of 50 people to a thriving community of over 1,200 families, remaining committed to our founding vision: a church where everyone belongs.",
    image: churchExterior,
    imageAlt: "Church exterior",
    imageOnRight: false,
    py: { xs: 8, md: 12 },
  },
  {
    chipLabel: "Holy Land",
    title: "Holy Land",
    description:
      "Holy Land is the latest addition that attracts a great number of tourists to this Pilgrim Centre. On completion of the construction work spanning a period of 3 years, it was Blessed by Cardinal Mar Varkey Vithayathil and inaugurated by Hon. State Tourism Minister on September 8, 2006. Aimed at giving the visitors a feel of being actually in the places of Biblical importance, the Holy Land replica provides an absolutely refreshing and spirituality nourishing experience to the pilgrims. Civil structures are built in ancient architectural styles to give as much resemblance to the originals as possible Astounding artistry and excellent craftsmanship are some of its distinctive features",
    image: HolyLand,
    imageAlt: "Holy Land",
    imageOnRight: true,
    py: { xs: 1, md: 2 },
  },
  {
    chipLabel: "Swayamvara Altar",
    title: "Swayamvara Altar",
    description:
      "The church has been renowned from time immemorial for the intercession of Blessed Virgin Mary. The original altar is known as Swayamvara Altar – a rare title bestowed by the Holy Father. It is believed that those who pray at this altar with complete self-surrender would surely receive special blessings. When the church was reconstructed again in 1987, the original altar, made of wood with intricate carvings and murals depicting the glories of Blessed Virgin Mary, was kept intact and is still presesrved as a historical monument. On the occasion of the consecration of the fourth remodeled Church, His Eminence Cardinal Lourdswamy declared this ancient shrine as a Marian Pilgrim Centre, in consideration of its contributions to the history of the Church in Kerala and the significant role it played as a centre of pilgrimage and a spiritual powerhouse. The colossal belfry built in gothic style almost a century ago with a huge statue of Mother Mary on the top, is of monumental importance and still remains as the tallest structure in the vicinity.",
    image: SwayamvaraAltar,
    imageAlt: "Old Altar",
    imageOnRight: false,
     py: { xs: 8, md: 12 }
  },
];
