import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sprout, Instagram, Recycle } from "lucide-react";
import logoHeader from "../assets/logo-header.png.asset.json";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import nathaliePhoto from "../assets/team/nathalie.jpg.asset.json";
import timPhoto from "../assets/team/tim.jpg.asset.json";
import { useT } from "@/lib/i18n";

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
  const t = useT();

  const policyItems = [
    {
      key: "waste",
      en: "We recycle all construction waste — wood, steel, PVC, and packaging.",
      fr: "Nous recyclons tous les déchets de construction — bois, acier, PVC et emballages.",
      zh: "我们回收所有建筑废料——木材、钢材、PVC 和包装材料。", es: "Reciclamos todos los residuos de construcción: madera, acero, PVC y embalajes.", pa: "ਅਸੀਂ ਸਾਰੇ ਉਸਾਰੀ ਦੇ ਕੂੜੇ ਨੂੰ ਰੀਸਾਈਕਲ ਕਰਦੇ ਹਾਂ — ਲੱਕੜ, ਸਟੀਲ, PVC, ਅਤੇ ਪੈਕੇਜਿੰਗ।", ar: "نعيد تدوير جميع نفايات البناء — الخشب والفولاذ والبي في سي والتغليف.", hi: "हम सभी निर्माण अपशिष्ट को रीसायकल करते हैं — लकड़ी, स्टील, PVC, और पैकेजिंग।",
    },
    {
      key: "pots",
      en: "We recycle all plant pots (300 – 2,000 per living wall).",
      fr: "Nous recyclons tous les pots de plantes (300 à 2 000 par mur végétal).",
      zh: "我们回收所有花盆（每面植生墙 300 至 2,000 个）。", es: "Reciclamos todas las macetas (300 a 2000 por muro vegetal).", pa: "ਅਸੀਂ ਸਾਰੇ ਪੌਦਿਆਂ ਦੇ ਗਮਲੇ ਰੀਸਾਈਕਲ ਕਰਦੇ ਹਾਂ (ਪ੍ਰਤੀ ਲਿਵਿੰਗ ਵਾਲ 300 – 2,000)।", ar: "نعيد تدوير جميع أصص النباتات (300 – 2000 لكل جدار حي).", hi: "हम सभी पौध गमलों को रीसायकल करते हैं (प्रति लिविंग वॉल 300 – 2,000)।",
    },
    {
      key: "local",
      en: "We source plants from local growers wherever possible.",
      fr: "Nous nous approvisionnons en plantes auprès de producteurs locaux dans la mesure du possible.",
      zh: "我们尽可能从本地种植者处采购植物。", es: "Obtenemos plantas de cultivadores locales siempre que sea posible.", pa: "ਅਸੀਂ ਜਿੱਥੇ ਵੀ ਸੰਭਵ ਹੋਵੇ ਸਥਾਨਕ ਉਤਪਾਦਕਾਂ ਤੋਂ ਪੌਦੇ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹਾਂ।", ar: "نحصل على النباتات من مزارعين محليين كلما أمكن ذلك.", hi: "जहाँ भी संभव हो, हम स्थानीय उत्पादकों से पौधे प्राप्त करते हैं।",
    },
    {
      key: "energy",
      en: "We specify low-energy pumps and LED grow lighting on every install.",
      fr: "Nous privilégions des pompes basse consommation et un éclairage horticole LED pour chaque installation.",
      zh: "我们在每次安装中都采用低能耗水泵和 LED 植物生长灯。", es: "Especificamos bombas de bajo consumo e iluminación de cultivo LED en cada instalación.", pa: "ਅਸੀਂ ਹਰ ਸਥਾਪਨਾ 'ਤੇ ਘੱਟ-ਊਰਜਾ ਪੰਪ ਅਤੇ LED ਗ੍ਰੋ ਲਾਈਟਿੰਗ ਨਿਰਧਾਰਤ ਕਰਦੇ ਹਾਂ।", ar: "نحدد مضخات منخفضة الطاقة وإضاءة نمو LED في كل تركيب.", hi: "हम हर इंस्टॉलेशन में कम-ऊर्जा पंप और LED ग्रो लाइटिंग निर्दिष्ट करते हैं।",
    },
  ];

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* Top bar */}
      <header className="border-b border-charcoal/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center">
            <img
              src={logoHeader.url}
              alt="Vertical Oxygen"
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm font-medium text-charcoal/70 hover:text-forest-deep"
            >
              ← {t({ en: "Back home", fr: "Retour à l'accueil", zh: "返回首页", es: "Volver al inicio", pa: "ਘਰ ਵਾਪਸ", ar: "العودة إلى الرئيسية", hi: "होम पर वापस" })}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-forest-deep/30 bg-forest-deep/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
          <Sprout className="h-3.5 w-3.5" aria-hidden />
          {t({ en: "Proudly woman-owned", fr: "Fièrement dirigée par une femme", zh: "自豪地由女性创立经营", es: "Orgullosamente propiedad de una mujer", pa: "ਮਾਣ ਨਾਲ ਔਰਤ-ਮਲਕੀਅਤ", ar: "مملوكة لامرأة بكل فخر", hi: "गर्व से महिला-स्वामित्व वाली" })}
        </span>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-charcoal md:text-6xl">
          {t({
            en: "Committed to purifying the air in the spaces where you live and work.",
            fr: "Engagés à purifier l'air des espaces où vous vivez et travaillez.",
            zh: "致力于净化您生活与工作空间中的空气。", es: "Comprometidos con purificar el aire en los espacios donde vives y trabajas.", pa: "ਉਹਨਾਂ ਥਾਵਾਂ ਦੀ ਹਵਾ ਨੂੰ ਸ਼ੁੱਧ ਕਰਨ ਲਈ ਵਚਨਬੱਧ ਜਿੱਥੇ ਤੁਸੀਂ ਰਹਿੰਦੇ ਅਤੇ ਕੰਮ ਕਰਦੇ ਹੋ।", ar: "ملتزمون بتنقية الهواء في الأماكن التي تعيش وتعمل فيها.", hi: "उन स्थानों की हवा को शुद्ध करने के लिए प्रतिबद्ध जहाँ आप रहते और काम करते हैं।",
          })}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70">
          {t({
            en: "Vertical Oxygen is a small, hands-on studio. Every wall we build is designed, engineered, and installed by the same two people you'll meet below.",
            fr: "Vertical Oxygen est un petit studio artisanal. Chaque mur que nous construisons est conçu, réalisé et installé par les deux mêmes personnes que vous découvrirez ci-dessous.",
            zh: "Vertical Oxygen 是一家精干且亲力亲为的工作室。我们建造的每一面墙都由您将在下方认识的这两位共同设计、工程实施和安装。", es: "Vertical Oxygen es un pequeño estudio práctico. Cada muro que construimos es diseñado, ingenierizado e instalado por las mismas dos personas que conocerás a continuación.", pa: "Vertical Oxygen ਇੱਕ ਛੋਟਾ, ਹੈਂਡਸ-ਆਨ ਸਟੂਡੀਓ ਹੈ। ਅਸੀਂ ਜੋ ਵੀ ਕੰਧ ਬਣਾਉਂਦੇ ਹਾਂ ਉਹ ਹੇਠਾਂ ਦਿੱਤੇ ਉਨ੍ਹਾਂ ਦੋ ਲੋਕਾਂ ਦੁਆਰਾ ਹੀ ਡਿਜ਼ਾਈਨ, ਇੰਜੀਨੀਅਰ ਅਤੇ ਸਥਾਪਿਤ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਜਿਨ੍ਹਾਂ ਨਾਲ ਤੁਸੀਂ ਹੇਠਾਂ ਮਿਲੋਗੇ।", ar: "Vertical Oxygen هو استوديو صغير عملي. كل جدار نبنيه يُصمم ويُهندس ويُركَّب من قبل نفس الشخصين اللذين ستتعرف عليهما أدناه.", hi: "Vertical Oxygen एक छोटा, हैंड्स-ऑन स्टूडियो है। हम जो भी दीवार बनाते हैं वह नीचे दिए गए उन्हीं दो लोगों द्वारा डिज़ाइन, इंजीनियर और स्थापित की जाती है जिनसे आप मिलेंगे।",
          })}
        </p>
      </section>

      {/* Founders */}
      <section className="mx-auto grid max-w-5xl gap-10 px-6 pb-24 md:grid-cols-2">
        {/* Nathalie */}
        <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-charcoal/10">
          <img
            src={nathaliePhoto.url}
            alt={t({
              en: "Nathalie Callede, founder and principal of Vertical Oxygen",
              fr: "Nathalie Callede, fondatrice et dirigeante de Vertical Oxygen",
              zh: "Nathalie Callede，Vertical Oxygen 的创始人兼负责人", es: "Nathalie Callede, fundadora y directora principal de Vertical Oxygen", pa: "Nathalie Callede, Vertical Oxygen ਦੀ ਸੰਸਥਾਪਕ ਅਤੇ ਪ੍ਰਿੰਸੀਪਲ", ar: "ناتالي كاليد، مؤسِّسة ومديرة Vertical Oxygen الرئيسية", hi: "Nathalie Callede, Vertical Oxygen की संस्थापक और प्रधान",
            })}
            loading="lazy"
            className="mb-6 aspect-[4/5] w-full rounded-2xl object-cover object-center ring-1 ring-charcoal/10"
          />
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-deep/10 text-forest-deep">
              <Leaf className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
              {t({ en: "Founder & Principal", fr: "Fondatrice et dirigeante", zh: "创始人兼负责人", es: "Fundadora y directora principal", pa: "ਸੰਸਥਾਪਕ ਅਤੇ ਪ੍ਰਿੰਸੀਪਲ", ar: "المؤسِّسة والمديرة الرئيسية", hi: "संस्थापक और प्रधान" })}
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl text-charcoal">Nathalie Callede</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
            {t({
              en: "Vertical Oxygen is the brainchild of principal Nathalie Callede. After seven cold winters in western Canada, her thoughts turned back to a childhood in Africa, where thirteen years exploring beautiful tropical landscapes gave her a lifelong love of plants.",
              fr: "Vertical Oxygen est né de l'esprit de sa dirigeante, Nathalie Callede. Après sept hivers rigoureux dans l'ouest du Canada, ses pensées se sont tournées vers son enfance en Afrique, où treize années passées à explorer de magnifiques paysages tropicaux lui ont inspiré un amour durable des plantes.",
              zh: "Vertical Oxygen 是负责人 Nathalie Callede 的心血结晶。在加拿大西部度过七个寒冬后，她的思绪回到了在非洲度过的童年——十三年探索美丽热带风光的经历，让她终生热爱植物。", es: "Vertical Oxygen es la idea original de su directora principal, Nathalie Callede. Tras siete fríos inviernos en el oeste de Canadá, sus pensamientos volvieron a una infancia en África, donde trece años explorando hermosos paisajes tropicales le dieron un amor de por vida por las plantas.", pa: "Vertical Oxygen ਪ੍ਰਿੰਸੀਪਲ Nathalie Callede ਦੀ ਸੋਚ ਦੀ ਪੈਦਾਵਾਰ ਹੈ। ਪੱਛਮੀ ਕੈਨੇਡਾ ਵਿੱਚ ਸੱਤ ਠੰਡੀਆਂ ਸਰਦੀਆਂ ਬਿਤਾਉਣ ਤੋਂ ਬਾਅਦ, ਉਸਦੇ ਵਿਚਾਰ ਅਫਰੀਕਾ ਦੇ ਬਚਪਨ ਵੱਲ ਮੁੜੇ, ਜਿੱਥੇ ਖੂਬਸੂਰਤ ਖੰਡੀ ਲੈਂਡਸਕੇਪਾਂ ਦੀ ਖੋਜ ਕਰਦਿਆਂ ਤੇਰ੍ਹਾਂ ਸਾਲਾਂ ਨੇ ਉਸਨੂੰ ਪੌਦਿਆਂ ਲਈ ਜੀਵਨ ਭਰ ਦਾ ਪਿਆਰ ਦਿੱਤਾ।", ar: "Vertical Oxygen هو ثمرة أفكار المديرة الرئيسية ناتالي كاليد. بعد سبعة شتاءات باردة في غرب كندا، عادت أفكارها إلى طفولتها في أفريقيا، حيث منحتها ثلاثة عشر عاماً من استكشاف المناظر الطبيعية الاستوائية الجميلة حباً دائماً للنباتات.", hi: "Vertical Oxygen प्रधान नथाली कैलेड की मानसिक उपज है। पश्चिमी कनाडा में सात ठंडी सर्दियाँ बिताने के बाद, उनके विचार अफ्रीका में बिताए बचपन की ओर लौटे, जहाँ खूबसूरत उष्णकटिबंधीय परिदृश्यों की खोज में बिताए तेरह वर्षों ने उन्हें पौधों के प्रति आजीवन प्रेम दिया।",
            })}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
            {t({
              en: "She travelled Malaysia, Vietnam, Indonesia, and Hawaii discovering the natural world, and her passion for ethnobotanicals led her to study at the École des Plantes in Paris under François Couplan, the world's leading ethnobotanical specialist.",
              fr: "Elle a parcouru la Malaisie, le Vietnam, l'Indonésie et Hawaï à la découverte du monde naturel, et sa passion pour l'ethnobotanique l'a conduite à étudier à l'École des Plantes à Paris auprès de François Couplan, le plus grand spécialiste mondial de l'ethnobotanique.",
              zh: "她曾游历马来西亚、越南、印度尼西亚和夏威夷，探索自然世界；对民族植物学的热爱促使她前往巴黎的 École des Plantes，师从世界顶尖民族植物学专家 François Couplan。", es: "Viajó por Malasia, Vietnam, Indonesia y Hawái descubriendo el mundo natural, y su pasión por la etnobotánica la llevó a estudiar en la École des Plantes de París con François Couplan, el principal especialista mundial en etnobotánica.", pa: "ਉਸਨੇ ਕੁਦਰਤੀ ਸੰਸਾਰ ਦੀ ਖੋਜ ਕਰਦੇ ਹੋਏ ਮਲੇਸ਼ੀਆ, ਵੀਅਤਨਾਮ, ਇੰਡੋਨੇਸ਼ੀਆ, ਅਤੇ ਹਵਾਈ ਦੀ ਯਾਤਰਾ ਕੀਤੀ, ਅਤੇ ਨਸਲੀ ਬਨਸਪਤੀ ਵਿਗਿਆਨ ਲਈ ਉਸਦੇ ਜਨੂੰਨ ਨੇ ਉਸਨੂੰ ਪੈਰਿਸ ਵਿੱਚ École des Plantes ਵਿੱਚ ਦੁਨੀਆ ਦੇ ਪ੍ਰਮੁੱਖ ਨਸਲੀ ਬਨਸਪਤੀ ਮਾਹਿਰ François Couplan ਦੇ ਅਧੀਨ ਪੜ੍ਹਨ ਲਈ ਪ੍ਰੇਰਿਤ ਕੀਤਾ।", ar: "سافرت إلى ماليزيا وفيتنام وإندونيسيا وهاواي لاكتشاف العالم الطبيعي، وقادها شغفها بعلم النبات العرقي إلى الدراسة في École des Plantes في باريس تحت إشراف فرانسوا كوبلان، أبرز متخصص عالمي في علم النبات العرقي.", hi: "उन्होंने प्राकृतिक दुनिया की खोज करते हुए मलेशिया, वियतनाम, इंडोनेशिया और हवाई की यात्रा की, और नृजाति-वनस्पति विज्ञान के प्रति उनके जुनून ने उन्हें पेरिस के École des Plantes में दुनिया के अग्रणी नृजाति-वनस्पति विशेषज्ञ फ्रांस्वा कूप्लां के अधीन अध्ययन करने के लिए प्रेरित किया।",
            })}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
            {t({
              en: "Nathalie is a LEED AP, an interior landscape designer, and a member of Green Roofs for Healthy Cities. She has a strong belief in building a better, more sustainable world for our children.",
              fr: "Nathalie est certifiée LEED AP, paysagiste d'intérieur et membre de Green Roofs for Healthy Cities. Elle croit fermement en la construction d'un monde meilleur et plus durable pour nos enfants.",
              zh: "Nathalie 拥有 LEED AP 认证，是一名室内景观设计师，并且是 Green Roofs for Healthy Cities 的会员。她坚信要为我们的孩子建设一个更美好、更可持续的世界。", es: "Nathalie es LEED AP, diseñadora de paisajismo interior y miembro de Green Roofs for Healthy Cities. Tiene una firme creencia en construir un mundo mejor y más sostenible para nuestros hijos.", pa: "Nathalie ਇੱਕ LEED AP, ਇੱਕ ਇੰਟੀਰੀਅਰ ਲੈਂਡਸਕੇਪ ਡਿਜ਼ਾਈਨਰ, ਅਤੇ Green Roofs for Healthy Cities ਦੀ ਮੈਂਬਰ ਹੈ। ਉਸਦਾ ਸਾਡੇ ਬੱਚਿਆਂ ਲਈ ਇੱਕ ਬਿਹਤਰ, ਵਧੇਰੇ ਟਿਕਾਊ ਸੰਸਾਰ ਬਣਾਉਣ ਵਿੱਚ ਪੱਕਾ ਵਿਸ਼ਵਾਸ ਹੈ।", ar: "ناتالي حاصلة على اعتماد LEED AP، ومصممة مناظر طبيعية داخلية، وعضو في Green Roofs for Healthy Cities. تؤمن إيماناً راسخاً ببناء عالم أفضل وأكثر استدامة لأطفالنا.", hi: "नथाली एक LEED AP, इंटीरियर लैंडस्केप डिज़ाइनर, और Green Roofs for Healthy Cities की सदस्य हैं। उन्हें हमारे बच्चों के लिए एक बेहतर, अधिक टिकाऊ दुनिया बनाने में दृढ़ विश्वास है।",
            })}
          </p>
        </article>

        {/* Tim */}
        <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-charcoal/10">
          <img
            src={timPhoto.url}
            alt={t({
              en: "Tim Suddaby, chief designer and construction manager at Vertical Oxygen",
              fr: "Tim Suddaby, concepteur en chef et directeur de la construction chez Vertical Oxygen",
              zh: "Tim Suddaby，Vertical Oxygen 的首席设计师兼施工经理", es: "Tim Suddaby, diseñador principal y gerente de construcción en Vertical Oxygen", pa: "Tim Suddaby, Vertical Oxygen ਦਾ ਮੁੱਖ ਡਿਜ਼ਾਈਨਰ ਅਤੇ ਉਸਾਰੀ ਮੈਨੇਜਰ", ar: "تيم سودابي، كبير المصممين ومدير الإنشاءات في Vertical Oxygen", hi: "टिम सडाबी, Vertical Oxygen में मुख्य डिज़ाइनर और निर्माण प्रबंधक",
            })}
            loading="lazy"
            className="mb-6 aspect-[4/5] w-full rounded-2xl object-cover object-center ring-1 ring-charcoal/10"
          />
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-deep/10 text-forest-deep">
              <Leaf className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
              {t({
                en: "Chief Designer & Construction Manager",
                fr: "Concepteur en chef et directeur de la construction",
                zh: "首席设计师兼施工经理", es: "Diseñador principal y gerente de construcción", pa: "ਮੁੱਖ ਡਿਜ਼ਾਈਨਰ ਅਤੇ ਉਸਾਰੀ ਮੈਨੇਜਰ", ar: "كبير المصممين ومدير الإنشاءات", hi: "मुख्य डिज़ाइनर और निर्माण प्रबंधक",
              })}
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl text-charcoal">Tim Suddaby</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
            {t({
              en: "Tim is the chief designer and construction manager at Vertical Oxygen. He spent his childhood discovering the forests, meadows, rivers, and lakes of the lower mainland in BC, and has over 20 years of experience building high-performance homes and designing and installing renewable energy systems.",
              fr: "Tim est le concepteur en chef et directeur de la construction chez Vertical Oxygen. Il a passé son enfance à explorer les forêts, les prairies, les rivières et les lacs du Lower Mainland en Colombie-Britannique, et possède plus de 20 ans d'expérience dans la construction de maisons haute performance ainsi que dans la conception et l'installation de systèmes d'énergie renouvelable.",
              zh: "Tim 是 Vertical Oxygen 的首席设计师兼施工经理。他的童年是在探索不列颠哥伦比亚省下陆地区的森林、草地、河流与湖泊中度过的，并拥有超过 20 年建造高性能住宅、设计和安装可再生能源系统的经验。", es: "Tim es el diseñador principal y gerente de construcción en Vertical Oxygen. Pasó su infancia descubriendo los bosques, prados, ríos y lagos del lower mainland en BC, y tiene más de 20 años de experiencia construyendo casas de alto rendimiento y diseñando e instalando sistemas de energía renovable.", pa: "Tim Vertical Oxygen ਦਾ ਮੁੱਖ ਡਿਜ਼ਾਈਨਰ ਅਤੇ ਉਸਾਰੀ ਮੈਨੇਜਰ ਹੈ। ਉਸਨੇ ਆਪਣਾ ਬਚਪਨ BC ਦੇ ਲੋਅਰ ਮੇਨਲੈਂਡ ਦੇ ਜੰਗਲਾਂ, ਮੈਦਾਨਾਂ, ਦਰਿਆਵਾਂ ਅਤੇ ਝੀਲਾਂ ਦੀ ਖੋਜ ਕਰਦਿਆਂ ਬਿਤਾਇਆ, ਅਤੇ ਉੱਚ-ਪ੍ਰਦਰਸ਼ਨ ਵਾਲੇ ਘਰ ਬਣਾਉਣ ਅਤੇ ਨਵਿਆਉਣਯੋਗ ਊਰਜਾ ਸਿਸਟਮ ਡਿਜ਼ਾਈਨ ਕਰਨ ਅਤੇ ਸਥਾਪਿਤ ਕਰਨ ਵਿੱਚ 20 ਸਾਲਾਂ ਤੋਂ ਵੱਧ ਦਾ ਤਜਰਬਾ ਰੱਖਦਾ ਹੈ।", ar: "تيم هو كبير المصممين ومدير الإنشاءات في Vertical Oxygen. أمضى طفولته يستكشف غابات ومروج وأنهار وبحيرات لور مينلاند في مقاطعة بريتيش كولومبيا، ولديه أكثر من 20 عاماً من الخبرة في بناء المنازل عالية الأداء وتصميم وتركيب أنظمة الطاقة المتجددة.", hi: "टिम Vertical Oxygen में मुख्य डिज़ाइनर और निर्माण प्रबंधक हैं। उन्होंने अपना बचपन BC के लोअर मेनलैंड के जंगलों, घास के मैदानों, नदियों और झीलों की खोज करते हुए बिताया, और उच्च-प्रदर्शन वाले घर बनाने तथा नवीकरणीय ऊर्जा प्रणालियों को डिज़ाइन और स्थापित करने में 20 वर्षों से अधिक का अनुभव रखते हैं।",
            })}
          </p>
          <blockquote className="mt-6 border-l-2 border-forest-deep/40 pl-4 font-serif text-lg italic leading-snug text-charcoal">
            {t({
              en: "\"Living walls work so well at cleaning air, capturing airborne chemicals and providing humidity that they should be a no-brainer in any public space — good health begins with the air we breathe.\"",
              fr: "« Les murs végétaux sont si efficaces pour purifier l'air, capter les substances chimiques en suspension et apporter de l'humidité qu'ils devraient s'imposer d'eux-mêmes dans tout espace public — une bonne santé commence par l'air que nous respirons. »",
              zh: "「植生墙在净化空气、捕捉空气中的化学物质以及增加湿度方面表现出色，理应成为任何公共空间的必然之选——良好的健康始于我们呼吸的空气。」", es: "\"Los muros vegetales funcionan tan bien limpiando el aire, captando químicos aéreos y aportando humedad que deberían ser una obviedad en cualquier espacio público: la buena salud comienza con el aire que respiramos.\"", pa: "\"ਲਿਵਿੰਗ ਵਾਲਸ ਹਵਾ ਸਾਫ਼ ਕਰਨ, ਹਵਾ ਵਿੱਚ ਮੌਜੂਦ ਰਸਾਇਣਾਂ ਨੂੰ ਫੜਨ ਅਤੇ ਨਮੀ ਪ੍ਰਦਾਨ ਕਰਨ ਵਿੱਚ ਇੰਨਾ ਵਧੀਆ ਕੰਮ ਕਰਦੀਆਂ ਹਨ ਕਿ ਉਹ ਕਿਸੇ ਵੀ ਜਨਤਕ ਥਾਂ ਵਿੱਚ ਸਪੱਸ਼ਟ ਚੋਣ ਹੋਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ — ਚੰਗੀ ਸਿਹਤ ਉਸ ਹਵਾ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ ਜੋ ਅਸੀਂ ਸਾਹ ਲੈਂਦੇ ਹਾਂ।\"", ar: "\"تعمل الجدران الحية بشكل جيد جداً في تنقية الهواء والتقاط المواد الكيميائية المحمولة جواً وتوفير الرطوبة لدرجة أنها ينبغي أن تكون خياراً بديهياً في أي مساحة عامة — الصحة الجيدة تبدأ بالهواء الذي نتنفسه.\"", hi: "\"लिविंग वॉल हवा को साफ करने, हवा में मौजूद रसायनों को पकड़ने और नमी प्रदान करने में इतनी अच्छी तरह काम करती हैं कि उन्हें किसी भी सार्वजनिक स्थान में स्वाभाविक विकल्प होना चाहिए — अच्छा स्वास्थ्य उस हवा से शुरू होता है जिसे हम सांस लेते हैं।\"",
            })}
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
            {t({ en: "Environmental policy", fr: "Politique environnementale", zh: "环境政策", es: "Política ambiental", pa: "ਵਾਤਾਵਰਣ ਨੀਤੀ", ar: "السياسة البيئية", hi: "पर्यावरण नीति" })}
          </span>
          <h2 className="mt-3 font-serif text-4xl text-charcoal">
            {t({ en: "A small footprint, on purpose.", fr: "Une empreinte réduite, volontairement.", zh: "刻意追求，轻装前行。", es: "Una huella reducida, a propósito.", pa: "ਇੱਕ ਛੋਟਾ ਪੈਰਾਂ ਦਾ ਨਿਸ਼ਾਨ, ਜਾਣਬੁੱਝ ਕੇ।", ar: "بصمة صغيرة، عن قصد.", hi: "एक छोटा पदचिह्न, जानबूझकर।" })}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/75">
            {t({
              en: "At Vertical Oxygen we take our responsibility to the earth seriously. We take the following steps to keep our footprint as minimal as it can be:",
              fr: "Chez Vertical Oxygen, nous prenons notre responsabilité envers la planète très au sérieux. Voici les mesures que nous prenons pour réduire notre empreinte au minimum :",
              zh: "在 Vertical Oxygen，我们认真对待自己对地球的责任。为将我们的环境足迹降至最低，我们采取以下措施：", es: "En Vertical Oxygen nos tomamos en serio nuestra responsabilidad con la Tierra. Tomamos las siguientes medidas para mantener nuestra huella lo más mínima posible:", pa: "Vertical Oxygen ਵਿਖੇ ਅਸੀਂ ਧਰਤੀ ਪ੍ਰਤੀ ਆਪਣੀ ਜ਼ਿੰਮੇਵਾਰੀ ਨੂੰ ਗੰਭੀਰਤਾ ਨਾਲ ਲੈਂਦੇ ਹਾਂ। ਅਸੀਂ ਆਪਣੇ ਪੈਰਾਂ ਦੇ ਨਿਸ਼ਾਨ ਨੂੰ ਜਿੰਨਾ ਸੰਭਵ ਹੋ ਸਕੇ ਘੱਟੋ-ਘੱਟ ਰੱਖਣ ਲਈ ਹੇਠ ਲਿਖੇ ਕਦਮ ਚੁੱਕਦੇ ਹਾਂ:", ar: "في Vertical Oxygen نأخذ مسؤوليتنا تجاه الأرض على محمل الجد. نتخذ الخطوات التالية لإبقاء بصمتنا في أدنى مستوى ممكن:", hi: "Vertical Oxygen में हम पृथ्वी के प्रति अपनी ज़िम्मेदारी को गंभीरता से लेते हैं। अपने पदचिह्न को यथासंभव न्यूनतम रखने के लिए हम निम्नलिखित कदम उठाते हैं:",
            })}
          </p>
          <ul className="mt-6 space-y-2 text-[15px] text-charcoal/80">
            {policyItems.map((item) => (
              <li key={item.key}>· {t(item)}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-serif text-4xl text-charcoal">
          {t({ en: "Start a project with us.", fr: "Démarrez un projet avec nous.", zh: "与我们一起开启项目。", es: "Inicia un proyecto con nosotros.", pa: "ਸਾਡੇ ਨਾਲ ਇੱਕ ਪ੍ਰੋਜੈਕਟ ਸ਼ੁਰੂ ਕਰੋ।", ar: "ابدأ مشروعاً معنا.", hi: "हमारे साथ एक प्रोजेक्ट शुरू करें।" })}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/70">
          {t({
            en: "Every wall begins with a conversation about your space, your light, and the feeling you want people to walk into.",
            fr: "Chaque mur commence par une conversation sur votre espace, votre lumière et l'ambiance que vous souhaitez faire ressentir à vos visiteurs.",
            zh: "每一面墙都始于一次对话——关于您的空间、光线，以及您希望人们踏入时感受到的氛围。", es: "Cada muro comienza con una conversación sobre tu espacio, tu luz y la sensación que quieres que la gente sienta al entrar.", pa: "ਹਰ ਕੰਧ ਤੁਹਾਡੀ ਥਾਂ, ਤੁਹਾਡੀ ਰੌਸ਼ਨੀ, ਅਤੇ ਉਸ ਭਾਵਨਾ ਬਾਰੇ ਗੱਲਬਾਤ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ ਜੋ ਤੁਸੀਂ ਚਾਹੁੰਦੇ ਹੋ ਕਿ ਲੋਕ ਅੰਦਰ ਆਉਣ ਵੇਲੇ ਮਹਿਸੂਸ ਕਰਨ।", ar: "يبدأ كل جدار بحوار حول مساحتك وإضاءتك والشعور الذي تريد أن يشعر به الناس عند الدخول.", hi: "हर दीवार आपके स्थान, आपकी रोशनी और उस अनुभूति के बारे में बातचीत से शुरू होती है जो आप चाहते हैं कि लोग प्रवेश करते समय महसूस करें।",
          })}
        </p>
        <Link
          to="/"
          hash="quote"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep/90"
        >
          {t({ en: "Request a quote", fr: "Demander un devis", zh: "获取报价", es: "Solicitar una cotización", pa: "ਹਵਾਲਾ ਮੰਗੋ", ar: "طلب عرض سعر", hi: "कोटेशन का अनुरोध करें" })} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/verticaloxygen/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-forest-deep"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            {t({ en: "Follow us on Instagram", fr: "Suivez-nous sur Instagram", zh: "在 Instagram 上关注我们", es: "Síguenos en Instagram", pa: "ਸਾਨੂੰ Instagram 'ਤੇ ਫਾਲੋ ਕਰੋ", ar: "تابعنا على إنستغرام", hi: "हमें Instagram पर फॉलो करें" })}
          </a>
          <a
            href="https://www.tiktok.com/@verticaloxygenltd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-forest-deep"
          >
            <TikTokIcon className="h-4 w-4" />
            {t({ en: "Follow us on TikTok", fr: "Suivez-nous sur TikTok", zh: "在 TikTok 上关注我们", es: "Síguenos en TikTok", pa: "ਸਾਨੂੰ TikTok 'ਤੇ ਫਾਲੋ ਕਰੋ", ar: "تابعنا على تيك توك", hi: "हमें TikTok पर फॉलो करें" })}
          </a>
        </div>
      </section>
    </main>
  );
}
