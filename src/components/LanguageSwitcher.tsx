import { LANGS, useLang } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-0.5 rounded-full bg-charcoal/5 p-0.5 ring-1 ring-charcoal/10 ${className}`}
    >
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            title={l.label}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors ${
              active
                ? "bg-forest-deep text-cream"
                : "text-charcoal/60 hover:text-charcoal"
            }`}
          >
            {l.short}
          </button>
        );
      })}
    </div>
  );
}