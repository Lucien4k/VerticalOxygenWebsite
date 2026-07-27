import { createFileRoute, Link } from "@tanstack/react-router";
import outdoorFrame from "../assets/projects/outdoor-wood-frame.jpg.asset.json";
import lobbyPanels from "../assets/projects/lobby-panels.jpg.asset.json";
import edmontonLobby from "../assets/projects/edmonton-lobby.jpg.asset.json";
import fairviewAquarium from "../assets/projects/fairview-aquarium.jpg.asset.json";
import fairviewInstall from "../assets/projects/fairview-install.jpg.asset.json";
import tropicalDense from "../assets/projects/tropical-dense.jpg.asset.json";
import succulentTapestry from "../assets/projects/succulent-tapestry.jpg.asset.json";
import pothosCascade from "../assets/projects/pothos-cascade.jpg.asset.json";
import spiderPothos from "../assets/projects/spider-pothos.jpg.asset.json";
import sedumBloom from "../assets/projects/sedum-bloom.jpg.asset.json";
import fullCircleCalgary from "../assets/projects/full-circle-calgary.jpg.asset.json";
import fullCircle2Calgary from "../assets/projects/full-circle-2-calgary.jpg.asset.json";
import tallJungleWall from "../assets/projects/tall-jungle-wall.jpg.asset.json";
import mosaicBase from "../assets/projects/mosaic-base.jpg.asset.json";
import higherHealth from "../assets/projects/higher-health.jpg.asset.json";
import iffWall from "../assets/projects/iff-wall.jpg.asset.json";
import saunaPothos from "../assets/projects/sauna-pothos.jpg.asset.json";
import cafePlanter from "../assets/projects/cafe-planter.jpg.asset.json";
import curvedTropical from "../assets/projects/curved-tropical.jpg.asset.json";
import glenoraLobby from "../assets/projects/glenora-lobby.jpg.asset.json";
import coaldaleHall from "../assets/projects/coaldale-hall.png.asset.json";
import lushTropicalWall from "../assets/projects/lush-tropical-wall.jpg.asset.json";
import coaldaleFlowering from "../assets/projects/coaldale-flowering.jpg.asset.json";
import { Phone, Mail, MapPin, Leaf, ArrowRight, Instagram, X, ZoomIn } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { LocationsMap } from "@/components/LocationsMap";
import { NavMenu } from "@/components/NavMenu";
import { Parallax } from "@/components/Parallax";
import { WordsReveal } from "@/components/WordsReveal";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollFrames } from "@/components/ScrollFrames";
import { FRAME_URLS } from "@/lib/frame-urls";
import { ScrollFramesSection } from "@/components/ScrollFramesSection";
import { HERO2_FRAME_URLS } from "@/lib/frame-urls-hero2";
import { useState, useEffect, useRef } from "react";
import installGlenora from "../assets/installs/glenora-1.jpg.asset.json";
import installCoaldale2 from "../assets/installs/coaldale-2-2.jpg.asset.json";
import install5212 from "../assets/installs/img-5212.jpg.asset.json";
import install5215 from "../assets/installs/img-5215.jpg.asset.json";
import install5221 from "../assets/installs/img-5221.jpg.asset.json";
import install0628 from "../assets/installs/img-0628.jpg.asset.json";
import cutoutCoaldale from "../assets/cutouts/coaldale-wall.png.asset.json";
import cutoutWallA from "../assets/cutouts/wall-a.png.asset.json";
import cutoutWallB from "../assets/cutouts/wall-b.png.asset.json";
import cutoutWallC from "../assets/cutouts/wall-c.png.asset.json";
import diagramAquaponic from "../assets/diagrams/aquaponic-wall-diagram-v7.png.asset.json";
import diagramHydroponic from "../assets/diagrams/hydroponic-wall-diagram-v5.png.asset.json";
import woodTexture from "../assets/textures/wood-texture-v2.jpg.asset.json";
import logoHeader from "../assets/logo-header.png.asset.json";

