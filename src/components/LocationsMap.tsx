import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useT } from "@/lib/i18n";

// Public topojson served by CDN
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Location = {
  city: string;
  province: string;
  coordinates: [number, number]; // [lng, lat]
  count: number;
};

const LOCATIONS: Location[] = [
  { city: "Airdrie",        province: "AB",   coordinates: [-114.014, 51.293], count: 1 },
  { city: "Barrie",         province: "ON",   coordinates: [ -79.690, 44.389], count: 1 },
  { city: "Calgary",        province: "AB",   coordinates: [-114.062, 51.045], count: 8 },
  { city: "Campbell River", province: "BC",   coordinates: [-125.272, 50.024], count: 1 },
  { city: "Edmonton",       province: "AB",   coordinates: [-113.492, 53.546], count: 7 },
  { city: "Halifax",        province: "NS",   coordinates: [ -63.577, 44.649], count: 1 },
  { city: "Hamilton",       province: "ON",   coordinates: [ -79.866, 43.256], count: 1 },
  { city: "High Level",     province: "AB",   coordinates: [-117.135, 58.517], count: 1 },
  { city: "Kelowna",        province: "BC",   coordinates: [-119.496, 49.887], count: 1 },
  { city: "Kingston",       province: "ON",   coordinates: [ -76.481, 44.231], count: 1 },
  { city: "London",         province: "ON",   coordinates: [ -81.243, 42.984], count: 1 },
  { city: "Moncton",        province: "NB",   coordinates: [ -64.780, 46.088], count: 1 },
  { city: "North Vancouver",province: "BC",   coordinates: [-123.072, 49.320], count: 1 },
  { city: "Regina",         province: "SK",   coordinates: [-104.618, 50.445], count: 1 },
  { city: "Richmond",       province: "BC",   coordinates: [-123.136, 49.166], count: 1 },
  { city: "St. John's",     province: "NL",   coordinates: [ -52.707, 47.561], count: 1 },
  { city: "Sudbury",        province: "ON",   coordinates: [ -80.994, 46.492], count: 1 },
  { city: "Toronto",        province: "ON",   coordinates: [ -79.383, 43.653], count: 7 },
  { city: "Vancouver",      province: "BC",   coordinates: [-123.116, 49.246], count: 3 },
  { city: "Victoria",       province: "BC",   coordinates: [-123.365, 48.428], count: 1 },
  { city: "Winnipeg",       province: "MB",   coordinates: [ -97.138, 49.895], count: 1 },
  { city: "Yellowknife",    province: "NT",   coordinates: [-114.371, 62.454], count: 3 },
];

const MAX_COUNT = LOCATIONS.reduce((m, l) => Math.max(m, l.count), 1);

// Leaf drawn around its own origin: tip up, stem down. Viewbox-free path in
// a -10..10 box so it can be scaled freely per install count.
const LEAF_PATH =
  "M0,-10 C6.2,-6.6 8.4,-1.2 6.2,4 C4.6,7.8 2.2,9.4 0,10 C-2.2,9.4 -4.6,7.8 -6.2,4 C-8.4,-1.2 -6.2,-6.6 0,-10 Z";
const LEAF_VEIN = "M0,-8.4 L0,9";

/** Leaf scale from install count — square-root growth so 1-wall cities stay legible. */
function scaleFor(count: number): number {
  const min = 0.62; // smallest leaf still clearly visible
  const max = 1.5;
  const ratio = Math.sqrt(count / MAX_COUNT);
  return min + (max - min) * ratio;
}

/** Small inline leaf used in the city list. */
function LeafGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="-11 -11 22 22" className={className} aria-hidden focusable="false">
      <path d={LEAF_PATH} fill="currentColor" />
      <path d={LEAF_VEIN} stroke="currentColor" strokeOpacity={0.35} strokeWidth={1.2} fill="none" />
    </svg>
  );
}

