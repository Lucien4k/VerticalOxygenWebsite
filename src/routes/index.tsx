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
import { Phone, Mail, MapPin, Leaf, ArrowRight } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { LocationsMap } from "@/components/LocationsMap";
import { NavMenu } from "@/components/NavMenu";
import { Parallax } from "@/components/Parallax";
import { WordsReveal } from "@/components/WordsReveal";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { ScrollVideo } from "@/components/ScrollVideo";
import { ScrollProgress } from "@/components/ScrollProgress";
import wallPanels3d from "../assets/videos/wall-panels-3d.mp4.asset.json";
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
import diagramAquaponic from "../assets/diagrams/aquaponic-wall-diagram.jpg.asset.json";
import diagramHydroponic from "../assets/diagrams/hydroponic-wall-diagram.jpg.asset.json";
import diagramSoil from "../assets/diagrams/soil-based-wall-diagram.jpg.asset.json";

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
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      {/* Fixed hero: stays pinned while the rest of the page scrolls up over it */}
      <section className="hero-fixed fixed inset-x-0 top-0 z-0 h-screen overflow-hidden">
        {/* Background video */}
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={tropicalDense.url}
        >
          <source src={masloVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/35 to-charcoal/70" aria-hidden />
        <FloatingLeaves className="z-10" />

        {/* Floating rounded top bars — hero video shows around them */}
        <div className="absolute inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
          <div className="mx-auto max-w-6xl space-y-2">
            {/* Utility strip */}
            <div className="hidden overflow-hidden rounded-full bg-forest/70 px-5 py-2 text-xs text-cream shadow-lg backdrop-blur-md md:block">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <a href="tel:+15551234567" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
                    <Phone className="h-3.5 w-3.5" aria-hidden />
                    <span>(555) 123-4567</span>
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
                <a
                  href="#quote"
                  className="rounded-full bg-terra-light px-3 py-1 font-semibold uppercase tracking-wider text-charcoal transition-colors hover:bg-cream"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            {/* Main nav pill */}
            <nav className="flex items-center justify-between gap-4 rounded-full bg-cream/15 px-5 py-3 shadow-xl backdrop-blur-md ring-1 ring-cream/20">
              <a href="/" className="font-serif text-xl font-medium tracking-tight text-cream md:text-2xl">
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
                    href: "#about",
                    items: [
                      { label: "Our Philosophy", description: "Beauty with simplicity", href: "#about" },
                      { label: "Hydroponic Systems", description: "Soilless, self-watering", href: "#about" },
                      { label: "Soil-Based Walls", description: "Traditional, lush", href: "#about" },
                      { label: "Custom Process", description: "Design to install", href: "#quote" },
                    ],
                  },
                  {
                    label: "Contact",
                    href: "#quote",
                    items: [
                      { label: "Request a Quote", description: "Tell us about your space", href: "#quote" },
                      { label: "Call Us", description: "(555) 123-4567", href: "tel:+15551234567" },
                      { label: "Email", description: "verticaloxygen@gmail.com", href: "mailto:verticaloxygen@gmail.com" },
                      { label: "Service Area", description: "Across North America", href: "#locations" },
                    ],
                  },
                ]}
              />
              <a
                href="#quote"
                className="slide-cta group inline-flex items-center rounded-full bg-terra px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-terra/90"
              >
                <span className="slide-cta-arrow pl-3 text-cream">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
                <span className="slide-cta-label">Get a Quote</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-6 pt-40 pb-16 md:pt-44">
          <div className="max-w-2xl">
            <div className="reveal-fade is-visible">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terra-light">
                Custom Living Walls
              </p>
              <h1 className="display-heading text-5xl leading-[1.02] font-light text-cream md:text-7xl lg:text-8xl">
                Living <em>works</em> of art
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90">
                We couple beauty with simplicity to create healthy, living works of art.
                Each wall is custom made to satisfy your dreams.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 reveal is-visible" style={{ animationDelay: "200ms" }}>
              <a
                href="#quote"
                className="slide-cta group relative inline-flex items-center rounded-full bg-terra px-7 py-3.5 text-sm font-semibold text-cream shadow-lg transition-colors hover:bg-terra/90"
              >
                <span className="slide-cta-arrow pl-4 text-cream">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
                <span className="slide-cta-label">Get a Quote</span>
              </a>
              <a
                href="#work"
                className="slide-cta group relative inline-flex items-center rounded-full border border-cream/40 bg-cream/5 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/15"
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
      <div className="relative z-10 mt-[100vh] bg-background">

      {/* Scroll-scrubbed 3D wall panel sequence */}
      <ScrollVideo src={wallPanels3d.url} scrollLength={2.5}>
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terra-light">
            Engineered in layers
          </p>
          <WordsReveal
            as="h2"
            text="Panels that come together as one."
            className="display-heading text-4xl leading-[1.05] text-cream md:text-6xl lg:text-7xl"
          />
          <p className="mt-6 text-cream/80 md:text-lg">
            Every wall is built from modular panels — designed, planted, and
            assembled on-site. Scroll to see how the pieces come together.
          </p>
        </div>
      </ScrollVideo>

      {/* Selected Work — deep forest gallery colour-matched to the hero */}
      <section id="work" className="relative overflow-hidden bg-forest text-cream">
        {/* Decorative floating "cutout" plants — soft-masked so they read as transparent */}
        <img
          src={cutoutCoaldale.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-24 h-[420px] w-[560px] rotate-[-6deg] object-contain opacity-70 md:h-[560px] md:w-[760px]"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="mb-20 grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terra-light">
                Selected Work
              </p>
              <WordsReveal
                as="h2"
                text="Real walls. Real spaces."
                className="display-heading text-5xl leading-[1] text-cream md:text-7xl lg:text-8xl"
              />
            </Reveal>
            <Reveal delay={200} className="md:col-span-5">
              <p className="text-cream/70 md:text-lg">
                A glimpse into recent installations — from clinic receptions and
                corporate lobbies to residential stairwells and outdoor courtyards.
              </p>
            </Reveal>
          </div>

          {/* Row 1 — three tall staggered portraits with parallax */}
          <div className="relative grid gap-6 md:grid-cols-3 md:gap-10">
            <Reveal className="md:mt-16">
              <Parallax strength={80}>
                <figure className="tilt-card overflow-hidden rounded-3xl bg-charcoal/50 shadow-2xl ring-1 ring-cream/10">
                  <img
                    src={higherHealth.url}
                    alt="Curved tropical living wall filled with bromeliads and ferns in a wellness clinic"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <figcaption className="flex items-end justify-between gap-4 bg-charcoal/60 p-5 backdrop-blur-sm">
                    <div>
                      <p className="font-serif text-xl italic text-cream">Higher Health</p>
                      <p className="text-xs uppercase tracking-widest text-cream/60">Wellness clinic · Curved wall</p>
                    </div>
                    <span className="text-xs text-cream/50">01</span>
                  </figcaption>
                </figure>
              </Parallax>
            </Reveal>

            <Reveal delay={150}>
              <Parallax strength={30}>
                <figure className="tilt-card overflow-hidden rounded-3xl bg-charcoal/50 shadow-2xl ring-1 ring-cream/10">
                  <img
                    src={tallJungleWall.url}
                    alt="Two-story tropical wall in a warm residential stairwell"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <figcaption className="flex items-end justify-between gap-4 bg-charcoal/60 p-5 backdrop-blur-sm">
                    <div>
                      <p className="font-serif text-xl italic text-cream">The Berezan Residence</p>
                      <p className="text-xs uppercase tracking-widest text-cream/60">Residential · Two-story</p>
                    </div>
                    <span className="text-xs text-cream/50">02</span>
                  </figcaption>
                </figure>
              </Parallax>
            </Reveal>

            <Reveal delay={300}>
              <Parallax strength={100}>
                <figure className="tilt-card overflow-hidden rounded-3xl bg-charcoal/50 shadow-2xl ring-1 ring-cream/10 md:mt-24">
                  <img
                    src={fullCircle2Calgary.url}
                    alt="Framed floor-to-ceiling living wall with dramatic uplighting"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <figcaption className="flex items-end justify-between gap-4 bg-charcoal/60 p-5 backdrop-blur-sm">
                    <div>
                      <p className="font-serif text-xl italic text-cream">Full Circle · Calgary</p>
                      <p className="text-xs uppercase tracking-widest text-cream/60">Clinic · Framed panel</p>
                    </div>
                    <span className="text-xs text-cream/50">03</span>
                  </figcaption>
                </figure>
              </Parallax>
            </Reveal>
          </div>

          {/* Row 2 — big feature + right stack */}
          <div className="relative mt-24 grid gap-6 md:mt-40 md:grid-cols-5 md:gap-10">
            <Reveal className="md:col-span-3">
              <Parallax strength={50}>
                <figure className="tilt-card overflow-hidden rounded-3xl bg-charcoal/50 shadow-2xl ring-1 ring-cream/10">
                  <img
                    src={iffWall.url}
                    alt="Large office living wall in tonal greens against white paneling"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="flex items-end justify-between gap-4 bg-charcoal/60 p-6 backdrop-blur-sm">
                    <div>
                      <p className="font-serif text-2xl italic text-cream">IFF Headquarters</p>
                      <p className="text-xs uppercase tracking-widest text-cream/60">Corporate · Tonal greens</p>
                    </div>
                    <span className="text-xs text-cream/50">04</span>
                  </figcaption>
                </figure>
              </Parallax>
            </Reveal>

            <div className="grid gap-6 md:col-span-2 md:gap-10">
              <Reveal delay={150}>
                <Parallax strength={40}>
                  <figure className="tilt-card overflow-hidden rounded-3xl bg-charcoal/50 shadow-2xl ring-1 ring-cream/10">
                    <img
                      src={fullCircleCalgary.url}
                      alt="Colourful living wall with anthuriums and snake plants at a Calgary clinic reception"
                      loading="lazy"
                      className="aspect-[5/4] w-full object-cover"
                    />
                    <figcaption className="flex items-end justify-between gap-4 bg-charcoal/60 p-5 backdrop-blur-sm">
                      <div>
                        <p className="font-serif text-xl italic text-cream">Full Circle · Reception</p>
                        <p className="text-xs uppercase tracking-widest text-cream/60">Clinic · Anthuriums</p>
                      </div>
                      <span className="text-xs text-cream/50">05</span>
                    </figcaption>
                  </figure>
                </Parallax>
              </Reveal>
              <Reveal delay={300}>
                <Parallax strength={80}>
                  <figure className="tilt-card overflow-hidden rounded-3xl bg-charcoal/50 shadow-2xl ring-1 ring-cream/10">
                    <img
                      src={curvedTropical.url}
                      alt="Curved tropical living wall with bromeliads and cascading ferns"
                      loading="lazy"
                      className="aspect-[5/4] w-full object-cover"
                    />
                    <figcaption className="flex items-end justify-between gap-4 bg-charcoal/60 p-5 backdrop-blur-sm">
                      <div>
                        <p className="font-serif text-xl italic text-cream">Wellness Studio</p>
                        <p className="text-xs uppercase tracking-widest text-cream/60">Curved · Bromeliads</p>
                      </div>
                      <span className="text-xs text-cream/50">06</span>
                    </figcaption>
                  </figure>
                </Parallax>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Continuous marquee — more work at a glance */}
        <div className="relative border-y border-cream/10 bg-forest/80 py-10">
          <div className="mb-6 flex items-center justify-between px-6 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-terra-light">
              More installations
            </p>
            <p className="hidden text-xs uppercase tracking-widest text-cream/50 md:block">
              Hover to pause
            </p>
          </div>
          <div className="group relative overflow-hidden">
            <div className="marquee-track flex w-max gap-6 pl-6 md:gap-8 md:pl-10">
              {[
                { src: cafePlanter.url, label: "Corporate café" },
                { src: mosaicBase.url, label: "Mosaic base detail" },
                { src: saunaPothos.url, label: "Cedar sauna corner" },
                { src: outdoorFrame.url, label: "Outdoor cedar frame" },
                { src: tropicalDense.url, label: "Dense tropical" },
                { src: lobbyPanels.url, label: "Hotel lobby panels" },
                { src: edmontonLobby.url, label: "Edmonton lobby" },
                { src: fairviewAquarium.url, label: "Fairview aquarium" },
                { src: pothosCascade.url, label: "Pothos cascade" },
                { src: succulentTapestry.url, label: "Succulent tapestry" },
                { src: sedumBloom.url, label: "Sedum bloom" },
                { src: fairviewInstall.url, label: "Fairview install" },
                { src: spiderPothos.url, label: "Spider &amp; pothos" },
              ]
                .concat([
                  { src: cafePlanter.url, label: "Corporate café" },
                  { src: mosaicBase.url, label: "Mosaic base detail" },
                  { src: saunaPothos.url, label: "Cedar sauna corner" },
                  { src: outdoorFrame.url, label: "Outdoor cedar frame" },
                  { src: tropicalDense.url, label: "Dense tropical" },
                  { src: lobbyPanels.url, label: "Hotel lobby panels" },
                  { src: edmontonLobby.url, label: "Edmonton lobby" },
                  { src: fairviewAquarium.url, label: "Fairview aquarium" },
                  { src: pothosCascade.url, label: "Pothos cascade" },
                  { src: succulentTapestry.url, label: "Succulent tapestry" },
                  { src: sedumBloom.url, label: "Sedum bloom" },
                  { src: fairviewInstall.url, label: "Fairview install" },
                  { src: spiderPothos.url, label: "Spider &amp; pothos" },
                ])
                .map((item, i) => (
                  <figure
                    key={i}
                    className="tilt-card group/marq relative h-56 w-72 shrink-0 overflow-hidden rounded-2xl bg-cover bg-center shadow-md md:h-64 md:w-96"
                    style={{ backgroundImage: `url(${item.src})` }}
                    aria-label={item.label}
                  >
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 text-xs uppercase tracking-widest text-cream opacity-0 transition-opacity duration-500 group-hover/marq:opacity-100">
                      {item.label}
                    </span>
                  </figure>
                ))}
            </div>
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-forest to-transparent md:w-32" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-forest to-transparent md:w-32" aria-hidden />
          </div>
        </div>
      </section>

      {/* Locations Map */}
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
      <section id="motion" className="relative overflow-hidden bg-forest text-cream">
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
                className="display-heading text-4xl leading-[1.02] text-cream md:text-7xl"
              />
            </Reveal>
            <Reveal delay={200} className="md:col-span-5">
              <p className="text-cream/75 md:text-lg">
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
                <figure className="tilt-card group relative overflow-hidden rounded-3xl bg-charcoal/40 shadow-2xl ring-1 ring-cream/10">
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
      <section id="about" className="relative overflow-hidden bg-background">
        <img
          src={cutoutWallB.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-24 h-[420px] w-[320px] object-contain opacity-55 md:h-[560px] md:w-[420px]"
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
      {/* Types of Living Walls — diagrams */}
      <section id="wall-types" className="relative overflow-hidden bg-cream text-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Types of Plant Walls
            </p>
            <WordsReveal
              as="h2"
              text="We work with three types of living walls."
              className="display-heading max-w-3xl text-4xl leading-[1.02] text-charcoal md:text-5xl"
            />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/70">
              Each type of living wall has specific applications but is extremely versatile
              and provides endless possibilities. We take the time to understand your
              environment and build you a wall that will beautify and detoxify interior spaces.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { title: "Aquaponic", src: diagramAquaponic.url, desc: "Plants and tilapia share one closed loop — fish waste feeds the wall, roots clean the water." },
              { title: "Hydroponic", src: diagramHydroponic.url, desc: "Soilless growing on recycled moisture mats — lightweight, low-maintenance, self-watering." },
              { title: "Soil-Based", src: diagramSoil.url, desc: "Traditional pocket construction with soil and irrigation — lush, textured, endlessly plantable." },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 120} className="group flex flex-col rounded-3xl bg-background p-6 shadow-sm ring-1 ring-charcoal/5 transition-shadow hover:shadow-xl">
                <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-white p-4">
                  <img
                    src={d.src}
                    alt={`${d.title} living wall diagram`}
                    className="h-72 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-charcoal">{d.title} Wall</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{d.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="relative overflow-hidden bg-forest text-cream">
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
            <h2 className="display-heading text-4xl text-cream md:text-5xl lg:text-6xl">
              Ready to bring your wall to <em>life?</em>
            </h2>
            <p className="mt-6 text-cream/75">
              Tell us about your space and share a few photos if you have them. 
              We'll get back to you within 1–2 business days with a tailored proposal.
            </p>
            <div className="mt-8 space-y-3 text-sm text-cream/75">
              <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-cream">
                <Phone className="h-4 w-4 text-terra-light" aria-hidden />
                (555) 123-4567
              </a>
              <a href="mailto:verticaloxygen@gmail.com" className="flex items-center gap-3 hover:text-cream">
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
      <footer className="border-t border-cream/10 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6 py-10">
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