const SYSTEMS = [
  {
    key: "hydroponic",
    title: "Hydroponic",
    tag: "Soilless · Recirculating",
    diagram: diagramHydroponic.url,
    tagline: "Lightweight. Precise. Effortless.",
    description:
      "Recirculating water and dosed nutrients feed a felt matrix — soilless, low-weight, and simple to maintain across large-format installations.",
    stats: [
      { label: "Wall weight", value: "≈ 8 lb/ft²" },
      { label: "Water use", value: "Recirculating" },
      { label: "Best for", value: "Lobbies, offices, tall installs" },
      { label: "Wall depth", value: "4–6 in" },
    ],
    highlights: [
      "Ultra-light felt matrix",
      "Automated dosing + irrigation",
      "Scales to any wall size",
    ],
  },
  {
    key: "aquaponic",
    title: "Aquaponic",
    tag: "Closed-loop · Fish + plants",
    diagram: diagramAquaponic.url,
    tagline: "One ecosystem. Zero waste.",
    description:
      "Plants and tilapia share a single closed loop. Fish waste becomes nutrients, roots polish the water, and the system self-regulates with minimal input.",
    stats: [
      { label: "Water use", value: "~90% less" },
      { label: "Fertilizer", value: "None added" },
      { label: "Best for", value: "Feature walls, cafés, showrooms" },
      { label: "Wall depth", value: "8–12 in" },
    ],
    highlights: [
      "Live fish tank integrated at base",
      "Fully soilless, gravel media beds",
      "Continuous nutrient cycle",
    ],
  },
];

