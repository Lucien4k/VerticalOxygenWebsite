import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, FileText, ArrowUpRight } from "lucide-react";
import logoHeader from "../assets/logo-header.png.asset.json";
import { useT, type Tr } from "@/lib/i18n";

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

type CategoryKey = "Interior" | "Exterior" | "Freestanding" | "Modular";

type System = {
  id: string;
  code: string;
  name: Tr;
  category: CategoryKey;
  loadPsf: string;
  waterGpdSf: string;
  electrical: Tr;
  fireRating: Tr;
  nrc: string;
  substrate: Tr;
  depth: Tr;
  csi: string;
  spec: string;
  cad: string;
  bim: string;
};

const CATEGORY_LABELS: Record<CategoryKey | "All", Tr> = {
  All: { en: "All", fr: "Tous", zh: "全部" },
  Interior: { en: "Interior", fr: "Intérieur", zh: "室内" },
  Exterior: { en: "Exterior", fr: "Extérieur", zh: "室外" },
  Freestanding: { en: "Freestanding", fr: "Autoportant", zh: "独立式" },
  Modular: { en: "Modular", fr: "Modulaire", zh: "模块化" },
};

const SYSTEMS: System[] = [
  {
    id: "moss-wall",
    code: "VO-MW-01",
    name: { en: "Preserved Moss Wall", fr: "Mur de mousse stabilisée", zh: "保鲜苔藓墙" },
    category: "Interior",
    loadPsf: "3.2 psf",
    waterGpdSf: "0.0 gal/day·sf",
    electrical: { en: "None required", fr: "Aucune alimentation requise", zh: "无需电力" },
    fireRating: { en: "ASTM E84 Class A", fr: "ASTM E84 Classe A", zh: "ASTM E84 A级" },
    nrc: "0.75",
    substrate: { en: "Reindeer moss on rigid backer", fr: "Mousse de renne sur support rigide", zh: "驯鹿苔藓固定于硬质基板" },
    depth: { en: '2.25" total', fr: '2,25 po au total', zh: '总厚度 2.25 英寸' },
    csi: "12 93 00",
    spec: "#",
    cad: "#",
    bim: "#",
  },
  {
    id: "modular-panel",
    code: "VO-MP-04",
    name: { en: "Modular Hydroponic Panel", fr: "Panneau hydroponique modulaire", zh: "模块化水培植物墙板" },
    category: "Modular",
    loadPsf: "18.4 psf (saturated)",
    waterGpdSf: "0.35 gal/day·sf",
    electrical: { en: "120V / 1.2A per 40 sf zone", fr: "120 V / 1,2 A par zone de 40 pi²", zh: "每40平方英尺分区120V / 1.2A" },
    fireRating: { en: "ASTM E84 Class A backer", fr: "Support ASTM E84 Classe A", zh: "ASTM E84 A级基板" },
    nrc: "0.45",
    substrate: { en: "Recirculating felt with drip line", fr: "Feutre à recirculation avec ligne de goutte-à-goutte", zh: "带滴灌管路的循环式无纺布基质" },
    depth: { en: '5.5" total', fr: '5,5 po au total', zh: '总厚度 5.5 英寸' },
    csi: "32 94 33",
    spec: "#",
    cad: "#",
    bim: "#",
  },
  {
    id: "freestanding-divider",
    code: "VO-FD-02",
    name: { en: "Freestanding Divider", fr: "Cloison autoportante", zh: "独立式隔断墙" },
    category: "Freestanding",
    loadPsf: "14.1 psf (saturated)",
    waterGpdSf: "0.28 gal/day·sf",
    electrical: { en: "120V / 0.8A integrated pump", fr: "120 V / 0,8 A, pompe intégrée", zh: "内置水泵 120V / 0.8A" },
    fireRating: { en: "ASTM E84 Class B", fr: "ASTM E84 Classe B", zh: "ASTM E84 B级" },
    nrc: "0.55",
    substrate: { en: "Double-sided felt over steel frame", fr: "Feutre double face sur cadre en acier", zh: "钢架双面无纺布基质" },
    depth: { en: '9.0" total', fr: '9,0 po au total', zh: '总厚度 9.0 英寸' },
    csi: "12 93 43",
    spec: "#",
    cad: "#",
    bim: "#",
  },
  {
    id: "tower",
    code: "VO-TW-03",
    name: { en: "Vertical Tower", fr: "Tour végétale verticale", zh: "垂直塔式植物墙" },
    category: "Freestanding",
    loadPsf: "22.0 psf (saturated)",
    waterGpdSf: "0.42 gal/day·sf",
    electrical: { en: "120V / 1.5A per tower", fr: "120 V / 1,5 A par tour", zh: "每座塔 120V / 1.5A" },
    fireRating: { en: "ASTM E84 Class A", fr: "ASTM E84 Classe A", zh: "ASTM E84 A级" },
    nrc: "0.35",
    substrate: { en: "Stacked hydroponic pods, aluminum column", fr: "Modules hydroponiques empilés, colonne en aluminium", zh: "叠层水培模块，铝制立柱" },
    depth: { en: '18" dia.', fr: '18 po de diamètre', zh: '直径 18 英寸' },
    csi: "12 93 00",
    spec: "#",
    cad: "#",
    bim: "#",
  },
];

