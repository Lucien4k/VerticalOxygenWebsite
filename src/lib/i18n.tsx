import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr" | "zh" | "es" | "pa" | "ar" | "hi";

export const LANGS: {
  code: Lang;
  short: string;
  label: string;
  htmlLang: string;
  dir?: "ltr" | "rtl";
}[] = [
  { code: "en", short: "EN", label: "English", htmlLang: "en" },
  { code: "fr", short: "FR", label: "Français", htmlLang: "fr" },
  { code: "es", short: "ES", label: "Español", htmlLang: "es" },
  { code: "zh", short: "中文", label: "简体中文", htmlLang: "zh-Hans" },
  { code: "pa", short: "ਪੰਜਾਬੀ", label: "ਪੰਜਾਬੀ", htmlLang: "pa" },
  { code: "hi", short: "हिन्दी", label: "हिन्दी", htmlLang: "hi" },
  { code: "ar", short: "العربية", label: "العربية", htmlLang: "ar", dir: "rtl" },
];

/** A single translatable string. Every locale falls back to `en` when missing. */
export type Tr = {
  en: string;
  fr?: string;
  zh?: string;
  es?: string;
  pa?: string;
  ar?: string;
  hi?: string;
};

const STORAGE_KEY = "vo-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && LANGS.some((l) => l.code === stored)) {
      setLangState(stored);
      return;
    }
    const nav = window.navigator.language?.toLowerCase() ?? "";
    const match = LANGS.find((l) => l.code !== "en" && nav.startsWith(l.code));
    if (match) setLangState(match.code);
  }, []);

  useEffect(() => {
    const entry = LANGS.find((l) => l.code === lang);
    if (entry) {
      document.documentElement.lang = entry.htmlLang;
      document.documentElement.dir = entry.dir ?? "ltr";
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

/**
 * Returns a translate function used inline:
 *   const t = useT();
 *   t({ en: "Get a quote", fr: "Demander un devis", zh: "获取报价" })
 */
export function useT() {
  const { lang } = useLang();
  return useCallback((s: Tr) => (lang === "en" ? s.en : (s[lang] ?? s.en)), [lang]);
}