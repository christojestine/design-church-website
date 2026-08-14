import churchExterior from "@/imports/118A1922.jpg";
import HolyLand from "../../assets/images/HolyLand.webp";
import GrottoBlessedVirginMary from "../../assets/images/GrottoBlessedVirginMary.webp";
import churchbell from "../../assets/images/churchbell.webp";
import altarfull from "../../assets/images/altarfull.webp";
import alterbelowregion from "../../assets/images/alterbelowregion.webp";
import oldalter from "../../assets/images/oldalter.webp";

export interface AboutSectionData {
  chipLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  tertiaryImage?: string;
  tertiaryImageAlt?: string;
  imageOnRight: boolean;
  py: { xs: number; md: number };
}

export const aboutSections: AboutSectionData[] = [
  {
    chipLabel: "Our Church",
    title: "Our Church",
    description: 
    ` The origin of Christian faith in Chalakudy can be traced back to the time when St. Thomas, one of the twelve apostles of Jesus Christ, set foot in India with his mission shortly after Jesus Christ’s death and resurrection. According to tradition, Apostle Thomas landed in Kodungallur, formerly known as Musiris, in the year 52 AD. At that time Kodungallur was a busy commercial center and an important port. St. Thomas traveled about various parts of Kerala preaching the Gospel and forming Christian communities, which began to grow at several places. The early Christian community in Chalakudy, who were privileged to receive the faith directly from the Apostle, established the parish and built their first church in the year in 600 AD. The church was built in an area predominantly occupied by Brahmins, and the permission to build the church at that location explains the communal harmony that existed in those days and continued even today in this multi-religious town. The church was then situated in the Palace Road, a few hundred meters from its present location where it remained until about 1300 AD when it was shifted to the present site.
    The church is famous from time immemorial for the intercession of Blessed Virgin Mary. The original altar is known as “Swayamvara Altar” — a title rarely bestowed by the Holy Father. It is believed that those who pray at this altar with complete self-surrender would surely receive special blessings. When the church was rebuilt in 1987 the original altar made of wood with intricate carvings was left intact and is preserved as such till this day. On the solemn occasion of the consecration of the remodeled church, His Eminence Cardinal Lourdusamy declared this ancient Church as a Marian Pilgrim Centre in consideration of its contributions to the history of the Church in Kerala and its significance as a centre of pilgrimage and a spiritual powerhouse. The colossal belfry built in gothic style almost a century ago with a huge statue of Mother Mary on the top is of monumental importance and still remains the tallest structure in the vicinity.
    In October 2000, a Marian Grotto was built in the church premises similar to the one in Lourdes. The grotto has been a place of great solace to the devotees, who had longed for such a place to express their devotion to Mother Mary. It helps them get closer to God through Mother Mary, and to grow in noble religious values. A year later in October 2001, a Perpetual Adoration Centre was set up as a memorial of the silver jubilee of Irinjalakuda Diocese and the consecration of its first Bishop Mar James Pazhayattil. Hundreds of devotees come here daily to spend some quiet time with the Lord in the Blessed Sacrament, to share their griefs, concerns, worries and pains, and they return with great relief and peace of mind.
    Holy Land is the latest addition that attracts a great number of tourists to this Pilgrim Centre. On completion of the construction work that took over of 3 years, Cardinal Mar Varkey Vithayathil blessed the Holy Land on September 8, 2006 and the State Tourism & Home Minister Shri Kodiyeri Balakrishnan inaugurated it. Aimed at giving the visitors a feel of being actually in the places of biblical importance, the Holy Land replica provides an absolutely refreshing and spiritually nourishing experience to the pilgrims. Civil structures are built in ancient architectural styles to give as much resemblance to the originals as possible. Astounding artistry and excellent craftsmanship are some of its distinctive features.
    Beginning with the Old Testament incident of the bronze serpent put up by Moses — a symbolic precursor of the Crucified Jesus — the stations in the Holy Land depict all the important events from the life of Jesus, especially His nativity, public ministry, passion, crucifixion, resurrection & ascension and concludes with the scene of Holy Mother Mary being crowned as the Queen of heaven and earth. The Holy Land museum has on display several relics as well as other objects of religious and historical importance. Holy Land is open to the public throughout the day. However, it is most enjoyable in the evenings when the lights are turned on.`,
    image: churchExterior,
    imageAlt: "Church exterior",
    secondaryImage: altarfull,
    secondaryImageAlt: "Altar of the church",
    tertiaryImage: alterbelowregion,
    tertiaryImageAlt: "Altar",
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
    image: oldalter,
    imageAlt: "Old Altar",
    imageOnRight: false,
     py: { xs: 8, md: 12 }
  },
    {
    chipLabel: "Church Bell",
    title: "Church Bell",
    description:
      "Our Church Bell was built in 1887. But, our church bell Fry was built in 1913 under the leadership of Rev. Fr. Devassy Avaran. It has seven steps or flour to denote seven sacraments which leads a Christian person to the perfection. Our Bell Fry is standing higher than the height of the church. On the top of the Bell Fry, there is a statue of Blessed Virgin Mary which installed on 1965 done by Rev. Fr. Antony Thekkiniyath. There is an awesome history behind the Church Bell Fry and The Bell. This Church Bell was built at France. This splendid history is written in the language of Latin, Arabic and Malayalam.",
    image: churchbell,
    imageAlt: "Church Bell",
    imageOnRight: true,
    py: { xs: 1, md: 2 },
  },
    {
    chipLabel: "Grotto of Blessed Virgin Mary",
    title: "Grotto of Blessed Virgin Mary",
    description:
      "In October 2000, a Marian Grotto was built in the church premises. It is one of the dream projects of Rev. Fr. Thomas Panjikaran. This grotto, in the name of the Blessed Virgin Mary is so similar to the one in Lourdes. It is big in size in the Diocese of Irinjalakkuda. There are many people come over India and other countries to pray to Blessed Virgin Mary which installed in the Marian Grotto. There are many miracle happened in this grotto by the weeping prayer of the people and it still continuing. There are many special prayer services at Grotto in honor of Blessed Virgin Mary especially Eucharistic Procession during the time of September one to eight and Ladeenju and Novena in every Saturday at 6pm. There are many people come over to Marian Grotto at 7 o’clock to recite rosary.",
    image: GrottoBlessedVirginMary,
    imageAlt: "Grotto of Blessed Virgin Mary",
    imageOnRight: false,
     py: { xs: 8, md: 12 }
  },
];