const CATEGORIES = ["All", "Interior", "Modular", "Freestanding"] as const;

function SpecificationsPage() {
  const t = useT();
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SYSTEMS.filter((s) => {
      const catOk = filter === "All" || s.category === filter;
      const qOk =
        !q ||
        s.name.en.toLowerCase().includes(q) ||
        (s.name.fr ?? "").toLowerCase().includes(q) ||
        (s.name.zh ?? "").toLowerCase().includes(q) ||
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
            <Link to="/" className="flex items-center hover:opacity-80">
              <img
                src={logoHeader.url}
                alt="Vertical Oxygen"
                className="h-6 w-auto"
              />
            </Link>
            <span className="hidden md:inline">
              {t({ en: "Technical Documentation", fr: "Documentation technique", zh: "技术文档" })}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">{t({ en: "Rev. 2026.07", fr: "Rév. 2026.07", zh: "修订版 2026.07" })}</span>
            <span>{t({ en: "Doc. VO-SPEC", fr: "Doc. VO-SPEC", zh: "文档 VO-SPEC" })}</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                {t({
                  en: "Section 12 93 00 / 32 94 33 — Living Wall Systems",
                  fr: "Section 12 93 00 / 32 94 33 — Systèmes de murs végétaux",
                  zh: "章节 12 93 00 / 32 94 33 — 活体植物墙系统",
                })}
              </p>
              <h1
                className="mt-4 text-4xl leading-[1.05] tracking-tight text-neutral-900 md:text-6xl"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
              >
                {t({ en: "Specifications & Technical Data", fr: "Spécifications et données techniques", zh: "规格与技术数据" })}
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
                {t({
                  en: "Reference documentation for architects, engineers, and contractors specifying Vertical Oxygen living wall systems. All figures represent typical performance for the standard configuration and are subject to project-specific engineering review.",
                  fr: "Documentation de référence destinée aux architectes, ingénieurs et entrepreneurs qui spécifient les systèmes de murs végétaux Vertical Oxygen. Tous les chiffres représentent la performance typique de la configuration standard et sont soumis à une révision technique propre à chaque projet.",
                  zh: "供指定使用Vertical Oxygen活体植物墙系统的建筑师、工程师和承包商参考的技术文档。所有数据均代表标准配置的典型性能，具体项目须经工程审查确认。",
                })}
              </p>
            </div>
            <div className="border-l border-neutral-200 pl-6 md:col-span-4 md:pl-8">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                <dt>{t({ en: "Issued", fr: "Émis", zh: "发布日期" })}</dt>
                <dd className="text-neutral-900">2026-07-20</dd>
                <dt>{t({ en: "Format", fr: "Format", zh: "格式" })}</dt>
                <dd className="text-neutral-900">{t({ en: "CSI 3-Part", fr: "CSI en 3 parties", zh: "CSI 三段式" })}</dd>
                <dt>{t({ en: "Units", fr: "Unités", zh: "单位制" })}</dt>
                <dd className="text-neutral-900">{t({ en: "IP", fr: "Impérial", zh: "英制" })}</dd>
                <dt>{t({ en: "Region", fr: "Région", zh: "地区" })}</dt>
                <dd className="text-neutral-900">{t({ en: "Canada / NA", fr: "Canada / Amérique du Nord", zh: "加拿大 / 北美" })}</dd>
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
                {t({ en: "Product Systems", fr: "Systèmes de produits", zh: "产品系统" })}
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
                    {t(CATEGORY_LABELS[c])}
                  </button>
                ))}
              </div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t({ en: "Search code, name, CSI", fr: "Rechercher par code, nom, CSI", zh: "按代码、名称、CSI搜索" })}
                className="w-full rounded-none border border-neutral-300 bg-white px-3 py-2 font-mono text-[12px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none sm:w-64"
              />
            </div>
          </div>

          {/* Desktop table */}
          <div className="mt-6 hidden overflow-x-auto md:block">
            <table className="w-full border-collapse font-mono text-[12px] text-neutral-800">
              <thead>
                <tr className="border-b border-neutral-300 text-left uppercase tracking-[0.12em] text-neutral-500">
                  <th className="py-3 pr-4 font-normal">{t({ en: "Code", fr: "Code", zh: "代码" })}</th>
                  <th className="py-3 pr-4 font-normal">{t({ en: "System", fr: "Système", zh: "系统" })}</th>
                  <th className="py-3 pr-4 font-normal">{t({ en: "Load", fr: "Charge", zh: "荷载" })}</th>
                  <th className="py-3 pr-4 font-normal">{t({ en: "Water", fr: "Eau", zh: "用水量" })}</th>
                  <th className="py-3 pr-4 font-normal">{t({ en: "Electrical", fr: "Électricité", zh: "电气" })}</th>
                  <th className="py-3 pr-4 font-normal">{t({ en: "Fire", fr: "Feu", zh: "防火" })}</th>
                  <th className="py-3 pr-4 font-normal">NRC</th>
                  <th className="py-3 pr-4 font-normal">CSI</th>
                  <th className="py-3 pr-0 font-normal">{t({ en: "Downloads", fr: "Téléchargements", zh: "下载" })}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((s) => (
                  <tr key={s.id} className="border-b border-neutral-200 align-top hover:bg-neutral-50">
                    <td className="py-4 pr-4 text-neutral-900">{s.code}</td>
                    <td className="py-4 pr-4">
                      <div className="text-neutral-900" style={{ fontFamily: "'Karla', system-ui, sans-serif" }}>
                        {t(s.name)}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.1em] text-neutral-500">
                        {t(CATEGORY_LABELS[s.category])} · {t({ en: "Depth", fr: "Épaisseur", zh: "厚度" })} {t(s.depth)}
                      </div>
                    </td>
                    <td className="py-4 pr-4">{s.loadPsf}</td>
                    <td className="py-4 pr-4">{s.waterGpdSf}</td>
                    <td className="py-4 pr-4">{t(s.electrical)}</td>
                    <td className="py-4 pr-4">{t(s.fireRating)}</td>
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
                      {t({ en: "No systems match the current filter.", fr: "Aucun système ne correspond au filtre actuel.", zh: "没有符合当前筛选条件的系统。" })}
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
                  <span>{t(CATEGORY_LABELS[s.category])}</span>
                </div>
                <h3
                  className="mt-2 text-xl tracking-tight text-neutral-900"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
                >
                  {t(s.name)}
                </h3>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[12px] text-neutral-800">
                  <dt className="text-neutral-500">{t({ en: "Load", fr: "Charge", zh: "荷载" })}</dt><dd>{s.loadPsf}</dd>
                  <dt className="text-neutral-500">{t({ en: "Water", fr: "Eau", zh: "用水量" })}</dt><dd>{s.waterGpdSf}</dd>
                  <dt className="text-neutral-500">{t({ en: "Electrical", fr: "Électricité", zh: "电气" })}</dt><dd>{t(s.electrical)}</dd>
                  <dt className="text-neutral-500">{t({ en: "Fire", fr: "Feu", zh: "防火" })}</dt><dd>{t(s.fireRating)}</dd>
                  <dt className="text-neutral-500">NRC</dt><dd>{s.nrc}</dd>
                  <dt className="text-neutral-500">CSI</dt><dd>{s.csi}</dd>
                  <dt className="text-neutral-500">{t({ en: "Depth", fr: "Épaisseur", zh: "厚度" })}</dt><dd>{t(s.depth)}</dd>
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
            {t({
              en: "Saturated load values include water, substrate, and mature plant mass at 100% capacity. NRC ratings tested per ASTM C423. Fire ratings per ASTM E84 surface burning characteristics.",
              fr: "Les valeurs de charge saturée comprennent l'eau, le substrat et la masse végétale mature à pleine capacité. Les cotes NRC sont testées selon ASTM C423. Les cotes de résistance au feu sont établies selon les caractéristiques de combustion de surface ASTM E84.",
              zh: "饱和荷载值包含水分、基质及成熟植物在100%容量下的质量。NRC吸声系数依据ASTM C423测试，防火等级依据ASTM E84表面燃烧特性测试确定。",
            })}
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
              {t({ en: "Classification & Certification", fr: "Classification et certification", zh: "分类与认证" })}
            </h2>
            <p className="mt-4 font-mono text-[12px] leading-relaxed text-neutral-700">
              {t({
                en: "Vertical Oxygen systems are specified under multiple CSI MasterFormat divisions depending on interior/exterior use and structural integration.",
                fr: "Les systèmes Vertical Oxygen sont spécifiés sous plusieurs divisions CSI MasterFormat selon l'usage intérieur/extérieur et l'intégration structurale.",
                zh: "Vertical Oxygen系统根据室内/室外用途及结构集成方式，分属多个CSI MasterFormat分部进行规格说明。",
              })}
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <SpecBlock
                label={t({ en: "CSI MasterFormat", fr: "CSI MasterFormat", zh: "CSI MasterFormat 分类" })}
                rows={[
                  ["12 93 00", t({ en: "Site Furnishings — Interior Plants", fr: "Aménagement de site — Plantes intérieures", zh: "场地设施 — 室内植物" })],
                  ["12 93 43", t({ en: "Interior Planters", fr: "Jardinières intérieures", zh: "室内花池" })],
                  ["32 94 33", t({ en: "Planters — Exterior", fr: "Jardinières — Extérieur", zh: "花池 — 室外" })],
                  ["09 77 00", t({ en: "Special Wall Surfacing (moss)", fr: "Revêtement mural spécial (mousse)", zh: "特殊墙面饰面（苔藓）" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Certifications & Credits", fr: "Certifications et crédits", zh: "认证与积分" })}
                rows={[
                  ["LEED v4.1", t({ en: "IEQ Credit — Interior Air Quality", fr: "Crédit IEQ — Qualité de l'air intérieur", zh: "IEQ积分 — 室内空气质量" })],
                  ["LEED v4.1", t({ en: "IEQ Credit — Daylight & Views", fr: "Crédit IEQ — Éclairage naturel et vues", zh: "IEQ积分 — 采光与视野" })],
                  ["WELL v2", t({ en: "Feature M09 — Biophilia I", fr: "Caractéristique M09 — Biophilie I", zh: "特征 M09 — 亲生物设计 I" })],
                  ["WELL v2", t({ en: "Feature M02 — Biophilia II Qualitative", fr: "Caractéristique M02 — Biophilie II Qualitative", zh: "特征 M02 — 亲生物设计 II（定性）" })],
                  ["Living Product", t({ en: "Declare Label: LBC Red List Free (moss)", fr: "Étiquette Declare : LBC Red List Free (mousse)", zh: "Declare标签：LBC红名单免除（苔藓）" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Standards Referenced", fr: "Normes de référence", zh: "参考标准" })}
                rows={[
                  ["ASTM E84", t({ en: "Surface Burning Characteristics", fr: "Caractéristiques de combustion de surface", zh: "表面燃烧特性" })],
                  ["ASTM C423", t({ en: "Sound Absorption (NRC)", fr: "Absorption acoustique (NRC)", zh: "吸声系数（NRC）" })],
                  ["ASTM E90", t({ en: "Sound Transmission (STC)", fr: "Transmission acoustique (STC)", zh: "隔声等级（STC）" })],
                  ["CSA B64.10", t({ en: "Backflow Prevention", fr: "Prévention du refoulement", zh: "防回流装置" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Warranty", fr: "Garantie", zh: "质保" })}
                rows={[
                  [t({ en: "Structural", fr: "Structure", zh: "结构" }), t({ en: "10 years — frame & panels", fr: "10 ans — cadre et panneaux", zh: "10年 — 框架与面板" })],
                  [t({ en: "Irrigation", fr: "Irrigation", zh: "灌溉" }), t({ en: "5 years — pumps & controllers", fr: "5 ans — pompes et contrôleurs", zh: "5年 — 水泵与控制器" })],
                  [t({ en: "Plant Health", fr: "Santé des plantes", zh: "植物健康" }), t({ en: "100% guarantee — active maintenance contract required", fr: "Garantie de 100 % — contrat d'entretien actif requis", zh: "100%保障 — 须签订有效维护合同" })],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & plant guarantee */}
      <section id="maintenance" className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">§ 3</p>
            <h2
              className="mt-1 text-2xl tracking-tight text-neutral-900 md:text-3xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
            >
              {t({ en: "Maintenance & Plant Guarantee", fr: "Entretien et garantie des plantes", zh: "维护与植物保障" })}
            </h2>
            <p className="mt-4 font-mono text-[12px] leading-relaxed text-neutral-700">
              {t({
                en: "All living wall installations require a scheduled maintenance agreement to remain under plant warranty. The 100% plant guarantee is issued only in conjunction with an active maintenance contract and lapses if service is discontinued.",
                fr: "Toutes les installations de murs végétaux nécessitent une entente d'entretien planifiée pour demeurer couvertes par la garantie des plantes. La garantie de 100 % sur les plantes n'est offerte qu'en association avec un contrat d'entretien actif et devient caduque si le service est interrompu.",
                zh: "所有活体植物墙装置均须签订定期维护协议方可享有植物质保。100%植物保障仅在维护合同持续有效期间提供，若服务中止则保障失效。",
              })}
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <SpecBlock
                label={t({ en: "Plant Guarantee", fr: "Garantie des plantes", zh: "植物保障" })}
                rows={[
                  [t({ en: "Coverage", fr: "Couverture", zh: "保障范围" }), t({ en: "100% of installed plant material", fr: "100 % du matériel végétal installé", zh: "100%已安装植物材料" })],
                  [t({ en: "Replacement", fr: "Remplacement", zh: "更换" }), t({ en: "No cost — labour & material included", fr: "Sans frais — main-d'œuvre et matériel inclus", zh: "免费 — 含人工与材料" })],
                  [t({ en: "Condition", fr: "Condition", zh: "条件" }), t({ en: "Active maintenance contract required", fr: "Contrat d'entretien actif requis", zh: "须持有有效维护合同" })],
                  [t({ en: "Lapse", fr: "Caducité", zh: "失效" }), t({ en: "Void 30 days after service discontinued", fr: "Nulle 30 jours après l'interruption du service", zh: "服务中止30天后失效" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Maintenance Scope", fr: "Portée de l'entretien", zh: "维护范围" })}
                rows={[
                  [t({ en: "Pruning & grooming", fr: "Taille et entretien esthétique", zh: "修剪与整形" }), t({ en: "Every scheduled visit", fr: "À chaque visite planifiée", zh: "每次例行访视" })],
                  [t({ en: "Nutrient dosing", fr: "Dosage des nutriments", zh: "养分投配" }), t({ en: "Reservoir feed adjustment", fr: "Ajustement de l'alimentation du réservoir", zh: "调整水箱供液" })],
                  [t({ en: "Pest management", fr: "Gestion des ravageurs", zh: "病虫害防治" }), t({ en: "Inspection & IPM treatment", fr: "Inspection et traitement de lutte antiparasitaire intégrée", zh: "检查与综合虫害管理（IPM）处理" })],
                  [t({ en: "Irrigation service", fr: "Entretien de l'irrigation", zh: "灌溉系统维护" }), t({ en: "Pump, emitter & filter check", fr: "Vérification de la pompe, des goutteurs et du filtre", zh: "检查水泵、滴头与过滤器" })],
                  [t({ en: "Reporting", fr: "Rapports", zh: "报告" }), t({ en: "Condition log issued per visit", fr: "Journal d'état remis à chaque visite", zh: "每次访视出具状态记录" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Service Frequency", fr: "Fréquence d'entretien", zh: "服务频率" })}
                rows={[
                  [t({ en: "Interior — standard", fr: "Intérieur — standard", zh: "室内 — 标准" }), t({ en: "Bi-weekly", fr: "Aux deux semaines", zh: "每两周一次" })],
                  [t({ en: "Interior — high visibility", fr: "Intérieur — haute visibilité", zh: "室内 — 高曝光区域" }), t({ en: "Weekly", fr: "Hebdomadaire", zh: "每周一次" })],
                  [t({ en: "Exterior", fr: "Extérieur", zh: "室外" }), t({ en: "Monthly (seasonal)", fr: "Mensuelle (saisonnière)", zh: "每月一次（季节性）" })],
                  [t({ en: "System audit", fr: "Vérification du système", zh: "系统巡检" }), t({ en: "Annual", fr: "Annuelle", zh: "每年一次" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Exclusions", fr: "Exclusions", zh: "除外责任" })}
                rows={[
                  [t({ en: "Owner intervention", fr: "Intervention du propriétaire", zh: "业主自行干预" }), t({ en: "Unauthorized planting or dosing", fr: "Plantation ou dosage non autorisés", zh: "未经授权的种植或投料" })],
                  [t({ en: "Building services", fr: "Services du bâtiment", zh: "建筑设施服务" }), t({ en: "Loss of water, power, or HVAC", fr: "Perte d'eau, d'électricité ou de CVCA", zh: "供水、供电或暖通空调中断" })],
                  [t({ en: "Lighting", fr: "Éclairage", zh: "照明" }), t({ en: "Levels below specified PPFD minimum", fr: "Niveaux inférieurs au PPFD minimal spécifié", zh: "光照低于规定的最低PPFD值" })],
                  [t({ en: "Damage", fr: "Dommages", zh: "损坏" }), t({ en: "Vandalism, impact, or force majeure", fr: "Vandalisme, impact ou force majeure", zh: "人为破坏、撞击或不可抗力" })],
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
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">§ 4</p>
            <h2
              className="mt-1 text-2xl tracking-tight text-neutral-900 md:text-3xl"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
            >
              {t({ en: "Request a Spec Review", fr: "Demander une révision technique", zh: "申请规格审查" })}
            </h2>
            <p className="mt-4 font-mono text-[12px] leading-relaxed text-neutral-700">
              {t({
                en: "For project-specific engineering review, substitution requests, or CAD/BIM families not listed here. This channel is monitored by our technical team — not general sales.",
                fr: "Pour toute révision technique propre à un projet, demande de substitution ou famille CAD/BIM non répertoriée ici. Ce canal est suivi par notre équipe technique — non par le service des ventes générales.",
                zh: "适用于项目专属工程审查、替代方案申请，或本页未列出的CAD/BIM族文件请求。此渠道由技术团队负责跟进，非一般销售咨询。",
              })}
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-y-2 font-mono text-[12px] text-neutral-700">
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">{t({ en: "Technical", fr: "Technique", zh: "技术支持" })}</dt>
                <dd className="text-neutral-900">specs@verticaloxygen.com</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">{t({ en: "Phone EN", fr: "Téléphone (anglais)", zh: "电话（英语）" })}</dt>
                <dd className="text-neutral-900">604-997-1760</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">{t({ en: "Phone FR", fr: "Téléphone (français)", zh: "电话（法语）" })}</dt>
                <dd className="text-neutral-900">403-861-3732</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">{t({ en: "Response", fr: "Délai de réponse", zh: "响应时间" })}</dt>
                <dd className="text-neutral-900">{t({ en: "2 business days", fr: "2 jours ouvrables", zh: "2个工作日" })}</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">{t({ en: "Sales (separate)", fr: "Ventes (distinct)", zh: "销售（另设）" })}</dt>
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
              alert(
                t({
                  en: "Spec review request submitted. Our technical team will respond within 2 business days.",
                  fr: "Demande de révision technique envoyée. Notre équipe technique répondra dans un délai de 2 jours ouvrables.",
                  zh: "规格审查申请已提交。我们的技术团队将在2个工作日内回复。",
                }),
              );
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label={t({ en: "Full Name", fr: "Nom complet", zh: "姓名" })} name="name" required />
              <Field label={t({ en: "Firm", fr: "Firme", zh: "公司/事务所" })} name="firm" required />
              <Field label={t({ en: "Email", fr: "Courriel", zh: "电子邮箱" })} name="email" type="email" required />
              <Field label={t({ en: "Phone", fr: "Téléphone", zh: "电话" })} name="phone" type="tel" />
              <Field label={t({ en: "Project Name", fr: "Nom du projet", zh: "项目名称" })} name="project" required />
              <Field label={t({ en: "Project Location", fr: "Emplacement du projet", zh: "项目地点" })} name="location" />
              <Field
                label={t({ en: "Role", fr: "Rôle", zh: "职务" })}
                name="role"
                as="select"
                options={[
                  t({ en: "Architect", fr: "Architecte", zh: "建筑师" }),
                  t({ en: "Engineer (MEP)", fr: "Ingénieur (CVCA/électromécanique)", zh: "工程师（机电）" }),
                  t({ en: "Engineer (Structural)", fr: "Ingénieur (structure)", zh: "工程师（结构）" }),
                  t({ en: "General Contractor", fr: "Entrepreneur général", zh: "总承包商" }),
                  t({ en: "Interior Designer", fr: "Designer d'intérieur", zh: "室内设计师" }),
                  t({ en: "Owner / Rep", fr: "Propriétaire / Représentant", zh: "业主 / 代表" }),
                  t({ en: "Other", fr: "Autre", zh: "其他" }),
                ]}
              />
              <Field
                label={t({ en: "Specifying System", fr: "Système spécifié", zh: "指定系统" })}
                name="system"
                as="select"
                options={SYSTEMS.map((s) => `${s.code} — ${t(s.name)}`).concat(
                  t({ en: "Undetermined", fr: "Indéterminé", zh: "未确定" }),
                )}
              />
            </div>
            <div className="mt-4">
              <label className="block font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                {t({ en: "Scope / Questions", fr: "Portée / Questions", zh: "范围 / 问题" })}
              </label>
              <textarea
                name="notes"
                rows={5}
                required
                placeholder={t({
                  en: "Substrate substitution, structural loading assumptions, integration with adjacent assemblies, etc.",
                  fr: "Substitution de substrat, hypothèses de charge structurale, intégration avec les assemblages adjacents, etc.",
                  zh: "基质替代方案、结构荷载假设、与相邻构造的集成等。",
                })}
                className="mt-1.5 w-full rounded-none border border-neutral-300 bg-white px-3 py-2 font-mono text-[12px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-none bg-neutral-900 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-neutral-700"
              >
                {t({ en: "Submit for Review", fr: "Soumettre pour révision", zh: "提交审查" })}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </button>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                {t({
                  en: "Responses are project-scoped, not commercial quotes.",
                  fr: "Les réponses sont propres au projet et ne constituent pas des soumissions commerciales.",
                  zh: "回复内容仅针对具体项目，不构成商业报价。",
                })}
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 font-mono text-[11px] uppercase tracking-[0.14em] md:flex-row md:items-center md:justify-between">
          <div>
            {t({
              en: "Vertical Oxygen Inc. · Technical Documentation",
              fr: "Vertical Oxygen Inc. · Documentation technique",
              zh: "Vertical Oxygen Inc. · 技术文档",
            })}
          </div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white">{t({ en: "Main Site", fr: "Site principal", zh: "主站" })}</Link>
            <a href="#spec-review" className="hover:text-white">{t({ en: "Spec Review", fr: "Révision technique", zh: "规格审查" })}</a>
            <span>{t({ en: "Doc VO-SPEC · Rev. 2026.07", fr: "Doc VO-SPEC · Rév. 2026.07", zh: "文档 VO-SPEC · 修订版 2026.07" })}</span>
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
  const t = useT();
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
          <option value="">{t({ en: "— Select —", fr: "— Sélectionner —", zh: "— 请选择 —" })}</option>
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
