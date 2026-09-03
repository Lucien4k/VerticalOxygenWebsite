import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";
import { X, ZoomIn, ArrowRight, Leaf, ArrowLeft } from "lucide-react";
import { useT } from "@/lib/i18n";
import { SYSTEMS, DIAGRAM_LABEL } from "@/lib/systems";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logoHeader from "../assets/logo-header.png.asset.json";
import { SustainabilitySection } from "@/components/SustainabilitySection";

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
      <section className={compact ? "mx-auto max-w-6xl px-6 pb-8 pt-8 md:pb-10 md:pt-16" : "mx-auto max-w-6xl px-6 pb-10 pt-10 md:pb-16 md:pt-24"}>
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-forest-deep/30 bg-forest-deep/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
              <Leaf className="h-3.5 w-3.5" aria-hidden />
              {t(sys.tag)}
            </span>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-charcoal md:mt-6 md:text-6xl">
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
            {!compact && (
              <>
                <p className="mt-4 max-w-xl font-serif text-xl leading-snug tracking-wide text-forest-deep md:mt-6 md:text-2xl">
                  {t(sys.tagline)}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal/60 md:mt-4 md:text-base">
                  {t(sys.description)}
                </p>
              </>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-8">
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
              className="w-full max-h-[70vh] object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
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

      {/* Philosophy */}
      <section className={compact ? "mx-auto max-w-6xl px-6 pb-6 pt-6" : "mx-auto max-w-6xl px-6 pb-8 pt-8 md:pt-10"}>
        <div className="rounded-3xl bg-forest-deep/5 px-5 py-6 ring-1 ring-forest-deep/10 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-deep/80">
            {t({ en: "Our Philosophy", fr: "Notre philosophie", zh: "我们的理念", es: "Nuestra filosofía", pa: "ਸਾਡਾ ਦਰਸ਼ਨ", ar: "فلسفتنا", hi: "हमारा दर्शन" })}
          </p>
          <h2 className="mt-2 font-serif text-xl tracking-tight text-charcoal md:mt-3 md:text-3xl">
            {t({ en: "Beauty with simplicity.", fr: "La beauté dans la simplicité.", zh: "以简约成就美感。", es: "Belleza con simplicidad.", pa: "ਸਾਦਗੀ ਵਿੱਚ ਸੁੰਦਰਤਾ।", ar: "الجمال في البساطة.", hi: "सादगी में सुंदरता।" })}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal/70 md:mt-4 md:text-base">
            {t({
              en: "Living walls couple beauty with simplicity to create healthy, living works of art. Each wall is custom made to satisfy our clients' dreams.",
              fr: "Les murs végétaux allient beauté et simplicité pour créer des œuvres d'art vivantes et saines. Chaque mur est réalisé sur mesure pour concrétiser les rêves de nos clients.",
              zh: "植物墙将美感与简约融为一体，成为健康而有生命力的艺术作品。每一面墙都为客户梦想量身定制。",
              es: "Los muros vegetales combinan belleza y simplicidad para crear obras de arte vivas y saludables. Cada muro se fabrica a medida para cumplir los sueños de nuestros clientes.",
              pa: "ਜੀਵੰਤ ਕੰਧਾਂ ਸਾਦਗੀ ਨਾਲ ਸੁੰਦਰਤਾ ਨੂੰ ਜੋੜ ਕੇ ਸਿਹਤਮੰਦ, ਜੀਵਤ ਕਲਾ ਦੀਆਂ ਰਚਨਾਵਾਂ ਬਣਾਉਂਦੀਆਂ ਹਨ। ਹਰ ਕੰਧ ਸਾਡੇ ਗਾਹਕਾਂ ਦੇ ਸੁਪਨਿਆਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਖਾਸ ਤੌਰ 'ਤੇ ਬਣਾਈ ਜਾਂਦੀ ਹੈ।",
              ar: "تجمع الجدران الخضراء بين الجمال والبساطة لخلق أعمال فنية حية وصحية. يُصنع كل جدار خصيصًا لتحقيق أحلام عملائنا.",
              hi: "लिविंग वॉल सुंदरता और सादगी को जोड़कर स्वस्थ, जीवंत कला कृतियाँ बनाती हैं। हर दीवार हमारे ग्राहकों के सपनों को पूरा करने के लिए विशेष रूप से बनाई जाती है।",
            })}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal/10 bg-white/50 py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50 md:hidden">
            {t({ en: "At a glance", fr: "En bref", zh: "一览", es: "De un vistazo", pa: "ਇੱਕ ਨਜ਼ਰ ਵਿੱਚ", ar: "لمحة سريعة", hi: "एक नज़र में" })}
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
            {sys.stats.map((stat) => (
              <div
                key={t(stat.label)}
                className="rounded-2xl border border-charcoal/10 bg-cream p-4 text-center md:p-6"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/50 md:text-xs md:tracking-[0.18em]">
                  {t(stat.label)}
                </p>
                <p className="mt-1.5 font-serif text-lg leading-tight text-forest-deep md:mt-2 md:text-3xl">
                  {t(stat.value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      {!compact && (
        <section className="mx-auto max-w-6xl px-6 py-10 md:py-24">
          <h2 className="font-serif text-2xl tracking-tight text-charcoal md:text-4xl">
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
          <div className="mt-5 grid grid-cols-2 gap-3 md:mt-8 md:gap-4 lg:grid-cols-3">
            {sys.highlights.map((h) => (
              <div
                key={t(h.text)}
                className="flex items-start gap-2.5 rounded-2xl border border-charcoal/10 bg-white p-4 md:gap-4 md:p-6"
              >
                <span
                  className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${h.color ?? "bg-forest-deep"}`}
                  aria-hidden
                />
                <p className="text-sm leading-snug text-charcoal/80 md:text-base md:leading-relaxed">
                  {t(h.text)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Mobile-only: quick compare with the other system */}
      {!compact && (
        <section className="mx-auto max-w-6xl px-6 pb-10 md:hidden">
          <a
            href={`/${other.key}`}
            className="flex items-center justify-between gap-4 rounded-2xl bg-forest-deep p-5 text-cream transition hover:bg-forest-deep/90"
          >
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/70">
                {t({ en: "Compare", fr: "Comparer", zh: "对比", es: "Comparar", pa: "ਤੁਲਨਾ ਕਰੋ", ar: "قارن", hi: "तुलना करें" })}
              </p>
              <p className="mt-1 font-serif text-xl tracking-wide">
                {t(other.title)} — {t(other.tag)}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
          </a>
        </section>
      )}

      {/* Closed-loop water system */}
      <SustainabilitySection />

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
            <Link to="/gallery" className="hover:text-forest-deep">{t({ en: "Gallery", fr: "Galerie", zh: "图库", es: "Galería", pa: "ਗੈਲਰੀ", ar: "المعرض", hi: "गैलरी" })}</Link>
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
