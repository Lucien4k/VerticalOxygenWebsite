import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/hero-living-wall.jpg";
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
      {/* Hero with background video + floating transparent nav bars */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Background video */}
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
        >
          {/* TODO: replace src with your uploaded video */}
          <source
            src="https://cdn.coverr.co/videos/coverr-tropical-leaves-swaying-in-the-wind-4863/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/35 to-charcoal/70" aria-hidden />

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
                    <span>Installations worldwide</span>
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
                      { label: "North America", description: "Calgary · NYC · LA", href: "#locations", image: fullCircleCalgary.url },
                      { label: "Europe", description: "London · Berlin · Paris", href: "#locations", image: tallJungleWall.url },
                      { label: "Asia Pacific", description: "Tokyo · Singapore · Sydney", href: "#locations", image: saunaPothos.url },
                      { label: "View World Map", description: "Every installation", href: "#locations", image: curvedTropical.url },
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
                      { label: "Service Area", description: "Installations worldwide", href: "#locations" },
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
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl items-center px-6 pt-40 pb-16 md:pt-44">
          <div className="max-w-2xl">
            <div className="reveal-fade is-visible">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terra-light">
                Custom Living Walls
              </p>
              <h1 className="font-serif text-5xl leading-[1.05] font-light text-cream md:text-6xl lg:text-7xl">
                Living works of art
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

      {/* Selected Work — real project gallery */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Selected Work
              </p>
              <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
                Real walls, real spaces
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              A glimpse into recent installations — from hotel lobbies and school hallways
              to residential courtyards and outdoor architecture.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-6 md:grid-rows-[repeat(8,140px)]">
          <Reveal className="group overflow-hidden rounded-2xl md:col-span-4 md:row-span-4">
            <img src={higherHealth.url} alt="Lush tropical living wall with bromeliads and ferns in a curved wellness clinic" loading="lazy"
                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </Reveal>
          <Reveal delay={100} className="group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
            <img src={fullCircleCalgary.url} alt="Colourful living wall with anthuriums and snake plants at a Calgary clinic reception" loading="lazy"
                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </Reveal>
          <Reveal delay={150} className="group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
            <img src={iffWall.url} alt="Large office living wall in tonal greens against white paneling" loading="lazy"
                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </Reveal>
          <Reveal delay={50} className="group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
            <img src={fullCircle2Calgary.url} alt="Framed floor-to-ceiling living wall with dramatic uplighting" loading="lazy"
                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </Reveal>
          <Reveal delay={100} className="group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
            <img src={tallJungleWall.url} alt="Tall two-story tropical wall in a warm residential stairwell" loading="lazy"
                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </Reveal>
          <Reveal delay={150} className="group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
            <img src={curvedTropical.url} alt="Curved tropical living wall with bromeliads and cascading ferns" loading="lazy"
                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </Reveal>
          <Reveal delay={50} className="group overflow-hidden rounded-2xl md:col-span-3 md:row-span-2">
            <img src={cafePlanter.url} alt="Elevated pothos and ZZ planter dividing a corporate café space" loading="lazy"
                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </Reveal>
          <Reveal delay={100} className="group overflow-hidden rounded-2xl md:col-span-3 md:row-span-2">
            <img src={mosaicBase.url} alt="Detail of a living wall with stone mosaic planter base" loading="lazy"
                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </Reveal>
          <Reveal delay={50} className="group overflow-hidden rounded-2xl md:col-span-3 md:row-span-2">
            <img src={outdoorFrame.url} alt="Outdoor succulent living wall framed in warm cedar" loading="lazy"
                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </Reveal>
          <Reveal delay={100} className="group overflow-hidden rounded-2xl md:col-span-3 md:row-span-2">
            <img src={saunaPothos.url} alt="Trailing pothos vines beside a cedar sauna cabin" loading="lazy"
                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </Reveal>
        </div>
      </section>

      {/* Locations Map */}
      <section id="locations" className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Where We Grow
              </p>
              <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
                Living walls, all over the world
              </h2>
              <p className="mt-4 text-muted-foreground">
                Hover any pin to see the installation — from Vancouver lofts to Tokyo cafés
                and Sydney harbourside restaurants.
              </p>
            </div>
          </Reveal>
          <Reveal variant="fade">
            <LocationsMap />
          </Reveal>
        </div>
      </section>

      {/* Philosophy / About */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal variant="scale" className="overflow-hidden rounded-2xl">
              <img
                src={spiderPothos.url}
                alt="Spider plant and pothos texture close-up"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Our Philosophy
              </p>
              <h2 className="font-serif text-4xl font-light leading-snug text-foreground md:text-5xl">
                Beauty with simplicity
              </h2>
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
      <section id="quote" className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Request a Quote
            </p>
            <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
              Ready to bring your wall to life?
            </h2>
            <p className="mt-6 text-muted-foreground">
              Tell us about your space and share a few photos if you have them. 
              We'll get back to you within 1–2 business days with a tailored proposal.
            </p>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                (555) 123-4567
              </a>
              <a href="mailto:verticaloxygen@gmail.com" className="flex items-center gap-3 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" aria-hidden />
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
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-serif text-lg text-foreground">Vertical Oxygen</p>
            <p className="text-sm text-muted-foreground">
              Custom living walls crafted with care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
