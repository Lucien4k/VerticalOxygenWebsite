import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/hero-living-wall.jpg";
import featurePlants from "../assets/feature-plants.jpg";
import featureOffice from "../assets/feature-office.jpg";
import featureCraft from "../assets/feature-craft.jpg";
import { Phone, Mail, MapPin, Leaf } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

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
      {/* Utility Top Bar */}
      <div className="hidden bg-forest text-cream md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+15551234567" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
              <Phone className="h-3.5 w-3.5" aria-hidden />
              <span>(555) 123-4567</span>
            </a>
            <a href="mailto:hello@verticaloxygen.com" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
              <Mail className="h-3.5 w-3.5" aria-hidden />
              <span>hello@verticaloxygen.com</span>
            </a>
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              <span>Serving your area</span>
            </span>
            <span className="flex items-center gap-1.5 opacity-90">
              <Leaf className="h-3.5 w-3.5" aria-hidden />
              <span>Living &amp; moss walls</span>
            </span>
          </div>
          <a
            href="#quote"
            className="rounded-sm bg-terra-light px-3 py-1 font-semibold uppercase tracking-wider text-charcoal transition-colors hover:bg-cream"
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="font-serif text-2xl font-medium tracking-tight text-foreground">
            Vertical Oxygen
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#about" className="text-foreground transition-colors hover:text-primary">
              About
            </a>
            <a href="#process" className="text-foreground transition-colors hover:text-primary">
              Process
            </a>
            <a href="#quote" className="text-foreground transition-colors hover:text-primary">
              Contact
            </a>
            <a
              href="#quote"
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero with background video */}
      <section className="relative overflow-hidden">
        {/* Background video — replace src with your own uploaded video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
        >
          {/* TODO: replace with your uploaded video */}
          <source
            src="https://cdn.coverr.co/videos/coverr-tropical-leaves-swaying-in-the-wind-4863/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Living Walls
            </p>
            <h1 className="font-serif text-5xl leading-[1.1] font-light text-cream md:text-6xl lg:text-7xl">
              Living works of art
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90">
              We couple beauty with simplicity to create healthy, living works of art. 
              Each wall is custom made to satisfy your dreams.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Start Your Wall
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md border border-cream/40 bg-transparent px-6 py-3 text-sm font-semibold text-cream transition-all hover:bg-cream/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
            Crafted with care
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Every living wall is a unique composition of nature and design, 
            tailored to thrive in your space.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group overflow-hidden rounded-xl bg-card">
            <div className="overflow-hidden">
              <img
                src={featurePlants}
                alt="Close-up of tropical plants including monstera and ferns in a living wall"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-card-foreground">Tropical Variety</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We select from a wide variety of tropical plants — from trailing pothos 
                to dramatic monstera — to create lush, layered compositions.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-xl bg-card">
            <div className="overflow-hidden">
              <img
                src={featureCraft}
                alt="Hands placing a plant into a modular terracotta living wall system"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-card-foreground">Custom Crafted</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Hydroponic or soil-based, every system is custom designed and built 
                to fit your wall, your light, and your lifestyle.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-xl bg-card">
            <div className="overflow-hidden">
              <img
                src={featureOffice}
                alt="A modern office reception with a stunning vertical garden living wall"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-card-foreground">Any Space</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                From intimate residential corners to grand commercial lobbies, 
                we transform walls into living, breathing focal points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / About */}
      <section id="about" className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl font-light leading-snug text-foreground md:text-4xl">
              Beauty with simplicity
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
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
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* Quote Form */}
      <section id="quote" className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
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
              <a href="mailto:hello@verticaloxygen.com" className="flex items-center gap-3 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" aria-hidden />
                hello@verticaloxygen.com
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-card p-6 md:p-10 lg:col-span-3">
            <QuoteForm />
          </div>
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
