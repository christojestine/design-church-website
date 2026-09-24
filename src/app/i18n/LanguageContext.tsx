import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ml";

/** A piece of text in both languages. Malayalam is required, so nothing can be left untranslated. */
export type Text = { en: string; ml: string };

const STORAGE_KEY = "lang";
const isLang = (v: unknown): v is Lang => v === "en" || v === "ml";

/** `?lang=ml` in the URL (handy for shared links) wins, then the visitor's saved choice, then English. */
function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // Storage can be blocked (private mode); fall back to English.
  }
  return "en";
}

interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Picks the current language's version of a `Text`. */
  tr: (text: Text) => string;
}

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    // Drives the Malayalam font/spacing rules in theme.css and tells screen readers the language.
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Not critical: the choice just won't be remembered.
    }
  }, [lang]);

  const value = useMemo<LanguageValue>(
    () => ({ lang, setLang, tr: (text) => text[lang] }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return value;
}
