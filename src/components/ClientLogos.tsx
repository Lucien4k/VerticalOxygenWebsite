import { useT } from "@/lib/i18n";

import accurate from "@/assets/clients/accurate.png.asset.json";
import ariDental from "@/assets/clients/ari-dental.png.asset.json";
import aupe from "@/assets/clients/aupe.png.asset.json";
import berezan from "@/assets/clients/berezan.png.asset.json";
import bird from "@/assets/clients/bird.png.asset.json";
import cbe from "@/assets/clients/calgary-board-of-education.png.asset.json";
import clark from "@/assets/clients/clark-builders.png.asset.json";
import conexus from "@/assets/clients/conexus.png.asset.json";
import dexterra from "@/assets/clients/dexterra.png.asset.json";
import francosud from "@/assets/clients/francosud.png.asset.json";
import fullCircle from "@/assets/clients/full-circle.png.asset.json";
import glencoe from "@/assets/clients/glencoe-club.png.asset.json";
import karenKing from "@/assets/clients/karen-king.png.asset.json";
import lululemon from "@/assets/clients/lululemon.png.asset.json";
import minto from "@/assets/clients/minto.png.asset.json";
import nwt from "@/assets/clients/nwt-health.png.asset.json";
import partner from "@/assets/clients/partner.png.asset.json";
import pomerleau from "@/assets/clients/pomerleau.png.asset.json";
import sait from "@/assets/clients/sait.png.asset.json";
import saje from "@/assets/clients/saje.png.asset.json";
import sunLife from "@/assets/clients/sun-life.png.asset.json";
import telusSpark from "@/assets/clients/telus-spark.png.asset.json";
import coaldale from "@/assets/clients/town-of-coaldale.png.asset.json";
import pcl from "@/assets/clients/pcl.png.asset.json";
import vancity from "@/assets/clients/vancity.png.asset.json";
import westin from "@/assets/clients/westin.png.asset.json";

type Client = { name: string; url: string };

const CLIENTS: Client[] = [
  { name: "lululemon", url: lululemon.url },
  { name: "Vancity", url: vancity.url },
  { name: "Sun Life", url: sunLife.url },
  { name: "TELUS Spark Science Centre", url: telusSpark.url },
  { name: "Westin Hotels & Resorts", url: westin.url },
  { name: "Pomerleau", url: pomerleau.url },
  { name: "Bird Construction", url: bird.url },
  { name: "Clark Builders", url: clark.url },
  { name: "Minto", url: minto.url },
  { name: "SAIT", url: sait.url },
  { name: "Calgary Board of Education", url: cbe.url },
  { name: "Conexus Credit Union", url: conexus.url },
  { name: "Northwest Territories Health and Social Services Authority", url: nwt.url },
  { name: "Dexterra", url: dexterra.url },
  { name: "AUPE", url: aupe.url },
  { name: "Saje Natural Wellness", url: saje.url },
  { name: "The Glencoe Club", url: glencoe.url },
  { name: "Conseil scolaire FrancoSud", url: francosud.url },
  { name: "Town of Coaldale", url: coaldale.url },
  { name: "Full Circle", url: fullCircle.url },
  { name: "Accurate Screen & Grating", url: accurate.url },
  { name: "Berezan", url: berezan.url },
  { name: "Karen King & Associates", url: karenKing.url },
  { name: "ARI Dental Office", url: ariDental.url },
  { name: "Client partner", url: partner.url },
];

const ROW_A = CLIENTS.filter((_, i) => i % 2 === 0);
const ROW_B = CLIENTS.filter((_, i) => i % 2 === 1);

function Logo({ client }: { client: Client }) {
  return (
    <div className="mx-3 flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border border-charcoal/10 bg-white px-5 py-4 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-[0_14px_30px_-18px_rgba(0,0,0,0.45)] md:h-28 md:w-56">
      <img
        src={client.url}
        alt={`${client.name} logo`}
        loading="lazy"
        className="max-h-full max-w-full object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

function Row({ items, reverse }: { items: Client[]; reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden">
      <div
        className="marquee-track flex w-max"
        style={reverse ? { animationDirection: "reverse", animationDuration: "55s" } : { animationDuration: "50s" }}
      >
        {[...items, ...items].map((c, i) => (
          <Logo key={`${c.name}-${i}`} client={c} />
        ))}
      </div>
    </div>
  );
}

export function ClientLogos() {
  const t = useT();
  return (
    <div>
      <div className="mx-auto mb-12 max-w-2xl px-6 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
          {t({ en: "Trusted By", fr: "Ils nous font confiance", zh: "合作伙伴", es: "Confían en nosotros", pa: "ਭਰੋਸੇਯੋਗ", ar: "موثوق به من قبل", hi: "विश्वसनीय" })}
        </p>
        <h2 className="display-heading text-4xl leading-[1.05] text-charcoal md:text-5xl">
          {t({
            en: "Walls we've grown for great companies.",
            fr: "Des murs cultivés pour de grandes entreprises.",
            zh: "我们为众多知名企业打造植物墙。",
            es: "Muros que hemos cultivado para grandes empresas.",
            pa: "ਦੀਵਾਰਾਂ ਜੋ ਅਸੀਂ ਵਧੀਆ ਕੰਪਨੀਆਂ ਲਈ ਉਗਾਈਆਂ ਹਨ।",
            ar: "جدران زرعناها لشركات رائعة.",
            hi: "दीवारें जो हमने बेहतरीन कंपनियों के लिए उगाई हैं।",
          })}
        </h2>
        <p className="mt-4 text-charcoal/70">
          {t({
            en: "From national retailers and hotels to schools, clinics and civic buildings across Canada.",
            fr: "Des détaillants nationaux et hôtels aux écoles, cliniques et bâtiments publics partout au Canada.",
            zh: "从全国零售商与酒店，到加拿大各地的学校、诊所和公共建筑。",
            es: "Desde minoristas nacionales y hoteles hasta escuelas, clínicas y edificios públicos en todo Canadá.",
            pa: "ਰਾਸ਼ਟਰੀ ਰਿਟੇਲਰਾਂ ਅਤੇ ਹੋਟਲਾਂ ਤੋਂ ਲੈ ਕੇ ਸਕੂਲਾਂ, ਕਲੀਨਿਕਾਂ ਅਤੇ ਕੈਨੇਡਾ ਭਰ ਦੀਆਂ ਸਿਵਿਕ ਇਮਾਰਤਾਂ ਤੱਕ।",
            ar: "من تجار التجزئة الوطنيين والفنادق إلى المدارس والعيادات والمباني المدنية في جميع أنحاء كندا.",
            hi: "राष्ट्रीय रिटेलर्स और होटलों से लेकर स्कूलों, क्लीनिकों और कनाडा भर की सार्वजनिक इमारतों तक।",
          })}
        </p>
      </div>

      <div className="relative space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent md:w-32" />
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>
    </div>
  );
}
