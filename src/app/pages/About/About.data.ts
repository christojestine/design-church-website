import churchExterior from "@/imports/118A1922.jpg";
import HolyLand from "../../assets/images/HolyLand.webp";
import GrottoBlessedVirginMary from "../../assets/images/GrottoBlessedVirginMary.webp";
import churchbell from "../../assets/images/churchbell.webp";
import altarfull from "../../assets/images/altarfull.webp";
import alterbelowregion from "../../assets/images/alterbelowregion.webp";
import oldalter from "../../assets/images/oldalter.webp";
import type { Text } from "../../i18n/LanguageContext";

export interface AboutSectionData {
  chipLabel: Text;
  title: Text;
  description: Text;
  image: string;
  imageAlt: Text;
  secondaryImage?: string;
  secondaryImageAlt?: Text;
  tertiaryImage?: string;
  tertiaryImageAlt?: Text;
  imageOnRight: boolean;
  py: { xs: number; md: number };
}

export const aboutSections: AboutSectionData[] = [
  {
    chipLabel: { en: "Our Church", ml: "ഞങ്ങളുടെ ദേവാലയം" },
    title: { en: "Our Church", ml: "ഞങ്ങളുടെ ദേവാലയം" },
    description: {
      en: ` The origin of Christian faith in Chalakudy can be traced back to the time when St. Thomas, one of the twelve apostles of Jesus Christ, set foot in India with his mission shortly after Jesus Christ’s death and resurrection. According to tradition, Apostle Thomas landed in Kodungallur, formerly known as Musiris, in the year 52 AD. At that time Kodungallur was a busy commercial center and an important port. St. Thomas traveled about various parts of Kerala preaching the Gospel and forming Christian communities, which began to grow at several places. The early Christian community in Chalakudy, who were privileged to receive the faith directly from the Apostle, established the parish and built their first church in the year in 600 AD. The church was built in an area predominantly occupied by Brahmins, and the permission to build the church at that location explains the communal harmony that existed in those days and continued even today in this multi-religious town. The church was then situated in the Palace Road, a few hundred meters from its present location where it remained until about 1300 AD when it was shifted to the present site.
    The church is famous from time immemorial for the intercession of Blessed Virgin Mary. The original altar is known as “Swayamvara Altar” — a title rarely bestowed by the Holy Father. It is believed that those who pray at this altar with complete self-surrender would surely receive special blessings. When the church was rebuilt in 1987 the original altar made of wood with intricate carvings was left intact and is preserved as such till this day. On the solemn occasion of the consecration of the remodeled church, His Eminence Cardinal Lourdusamy declared this ancient Church as a Marian Pilgrim Centre in consideration of its contributions to the history of the Church in Kerala and its significance as a centre of pilgrimage and a spiritual powerhouse. The colossal belfry built in gothic style almost a century ago with a huge statue of Mother Mary on the top is of monumental importance and still remains the tallest structure in the vicinity.
    In October 2000, a Marian Grotto was built in the church premises similar to the one in Lourdes. The grotto has been a place of great solace to the devotees, who had longed for such a place to express their devotion to Mother Mary. It helps them get closer to God through Mother Mary, and to grow in noble religious values. A year later in October 2001, a Perpetual Adoration Centre was set up as a memorial of the silver jubilee of Irinjalakuda Diocese and the consecration of its first Bishop Mar James Pazhayattil. Hundreds of devotees come here daily to spend some quiet time with the Lord in the Blessed Sacrament, to share their griefs, concerns, worries and pains, and they return with great relief and peace of mind.
    Holy Land is the latest addition that attracts a great number of tourists to this Pilgrim Centre. On completion of the construction work that took over of 3 years, Cardinal Mar Varkey Vithayathil blessed the Holy Land on September 8, 2006 and the State Tourism & Home Minister Shri Kodiyeri Balakrishnan inaugurated it. Aimed at giving the visitors a feel of being actually in the places of biblical importance, the Holy Land replica provides an absolutely refreshing and spiritually nourishing experience to the pilgrims. Civil structures are built in ancient architectural styles to give as much resemblance to the originals as possible. Astounding artistry and excellent craftsmanship are some of its distinctive features.
    Beginning with the Old Testament incident of the bronze serpent put up by Moses — a symbolic precursor of the Crucified Jesus — the stations in the Holy Land depict all the important events from the life of Jesus, especially His nativity, public ministry, passion, crucifixion, resurrection & ascension and concludes with the scene of Holy Mother Mary being crowned as the Queen of heaven and earth. The Holy Land museum has on display several relics as well as other objects of religious and historical importance. Holy Land is open to the public throughout the day. However, it is most enjoyable in the evenings when the lights are turned on.`,
      ml: "യേശുക്രിസ്തുവിന്റെ മരണത്തിനും ഉത്ഥാനത്തിനും ശേഷം അധികം വൈകാതെ, പന്ത്രണ്ട് ശ്ലീഹന്മാരിൽ ഒരാളായ മാർ തോമാശ്ലീഹാ സുവിശേഷദൗത്യവുമായി ഭാരതത്തിലെത്തിയ കാലത്തോളം ചാലക്കുടിയിലെ ക്രൈസ്തവ വിശ്വാസത്തിന്റെ ഉത്ഭവം നീളുന്നു. പാരമ്പര്യമനുസരിച്ച്, എ.ഡി. 52-ൽ മുസിരിസ് എന്നറിയപ്പെട്ടിരുന്ന കൊടുങ്ങല്ലൂരിലാണ് തോമാശ്ലീഹാ വന്നിറങ്ങിയത്. അക്കാലത്ത് കൊടുങ്ങല്ലൂർ തിരക്കേറിയ വാണിജ്യകേന്ദ്രവും പ്രധാന തുറമുഖവുമായിരുന്നു. കേരളത്തിന്റെ വിവിധ ഭാഗങ്ങളിൽ സുവിശേഷം പ്രസംഗിച്ചുകൊണ്ട് സഞ്ചരിച്ച തോമാശ്ലീഹാ ക്രൈസ്തവ സമൂഹങ്ങൾക്ക് രൂപം നൽകി; അവ പല സ്ഥലങ്ങളിലും വളർന്നു. ശ്ലീഹായിൽനിന്ന് നേരിട്ട് വിശ്വാസം സ്വീകരിക്കാൻ ഭാഗ്യം ലഭിച്ച ചാലക്കുടിയിലെ ആദിമ ക്രൈസ്തവ സമൂഹം ഇടവക സ്ഥാപിക്കുകയും എ.ഡി. 600-ൽ ആദ്യ ദേവാലയം നിർമ്മിക്കുകയും ചെയ്തു. ബ്രാഹ്മണർ ഭൂരിപക്ഷമായിരുന്ന പ്രദേശത്താണ് ദേവാലയം നിർമ്മിച്ചത്; അവിടെ പള്ളി പണിയാൻ അനുമതി ലഭിച്ചത് അക്കാലത്ത് നിലനിന്നിരുന്നതും ഈ ബഹുമത നഗരത്തിൽ ഇന്നും തുടരുന്നതുമായ മതസൗഹാർദ്ദത്തിന്റെ തെളിവാണ്. ഇന്നത്തെ സ്ഥാനത്തുനിന്ന് ഏതാനും നൂറു മീറ്റർ അകലെ പാലസ് റോഡിലായിരുന്നു അന്ന് ദേവാലയം; ഏകദേശം എ.ഡി. 1300 വരെ അവിടെ തുടർന്ന ദേവാലയം പിന്നീട് ഇന്നത്തെ സ്ഥലത്തേക്ക് മാറ്റി.\n    പരിശുദ്ധ കന്യകാമറിയത്തിന്റെ മാധ്യസ്ഥ്യത്താൽ പണ്ടുമുതലേ പ്രസിദ്ധമാണ് ഈ ദേവാലയം. ഇവിടത്തെ പുരാതന അൾത്താര “സ്വയംവര അൾത്താര” എന്നറിയപ്പെടുന്നു — പരിശുദ്ധ പിതാവ് അപൂർവമായി മാത്രം നൽകുന്ന ഒരു സ്ഥാനപ്പേരാണിത്. പൂർണ്ണസമർപ്പണത്തോടെ ഈ അൾത്താരയ്ക്കു മുന്നിൽ പ്രാർത്ഥിക്കുന്നവർക്ക് പ്രത്യേക അനുഗ്രഹങ്ങൾ ലഭിക്കുമെന്നാണ് വിശ്വാസം. 1987-ൽ ദേവാലയം പുനർനിർമ്മിച്ചപ്പോൾ, സൂക്ഷ്മമായ കൊത്തുപണികളുള്ള, മരത്തിൽ തീർത്ത പുരാതന അൾത്താര അതേപടി നിലനിർത്തി; ഇന്നും അത് അങ്ങനെതന്നെ സംരക്ഷിക്കപ്പെടുന്നു. നവീകരിച്ച ദേവാലയത്തിന്റെ കൂദാശാവേളയിൽ, കേരളസഭയുടെ ചരിത്രത്തിന് നൽകിയ സംഭാവനകളും തീർത്ഥാടനകേന്ദ്രമെന്ന നിലയിലും ആത്മീയ ശക്തികേന്ദ്രമെന്ന നിലയിലുമുള്ള പ്രാധാന്യവും കണക്കിലെടുത്ത് കർദ്ദിനാൾ ലൂർദുസാമി തിരുമേനി ഈ പുരാതന ദേവാലയത്തെ മരിയൻ തീർത്ഥാടനകേന്ദ്രമായി പ്രഖ്യാപിച്ചു. ഏകദേശം ഒരു നൂറ്റാണ്ട് മുമ്പ് ഗോഥിക് ശൈലിയിൽ നിർമ്മിച്ച, മുകളിൽ മാതാവിന്റെ വലിയ തിരുസ്വരൂപമുള്ള കൂറ്റൻ മണിമാളിക ചരിത്രപ്രാധാന്യമുള്ളതാണ്; ഇന്നും സമീപപ്രദേശത്തെ ഏറ്റവും ഉയരമുള്ള നിർമ്മിതി അതുതന്നെ.\n    2000 ഒക്ടോബറിൽ ലൂർദിലെ ഗ്രോട്ടോയ്ക്ക് സമാനമായ ഒരു മരിയൻ ഗ്രോട്ടോ പള്ളിയങ്കണത്തിൽ നിർമ്മിച്ചു. മാതാവിനോടുള്ള ഭക്തി പ്രകടിപ്പിക്കാൻ ഇത്തരമൊരിടം ആഗ്രഹിച്ചിരുന്ന വിശ്വാസികൾക്ക് ഈ ഗ്രോട്ടോ വലിയ ആശ്വാസമാണ്. മാതാവിലൂടെ ദൈവത്തോട് കൂടുതൽ അടുക്കാനും ഉത്തമമായ ആത്മീയമൂല്യങ്ങളിൽ വളരാനും ഇത് അവരെ സഹായിക്കുന്നു. ഒരു വർഷത്തിനുശേഷം, 2001 ഒക്ടോബറിൽ, ഇരിങ്ങാലക്കുട രൂപതയുടെ രജതജൂബിലിയുടെയും പ്രഥമ മെത്രാൻ മാർ ജെയിംസ് പഴയാറ്റിലിന്റെ മെത്രാഭിഷേകത്തിന്റെയും സ്മാരകമായി നിത്യാരാധന കേന്ദ്രം ആരംഭിച്ചു. ദിവ്യകാരുണ്യത്തിലെ ഈശോയോടൊപ്പം നിശ്ശബ്ദമായി സമയം ചെലവഴിക്കാനും ദുഃഖങ്ങളും ആകുലതകളും വേദനകളും പങ്കുവയ്ക്കാനുമായി നൂറുകണക്കിന് വിശ്വാസികൾ ദിവസവും ഇവിടെയെത്തുന്നു; വലിയ ആശ്വാസത്തോടും മനസ്സമാധാനത്തോടും കൂടിയാണ് അവർ മടങ്ങുന്നത്.\n    ഈ തീർത്ഥാടനകേന്ദ്രത്തിലേക്ക് ധാരാളം സന്ദർശകരെ ആകർഷിക്കുന്ന ഏറ്റവും പുതിയ കൂട്ടിച്ചേർക്കലാണ് ഹോളി ലാൻഡ്. മൂന്നു വർഷത്തിലേറെ നീണ്ട നിർമ്മാണം പൂർത്തിയായതോടെ 2006 സെപ്റ്റംബർ 8-ന് കർദ്ദിനാൾ മാർ വർക്കി വിതയത്തിൽ ഹോളി ലാൻഡ് ആശീർവദിക്കുകയും സംസ്ഥാന ടൂറിസം-ആഭ്യന്തര മന്ത്രി ശ്രീ കോടിയേരി ബാലകൃഷ്ണൻ ഉദ്ഘാടനം ചെയ്യുകയും ചെയ്തു. ബൈബിൾ പ്രാധാന്യമുള്ള സ്ഥലങ്ങളിൽ യഥാർത്ഥത്തിൽ എത്തിയ പ്രതീതി സന്ദർശകർക്ക് നൽകുക എന്ന ലക്ഷ്യത്തോടെ നിർമ്മിച്ച ഹോളി ലാൻഡ് തീർത്ഥാടകർക്ക് ഉന്മേഷദായകവും ആത്മീയമായി പരിപോഷിപ്പിക്കുന്നതുമായ അനുഭവം പകരുന്നു. യഥാർത്ഥ നിർമ്മിതികളോട് പരമാവധി സാമ്യം ലഭിക്കത്തക്കവിധം പുരാതന വാസ്തുശൈലിയിലാണ് ഇവിടത്തെ കെട്ടിടങ്ങൾ. വിസ്മയകരമായ കലാവൈഭവവും മികച്ച ശില്പചാതുരിയുമാണ് ഇതിന്റെ സവിശേഷതകൾ.\n    ക്രൂശിതനായ ഈശോയുടെ പ്രതീകമായി മോശ ഉയർത്തിയ പിച്ചളസർപ്പത്തിന്റെ പഴയനിയമ സംഭവത്തിൽ തുടങ്ങി, യേശുവിന്റെ ജനനം, പരസ്യജീവിതം, പീഡാനുഭവം, കുരിശുമരണം, ഉത്ഥാനം, സ്വർഗ്ഗാരോഹണം എന്നിങ്ങനെ അവിടുത്തെ ജീവിതത്തിലെ പ്രധാന സംഭവങ്ങളെല്ലാം ഹോളി ലാൻഡിലെ സ്ഥലങ്ങൾ ചിത്രീകരിക്കുന്നു; പരിശുദ്ധ അമ്മ സ്വർഗ്ഗത്തിന്റെയും ഭൂമിയുടെയും രാജ്ഞിയായി കിരീടം ധരിപ്പിക്കപ്പെടുന്ന ദൃശ്യത്തോടെ അത് സമാപിക്കുന്നു. തിരുശേഷിപ്പുകളും മതപരവും ചരിത്രപരവുമായ പ്രാധാന്യമുള്ള മറ്റു വസ്തുക്കളും ഹോളി ലാൻഡ് മ്യൂസിയത്തിൽ പ്രദർശിപ്പിച്ചിട്ടുണ്ട്. ദിവസം മുഴുവൻ ഹോളി ലാൻഡ് പൊതുജനങ്ങൾക്കായി തുറന്നിരിക്കും; എങ്കിലും ദീപങ്ങൾ തെളിയുന്ന സന്ധ്യാസമയമാണ് ഏറ്റവും മനോഹരം.",
    },
    image: churchExterior,
    imageAlt: { en: "Church exterior", ml: "പള്ളിയുടെ പുറംകാഴ്ച" },
    secondaryImage: altarfull,
    secondaryImageAlt: { en: "Altar of the church", ml: "പള്ളിയിലെ അൾത്താര" },
    tertiaryImage: alterbelowregion,
    tertiaryImageAlt: { en: "Altar", ml: "അൾത്താര" },
    imageOnRight: false,
    py: { xs: 8, md: 12 },
  },
  {
    chipLabel: { en: "Holy Land", ml: "ഹോളി ലാൻഡ്" },
    title: { en: "Holy Land", ml: "ഹോളി ലാൻഡ്" },
    description: {
      en: "Holy Land is the latest addition that attracts a great number of tourists to this Pilgrim Centre. On completion of the construction work spanning a period of 3 years, it was Blessed by Cardinal Mar Varkey Vithayathil and inaugurated by Hon. State Tourism Minister on September 8, 2006. Aimed at giving the visitors a feel of being actually in the places of Biblical importance, the Holy Land replica provides an absolutely refreshing and spirituality nourishing experience to the pilgrims. Civil structures are built in ancient architectural styles to give as much resemblance to the originals as possible Astounding artistry and excellent craftsmanship are some of its distinctive features",
      ml: "ഈ തീർത്ഥാടനകേന്ദ്രത്തിലേക്ക് ധാരാളം സന്ദർശകരെ ആകർഷിക്കുന്ന ഏറ്റവും പുതിയ കൂട്ടിച്ചേർക്കലാണ് ഹോളി ലാൻഡ്. മൂന്നു വർഷം നീണ്ട നിർമ്മാണം പൂർത്തിയായതോടെ 2006 സെപ്റ്റംബർ 8-ന് കർദ്ദിനാൾ മാർ വർക്കി വിതയത്തിൽ ഇത് ആശീർവദിക്കുകയും ബഹു. സംസ്ഥാന ടൂറിസം മന്ത്രി ഉദ്ഘാടനം ചെയ്യുകയും ചെയ്തു. ബൈബിൾ പ്രാധാന്യമുള്ള സ്ഥലങ്ങളിൽ യഥാർത്ഥത്തിൽ എത്തിയ പ്രതീതി സന്ദർശകർക്ക് നൽകുക എന്ന ലക്ഷ്യത്തോടെ നിർമ്മിച്ച ഹോളി ലാൻഡ് തീർത്ഥാടകർക്ക് ഉന്മേഷദായകവും ആത്മീയമായി പരിപോഷിപ്പിക്കുന്നതുമായ അനുഭവം പകരുന്നു. യഥാർത്ഥ നിർമ്മിതികളോട് പരമാവധി സാമ്യം ലഭിക്കത്തക്കവിധം പുരാതന വാസ്തുശൈലിയിലാണ് ഇവിടത്തെ കെട്ടിടങ്ങൾ. വിസ്മയകരമായ കലാവൈഭവവും മികച്ച ശില്പചാതുരിയുമാണ് ഇതിന്റെ സവിശേഷതകൾ.",
    },
    image: HolyLand,
    imageAlt: { en: "Holy Land", ml: "ഹോളി ലാൻഡ്" },
    imageOnRight: true,
    py: { xs: 1, md: 2 },
  },
  {
    chipLabel: { en: "Swayamvara Altar", ml: "സ്വയംവര അൾത്താര" },
    title: { en: "Swayamvara Altar", ml: "സ്വയംവര അൾത്താര" },
    description: {
      en: "The church has been renowned from time immemorial for the intercession of Blessed Virgin Mary. The original altar is known as Swayamvara Altar – a rare title bestowed by the Holy Father. It is believed that those who pray at this altar with complete self-surrender would surely receive special blessings. When the church was reconstructed again in 1987, the original altar, made of wood with intricate carvings and murals depicting the glories of Blessed Virgin Mary, was kept intact and is still presesrved as a historical monument. On the occasion of the consecration of the fourth remodeled Church, His Eminence Cardinal Lourdswamy declared this ancient shrine as a Marian Pilgrim Centre, in consideration of its contributions to the history of the Church in Kerala and the significant role it played as a centre of pilgrimage and a spiritual powerhouse. The colossal belfry built in gothic style almost a century ago with a huge statue of Mother Mary on the top, is of monumental importance and still remains as the tallest structure in the vicinity.",
      ml: "പരിശുദ്ധ കന്യകാമറിയത്തിന്റെ മാധ്യസ്ഥ്യത്താൽ പണ്ടുമുതലേ പ്രസിദ്ധമാണ് ഈ ദേവാലയം. ഇവിടത്തെ പുരാതന അൾത്താര സ്വയംവര അൾത്താര എന്നറിയപ്പെടുന്നു — പരിശുദ്ധ പിതാവ് നൽകിയ അപൂർവമായ ഒരു സ്ഥാനപ്പേരാണിത്. പൂർണ്ണസമർപ്പണത്തോടെ ഈ അൾത്താരയ്ക്കു മുന്നിൽ പ്രാർത്ഥിക്കുന്നവർക്ക് പ്രത്യേക അനുഗ്രഹങ്ങൾ ലഭിക്കുമെന്നാണ് വിശ്വാസം. 1987-ൽ ദേവാലയം വീണ്ടും പുനർനിർമ്മിച്ചപ്പോൾ, സൂക്ഷ്മമായ കൊത്തുപണികളും പരിശുദ്ധ കന്യകാമറിയത്തിന്റെ മഹത്വം ചിത്രീകരിക്കുന്ന ചുവർചിത്രങ്ങളുമുള്ള, മരത്തിൽ തീർത്ത പുരാതന അൾത്താര അതേപടി നിലനിർത്തി; ഇന്നും അത് ചരിത്രസ്മാരകമായി സംരക്ഷിക്കപ്പെടുന്നു. നാലാമത് നവീകരിച്ച ദേവാലയത്തിന്റെ കൂദാശാവേളയിൽ, കേരളസഭയുടെ ചരിത്രത്തിന് നൽകിയ സംഭാവനകളും തീർത്ഥാടനകേന്ദ്രമെന്ന നിലയിലും ആത്മീയ ശക്തികേന്ദ്രമെന്ന നിലയിലും വഹിച്ച പ്രധാന പങ്കും കണക്കിലെടുത്ത് കർദ്ദിനാൾ ലൂർദുസാമി തിരുമേനി ഈ പുരാതന ദേവാലയത്തെ മരിയൻ തീർത്ഥാടനകേന്ദ്രമായി പ്രഖ്യാപിച്ചു. ഏകദേശം ഒരു നൂറ്റാണ്ട് മുമ്പ് ഗോഥിക് ശൈലിയിൽ നിർമ്മിച്ച, മുകളിൽ മാതാവിന്റെ വലിയ തിരുസ്വരൂപമുള്ള കൂറ്റൻ മണിമാളിക ചരിത്രപ്രാധാന്യമുള്ളതാണ്; ഇന്നും സമീപപ്രദേശത്തെ ഏറ്റവും ഉയരമുള്ള നിർമ്മിതി അതുതന്നെ.",
    },
    image: oldalter,
    imageAlt: { en: "Old Altar", ml: "പഴയ അൾത്താര" },
    imageOnRight: false,
     py: { xs: 8, md: 12 }
  },
    {
    chipLabel: { en: "Church Bell", ml: "പള്ളിമണി" },
    title: { en: "Church Bell", ml: "പള്ളിമണി" },
    description: {
      en: "Our Church Bell was built in 1887. But, our church bell Fry was built in 1913 under the leadership of Rev. Fr. Devassy Avaran. It has seven steps or flour to denote seven sacraments which leads a Christian person to the perfection. Our Bell Fry is standing higher than the height of the church. On the top of the Bell Fry, there is a statue of Blessed Virgin Mary which installed on 1965 done by Rev. Fr. Antony Thekkiniyath. There is an awesome history behind the Church Bell Fry and The Bell. This Church Bell was built at France. This splendid history is written in the language of Latin, Arabic and Malayalam.",
      ml: "ഞങ്ങളുടെ പള്ളിമണി 1887-ൽ നിർമ്മിച്ചതാണ്. എന്നാൽ മണിമാളിക പണിതത് 1913-ൽ ബഹു. ദേവസ്സി ആവറാൻ അച്ചന്റെ നേതൃത്വത്തിലാണ്. ഒരു ക്രൈസ്തവനെ പൂർണ്ണതയിലേക്ക് നയിക്കുന്ന ഏഴു കൂദാശകളെ സൂചിപ്പിക്കാൻ മണിമാളികയ്ക്ക് ഏഴു നിലകളുണ്ട്. ദേവാലയത്തെക്കാൾ ഉയരത്തിലാണ് മണിമാളിക നിലകൊള്ളുന്നത്. അതിന്റെ മുകളിൽ 1965-ൽ ബഹു. ആന്റണി തെക്കിനിയത്ത് അച്ചൻ സ്ഥാപിച്ച പരിശുദ്ധ കന്യകാമറിയത്തിന്റെ തിരുസ്വരൂപമുണ്ട്. മണിമാളികയ്ക്കും മണിക്കും പിന്നിൽ അത്ഭുതകരമായ ഒരു ചരിത്രമുണ്ട്. ഈ പള്ളിമണി ഫ്രാൻസിലാണ് നിർമ്മിച്ചത്. ഈ മഹത്തായ ചരിത്രം ലത്തീൻ, അറബി, മലയാളം ഭാഷകളിൽ രേഖപ്പെടുത്തിയിട്ടുണ്ട്.",
    },
    image: churchbell,
    imageAlt: { en: "Church Bell", ml: "പള്ളിമണി" },
    imageOnRight: true,
    py: { xs: 1, md: 2 },
  },
    {
    chipLabel: { en: "Grotto of Blessed Virgin Mary", ml: "പരിശുദ്ധ കന്യകാമറിയത്തിന്റെ ഗ്രോട്ടോ" },
    title: { en: "Grotto of Blessed Virgin Mary", ml: "പരിശുദ്ധ കന്യകാമറിയത്തിന്റെ ഗ്രോട്ടോ" },
    description: {
      en: "In October 2000, a Marian Grotto was built in the church premises. It is one of the dream projects of Rev. Fr. Thomas Panjikaran. This grotto, in the name of the Blessed Virgin Mary is so similar to the one in Lourdes. It is big in size in the Diocese of Irinjalakkuda. There are many people come over India and other countries to pray to Blessed Virgin Mary which installed in the Marian Grotto. There are many miracle happened in this grotto by the weeping prayer of the people and it still continuing. There are many special prayer services at Grotto in honor of Blessed Virgin Mary especially Eucharistic Procession during the time of September one to eight and Ladeenju and Novena in every Saturday at 6pm. There are many people come over to Marian Grotto at 7 o’clock to recite rosary.",
      ml: "2000 ഒക്ടോബറിൽ പള്ളിയങ്കണത്തിൽ ഒരു മരിയൻ ഗ്രോട്ടോ നിർമ്മിച്ചു. ബഹു. തോമസ് പഞ്ഞിക്കാരൻ അച്ചന്റെ സ്വപ്നപദ്ധതികളിൽ ഒന്നായിരുന്നു ഇത്. പരിശുദ്ധ കന്യകാമറിയത്തിന്റെ നാമത്തിലുള്ള ഈ ഗ്രോട്ടോ ലൂർദിലെ ഗ്രോട്ടോയോട് ഏറെ സാമ്യമുള്ളതാണ്; ഇരിങ്ങാലക്കുട രൂപതയിലെ ഏറ്റവും വലിയ ഗ്രോട്ടോകളിൽ ഒന്നാണിത്. ഗ്രോട്ടോയിൽ പ്രതിഷ്ഠിച്ചിരിക്കുന്ന പരിശുദ്ധ അമ്മയോട് പ്രാർത്ഥിക്കാൻ ഇന്ത്യയുടെ വിവിധ ഭാഗങ്ങളിൽനിന്നും വിദേശങ്ങളിൽനിന്നും ധാരാളം പേർ എത്തുന്നു. കണ്ണീരോടെയുള്ള പ്രാർത്ഥനകളിലൂടെ ഇവിടെ അനേകം അത്ഭുതങ്ങൾ സംഭവിച്ചിട്ടുണ്ട്; ഇന്നും അത് തുടരുന്നു. സെപ്റ്റംബർ 1 മുതൽ 8 വരെയുള്ള ദിവ്യകാരുണ്യ പ്രദക്ഷിണവും എല്ലാ ശനിയാഴ്ചയും വൈകിട്ട് 6-ന് ലദീഞ്ഞും നൊവേനയും ഉൾപ്പെടെ പരിശുദ്ധ അമ്മയുടെ ബഹുമാനാർത്ഥം നിരവധി പ്രത്യേക പ്രാർത്ഥനാശുശ്രൂഷകൾ ഗ്രോട്ടോയിൽ നടക്കുന്നു. വൈകിട്ട് 7 മണിക്ക് ജപമാല ചൊല്ലാനും അനേകർ മരിയൻ ഗ്രോട്ടോയിലെത്തുന്നു.",
    },
    image: GrottoBlessedVirginMary,
    imageAlt: { en: "Grotto of Blessed Virgin Mary", ml: "പരിശുദ്ധ കന്യകാമറിയത്തിന്റെ ഗ്രോട്ടോ" },
    imageOnRight: false,
     py: { xs: 8, md: 12 }
  },
];
