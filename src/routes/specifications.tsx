import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import logoHeader from "../assets/logo-header.png.asset.json";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useT, type Tr } from "@/lib/i18n";

export const Route = createFileRoute("/specifications")({
  component: SpecificationsPage,
  head: () => ({
    meta: [
      { title: "Specifications — Vertical Oxygen" },
      {
        name: "description",
        content:
          "Technical specifications for Vertical Oxygen aquaponic and hydroponic living wall systems — loads, water use, electrical, fire ratings and maintenance. Reference data for architects, engineers, and contractors.",
      },
      { property: "og:title", content: "Specifications — Vertical Oxygen" },
      {
        property: "og:description",
        content:
          "Loads, water use, electrical and maintenance data for Vertical Oxygen aquaponic and hydroponic living wall systems.",
      },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/specifications" }],
  }),
});

type CategoryKey = "Aquaponic" | "Hydroponic";

type System = {
  id: string;
  code: string;
  name: Tr;
  category: CategoryKey;
  loadPsf: string;
  waterGpdSf: string;
  electrical: Tr;
  fireRating: Tr;
  substrate: Tr;
  depth: Tr;
};

const CATEGORY_LABELS: Record<CategoryKey | "All", Tr> = {
  All: { en: "All", fr: "Tous", zh: "全部", es: "Todos", pa: "ਸਾਰੇ", ar: "الكل", hi: "सभी" },
  Aquaponic: { en: "Aquaponic", fr: "Aquaponique", zh: "鱼菜共生", es: "Acuapónico", pa: "ਐਕੁਆਪੋਨਿਕ", ar: "أكوابونيك", hi: "एक्वापोनिक" },
  Hydroponic: { en: "Hydroponic", fr: "Hydroponique", zh: "水培", es: "Hidropónico", pa: "ਹਾਈਡ੍ਰੋਪੋਨਿਕ", ar: "هيدروبونيك", hi: "हाइड्रोपोनिक" },
};

const SYSTEMS: System[] = [
  {
    id: "aquaponic-wall",
    code: "VO-AQ-01",
    name: { en: "Aquaponic Living Wall", fr: "Mur végétal aquaponique", zh: "鱼菜共生植物墙", es: "Muro vegetal acuapónico", pa: "ਐਕੁਆਪੋਨਿਕ ਲਿਵਿੰਗ ਵਾਲ", ar: "جدار حي أكوابونيك", hi: "एक्वापोनिक लिविंग वॉल" },
    category: "Aquaponic",
    loadPsf: "21.6 psf (saturated)",
    waterGpdSf: "0.35 L/day·sf",
    electrical: { en: "120V / 1.5A per 40 sf zone", fr: "120 V / 1,5 A par zone de 40 pi²", zh: "每40平方英尺分区120V / 1.5A", es: "120 V / 1,5 A por zona de 40 pie²", pa: "40 sf ਜ਼ੋਨ ਪ੍ਰਤੀ 120V / 1.5A", ar: "120 فولت / 1.5 أمبير لكل منطقة 40 قدم مربع", hi: "प्रति 40 sf ज़ोन 120V / 1.5A" },
    fireRating: { en: "ASTM E84 Class A backer", fr: "Support ASTM E84 Classe A", zh: "ASTM E84 A级基板", es: "Soporte ASTM E84 Clase A", pa: "ASTM E84 ਕਲਾਸ A ਬੈਕਰ", ar: "طبقة خلفية ASTM E84 فئة A", hi: "ASTM E84 क्लास A बैकर" },
    substrate: { en: "Fish-tank fed recirculating media beds", fr: "Lits de culture à recirculation alimentés par bassin à poissons", zh: "由鱼缸供液的循环式基质床", es: "Lechos de cultivo recirculantes alimentados por acuario", pa: "ਮੱਛੀ-ਟੈਂਕ ਨਾਲ ਭਰੇ ਰੀਸਰਕੁਲੇਟਿੰਗ ਮੀਡੀਆ ਬੈੱਡ", ar: "أحواض وسائط معاد تدويرها تغذيها خزانات الأسماك", hi: "फ़िश-टैंक द्वारा पोषित रीसर्कुलेटिंग मीडिया बेड" },
    depth: { en: '7.0" total (excl. tank)', fr: '7,0 po au total (hors bassin)', zh: '总厚度 7.0 英寸（不含水箱）', es: '7,0" en total (sin depósito)', pa: 'ਕੁੱਲ 7.0" (ਟੈਂਕ ਤੋਂ ਬਿਨਾਂ)', ar: 'إجمالي 7.0 بوصة (بدون الخزان)', hi: 'कुल 7.0" (टैंक को छोड़कर)' },
  },
  {
    id: "hydroponic-wall",
    code: "VO-HY-01",
    name: { en: "Hydroponic Living Wall", fr: "Mur végétal hydroponique", zh: "水培植物墙", es: "Muro vegetal hidropónico", pa: "ਹਾਈਡ੍ਰੋਪੋਨਿਕ ਲਿਵਿੰਗ ਵਾਲ", ar: "جدار حي هيدروبونيك", hi: "हाइड्रोपोनिक लिविंग वॉल" },
    category: "Hydroponic",
    loadPsf: "18.4 psf (saturated)",
    waterGpdSf: "0.35 L/day·sf",
    electrical: { en: "120V / 1.2A per 40 sf zone", fr: "120 V / 1,2 A par zone de 40 pi²", zh: "每40平方英尺分区120V / 1.2A", es: "120 V / 1,2 A por zona de 40 pie²", pa: "40 sf ਜ਼ੋਨ ਪ੍ਰਤੀ 120V / 1.2A", ar: "120 فولت / 1.2 أمبير لكل منطقة 40 قدم مربع", hi: "प्रति 40 sf ज़ोन 120V / 1.2A" },
    fireRating: { en: "ASTM E84 Class A backer", fr: "Support ASTM E84 Classe A", zh: "ASTM E84 A级基板", es: "Soporte ASTM E84 Clase A", pa: "ASTM E84 ਕਲਾਸ A ਬੈਕਰ", ar: "طبقة خلفية ASTM E84 فئة A", hi: "ASTM E84 क्लास A बैकर" },
    substrate: { en: "Recirculating felt with drip line", fr: "Feutre à recirculation avec ligne de goutte-à-goutte", zh: "带滴灌管路的循环式无纺布基质", es: "Fieltro recirculante con línea de goteo", pa: "ਡ੍ਰਿਪ ਲਾਈਨ ਨਾਲ ਰੀਸਰਕੁਲੇਟਿੰਗ ਫੈਲਟ", ar: "لباد معاد تدويره مع خط تنقيط", hi: "ड्रिप लाइन के साथ रीसर्कुलेटिंग फेल्ट" },
    depth: { en: '5.5" total', fr: '5,5 po au total', zh: '总厚度 5.5 英寸', es: '5,5" en total', pa: 'ਕੁੱਲ 5.5"', ar: 'إجمالي 5.5 بوصة', hi: 'कुल 5.5"' },
  },
];

const CATEGORIES = ["All", "Aquaponic", "Hydroponic"] as const;

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
        s.code.toLowerCase().includes(q);
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
              {t({ en: "Technical Documentation", fr: "Documentation technique", zh: "技术文档", es: "Documentación técnica", pa: "ਤਕਨੀਕੀ ਦਸਤਾਵੇਜ਼", ar: "الوثائق الفنية", hi: "तकनीकी दस्तावेज़" })}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">{t({ en: "Rev. 2026.07", fr: "Rév. 2026.07", zh: "修订版 2026.07", es: "Rev. 2026.07", pa: "Rev. 2026.07", ar: "مراجعة 2026.07", hi: "संशोधन 2026.07" })}</span>
            <span>{t({ en: "Doc. VO-SPEC", fr: "Doc. VO-SPEC", zh: "文档 VO-SPEC", es: "Doc. VO-SPEC", pa: "Doc. VO-SPEC", ar: "المستند VO-SPEC", hi: "Doc. VO-SPEC" })}</span>
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
                  en: "Aquaponic & Hydroponic Living Wall Systems",
                  fr: "Systèmes de murs végétaux aquaponiques et hydroponiques",
                  zh: "鱼菜共生与水培活体植物墙系统", es: "Sistemas de muros vegetales acuapónicos e hidropónicos", pa: "ਐਕੁਆਪੋਨਿਕ ਅਤੇ ਹਾਈਡ੍ਰੋਪੋਨਿਕ ਲਿਵਿੰਗ ਵਾਲ ਸਿਸਟਮ", ar: "أنظمة الجدران الحية الأكوابونيك والهيدروبونيك", hi: "एक्वापोनिक और हाइड्रोपोनिक लिविंग वॉल सिस्टम",
                })}
              </p>
              <h1
                className="mt-4 text-4xl leading-[1.05] tracking-tight text-neutral-900 md:text-6xl"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
              >
                {t({ en: "Specifications & Technical Data", fr: "Spécifications et données techniques", zh: "规格与技术数据", es: "Especificaciones y datos técnicos", pa: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਅਤੇ ਤਕਨੀਕੀ ਡਾਟਾ", ar: "المواصفات والبيانات الفنية", hi: "विनिर्देश और तकनीकी डेटा" })}
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
                {t({
                  en: "Reference documentation for architects, engineers, and contractors specifying Vertical Oxygen living wall systems. All figures represent typical performance for the standard configuration and are subject to project-specific engineering review.",
                  fr: "Documentation de référence destinée aux architectes, ingénieurs et entrepreneurs qui spécifient les systèmes de murs végétaux Vertical Oxygen. Tous les chiffres représentent la performance typique de la configuration standard et sont soumis à une révision technique propre à chaque projet.",
                  zh: "供指定使用Vertical Oxygen活体植物墙系统的建筑师、工程师和承包商参考的技术文档。所有数据均代表标准配置的典型性能，具体项目须经工程审查确认。", es: "Documentación de referencia para arquitectos, ingenieros y contratistas que especifican los sistemas de muros vegetales Vertical Oxygen. Todas las cifras representan el rendimiento típico de la configuración estándar y están sujetas a revisión de ingeniería específica del proyecto.", pa: "ਆਰਕੀਟੈਕਟਾਂ, ਇੰਜੀਨੀਅਰਾਂ ਅਤੇ ਠੇਕੇਦਾਰਾਂ ਲਈ ਹਵਾਲਾ ਦਸਤਾਵੇਜ਼ ਜੋ Vertical Oxygen ਲਿਵਿੰਗ ਵਾਲ ਸਿਸਟਮ ਨਿਰਧਾਰਤ ਕਰਦੇ ਹਨ। ਸਾਰੇ ਅੰਕੜੇ ਮਿਆਰੀ ਸੰਰਚਨਾ ਲਈ ਖਾਸ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ ਅਤੇ ਪ੍ਰੋਜੈਕਟ-ਵਿਸ਼ੇਸ਼ ਇੰਜੀਨੀਅਰਿੰਗ ਸਮੀਖਿਆ ਦੇ ਅਧੀਨ ਹਨ।", ar: "وثائق مرجعية للمهندسين المعماريين والمهندسين والمقاولين الذين يحددون أنظمة الجدران الحية Vertical Oxygen. تمثل جميع الأرقام الأداء النموذجي للتكوين القياسي وتخضع لمراجعة هندسية خاصة بالمشروع.", hi: "Vertical Oxygen लिविंग वॉल सिस्टम निर्दिष्ट करने वाले वास्तुकारों, इंजीनियरों और ठेकेदारों के लिए संदर्भ दस्तावेज़। सभी आंकड़े मानक कॉन्फ़िगरेशन के लिए विशिष्ट प्रदर्शन दर्शाते हैं और प्रोजेक्ट-विशिष्ट इंजीनियरिंग समीक्षा के अधीन हैं।",
                })}
              </p>
            </div>
            <div className="border-l border-neutral-200 pl-6 md:col-span-4 md:pl-8">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                <dt>{t({ en: "Issued", fr: "Émis", zh: "发布日期", es: "Emitido", pa: "ਜਾਰੀ ਕੀਤਾ", ar: "تاريخ الإصدار", hi: "जारी किया गया" })}</dt>
                <dd className="text-neutral-900">2026-07-20</dd>
                <dt>{t({ en: "Systems", fr: "Systèmes", zh: "系统", es: "Sistemas", pa: "ਸਿਸਟਮ", ar: "الأنظمة", hi: "सिस्टम" })}</dt>
                <dd className="text-neutral-900">{t({ en: "Aquaponic / Hydroponic", fr: "Aquaponique / Hydroponique", zh: "鱼菜共生 / 水培", es: "Acuapónico / Hidropónico", pa: "ਐਕੁਆਪੋਨਿਕ / ਹਾਈਡ੍ਰੋਪੋਨਿਕ", ar: "أكوابونيك / هيدروبونيك", hi: "एक्वापोनिक / हाइड्रोपोनिक" })}</dd>
                <dt>{t({ en: "Units", fr: "Unités", zh: "单位制", es: "Unidades", pa: "ਯੂਨਿਟ", ar: "الوحدات", hi: "इकाइयाँ" })}</dt>
                <dd className="text-neutral-900">{t({ en: "IP", fr: "Impérial", zh: "英制", es: "Imperial", pa: "IP", ar: "النظام الإمبراطوري", hi: "IP" })}</dd>
                <dt>{t({ en: "Region", fr: "Région", zh: "地区", es: "Región", pa: "ਖੇਤਰ", ar: "المنطقة", hi: "क्षेत्र" })}</dt>
                <dd className="text-neutral-900">{t({ en: "Canada / NA", fr: "Canada / Amérique du Nord", zh: "加拿大 / 北美", es: "Canadá / AN", pa: "ਕੈਨੇਡਾ / NA", ar: "كندا / أمريكا الشمالية", hi: "कनाडा / NA" })}</dd>
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
                {t({ en: "Product Systems", fr: "Systèmes de produits", zh: "产品系统", es: "Sistemas de productos", pa: "ਉਤਪਾਦ ਸਿਸਟਮ", ar: "أنظمة المنتجات", hi: "उत्पाद प्रणालियाँ" })}
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
                placeholder={t({ en: "Search code or name", fr: "Rechercher par code ou nom", zh: "按代码或名称搜索", es: "Buscar código o nombre", pa: "ਕੋਡ ਜਾਂ ਨਾਮ ਖੋਜੋ", ar: "بحث عن الرمز أو الاسم", hi: "कोड या नाम खोजें" })}
                className="w-full rounded-none border border-neutral-300 bg-white px-3 py-2 font-mono text-[12px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none sm:w-64"
              />
            </div>
          </div>

          {/* Desktop table */}
          <div className="mt-6 hidden overflow-x-auto md:block">
            <table className="w-full border-collapse font-mono text-[12px] text-neutral-800">
              <thead>
                <tr className="border-b border-neutral-300 text-left uppercase tracking-[0.12em] text-neutral-500">
                  <th className="py-3 pr-4 font-normal">{t({ en: "Code", fr: "Code", zh: "代码", es: "Código", pa: "ਕੋਡ", ar: "الرمز", hi: "कोड" })}</th>
                  <th className="py-3 pr-4 font-normal">{t({ en: "System", fr: "Système", zh: "系统", es: "Sistema", pa: "ਸਿਸਟਮ", ar: "النظام", hi: "सिस्टम" })}</th>
                  <th className="py-3 pr-4 font-normal">{t({ en: "Load", fr: "Charge", zh: "荷载", es: "Carga", pa: "ਲੋਡ", ar: "الحمل", hi: "लोड" })}</th>
                  <th className="py-3 pr-4 font-normal">{t({ en: "Water", fr: "Eau", zh: "用水量", es: "Agua", pa: "ਪਾਣੀ", ar: "الماء", hi: "पानी" })}</th>
                  <th className="py-3 pr-4 font-normal">{t({ en: "Electrical", fr: "Électricité", zh: "电气", es: "Eléctrico", pa: "ਇਲੈਕਟ੍ਰੀਕਲ", ar: "الكهرباء", hi: "इलेक्ट्रिकल" })}</th>
                  <th className="py-3 pr-4 font-normal">{t({ en: "Fire", fr: "Feu", zh: "防火", es: "Fuego", pa: "ਅੱਗ", ar: "الحريق", hi: "अग्नि" })}</th>
                  <th className="py-3 pr-0 font-normal">{t({ en: "Substrate", fr: "Substrat", zh: "基质", es: "Sustrato", pa: "ਸਬਸਟਰੇਟ", ar: "الركيزة", hi: "सब्सट्रेट" })}</th>
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
                        {t(CATEGORY_LABELS[s.category])} · {t({ en: "Depth", fr: "Épaisseur", zh: "厚度", es: "Profundidad", pa: "ਡੂੰਘਾਈ", ar: "العمق", hi: "गहराई" })} {t(s.depth)}
                      </div>
                    </td>
                    <td className="py-4 pr-4">{s.loadPsf}</td>
                    <td className="py-4 pr-4">{s.waterGpdSf}</td>
                    <td className="py-4 pr-4">{t(s.electrical)}</td>
                    <td className="py-4 pr-4">{t(s.fireRating)}</td>
                    <td className="py-4 pr-0">{t(s.substrate)}</td>
                  </tr>
                ))}
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-neutral-500">
                      {t({ en: "No systems match the current filter.", fr: "Aucun système ne correspond au filtre actuel.", zh: "没有符合当前筛选条件的系统。", es: "Ningún sistema coincide con el filtro actual.", pa: "ਮੌਜੂਦਾ ਫਿਲਟਰ ਨਾਲ ਕੋਈ ਸਿਸਟਮ ਮੇਲ ਨਹੀਂ ਖਾਂਦਾ।", ar: "لا توجد أنظمة تطابق عامل التصفية الحالي.", hi: "वर्तमान फ़िल्टर से कोई सिस्टम मेल नहीं खाता।" })}
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
                  <dt className="text-neutral-500">{t({ en: "Load", fr: "Charge", zh: "荷载", es: "Carga", pa: "ਲੋਡ", ar: "الحمل", hi: "लोड" })}</dt><dd>{s.loadPsf}</dd>
                  <dt className="text-neutral-500">{t({ en: "Water", fr: "Eau", zh: "用水量", es: "Agua", pa: "ਪਾਣੀ", ar: "الماء", hi: "पानी" })}</dt><dd>{s.waterGpdSf}</dd>
                  <dt className="text-neutral-500">{t({ en: "Electrical", fr: "Électricité", zh: "电气", es: "Eléctrico", pa: "ਇਲੈਕਟ੍ਰੀਕਲ", ar: "الكهرباء", hi: "इलेक्ट्रिकल" })}</dt><dd>{t(s.electrical)}</dd>
                  <dt className="text-neutral-500">{t({ en: "Fire", fr: "Feu", zh: "防火", es: "Fuego", pa: "ਅੱਗ", ar: "الحريق", hi: "अग्नि" })}</dt><dd>{t(s.fireRating)}</dd>
                  <dt className="text-neutral-500">{t({ en: "Substrate", fr: "Substrat", zh: "基质", es: "Sustrato", pa: "ਸਬਸਟਰੇਟ", ar: "الركيزة", hi: "सब्सट्रेट" })}</dt><dd>{t(s.substrate)}</dd>
                  <dt className="text-neutral-500">{t({ en: "Depth", fr: "Épaisseur", zh: "厚度", es: "Profundidad", pa: "ਡੂੰਘਾਈ", ar: "العمق", hi: "गहराई" })}</dt><dd>{t(s.depth)}</dd>
                </dl>
              </article>
            ))}
          </div>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
            {t({
              en: "Saturated load values include water, substrate, and mature plant mass at 100% capacity. Water figures are litres per day per square foot of wall face. Fire ratings per ASTM E84 surface burning characteristics.",
              fr: "Les valeurs de charge saturée comprennent l'eau, le substrat et la masse végétale mature à pleine capacité. Les valeurs d'eau sont exprimées en litres par jour par pied carré de surface de mur. Les cotes de résistance au feu sont établies selon les caractéristiques de combustion de surface ASTM E84.",
              zh: "饱和荷载值包含水分、基质及成熟植物在100%容量下的质量。用水量以每平方英尺墙面每日升数计。防火等级依据ASTM E84表面燃烧特性测试确定。", es: "Los valores de carga saturada incluyen agua, sustrato y masa vegetal madura al 100 % de capacidad. Las cifras de agua son litros por día por pie cuadrado de superficie de muro. Las calificaciones de fuego según las características de combustión superficial ASTM E84.", pa: "ਸੰਤ੍ਰਿਪਤ ਲੋਡ ਮੁੱਲਾਂ ਵਿੱਚ ਪਾਣੀ, ਸਬਸਟਰੇਟ, ਅਤੇ 100% ਸਮਰੱਥਾ 'ਤੇ ਪਰਿਪੱਕ ਪੌਦਿਆਂ ਦਾ ਪੁੰਜ ਸ਼ਾਮਲ ਹੈ। ਪਾਣੀ ਦੇ ਅੰਕੜੇ ਪ੍ਰਤੀ ਵਰਗ ਫੁੱਟ ਕੰਧ ਸਤ੍ਹਾ ਪ੍ਰਤੀ ਦਿਨ ਲੀਟਰ ਵਿੱਚ ਹਨ। ਅੱਗ ਰੇਟਿੰਗ ASTM E84 ਸਤ੍ਹਾ ਬਲਣ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਅਨੁਸਾਰ।", ar: "تشمل قيم الحمل المشبع الماء والركيزة وكتلة النباتات الناضجة عند سعة 100%. أرقام المياه باللتر يومياً لكل قدم مربع من واجهة الجدار. تصنيفات الحريق وفق خصائص احتراق السطح ASTM E84.", hi: "संतृप्त लोड मूल्यों में पानी, सब्सट्रेट, और 100% क्षमता पर परिपक्व पौध द्रव्यमान शामिल है। पानी के आंकड़े प्रति वर्ग फुट दीवार सतह प्रति दिन लीटर में हैं। अग्नि रेटिंग ASTM E84 सतह दहन विशेषताओं के अनुसार।",
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
              {t({ en: "Classification & Certification", fr: "Classification et certification", zh: "分类与认证", es: "Clasificación y certificación", pa: "ਵਰਗੀਕਰਨ ਅਤੇ ਸਰਟੀਫਿਕੇਸ਼ਨ", ar: "التصنيف والاعتماد", hi: "वर्गीकरण और प्रमाणन" })}
            </h2>
            <p className="mt-4 font-mono text-[12px] leading-relaxed text-neutral-700">
              {t({
                en: "Vertical Oxygen systems are specified under multiple CSI MasterFormat divisions depending on interior/exterior use and structural integration.",
                fr: "Les systèmes Vertical Oxygen sont spécifiés sous plusieurs divisions CSI MasterFormat selon l'usage intérieur/extérieur et l'intégration structurale.",
                zh: "Vertical Oxygen系统根据室内/室外用途及结构集成方式，分属多个CSI MasterFormat分部进行规格说明。", es: "Los sistemas Vertical Oxygen se especifican bajo múltiples divisiones de CSI MasterFormat según el uso interior/exterior y la integración estructural.", pa: "Vertical Oxygen ਸਿਸਟਮ ਅੰਦਰੂਨੀ/ਬਾਹਰੀ ਵਰਤੋਂ ਅਤੇ ਸਟ੍ਰਕਚਰਲ ਏਕੀਕਰਨ ਦੇ ਆਧਾਰ 'ਤੇ ਕਈ CSI MasterFormat ਡਿਵੀਜ਼ਨਾਂ ਅਧੀਨ ਨਿਰਧਾਰਤ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।", ar: "تُحدد أنظمة Vertical Oxygen ضمن أقسام متعددة من CSI MasterFormat حسب الاستخدام الداخلي/الخارجي والتكامل الإنشائي.", hi: "Vertical Oxygen सिस्टम इंटीरियर/बाहरी उपयोग और संरचनात्मक एकीकरण के आधार पर कई CSI MasterFormat डिवीज़नों के अंतर्गत निर्दिष्ट किए जाते हैं।",
              })}
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <SpecBlock
                label={t({ en: "CSI MasterFormat", fr: "CSI MasterFormat", zh: "CSI MasterFormat 分类", es: "CSI MasterFormat", pa: "CSI MasterFormat", ar: "CSI MasterFormat", hi: "CSI MasterFormat" })}
                rows={[
                  ["12 93 00", t({ en: "Site Furnishings — Interior Plants", fr: "Aménagement de site — Plantes intérieures", zh: "场地设施 — 室内植物", es: "Mobiliario de sitio — Plantas de interior", pa: "ਸਾਈਟ ਫਰਨੀਸ਼ਿੰਗ — ਅੰਦਰੂਨੀ ਪੌਦੇ", ar: "تجهيزات الموقع — نباتات داخلية", hi: "साइट फ़र्निशिंग — इंटीरियर पौधे" })],
                  ["12 93 43", t({ en: "Interior Planters", fr: "Jardinières intérieures", zh: "室内花池", es: "Jardineras interiores", pa: "ਅੰਦਰੂਨੀ ਪਲਾਂਟਰ", ar: "أحواض داخلية", hi: "इंटीरियर प्लांटर" })],
                  ["32 94 33", t({ en: "Planters — Exterior", fr: "Jardinières — Extérieur", zh: "花池 — 室外", es: "Jardineras — Exterior", pa: "ਪਲਾਂਟਰ — ਬਾਹਰੀ", ar: "أحواض — خارجية", hi: "प्लांटर — बाहरी" })],
                  ["09 77 00", t({ en: "Special Wall Surfacing (moss)", fr: "Revêtement mural spécial (mousse)", zh: "特殊墙面饰面（苔藓）", es: "Revestimiento mural especial (musgo)", pa: "ਵਿਸ਼ੇਸ਼ ਕੰਧ ਸਤਹ (ਮੌਸ)", ar: "تكسية جدارية خاصة (طحلب)", hi: "विशेष दीवार सतह (मॉस)" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Certifications & Credits", fr: "Certifications et crédits", zh: "认证与积分", es: "Certificaciones y créditos", pa: "ਸਰਟੀਫਿਕੇਸ਼ਨ ਅਤੇ ਕ੍ਰੈਡਿਟ", ar: "الشهادات والاعتمادات", hi: "प्रमाणन और क्रेडिट" })}
                rows={[
                  ["LEED v4.1", t({ en: "IEQ Credit — Interior Air Quality", fr: "Crédit IEQ — Qualité de l'air intérieur", zh: "IEQ积分 — 室内空气质量", es: "Crédito IEQ — Calidad del aire interior", pa: "IEQ ਕ੍ਰੈਡਿਟ — ਅੰਦਰੂਨੀ ਹਵਾ ਦੀ ਗੁਣਵੱਤਾ", ar: "اعتماد IEQ — جودة الهواء الداخلي", hi: "IEQ क्रेडिट — आंतरिक वायु गुणवत्ता" })],
                  ["LEED v4.1", t({ en: "IEQ Credit — Daylight & Views", fr: "Crédit IEQ — Éclairage naturel et vues", zh: "IEQ积分 — 采光与视野", es: "Crédito IEQ — Luz natural y vistas", pa: "IEQ ਕ੍ਰੈਡਿਟ — ਦਿਨ ਦੀ ਰੌਸ਼ਨੀ ਅਤੇ ਦ੍ਰਿਸ਼", ar: "اعتماد IEQ — الإضاءة النهارية والإطلالات", hi: "IEQ क्रेडिट — डेलाइट और व्यू" })],
                  ["WELL v2", t({ en: "Feature M09 — Biophilia I", fr: "Caractéristique M09 — Biophilie I", zh: "特征 M09 — 亲生物设计 I", es: "Característica M09 — Biofilia I", pa: "ਫੀਚਰ M09 — ਬਾਇਓਫਿਲੀਆ I", ar: "الميزة M09 — الانتماء الحيوي I", hi: "फ़ीचर M09 — बायोफिलिया I" })],
                  ["WELL v2", t({ en: "Feature M02 — Biophilia II Qualitative", fr: "Caractéristique M02 — Biophilie II Qualitative", zh: "特征 M02 — 亲生物设计 II（定性）", es: "Característica M02 — Biofilia II cualitativa", pa: "ਫੀਚਰ M02 — ਬਾਇਓਫਿਲੀਆ II ਗੁਣਾਤਮਕ", ar: "الميزة M02 — الانتماء الحيوي II النوعي", hi: "फ़ीचर M02 — बायोफिलिया II गुणात्मक" })],
                  ["Living Product", t({ en: "Declare Label: LBC Red List Free (moss)", fr: "Étiquette Declare : LBC Red List Free (mousse)", zh: "Declare标签：LBC红名单免除（苔藓）", es: "Etiqueta Declare: libre de la Lista Roja LBC (musgo)", pa: "Declare ਲੇਬਲ: LBC ਰੈੱਡ ਲਿਸਟ ਮੁਕਤ (ਮੌਸ)", ar: "ملصق Declare: خالٍ من القائمة الحمراء LBC (الطحلب)", hi: "Declare लेबल: LBC रेड लिस्ट मुक्त (मॉस)" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Standards Referenced", fr: "Normes de référence", zh: "参考标准", es: "Normas de referencia", pa: "ਹਵਾਲਾ ਮਿਆਰ", ar: "المعايير المرجعية", hi: "संदर्भित मानक" })}
                rows={[
                  ["ASTM E84", t({ en: "Surface Burning Characteristics", fr: "Caractéristiques de combustion de surface", zh: "表面燃烧特性", es: "Características de combustión superficial", pa: "ਸਤ੍ਹਾ ਬਲਣ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ", ar: "خصائص احتراق السطح", hi: "सतह दहन विशेषताएँ" })],
                  ["ASTM C423", t({ en: "Sound Absorption (NRC)", fr: "Absorption acoustique (NRC)", zh: "吸声系数（NRC）", es: "Absorción acústica (NRC)", pa: "ਧੁਨੀ ਸ਼ੋਸ਼ਣ (NRC)", ar: "امتصاص الصوت (NRC)", hi: "ध्वनि अवशोषण (NRC)" })],
                  ["ASTM E90", t({ en: "Sound Transmission (STC)", fr: "Transmission acoustique (STC)", zh: "隔声等级（STC）", es: "Transmisión de sonido (STC)", pa: "ਧੁਨੀ ਸੰਚਾਰ (STC)", ar: "انتقال الصوت (STC)", hi: "ध्वनि संचरण (STC)" })],
                  ["CSA B64.10", t({ en: "Backflow Prevention", fr: "Prévention du refoulement", zh: "防回流装置", es: "Prevención de reflujo", pa: "ਬੈਕਫਲੋ ਰੋਕਥਾਮ", ar: "منع الرجوع الخلفي للمياه", hi: "बैकफ़्लो रोकथाम" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Warranty", fr: "Garantie", zh: "质保", es: "Garantía", pa: "ਵਾਰੰਟੀ", ar: "الضمان", hi: "वारंटी" })}
                rows={[
                  [t({ en: "Structural", fr: "Structure", zh: "结构", es: "Estructural", pa: "ਸਟ੍ਰਕਚਰਲ", ar: "إنشائي", hi: "संरचनात्मक" }), t({ en: "10 years — frame & panels", fr: "10 ans — cadre et panneaux", zh: "10年 — 框架与面板", es: "10 años — estructura y paneles", pa: "10 ਸਾਲ — ਫਰੇਮ ਅਤੇ ਪੈਨਲ", ar: "10 سنوات — الإطار والألواح", hi: "10 वर्ष — फ़्रेम और पैनल" })],
                  [t({ en: "Irrigation", fr: "Irrigation", zh: "灌溉", es: "Riego", pa: "ਸਿੰਚਾਈ", ar: "الري", hi: "सिंचाई" }), t({ en: "5 years — pumps & controllers", fr: "5 ans — pompes et contrôleurs", zh: "5年 — 水泵与控制器", es: "5 años — bombas y controladores", pa: "5 ਸਾਲ — ਪੰਪ ਅਤੇ ਕੰਟਰੋਲਰ", ar: "5 سنوات — المضخات ووحدات التحكم", hi: "5 वर्ष — पंप और नियंत्रक" })],
                  [t({ en: "Plant Health", fr: "Santé des plantes", zh: "植物健康", es: "Salud de las plantas", pa: "ਪੌਦਿਆਂ ਦੀ ਸਿਹਤ", ar: "صحة النباتات", hi: "पौध स्वास्थ्य" }), t({ en: "100% guarantee — active maintenance contract required", fr: "Garantie de 100 % — contrat d'entretien actif requis", zh: "100%保障 — 须签订有效维护合同", es: "Garantía del 100 % — se requiere contrato de mantenimiento activo", pa: "100% ਗਾਰੰਟੀ — ਸਰਗਰਮ ਰੱਖ-ਰਖਾਅ ਇਕਰਾਰਨਾਮਾ ਲੋੜੀਂਦਾ ਹੈ", ar: "ضمان 100% — يلزم وجود عقد صيانة نشط", hi: "100% गारंटी — सक्रिय रखरखाव अनुबंध आवश्यक" })],
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
              {t({ en: "Maintenance & Plant Guarantee", fr: "Entretien et garantie des plantes", zh: "维护与植物保障", es: "Mantenimiento y garantía de plantas", pa: "ਰੱਖ-ਰਖਾਅ ਅਤੇ ਪੌਦਾ ਗਾਰੰਟੀ", ar: "الصيانة وضمان النباتات", hi: "रखरखाव और पौध गारंटी" })}
            </h2>
            <p className="mt-4 font-mono text-[12px] leading-relaxed text-neutral-700">
              {t({
                en: "All living wall installations require a scheduled maintenance agreement to remain under plant warranty. The 100% plant guarantee is issued only in conjunction with an active maintenance contract and lapses if service is discontinued.",
                fr: "Toutes les installations de murs végétaux nécessitent une entente d'entretien planifiée pour demeurer couvertes par la garantie des plantes. La garantie de 100 % sur les plantes n'est offerte qu'en association avec un contrat d'entretien actif et devient caduque si le service est interrompu.",
                zh: "所有活体植物墙装置均须签订定期维护协议方可享有植物质保。100%植物保障仅在维护合同持续有效期间提供，若服务中止则保障失效。", es: "Todas las instalaciones de muros vegetales requieren un contrato de mantenimiento programado para permanecer bajo la garantía de las plantas. La garantía del 100 % de las plantas se otorga únicamente junto con un contrato de mantenimiento activo y caduca si el servicio se interrumpe.", pa: "ਪੌਦੇ ਦੀ ਵਾਰੰਟੀ ਅਧੀਨ ਰਹਿਣ ਲਈ ਸਾਰੀਆਂ ਲਿਵਿੰਗ ਵਾਲ ਸਥਾਪਨਾਵਾਂ ਲਈ ਇੱਕ ਨਿਯਤ ਰੱਖ-ਰਖਾਅ ਸਮਝੌਤਾ ਲੋੜੀਂਦਾ ਹੈ। 100% ਪੌਦਾ ਗਾਰੰਟੀ ਸਿਰਫ਼ ਇੱਕ ਸਰਗਰਮ ਰੱਖ-ਰਖਾਅ ਇਕਰਾਰਨਾਮੇ ਨਾਲ ਹੀ ਜਾਰੀ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਸੇਵਾ ਬੰਦ ਹੋਣ 'ਤੇ ਖਤਮ ਹੋ ਜਾਂਦੀ ਹੈ।", ar: "تتطلب جميع تركيبات الجدران الحية اتفاقية صيانة مجدولة للبقاء ضمن ضمان النباتات. يُصدر ضمان النباتات بنسبة 100% فقط بالاقتران مع عقد صيانة نشط وينتهي في حال توقف الخدمة.", hi: "पौधे की वारंटी के अंतर्गत बने रहने के लिए सभी लिविंग वॉल इंस्टॉलेशन के लिए एक निर्धारित रखरखाव अनुबंध आवश्यक है। 100% पौध गारंटी केवल सक्रिय रखरखाव अनुबंध के साथ ही जारी की जाती है और सेवा बंद होने पर समाप्त हो जाती है।",
              })}
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <SpecBlock
                label={t({ en: "Plant Guarantee", fr: "Garantie des plantes", zh: "植物保障", es: "Garantía de plantas", pa: "ਪੌਦਾ ਗਾਰੰਟੀ", ar: "ضمان النباتات", hi: "पौध गारंटी" })}
                rows={[
                  [t({ en: "Coverage", fr: "Couverture", zh: "保障范围", es: "Cobertura", pa: "ਕਵਰੇਜ", ar: "التغطية", hi: "कवरेज" }), t({ en: "100% of installed plant material", fr: "100 % du matériel végétal installé", zh: "100%已安装植物材料", es: "100 % del material vegetal instalado", pa: "ਸਥਾਪਿਤ ਪੌਦੇ ਦੀ ਸਮੱਗਰੀ ਦਾ 100%", ar: "100% من المواد النباتية المركّبة", hi: "स्थापित पौध सामग्री का 100%" })],
                  [t({ en: "Replacement", fr: "Remplacement", zh: "更换", es: "Reemplazo", pa: "ਬਦਲੀ", ar: "الاستبدال", hi: "प्रतिस्थापन" }), t({ en: "No cost — labour & material included", fr: "Sans frais — main-d'œuvre et matériel inclus", zh: "免费 — 含人工与材料", es: "Sin costo — mano de obra y material incluidos", pa: "ਕੋਈ ਕੀਮਤ ਨਹੀਂ — ਲੇਬਰ ਅਤੇ ਸਮੱਗਰੀ ਸ਼ਾਮਲ", ar: "بدون تكلفة — تشمل العمالة والمواد", hi: "कोई लागत नहीं — श्रम और सामग्री शामिल" })],
                  [t({ en: "Condition", fr: "Condition", zh: "条件", es: "Condición", pa: "ਸ਼ਰਤ", ar: "الشرط", hi: "शर्त" }), t({ en: "Active maintenance contract required", fr: "Contrat d'entretien actif requis", zh: "须持有有效维护合同", es: "Se requiere contrato de mantenimiento activo", pa: "ਸਰਗਰਮ ਰੱਖ-ਰਖਾਅ ਇਕਰਾਰਨਾਮਾ ਲੋੜੀਂਦਾ ਹੈ", ar: "يلزم وجود عقد صيانة نشط", hi: "सक्रिय रखरखाव अनुबंध आवश्यक" })],
                  [t({ en: "Lapse", fr: "Caducité", zh: "失效", es: "Caducidad", pa: "ਸਮਾਪਤੀ", ar: "الانتهاء", hi: "समाप्ति" }), t({ en: "Void 30 days after service discontinued", fr: "Nulle 30 jours après l'interruption du service", zh: "服务中止30天后失效", es: "Nula 30 días después de la interrupción del servicio", pa: "ਸੇਵਾ ਬੰਦ ਹੋਣ ਤੋਂ 30 ਦਿਨਾਂ ਬਾਅਦ ਰੱਦ", ar: "تصبح لاغية بعد 30 يوماً من توقف الخدمة", hi: "सेवा बंद होने के 30 दिन बाद अमान्य" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Maintenance Scope", fr: "Portée de l'entretien", zh: "维护范围", es: "Alcance del mantenimiento", pa: "ਰੱਖ-ਰਖਾਅ ਦਾ ਦਾਇਰਾ", ar: "نطاق الصيانة", hi: "रखरखाव का दायरा" })}
                rows={[
                  [t({ en: "Pruning & grooming", fr: "Taille et entretien esthétique", zh: "修剪与整形", es: "Poda y arreglo", pa: "ਕਟਾਈ ਅਤੇ ਸਵਾਰਨਾ", ar: "التقليم والعناية", hi: "छंटाई और सँवारना" }), t({ en: "Every scheduled visit", fr: "À chaque visite planifiée", zh: "每次例行访视", es: "Cada visita programada", pa: "ਹਰ ਨਿਯਤ ਫੇਰੀ", ar: "كل زيارة مجدولة", hi: "प्रत्येक निर्धारित विज़िट" })],
                  [t({ en: "Nutrient dosing", fr: "Dosage des nutriments", zh: "养分投配", es: "Dosificación de nutrientes", pa: "ਪੋਸ਼ਕ ਤੱਤ ਖੁਰਾਕ", ar: "جرعات المغذيات", hi: "पोषक तत्व खुराक" }), t({ en: "Reservoir feed adjustment", fr: "Ajustement de l'alimentation du réservoir", zh: "调整水箱供液", es: "Ajuste de alimentación del depósito", pa: "ਰਿਜ਼ਰਵਾਇਰ ਫੀਡ ਵਿਵਸਥਾ", ar: "ضبط تغذية الخزان", hi: "रिज़र्वॉयर फ़ीड समायोजन" })],
                  [t({ en: "Pest management", fr: "Gestion des ravageurs", zh: "病虫害防治", es: "Manejo de plagas", pa: "ਕੀਟ ਪ੍ਰਬੰਧਨ", ar: "إدارة الآفات", hi: "कीट प्रबंधन" }), t({ en: "Inspection & IPM treatment", fr: "Inspection et traitement de lutte antiparasitaire intégrée", zh: "检查与综合虫害管理（IPM）处理", es: "Inspección y tratamiento de MIP", pa: "ਇੰਸਪੈਕਸ਼ਨ ਅਤੇ IPM ਇਲਾਜ", ar: "الفحص ومعالجة الإدارة المتكاملة للآفات", hi: "निरीक्षण और IPM उपचार" })],
                  [t({ en: "Irrigation service", fr: "Entretien de l'irrigation", zh: "灌溉系统维护", es: "Servicio de riego", pa: "ਸਿੰਚਾਈ ਸੇਵਾ", ar: "خدمة الري", hi: "सिंचाई सेवा" }), t({ en: "Pump, emitter & filter check", fr: "Vérification de la pompe, des goutteurs et du filtre", zh: "检查水泵、滴头与过滤器", es: "Verificación de bomba, emisor y filtro", pa: "ਪੰਪ, ਐਮਿਟਰ ਅਤੇ ਫਿਲਟਰ ਦੀ ਜਾਂਚ", ar: "فحص المضخة والباعث والمرشح", hi: "पंप, एमिटर और फ़िल्टर जाँच" })],
                  [t({ en: "Reporting", fr: "Rapports", zh: "报告", es: "Informes", pa: "ਰਿਪੋਰਟਿੰਗ", ar: "التقارير", hi: "रिपोर्टिंग" }), t({ en: "Condition log issued per visit", fr: "Journal d'état remis à chaque visite", zh: "每次访视出具状态记录", es: "Registro de condición emitido por cada visita", pa: "ਹਰ ਫੇਰੀ 'ਤੇ ਸਥਿਤੀ ਲਾਗ ਜਾਰੀ ਕੀਤਾ ਗਿਆ", ar: "يُصدر سجل الحالة في كل زيارة", hi: "प्रत्येक विज़िट पर स्थिति लॉग जारी" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Service Frequency", fr: "Fréquence d'entretien", zh: "服务频率", es: "Frecuencia de servicio", pa: "ਸੇਵਾ ਬਾਰੰਬਾਰਤਾ", ar: "تكرار الخدمة", hi: "सेवा आवृत्ति" })}
                rows={[
                  [t({ en: "Interior — standard", fr: "Intérieur — standard", zh: "室内 — 标准", es: "Interior — estándar", pa: "ਅੰਦਰੂਨੀ — ਮਿਆਰੀ", ar: "داخلي — قياسي", hi: "इंटीरियर — मानक" }), t({ en: "Bi-weekly", fr: "Aux deux semaines", zh: "每两周一次", es: "Quincenal", pa: "ਦੋ-ਹਫ਼ਤਾਵਾਰੀ", ar: "كل أسبوعين", hi: "पाक्षिक" })],
                  [t({ en: "Interior — high visibility", fr: "Intérieur — haute visibilité", zh: "室内 — 高曝光区域", es: "Interior — alta visibilidad", pa: "ਅੰਦਰੂਨੀ — ਉੱਚ ਦ੍ਰਿਸ਼ਟੀ", ar: "داخلي — عالي الظهور", hi: "इंटीरियर — उच्च दृश्यता" }), t({ en: "Weekly", fr: "Hebdomadaire", zh: "每周一次", es: "Semanal", pa: "ਹਫ਼ਤਾਵਾਰੀ", ar: "أسبوعي", hi: "साप्ताहिक" })],
                  [t({ en: "Exterior", fr: "Extérieur", zh: "室外", es: "Exterior", pa: "ਬਾਹਰੀ", ar: "خارجي", hi: "बाहरी" }), t({ en: "Monthly (seasonal)", fr: "Mensuelle (saisonnière)", zh: "每月一次（季节性）", es: "Mensual (estacional)", pa: "ਮਹੀਨਾਵਾਰ (ਮੌਸਮੀ)", ar: "شهري (موسمي)", hi: "मासिक (मौसमी)" })],
                  [t({ en: "System audit", fr: "Vérification du système", zh: "系统巡检", es: "Auditoría del sistema", pa: "ਸਿਸਟਮ ਆਡਿਟ", ar: "تدقيق النظام", hi: "सिस्टम ऑडिट" }), t({ en: "Annual", fr: "Annuelle", zh: "每年一次", es: "Anual", pa: "ਸਾਲਾਨਾ", ar: "سنوي", hi: "वार्षिक" })],
                ]}
              />
              <SpecBlock
                label={t({ en: "Exclusions", fr: "Exclusions", zh: "除外责任", es: "Exclusiones", pa: "ਛੋਟਾਂ", ar: "الاستثناءات", hi: "अपवाद" })}
                rows={[
                  [t({ en: "Owner intervention", fr: "Intervention du propriétaire", zh: "业主自行干预", es: "Intervención del propietario", pa: "ਮਾਲਕ ਦਖਲਅੰਦਾਜ਼ੀ", ar: "تدخل المالك", hi: "मालिक हस्तक्षेप" }), t({ en: "Unauthorized planting or dosing", fr: "Plantation ou dosage non autorisés", zh: "未经授权的种植或投料", es: "Plantación o dosificación no autorizada", pa: "ਅਣਅਧਿਕਾਰਤ ਬਿਜਾਈ ਜਾਂ ਖੁਰਾਕ", ar: "زراعة أو جرعات غير مصرح بها", hi: "अनधिकृत रोपण या खुराक" })],
                  [t({ en: "Building services", fr: "Services du bâtiment", zh: "建筑设施服务", es: "Servicios del edificio", pa: "ਬਿਲਡਿੰਗ ਸੇਵਾਵਾਂ", ar: "خدمات المبنى", hi: "भवन सेवाएँ" }), t({ en: "Loss of water, power, or HVAC", fr: "Perte d'eau, d'électricité ou de CVCA", zh: "供水、供电或暖通空调中断", es: "Pérdida de agua, electricidad o HVAC", pa: "ਪਾਣੀ, ਬਿਜਲੀ, ਜਾਂ HVAC ਦਾ ਨੁਕਸਾਨ", ar: "فقدان الماء أو الكهرباء أو أنظمة التكييف", hi: "पानी, बिजली या HVAC की हानि" })],
                  [t({ en: "Lighting", fr: "Éclairage", zh: "照明", es: "Iluminación", pa: "ਰੋਸ਼ਨੀ", ar: "الإضاءة", hi: "प्रकाश व्यवस्था" }), t({ en: "Levels below specified PPFD minimum", fr: "Niveaux inférieurs au PPFD minimal spécifié", zh: "光照低于规定的最低PPFD值", es: "Niveles por debajo del PPFD mínimo especificado", pa: "ਨਿਰਧਾਰਤ ਘੱਟੋ-ਘੱਟ PPFD ਤੋਂ ਹੇਠਾਂ ਪੱਧਰ", ar: "مستويات أقل من الحد الأدنى المحدد لـ PPFD", hi: "निर्दिष्ट न्यूनतम PPFD से कम स्तर" })],
                  [t({ en: "Damage", fr: "Dommages", zh: "损坏", es: "Daño", pa: "ਨੁਕਸਾਨ", ar: "الضرر", hi: "क्षति" }), t({ en: "Vandalism, impact, or force majeure", fr: "Vandalisme, impact ou force majeure", zh: "人为破坏、撞击或不可抗力", es: "Vandalismo, impacto o fuerza mayor", pa: "ਵੈਂਡਲਿਜ਼ਮ, ਪ੍ਰਭਾਵ, ਜਾਂ ਫੋਰਸ ਮੇਜਰ", ar: "التخريب أو الصدمات أو القوة القاهرة", hi: "तोड़फोड़, प्रभाव, या दैवीय आपदा" })],
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
              {t({ en: "Request a Spec Review", fr: "Demander une révision technique", zh: "申请规格审查", es: "Solicitar una revisión de especificaciones", pa: "ਸਪੈਕ ਸਮੀਖਿਆ ਦੀ ਬੇਨਤੀ ਕਰੋ", ar: "طلب مراجعة المواصفات", hi: "स्पेक समीक्षा का अनुरोध करें" })}
            </h2>
            <p className="mt-4 font-mono text-[12px] leading-relaxed text-neutral-700">
              {t({
                en: "For project-specific engineering review, substitution requests, or CAD/BIM families not listed here. This channel is monitored by our technical team — not general sales.",
                fr: "Pour toute révision technique propre à un projet, demande de substitution ou famille CAD/BIM non répertoriée ici. Ce canal est suivi par notre équipe technique — non par le service des ventes générales.",
                zh: "适用于项目专属工程审查、替代方案申请，或本页未列出的CAD/BIM族文件请求。此渠道由技术团队负责跟进，非一般销售咨询。", es: "Para revisión de ingeniería específica del proyecto, solicitudes de sustitución o familias CAD/BIM no incluidas aquí. Este canal es monitoreado por nuestro equipo técnico, no por ventas generales.", pa: "ਪ੍ਰੋਜੈਕਟ-ਵਿਸ਼ੇਸ਼ ਇੰਜੀਨੀਅਰਿੰਗ ਸਮੀਖਿਆ, ਬਦਲੀ ਬੇਨਤੀਆਂ, ਜਾਂ CAD/BIM ਫੈਮਿਲੀਆਂ ਲਈ ਜੋ ਇੱਥੇ ਸੂਚੀਬੱਧ ਨਹੀਂ ਹਨ। ਇਹ ਚੈਨਲ ਸਾਡੀ ਤਕਨੀਕੀ ਟੀਮ ਦੁਆਰਾ ਨਿਗਰਾਨੀ ਕੀਤਾ ਜਾਂਦਾ ਹੈ — ਆਮ ਵਿਕਰੀ ਦੁਆਰਾ ਨਹੀਂ।", ar: "للمراجعة الهندسية الخاصة بالمشروع، أو طلبات الاستبدال، أو عائلات CAD/BIM غير المدرجة هنا. تتم مراقبة هذه القناة من قبل فريقنا الفني — وليس المبيعات العامة.", hi: "प्रोजेक्ट-विशिष्ट इंजीनियरिंग समीक्षा, प्रतिस्थापन अनुरोध, या यहाँ सूचीबद्ध न किए गए CAD/BIM परिवारों के लिए। इस चैनल की निगरानी हमारी तकनीकी टीम करती है — सामान्य बिक्री नहीं।",
              })}
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-y-2 font-mono text-[12px] text-neutral-700">
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">{t({ en: "Technical", fr: "Technique", zh: "技术支持", es: "Técnico", pa: "ਤਕਨੀਕੀ", ar: "الفني", hi: "तकनीकी" })}</dt>
                <dd className="text-neutral-900">specs@verticaloxygen.com</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">{t({ en: "Phone EN", fr: "Téléphone (anglais)", zh: "电话（英语）", es: "Teléfono (inglés)", pa: "ਫੋਨ (ਅੰਗਰੇਜ਼ੀ)", ar: "الهاتف (الإنجليزية)", hi: "फ़ोन (अंग्रेज़ी)" })}</dt>
                <dd className="text-neutral-900">604-997-1760</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">{t({ en: "Phone FR", fr: "Téléphone (français)", zh: "电话（法语）", es: "Teléfono (francés)", pa: "ਫੋਨ (ਫਰਾਂਸੀਸੀ)", ar: "الهاتف (الفرنسية)", hi: "फ़ोन (फ़्रेंच)" })}</dt>
                <dd className="text-neutral-900">403-861-3732</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">{t({ en: "Response", fr: "Délai de réponse", zh: "响应时间", es: "Respuesta", pa: "ਜਵਾਬ", ar: "الاستجابة", hi: "प्रतिक्रिया" })}</dt>
                <dd className="text-neutral-900">{t({ en: "2 business days", fr: "2 jours ouvrables", zh: "2个工作日", es: "2 días hábiles", pa: "2 ਕਾਰੋਬਾਰੀ ਦਿਨ", ar: "يومي عمل", hi: "2 कार्य दिवस" })}</dd>
              </div>
              <div className="flex justify-between border-b border-neutral-200 py-1.5">
                <dt className="text-neutral-500">{t({ en: "Sales (separate)", fr: "Ventes (distinct)", zh: "销售（另设）", es: "Ventas (aparte)", pa: "ਵਿਕਰੀ (ਵੱਖਰੀ)", ar: "المبيعات (منفصلة)", hi: "बिक्री (अलग)" })}</dt>
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
                  zh: "规格审查申请已提交。我们的技术团队将在2个工作日内回复。", es: "Solicitud de revisión de especificaciones enviada. Nuestro equipo técnico responderá dentro de 2 días hábiles.", pa: "ਸਪੈਕ ਸਮੀਖਿਆ ਬੇਨਤੀ ਭੇਜੀ ਗਈ। ਸਾਡੀ ਤਕਨੀਕੀ ਟੀਮ 2 ਕਾਰੋਬਾਰੀ ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਜਵਾਬ ਦੇਵੇਗੀ।", ar: "تم إرسال طلب مراجعة المواصفات. سيرد فريقنا الفني خلال يومي عمل.", hi: "स्पेक समीक्षा अनुरोध सबमिट किया गया। हमारी तकनीकी टीम 2 कार्य दिवसों के भीतर जवाब देगी।",
                }),
              );
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label={t({ en: "Full Name", fr: "Nom complet", zh: "姓名", es: "Nombre completo", pa: "ਪੂਰਾ ਨਾਮ", ar: "الاسم الكامل", hi: "पूरा नाम" })} name="name" required />
              <Field label={t({ en: "Firm", fr: "Firme", zh: "公司/事务所", es: "Firma", pa: "ਫਰਮ", ar: "الشركة", hi: "फर्म" })} name="firm" required />
              <Field label={t({ en: "Email", fr: "Courriel", zh: "电子邮箱", es: "Correo electrónico", pa: "ਈਮੇਲ", ar: "البريد الإلكتروني", hi: "ईमेल" })} name="email" type="email" required />
              <Field label={t({ en: "Phone", fr: "Téléphone", zh: "电话", es: "Teléfono", pa: "ਫੋਨ", ar: "الهاتف", hi: "फ़ोन" })} name="phone" type="tel" />
              <Field label={t({ en: "Project Name", fr: "Nom du projet", zh: "项目名称", es: "Nombre del proyecto", pa: "ਪ੍ਰੋਜੈਕਟ ਦਾ ਨਾਮ", ar: "اسم المشروع", hi: "प्रोजेक्ट का नाम" })} name="project" required />
              <Field label={t({ en: "Project Location", fr: "Emplacement du projet", zh: "项目地点", es: "Ubicación del proyecto", pa: "ਪ੍ਰੋਜੈਕਟ ਸਥਾਨ", ar: "موقع المشروع", hi: "प्रोजेक्ट स्थान" })} name="location" />
              <Field
                label={t({ en: "Role", fr: "Rôle", zh: "职务", es: "Rol", pa: "ਭੂਮਿਕਾ", ar: "الدور", hi: "भूमिका" })}
                name="role"
                as="select"
                options={[
                  t({ en: "Architect", fr: "Architecte", zh: "建筑师", es: "Arquitecto", pa: "ਆਰਕੀਟੈਕਟ", ar: "مهندس معماري", hi: "वास्तुकार" }),
                  t({ en: "Engineer (MEP)", fr: "Ingénieur (CVCA/électromécanique)", zh: "工程师（机电）", es: "Ingeniero (MEP)", pa: "ਇੰਜੀਨੀਅਰ (MEP)", ar: "مهندس (الأنظمة الميكانيكية والكهربائية والسباكة)", hi: "इंजीनियर (MEP)" }),
                  t({ en: "Engineer (Structural)", fr: "Ingénieur (structure)", zh: "工程师（结构）", es: "Ingeniero (estructural)", pa: "ਇੰਜੀਨੀਅਰ (ਸਟ੍ਰਕਚਰਲ)", ar: "مهندس (إنشائي)", hi: "इंजीनियर (संरचनात्मक)" }),
                  t({ en: "General Contractor", fr: "Entrepreneur général", zh: "总承包商", es: "Contratista general", pa: "ਜਨਰਲ ਠੇਕੇਦਾਰ", ar: "المقاول العام", hi: "जनरल कॉन्ट्रैक्टर" }),
                  t({ en: "Interior Designer", fr: "Designer d'intérieur", zh: "室内设计师", es: "Diseñador de interiores", pa: "ਇੰਟੀਰੀਅਰ ਡਿਜ਼ਾਈਨਰ", ar: "مصمم داخلي", hi: "इंटीरियर डिज़ाइनर" }),
                  t({ en: "Owner / Rep", fr: "Propriétaire / Représentant", zh: "业主 / 代表", es: "Propietario / Representante", pa: "ਮਾਲਕ / ਪ੍ਰਤੀਨਿਧੀ", ar: "المالك / الممثل", hi: "मालिक / प्रतिनिधि" }),
                  t({ en: "Other", fr: "Autre", zh: "其他", es: "Otro", pa: "ਹੋਰ", ar: "أخرى", hi: "अन्य" }),
                ]}
              />
              <Field
                label={t({ en: "Specifying System", fr: "Système spécifié", zh: "指定系统", es: "Sistema a especificar", pa: "ਸਿਸਟਮ ਨਿਰਧਾਰਤ ਕਰਨਾ", ar: "نظام التحديد", hi: "निर्दिष्ट प्रणाली" })}
                name="system"
                as="select"
                options={SYSTEMS.map((s) => `${s.code} — ${t(s.name)}`).concat(
                  t({ en: "Undetermined", fr: "Indéterminé", zh: "未确定", es: "Indeterminado", pa: "ਅਨਿਸ਼ਚਿਤ", ar: "غير محدد", hi: "अनिर्धारित" }),
                )}
              />
            </div>
            <div className="mt-4">
              <label className="block font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-600">
                {t({ en: "Scope / Questions", fr: "Portée / Questions", zh: "范围 / 问题", es: "Alcance / Preguntas", pa: "ਦਾਇਰਾ / ਸਵਾਲ", ar: "النطاق / الأسئلة", hi: "दायरा / प्रश्न" })}
              </label>
              <textarea
                name="notes"
                rows={5}
                required
                placeholder={t({
                  en: "Substrate substitution, structural loading assumptions, integration with adjacent assemblies, etc.",
                  fr: "Substitution de substrat, hypothèses de charge structurale, intégration avec les assemblages adjacents, etc.",
                  zh: "基质替代方案、结构荷载假设、与相邻构造的集成等。", es: "Sustitución de sustrato, supuestos de carga estructural, integración con conjuntos adyacentes, etc.", pa: "ਸਬਸਟਰੇਟ ਬਦਲੀ, ਸਟ੍ਰਕਚਰਲ ਲੋਡਿੰਗ ਧਾਰਨਾਵਾਂ, ਨਾਲ ਲੱਗਦੇ ਅਸੈਂਬਲੀਆਂ ਨਾਲ ਏਕੀਕਰਨ, ਆਦਿ।", ar: "استبدال الركيزة، افتراضات الحمل الإنشائي، التكامل مع التجميعات المجاورة، إلخ.", hi: "सब्सट्रेट प्रतिस्थापन, संरचनात्मक लोडिंग धारणाएँ, समीपवर्ती असेंबली के साथ एकीकरण, आदि।",
                })}
                className="mt-1.5 w-full rounded-none border border-neutral-300 bg-white px-3 py-2 font-mono text-[12px] text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-none bg-neutral-900 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-neutral-700"
              >
                {t({ en: "Submit for Review", fr: "Soumettre pour révision", zh: "提交审查", es: "Enviar para revisión", pa: "ਸਮੀਖਿਆ ਲਈ ਜਮ੍ਹਾਂ ਕਰੋ", ar: "إرسال للمراجعة", hi: "समीक्षा हेतु सबमिट करें" })}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </button>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                {t({
                  en: "Responses are project-scoped, not commercial quotes.",
                  fr: "Les réponses sont propres au projet et ne constituent pas des soumissions commerciales.",
                  zh: "回复内容仅针对具体项目，不构成商业报价。", es: "Las respuestas son específicas del proyecto, no cotizaciones comerciales.", pa: "ਜਵਾਬ ਪ੍ਰੋਜੈਕਟ-ਵਿਆਪਕ ਹਨ, ਵਪਾਰਕ ਹਵਾਲੇ ਨਹੀਂ।", ar: "الردود خاصة بالمشروع، وليست عروض أسعار تجارية.", hi: "प्रतिक्रियाएँ प्रोजेक्ट-विशिष्ट होती हैं, वाणिज्यिक कोटेशन नहीं।",
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
              zh: "Vertical Oxygen Inc. · 技术文档", es: "Vertical Oxygen Inc. · Documentación técnica", pa: "Vertical Oxygen Inc. · ਤਕਨੀਕੀ ਦਸਤਾਵੇਜ਼", ar: "Vertical Oxygen Inc. · الوثائق الفنية", hi: "Vertical Oxygen Inc. · तकनीकी दस्तावेज़",
            })}
          </div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white">{t({ en: "Main Site", fr: "Site principal", zh: "主站", es: "Sitio principal", pa: "ਮੁੱਖ ਸਾਈਟ", ar: "الموقع الرئيسي", hi: "मुख्य साइट" })}</Link>
            <a href="#spec-review" className="hover:text-white">{t({ en: "Spec Review", fr: "Révision technique", zh: "规格审查", es: "Revisión de especificaciones", pa: "ਸਪੈਕ ਸਮੀਖਿਆ", ar: "مراجعة المواصفات", hi: "स्पेक समीक्षा" })}</a>
            <span>{t({ en: "Doc VO-SPEC · Rev. 2026.07", fr: "Doc VO-SPEC · Rév. 2026.07", zh: "文档 VO-SPEC · 修订版 2026.07", es: "Doc. VO-SPEC · Rev. 2026.07", pa: "Doc VO-SPEC · Rev. 2026.07", ar: "المستند VO-SPEC · مراجعة 2026.07", hi: "Doc VO-SPEC · संशोधन 2026.07" })}</span>
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
          <option value="">{t({ en: "— Select —", fr: "— Sélectionner —", zh: "— 请选择 —", es: "— Seleccionar —", pa: "— ਚੁਣੋ —", ar: "— اختر —", hi: "— चुनें —" })}</option>
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
