import { createFileRoute } from "@tanstack/react-router";
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
import { Phone, Mail, MapPin, Leaf, ArrowRight } from "lucide-react";
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
import westinVideo from "../assets/videos/westin_calgary.mp4.asset.json";
import westinPoster from "../assets/videos/westin_calgary.jpg.asset.json";
import mountRoyalVideo from "../assets/videos/mount_royal.mp4.asset.json";
import mountRoyalPoster from "../assets/videos/mount_royal.jpg.asset.json";
import masloVideo from "../assets/videos/maslo_home.mp4.asset.json";
import masloPoster from "../assets/videos/maslo_home.jpg.asset.json";
import coaldaleVideo from "../assets/videos/coaldale_alberta.mp4.asset.json";
import coaldalePoster from "../assets/videos/coaldale_alberta.jpg.asset.json";
import cutoutCoaldale from "../assets/cutouts/coaldale-wall.png.asset.json";
import cutoutWallA from "../assets/cutouts/wall-a.png.asset.json";
import cutoutWallB from "../assets/cutouts/wall-b.png.asset.json";
import cutoutWallC from "../assets/cutouts/wall-c.png.asset.json";
import diagramAquaponic from "../assets/diagrams/aquaponic-wall-diagram-v4.jpg.asset.json";
import diagramHydroponic from "../assets/diagrams/hydroponic-wall-diagram-v4.jpg.asset.json";
import woodTexture from "../assets/textures/wood-texture-v2.jpg.asset.json";

const SYSTEMS = [
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
];

function SystemsShowcase() {
  const [active, setActive] = useState(0);
  const sys = SYSTEMS[active];
  const next = SYSTEMS[(active + 1) % SYSTEMS.length];
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
          <div className="relative overflow-hidden rounded-3xl p-6 shadow-2xl ring-1 ring-charcoal/10 md:p-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${woodTexture.url})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-cream/90" aria-hidden />
            <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-charcoal/10 md:p-10">
              <img
                src={sys.diagram}
                alt={`${sys.title} living wall diagram`}
                className="h-[26rem] w-auto object-contain md:h-[36rem]"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute bottom-4 right-6 z-10 font-serif text-6xl italic text-charcoal/10 md:text-8xl">
              0{active + 1}
            </div>
          </div>
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
                <a href="/" className="font-serif text-xl font-medium tracking-tight text-charcoal md:text-2xl">
                  Vertical Oxygen
                </a>
                <NavMenu
                  menus={[
                    {
                      label: "Work",
                      href: "#work",
                      items: [
                        { label: "Hotel Lobbies", description: "Grand statement walls", href: "#work", image: lobbyPanels.url },
                        { label: "Corporate Offices", description: "Calm, focused spaces", href: "#work", image: iffWall.url },
                        { label: "Healthcare", description: "Healing environments", href: "#work", image: higherHealth.url },
                        { label: "Outdoor Installs", description: "All-season plantings", href: "#work", image: outdoorFrame.url },
                      ],
                    },
                    {
                      label: "Locations",
                      href: "#locations",
                      items: [
                        { label: "Western Canada", description: "Vancouver · Calgary · Edmonton", href: "#locations", image: fullCircleCalgary.url },
                        { label: "Central Canada", description: "Toronto · Hamilton · Kingston", href: "#locations", image: tallJungleWall.url },
                        { label: "Atlantic Canada", description: "Halifax · Moncton · St. John's", href: "#locations", image: saunaPothos.url },
                        { label: "View Map", description: "Every install across Canada", href: "#locations", image: curvedTropical.url },
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
            <p className="text-shadow-hero mb-4 text-xs font-bold uppercase tracking-[0.3em] text-terra-light">
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
      <section id="locations" className="relative overflow-hidden bg-card">
        <img
          src={cutoutWallC.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-6rem] h-[380px] w-[380px] object-contain opacity-60 md:h-[520px] md:w-[520px]"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Where We Grow
              </p>
              <WordsReveal
                as="h2"
                text="Living walls, coast to coast."
                className="display-heading text-4xl leading-[1.05] text-foreground md:text-6xl"
              />
              <p className="mt-4 text-muted-foreground">
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

      {/* Video Showcase — walls in motion */}
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
                Walls in Motion
              </p>
              <WordsReveal
                as="h2"
                text="Living, breathing installations."
                className="display-heading text-4xl leading-[1.02] text-charcoal md:text-7xl"
              />
            </Reveal>
            <Reveal delay={200} className="md:col-span-5">
              <p className="text-charcoal/75 md:text-lg">
                A few of our walls, captured on site — light shifting across the
                leaves, water quietly circulating, plants settling into their space.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              { video: westinVideo.url, poster: westinPoster.url, title: "Westin Calgary", caption: "Hotel lobby · Tropical cascade" },
              { video: mountRoyalVideo.url, poster: mountRoyalPoster.url, title: "Mount Royal", caption: "University · Feature wall" },
              { video: masloVideo.url, poster: masloPoster.url, title: "Maslo Residence", caption: "Private home · Custom install" },
              { video: coaldaleVideo.url, poster: coaldalePoster.url, title: "Coaldale, Alberta", caption: "Community space · Outdoor" },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <figure className="tilt-card group relative overflow-hidden rounded-3xl bg-charcoal/40 shadow-2xl ring-1 ring-charcoal/10">
                  <video
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={v.poster}
                  >
                    <source src={v.video} type="video/mp4" />
                  </video>
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent p-6">
                    <div>
                      <p className="font-serif text-xl text-cream md:text-2xl">{v.title}</p>
                      <p className="text-xs uppercase tracking-widest text-cream/70">{v.caption}</p>
                    </div>
                    <span className="text-xs text-cream/60">{String(i + 1).padStart(2, "0")}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
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
      <section id="quote" className="relative overflow-hidden bg-cream text-charcoal">
        <img
          src={cutoutCoaldale.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-[380px] w-[500px] object-contain opacity-55 md:h-[500px] md:w-[680px]"
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-terra-light">
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
              <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-charcoal">
                <Phone className="h-4 w-4 text-terra-light" aria-hidden />
                (555) 123-4567
              </a>
              <a href="mailto:verticaloxygen@gmail.com" className="flex items-center gap-3 hover:text-charcoal">
                <Mail className="h-4 w-4 text-terra-light" aria-hidden />
                verticaloxygen@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="rounded-2xl bg-card p-6 md:p-10 lg:col-span-3">
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
            <p className="font-serif text-lg italic text-cream">Vertical Oxygen</p>
            <p className="text-sm text-cream/60">
              Custom living walls.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
