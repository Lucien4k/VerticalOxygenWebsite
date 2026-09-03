import { createFileRoute, Link } from "@tanstack/react-router";
import logoHeader from "../assets/logo-header.png.asset.json";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ProjectGallery } from "@/components/ProjectGallery";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Project Gallery — Vertical Oxygen Living Walls" },
      {
        name: "description",
        content:
          "Photos of Vertical Oxygen living walls installed across Canada — hotel lounges, hospitals, offices, atriums and private residences.",
      },
      { property: "og:title", content: "Project Gallery — Vertical Oxygen" },
      {
        property: "og:description",
        content:
          "Hydroponic and aquaponic living walls photographed on site in lobbies, offices and homes across Canada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  const t = useT();
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <header className="border-b border-charcoal/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={logoHeader.url}
              alt="Vertical Oxygen"
              className="h-7 w-auto max-w-[140px] object-contain sm:h-8 md:max-w-none"
            />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm font-medium text-charcoal/70 hover:text-forest-deep"
            >
              ← {t({ en: "Back home", fr: "Retour à l'accueil", zh: "返回首页", es: "Volver al inicio", pa: "ਘਰ ਵਾਪਸ", ar: "العودة إلى الرئيسية", hi: "होम पर वापस" })}
            </Link>
          </div>
        </div>
      </header>

      <ProjectGallery />

      <div className="border-t border-charcoal/10 px-6 py-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-forest-deep px-6 py-3 text-sm font-semibold text-cream"
        >
          {t({ en: "Back home", fr: "Retour à l'accueil", zh: "返回首页", es: "Volver al inicio", pa: "ਘਰ ਵਾਪਸ", ar: "العودة إلى الرئيسية", hi: "होम पर वापस" })}
        </Link>
      </div>
    </main>
  );
}
