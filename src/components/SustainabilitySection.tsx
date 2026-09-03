import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { ChevronDown } from "lucide-react";
import tropicalDense from "../assets/projects/tropical-dense.jpg.asset.json";

export function SustainabilitySection() {
  const t = useT();
  const cards = [
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
  ];
  return (
          <section id="sustainability" className="relative overflow-hidden bg-charcoal text-cream">
            {/* Mobile — image-led and compact */}
            <div className="md:hidden">
              <div className="relative">
                <img
                  src={tropicalDense.url}
                  alt={t({ en: "Dense tropical living wall", fr: "Mur végétal tropical dense", zh: "茂密的热带植物墙", es: "Muro vivo tropical denso", pa: "ਗੱਢਾ ਉਸ਼ਨਕਟੀਬੰਧੀ ਜੀਵੰਤ ਕੰਧ", ar: "جدار حي استوائي كثيف", hi: "घनी उष्णकटिबंधीय लिविंग वॉल" })}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/10" aria-hidden />
                <div className="absolute inset-x-6 bottom-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-forest">
                    {t({ en: "Sustainability", fr: "Durabilité", zh: "可持续性", es: "Sostenibilidad", pa: "ਸਸਟੇਨੇਬਿਲਟੀ", ar: "الاستدامة", hi: "सस्टेनेबिलिटी" })}
                  </p>
                  <h2 className="display-heading text-3xl leading-[1.05]">
                    {t({
                      en: "Closed-loop recirculating water system.",
                      fr: "Système d'eau recirculée en boucle fermée.",
                      zh: "闭环循环水系统。",
                      es: "Sistema de agua recirculada en circuito cerrado.",
                      pa: "ਬੰਦ-ਲੂਪ ਰੀਸਰਕੁਲੇਟਿੰਗ ਪਾਣੀ ਦਾ ਸਿਸਟਮ।",
                      ar: "نظام مياه معاد تدويرها في دارة مغلقة.",
                      hi: "बंद-लूप पुनर्संचालित जल प्रणाली।",
                    })}
                  </h2>
                </div>
              </div>
              <div className="px-6 pb-10 pt-6">
                <p className="text-sm leading-relaxed text-cream/70">
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
                <div className="-mx-6 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1">
                  {cards.map((c) => (
                    <div key={c.key} className="w-[70%] shrink-0 snap-center rounded-2xl border border-cream/10 bg-cream/5 p-5">
                      <p className="font-serif text-3xl text-forest">{c.stat}</p>
                      <h3 className="mt-2 text-sm font-semibold text-cream">{c.title}</h3>
                    </div>
                  ))}
                </div>
                <details className="group mt-5 rounded-2xl border border-cream/10 bg-cream/5">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3.5 text-sm font-semibold text-cream [&::-webkit-details-marker]:hidden">
                    {t({ en: "Learn more", fr: "En savoir plus", zh: "了解更多", es: "Más información", pa: "ਹੋਰ ਜਾਣੋ", ar: "اعرف المزيد", hi: "और जानें" })}
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="space-y-4 px-5 pb-5">
                    {cards.map((c) => (
                      <div key={c.key}>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">{c.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-cream/65">{c.body}</p>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </div>
            {/* Desktop */}
            <div className="relative mx-auto hidden max-w-7xl px-6 py-20 md:block md:py-28">
              <Reveal>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
                  {t({ en: "Sustainability", fr: "Durabilité", zh: "可持续性", es: "Sostenibilidad", pa: "ਸਸਟੇਨੇਬਿਲਟੀ", ar: "الاستدامة", hi: "सस्टेनेबिलिटी" })}
                </p>
                <h2 className="display-heading max-w-3xl text-4xl leading-[1.05] md:text-6xl">
                  {t({
                    en: "Closed-loop recirculating water system.",
                    fr: "Système d'eau recirculée en boucle fermée.",
                    zh: "闭环循环水系统。",
                    es: "Sistema de agua recirculada en circuito cerrado.",
                    pa: "ਬੰਦ-ਲੂਪ ਰੀਸਰਕੁਲੇਟਿੰਗ ਪਾਣੀ ਦਾ ਸਿਸਟਮ।",
                    ar: "نظام مياه معاد تدويرها في دارة مغلقة.",
                    hi: "बंद-लूप पुनर्संचालित जल प्रणाली।",
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
                {cards.map((c, i) => (
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

      
  );
}
