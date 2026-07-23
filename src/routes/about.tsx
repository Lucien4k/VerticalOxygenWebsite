import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sprout, Instagram } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Vertical Oxygen" },
      {
        name: "description",
        content:
          "Vertical Oxygen is a woman-owned living wall studio founded by Nathalie Callede, with chief designer and construction manager Tim Suddaby.",
      },
      { property: "og:title", content: "About — Vertical Oxygen" },
      {
        property: "og:description",
        content:
          "Meet Nathalie Callede and Tim Suddaby — the woman-owned team behind Vertical Oxygen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* Top bar */}
      <header className="border-b border-charcoal/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-serif text-xl font-medium tracking-tight">
            Vertical Oxygen
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-charcoal/70 hover:text-forest-deep"
          >
            ← Back home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-forest-deep/30 bg-forest-deep/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
          <Sprout className="h-3.5 w-3.5" aria-hidden />
          Proudly woman-owned
        </span>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-charcoal md:text-6xl">
          Committed to purifying the air in the spaces where you live and work.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70">
          Vertical Oxygen is a small, hands-on studio. Every wall we build is designed,
          engineered, and installed by the same two people you'll meet below.
        </p>
      </section>

      {/* Founders */}
      <section className="mx-auto grid max-w-5xl gap-10 px-6 pb-24 md:grid-cols-2">
        {/* Nathalie */}
        <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-charcoal/10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-deep/10 text-forest-deep">
              <Leaf className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
              Founder & Principal
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl text-charcoal">Nathalie Callede</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
            Vertical Oxygen is the brainchild of principal Nathalie Callede. After
            seven cold winters in western Canada, her thoughts turned back to a
            childhood in Africa, where thirteen years exploring beautiful tropical
            landscapes gave her a lifelong love of plants.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
            She travelled Malaysia, Vietnam, Indonesia, and Hawaii discovering the
            natural world, and her passion for ethnobotanicals led her to study at
            the École des Plantes in Paris under François Couplan, the world's
            leading ethnobotanical specialist.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
            Nathalie is a LEED AP, an interior landscape designer, and a member of
            Green Roofs for Healthy Cities. She has a strong belief in building a
            better, more sustainable world for our children.
          </p>
        </article>

        {/* Tim */}
        <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-charcoal/10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-deep/10 text-forest-deep">
              <Leaf className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
              Chief Designer & Construction Manager
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl text-charcoal">Tim Suddaby</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
            Tim is the chief designer and construction manager at Vertical Oxygen.
            He spent his childhood discovering the forests, meadows, rivers, and
            lakes of the lower mainland in BC, and has over 20 years of experience
            building high-performance homes and designing and installing renewable
            energy systems.
          </p>
          <blockquote className="mt-6 border-l-2 border-forest-deep/40 pl-4 font-serif text-lg italic leading-snug text-charcoal">
            "Living walls work so well at cleaning air, capturing airborne
            chemicals and providing humidity that they should be a no-brainer in
            any public space — good health begins with the air we breathe."
            <footer className="mt-2 text-sm not-italic text-charcoal/60">
              — Tim Suddaby
            </footer>
          </blockquote>
        </article>
      </section>

      {/* Environmental policy */}
      <section className="border-t border-charcoal/10 bg-white/60">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
            Environmental policy
          </span>
          <h2 className="mt-3 font-serif text-4xl text-charcoal">
            A small footprint, on purpose.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/75">
            At Vertical Oxygen we take our responsibility to the earth seriously.
            We take the following steps to keep our footprint as minimal as it can be:
          </p>
          <ul className="mt-6 space-y-2 text-[15px] text-charcoal/80">
            <li>· We recycle all construction waste — wood, steel, PVC, and packaging.</li>
            <li>· We recycle all plant pots (300 – 2,000 per living wall).</li>
            <li>· We source plants from local growers wherever possible.</li>
            <li>· We specify low-energy pumps and LED grow lighting on every install.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-serif text-4xl text-charcoal">Start a project with us.</h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/70">
          Every wall begins with a conversation about your space, your light, and
          the feeling you want people to walk into.
        </p>
        <Link
          to="/"
          hash="quote"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep/90"
        >
          Request a quote <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>

        <a
          href="https://www.instagram.com/verticaloxygen/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-forest-deep"
        >
          <Instagram className="h-4 w-4" aria-hidden />
          Follow us on Instagram
        </a>
      </section>
    </main>
  );
}