export function LocationsMap() {
  const t = useT();
  const [active, setActive] = useState<Location | null>(LOCATIONS[0]);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const wallsLabel = (n: number) =>
    t({
      en: n === 1 ? "1 living wall" : `${n} living walls`,
      fr: n === 1 ? "1 mur végétal" : `${n} murs végétaux`,
      zh: `${n} 面绿墙`,
      es: n === 1 ? "1 muro vivo" : `${n} muros vivos`,
      pa: `${n} ਜੀਵੰਤ ਕੰਧਾਂ`,
      ar: `${n} جدار حي`,
      hi: `${n} जीवंत दीवारें`,
    });

  // Sort so the biggest leaves render underneath the small ones.
  const drawOrder = [...LOCATIONS].sort((a, b) => b.count - a.count);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
      <div className="relative overflow-hidden rounded-[2rem] border border-forest/10 bg-[oklch(0.975_0.012_95)] p-3 shadow-[0_24px_60px_-40px_oklch(0.32_0.07_145_/_0.5)] md:p-6">
        {!mounted ? (
          <div className="aspect-[880/560] w-full rounded-[1.5rem] bg-background" aria-hidden />
        ) : (
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{ rotate: [96, -62, 0], scale: 780 }}
          width={880}
          height={560}
          style={{ width: "100%", height: "auto", overflow: "visible" }}
        >
          <defs>
            <linearGradient id="leafFill" x1="0" y1="0" x2="0.35" y2="1">
              <stop offset="0%" stopColor="oklch(0.55 0.075 132)" />
              <stop offset="100%" stopColor="oklch(0.32 0.07 145)" />
            </linearGradient>
            <linearGradient id="leafFillActive" x1="0" y1="0" x2="0.35" y2="1">
              <stop offset="0%" stopColor="oklch(0.66 0.09 131)" />
              <stop offset="100%" stopColor="oklch(0.42 0.08 140)" />
            </linearGradient>
          </defs>
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Array<{ rsmKey: string }> }) =>
              geographies.map((geo: any) => {
                const isCanada = geo.properties?.name === "Canada";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isCanada ? "oklch(0.885 0.028 128)" : "oklch(0.955 0.008 90)"}
                    stroke={isCanada ? "oklch(0.62 0.05 132)" : "oklch(0.88 0.012 80)"}
                    strokeWidth={isCanada ? 0.9 : 0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: isCanada ? "oklch(0.885 0.028 128)" : "oklch(0.955 0.008 90)" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
          {drawOrder.map((loc) => {
            const isActive = active?.city === loc.city;
            const isHot = hovered === loc.city;
            const s = scaleFor(loc.count) * (isHot ? 1.28 : isActive ? 1.12 : 1);
            const tilt = loc.coordinates[0] < -100 ? -14 : 12;
            return (
              <Marker
                key={loc.city}
                coordinates={loc.coordinates}
                onClick={() => setActive(loc)}
                onMouseEnter={() => {
                  setHovered(loc.city);
                  setActive(loc);
                }}
                onMouseLeave={() => setHovered((h) => (h === loc.city ? null : h))}
                style={{
                  default: { cursor: "pointer" },
                  hover: { cursor: "pointer" },
                  pressed: { cursor: "pointer" },
                }}
              >
                <g
                  aria-label={`${loc.city} — ${wallsLabel(loc.count)}`}
                  style={{
                    transform: `translateY(-2px) rotate(${tilt}deg) scale(${s})`,
                    transformBox: "fill-box",
                    transformOrigin: "50% 90%",
                    transition: "transform 320ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <path
                    d={LEAF_PATH}
                    fill={isActive || isHot ? "url(#leafFillActive)" : "url(#leafFill)"}
                    stroke="oklch(0.99 0.004 80)"
                    strokeWidth={1.1}
                    strokeLinejoin="round"
                  />
                  <path d={LEAF_VEIN} stroke="oklch(0.99 0.004 80)" strokeOpacity={0.5} strokeWidth={0.9} fill="none" />
                </g>
                {/* Generous invisible hit area so tiny leaves stay tappable on mobile */}
                <circle r={14} fill="transparent" />
                {isHot && (
                  <g style={{ pointerEvents: "none" }} transform="translate(0,-34)">
                    <rect
                      x={-Math.max(46, loc.city.length * 4.6)}
                      y={-26}
                      width={Math.max(92, loc.city.length * 9.2)}
                      height={34}
                      rx={12}
                      fill="oklch(0.32 0.07 145)"
                    />
                    <text
                      textAnchor="middle"
                      y={-14}
                      fill="oklch(0.99 0.004 80)"
                      style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.02em" }}
                    >
                      {loc.city}
                    </text>
                    <text
                      textAnchor="middle"
                      y={-2}
                      fill="oklch(0.99 0.004 80)"
                      fillOpacity={0.75}
                      style={{ fontSize: 10 }}
                    >
                      {wallsLabel(loc.count)}
                    </text>
                  </g>
                )}
              </Marker>
            );
          })}
        </ComposableMap>
        )}
      </div>

      <div className="space-y-5">
        <div className="hidden lg:block rounded-[1.75rem] border border-forest/12 bg-white/80 p-6 shadow-[0_18px_40px_-34px_oklch(0.32_0.07_145_/_0.55)]">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest">
            {t({ en: "Cities across Canada", fr: "Villes à travers le Canada", zh: "遍布加拿大的城市", es: "Ciudades en todo Canadá", pa: "ਕੈਨੇਡਾ ਭਰ ਦੇ ਸ਼ਹਿਰ", ar: "مدن في جميع أنحاء كندا", hi: "पूरे कनाडा के शहर" })}
          </p>
          <p className="mt-3 font-serif text-4xl font-light text-foreground">
            {LOCATIONS.length}
          </p>
          <p className="text-sm text-muted-foreground">
            {t({
              en: "Communities served, coast to coast to coast",
              fr: "Communautés desservies, d'un océan à l'autre",
              zh: "服务遍及加拿大东西北三岸社区",
              es: "Comunidades atendidas, de costa a costa a costa",
              pa: "ਤੱਟ ਤੋਂ ਤੱਟ ਤੋਂ ਤੱਟ ਤੱਕ ਸੇਵਾ ਪ੍ਰਾਪਤ ਭਾਈਚਾਰੇ",
              ar: "مجتمعات مخدومة من ساحل إلى ساحل إلى ساحل",
              hi: "तट से तट से तट तक सेवा प्राप्त समुदाय",
            })}
          </p>
        </div>

        {active && (
          <div
            key={active.city}
            className="reveal-fade is-visible rounded-[1.75rem] border border-forest/12 bg-white/80 p-6 shadow-[0_18px_40px_-34px_oklch(0.32_0.07_145_/_0.55)]"
          >
            <div className="flex items-start gap-3">
              <LeafGlyph className="mt-1 h-5 w-5 shrink-0 text-forest" />
              <div className="min-w-0">
                <h3 className="font-serif text-2xl text-foreground">{active.city}</h3>
                <p className="text-sm text-muted-foreground">
                  {active.province}, {t({ en: "Canada", fr: "Canada", zh: "加拿大", es: "Canadá", pa: "ਕੈਨੇਡਾ", ar: "كندا", hi: "कनाडा" })}
                </p>
                <p className="mt-1 text-sm font-semibold text-forest-deep">{wallsLabel(active.count)}</p>
              </div>
            </div>
          </div>
        )}

        <div className="max-h-56 overflow-y-auto rounded-[1.75rem] border border-forest/12 bg-white/80 p-4 shadow-[0_18px_40px_-34px_oklch(0.32_0.07_145_/_0.55)]">
          <ul className="grid grid-cols-2 gap-1 text-xs">
            {LOCATIONS.map((loc) => {
              const isOn = active?.city === loc.city || hovered === loc.city;
              return (
                <li key={loc.city}>
                  <button
                    type="button"
                    onClick={() => setActive(loc)}
                    onMouseEnter={() => {
                      setHovered(loc.city);
                      setActive(loc);
                    }}
                    onMouseLeave={() => setHovered((h) => (h === loc.city ? null : h))}
                    onFocus={() => {
                      setHovered(loc.city);
                      setActive(loc);
                    }}
                    onBlur={() => setHovered((h) => (h === loc.city ? null : h))}
                    title={`${loc.city} — ${wallsLabel(loc.count)}`}
                    className={`flex w-full items-center gap-2 rounded-xl px-2 py-1.5 text-left transition-colors ${
                      isOn
                        ? "bg-forest/10 font-semibold text-forest-deep"
                        : "text-muted-foreground hover:bg-forest/5 hover:text-foreground"
                    }`}
                  >
                    <LeafGlyph
                      className={`h-3 w-3 shrink-0 transition-all duration-300 ${
                        isOn ? "scale-110 text-forest-deep" : "text-forest/45"
                      }`}
                    />
                    <span className="truncate">{loc.city}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
