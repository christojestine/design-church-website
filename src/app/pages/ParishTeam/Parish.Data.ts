import frVarghese from "../../assets/images/Fr.Varghese.webp";
import frAlbin from "../../assets/images/Fr.Albin.webp";
import frJoyal from "../../assets/images/Fr.Joyal.webp";
import frMelbin from "../../assets/images/Fr.Melbin.webp";
import sunil from "../../assets/images/sunil.webp";
import sabu from "../../assets/images/sabu.webp";
import thomas from "../../assets/images/thomas.webp";
import poly from "../../assets/images/poly.webp";
import harry from "../../assets/images/harry.webp";
import benny from "../../assets/images/benny.webp";
import type { Text } from "../../i18n/LanguageContext";
import type { Priest } from "./PriestDetailsModal";

const vicar: Text = { en: "Vicar", ml: "വികാരി" };
const asstVicar: Text = { en: "Asst Vicar", ml: "അസി. വികാരി" };

export const priest: Priest[] = [
  {
    name: { en: "Fr. Varghese Pathadan", ml: "ഫാ. വർഗീസ് പാത്താടൻ" },
    role: vicar,
    color: "#dbeafe",
    photo: frVarghese,
    dateofbirth: "02/10/1958",
    dateofordination: "31/12/1985",
    homeparish: { en: "Poovathussery", ml: "പൂവത്തുശ്ശേരി" },
    feastday: { en: "April 24", ml: "ഏപ്രിൽ 24" },
    currentposition: {
      en: "Vicar of St. Mary’s Forane Church Chalakudy",
      ml: "ചാലക്കുടി സെന്റ് മേരീസ് ഫൊറോന പള്ളി വികാരി",
    },
  },
  {
    name: { en: "Fr. Albin Pudussery", ml: "ഫാ. ആൽബിൻ പുതുശ്ശേരി" },
    role: asstVicar,
    color: "#ede9fe",
    photo: frAlbin,
    dateofbirth: "04/07/1996",
    dateofordination: "01/01/2025",
    homeparish: {
      en: "St Antony's Church Kottat",
      ml: "കോട്ടാറ്റ് സെന്റ് ആന്റണീസ് പള്ളി",
    },
    feastday: { en: "June 29", ml: "ജൂൺ 29" },
    currentposition: {
      en: "Asst.Vicar of St. Mary’s Forane Church Chalakudy",
      ml: "ചാലക്കുടി സെന്റ് മേരീസ് ഫൊറോന പള്ളി അസി. വികാരി",
    },
  },
  {
    name: { en: "Fr. Joyal Pullely", ml: "ഫാ. ജോയൽ പുല്ലേലി" },
    role: asstVicar,
    color: "#fef3c7",
    photo: frJoyal,
    dateofbirth: "29/10/1998",
    dateofordination: "29/12/2025",
    homeparish: {
      en: "St. Joseph's Church Mettipadam",
      ml: "മേട്ടിപ്പാടം സെന്റ് ജോസഫ്സ് പള്ളി",
    },
    feastday: { en: "March 19", ml: "മാർച്ച് 19" },
    currentposition: {
      en: "Asst. Vicar of St. Mary’s Forane Church Chalakudy",
      ml: "ചാലക്കുടി സെന്റ് മേരീസ് ഫൊറോന പള്ളി അസി. വികാരി",
    },
  },
  {
    name: { en: "Fr. Melbin Joseph Ayyunnickal", ml: "ഫാ. മെൽബിൻ ജോസഫ് അയ്യുണ്ണിക്കൽ" },
    role: asstVicar,
    color: "#dcfce7",
    photo: frMelbin,
    dateofbirth: "23/09/1997",
    dateofordination: "26/01/2026",
    homeparish: {
      en: "St. Anthony's Church Kamakshy",
      ml: "കാമാക്ഷി സെന്റ് ആന്റണീസ് പള്ളി",
    },
    feastday: { en: "July 25 (St. James)", ml: "ജൂലൈ 25 (വി. യാക്കോബ്)" },
    currentposition: {
      en: "Asst. Vicar of St. Mary’s Forane Church Chalakudy",
      ml: "ചാലക്കുടി സെന്റ് മേരീസ് ഫൊറോന പള്ളി അസി. വികാരി",
    },
  },
];

export interface Member {
  name: Text;
  photo: string;
}

export const parishCouncil: Member[] = [
  { name: { en: "Thomas Paranilam", ml: "തോമസ് പാറനിലം" }, photo: thomas },
  { name: { en: "Shabu Kuriyaparambil", ml: "ഷാബു കുരിയപ്പറമ്പിൽ" }, photo: sabu },
  { name: { en: "Sunil David Chakkalakkal", ml: "സുനിൽ ഡേവിഡ് ചക്കലക്കൽ" }, photo: sunil },
  { name: { en: "Poly Mechery", ml: "പോളി മേച്ചേരി" }, photo: poly },
];

export const Sacristan: Member[] = [
  { name: { en: "Harry Varghese", ml: "ഹാരി വർഗീസ്" }, photo: harry },
  { name: { en: "Benny", ml: "ബെന്നി" }, photo: benny },
];
