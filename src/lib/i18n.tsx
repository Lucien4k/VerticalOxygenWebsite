import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr" | "zh";

export const LANGS: { code: Lang; short: string; label: string; htmlLang: string }[] = [
  { code: "en", short: "EN", label: "English", htmlLang: "en" },
  { code: "fr", short: "FR", label: "Français", htmlLang: "fr" },
  { code: "zh", short: "中文", label: "简体中文", htmlLang: "zh-Hans" },
];

/** A single translatable string. `fr` / `zh` fall back to `en` when missing. */
export type Tr = { en: string; fr?: string; zh?: string };

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
    if (nav.startsWith("fr")) setLangState("fr");
    else if (nav.startsWith("zh")) setLangState("zh");
  }, []);

  useEffect(() => {
    const entry = LANGS.find((l) => l.code === lang);
    if (entry) document.documentElement.lang = entry.htmlLang;
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