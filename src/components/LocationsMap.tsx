import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { MapPin } from "lucide-react";

// Public topojson served by unpkg CDN
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Location = {
  city: string;
  country: string;
  coordinates: [number, number]; // [lng, lat]
  venue: string;
};

// Approximate cities — swap for exact coordinates when the user shares them.
const LOCATIONS: Location[] = [
  { city: "Vancouver",     country: "Canada",       coordinates: [-123.116, 49.246], venue: "Downtown office lobby" },
  { city: "Calgary",       country: "Canada",       coordinates: [-114.062, 51.045], venue: "Boutique hotel atrium" },
  { city: "Edmonton",      country: "Canada",       coordinates: [-113.492, 53.546], venue: "Corporate reception wall" },
  { city: "Toronto",       country: "Canada",       coordinates: [-79.383,  43.653], venue: "Restaurant feature wall" },
  { city: "New York",      country: "USA",          coordinates: [-74.006,  40.713], venue: "Tribeca residential loft" },
  { city: "Los Angeles",   country: "USA",          coordinates: [-118.243, 34.052], venue: "Studio courtyard installation" },
  { city: "Austin",        country: "USA",          coordinates: [-97.743,  30.267], venue: "Coworking space green wall" },
  { city: "Mexico City",   country: "Mexico",       coordinates: [-99.133,  19.432], venue: "Hospitality lobby" },
  { city: "London",        country: "UK",           coordinates: [-0.127,   51.507], venue: "Shoreditch office atrium" },
  { city: "Paris",         country: "France",       coordinates: [ 2.352,   48.856], venue: "Le Marais boutique" },
  { city: "Amsterdam",     country: "Netherlands",  coordinates: [ 4.895,   52.370], venue: "Canal-side residence" },
  { city: "Berlin",        country: "Germany",      coordinates: [13.405,   52.520], venue: "Design studio wall" },
  { city: "Barcelona",     country: "Spain",        coordinates: [ 2.174,   41.385], venue: "Gothic quarter courtyard" },
  { city: "Dubai",         country: "UAE",          coordinates: [55.297,   25.276], venue: "Marina tower installation" },
  { city: "Singapore",     country: "Singapore",    coordinates: [103.820,  1.352],  venue: "Rooftop lounge" },
  { city: "Tokyo",         country: "Japan",        coordinates: [139.692,  35.690], venue: "Shibuya cafe" },
  { city: "Sydney",        country: "Australia",    coordinates: [151.209, -33.868], venue: "Harbourside restaurant" },
  { city: "Melbourne",     country: "Australia",    coordinates: [144.963, -37.813], venue: "Fitzroy studio" },
  { city: "São Paulo",     country: "Brazil",       coordinates: [-46.633, -23.550], venue: "Jardins residential" },
  { city: "Cape Town",     country: "South Africa", coordinates: [ 18.424, -33.925], venue: "V&A Waterfront lobby" },
];

export function LocationsMap() {
  const [active, setActive] = useState<Location | null>(LOCATIONS[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
      <div className="relative overflow-hidden rounded-2xl bg-card p-2 md:p-4">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 165 }}
          width={880}
          height={440}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Array<{ rsmKey: string }> }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="oklch(0.90 0.02 40)"
                  stroke="oklch(0.983 0.033 34.7)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover:   { outline: "none", fill: "oklch(0.86 0.03 40)" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {LOCATIONS.map((loc) => {
            const isActive = active?.city === loc.city;
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
                  r={isActive ? 6 : 4}
                  fill="oklch(0.615 0.144 34.4)"
                  stroke="oklch(0.983 0.033 34.7)"
                  strokeWidth={1.5}
                  style={{ transition: "r 0.2s ease" }}
                />
                {isActive && (
                  <circle
                    r={6}
                    fill="oklch(0.615 0.144 34.4)"
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
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Living walls, worldwide
          </p>
          <p className="mt-3 font-serif text-4xl font-light text-foreground">
            {LOCATIONS.length}+
          </p>
          <p className="text-sm text-muted-foreground">Installations on 5 continents</p>
        </div>

        {active && (
          <div key={active.city} className="reveal-fade is-visible rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div className="min-w-0">
                <h3 className="font-serif text-2xl text-foreground">{active.city}</h3>
                <p className="text-sm text-muted-foreground">{active.country}</p>
                <p className="mt-3 text-sm text-foreground">{active.venue}</p>
              </div>
            </div>
          </div>
        )}

        <div className="max-h-56 overflow-y-auto rounded-2xl border border-border bg-card p-4">
          <ul className="grid grid-cols-2 gap-1 text-xs">
            {LOCATIONS.map((loc) => (
              <li key={loc.city}>
                <button
                  type="button"
                  onClick={() => setActive(loc)}
                  className={`w-full rounded-md px-2 py-1.5 text-left transition-colors ${
                    active?.city === loc.city
                      ? "bg-primary/10 text-primary font-semibold"
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