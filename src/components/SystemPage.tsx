import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";
import { X, ZoomIn, ArrowRight, Leaf, ArrowLeft } from "lucide-react";
import { useT } from "@/lib/i18n";
import { SYSTEMS, DIAGRAM_LABEL } from "@/lib/systems";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logoHeader from "../assets/logo-header.png.asset.json";

export function SystemPage({ systemKey, compact }: { systemKey: "hydroponic" | "aquaponic"; compact?: boolean }) {
  const t = useT();
  const sys = SYSTEMS.find((s) => s.key === systemKey)!;
  const other = SYSTEMS.find((s) => s.key !== systemKey)!;
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={logoHeader.url}
              alt="Vertical Oxygen"
              className="h-7 max-w-[140px] w-auto object-contain sm:h-8 md:max-w-none"
            />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              to="/"
              className="hidden items-center gap-1 text-sm font-medium text-charcoal/70 hover:text-forest-deep sm:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {t({
                en: "Back home",
                fr: "Retour à l'accueil",
                zh: "返回首页",
                es: "Volver al inicio",
                pa: "ਘਰ ਵਾਪਸ",
                ar: "العودة إلى الرئيسية",
                hi: "होम पर वापस",
              })}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={compact ? "mx-auto max-w-6xl px-6 pb-10 pt-12 md:pt-16" : "mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24"}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-forest-deep/30 bg-forest-deep/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
              <Leaf className="h-3.5 w-3.5" aria-hidden />
              {t(sys.tag)}
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-charcoal md:text-6xl">
              {t(sys.title)} {t({
                en: "living wall",
                fr: "mur végétal",
                zh: "植物墙",
                es: "muro vivo",
                pa: "ਲਿਵਿੰਗ ਵਾਲ",
                ar: "جدار حي",
                hi: "लिविंग वॉल",
              })}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/70 md:text-xl">
              {t(sys.tagline)}
            </p>
            {!compact && (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/60">
                {t(sys.description)}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-sm font-semibold text-cream transition hover:bg-forest-deep/90"
              >
                {t({
                  en: "Get a Quote",
                  fr: "Demander un devis",
                  zh: "获取报价",
                  es: "Obtener un presupuesto",
                  pa: "ਕੋਟ ਪ੍ਰਾਪਤ ਕਰੋ",
                  ar: "احصل على عرض سعر",
                  hi: "कोटेशन प्राप्त करें",
                })}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={`/${other.key}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-forest-deep/40 hover:text-forest-deep"
              >
                {t({
                  en: "See",
                  fr: "Voir",
                  zh: "查看",
                  es: "Ver",
                  pa: "ਦੇਖੋ",
                  ar: "عرض",
                  hi: "देखें",
                })} {t(other.title)}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* Diagram with lightbox */}
          <div
            role="button"
            tabIndex={0}
            aria-label={t({
              en: "Click to enlarge",
              fr: "Cliquer pour agrandir",
              zh: "点击放大",
              es: "Clic para ampliar",
              pa: "ਵੱਡਾ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ",
              ar: "انقر لتكبير",
              hi: "बड़ा करने के लिए क्लिक करें",
            })}
            onClick={() => setLightbox(sys.diagram)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setLightbox(sys.diagram);
            }}
            className="group relative cursor-zoom-in overflow-hidden rounded-3xl bg-white ring-1 ring-charcoal/10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] transition hover:ring-forest/40"
          >
            <img
              src={sys.diagram}
              alt={t(sys.title) + " " + t(DIAGRAM_LABEL)}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-charcoal/0 opacity-0 transition duration-300 group-hover:bg-charcoal/10 group-hover:opacity-100">
              <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-charcoal shadow-lg">
                <ZoomIn className="h-4 w-4" aria-hidden />
                {t({
                  en: "Enlarge",
                  fr: "Agrandir",
                  zh: "放大",
                  es: "Ampliar",
                  pa: "ਵੱਡਾ ਕਰੋ",
                  ar: "تكبير",
                  hi: "बड़ा करें",
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal/10 bg-white/50 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {sys.stats.map((stat) => (
            <div
              key={t(stat.label)}
              className="rounded-2xl border border-charcoal/10 bg-cream p-6 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                {t(stat.label)}
              </p>
              <p className="mt-2 font-serif text-2xl text-forest-deep md:text-3xl">
                {t(stat.value)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="font-serif text-3xl tracking-tight text-charcoal md:text-4xl">
          {t({
            en: "Why choose",
            fr: "Pourquoi choisir",
            zh: "为什么选择",
            es: "Por qué elegir",
            pa: "ਕਿਉਂ ਚੁਣੋ",
            ar: "لماذا تختار",
            hi: "क्यों चुनें",
          })} {t(sys.title).toLowerCase()}?
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sys.highlights.map((h) => (
            <div
              key={t(h.text)}
              className="flex items-start gap-4 rounded-2xl border border-charcoal/10 bg-white p-6"
            >
              <span
                className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${h.color ?? "bg-forest-deep"}`}
                aria-hidden
              />
              <p className="text-base leading-relaxed text-charcoal/80">
                {t(h.text)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer mini */}
      <footer className="border-t border-charcoal/10 bg-white/50 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={logoHeader.url}
              alt="Vertical Oxygen"
              className="h-8 max-w-[160px] w-auto object-contain"
            />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-charcoal/60">
            <Link to="/" className="hover:text-forest-deep">{t({ en: "Home", fr: "Accueil", zh: "首页", es: "Inicio", pa: "ਹੋਮ", ar: "الرئيسية", hi: "होम" })}</Link>
            <Link to="/about" className="hover:text-forest-deep">{t({ en: "About", fr: "À propos", zh: "关于", es: "Nosotros", pa: "ਬਾਰੇ", ar: "من نحن", hi: "परिचय" })}</Link>
            <Link to="/specifications" className="hover:text-forest-deep">{t({ en: "Specifications", fr: "Spécifications", zh: "规格", es: "Especificaciones", pa: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ", ar: "المواصفات", hi: "विनिर्देश" })}</Link>
          </div>
          <p className="text-xs text-charcoal/40">
            © 2026 Vertical Oxygen
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      {mounted && lightbox && typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label={t({
                en: "Close",
                fr: "Fermer",
                zh: "关闭",
                es: "Cerrar",
                pa: "ਬੰਦ ਕਰੋ",
                ar: "إغلاق",
                hi: "बंद करें",
              })}
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 rounded-full bg-cream/10 p-3 text-cream transition hover:bg-cream/20 hover:text-white"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
            <img
              src={lightbox}
              alt={t(sys.title) + " " + t(DIAGRAM_LABEL)}
              className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </main>
  );
}
