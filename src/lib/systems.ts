import type { Tr } from "@/lib/i18n";
import diagramAquaponic from "../assets/diagrams/aquaponic-wall-diagram-v8.png";
import diagramHydroponic from "../assets/diagrams/hydroponic-wall-diagram-v6.png";

export type System = {
  key: string;
  title: Tr;
  tag: Tr;
  diagram: string;
  tagline: Tr;
  description: Tr;
  stats: { label: Tr; value: Tr }[];
  highlights: { text: Tr; color?: string }[];
};

export const DIAGRAM_LABEL: Tr = {
  en: "living wall diagram",
  fr: "schéma de mur végétal",
  zh: "植物墙示意图",
  es: "diagrama de muro vivo",
  pa: "ਲਿਵਿੰਗ ਵਾਲ ਡਾਇਗ੍ਰਾਮ",
  ar: "مخطط الجدار الحي",
  hi: "लिविंग वॉल आरेख",
};

export const SYSTEMS: System[] = [
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
    diagram: diagramHydroponic,
    tagline: {
      en: "lightweight, automatic efficient",
      fr: "léger, automatique et efficace",
      zh: "轻盈、自动、高效",
      es: "ligero, automático y eficiente",
      pa: "ਹਲਕਾ, ਆਟੋਮੈਟਿਕ ਅਤੇ ਕੁਸ਼ਲ",
      ar: "خفيف، تلقائي وفعال",
      hi: "हल्का, स्वचालित और कुशल",
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
          en: "Any indoor space",
          fr: "Tout espace intérieur",
          zh: "任何室内空间",
          es: "Cualquier espacio interior",
          pa: "ਕੋਈ ਵੀ ਅੰਦਰੂਨੀ ਥਾਂ",
          ar: "أي مساحة داخلية",
          hi: "कोई भी इनडोर स्थान",
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
        text: {
          en: "Soilless",
          fr: "Sans terre",
          zh: "无土栽培",
          es: "Sin tierra",
          pa: "ਮਿੱਟੀ ਰਹਿਤ",
          ar: "بدون تربة",
          hi: "मिट्टी रहित",
        },
        color: "bg-red-600",
      },
      {
        text: {
          en: "Recirculating",
          fr: "Circuit fermé",
          zh: "循环供水",
          es: "Recirculante",
          pa: "ਮੁੜ-ਸੰਚਾਰੀ",
          ar: "إعادة تدوير المياه",
          hi: "पुनर्चक्रित",
        },
        color: "bg-amber-500",
      },
      {
        text: {
          en: "Lightweight",
          fr: "Léger",
          zh: "轻量",
          es: "Ligero",
          pa: "ਹਲਕਾ",
          ar: "خفيف",
          hi: "हल्का",
        },
        color: "bg-red-600",
      },
      {
        text: {
          en: "Automatic & efficient",
          fr: "Automatique et efficace",
          zh: "自动高效",
          es: "Automático y eficiente",
          pa: "ਆਟੋਮੈਟਿਕ ਅਤੇ ਕੁਸ਼ਲ",
          ar: "تلقائي وفعال",
          hi: "स्वचालित और कुशल",
        },
        color: "bg-amber-500",
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
    diagram: diagramAquaponic,
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
          en: "Any indoor space",
          fr: "Tout espace intérieur",
          zh: "任何室内空间",
          es: "Cualquier espacio interior",
          pa: "ਕੋਈ ਵੀ ਅੰਦਰੂਨੀ ਥਾਂ",
          ar: "أي مساحة داخلية",
          hi: "कोई भी इनडोर स्थान",
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
        text: {
          en: "Live fish tank integrated at base",
          fr: "Aquarium vivant intégré à la base",
          zh: "底部集成活体鱼缸",
          es: "Acuario vivo integrado en la base",
          pa: "ਅਧਾਰ ਵਿੱਚ ਲਾਈਵ ਮੱਛੀ ਟੈਂਕ ਏਕੀਕ੍ਰਿਤ",
          ar: "حوض سمك حي مدمج في القاعدة",
          hi: "आधार में एकीकृत जीवित मछली टैंक",
        },
      },
      {
        text: {
          en: "Fully soilless",
          fr: "Entièrement sans terre",
          zh: "完全无土",
          es: "Completamente sin tierra",
          pa: "ਪੂਰੀ ਤਰ੍ਹਾਂ ਮਿੱਟੀ ਰਹਿਤ",
          ar: "بدون تربة تمامًا",
          hi: "पूर्णतः मिट्टी रहित",
        },
      },
      {
        text: {
          en: "Continuous nutrient cycle",
          fr: "Cycle nutritif continu",
          zh: "持续循环的养分体系",
          es: "Ciclo continuo de nutrientes",
          pa: "ਨਿਰੰਤਰ ਪੋਸ਼ਣ ਚੱਕਰ",
          ar: "دورة مغذيات مستمرة",
          hi: "निरंतर पोषक चक्र",
        },
      },
    ],
  },
];
