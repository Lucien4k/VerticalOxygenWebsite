import { createFileRoute, Link } from "@tanstack/react-router";
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
import glenoraLobby from "../assets/projects/glenora-lobby.jpg.asset.json";
import coaldaleHall from "../assets/projects/coaldale-hall.png.asset.json";
import lushTropicalWall from "../assets/projects/lush-tropical-wall.jpg.asset.json";
import coaldaleFlowering from "../assets/projects/coaldale-flowering.jpg.asset.json";
import { Phone, Mail, MapPin, Leaf, ArrowRight, Instagram, X, ZoomIn } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { LocationsMap } from "@/components/LocationsMap";
import { ClientLogos } from "@/components/ClientLogos";
import { NavMenu } from "@/components/NavMenu";
import { Parallax } from "@/components/Parallax";
import { WordsReveal } from "@/components/WordsReveal";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollFrames } from "@/components/ScrollFrames";
import { FRAME_URLS } from "@/lib/frame-urls";
import { ScrollFramesSection } from "@/components/ScrollFramesSection";
import { HERO2_FRAME_URLS } from "@/lib/frame-urls-hero2";
import { useState, useEffect, useRef } from "react";
import { useT, type Tr } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import installGlenora from "../assets/installs/glenora-1.jpg.asset.json";
import installCoaldale2 from "../assets/installs/coaldale-2-2.jpg.asset.json";
import delaSalleVideo from "../assets/videos/de-la-salle.mp4.asset.json";
import delaSallePoster from "../assets/videos/de-la-salle.jpg.asset.json";
import install5215 from "../assets/installs/img-5215.jpg.asset.json";
import install5221 from "../assets/installs/img-5221.jpg.asset.json";
import install0628 from "../assets/installs/img-0628.jpg.asset.json";
import cutoutCoaldale from "../assets/cutouts/coaldale-wall.png.asset.json";
import cutoutWallA from "../assets/cutouts/wall-a.png.asset.json";
import cutoutWallB from "../assets/cutouts/wall-b.png.asset.json";
import cutoutWallC from "../assets/cutouts/wall-c.png.asset.json";
import diagramAquaponic from "../assets/diagrams/aquaponic-wall-diagram-v7.png.asset.json";
import diagramHydroponic from "../assets/diagrams/hydroponic-wall-diagram-v5.png.asset.json";
import woodTexture from "../assets/textures/wood-texture-v2.jpg.asset.json";
import logoHeader from "../assets/logo-header.png.asset.json";

const SYSTEMS: {
  key: string;
  title: Tr;
  tag: Tr;
  diagram: string;
  tagline: Tr;
  description: Tr;
  stats: { label: Tr; value: Tr }[];
  highlights: Tr[];
}[] = [
  {
    key: "hydroponic",
    title: {
      en: "Hydroponic",
      fr: "Hydroponique",
      zh: "水培系统",
      es: "Hidropónico",
      pa: "ਹਾਈਡ੍ਰੋਪੋਨਿਕ",
      ar: "الزراعة المائية",
      hi: "हाइड्रोपोनिक",
    },
    tag: {
      en: "Soilless · Recirculating",
      fr: "Sans terre · Circuit fermé",
      zh: "无土栽培 · 循环供水",
      es: "Sin tierra · Recirculante",
      pa: "ਮਿੱਟੀ ਰਹਿਤ · ਮੁੜ-ਸੰਚਾਰੀ",
      ar: "بدون تربة · إعادة تدوير المياه",
      hi: "मिट्टी रहित · पुनर्चक्रित",
    },
    diagram: diagramHydroponic.url,
    tagline: {
      en: "Lightweight. Precise. Effortless.",
      fr: "Léger. Précis. Sans effort.",
      zh: "轻盈、精准、省心。",
      es: "Ligero. Preciso. Sin esfuerzo.",
      pa: "ਹਲਕਾ। ਸਟੀਕ। ਆਸਾਨ।",
      ar: "خفيف. دقيق. بلا جهد.",
      hi: "हल्का। सटीक। सहज।",
    },
    description: {
      en: "Recirculating water and dosed nutrients feed a felt matrix — soilless, low-weight, and simple to maintain across large-format installations.",
      fr: "L'eau recirculée et les nutriments dosés alimentent une matrice de feutre — sans terre, très légère et simple à entretenir, même sur de très grandes installations.",
      zh: "循环水与精准配比的营养液滋养毛毡基质——无需土壤、重量极轻，即便是大幅面墙体也易于维护。",
      es: "El agua recirculada y los nutrientes dosificados alimentan una matriz de fieltro — sin tierra, de bajo peso y fácil de mantener incluso en instalaciones de gran formato.",
      pa: "ਮੁੜ-ਸੰਚਾਰਿਤ ਪਾਣੀ ਅਤੇ ਮਿਣਿਆ ਹੋਇਆ ਪੋਸ਼ਣ ਇੱਕ ਫੈਲਟ ਮੈਟ੍ਰਿਕਸ ਨੂੰ ਖੁਰਾਕ ਦਿੰਦੇ ਹਨ — ਮਿੱਟੀ ਰਹਿਤ, ਹਲਕਾ, ਅਤੇ ਵੱਡੇ ਪੱਧਰ ਦੀਆਂ ਸਥਾਪਨਾਵਾਂ ਵਿੱਚ ਵੀ ਸੰਭਾਲਣਾ ਸੌਖਾ।",
      ar: "تغذي المياه المعاد تدويرها والمغذيات المقاسة بدقة نسيجًا من اللباد — بدون تربة، خفيف الوزن وسهل الصيانة حتى في التركيبات الكبيرة.",
      hi: "पुनर्चक्रित पानी और मापे गए पोषक तत्व एक फेल्ट मैट्रिक्स को पोषण देते हैं — मिट्टी रहित, हल्के वज़न वाला, और बड़े इंस्टॉलेशन में भी बनाए रखना आसान।",
    },
    stats: [
      {
        label: {
          en: "Wall weight", fr: "Poids du mur", zh: "墙体重量",
          es: "Peso del muro", pa: "ਕੰਧ ਦਾ ਭਾਰ", ar: "وزن الجدار", hi: "दीवार का वज़न",
        },
        value: { en: "≈ 8 lb/ft²" },
      },
      {
        label: {
          en: "Water use", fr: "Consommation d'eau", zh: "用水方式",
          es: "Uso de agua", pa: "ਪਾਣੀ ਦੀ ਵਰਤੋਂ", ar: "استخدام المياه", hi: "जल उपयोग",
        },
        value: {
          en: "Recirculating", fr: "Circuit fermé", zh: "循环利用",
          es: "Recirculante", pa: "ਮੁੜ-ਸੰਚਾਰੀ", ar: "إعادة تدوير", hi: "पुनर्चक्रित",
        },
      },
      {
        label: {
          en: "Best for", fr: "Idéal pour", zh: "适用场景",
          es: "Ideal para", pa: "ਸਭ ਤੋਂ ਵਧੀਆ ਲਈ", ar: "الأنسب لـ", hi: "इनके लिए सर्वोत्तम",
        },
        value: {
          en: "Lobbies, offices, tall installs",
          fr: "Halls, bureaux, murs de grande hauteur",
          zh: "大堂、办公空间、超高墙面",
          es: "Vestíbulos, oficinas, instalaciones altas",
          pa: "ਲਾਬੀਆਂ, ਦਫ਼ਤਰ, ਉੱਚੀਆਂ ਸਥਾਪਨਾਵਾਂ",
          ar: "الردهات، المكاتب، التركيبات العالية",
          hi: "लॉबी, कार्यालय, ऊँचे इंस्टॉलेशन",
        },
      },
      {
        label: {
          en: "Wall depth", fr: "Profondeur du mur", zh: "墙体厚度",
          es: "Profundidad del muro", pa: "ਕੰਧ ਦੀ ਡੂੰਘਾਈ", ar: "عمق الجدار", hi: "दीवार की गहराई",
        },
        value: { en: "4–6 in", fr: "10–15 cm", zh: "10–15 厘米", es: "10–15 cm", pa: "10–15 ਸੈਮੀ", ar: "10–15 سم", hi: "10–15 सेमी" },
      },
    ],
    highlights: [
      {
        en: "Ultra-light felt matrix",
        fr: "Matrice de feutre ultralégère",
        zh: "超轻毛毡基质",
        es: "Matriz de fieltro ultraligera",
        pa: "ਅਤਿ-ਹਲਕਾ ਫੈਲਟ ਮੈਟ੍ਰਿਕਸ",
        ar: "نسيج لباد فائق الخفة",
        hi: "अत्यंत हल्का फेल्ट मैट्रिक्स",
      },
      {
        en: "Automated dosing + irrigation",
        fr: "Dosage et irrigation automatisés",
        zh: "自动配肥与灌溉",
        es: "Dosificación e irrigación automatizadas",
        pa: "ਆਟੋਮੇਟਿਡ ਡੋਜ਼ਿੰਗ + ਸਿੰਚਾਈ",
        ar: "جرعات وري آلية",
        hi: "स्वचालित डोज़िंग + सिंचाई",
      },
      {
        en: "Scales to any wall size",
        fr: "S'adapte à toutes les dimensions",
        zh: "可适配任意墙面尺寸",
        es: "Se adapta a cualquier tamaño de muro",
        pa: "ਕਿਸੇ ਵੀ ਕੰਧ ਦੇ ਆਕਾਰ ਲਈ ਢੁਕਵਾਂ",
        ar: "يتكيف مع أي حجم جدار",
        hi: "किसी भी दीवार आकार के अनुरूप",
      },
    ],
  },
  {
    key: "aquaponic",
    title: {
      en: "Aquaponic",
      fr: "Aquaponique",
      zh: "鱼菜共生系统",
      es: "Acuapónico",
      pa: "ਐਕੁਆਪੋਨਿਕ",
      ar: "الاستزراع المائي التكافلي",
      hi: "एक्वापोनिक",
    },
    tag: {
      en: "Closed-loop · Fish + plants",
      fr: "Circuit fermé · Poissons et plantes",
      zh: "闭环生态 · 鱼与植物共生",
      es: "Circuito cerrado · Peces y plantas",
      pa: "ਬੰਦ-ਲੂਪ · ਮੱਛੀਆਂ + ਪੌਦੇ",
      ar: "دورة مغلقة · أسماك ونباتات",
      hi: "क्लोज़्ड-लूप · मछली + पौधे",
    },
    diagram: diagramAquaponic.url,
    tagline: {
      en: "One ecosystem. Zero waste.",
      fr: "Un écosystème. Zéro déchet.",
      zh: "一个生态系统，零浪费。",
      es: "Un ecosistema. Cero desperdicio.",
      pa: "ਇੱਕ ਇਕੋਸਿਸਟਮ। ਜ਼ੀਰੋ ਬਰਬਾਦੀ।",
      ar: "نظام بيئي واحد. صفر هدر.",
      hi: "एक पारिस्थितिकी तंत्र। शून्य बर्बादी।",
    },
    description: {
      en: "Freshwater fish — most often African cichlids — and freshwater plants share a single closed loop. Fish waste nourishes the roots, the roots in turn purify the water, and the ecosystem self-regulates with minimal input.",
      fr: "Des poissons d'eau douce — le plus souvent des cichlidés africains — et des plantes aquatiques partagent un même circuit fermé. Les déjections des poissons nourrissent les racines, qui à leur tour purifient l'eau, et l'écosystème s'autorégule avec très peu d'intervention.",
      zh: "淡水鱼（多为非洲慈鲷）与水生植物共享同一闭环：鱼类排泄物滋养根系，根系反过来净化水质，整个生态系统几乎无需人工干预即可自我调节。",
      es: "Peces de agua dulce —por lo general cíclidos africanos— y plantas acuáticas comparten un único circuito cerrado. Los desechos de los peces nutren las raíces, que a su vez purifican el agua, y el ecosistema se autorregula con mínima intervención.",
      pa: "ਤਾਜ਼ੇ ਪਾਣੀ ਦੀਆਂ ਮੱਛੀਆਂ — ਆਮ ਤੌਰ 'ਤੇ ਅਫ਼ਰੀਕੀ ਸਿਕਲਿਡ — ਅਤੇ ਤਾਜ਼ੇ ਪਾਣੀ ਦੇ ਪੌਦੇ ਇੱਕ ਹੀ ਬੰਦ-ਲੂਪ ਸਾਂਝਾ ਕਰਦੇ ਹਨ। ਮੱਛੀ ਦੀ ਰਹਿੰਦ-ਖੂੰਹਦ ਜੜ੍ਹਾਂ ਨੂੰ ਖੁਰਾਕ ਦਿੰਦੀ ਹੈ, ਜੜ੍ਹਾਂ ਆਪਣੇ ਆਪ ਪਾਣੀ ਨੂੰ ਸਾਫ਼ ਕਰਦੀਆਂ ਹਨ, ਅਤੇ ਇਕੋਸਿਸਟਮ ਘੱਟੋ-ਘੱਟ ਦਖਲ ਨਾਲ ਆਪਣੇ ਆਪ ਨੂੰ ਨਿਯਮਤ ਕਰਦਾ ਹੈ।",
      ar: "تتشارك أسماك المياه العذبة —غالبًا سمك السيكليد الإفريقي— والنباتات المائية دورة مغلقة واحدة. تغذي فضلات الأسماك الجذور، وتنقّي الجذور الماء بدورها، وينظم النظام البيئي نفسه بأقل تدخل.",
      hi: "मीठे पानी की मछलियाँ —आमतौर पर अफ़्रीकी सिक्लिड— और मीठे पानी के पौधे एक ही क्लोज़्ड-लूप साझा करते हैं। मछली का अपशिष्ट जड़ों को पोषण देता है, जड़ें बदले में पानी को शुद्ध करती हैं, और पारिस्थितिकी तंत्र न्यूनतम हस्तक्षेप के साथ स्वयं को नियंत्रित करता है।",
    },
    stats: [
      {
        label: {
          en: "Water use", fr: "Consommation d'eau", zh: "用水量",
          es: "Uso de agua", pa: "ਪਾਣੀ ਦੀ ਵਰਤੋਂ", ar: "استخدام المياه", hi: "जल उपयोग",
        },
        value: {
          en: "~90% less", fr: "~90 % de moins", zh: "减少约 90%",
          es: "~90% menos", pa: "~90% ਘੱਟ", ar: "أقل بنسبة ~90٪", hi: "~90% कम",
        },
      },
      {
        label: {
          en: "Fertilizer", fr: "Engrais", zh: "肥料",
          es: "Fertilizante", pa: "ਖਾਦ", ar: "السماد", hi: "उर्वरक",
        },
        value: {
          en: "None added", fr: "Aucun ajout", zh: "无需额外添加",
          es: "Ninguno añadido", pa: "ਕੋਈ ਨਹੀਂ ਜੋੜਿਆ", ar: "بدون إضافة", hi: "कोई नहीं जोड़ा गया",
        },
      },
      {
        label: {
          en: "Best for", fr: "Idéal pour", zh: "适用场景",
          es: "Ideal para", pa: "ਸਭ ਤੋਂ ਵਧੀਆ ਲਈ", ar: "الأنسب لـ", hi: "इनके लिए सर्वोत्तम",
        },
        value: {
          en: "Feature walls, cafés, showrooms",
          fr: "Murs signatures, cafés, salles d'exposition",
          zh: "主题墙、咖啡馆、展厅",
          es: "Muros destacados, cafés, salas de exposición",
          pa: "ਵਿਸ਼ੇਸ਼ ਕੰਧਾਂ, ਕੈਫੇ, ਸ਼ੋਰੂਮ",
          ar: "الجدران المميزة، المقاهي، صالات العرض",
          hi: "फीचर वॉल, कैफे, शोरूम",
        },
      },
      {
        label: {
          en: "Wall depth", fr: "Profondeur du mur", zh: "墙体厚度",
          es: "Profundidad del muro", pa: "ਕੰਧ ਦੀ ਡੂੰਘਾਈ", ar: "عمق الجدار", hi: "दीवार की गहराई",
        },
        value: { en: "8–12 in", fr: "20–30 cm", zh: "20–30 厘米", es: "20–30 cm", pa: "20–30 ਸੈਮੀ", ar: "20–30 سم", hi: "20–30 सेमी" },
      },
    ],
    highlights: [
      {
        en: "Live fish tank integrated at base",
        fr: "Aquarium vivant intégré à la base",
        zh: "底部集成活体鱼缸",
        es: "Acuario vivo integrado en la base",
        pa: "ਅਧਾਰ ਵਿੱਚ ਲਾਈਵ ਮੱਛੀ ਟੈਂਕ ਏਕੀਕ੍ਰਿਤ",
        ar: "حوض سمك حي مدمج في القاعدة",
        hi: "आधार में एकीकृत जीवित मछली टैंक",
      },
      {
        en: "Fully soilless, gravel media beds",
        fr: "Entièrement sans terre, lits de gravier",
        zh: "完全无土，砾石基质床",
        es: "Completamente sin tierra, lechos de grava",
        pa: "ਪੂਰੀ ਤਰ੍ਹਾਂ ਮਿੱਟੀ ਰਹਿਤ, ਬੱਜਰੀ ਦੇ ਬੈੱਡ",
        ar: "بدون تربة تمامًا، أسرة من الحصى",
        hi: "पूर्णतः मिट्टी रहित, बजरी मीडिया बेड",
      },
      {
        en: "Continuous nutrient cycle",
        fr: "Cycle nutritif continu",
        zh: "持续循环的养分体系",
        es: "Ciclo continuo de nutrientes",
        pa: "ਨਿਰੰਤਰ ਪੋਸ਼ਣ ਚੱਕਰ",
        ar: "دورة مغذيات مستمرة",
        hi: "निरंतर पोषक चक्र",
      },
    ],
  },
];

