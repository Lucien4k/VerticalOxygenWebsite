import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, FileText, ArrowUpRight } from "lucide-react";
import logoHeader from "../assets/logo-header.png.asset.json";

export const Route = createFileRoute("/specifications")({
  component: SpecificationsPage,
  head: () => ({
    meta: [
      { title: "Specifications — Vertical Oxygen" },
      {
        name: "description",
        content:
          "Technical specifications, CAD/BIM downloads, and CSI MasterFormat data for Vertical Oxygen living wall systems. Reference documentation for architects, engineers, and contractors.",
      },
      { property: "og:title", content: "Specifications — Vertical Oxygen" },
      {
        property: "og:description",
        content:
          "Technical specifications, CAD/BIM downloads, and CSI MasterFormat data for Vertical Oxygen living wall systems.",
      },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/specifications" }],
  }),
});

type System = {
  id: string;
  code: string;
  name: string;
  category: "Interior" | "Exterior" | "Freestanding" | "Modular";
  loadPsf: string;
  waterGpdSf: string;
  electrical: string;
  fireRating: string;
  nrc: string;
  substrate: string;
  depth: string;
  csi: string;
  spec: string;
  cad: string;
  bim: string;
};

const SYSTEMS: System[] = [
  {
    id: "moss-wall",
    code: "VO-MW-01",
    name: "Preserved Moss Wall",
    category: "Interior",
    loadPsf: "3.2 psf",
    waterGpdSf: "0.0 gal/day·sf",
    electrical: "None required",
    fireRating: "ASTM E84 Class A",
    nrc: "0.75",
    substrate: "Reindeer moss on rigid backer",
    depth: '2.25"',
    csi: "12 93 00",
    spec: "#",
    cad: "#",
    bim: "#",
  },
  {
    id: "modular-panel",
    code: "VO-MP-04",
    name: "Modular Hydroponic Panel",
    category: "Modular",
    loadPsf: "18.4 psf (saturated)",
    waterGpdSf: "0.35 gal/day·sf",
    electrical: "120V / 1.2A per 40 sf zone",
    fireRating: "ASTM E84 Class A backer",
    nrc: "0.45",
    substrate: "Recirculating felt with drip line",
    depth: '5.5"',
    csi: "32 94 33",
    spec: "#",
    cad: "#",
    bim: "#",
  },
  {
    id: "freestanding-divider",
    code: "VO-FD-02",
    name: "Freestanding Divider",
    category: "Freestanding",
    loadPsf: "14.1 psf (saturated)",
    waterGpdSf: "0.28 gal/day·sf",
    electrical: "120V / 0.8A integrated pump",
    fireRating: "ASTM E84 Class B",
    nrc: "0.55",
    substrate: "Double-sided felt over steel frame",
    depth: '9.0" total',
    csi: "12 93 43",
    spec: "#",
    cad: "#",
    bim: "#",
  },
  {
    id: "tower",
    code: "VO-TW-03",
    name: "Vertical Tower",
    category: "Freestanding",
    loadPsf: "22.0 psf (saturated)",
    waterGpdSf: "0.42 gal/day·sf",
    electrical: "120V / 1.5A per tower",
    fireRating: "ASTM E84 Class A",
    nrc: "0.35",
    substrate: "Stacked hydroponic pods, aluminum column",
    depth: '18" dia.',
    csi: "12 93 00",
    spec: "#",
    cad: "#",
    bim: "#",
  },
];

const CATEGORIES = ["All", "Interior", "Modular", "Freestanding"] as const;

function SpecificationsPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SYSTEMS.filter((s) => {
      const catOk = filter === "All" || s.category === filter;
      const qOk =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q) ||
        s.csi.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [filter, query]);

  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "'Karla', system-ui, sans-serif" }}>
      {/* Utility bar */}
      <div className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-600">
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-neutral-900">← Vertical Oxygen</Link>
            <span className="hidden md:inline">Technical Documentation</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">Rev. 2026.07</span>
            <span>Doc. VO-SPEC</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Section 12 93 00 / 32 94 33 — Living Wall Systems
              </p>
              <h1
                className="mt-4 text-4xl leading-[1.05] tracking-tight text-neutral-900 md:text-6xl"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
              >
                Specifications & Technical Data
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
                Reference documentation for architects, engineers, and contractors specifying
                Vertical Oxygen living wall systems. All figures represent typical performance
                for the standard configuration and are subject to project-specific engineering
                review.
              </p>
            </div>
            <div className="border-l border-neutral-200 pl-6 md:col-span-4 md:pl-8">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                <dt>Issued</dt>
                <dd className="text-neutral-900">2026-07-20</dd>
                <dt>Format</dt>
                <dd className="text-neutral-900">CSI 3-Part</dd>
                <dt>Units</dt>
                <dd className="text-neutral-900">IP</dd>
                <dt>Region</dt>
                <dd className="text-neutral-900">Canada / NA</dd>
              </dl>
            </div>
          </div>
        </div>
      </header>

      {/* Filter + table */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-3 border-b border-neutral-200 pb-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                § 1
              </p>
              <h2
                className="mt-1 text-2xl tracking-tight text-neutral-900 md:text-3xl"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
              >
                Product Systems
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex overflow-hidden rounded-none border border-neutral-300 font-mono text-[11px] uppercase tracking-[0.14em]">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFilter(c)}
                    className={`border-r border-neutral-300 px-3 py-2 last:border-r-0 transition-colors ${
                      filter === c
                        ? "bg-neutral-900 text-white"
                        : "bg-white text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search code, name, CSI"
                className="w-full rounded-none border border-neutral-300 bg-white px-3 py-2 font-mono text-[12px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none sm:w-64"
              />
            </div>
          </div>

          {/* Desktop table */}
          <div className="mt-6 hidden overflow-x-auto md:block">
            <table className="w-full border-collapse font-mono text-[12px] text-neutral-800">
              <thead>
                <tr className="border-b border-neutral-300 text-left uppercase tracking-[0.12em] text-neutral-500">
                  <th className="py-3 pr-4 font-normal">Code</th>
                  <th className="py-3 pr-4 font-normal">System</th>
                  <th className="py-3 pr-4 font-normal">Load</th>
                  <th className="py-3 pr-4 font-normal">Water</th>
                  <th className="py-3 pr-4 font-normal">Electrical</th>
                  <th className="py-3 pr-4 font-normal">Fire</th>
                  <th className="py-3 pr-4 font-normal">NRC</th>
                  <th className="py-3 pr-4 font-normal">CSI</th>
                  <th className="py-3 pr-0 font-normal">Downloads</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((s) => (
                  <tr key={s.id} className="border-b border-neutral-200 align-top hover:bg-neutral-50">
                    <td className="py-4 pr-4 text-neutral-900">{s.code}</td>
                    <td className="py-4 pr-4">
                      <div className="text-neutral-900" style={{ fontFamily: "'Karla', system-ui, sans-serif" }}>
                        {s.name}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.1em] text-neutral-500">
                        {s.category} · Depth {s.depth}
                      </div>
                    </td>
                    <td className="py-4 pr-4">{s.loadPsf}</td>
                    <td className="py-4 pr-4">{s.waterGpdSf}</td>
                    <td className="py-4 pr-4">{s.electrical}</td>
                    <td className="py-4 pr-4">{s.fireRating}</td>
                    <td className="py-4 pr-4">{s.nrc}</td>
                    <td className="py-4 pr-4">{s.csi}</td>
                    <td className="py-4 pr-0">
                      <div className="flex flex-col gap-1">
                        <a href={s.spec} className="inline-flex items-center gap-1.5 text-neutral-900 underline-offset-2 hover:underline">
                          <FileText className="h-3.5 w-3.5" aria-hidden /> SPEC.pdf
                        </a>
                        <a href={s.cad} className="inline-flex items-center gap-1.5 text-neutral-900 underline-offset-2 hover:underline">
                          <Download className="h-3.5 w-3.5" aria-hidden /> CAD.dwg
                        </a>
                        <a href={s.bim} className="inline-flex items-center gap-1.5 text-neutral-900 underline-offset-2 hover:underline">
                          <Download className="h-3.5 w-3.5" aria-hidden /> BIM.rvt
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-neutral-500">
                      No systems match the current filter.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-6 grid gap-4 md:hidden">
            {rows.map((s) => (
              <article key={s.id} className="border border-neutral-300 p-5">
                <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                  <span>{s.code}</span>
                  <span>{s.category}</span>
                </div>
                <h3
                  className="mt-2 text-xl tracking-tight text-neutral-900"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
                >
                  {s.name}
                </h3>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[12px] text-neutral-800">
                  <dt className="text-neutral-500">Load</dt><dd>{s.loadPsf}</dd>
                  <dt className="text-neutral-500">Water</dt><dd>{s.waterGpdSf}</dd>
                  <dt className="text-neutral-500">Electrical</dt><dd>{s.electrical}</dd>
                  <dt className="text-neutral-500">Fire</dt><dd>{s.fireRating}</dd>
                  <dt className="text-neutral-500">NRC</dt><dd>{s.nrc}</dd>
                  <dt className="text-neutral-500">CSI</dt><dd>{s.csi}</dd>
                  <dt className="text-neutral-500">Depth</dt><dd>{s.depth}</dd>
                </dl>
                <div className="mt-4 flex flex-wrap gap-3 font-mono text-[12px]">
                  <a href={s.spec} className="inline-flex items-center gap-1.5 text-neutral-900 underline underline-offset-2">
                    <FileText className="h-3.5 w-3.5" aria-hidden /> SPEC.pdf
                  </a>
                  <a href={s.cad} className="inline-flex items-center gap-1.5 text-neutral-900 underline underline-offset-2">
                    <Download className="h-3.5 w-3.5" aria-hidden /> CAD.dwg
                  </a>
                  <a href={s.bim} className="inline-flex items-center gap-1.5 text-neutral-900 underline underline-offset-2">
                    <Download className="h-3.5 w-3.5" aria-hidden /> BIM.rvt
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
            Saturated load values include water, substrate, and mature plant mass at 100% capacity.
            NRC ratings tested per ASTM C423. Fire ratings per ASTM E84 surface burning characteristics.
          </p>
        </div>
      </section>

      {/* Classification / certification */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">§ 2</p>
            <h2
              className="mt-1 text-2xl tracking-tight text-neutral-900 md:text-3xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
            >
              Classification & Certification
            </h2>
            <p className="mt-4 font-mono text-[12px] leading-relaxed text-neutral-700">
              Vertical Oxygen systems are specified under multiple CSI MasterFormat divisions
              depending on interior/exterior use and structural integration.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <SpecBlock
                label="CSI MasterFormat"
                rows={[
                  ["12 93 00", "Site Furnishings — Interior Plants"],
                  ["12 93 43", "Interior Planters"],
                  ["32 94 33", "Planters — Exterior"],
                  ["09 77 00", "Special Wall Surfacing (moss)"],
                ]}
              />
              <SpecBlock
                label="Certifications & Credits"
                rows={[
                  ["LEED v4.1", "IEQ Credit — Interior Air Quality"],
                  ["LEED v4.1", "IEQ Credit — Daylight & Views"],
                  ["WELL v2", "Feature M09 — Biophilia I"],
                  ["WELL v2", "Feature M02 — Biophilia II Qualitative"],
                  ["Living Product", "Declare Label: LBC Red List Free (moss)"],
                ]}
              />
              <SpecBlock
                label="Standards Referenced"
                rows={[
                  ["ASTM E84", "Surface Burning Characteristics"],
                  ["ASTM C423", "Sound Absorption (NRC)"],
                  ["ASTM E90", "Sound Transmission (STC)"],
                  ["CSA B64.10", "Backflow Prevention"],
                ]}
              />
              <SpecBlock
                label="Warranty"
                rows={[
                  ["Structural", "10 years — frame & panels"],
                  ["Irrigation", "5 years — pumps & controllers"],
                  ["Plant Health", "1 year — with active maintenance contract"],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spec review contact */}
      <section id="spec-review" className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">§ 3</p>
            <h2
              className="mt-1 text-2xl tracking-tight text-neutral-900 md:text-3xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
            >
              Request a Spec Review
            </h2>
            <p className="mt-4 font-mono text-[12px] leading-relaxed text-neutral-700">
              For project-specific engineering review, substitution requests, or CAD/BIM
              families not listed here. This channel is monitored by our technical team —
              not general sales.
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-y-2 font-mono text-[12px] text-neutral-700">
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">Technical</dt>
                <dd className="text-neutral-900">specs@verticaloxygen.com</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">Phone EN</dt>
                <dd className="text-neutral-900">604-997-1760</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">Phone FR</dt>
                <dd className="text-neutral-900">403-861-3732</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">Response</dt>
                <dd className="text-neutral-900">2 business days</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">Sales (separate)</dt>
                <dd className="text-neutral-900">verticaloxygen@gmail.com</dd>
              </div>
            </dl>
          </div>
          <form
            className="md:col-span-8"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              form.reset();
              alert("Spec review request submitted. Our technical team will respond within 2 business days.");
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Firm" name="firm" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Project Name" name="project" required />
              <Field label="Project Location" name="location" />
              <Field label="Role" name="role" as="select" options={["Architect", "Engineer (MEP)", "Engineer (Structural)", "General Contractor", "Interior Designer", "Owner / Rep", "Other"]} />
              <Field label="Specifying System" name="system" as="select" options={SYSTEMS.map((s) => `${s.code} — ${s.name}`).concat("Undetermined")} />
            </div>
            <div className="mt-4">
              <label className="block font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                Scope / Questions
              </label>
              <textarea
                name="notes"
                rows={5}
                required
                placeholder="Substrate substitution, structural loading assumptions, integration with adjacent assemblies, etc."
                className="mt-1.5 w-full rounded-none border border-neutral-300 bg-white px-3 py-2 font-mono text-[12px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-none bg-neutral-900 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-neutral-700"
              >
                Submit for Review
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </button>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                Responses are project-scoped, not commercial quotes.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 font-mono text-[11px] uppercase tracking-[0.14em] md:flex-row md:items-center md:justify-between">
          <div>Vertical Oxygen Inc. · Technical Documentation</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white">Main Site</Link>
            <a href="#spec-review" className="hover:text-white">Spec Review</a>
            <span>Doc VO-SPEC · Rev. 2026.07</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SpecBlock({ label, rows }: { label: string; rows: [string, string][] }) {
  return (
    <div className="border border-neutral-300 bg-white p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
        {label}
      </p>
      <dl className="mt-3 font-mono text-[12px]">
        {rows.map(([k, v]) => (
          <div key={k + v} className="grid grid-cols-[7rem_1fr] gap-3 border-t border-neutral-200 py-2 first:border-t-0">
            <dt className="text-neutral-900">{k}</dt>
            <dd className="text-neutral-700">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "select";
  options?: string[];
};

function Field({ label, name, type = "text", required, as = "input", options = [] }: FieldProps) {
  return (
    <label className="block">
      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-600">
        {label}
        {required ? " *" : ""}
      </span>
      {as === "select" ? (
        <select
          name={name}
          required={required}
          className="mt-1.5 w-full rounded-none border border-neutral-300 bg-white px-3 py-2 font-mono text-[12px] text-neutral-900 focus:border-neutral-900 focus:outline-none"
        >
          <option value="">— Select —</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-1.5 w-full rounded-none border border-neutral-300 bg-white px-3 py-2 font-mono text-[12px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
        />
      )}
    </label>
  );
}