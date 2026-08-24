import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { MapPin } from "lucide-react";
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
  { city: "Victoria",       province: "BC",   coordinates: [-123.365, 48.428], count: 1 },
  { city: "Vancouver",      province: "BC",   coordinates: [-123.116, 49.246], count: 3 },
  { city: "North Vancouver",province: "BC",   coordinates: [-123.072, 49.320], count: 1 },
  { city: "Richmond",       province: "BC",   coordinates: [-123.136, 49.166], count: 1 },
  { city: "Campbell River", province: "BC",   coordinates: [-125.272, 50.024], count: 1 },
  { city: "Kelowna",        province: "BC",   coordinates: [-119.496, 49.887], count: 1 },
  { city: "Yellowknife",    province: "NT",   coordinates: [-114.371, 62.454], count: 3 },
  { city: "Edmonton",       province: "AB",   coordinates: [-113.492, 53.546], count: 7 },
  { city: "Calgary",        province: "AB",   coordinates: [-114.062, 51.045], count: 8 },
  { city: "Airdrie",        province: "AB",   coordinates: [-114.014, 51.293], count: 1 },
  { city: "High Level",     province: "AB",   coordinates: [-117.135, 58.517], count: 1 },
  { city: "Regina",         province: "SK",   coordinates: [-104.618, 50.445], count: 1 },
  { city: "Winnipeg",       province: "MB",   coordinates: [ -97.138, 49.895], count: 1 },
  { city: "Barrie",         province: "ON",   coordinates: [ -79.690, 44.389], count: 1 },
  { city: "Sudbury",        province: "ON",   coordinates: [ -80.994, 46.492], count: 1 },
  { city: "London",         province: "ON",   coordinates: [ -81.243, 42.984], count: 1 },
  { city: "Hamilton",       province: "ON",   coordinates: [ -79.866, 43.256], count: 1 },
  { city: "Toronto",        province: "ON",   coordinates: [ -79.383, 43.653], count: 7 },
  { city: "Kingston",       province: "ON",   coordinates: [ -76.481, 44.231], count: 1 },
  { city: "Moncton",        province: "NB",   coordinates: [ -64.780, 46.088], count: 1 },
  { city: "Halifax",        province: "NS",   coordinates: [ -63.577, 44.649], count: 1 },
  { city: "St. John's",     province: "NL",   coordinates: [ -52.707, 47.561], count: 1 },
];

const TOTAL_INSTALLS = LOCATIONS.reduce((sum, l) => sum + l.count, 0);
void TOTAL_INSTALLS;

function radiusFor(count: number): number {
  // Bigger dots for cities with more installs, no numbers shown.
  if (count >= 8) return 10;
  if (count >= 5) return 8.5;
  if (count >= 3) return 7;
  if (count >= 2) return 5.5;
  return 4;
}

export function LocationsMap() {
  const t = useT();
  const [active, setActive] = useState<Location | null>(LOCATIONS[0]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
      <div className="relative overflow-hidden rounded-2xl bg-white p-2 md:p-4">
        {!mounted ? (
          <div className="aspect-[880/560] w-full rounded-xl bg-background" aria-hidden />
        ) : (
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{ rotate: [96, -62, 0], scale: 780 }}
          width={880}
          height={560}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Array<{ rsmKey: string }> }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={geo.properties?.name === "Canada" ? "oklch(0.45 0.03 130)" : "oklch(0.78 0.01 100)"}
                  stroke="oklch(0.35 0.01 100)"
                  strokeWidth={0.6}
                  style={{
                    default: { outline: "none" },
                    hover:   { outline: "none", fill: geo.properties?.name === "Canada" ? "oklch(0.52 0.03 130)" : "oklch(0.72 0.01 100)" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {LOCATIONS.map((loc) => {
            const isActive = active?.city === loc.city;
            const r = radiusFor(loc.count);
            return (
              <Marker
                key={loc.city}
                coordinates={loc.coordinates}
                onClick={() => setActive(loc)}
                onMouseEnter={() => setActive(loc)}
                style={{
                  default: { cursor: "pointer" },
                  hover:   { cursor: "pointer" },
                  pressed: { cursor: "pointer" },
                }}
              >
                <circle
                  r={isActive ? r + 2 : r}
                  fill="oklch(0.482 0.065 129.0)"
                  stroke="oklch(0.99 0.004 80)"
                  strokeWidth={1.5}
                  style={{ transition: "r 0.2s ease" }}
                />
                {isActive && (
                  <circle
                    r={r + 4}
                    fill="oklch(0.482 0.065 129.0)"
                    fillOpacity={0.35}
                    className="marker-pulse"
                  />
                )}
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest">
            {t({ en: "Cities across Canada", fr: "Villes à travers le Canada", zh: "遍布加拿大的城市", es: "Ciudades en todo Canadá", pa: "ਕੈਨੇਡਾ ਭਰ ਦੇ ਸ਼ਹਿਰ", ar: "مدن في جميع أنحاء كندا", hi: "पूरे कनाडा के शहर" })}
          </p>
          <p className="mt-3 font-serif text-4xl font-light text-foreground">
            {LOCATIONS.length}
          </p>
          <p className="text-sm text-muted-foreground">
            {t({
              en: "Communities served, coast to coast",
              fr: "Communautés desservies, d'un océan à l'autre",
              zh: "服务遍及加拿大各地社区",
              es: "Comunidades atendidas, de costa a costa",
              pa: "ਤੱਟ ਤੋਂ ਤੱਟ ਤੱਕ ਸੇਵਾ ਪ੍ਰਾਪਤ ਭਾਈਚਾਰੇ",
              ar: "مجتمعات مخدومة من ساحل إلى ساحل",
              hi: "तट से तट तक सेवा प्राप्त समुदाय",
            })}
          </p>
        </div>

        {active && (
          <div key={active.city} className="reveal-fade is-visible rounded-2xl border border-border bg-white p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-forest" aria-hidden />
              <div className="min-w-0">
                <h3 className="font-serif text-2xl text-foreground">{active.city}</h3>
                <p className="text-sm text-muted-foreground">
                  {active.province}, {t({ en: "Canada", fr: "Canada", zh: "加拿大", es: "Canadá", pa: "ਕੈਨੇਡਾ", ar: "كندا", hi: "कनाडा" })}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="max-h-56 overflow-y-auto rounded-2xl border border-border bg-white p-4">
          <ul className="grid grid-cols-2 gap-1 text-xs">
            {LOCATIONS.map((loc) => (
              <li key={loc.city}>
                <button
                  type="button"
                  onClick={() => setActive(loc)}
                  onMouseEnter={() => setActive(loc)}
                  onFocus={() => setActive(loc)}
                  className={`w-full rounded-md px-2 py-1.5 text-left transition-colors ${
                    active?.city === loc.city
                      ? "bg-forest/10 text-forest font-semibold"
                      : "text-muted-foreground hover:bg-background hover:text-foreground"
                  }`}
                >
                  {loc.city}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