function SystemsShowcase() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const sys = SYSTEMS[active];
  const next = SYSTEMS[(active + 1) % SYSTEMS.length];

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
            Our Systems
          </p>
          <WordsReveal
            as="h2"
            text="Two ways to grow a wall."
            className="display-heading text-5xl leading-[1] text-charcoal md:text-7xl lg:text-[5.5rem]"
          />
          <p className="mt-6 max-w-xl text-charcoal/70 md:text-lg">
            Every Vertical Oxygen wall is built on one of two engineered systems. Tap through to see how each works and where it fits best.
          </p>
        </div>

        {/* Tab switcher with sliding pill */}
        <div
          role="tablist"
          aria-label="Living wall systems"
          className="relative inline-flex self-start rounded-full bg-charcoal/5 p-1.5 ring-1 ring-charcoal/10 backdrop-blur md:self-auto"
        >
          <div
            className="absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-charcoal shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(${active * 100}%)` }}
            aria-hidden
          />
          {SYSTEMS.map((s, i) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`relative z-10 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] transition-colors duration-500 md:px-8 md:py-3 md:text-sm ${
                active === i ? "text-cream" : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <div key={sys.key} className="systems-swap grid gap-10 md:grid-cols-12 md:gap-14">
        {/* Diagram plaque */}
        <div className="md:col-span-7">
          <button
            type="button"
            onClick={() => setLightbox({ src: sys.diagram, title: `${sys.title} living wall diagram` })}
            className="group relative block w-full overflow-hidden rounded-3xl p-3 text-left ring-1 ring-charcoal/10 transition-shadow hover:shadow-xl md:p-4"
            aria-label={`Enlarge ${sys.title} diagram`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${woodTexture.url})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-cream/92" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl bg-white">
              <img
                src={sys.diagram}
                alt={`${sys.title} living wall diagram`}
                className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02] md:max-h-[46rem]"
                loading="lazy"
              />
              {/* Zoom hint */}
              <span className="pointer-events-none absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/80 text-cream opacity-0 shadow-lg backdrop-blur transition-opacity duration-300 group-hover:opacity-100 md:h-12 md:w-12">
                <ZoomIn className="h-5 w-5" aria-hidden />
              </span>
            </div>
          </button>
        </div>

        {/* Details */}
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest">
            {sys.tag}
          </p>
          <h3 className="mt-3 font-serif text-4xl italic text-charcoal md:text-5xl">
            {sys.tagline}
          </h3>
          <p className="mt-5 text-charcoal/75 md:text-lg">{sys.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-charcoal/10 ring-1 ring-charcoal/10">
            {sys.stats.map((s) => (
              <div key={s.label} className="bg-cream p-4 md:p-5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                  {s.label}
                </dt>
                <dd className="mt-1.5 font-serif text-xl text-charcoal md:text-2xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 space-y-3">
            {sys.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-charcoal/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-cream shadow-lg transition hover:bg-forest-deep/90 md:text-sm"
            >
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => setActive((active + 1) % SYSTEMS.length)}
              className="group inline-flex items-center gap-2 rounded-full border border-charcoal/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-charcoal transition hover:bg-charcoal hover:text-cream md:text-sm"
            >
              See {next.title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.title}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl bg-white object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vertical Oxygen — Custom Living Walls" },
      { name: "description", content: "Vertical Oxygen creates custom living walls that couple beauty with simplicity. Tropical plants, hydroponic and soil-based systems, crafted for your space." },
      { property: "og:title", content: "Vertical Oxygen — Custom Living Walls" },
      { property: "og:description", content: "Vertical Oxygen creates custom living walls that couple beauty with simplicity. Tropical plants, hydroponic and soil-based systems, crafted for your space." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [heroDone, setHeroDone] = useState(false);
  const blurLayerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const range = window.innerHeight * 1.75;
      const t = Math.min(1, Math.max(0, window.scrollY / range));
      const blur = t * 12; // px
      if (blurLayerRef.current) {
        blurLayerRef.current.style.backdropFilter = `blur(${blur}px)`;
        blurLayerRef.current.style.opacity = String(t);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      {/* Fixed hero: stays pinned while the rest of the page scrolls up over it */}
      <section className="fixed inset-x-0 top-0 z-0 h-screen overflow-hidden">
        {/* Background: scroll-driven frame sequence */}
        <div className="absolute inset-0">
          <ScrollFrames frames={FRAME_URLS} scrollRange={typeof window !== "undefined" ? window.innerHeight * 1.75 : 1750} onComplete={setHeroDone} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/50" aria-hidden />
        {/* Soft blur that intensifies as the page scrolls up over the hero */}
        <div ref={blurLayerRef} className="pointer-events-none absolute inset-0 z-[5] will-change-[backdrop-filter,opacity]" aria-hidden />
        <FloatingLeaves className="z-10" />

        {/* Floating rounded top bars — hero video shows around them */}
        <div className="absolute inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
          <div className="mx-auto max-w-6xl space-y-2">
            {/* Utility strip */}
            <div className="hidden overflow-hidden rounded-full bg-white/80 px-5 py-2 text-xs text-charcoal shadow-lg ring-1 ring-charcoal/10 backdrop-blur-md md:block">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <a href="tel:+16049971760" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
                    <Phone className="h-3.5 w-3.5" aria-hidden />
                    <span>604-997-1760 <span className="text-charcoal/60">EN</span></span>
                  </a>
                  <a href="tel:+14038613732" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
                    <Phone className="h-3.5 w-3.5" aria-hidden />
                    <span>403-861-3732 <span className="text-charcoal/60">FR</span></span>
                  </a>
                  <a href="mailto:verticaloxygen@gmail.com" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
                    <Mail className="h-3.5 w-3.5" aria-hidden />
                    <span>verticaloxygen@gmail.com</span>
                  </a>
                  <span className="flex items-center gap-1.5 opacity-90">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                     <span>Installations across North America</span>
                  </span>
                  <span className="flex items-center gap-1.5 opacity-90">
                    <Leaf className="h-3.5 w-3.5" aria-hidden />
                    <span>Living &amp; moss walls</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Main nav pill */}
            <nav className="relative flex items-center justify-between gap-4 rounded-full px-5 py-3 shadow-xl ring-1 ring-charcoal/10">
              <div
                className="absolute inset-0 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${woodTexture.url})` }}
                aria-hidden
              />
              <div className="absolute inset-0 rounded-full bg-white/88" aria-hidden />
              <div className="relative z-10 flex w-full items-center justify-between gap-4">
                <a href="/" className="flex items-center">
                  <img
                    src={logoHeader.url}
                    alt="Vertical Oxygen"
                    className="h-8 w-auto md:h-9"
                  />
                </a>
                <NavMenu
                  menus={[
                    {
                      label: "Work",
                      href: "#work",
                      items: [
                        { label: "Our Systems", description: "Hydroponic & aquaponic walls", href: "#work", image: iffWall.url },
                        { label: "Recent Installations", description: "Photos from real projects", href: "#motion", image: lobbyPanels.url },
                        { label: "Maintenance & Guarantee", description: "100% plant guarantee with service", href: "#maintenance", image: higherHealth.url },
                        { label: "Specifications", description: "Loads, water, fire ratings", href: "/specifications", image: outdoorFrame.url },
                      ],
                    },
                    {
                      label: "Locations",
                      href: "#locations",
                      items: [
                        { label: "West Coast", description: "Vancouver · Victoria · Kelowna", href: "#locations", image: fullCircleCalgary.url },
                        { label: "Prairies & North", description: "Calgary · Edmonton · Yellowknife", href: "#locations", image: curvedTropical.url },
                        { label: "Ontario & Manitoba", description: "Toronto · Hamilton · Winnipeg", href: "#locations", image: tallJungleWall.url },
                        { label: "Atlantic Canada", description: "Halifax · Moncton · St. John's", href: "#locations", image: saunaPothos.url },
                      ],
                    },
                    {
                      label: "About",
                      href: "/about",
                      items: [],
                      description:
                        "Meet Nathalie Callede and Tim Suddaby — the woman-owned team behind Vertical Oxygen and every wall we've built.",
                    },
                    {
                      label: "Specifications",
                      href: "/specifications",
                      items: [],
                      description:
                        "Technical datasheets, load and water specs, fire ratings, and CAD/BIM downloads for architects, engineers, and contractors.",
                    },
                  ]}
                />
                <a
                  href="#quote"
                  className="slide-cta group inline-flex items-center rounded-full bg-forest-deep px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep/90"
                >
                  <span className="slide-cta-arrow pl-3 text-cream">
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="slide-cta-label">Get a Quote</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Hero content */}
        <div
          className="relative mx-auto flex h-full max-w-6xl items-center px-6 pt-40 pb-16 md:pt-44 transition-opacity duration-500"
          style={{ opacity: heroDone ? 0 : 1 }}
        >
          <div className="max-w-2xl">
            <div className="reveal-fade is-visible">
              <span className="text-shadow-hero mb-4 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-cream backdrop-blur-sm">
                Since 2011
              </span>
              <p className="text-shadow-hero mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cream">
                Custom Living Walls
              </p>
              <h1 className="display-heading-hero text-5xl text-cream md:text-7xl lg:text-8xl">
                Living works{" "}
                <span className="whitespace-nowrap">of art</span>
              </h1>
              <p className="text-shadow-hero mt-6 max-w-xl text-lg font-medium leading-relaxed text-cream">
                We couple beauty with simplicity to create healthy, living works of art.
                Each wall is custom made to satisfy your dreams.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 reveal is-visible" style={{ animationDelay: "200ms" }}>
              <a
                href="#quote"
                className="slide-cta group relative inline-flex items-center rounded-full bg-forest-deep px-7 py-3.5 text-sm font-semibold text-cream shadow-lg transition-colors hover:bg-forest-deep/90"
              >
                <span className="slide-cta-arrow pl-4 text-cream">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
                <span className="slide-cta-label">Get a Quote</span>
              </a>
              <a
                href="#work"
                className="slide-cta group relative inline-flex items-center rounded-full border border-cream/40 bg-cream/10 px-7 py-3.5 text-sm font-semibold text-cream shadow-lg transition-colors hover:bg-cream/20"
              >
                <span className="slide-cta-arrow pl-4 text-cream">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
                <span className="slide-cta-label">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Everything below scrolls up over the fixed hero */}
      <div className="relative z-10 mt-[175vh] bg-background">

      {/* Scroll-scrubbed panel sequence — second hero */}
      <ScrollFramesSection
        frames={HERO2_FRAME_URLS}
        scrollLength={1.5}
        overlay={
          <div className="max-w-2xl">
            <p className="text-shadow-hero mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white">
              Engineered in layers
            </p>
            <WordsReveal
              as="h2"
              text="Panels that come together as one."
              className="display-heading-hero text-4xl text-cream md:text-6xl lg:text-7xl"
            />
            <p className="text-shadow-hero mt-6 text-lg font-medium leading-relaxed text-cream md:text-xl">
              Every wall is built from modular panels — designed, planted, and
              assembled on-site. Scroll to see how the pieces come together.
            </p>
          </div>
        }
      />

      {/* Systems Showcase — replaces the old gallery with an interactive systems module */}
      <section id="work" className="relative z-20 -mt-[40vh] overflow-hidden rounded-t-[3rem] bg-cream text-charcoal shadow-[0_-40px_80px_-40px_rgba(0,0,0,0.45)]">
        <img
          src={cutoutCoaldale.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-24 h-[420px] w-[560px] rotate-[-6deg] object-contain opacity-40 md:h-[560px] md:w-[760px]"
        />
        <SystemsShowcase />
      </section>

      {/* Locations Map */}
      {/* Wood shelf divider */}
      <div className="relative h-5 w-full overflow-hidden md:h-7" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>
      <section id="locations" className="relative overflow-hidden">
        {/* Wood grain background with a cream wash so it isn't blank or pink */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-cream/90" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/60" aria-hidden />
        <img
          src={cutoutWallC.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-6rem] h-[380px] w-[380px] object-contain opacity-30 md:h-[520px] md:w-[520px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
                Where We Grow
              </p>
              <WordsReveal
                as="h2"
                text="Living walls, coast to coast."
                className="display-heading text-4xl leading-[1.05] text-charcoal md:text-6xl"
              />
              <p className="mt-4 text-charcoal/70">
                Hover any pin to see the installation — from Vancouver lofts to
                Halifax lobbies, Yellowknife to St. John's.
              </p>
            </div>
          </Reveal>
          <Reveal variant="fade">
            <LocationsMap />
          </Reveal>
        </div>
      </section>

      {/* Photo showcase — living, breathing installations */}
      {/* Wood shelf divider */}
      <div className="relative h-5 w-full overflow-hidden md:h-7" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})`, backgroundPositionX: "30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />
      </div>
      <section id="motion" className="relative overflow-hidden bg-cream text-charcoal">
        <img
          src={cutoutWallA.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-32 h-[420px] w-[600px] object-contain opacity-55 md:h-[560px] md:w-[800px]"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-14 grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terra-light">
                Recent Installations
              </p>
              <WordsReveal
                as="h2"
                text="Living, breathing installations."
                className="display-heading text-4xl leading-[1.02] text-charcoal md:text-7xl"
              />
            </Reveal>
            <Reveal delay={200} className="md:col-span-5">
              <p className="text-charcoal/75 md:text-lg">
                A few of our walls, photographed on site — lobbies, offices and
                community spaces where the planting has fully settled in.
              </p>
            </Reveal>
          </div>

          <div className="grid items-start gap-4 md:grid-cols-12 md:gap-5">
            {[
              {
                img: installGlenora.url,
                title: "Glenora Lobby",
                caption: "Edmonton, AB · Five-panel feature wall",
                span: "md:col-span-8",
                ratio: "aspect-[4/3]",
              },
              {
                img: install5215.url,
                title: "Atrium Column",
                caption: "Calgary, AB · Double-sided hydroponic",
                span: "md:col-span-4",
                ratio: "aspect-[3/4]",
              },
              {
                img: install5221.url,
                title: "Reception Wall",
                caption: "Corporate office · Mixed tropical palette",
                span: "md:col-span-5",
                ratio: "aspect-[4/3]",
              },
              {
                img: installCoaldale2.url,
                title: "Coaldale, Alberta",
                caption: "Community hall · Full-height install",
                span: "md:col-span-3",
                ratio: "aspect-[3/4]",
              },
              {
                img: install5212.url,
                title: "Boardroom Divider",
                caption: "Office interior · Free-standing panel",
                span: "md:col-span-4",
                ratio: "aspect-[4/3]",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className={p.span}>
                <figure className={`group relative overflow-hidden rounded-[1.75rem] bg-charcoal/5 ring-1 ring-charcoal/10 ${p.ratio}`}>
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.caption}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.06]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
                    <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
                      <p className="font-serif text-lg text-cream md:text-2xl">
                        {p.title}
                      </p>
                      <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-cream/70 md:text-xs">
                        {p.caption}
                      </p>
                    </div>
                    <span className="hidden font-mono text-[0.65rem] text-cream/50 md:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Guarantee */}
      <section id="maintenance" className="relative overflow-hidden bg-cream text-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
              Maintenance & Guarantee
            </p>
            <h2 className="display-heading max-w-3xl text-4xl leading-[1.05] text-charcoal md:text-6xl">
              100% plant guarantee — <em>with maintenance.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/70">
              A living wall is a living thing. Our maintenance program keeps every wall
              thriving — and every wall on an active maintenance agreement is covered by
              our 100% plant guarantee. If a plant fails, we replace it. No charge, no
              questions. The guarantee is available exclusively with maintenance service.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "100% Plant Guarantee",
                body: "Any plant that declines or dies is replaced at no cost for the life of your maintenance agreement.",
              },
              {
                title: "Scheduled Maintenance",
                body: "Regular visits for pruning, feeding, pest management, irrigation checks, and system calibration.",
              },
              {
                title: "Plant Warranty Terms",
                body: "Coverage stays active as long as maintenance is current. Without a maintenance plan, the guarantee does not apply.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-charcoal/10 bg-white p-8">
                  <Leaf className="h-5 w-5 text-forest" />
                  <h3 className="mt-5 text-xl font-semibold text-charcoal">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-7 py-3 text-sm font-semibold text-cream transition hover:opacity-90"
              >
                Ask about maintenance <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/specifications"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-forest underline underline-offset-4"
              >
                Full warranty terms
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy / About */}
      {/* Wood shelf divider */}
      <div className="relative h-5 w-full overflow-hidden md:h-7" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})`, backgroundPositionX: "70%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>
      <section id="about" className="relative overflow-hidden bg-background">
        <img
          src={cutoutWallB.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-40 h-[460px] w-[360px] object-contain opacity-50 md:h-[620px] md:w-[480px]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse at 30% 60%, black 45%, transparent 80%)",
            maskImage:
              "radial-gradient(ellipse at 30% 60%, black 45%, transparent 80%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal variant="scale" className="overflow-hidden rounded-3xl">
              <Parallax strength={90}>
                <img
                  src={spiderPothos.url}
                  alt="Spider plant and pothos texture close-up"
                  className="aspect-[4/5] h-full w-full object-cover"
                  loading="lazy"
                />
              </Parallax>
            </Reveal>
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Our Philosophy
              </p>
              <WordsReveal
                as="h2"
                text="Beauty with simplicity."
                className="display-heading text-4xl leading-[1.02] text-foreground md:text-6xl"
              />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Living walls couple beauty with simplicity to create healthy,
                  living works of art. They are composed of a variety of tropical
                  plants that are grown hydroponically or soil based.
                </p>
                <p>
                  Each living wall is custom made to satisfy our clients' dreams.
                  We believe that bringing nature indoors should feel effortless —
                  a seamless extension of your space and your vision.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* Quote Form */}
      <section id="quote" className="relative overflow-hidden bg-sage-wash text-charcoal">
        <img
          src={cutoutCoaldale.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-[380px] w-[500px] object-contain opacity-55 md:h-[500px] md:w-[680px]"
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-forest">
              Request a Quote
            </p>
            <h2 className="display-heading text-4xl text-charcoal md:text-5xl lg:text-6xl">
              Ready to bring your wall to <em>life?</em>
            </h2>
            <p className="mt-6 text-charcoal/75">
              Tell us about your space and share a few photos if you have them. 
              We'll get back to you within 1–2 business days with a tailored proposal.
            </p>
            <div className="mt-8 space-y-3 text-sm text-charcoal/75">
              <a href="tel:+16049971760" className="flex items-center gap-3 hover:text-charcoal">
                <Phone className="h-4 w-4 text-forest" aria-hidden />
                604-997-1760 <span className="text-charcoal/50">— English</span>
              </a>
              <a href="tel:+14038613732" className="flex items-center gap-3 hover:text-charcoal">
                <Phone className="h-4 w-4 text-forest" aria-hidden />
                403-861-3732 <span className="text-charcoal/50">— French</span>
              </a>
              <a href="mailto:verticaloxygen@gmail.com" className="flex items-center gap-3 hover:text-charcoal">
                <Mail className="h-4 w-4 text-forest" aria-hidden />
                verticaloxygen@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="rounded-2xl border border-sage/30 bg-white p-6 shadow-sm md:p-10 lg:col-span-3">
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-cream/10 text-cream">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-charcoal/75" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <a href="/" className="rounded-lg bg-cream px-4 py-3">
              <img
                src={logoHeader.url}
                alt="Vertical Oxygen"
                className="h-10 w-auto md:h-12"
              />
            </a>
            <p className="text-sm text-cream/60">
              Custom living walls.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/verticaloxygen/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vertical Oxygen on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://www.tiktok.com/@verticaloxygenltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vertical Oxygen on TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