const DIAGRAM_LABEL = {
  en: "living wall diagram",
  fr: "schéma de mur végétal",
  zh: "植物墙示意图",
  es: "diagrama de muro vivo",
  pa: "ਲਿਵਿੰਗ ਵਾਲ ਡਾਇਗ੍ਰਾਮ",
  ar: "مخطط الجدار الحي",
  hi: "लिविंग वॉल आरेख",
};

function SystemsShowcase() {
  const t = useT();
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const sys = SYSTEMS[active];
  const next = SYSTEMS[(active + 1) % SYSTEMS.length];

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
            {t({
              en: "Our Systems",
              fr: "Nos systèmes",
              zh: "我们的系统",
              es: "Nuestros sistemas",
              pa: "ਸਾਡੇ ਸਿਸਟਮ",
              ar: "أنظمتنا",
              hi: "हमारे सिस्टम",
            })}
          </p>
          <WordsReveal
            as="h2"
            text={t({
              en: "Two ways to grow a wall.",
              fr: "Deux façons de faire pousser un mur.",
              zh: "两种打造绿墙的方式。",
              es: "Dos formas de cultivar un muro.",
              pa: "ਕੰਧ ਉਗਾਉਣ ਦੇ ਦੋ ਤਰੀਕੇ।",
              ar: "طريقتان لزراعة جدار.",
              hi: "दीवार उगाने के दो तरीके।",
            })}
            className="display-heading text-5xl leading-[1] text-charcoal md:text-7xl lg:text-[5.5rem]"
          />
          <p className="mt-6 max-w-xl text-charcoal/70 md:text-lg">
            {t({
              en: "Every Vertical Oxygen wall is built on one of two engineered systems. Tap through to see how each works and where it fits best.",
              fr: "Chaque mur Vertical Oxygen repose sur l'un de nos deux systèmes d'ingénierie. Parcourez-les pour découvrir leur fonctionnement et leurs usages idéaux.",
              zh: "每一面 Vertical Oxygen 绿墙都基于两套工程化系统之一。点击切换，了解各自的原理与适用场景。",
              es: "Cada muro de Vertical Oxygen se construye sobre uno de dos sistemas de ingeniería. Explóralos para ver cómo funciona cada uno y dónde encaja mejor.",
              pa: "ਹਰ Vertical Oxygen ਕੰਧ ਦੋ ਇੰਜੀਨੀਅਰਡ ਸਿਸਟਮਾਂ ਵਿੱਚੋਂ ਇੱਕ ਉੱਤੇ ਬਣੀ ਹੁੰਦੀ ਹੈ। ਦੇਖੋ ਕਿ ਹਰ ਇੱਕ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਕਿੱਥੇ ਸਭ ਤੋਂ ਵਧੀਆ ਢੁਕਦਾ ਹੈ।",
              ar: "كل جدار من Vertical Oxygen مبني على أحد نظامين هندسيين. تصفّحهما لمعرفة آلية عمل كل نظام وأين يناسب أكثر.",
              hi: "हर Vertical Oxygen दीवार दो इंजीनियर्ड सिस्टम में से एक पर बनी होती है। देखें कि प्रत्येक कैसे काम करता है और कहाँ सबसे उपयुक्त है।",
            })}
          </p>
        </div>

        {/* Tab switcher with sliding pill */}
        <div
          role="tablist"
          aria-label={t({
            en: "Living wall systems",
            fr: "Systèmes de murs végétaux",
            zh: "植物墙系统",
            es: "Sistemas de muros vivos",
            pa: "ਲਿਵਿੰਗ ਵਾਲ ਸਿਸਟਮ",
            ar: "أنظمة الجدران الحية",
            hi: "लिविंग वॉल सिस्टम",
          })}
          className="relative inline-flex self-start rounded-full bg-charcoal/5 p-1.5 ring-1 ring-charcoal/10 backdrop-blur md:self-auto"
        >
          <div
            className="absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-charcoal shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(${active * 100}%)` }}
            aria-hidden
          />
          {SYSTEMS.map((s, i) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`relative z-10 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] transition-colors duration-500 md:px-8 md:py-3 md:text-sm ${
                active === i ? "text-cream" : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              {t(s.title)}
            </button>
          ))}
        </div>
      </div>

      <div key={sys.key} className="systems-swap grid gap-10 md:grid-cols-12 md:gap-14">
        {/* Diagram plaque */}
        <div className="md:col-span-7">
          <button
            type="button"
            onClick={() =>
              setLightbox({
                src: sys.diagram,
                title: `${t(sys.title)} — ${t(DIAGRAM_LABEL)}`,
              })
            }
            className="group relative block w-full overflow-hidden rounded-3xl p-3 text-left ring-1 ring-charcoal/10 transition-shadow hover:shadow-xl md:p-4"
            aria-label={`${t({
              en: "Enlarge",
              fr: "Agrandir",
              zh: "放大",
              es: "Ampliar",
              pa: "ਵੱਡਾ ਕਰੋ",
              ar: "تكبير",
              hi: "बड़ा करें",
            })} — ${t(sys.title)}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${woodTexture.url})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-cream/92" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl bg-white">
              <img
                src={sys.diagram}
                alt={`${t(sys.title)} — ${t(DIAGRAM_LABEL)}`}
                className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02] md:max-h-[46rem]"
                loading="lazy"
              />
              {/* Zoom hint */}
              <span className="pointer-events-none absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/80 text-cream opacity-0 shadow-lg backdrop-blur transition-opacity duration-300 group-hover:opacity-100 md:h-12 md:w-12">
                <ZoomIn className="h-5 w-5" aria-hidden />
              </span>
            </div>
          </button>
        </div>

        {/* Details */}
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest">
            {t(sys.tag)}
          </p>
          <h3 className="mt-3 font-serif text-4xl italic text-charcoal md:text-5xl">
            {t(sys.tagline)}
          </h3>
          <p className="mt-5 text-charcoal/75 md:text-lg">{t(sys.description)}</p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-charcoal/10 ring-1 ring-charcoal/10">
            {sys.stats.map((s) => (
              <div key={s.label.en} className="bg-cream p-4 md:p-5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                  {t(s.label)}
                </dt>
                <dd className="mt-1.5 font-serif text-xl text-charcoal md:text-2xl">
                  {t(s.value)}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 space-y-3">
            {sys.highlights.map((h) => (
              <li key={h.en} className="flex items-start gap-3 text-charcoal/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                <span>{t(h)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-cream shadow-lg transition hover:bg-forest-deep/90 md:text-sm"
            >
              {t({ en: "Get a quote", fr: "Demander un devis", zh: "获取报价", es: "Solicitar una cotización", pa: "ਕੋਟੇਸ਼ਨ ਲਓ", ar: "احصل على عرض سعر", hi: "कोटेशन प्राप्त करें" })}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => setActive((active + 1) % SYSTEMS.length)}
              className="group inline-flex items-center gap-2 rounded-full border border-charcoal/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-charcoal transition hover:bg-charcoal hover:text-cream md:text-sm"
            >
              {t({ en: "See", fr: "Voir", zh: "查看", es: "Ver", pa: "ਦੇਖੋ", ar: "عرض", hi: "देखें" })} {t(next.title)}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20"
            aria-label={t({ en: "Close", fr: "Fermer", zh: "关闭", es: "Cerrar", pa: "ਬੰਦ ਕਰੋ", ar: "إغلاق", hi: "बंद करें" })}
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.title}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl bg-white object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

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
  const t = useT();
  const [heroDone, setHeroDone] = useState(false);
  const [installShot, setInstallShot] = useState<
    { img: string; title: string; caption: string; video?: string } | null
  >(null);
  useEffect(() => {
    if (!installShot) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInstallShot(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [installShot]);
  const blurLayerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const range = window.innerHeight * 1.75;
      const t = Math.min(1, Math.max(0, window.scrollY / range));
      const blur = t * 12; // px
      if (blurLayerRef.current) {
        blurLayerRef.current.style.backdropFilter = `blur(${blur}px)`;
        blurLayerRef.current.style.opacity = String(t);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      {/* Fixed hero: stays pinned while the rest of the page scrolls up over it */}
      <section className="fixed inset-x-0 top-0 z-0 h-screen overflow-hidden">
        {/* Background: scroll-driven frame sequence */}
        <div className="absolute inset-0">
          <ScrollFrames frames={FRAME_URLS} scrollRange={typeof window !== "undefined" ? window.innerHeight * 1.75 : 1750} onComplete={setHeroDone} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/50" aria-hidden />
        {/* Soft blur that intensifies as the page scrolls up over the hero */}
        <div ref={blurLayerRef} className="pointer-events-none absolute inset-0 z-[5] will-change-[backdrop-filter,opacity]" aria-hidden />
        <FloatingLeaves className="z-10" />

        {/* Floating rounded top bars — hero video shows around them */}
        <div className="absolute inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
          <div className="mx-auto max-w-6xl space-y-2">
            {/* Utility strip */}
            <div className="relative z-[100] hidden rounded-full bg-white/80 px-5 py-2 text-xs text-charcoal shadow-lg ring-1 ring-charcoal/10 backdrop-blur-md md:block">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <a href="tel:+16049971760" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
                    <Phone className="h-3.5 w-3.5" aria-hidden />
                    <span>604-997-1760 <span className="text-charcoal/60">EN</span></span>
                  </a>
                  <a href="tel:+14038613732" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
                    <Phone className="h-3.5 w-3.5" aria-hidden />
                    <span>403-861-3732 <span className="text-charcoal/60">FR</span></span>
                  </a>
                  <a href="mailto:verticaloxygen@gmail.com" className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
                    <Mail className="h-3.5 w-3.5" aria-hidden />
                    <span>verticaloxygen@gmail.com</span>
                  </a>
                  <span className="flex items-center gap-1.5 opacity-90">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    <span>
                      {t({
                        en: "Installations across North America",
                        fr: "Installations partout en Amérique du Nord",
                        zh: "遍布北美的绿墙项目",
                        es: "Instalaciones en toda Norteamérica",
                        pa: "ਉੱਤਰੀ ਅਮਰੀਕਾ ਭਰ ਵਿੱਚ ਸਥਾਪਨਾਵਾਂ",
                        ar: "تركيبات في جميع أنحاء أمريكا الشمالية",
                        hi: "उत्तरी अमेरिका भर में इंस्टॉलेशन",
                      })}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5 opacity-90">
                    <Leaf className="h-3.5 w-3.5" aria-hidden />
                    <span>
                      {t({
                        en: "Living & moss walls",
                        fr: "Murs végétaux et murs de mousse",
                        zh: "植物墙与苔藓墙",
                        es: "Muros vivos y de musgo",
                        pa: "ਜੀਵੰਤ ਅਤੇ ਮੌਸ ਦੀਆਂ ਕੰਧਾਂ",
                        ar: "الجدران الحية وجدران الطحالب",
                        hi: "लिविंग व मॉस वॉल",
                      })}
                    </span>
                  </span>
                </div>
                <LanguageSwitcher />
              </div>
            </div>

            {/* Main nav pill */}
            <nav className="relative z-0 flex items-center justify-between gap-4 rounded-full px-5 py-3 shadow-xl ring-1 ring-charcoal/10">
              <div
                className="absolute inset-0 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${woodTexture.url})` }}
                aria-hidden
              />
              <div className="absolute inset-0 rounded-full bg-white/88" aria-hidden />
              <div className="relative z-10 flex w-full items-center justify-between gap-4">
                <a href="/" className="flex items-center">
                  <img
                    src={logoHeader.url}
                    alt="Vertical Oxygen"
                    className="h-8 w-auto md:h-9"
                  />
                </a>
                <NavMenu
                  menus={[
                    {
                      label: t({ en: "Work", fr: "Réalisations", zh: "项目", es: "Proyectos", pa: "ਕੰਮ", ar: "الأعمال", hi: "कार्य" }),
                      href: "#work",
                      items: [
                        {
                          label: t({ en: "Our Systems", fr: "Nos systèmes", zh: "我们的系统", es: "Nuestros sistemas", pa: "ਸਾਡੇ ਸਿਸਟਮ", ar: "أنظمتنا", hi: "हमारे सिस्टम" }),
                          description: t({
                            en: "Hydroponic & aquaponic walls",
                            fr: "Murs hydroponiques et aquaponiques",
                            zh: "水培与鱼菜共生墙体",
                            es: "Muros hidropónicos y acuapónicos",
                            pa: "ਹਾਈਡ੍ਰੋਪੋਨਿਕ ਅਤੇ ਐਕੁਆਪੋਨਿਕ ਕੰਧਾਂ",
                            ar: "جدران مائية وجدران أكوابونيك",
                            hi: "हाइड्रोपोनिक और एक्वापोनिक वॉल",
                          }),
                          href: "#work",
                          image: iffWall.url,
                        },
                        {
                          label: t({ en: "Recent Installations", fr: "Réalisations récentes", zh: "近期案例", es: "Instalaciones recientes", pa: "ਹਾਲੀਆ ਸਥਾਪਨਾਵਾਂ", ar: "أحدث التركيبات", hi: "हाल की इंस्टॉलेशन" }),
                          description: t({
                            en: "Photos from real projects",
                            fr: "Photos de projets réels",
                            zh: "真实项目实拍",
                            es: "Fotos de proyectos reales",
                            pa: "ਅਸਲ ਪ੍ਰੋਜੈਕਟਾਂ ਦੀਆਂ ਫੋਟੋਆਂ",
                            ar: "صور من مشاريع حقيقية",
                            hi: "वास्तविक प्रोजेक्ट्स की तस्वीरें",
                          }),
                          href: "#motion",
                          image: lobbyPanels.url,
                        },
                        {
                          label: t({ en: "Maintenance & Guarantee", fr: "Entretien et garantie", zh: "养护与保障", es: "Mantenimiento y garantía", pa: "ਸਾਂਭ-ਸੰਭਾਲ ਅਤੇ ਗਾਰੰਟੀ", ar: "الصيانة والضمان", hi: "रखरखाव और गारंटी" }),
                          description: t({
                            en: "100% plant guarantee with service",
                            fr: "Garantie 100 % des plantes avec entretien",
                            zh: "含养护服务的 100% 植物保障",
                            es: "Garantía del 100 % de las plantas con servicio",
                            pa: "ਸਰਵਿਸ ਸਮੇਤ 100% ਪੌਦਿਆਂ ਦੀ ਗਾਰੰਟੀ",
                            ar: "ضمان 100٪ على النباتات مع الخدمة",
                            hi: "सेवा सहित 100% पौधों की गारंटी",
                          }),
                          href: "#maintenance",
                          image: higherHealth.url,
                        },
                        {
                          label: t({ en: "Specifications", fr: "Fiche technique", zh: "技术规格", es: "Especificaciones", pa: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ", ar: "المواصفات", hi: "विनिर्देश" }),
                          description: t({
                            en: "Loads, water, fire ratings",
                            fr: "Charges, eau, résistance au feu",
                            zh: "荷载、给水与防火等级",
                            es: "Cargas, agua, clasificaciones ignífugas",
                            pa: "ਲੋਡ, ਪਾਣੀ, ਅੱਗ ਦਰਜਾਬੰਦੀ",
                            ar: "الأحمال والمياه وتصنيفات مقاومة الحريق",
                            hi: "लोड, पानी, फायर रेटिंग",
                          }),
                          href: "/specifications",
                          image: outdoorFrame.url,
                        },
                      ],
                    },
                    {
                      label: t({ en: "Locations", fr: "Emplacements", zh: "服务城市", es: "Ubicaciones", pa: "ਸਥਾਨ", ar: "المواقع", hi: "स्थान" }),
                      href: "#locations",
                      items: [
                        { label: "Vancouver", href: "#locations" },
                        { label: "Victoria", href: "#locations" },
                        { label: "North Vancouver", href: "#locations" },
                        { label: "Richmond", href: "#locations" },
                        { label: "Campbell River", href: "#locations" },
                        { label: "Kelowna", href: "#locations" },
                        { label: "Yellowknife", href: "#locations" },
                        { label: "Edmonton", href: "#locations" },
                        { label: "Calgary", href: "#locations" },
                        { label: "Airdrie", href: "#locations" },
                        { label: "High Level", href: "#locations" },
                        { label: "Regina", href: "#locations" },
                        { label: "Winnipeg", href: "#locations" },
                        { label: "Barrie", href: "#locations" },
                        { label: "Sudbury", href: "#locations" },
                        { label: "London", href: "#locations" },
                        { label: "Hamilton", href: "#locations" },
                        { label: "Toronto", href: "#locations" },
                        { label: "Kingston", href: "#locations" },
                        { label: "Moncton", href: "#locations" },
                        { label: "Halifax", href: "#locations" },
                        { label: "St. John's", href: "#locations" },
                      ],
                    },
                    {
                      label: t({ en: "About", fr: "À propos", zh: "关于我们", es: "Sobre nosotros", pa: "ਸਾਡੇ ਬਾਰੇ", ar: "من نحن", hi: "हमारे बारे में" }),
                      href: "/about",
                      items: [],
                      description: t({
                        en: "Meet Nathalie Callede and Tim Suddaby — the woman-owned team behind Vertical Oxygen and every wall we've built.",
                        fr: "Rencontrez Nathalie Callede et Tim Suddaby — l'équipe détenue par une femme derrière Vertical Oxygen et chacun de nos murs.",
                        zh: "认识 Nathalie Callede 与 Tim Suddaby——这家由女性创办的团队，打造了 Vertical Oxygen 的每一面绿墙。",
                        es: "Conoce a Nathalie Callede y Tim Suddaby — el equipo liderado por una mujer detrás de Vertical Oxygen y de cada muro que hemos construido.",
                        pa: "ਨਥਾਲੀ ਕੈਲੇਡ ਅਤੇ ਟਿਮ ਸਡਬੀ ਨੂੰ ਮਿਲੋ — Vertical Oxygen ਅਤੇ ਸਾਡੀ ਹਰ ਕੰਧ ਪਿੱਛੇ ਔਰਤ ਦੀ ਮਲਕੀਅਤ ਵਾਲੀ ਟੀਮ।",
                        ar: "تعرف على ناتالي كاليد وتيم سدابي — الفريق المملوك لسيدة والذي يقف وراء Vertical Oxygen وكل جدار قمنا ببنائه.",
                        hi: "नथाली कैलेड और टिम सुडाबी से मिलें — Vertical Oxygen और हमारी हर दीवार के पीछे महिला-स्वामित्व वाली टीम।",
                      }),
                    },
                    {
                      label: t({ en: "Specifications", fr: "Fiche technique", zh: "技术规格", es: "Especificaciones", pa: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ", ar: "المواصفات", hi: "विनिर्देश" }),
                      href: "/specifications",
                      items: [],
                      description: t({
                        en: "Technical datasheets, load and water specs, fire ratings, and CAD/BIM downloads for architects, engineers, and contractors.",
                        fr: "Fiches techniques, charges et alimentation en eau, résistance au feu et fichiers CAO/BIM pour architectes, ingénieurs et entrepreneurs.",
                        zh: "面向建筑师、工程师与承包商的技术数据表、荷载与给水参数、防火等级及 CAD/BIM 下载。",
                        es: "Fichas técnicas, especificaciones de carga y agua, clasificaciones ignífugas y descargas CAD/BIM para arquitectos, ingenieros y contratistas.",
                        pa: "ਆਰਕੀਟੈਕਟਾਂ, ਇੰਜੀਨੀਅਰਾਂ ਅਤੇ ਠੇਕੇਦਾਰਾਂ ਲਈ ਤਕਨੀਕੀ ਡੇਟਾਸ਼ੀਟਾਂ, ਲੋਡ ਅਤੇ ਪਾਣੀ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ, ਅੱਗ ਦਰਜਾਬੰਦੀ ਅਤੇ CAD/BIM ਡਾਊਨਲੋਡ।",
                        ar: "أوراق بيانات فنية، مواصفات الأحمال والمياه، تصنيفات مقاومة الحريق، وملفات CAD/BIM قابلة للتنزيل للمهندسين المعماريين والمهندسين والمقاولين.",
                        hi: "आर्किटेक्ट्स, इंजीनियरों और ठेकेदारों के लिए तकनीकी डेटाशीट, लोड व पानी विनिर्देश, फायर रेटिंग और CAD/BIM डाउनलोड।",
                      }),
                    },
                  ]}
                />
                <LanguageSwitcher className="md:hidden" />
                <a
                  href="#quote"
                  className="slide-cta group inline-flex items-center rounded-full bg-forest-deep px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep/90"
                >
                  <span className="slide-cta-arrow pl-3 text-cream">
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="slide-cta-label">
                    {t({ en: "Get a Quote", fr: "Demander un devis", zh: "获取报价", es: "Solicitar una cotización", pa: "ਕੋਟੇਸ਼ਨ ਲਓ", ar: "احصل على عرض سعر", hi: "कोटेशन प्राप्त करें" })}
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Hero content */}
        <div
          className="relative mx-auto flex h-full max-w-6xl items-center px-6 pt-40 pb-16 md:pt-44 transition-opacity duration-500"
          style={{ opacity: heroDone ? 0 : 1 }}
        >
          <div className="max-w-2xl">
            <div className="reveal-fade is-visible">
              <span className="text-shadow-hero mb-4 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-cream backdrop-blur-sm">
                {t({ en: "Since 2011", fr: "Depuis 2011", zh: "始于 2011 年", es: "Desde 2011", pa: "2011 ਤੋਂ", ar: "منذ عام 2011", hi: "2011 से" })}
              </span>
              <p className="text-shadow-hero mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cream">
                {t({ en: "Custom Living Walls", fr: "Murs végétaux sur mesure", zh: "定制植物墙", es: "Muros vivos personalizados", pa: "ਕਸਟਮ ਲਿਵਿੰਗ ਵਾਲਾਂ", ar: "جدران حية مخصصة", hi: "कस्टम लिविंग वॉल" })}
              </p>
              <h1 className="display-heading-hero text-5xl text-cream md:text-7xl lg:text-8xl">
                {t({ en: "Living works", fr: "Des œuvres d'art", zh: "有生命的", es: "Obras vivas", pa: "ਜੀਵੰਤ ਰਚਨਾਵਾਂ", ar: "أعمال حية", hi: "जीवंत कृतियाँ" })}{" "}
                <span className="whitespace-nowrap">
                  {t({ en: "of art", fr: "vivantes", zh: "艺术作品", es: "de arte", pa: "ਕਲਾ ਦੀਆਂ", ar: "من الفن", hi: "कला की" })}
                </span>
              </h1>
              <p className="text-shadow-hero mt-6 max-w-xl text-lg font-medium leading-relaxed text-cream">
                {t({
                  en: "We couple beauty with simplicity to create healthy, living works of art. Each wall is custom made to satisfy your dreams.",
                  fr: "Nous allions beauté et simplicité pour créer des œuvres d'art vivantes et saines. Chaque mur est conçu sur mesure pour concrétiser vos rêves.",
                  zh: "我们将美感与简约结合，创造健康而富有生命力的艺术作品。每一面绿墙都为您的构想量身打造。",
                  es: "Combinamos belleza y sencillez para crear obras de arte vivas y saludables. Cada muro se fabrica a medida para hacer realidad tus sueños.",
                  pa: "ਅਸੀਂ ਸਿਹਤਮੰਦ, ਜੀਵੰਤ ਕਲਾ ਦੀਆਂ ਰਚਨਾਵਾਂ ਬਣਾਉਣ ਲਈ ਸੁੰਦਰਤਾ ਅਤੇ ਸਾਦਗੀ ਨੂੰ ਜੋੜਦੇ ਹਾਂ। ਹਰ ਕੰਧ ਤੁਹਾਡੇ ਸੁਪਨਿਆਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਕਸਟਮ ਬਣਾਈ ਜਾਂਦੀ ਹੈ।",
                  ar: "نجمع بين الجمال والبساطة لخلق أعمال فنية حية وصحية. كل جدار مصنوع خصيصًا لتحقيق أحلامك.",
                  hi: "हम सुंदरता और सरलता को जोड़कर स्वस्थ, जीवंत कला-कृतियाँ बनाते हैं। हर दीवार आपके सपनों को पूरा करने के लिए विशेष रूप से बनाई जाती है।",
                })}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 reveal is-visible" style={{ animationDelay: "200ms" }}>
              <a
                href="#quote"
                className="slide-cta group relative inline-flex items-center rounded-full bg-forest-deep px-7 py-3.5 text-sm font-semibold text-cream shadow-lg transition-colors hover:bg-forest-deep/90"
              >
                <span className="slide-cta-arrow pl-4 text-cream">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
                <span className="slide-cta-label">
                  {t({ en: "Get a Quote", fr: "Demander un devis", zh: "获取报价", es: "Solicitar una cotización", pa: "ਕੋਟੇਸ਼ਨ ਲਓ", ar: "احصل على عرض سعر", hi: "कोटेशन प्राप्त करें" })}
                </span>
              </a>
              <a
                href="#work"
                className="slide-cta group relative inline-flex items-center rounded-full border border-cream/40 bg-cream/10 px-7 py-3.5 text-sm font-semibold text-cream shadow-lg transition-colors hover:bg-cream/20"
              >
                <span className="slide-cta-arrow pl-4 text-cream">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
                <span className="slide-cta-label">
                  {t({ en: "Learn More", fr: "En savoir plus", zh: "了解更多", es: "Más información", pa: "ਹੋਰ ਜਾਣੋ", ar: "اعرف المزيد", hi: "और जानें" })}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Everything below scrolls up over the fixed hero */}
      <div className="relative z-10 mt-[175vh] bg-background">

      {/* Scroll-scrubbed panel sequence — second hero */}
      <ScrollFramesSection
        frames={HERO2_FRAME_URLS}
        scrollLength={1.5}
        overlay={
          <div className="max-w-2xl">
            <p className="text-shadow-hero mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white">
              {t({ en: "Engineered in layers", fr: "Conçu par couches", zh: "分层工程结构", es: "Diseñado por capas", pa: "ਪਰਤਾਂ ਵਿੱਚ ਇੰਜੀਨੀਅਰਡ", ar: "مصمم بطبقات", hi: "परतों में इंजीनियर्ड" })}
            </p>
            <WordsReveal
              as="h2"
              text={t({
                en: "Panels that come together as one.",
                fr: "Des panneaux qui n'en forment qu'un.",
                zh: "块块面板，浑然一体。",
                es: "Paneles que se unen en uno solo.",
                pa: "ਪੈਨਲ ਜੋ ਮਿਲ ਕੇ ਇੱਕ ਬਣਦੇ ਹਨ।",
                ar: "ألواح تتحد لتصبح واحدة.",
                hi: "पैनल जो मिलकर एक बनते हैं।",
              })}
              className="display-heading-hero text-4xl text-cream md:text-6xl lg:text-7xl"
            />
            <p className="text-shadow-hero mt-6 text-lg font-medium leading-relaxed text-cream md:text-xl">
              {t({
                en: "Every wall is built from modular panels — designed, planted, and assembled on-site. Scroll to see how the pieces come together.",
                fr: "Chaque mur est constitué de panneaux modulaires — conçus, plantés et assemblés sur place. Faites défiler pour voir les pièces s'assembler.",
                zh: "每一面墙都由模块化面板组成——设计、栽植并在现场组装。向下滚动，看它们如何合而为一。",
                es: "Cada muro se construye con paneles modulares: diseñados, plantados y ensamblados en el sitio. Desplázate para ver cómo se unen las piezas.",
                pa: "ਹਰ ਕੰਧ ਮਾਡਿਊਲਰ ਪੈਨਲਾਂ ਤੋਂ ਬਣਾਈ ਜਾਂਦੀ ਹੈ — ਡਿਜ਼ਾਈਨ, ਪੌਦੇ ਲਾਏ ਅਤੇ ਸਾਈਟ 'ਤੇ ਜੋੜੇ ਜਾਂਦੇ ਹਨ। ਟੁਕੜੇ ਕਿਵੇਂ ਜੁੜਦੇ ਹਨ ਵੇਖਣ ਲਈ ਸਕ੍ਰੋਲ ਕਰੋ।",
                ar: "يُبنى كل جدار من ألواح معيارية — يتم تصميمها وزراعتها وتركيبها في الموقع. مرر للأسفل لترى كيف تتجمع القطع معًا.",
                hi: "हर दीवार मॉड्यूलर पैनलों से बनती है — डिज़ाइन, रोपित और साइट पर असेंबल की जाती है। टुकड़े कैसे जुड़ते हैं यह देखने के लिए स्क्रॉल करें।",
              })}
            </p>
          </div>
        }
      />

      {/* Systems Showcase — replaces the old gallery with an interactive systems module */}
      <section id="work" className="relative z-20 -mt-[40vh] overflow-hidden rounded-t-[3rem] bg-cream text-charcoal shadow-[0_-40px_80px_-40px_rgba(0,0,0,0.45)]">
        <img
          src={cutoutCoaldale.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-24 h-[420px] w-[560px] rotate-[-6deg] object-contain opacity-40 md:h-[560px] md:w-[760px]"
        />
        <SystemsShowcase />
      </section>

      {/* Locations Map */}
      {/* Wood shelf divider */}
      <div className="relative h-5 w-full overflow-hidden md:h-7" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>
      <section id="locations" className="relative overflow-hidden">
        {/* Wood grain background with a cream wash so it isn't blank or pink */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-cream/90" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/60" aria-hidden />
        <img
          src={cutoutWallC.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-6rem] h-[380px] w-[380px] object-contain opacity-30 md:h-[520px] md:w-[520px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
                {t({ en: "Where We Grow", fr: "Où nous cultivons", zh: "我们的足迹", es: "Dónde crecemos", pa: "ਅਸੀਂ ਕਿੱਥੇ ਵਧਦੇ ਹਾਂ", ar: "أين ننمو", hi: "हम कहाँ बढ़ते हैं" })}
              </p>
              <WordsReveal
                as="h2"
                text={t({
                  en: "Living walls, coast to coast.",
                  fr: "Des murs végétaux, d'un océan à l'autre.",
                  zh: "植物墙，横贯东西两岸。",
                  es: "Muros vivos, de costa a costa.",
                  pa: "ਜੀਵੰਤ ਕੰਧਾਂ, ਤੱਟ ਤੋਂ ਤੱਟ ਤੱਕ।",
                  ar: "جدران حية، من ساحل إلى ساحل.",
                  hi: "जीवंत दीवारें, तट से तट तक।",
                })}
                className="display-heading text-4xl leading-[1.05] text-charcoal md:text-6xl"
              />
              <p className="mt-4 text-charcoal/70">
                {t({
                  en: "Hover any pin to see the installation — from Vancouver lofts to Halifax lobbies, Yellowknife to St. John's.",
                  fr: "Survolez un repère pour découvrir l'installation — des lofts de Vancouver aux halls d'Halifax, de Yellowknife à St. John's.",
                  zh: "将鼠标悬停在任意标记上即可查看项目——从温哥华的公寓到哈利法克斯的大堂，从黄刀镇到圣约翰斯。",
                  es: "Pasa el cursor sobre cualquier marcador para ver la instalación — desde lofts en Vancouver hasta vestíbulos en Halifax, de Yellowknife a St. John's.",
                  pa: "ਸਥਾਪਨਾ ਵੇਖਣ ਲਈ ਕਿਸੇ ਵੀ ਪਿੰਨ 'ਤੇ ਹੋਵਰ ਕਰੋ — ਵੈਨਕੂਵਰ ਦੇ ਲੌਫਟਾਂ ਤੋਂ ਹੈਲੀਫੈਕਸ ਦੇ ਲਾਬੀਆਂ ਤੱਕ, ਯੈਲੋਨਾਈਫ ਤੋਂ ਸੇਂਟ ਜੌਨਸ ਤੱਕ।",
                  ar: "مرر فوق أي علامة لرؤية التركيب — من شقق فانكوفر إلى ردهات هاليفاكس، من يلونايف إلى سانت جونز.",
                  hi: "इंस्टॉलेशन देखने के लिए किसी भी पिन पर होवर करें — वैंकूवर के लॉफ्ट्स से लेकर हैलिफ़ैक्स की लॉबी तक, येलोनाइफ़ से सेंट जॉन्स तक।",
                })}
              </p>
            </div>
          </Reveal>
          <Reveal variant="fade">
            <LocationsMap />
          </Reveal>
        </div>
      </section>

      {/* Photo showcase — living, breathing installations */}
      {/* Wood shelf divider */}
      <section id="clients" className="relative overflow-hidden bg-cream py-24 text-charcoal md:py-32">
        <Reveal>
          <ClientLogos />
        </Reveal>
      </section>

      <div className="relative h-5 w-full overflow-hidden md:h-7" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})`, backgroundPositionX: "30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />
      </div>
      <section id="motion" className="relative overflow-hidden bg-cream text-charcoal">
        <img
          src={cutoutWallA.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-32 h-[420px] w-[600px] object-contain opacity-55 md:h-[560px] md:w-[800px]"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-14 grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terra-light">
                {t({ en: "Recent Installations", fr: "Réalisations récentes", zh: "近期案例", es: "Instalaciones recientes", pa: "ਹਾਲੀਆ ਸਥਾਪਨਾਵਾਂ", ar: "أحدث التركيبات", hi: "हाल की इंस्टॉलेशन" })}
              </p>
              <WordsReveal
                as="h2"
                text={t({
                  en: "Living, breathing installations.",
                  fr: "Des installations vivantes qui respirent.",
                  zh: "会呼吸的生命装置。",
                  es: "Instalaciones vivas que respiran.",
                  pa: "ਜੀਵੰਤ, ਸਾਹ ਲੈਂਦੀਆਂ ਸਥਾਪਨਾਵਾਂ।",
                  ar: "تركيبات حية تتنفس.",
                  hi: "जीवंत, सांस लेती इंस्टॉलेशन।",
                })}
                className="display-heading text-4xl leading-[1.02] text-charcoal md:text-7xl"
              />
            </Reveal>
            <Reveal delay={200} className="md:col-span-5">
              <p className="text-charcoal/75 md:text-lg">
                {t({
                  en: "A few of our walls, photographed on site — lobbies, offices and community spaces where the planting has fully settled in.",
                  fr: "Quelques-uns de nos murs photographiés sur place — halls, bureaux et espaces communautaires où la végétation s'est pleinement établie.",
                  zh: "部分绿墙的现场实拍——大堂、办公室与公共空间中，植物已完全扎根生长。",
                  es: "Algunos de nuestros muros, fotografiados en el sitio — vestíbulos, oficinas y espacios comunitarios donde la vegetación ya se ha establecido por completo.",
                  pa: "ਸਾਡੀਆਂ ਕੁਝ ਕੰਧਾਂ, ਸਾਈਟ 'ਤੇ ਫੋਟੋ ਖਿੱਚੀਆਂ ਗਈਆਂ — ਲਾਬੀਆਂ, ਦਫਤਰ ਅਤੇ ਕਮਿਊਨਿਟੀ ਥਾਵਾਂ ਜਿੱਥੇ ਪੌਦੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੈਟਲ ਹੋ ਚੁੱਕੇ ਹਨ।",
                  ar: "بعض جدراننا، مصورة في الموقع — ردهات ومكاتب ومساحات مجتمعية استقرت فيها النباتات تمامًا.",
                  hi: "हमारी कुछ दीवारें, साइट पर फोटो खींची गईं — लॉबी, कार्यालय और सामुदायिक स्थान जहाँ पौधे पूरी तरह जम चुके हैं।",
                })}
              </p>
            </Reveal>
          </div>

          <div className="grid items-start gap-4 md:grid-cols-12 md:gap-5">
            {[
              {
                img: installGlenora.url,
                key: "glenora",
                title: t({ en: "Glenora Seniors' Home Lobby", fr: "Hall de la résidence pour aînés Glenora", zh: "Glenora 长者之家大堂", es: "Vestíbulo de residencia para mayores Glenora", pa: "ਗਲੇਨੋਰਾ ਸੀਨੀਅਰਜ਼ ਹੋਮ ਲਾਬੀ", ar: "ردهة دار مسنين غلينورا", hi: "ग्लेनोरा सीनियर्स होम लॉबी" }),
                caption: t({
                  en: "Edmonton, AB · Five-panel feature wall",
                  fr: "Edmonton, AB · Mur signature de cinq panneaux",
                  zh: "阿尔伯塔省埃德蒙顿 · 五面板主题墙",
                  es: "Edmonton, AB · Muro destacado de cinco paneles",
                  pa: "ਐਡਮਿੰਟਨ, AB · ਪੰਜ-ਪੈਨਲ ਵਿਸ਼ੇਸ਼ ਕੰਧ",
                  ar: "إدمونتون، ألبرتا · جدار مميز من خمس ألواح",
                  hi: "एडमॉन्टन, AB · पाँच-पैनल फीचर वॉल",
                }),
                span: "md:col-span-8",
                ratio: "aspect-[4/3]",
              },
              {
                img: install5215.url,
                key: "atrium",
                title: t({ en: "Dental Clinic Waiting Room", fr: "Salle d'attente de clinique dentaire", zh: "牙科诊所候诊室", es: "Sala de espera de clínica dental", pa: "ਡੈਂਟਲ ਕਲੀਨਿਕ ਵੇਟਿੰਗ ਰੂਮ", ar: "غرفة انتظار عيادة الأسنان", hi: "दंत क्लीनिक वेटिंग रूम" }),
                caption: t({
                  en: "Toronto, ON · Hydroponic",
                  fr: "Toronto, ON · Hydroponique",
                  zh: "安大略省多伦多 · 水培",
                  es: "Toronto, ON · Hidropónico",
                  pa: "ਟੋਰਾਂਟੋ, ON · ਹਾਈਡ੍ਰੋਪੋਨਿਕ",
                  ar: "تورنتو، أونتاريو · مائي",
                  hi: "टोरंटो, ON · हाइड्रोपोनिक",
                }),
                span: "md:col-span-4",
                ratio: "aspect-[3/4]",
              },
              {
                img: install5221.url,
                key: "reception",
                title: t({ en: "Reception Wall", fr: "Mur de réception", zh: "前台绿墙", es: "Muro de recepción", pa: "ਰਿਸੈਪਸ਼ਨ ਦੀਵਾਰ", ar: "جدار الاستقبال", hi: "रिसेप्शन वॉल" }),
                caption: t({
                  en: "Corporate office · Mixed tropical palette",
                  fr: "Bureaux d'entreprise · Palette tropicale mixte",
                  zh: "企业办公空间 · 混合热带植物配色",
                  es: "Oficina corporativa · Paleta tropical mixta",
                  pa: "ਕਾਰਪੋਰੇਟ ਦਫ਼ਤਰ · ਮਿਸ਼ਰਤ ਟ੍ਰੌਪੀਕਲ ਪੈਲੇਟ",
                  ar: "مكتب الشركة · تشكيلة استوائية متنوعة",
                  hi: "कॉर्पोरेट ऑफिस · मिश्रित उष्णकटिबंधीय पैलेट",
                }),
                span: "md:col-span-5",
                ratio: "aspect-[4/3]",
              },
              {
                img: installCoaldale2.url,
                key: "coaldale",
                title: t({ en: "Coaldale, Alberta", fr: "Coaldale, Alberta", zh: "阿尔伯塔省 Coaldale", es: "Coaldale, Alberta", pa: "ਕੋਲਡੇਲ, ਐਲਬਰਟਾ", ar: "كولديل، ألبرتا", hi: "कोलडेल, अल्बर्टा" }),
                caption: t({
                  en: "Community hall · Full-height install",
                  fr: "Salle communautaire · Installation pleine hauteur",
                  zh: "社区活动厅 · 通高安装",
                  es: "Salón comunitario · Instalación de altura completa",
                  pa: "ਕਮਿਊਨਿਟੀ ਹਾਲ · ਪੂਰੀ-ਉਚਾਈ ਇੰਸਟਾਲੇਸ਼ਨ",
                  ar: "قاعة مجتمعية · تركيب بارتفاع كامل",
                  hi: "कम्युनिटी हॉल · पूर्ण-ऊँचाई इंस्टॉलेशन",
                }),
                span: "md:col-span-3",
                ratio: "aspect-[3/4]",
              },
              {
                img: delaSallePoster.url,
                video: delaSalleVideo.url,
                key: "de-la-salle",
                title: t({ en: "De La Salle", fr: "De La Salle", zh: "De La Salle", es: "De La Salle", pa: "ਡੀ ਲਾ ਸਾਲ", ar: "دي لا سال", hi: "डे ला सैल" }),
                caption: t({
                  en: "School interior · Living wall in motion",
                  fr: "Intérieur scolaire · Mur végétal en mouvement",
                  zh: "校园室内 · 动态植物墙",
                  es: "Interior escolar · Muro vivo en movimiento",
                  pa: "ਸਕੂਲ ਅੰਦਰੂਨੀ · ਚਲਦੀ ਹੋਈ ਜੀਵੰਤ ਕੰਧ",
                  ar: "داخل المدرسة · جدار حي متحرك",
                  hi: "स्कूल आंतरिक · गतिमान लिविंग वॉल",
                }),
                span: "md:col-span-4",
                ratio: "aspect-[4/3]",
              },
            ].map((p, i) => (
              <Reveal key={p.key} delay={i * 90} className={p.span}>
                <figure
                  role="button"
                  tabIndex={0}
                  onClick={() => setInstallShot(p)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setInstallShot(p);
                    }
                  }}
                  aria-label={`${t({ en: "View larger photo", fr: "Voir la photo en grand", zh: "查看大图", es: "Ver foto ampliada", pa: "ਵੱਡੀ ਫੋਟੋ ਵੇਖੋ", ar: "عرض صورة أكبر", hi: "बड़ी फोटो देखें" })}: ${p.title}`}
                  className={`group relative cursor-zoom-in overflow-hidden rounded-[1.75rem] bg-charcoal/5 ring-1 ring-charcoal/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-deep ${p.ratio}`}
                >
                  {"video" in p && p.video ? (
                    <video
                      src={p.video}
                      poster={p.img}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.06]"
                    />
                  ) : (
                    <img
                      src={p.img}
                      alt={`${p.title} — ${p.caption}`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.06]"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
                    <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
                      <p className="font-serif text-lg text-cream md:text-2xl">
                        {p.title}
                      </p>
                      <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-cream/70 md:text-xs">
                        {p.caption}
                      </p>
                    </div>
                    <span className="hidden font-mono text-[0.65rem] text-cream/50 md:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        {installShot && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm md:p-10"
            onClick={() => setInstallShot(null)}
            role="dialog"
            aria-modal="true"
            aria-label={installShot.title}
          >
            <button
              type="button"
              onClick={() => setInstallShot(null)}
              aria-label={t({ en: "Close", fr: "Fermer", zh: "关闭", es: "Cerrar", pa: "ਬੰਦ ਕਰੋ", ar: "إغلاق", hi: "बंद करें" })}
              className="absolute right-5 top-5 rounded-full bg-cream/10 px-4 py-2 text-sm font-medium text-cream ring-1 ring-cream/25 transition-colors hover:bg-cream/20"
            >
              {t({ en: "Close", fr: "Fermer", zh: "关闭", es: "Cerrar", pa: "ਬੰਦ ਕਰੋ", ar: "إغلاق", hi: "बंद करें" })} ✕
            </button>
            <figure
              className="max-h-full w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {installShot.video ? (
                <video
                  src={installShot.video}
                  poster={installShot.img}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="mx-auto max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
                />
              ) : (
                <img
                  src={installShot.img}
                  alt={`${installShot.title} — ${installShot.caption}`}
                  className="mx-auto max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
                />
              )}
              <figcaption className="mt-4 text-center">
                <p className="font-serif text-xl text-cream md:text-2xl">
                  {installShot.title}
                </p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-cream/60">
                  {installShot.caption}
                </p>
              </figcaption>
            </figure>
          </div>
        )}
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="relative overflow-hidden bg-charcoal text-cream">
        <FloatingLeaves density={6} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
              {t({ en: "Sustainability", fr: "Durabilité", zh: "可持续性", es: "Sostenibilidad", pa: "ਸਸਟੇਨੇਬਿਲਟੀ", ar: "الاستدامة", hi: "सस्टेनेबिलिटी" })}
            </p>
            <h2 className="display-heading max-w-3xl text-4xl leading-[1.05] md:text-6xl">
              {t({
                en: "Every drop, used again.",
                fr: "Chaque goutte, réutilisée.",
                zh: "每一滴水，循环再用。",
                es: "Cada gota, reutilizada.",
                pa: "ਹਰ ਬੂੰਦ, ਮੁੜ ਵਰਤੀ।",
                ar: "كل قطرة تُعاد استخدامها.",
                hi: "हर बूंद, फिर से उपयोग।",
              })}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
              {t({
                en: "Our hydroponic and aquaponic walls run on closed-loop recirculating water. Instead of draining away, the same water cycles through the root matrix again and again — topping up only what the plants actually drink. The result is a living wall that uses a fraction of the water of traditional irrigation while keeping roots oxygenated and healthy.",
                fr: "Nos murs hydroponiques et aquaponiques fonctionnent en circuit fermé à eau recyclée. Au lieu de s'écouler, la même eau circule encore et encore à travers la matrice racinaire — compensant uniquement ce que les plantes consomment. Résultat : un mur végétal qui consomme une fraction de l'eau d'une irrigation traditionnelle tout en gardant les racines oxygénées et saines.",
                zh: "我们的水培和鱼菜共生墙体采用闭环循环水系统。水流不会排走，而是反复流经根系基质——仅补充植物实际吸收的水分。这样的植物墙用水量仅为传统灌溉的一小部分，同时保持根系富氧、健康。",
                es: "Nuestros muros hidropónicos y acuapónicos funcionan con agua recirculada en circuito cerrado. En lugar de drenar, la misma agua pasa por la matriz de raíces una y otra vez — reponiendo solo lo que las plantas beben. El resultado es un muro vivo que usa una fracción del agua del riego tradicional mientras mantiene las raíces oxigenadas y sanas.",
                pa: "ਸਾਡੀਆਂ ਹਾਈਡਰੋਪੋਨਿਕ ਅਤੇ ਐਕੁਆਪੋਨਿਕ ਕੰਧਾਂ ਬੰਦ-ਲੂਪ ਰੀਸਰਕੁਲੇਟਿੰਗ ਪਾਣੀ 'ਤੇ ਚੱਲਦੀਆਂ ਹਨ। ਪਾਣੀ ਨੂੰ ਵਹਾਉਣ ਦੀ ਬਜਾਏ, ਇਹੀ ਪਾਣੀ ਜੜ੍ਹਾਂ ਵਿੱਚ ਵਾਰ-ਵਾਰ ਚੱਕਰ ਕੱਟਦਾ ਹੈ — ਸਿਰਫ਼ ਉਹਨਾਂ ਨੂੰ ਭਰਪੂਰ ਕਰਦਾ ਹੈ ਜੋ ਪੌਦੇ ਸੱਚਮੁੱਚ ਪੀਂਦੇ ਹਨ। ਨਤੀਜਾ ਇੱਕ ਅਜਿਹੀ ਜੀਵੰਤ ਕੰਧ ਹੈ ਜੋ ਪਰੰਪਰਾਗਤ ਸਿੰਚਾਈ ਦੇ ਪਾਣੀ ਦਾ ਇੱਕ ਹਿੱਸਾ ਵਰਤਦੀ ਹੈ ਅਤੇ ਜੜ੍ਹਾਂ ਨੂੰ ਆਕਸੀਜਨਯੁਕਤ ਤੇ ਸਿਹਤਮੰਦ ਰੱਖਦੀ ਹੈ।",
                ar: "تعمل جدراننا المائية والسمكية على مياه معاد تدويرها في دارة مغلقة. بدلاً من أن تصرف، تدور نفس المياه عبر مصفوفة الجذور مراراً — ولا يُعوَّض إلا ما تستهلكه النباتات فعلاً. النتيجة جدار حي يستخدم جزءاً صغيراً من مياه الري التقليدي مع إبقاء الجذور مؤكسجة وسليمة.",
                hi: "हमारी हाइड्रोपोनिक और एक्वापोनिक दीवारें क्लोज्ड-लूप रीसर्कुलेटिंग जल पर चलती हैं। पानी बहकर निकलने के बजाय बार-बार जड़ मैट्रिक्स से गुजरता है — केवल उतना ही भरा जाता है जितना पौधे वास्तव में पीते हैं। नतीजा एक ऐसी जीवित दीवार है जो पारंपरिक सिंचाई के पानी का एक अंश उपयोग करती है, जड़ों को ऑक्सीजनयुक्त और स्वस्थ रखती है।",
              })}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                key: "reuse",
                stat: t({ en: "up to 90%", fr: "jusqu'à 90 %", zh: "高达 90%", es: "hasta 90 %", pa: "90% ਤੱਕ", ar: "حتى 90٪", hi: "90% तक" }),
                title: t({ en: "Water Reused", fr: "Eau réutilisée", zh: "水资源回用", es: "Agua reutilizada", pa: "ਪਾਣੀ ਮੁੜ-ਵਰਤੋਂ", ar: "المياه المعاد استخدامها", hi: "जल पुनः उपयोग" }),
                body: t({
                  en: "Closed-loop recirculation returns nearly all the water the roots don't drink straight back into the system.",
                  fr: "La recirculation en circuit fermé renvoie presque toute l'eau non absorbée par les racines directement dans le système.",
                  zh: "闭环循环将根系未吸收的水几乎全部回流至系统中。",
                  es: "La recirculación en circuito cerrado devuelve casi toda el agua no absorbida por las raíces directamente al sistema.",
                  pa: "ਬੰਦ-ਲੂਪ ਰੀਸਰਕੁਲੇਸ਼ਨ ਜੜ੍ਹਾਂ ਦੁਆਰਾ ਨਾ ਪੀਤੇ ਲਗਭਗ ਸਾਰੇ ਪਾਣੀ ਨੂੰ ਸਿੱਧਾ ਸਿਸਟਮ ਵਿੱਚ ਵਾਪਸ ਭੇਜਦਾ ਹੈ।",
                  ar: "إعادة التدوير في دارة مغلقة تعيد تقريباً كل المياه التي لم تمتصها الجذور مباشرة إلى النظام.",
                  hi: "क्लोज्ड-लूप पुनर्चक्रण जड़ों द्वारा न पिए गए लगभग सभी पानी को सीधे सिस्टम में लौटा देता है।",
                }),
              },
              {
                key: "litre",
                stat: t({ en: "0.35 L", fr: "0,35 L", zh: "0.35 升", es: "0,35 L", pa: "0.35 ਲੀ", ar: "0.35 لتر", hi: "0.35 लीटर" }),
                title: t({ en: "Per Day, Per Square Foot", fr: "Par jour, par pied carré", zh: "每日每平方英尺", es: "Por día, por pie cuadrado", pa: "ਪ੍ਰਤੀ ਦਿਨ, ਪ੍ਰਤੀ ਵਰਗ ਫੁੱਟ", ar: "يومياً لكل قدم مربع", hi: "प्रति दिन, प्रति वर्ग फुट" }),
                body: t({
                  en: "Typical daily top-up — only the small amount the plants actually transpire, not the full reservoir.",
                  fr: "Apport quotidien typique — uniquement la petite quantité réellement transpirée par les plantes, pas le réservoir complet.",
                  zh: "典型日补水量——仅为植物实际蒸腾的少量水分，而非整个储水箱。",
                  es: "Reposición diaria típica — solo la pequeña cantidad que las plantas realmente transpiran, no el depósito completo.",
                  pa: "ਆਮ ਰੋਜ਼ਾਨਾ ਟਾਪ-ਅੱਪ — ਸਿਰਫ਼ ਉਹ ਛੋਟੀ ਮਾਤਰਾ ਜੋ ਪੌਦੇ ਅਸਲ ਵਿੱਚ ਬਾਸ਼ਪ ਕਰਦੇ ਹਨ, ਪੂਰਾ ਭੰਡਾਰ ਨਹੀਂ।",
                  ar: "التعبئة اليومية المعتادة — فقط الكمية الصغيرة التي تتبخرها النباتات فعلاً، وليس الخزان بالكامل.",
                  hi: "सामान्य दैनिक टॉप-अप — केवल वह छोटी मात्रा जो पौधे वास्तव में वाष्पित करते हैं, पूरा भंडार नहीं।",
                }),
              },
              {
                key: "zero",
                stat: t({ en: "zero", fr: "zéro", zh: "零", es: "cero", pa: "ਜ਼ੀਰੋ", ar: "صفر", hi: "शून्य" }),
                title: t({ en: "Runoff to Drain", fr: "Rejet à l'égout", zh: "排放至下水道", es: "Descarga al alcantarillado", pa: "ਨਿਕਾਸ ਵਿੱਚ ਵਹਾਅ", ar: "صرف إلى المجاري", hi: "नाले में बहाव" }),
                body: t({
                  en: "No municipal water wasted. What isn't taken up by the roots stays in the loop and is filtered for the next pass.",
                  fr: "Aucune eau municipale gaspillée. Ce qui n'est pas absorbé par les racines reste dans le circuit et est filtré pour le prochain passage.",
                  zh: "不浪费市政用水。根系未吸收的水留在循环中，过滤后供下一轮使用。",
                  es: "Ninguna agua municipal desperdiciada. Lo que las raíces no absorben permanece en el circuito y se filtra para el siguiente ciclo.",
                  pa: "ਕੋਈ ਨਗਰਪਾਲਿਕਾ ਪਾਣੀ ਬਰਬਾਦ ਨਹੀਂ। ਜੋ ਜੜ੍ਹਾਂ ਲੈਂਦੀਆਂ ਨਹੀਂ ਹਨ, ਉਹ ਲੂਪ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ ਅਤੇ ਅਗਲੇ ਚੱਕਰ ਲਈ ਫਿਲਟਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।",
                  ar: "لا هدر للمياه البلدية. ما لا تأخذه الجذور يبقى في الدارة ويُرشَّح للدورة التالية.",
                  hi: "नगरपालिका का पानी बर्बाद नहीं। जो जड़ें नहीं लेतीं वह लूप में रहता है और अगले चक्र के लिए फ़िल्टर कर दिया जाता है।",
                }),
              },
            ].map((c, i) => (
              <Reveal key={c.key} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm">
                  <p className="font-serif text-4xl text-forest md:text-5xl">{c.stat}</p>
                  <h3 className="mt-5 text-xl font-semibold text-cream">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Guarantee */}
      <section id="maintenance" className="relative overflow-hidden bg-cream text-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
              {t({ en: "Maintenance & Guarantee", fr: "Entretien et garantie", zh: "养护与保障", es: "Mantenimiento y garantía", pa: "ਰੱਖ-ਰਖਾਅ ਅਤੇ ਗਾਰੰਟੀ", ar: "الصيانة والضمان", hi: "रखरखाव और गारंटी" })}
            </p>
            <h2 className="display-heading max-w-3xl text-4xl leading-[1.05] text-charcoal md:text-6xl">
              {t({
                en: "100% plant guarantee —",
                fr: "Garantie 100 % des plantes —",
                zh: "100% 植物保障——",
                es: "Garantía del 100 % en plantas —",
                pa: "100% ਪੌਦਾ ਗਾਰੰਟੀ —",
                ar: "ضمان 100٪ للنباتات —",
                hi: "100% प्लांट गारंटी —",
              })}{" "}
              <em>
                {t({ en: "with maintenance.", fr: "avec l'entretien.", zh: "需搭配养护服务。", es: "con mantenimiento.", pa: "ਰੱਖ-ਰਖਾਅ ਦੇ ਨਾਲ।", ar: "مع خدمة الصيانة.", hi: "रखरखाव के साथ।" })}
              </em>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/70">
              {t({
                en: "A living wall is a living thing. Our maintenance program keeps every wall thriving — and every wall on an active maintenance agreement is covered by our 100% plant guarantee. If a plant fails, we replace it. No charge, no questions. The guarantee is available exclusively with maintenance service.",
                fr: "Un mur végétal est un organisme vivant. Notre programme d'entretien garde chaque mur en pleine santé — et tout mur couvert par un contrat d'entretien actif bénéficie de notre garantie 100 % des plantes. Si une plante dépérit, nous la remplaçons. Sans frais, sans discussion. La garantie est offerte exclusivement avec le service d'entretien.",
                zh: "植物墙是有生命的。我们的养护计划让每一面墙持续繁茂——凡在有效养护合约内的墙体，均享有 100% 植物保障。若有植物枯萎，我们免费更换，无需多问。该保障仅在订购养护服务时提供。",
                es: "Un muro vegetal es un ser vivo. Nuestro programa de mantenimiento mantiene cada muro floreciente — y todo muro con un contrato de mantenimiento activo está cubierto por nuestra garantía del 100 % en plantas. Si una planta falla, la reemplazamos. Sin costo, sin preguntas. La garantía está disponible exclusivamente con el servicio de mantenimiento.",
                pa: "ਇੱਕ ਜੀਵੰਤ ਕੰਧ ਇੱਕ ਜੀਵਤ ਚੀਜ਼ ਹੈ। ਸਾਡਾ ਰੱਖ-ਰਖਾਅ ਪ੍ਰੋਗਰਾਮ ਹਰ ਕੰਧ ਨੂੰ ਵਧਦੀ-ਫੁੱਲਦੀ ਰੱਖਦਾ ਹੈ — ਅਤੇ ਕਿਰਿਆਸ਼ੀਲ ਰੱਖ-ਰਖਾਅ ਸਮਝੌਤੇ ਵਾਲੀ ਹਰ ਕੰਧ ਸਾਡੀ 100% ਪੌਦਾ ਗਾਰੰਟੀ ਦੁਆਰਾ ਕਵਰ ਹੁੰਦੀ ਹੈ। ਜੇ ਕੋਈ ਪੌਦਾ ਖ਼ਰਾਬ ਹੁੰਦਾ ਹੈ, ਅਸੀਂ ਇਸਨੂੰ ਬਦਲ ਦਿੰਦੇ ਹਾਂ। ਕੋਈ ਖਰਚਾ ਨਹੀਂ, ਕੋਈ ਸਵਾਲ ਨਹੀਂ। ਇਹ ਗਾਰੰਟੀ ਸਿਰਫ਼ ਰੱਖ-ਰਖਾਅ ਸੇਵਾ ਨਾਲ ਹੀ ਉਪਲਬਧ ਹੈ।",
                ar: "الجدار الأخضر كائن حي. برنامج الصيانة لدينا يحافظ على ازدهار كل جدار — وكل جدار ضمن اتفاقية صيانة سارية مشمول بضماننا 100٪ للنباتات. إذا فشلت نبتة، نستبدلها دون أي تكلفة أو أسئلة. الضمان متاح حصريًا مع خدمة الصيانة.",
                hi: "एक लिविंग वॉल एक जीवित वस्तु है। हमारा रखरखाव कार्यक्रम हर वॉल को फलता-फूलता रखता है — और सक्रिय रखरखाव समझौते वाली हर वॉल हमारी 100% प्लांट गारंटी द्वारा कवर होती है। यदि कोई पौधा खराब होता है, तो हम उसे बदल देते हैं। कोई शुल्क नहीं, कोई सवाल नहीं। यह गारंटी केवल रखरखाव सेवा के साथ ही उपलब्ध है।",
               })}
             </p>
            <p className="mt-5 max-w-2xl text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              {t({
                en: "Since 2011, we have stood behind every wall we have created.",
                fr: "Depuis 2011, nous garantissons chaque mur que nous avons créé.",
                zh: "自2011年以来，我们为我们建造的每一面墙提供保障。",
                es: "Desde 2011, respaldamos cada muro que hemos creado.",
                pa: "2011 ਤੋਂ, ਅਸੀਂ ਆਪਣੇ ਬਣਾਏ ਹਰ ਕੰਧ ਦੇ ਪਿੱਛੇ ਖੜ੍ਹੇ ਹਾਂ।",
                ar: "منذ 2011، نقف خلف كل جدار أنشأناه.",
                hi: "2011 से, हमने अपने द्वारा बनाई गई हर दीवार का समर्थन किया है।",
              })}
            </p>
           </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                key: "guarantee",
                title: t({ en: "100% Plant Guarantee", fr: "Garantie 100 % des plantes", zh: "100% 植物保障", es: "Garantía del 100 % en plantas", pa: "100% ਪੌਦਾ ਗਾਰੰਟੀ", ar: "ضمان 100٪ للنباتات", hi: "100% प्लांट गारंटी" }),
                body: t({
                  en: "Any plant that declines or dies is replaced at no cost for the life of your maintenance agreement.",
                  fr: "Toute plante qui dépérit ou meurt est remplacée sans frais pendant toute la durée de votre contrat d'entretien.",
                  zh: "在养护合约有效期内，任何衰弱或枯死的植物均免费更换。",
                  es: "Toda planta que decaiga o muera se reemplaza sin costo durante la vigencia de su contrato de mantenimiento.",
                  pa: "ਕੋਈ ਵੀ ਪੌਦਾ ਜੋ ਕਮਜ਼ੋਰ ਹੁੰਦਾ ਜਾਂ ਮਰ ਜਾਂਦਾ ਹੈ, ਤੁਹਾਡੇ ਰੱਖ-ਰਖਾਅ ਸਮਝੌਤੇ ਦੌਰਾਨ ਬਿਨਾਂ ਕਿਸੇ ਖਰਚੇ ਦੇ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ।",
                  ar: "يتم استبدال أي نبتة تضعف أو تموت مجانًا طوال مدة اتفاقية الصيانة الخاصة بك.",
                  hi: "कोई भी पौधा जो कमजोर हो जाए या मर जाए, आपके रखरखाव समझौते की अवधि के दौरान बिना किसी शुल्क के बदल दिया जाता है।",
                }),
              },
              {
                key: "scheduled",
                title: t({ en: "Scheduled Maintenance", fr: "Entretien planifié", zh: "定期养护", es: "Mantenimiento programado", pa: "ਨਿਯਤ ਰੱਖ-ਰਖਾਅ", ar: "صيانة مجدولة", hi: "निर्धारित रखरखाव" }),
                body: t({
                  en: "Regular visits for pruning, feeding, pest management, irrigation checks, and system calibration.",
                  fr: "Visites régulières pour la taille, la fertilisation, la gestion des nuisibles, la vérification de l'irrigation et le calibrage du système.",
                  zh: "定期上门进行修剪、施肥、病虫害防治、灌溉检查与系统校准。",
                  es: "Visitas periódicas para poda, fertilización, control de plagas, revisión del riego y calibración del sistema.",
                  pa: "ਛਾਂਟਣ, ਖਾਦ ਦੇਣ, ਕੀੜੇ-ਮਕੌੜੇ ਪ੍ਰਬੰਧਨ, ਸਿੰਚਾਈ ਜਾਂਚ ਅਤੇ ਸਿਸਟਮ ਕੈਲੀਬ੍ਰੇਸ਼ਨ ਲਈ ਨਿਯਮਤ ਦੌਰੇ।",
                  ar: "زيارات منتظمة للتقليم والتغذية ومكافحة الآفات وفحص الري ومعايرة النظام.",
                  hi: "छंटाई, पोषण, कीट प्रबंधन, सिंचाई जांच और सिस्टम कैलिब्रेशन के लिए नियमित दौरे।",
                }),
              },
              {
                key: "terms",
                title: t({ en: "Plant Warranty Terms", fr: "Conditions de la garantie", zh: "植物保修条款", es: "Condiciones de la garantía", pa: "ਪੌਦਾ ਵਾਰੰਟੀ ਸ਼ਰਤਾਂ", ar: "شروط ضمان النباتات", hi: "प्लांट वारंटी शर्तें" }),
                body: t({
                  en: "Coverage stays active as long as maintenance is current. Without a maintenance plan, the guarantee does not apply.",
                  fr: "La couverture demeure active tant que l'entretien est à jour. Sans forfait d'entretien, la garantie ne s'applique pas.",
                  zh: "只要养护服务持续有效，保障即持续生效；未订购养护计划则不适用该保障。",
                  es: "La cobertura permanece activa mientras el mantenimiento esté al día. Sin un plan de mantenimiento, la garantía no aplica.",
                  pa: "ਕਵਰੇਜ ਓਦੋਂ ਤੱਕ ਕਿਰਿਆਸ਼ੀਲ ਰਹਿੰਦੀ ਹੈ ਜਦੋਂ ਤੱਕ ਰੱਖ-ਰਖਾਅ ਚਾਲੂ ਹੈ। ਰੱਖ-ਰਖਾਅ ਯੋਜਨਾ ਤੋਂ ਬਿਨਾਂ, ਗਾਰੰਟੀ ਲਾਗੂ ਨਹੀਂ ਹੁੰਦੀ।",
                  ar: "تبقى التغطية سارية طالما الصيانة مستمرة. بدون خطة صيانة، لا ينطبق الضمان.",
                  hi: "जब तक रखरखाव जारी है, तब तक कवरेज सक्रिय रहता है। रखरखाव योजना के बिना, गारंटी लागू नहीं होती।",
                }),
              },
            ].map((c, i) => (
              <Reveal key={c.key} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-charcoal/10 bg-white p-8">
                  <Leaf className="h-5 w-5 text-forest" />
                  <h3 className="mt-5 text-xl font-semibold text-charcoal">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-7 py-3 text-sm font-semibold text-cream transition hover:opacity-90"
              >
                {t({ en: "Ask about maintenance", fr: "Renseignez-vous sur l'entretien", zh: "咨询养护服务", es: "Consulta sobre mantenimiento", pa: "ਰੱਖ-ਰਖਾਅ ਬਾਰੇ ਪੁੱਛੋ", ar: "اسأل عن الصيانة", hi: "रखरखाव के बारे में पूछें" })}{" "}
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/specifications"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-forest underline underline-offset-4"
              >
                {t({ en: "Full warranty terms", fr: "Conditions complètes de garantie", zh: "完整保修条款", es: "Condiciones completas de la garantía", pa: "ਪੂਰੀਆਂ ਵਾਰੰਟੀ ਸ਼ਰਤਾਂ", ar: "الشروط الكاملة للضمان", hi: "पूर्ण वारंटी शर्तें" })}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy / About */}
      {/* Wood shelf divider */}
      <div className="relative h-5 w-full overflow-hidden md:h-7" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})`, backgroundPositionX: "70%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>
      <section id="about" className="relative overflow-hidden bg-background">
        <img
          src={cutoutWallB.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-40 h-[460px] w-[360px] object-contain opacity-50 md:h-[620px] md:w-[480px]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse at 30% 60%, black 45%, transparent 80%)",
            maskImage:
              "radial-gradient(ellipse at 30% 60%, black 45%, transparent 80%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={spiderPothos.url}
              alt={t({
                en: "Spider plant and pothos texture close-up",
                fr: "Gros plan sur la texture d'une plante araignée et d'un pothos",
                zh: "吊兰与绿萝纹理特写",
                es: "Primer plano de la textura de cinta y potos",
                pa: "ਸਪਾਈਡਰ ਪਲਾਂਟ ਅਤੇ ਪੋਥੋਸ ਟੈਕਸਚਰ ਦਾ ਨਜ਼ਦੀਕੀ ਦ੍ਰਿਸ਼",
                ar: "لقطة مقربة لنسيج نبات العنكبوت والبوتوس",
                hi: "स्पाइडर प्लांट और पोथोस बनावट का क्लोज़-अप",
              })}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
            <Reveal className="relative px-8 py-16 md:px-16 md:py-24 lg:max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sage-wash">
                {t({ en: "Our Philosophy", fr: "Notre philosophie", zh: "我们的理念", es: "Nuestra filosofía", pa: "ਸਾਡਾ ਦਰਸ਼ਨ", ar: "فلسفتنا", hi: "हमारा दर्शन" })}
              </p>
              <WordsReveal
                as="h2"
                text={t({
                  en: "Beauty with simplicity.",
                  fr: "La beauté dans la simplicité.",
                  zh: "以简约成就美感。",
                  es: "Belleza con simplicidad.",
                  pa: "ਸਾਦਗੀ ਵਿੱਚ ਸੁੰਦਰਤਾ।",
                  ar: "الجمال في البساطة.",
                  hi: "सादगी में सुंदरता।",
                })}
                className="display-heading text-4xl leading-[1.02] text-white md:text-6xl"
              />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-white/90">
                <p>
                  {t({
                    en: "Living walls couple beauty with simplicity to create healthy, living works of art. They are composed of a variety of tropical plants grown hydroponically.",
                    fr: "Les murs végétaux allient beauté et simplicité pour créer des œuvres d'art vivantes et saines. Ils réunissent une variété de plantes tropicales cultivées en hydroponie.",
                    zh: "植物墙将美感与简约融为一体，成为健康而有生命力的艺术作品。它们由多种热带植物组成，采用水培栽培。",
                    es: "Los muros vegetales combinan belleza y simplicidad para crear obras de arte vivas y saludables. Están compuestos por una variedad de plantas tropicales cultivadas de forma hidropónica.",
                    pa: "ਜੀਵੰਤ ਕੰਧਾਂ ਸਾਦਗੀ ਨਾਲ ਸੁੰਦਰਤਾ ਨੂੰ ਜੋੜ ਕੇ ਸਿਹਤਮੰਦ, ਜੀਵਤ ਕਲਾ ਦੀਆਂ ਰਚਨਾਵਾਂ ਬਣਾਉਂਦੀਆਂ ਹਨ। ਇਹ ਕਈ ਤਰ੍ਹਾਂ ਦੇ ਟ੍ਰੌਪੀਕਲ ਪੌਦਿਆਂ ਤੋਂ ਬਣੀਆਂ ਹੁੰਦੀਆਂ ਹਨ ਜੋ ਹਾਈਡ੍ਰੋਪੋਨਿਕ ਤਰੀਕੇ ਨਾਲ ਉਗਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।",
                    ar: "تجمع الجدران الخضراء بين الجمال والبساطة لخلق أعمال فنية حية وصحية. وهي مكونة من مجموعة متنوعة من النباتات الاستوائية التي تُزرع مائيًا.",
                    hi: "लिविंग वॉल सुंदरता और सादगी को जोड़कर स्वस्थ, जीवंत कला कृतियाँ बनाती हैं। ये विभिन्न प्रकार के उष्णकटिबंधीय पौधों से बनी होती हैं जिन्हें हाइड्रोपोनिक तरीके से उगाया जाता है।",
                  })}
                </p>
                <p>
                  {t({
                    en: "Each living wall is custom made to satisfy our clients' dreams. We believe that bringing nature indoors should feel effortless — a seamless extension of your space and your vision.",
                    fr: "Chaque mur végétal est réalisé sur mesure pour concrétiser les rêves de nos clients. Nous croyons que faire entrer la nature à l'intérieur doit être sans effort — un prolongement naturel de votre espace et de votre vision.",
                    zh: "每一面植物墙都为客户的梦想量身定制。我们相信，把自然引入室内应当毫不费力——成为空间与愿景的自然延伸。",
                    es: "Cada muro vegetal se fabrica a medida para cumplir los sueños de nuestros clientes. Creemos que traer la naturaleza al interior debe sentirse sin esfuerzo — una extensión natural de su espacio y su visión.",
                    pa: "ਹਰ ਜੀਵੰਤ ਕੰਧ ਸਾਡੇ ਗਾਹਕਾਂ ਦੇ ਸੁਪਨਿਆਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਖਾਸ ਤੌਰ 'ਤੇ ਬਣਾਈ ਜਾਂਦੀ ਹੈ। ਸਾਡਾ ਮੰਨਣਾ ਹੈ ਕਿ ਕੁਦਰਤ ਨੂੰ ਘਰ ਦੇ ਅੰਦਰ ਲਿਆਉਣਾ ਸੌਖਾ ਮਹਿਸੂਸ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ — ਤੁਹਾਡੀ ਥਾਂ ਅਤੇ ਦ੍ਰਿਸ਼ਟੀ ਦਾ ਇੱਕ ਸਹਿਜ ਵਿਸਥਾਰ।",
                    ar: "يُصنع كل جدار أخضر خصيصًا لتحقيق أحلام عملائنا. نؤمن بأن إدخال الطبيعة إلى الداخل يجب أن يكون سلسًا — امتدادًا طبيعيًا لمساحتك ورؤيتك.",
                    hi: "हर लिविंग वॉल हमारे ग्राहकों के सपनों को पूरा करने के लिए विशेष रूप से बनाई जाती है। हमारा मानना है कि प्रकृति को घर के अंदर लाना सहज लगना चाहिए — आपकी जगह और दृष्टिकोण का एक निर्बाध विस्तार।",
                  })}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* Quote Form */}
      <section id="quote" className="relative overflow-hidden bg-sage-wash text-charcoal">
        <img
          src={cutoutCoaldale.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-[380px] w-[500px] object-contain opacity-55 md:h-[500px] md:w-[680px]"
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-forest">
              {t({ en: "Request a Quote", fr: "Demander un devis", zh: "索取报价", es: "Solicitar una cotización", pa: "ਕੋਟੇਸ਼ਨ ਦੀ ਬੇਨਤੀ ਕਰੋ", ar: "طلب عرض سعر", hi: "कोटेशन का अनुरोध करें" })}
            </p>
            <h2 className="display-heading text-4xl text-charcoal md:text-5xl lg:text-6xl">
              {t({
                en: "Ready to bring your wall to",
                fr: "Prêt à donner",
                zh: "准备好让您的墙面",
                es: "¿Listo para darle vida a",
                pa: "ਕੀ ਤੁਸੀਂ ਆਪਣੀ ਕੰਧ ਵਿੱਚ",
                ar: "هل أنت مستعد لإضفاء الحياة على",
                hi: "क्या आप अपनी वॉल में",
              })}{" "}
              <em>{t({ en: "life?", fr: "vie à votre mur ?", zh: "焕发生机了吗？", es: "su muro?", pa: "ਜ਼ਿੰਦਗੀ ਲਿਆਉਣ ਲਈ ਤਿਆਰ ਹੋ?", ar: "جدارك؟", hi: "जान डालने के लिए तैयार हैं?" })}</em>
            </h2>
            <p className="mt-6 text-charcoal/75">
              {t({
                en: "Tell us about your space and share a few photos if you have them. We'll get back to you within 1–2 business days with a tailored proposal.",
                fr: "Parlez-nous de votre espace et joignez quelques photos si vous en avez. Nous vous répondrons sous 1 à 2 jours ouvrables avec une proposition sur mesure.",
                zh: "告诉我们您的空间情况，如有照片也欢迎一并提供。我们将在 1–2 个工作日内回复您的专属方案。",
                es: "Cuéntenos sobre su espacio y comparta algunas fotos si las tiene. Le responderemos dentro de 1 a 2 días hábiles con una propuesta personalizada.",
                pa: "ਸਾਨੂੰ ਆਪਣੀ ਥਾਂ ਬਾਰੇ ਦੱਸੋ ਅਤੇ ਜੇ ਹੋਵੇ ਤਾਂ ਕੁਝ ਫੋਟੋਆਂ ਸਾਂਝੀਆਂ ਕਰੋ। ਅਸੀਂ 1–2 ਕਾਰੋਬਾਰੀ ਦਿਨਾਂ ਵਿੱਚ ਇੱਕ ਖਾਸ ਪ੍ਰਸਤਾਵ ਨਾਲ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
                ar: "أخبرنا عن مساحتك وشارك بعض الصور إن توفرت لديك. سنعاود التواصل معك خلال 1-2 يوم عمل بعرض مخصص.",
                hi: "हमें अपनी जगह के बारे में बताएं और यदि आपके पास हों तो कुछ तस्वीरें साझा करें। हम 1–2 कार्य दिवसों के भीतर एक अनुकूलित प्रस्ताव के साथ आपसे संपर्क करेंगे।",
              })}
            </p>
            <div className="mt-8 space-y-3 text-sm text-charcoal/75">
              <a href="tel:+16049971760" className="flex items-center gap-3 hover:text-charcoal">
                <Phone className="h-4 w-4 text-forest" aria-hidden />
                604-997-1760{" "}
                <span className="text-charcoal/50">
                  — {t({ en: "English", fr: "anglais", zh: "英语", es: "inglés", pa: "ਅੰਗਰੇਜ਼ੀ", ar: "الإنجليزية", hi: "अंग्रेज़ी" })}
                </span>
              </a>
              <a href="tel:+14038613732" className="flex items-center gap-3 hover:text-charcoal">
                <Phone className="h-4 w-4 text-forest" aria-hidden />
                403-861-3732{" "}
                <span className="text-charcoal/50">
                  — {t({ en: "French", fr: "français", zh: "法语", es: "francés", pa: "ਫ੍ਰੈਂਚ", ar: "الفرنسية", hi: "फ़्रेंच" })}
                </span>
              </a>
              <a href="mailto:verticaloxygen@gmail.com" className="flex items-center gap-3 hover:text-charcoal">
                <Mail className="h-4 w-4 text-forest" aria-hidden />
                verticaloxygen@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="rounded-2xl border border-sage/30 bg-white p-6 shadow-sm md:p-10 lg:col-span-3">
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-cream/10 text-cream">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-charcoal/75" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <a href="/" className="rounded-lg bg-cream px-4 py-3">
              <img
                src={logoHeader.url}
                alt="Vertical Oxygen"
                className="h-10 w-auto md:h-12"
              />
            </a>
            <p className="text-sm text-cream/60">
              {t({ en: "Custom living walls.", fr: "Murs végétaux sur mesure.", zh: "定制植物墙。", es: "Muros vegetales personalizados.", pa: "ਕਸਟਮ ਜੀਵੰਤ ਕੰਧਾਂ।", ar: "جدران خضراء مخصصة.", hi: "कस्टम लिविंग वॉल्स।" })}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/verticaloxygen/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vertical Oxygen on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://www.tiktok.com/@verticaloxygenltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vertical Oxygen on TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
