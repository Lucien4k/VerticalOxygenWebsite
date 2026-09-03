import { createFileRoute, Link } from "@tanstack/react-router";
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
import saunaPothos from "../assets/projects/sauna-pothos.jpg.asset.json";
import cafePlanter from "../assets/projects/cafe-planter.jpg.asset.json";
import curvedTropical from "../assets/projects/curved-tropical.jpg.asset.json";
import glenoraLobby from "../assets/projects/glenora-lobby.jpg.asset.json";
import coaldaleHall from "../assets/projects/coaldale-hall.png.asset.json";
import lushTropicalWall from "../assets/projects/lush-tropical-wall.jpg.asset.json";
import coaldaleFlowering from "../assets/projects/coaldale-flowering.jpg.asset.json";
import { Phone, Mail, MapPin, Leaf, ArrowRight, Instagram, X, ZoomIn, ChevronDown } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { LocationsMap } from "@/components/LocationsMap";
import { ClientLogos } from "@/components/ClientLogos";
import { NavMenu } from "@/components/NavMenu";
import { Parallax } from "@/components/Parallax";
import { WordsReveal } from "@/components/WordsReveal";

import { ScrollFrames } from "@/components/ScrollFrames";
import { FRAME_URLS } from "@/lib/frame-urls";
import { ScrollFramesSection } from "@/components/ScrollFramesSection";
import { HERO2_FRAME_URLS } from "@/lib/frame-urls-hero2";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useT, type Tr } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import installCoaldale2 from "../assets/installs/coaldale-2-2.jpg.asset.json";
import delaSalleVideo from "../assets/videos/de-la-salle.mp4.asset.json";
import delaSallePoster from "../assets/videos/de-la-salle.jpg.asset.json";
import atriumWallVideo from "../assets/videos/atrium-wall-clip.mp4.asset.json";
import atriumWallPoster from "../assets/videos/atrium-wall-poster.jpg.asset.json";

import install5221 from "../assets/installs/img-5221.jpg.asset.json";
import installTorontoRes from "../assets/installs/img-toronto-residential.jpeg.asset.json";
import installConexus from "../assets/gallery/conexus-regina-atrium.png.asset.json";
import install0628 from "../assets/installs/img-0628.jpg.asset.json";

import westinCalgary from "../assets/gallery/westin-calgary.webp.asset.json";
import calgaryResidential from "../assets/gallery/calgary-residential.webp.asset.json";
import modernOffice from "../assets/gallery/modern-office.webp.asset.json";
import edmontonResidential from "../assets/gallery/edmonton-residential.webp.asset.json";
import stantonHospital from "../assets/gallery/stanton-hospital.webp.asset.json";
import aquaponicFeature from "../assets/gallery/aquaponic-feature.webp.asset.json";
import copperFrame from "../assets/gallery/copper-frame.webp.asset.json";
import wellnessRetail from "../assets/gallery/wellness-retail.webp.asset.json";
import plantingDetail from "../assets/gallery/planting-detail.webp.asset.json";
import redDeerInstall from "../assets/gallery/red-deer-install.webp.asset.json";
import maintenanceAtriumWall from "../assets/maintenance-plant-guarantee.png.asset.json";
import westinCalgaryHd from "../assets/gallery/westin-calgary-enhanced.png.asset.json";
import calgaryResidentialHd from "../assets/gallery/calgary-residential-enhanced.png.asset.json";
import modernOfficeHd from "../assets/gallery/modern-office-enhanced.png.asset.json";
import stantonHospitalHd from "../assets/gallery/stanton-hospital-enhanced.png.asset.json";
import conexusReginaHd from "../assets/gallery/conexus-regina-enhanced.png.asset.json";

import woodTexture from "../assets/textures/wood-texture-v2.jpg.asset.json";
import logoHeader from "../assets/logo-header.png.asset.json";
import { SYSTEMS, DIAGRAM_LABEL } from "@/lib/systems";
import { ProjectGallery } from "@/components/ProjectGallery";
import { useIsMobile } from "@/hooks/use-mobile";

function MaintenanceSection() {
  const t = useT();
  return (
          <section id="maintenance" className="relative overflow-hidden bg-cream text-charcoal">
            <div className="mx-auto max-w-7xl px-6 pt-10 pb-20 md:pt-14 md:pb-28">
              <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
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
                    <em className="text-forest-deep not-italic">
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
                <Reveal delay={150}>
                  <figure className="relative overflow-hidden bg-charcoal/5 ring-1 ring-charcoal/10">
                    <img
                      src={maintenanceAtriumWall.url}
                      alt={t({ en: "Tall atrium living wall beside a wooden staircase", fr: "Grand mur végétal d'atrium à côté d'un escalier en bois", zh: "木质楼梯旁的高大中庭植物墙", es: "Gran muro vivo de atrio junto a una escalera de madera", pa: "ਲੱਕੜੀ ਦੀ ਪੌੜੀ ਦੇ ਨਾਲਅੱਡੇ ਉੱਚ ਅਟਰੀਅਮ ਦੀ ਜੀਵੰਤ ਕੰਧ", ar: "جدار حي مرتفع في الردهة بجانب درج خشبي", hi: "लकड़ी की सीढ़ियों के बगल में ऊंची एट्रियम लिविंग वॉल" })}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                </Reveal>
              </div>

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
                <div className="mt-10 flex flex-wrap items-center gap-4 pb-6 md:pb-8">
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

      
  );
}

// Short visual intro to both systems — full detail lives on the dedicated pages.
const SYSTEM_HERO: Record<string, string> = {
  hydroponic: modernOfficeHd.url,
  aquaponic: aquaponicFeature.url,
};

function SystemsShowcase() {
  const t = useT();

  return (
    <div id="work" className="relative mx-auto max-w-7xl px-6 py-16 md:py-28">
      <div className="mb-10 max-w-2xl md:mb-14">
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
          className="display-heading text-4xl leading-[1] text-charcoal md:text-7xl lg:text-[5.5rem]"
        />
        <p className="mt-5 max-w-xl text-charcoal/70 md:text-lg">
          {t({
            en: "Every Vertical Oxygen wall is built on one of two engineered systems.",
            fr: "Chaque mur Vertical Oxygen repose sur l'un de nos deux systèmes d'ingénierie.",
            zh: "每一面 Vertical Oxygen 绿墙都基于两套工程化系统之一。",
            es: "Cada muro de Vertical Oxygen se construye sobre uno de dos sistemas de ingeniería.",
            pa: "ਹਰ Vertical Oxygen ਕੰਧ ਦੋ ਇੰਜੀਨੀਅਰਡ ਸਿਸਟਮਾਂ ਵਿੱਚੋਂ ਇੱਕ ਉੱਤੇ ਬਣੀ ਹੁੰਦੀ ਹੈ।",
            ar: "كل جدار من Vertical Oxygen مبني على أحد نظامين هندسيين.",
            hi: "हर Vertical Oxygen दीवार दो इंजीनियर्ड सिस्टम में से एक पर बनी होती है।",
          })}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {SYSTEMS.map((sys, i) => (
          <Reveal key={sys.key} delay={i * 100}>
            <Link
              to={sys.key === "hydroponic" ? "/hydroponic" : "/aquaponic"}
              className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-charcoal/10 transition hover:ring-forest/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={SYSTEM_HERO[sys.key]}
                  alt={t(sys.title)}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/85">
                  {t(sys.tag)}
                </p>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-3xl text-charcoal md:text-4xl">{t(sys.title)}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-charcoal/70 md:text-base">
                  {t(sys.tagline)}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-cream transition group-hover:bg-charcoal md:text-sm">
                  {t({ en: "Explore", fr: "Explorer", zh: "了解", es: "Explorar", pa: "ਦੇਖੋ", ar: "استكشف", hi: "देखें" })} {t(sys.title)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
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

function MobileGalleryTeaser() {
  const t = useT();
  return (
    <section id="motion" className="bg-cream px-6 py-16 text-charcoal">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-terra-light">
        {t({ en: "Project Gallery", fr: "Galerie de projets", zh: "项目图库", es: "Galería de proyectos", pa: "ਪ੍ਰੋਜੈਕਟ ਗੈਲਰੀ", ar: "معرض المشاريع", hi: "प्रोजेक्ट गैलरी" })}
      </p>
      <h2 className="display-heading text-4xl leading-[1.05] text-charcoal">
        {t({ en: "Living, breathing installations.", fr: "Des installations vivantes qui respirent.", zh: "会呼吸的生命装置。", es: "Instalaciones vivas que respiran.", pa: "ਜੀਵੰਤ, ਸਾਹ ਲੈਂਦੀਆਂ ਸਥਾਪਨਾਵਾਂ।", ar: "تركيبات حية تتنفس.", hi: "जीवंत, सांस लेती इंस्टॉलेशन।" })}
      </h2>
      <div className="mt-5 overflow-hidden ring-1 ring-charcoal/10">
        <img
          src={westinCalgaryHd.url}
          alt={t({ en: "The Westin, Calgary living wall", fr: "Mur végétal du Westin, Calgary", zh: "卡尔加里威斯汀酒店植物墙", es: "Muro vivo en The Westin, Calgary", pa: "ਦ ਵੈਸਟਿਨ, ਕੈਲਗਰੀ ਲਿਵਿੰਗ ਵਾਲ", ar: "جدار حي في ذا ويستن، كالغاري", hi: "द वेस्टिन, कैलगरी लिविंग वॉल" })}
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>
      <p className="mt-5 text-charcoal/75">
        {t({ en: "Lobbies, offices and homes across Canada — see the full set of photos.", fr: "Halls, bureaux et maisons partout au Canada — découvrez toutes les photos.", zh: "遍布加拿大的大堂、办公室与住宅——查看全部照片。", es: "Vestíbulos, oficinas y hogares por todo Canadá: mira todas las fotos.", pa: "ਕਨੇਡਾ ਭਰ ਵਿੱਚ ਲਾਬੀਆਂ, ਦਫ਼ਤਰ ਅਤੇ ਘਰ — ਸਾਰੀਆਂ ਫੋਟੋਆਂ ਵੇਖੋ।", ar: "ردهات ومكاتب ومنازل في أنحاء كندا — شاهد جميع الصور.", hi: "कनाडा भर में लॉबी, कार्यालय और घर — सभी तस्वीरें देखें।" })}
      </p>
      <Link
        to="/gallery"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-sm font-semibold text-cream"
      >
        {t({ en: "View the gallery", fr: "Voir la galerie", zh: "查看图库", es: "Ver la galería", pa: "ਗੈਲਰੀ ਵੇਖੋ", ar: "عرض المعرض", hi: "गैलरी देखें" })}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </section>
  );
}

function Index() {
  const t = useT();
  const isMobile = useIsMobile();
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
  const [galleryCols, setGalleryCols] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setGalleryCols(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
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
  const philosophyRef = useRef<HTMLDivElement>(null);
  // Mobile-only: shrink the pinned hero inward (full-screen → ~90% width frame),
  // tied directly to scroll position so touch scrolling drives it.
  const heroShrinkRef = useRef<HTMLElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = heroShrinkRef.current;
      if (!el) return;
      if (!isMobile) {
        el.style.transform = "";
        el.style.borderRadius = "";
        return;
      }
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / (vh * 1.1)));
      const e = p * p * (3 - 2 * p); // smoothstep — slow in, slow out, no snapping
      el.style.transform = `scale(${1 - e * 0.1})`;
      el.style.borderRadius = `${e * 28}px`;
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
  }, [isMobile]);
  useEffect(() => {
    let raf = 0;
    if (isMobile) {
      if (philosophyRef.current) {
        philosophyRef.current.style.opacity = "1";
        philosophyRef.current.style.transform = "none";
      }
      return;
    }
    const secondHero = document.getElementById("second-hero");
    if (!secondHero) return;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const rect = secondHero.getBoundingClientRect();
      const total = secondHero.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 1;
      const progress = Math.min(1, Math.max(0, (p - 0.45) / 0.4));
      if (philosophyRef.current) {
        philosophyRef.current.style.opacity = String(progress);
        philosophyRef.current.style.transform = `translateY(${(1 - progress) * 80}px)`;
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
  }, [isMobile]);

  // Sticky overlap: Maintenance pins while the Systems panel slides over it,
  // receding (scale 100% → 97%, slight fade) over ~340px of scroll.
  const maintInnerRef = useRef<HTMLDivElement>(null);
  const maintStickyRef = useRef<HTMLDivElement>(null);
  const systemsPanelRef = useRef<HTMLElement>(null);
  useEffect(() => {
    let raf = 0;
    const RANGE = 340; // px of scroll over which the recede plays out
    const update = () => {
      raf = 0;
      const panel = systemsPanelRef.current;
      const inner = maintInnerRef.current;
      const sticky = maintStickyRef.current;
      if (!panel || !inner || !sticky) return;
      // Pin the maintenance section's bottom edge to the viewport bottom:
      // sticky "top" offset = viewport height minus the section's height.
      const h = inner.offsetHeight; // layout height, unaffected by the recede scale
      // Never push the sticky element down past the top of the viewport, or a
      // section taller than the screen leaves a blank band behind the panel.
      sticky.style.top = `${Math.min(0, window.innerHeight - h)}px`;
      const top = panel.getBoundingClientRect().top;
      const scrolled = Math.max(0, window.innerHeight - top);
      // The panel is never offset — it rises with normal scroll — so nothing
      // hangs over the section below once the transition has played out.
      panel.style.transform = "none";
      const p = Math.min(1, Math.max(0, scrolled / RANGE));
      const eased = 1 - Math.pow(1 - p, 2); // ease-out
      inner.style.transform = `scale(${1 - eased * 0.03})`;
      inner.style.opacity = String(1 - eased * 0.12);
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
  }, [isMobile]);
  return (
    <div className="min-h-screen bg-background">
      {/* Floating rounded top bars — hero video shows around them */}
      <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
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
              <a href="/" className="flex shrink-0 items-center">
                <img
                  src={logoHeader.url}
                  alt="Vertical Oxygen"
                  className="h-7 max-w-[140px] w-auto object-contain sm:h-8 md:h-9 md:max-w-none"
                />
              </a>
              <NavMenu
                menus={[
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
                    peek: t({ en: "Our Story", fr: "Notre histoire", zh: "我们的故事", es: "Nuestra historia", pa: "ਸਾਡੀ ਕਹਾਣੀ", ar: "قصتنا", hi: "हमारी कहानी" }),
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
                    peek: t({ en: "Technical Data", fr: "Données techniques", zh: "技术数据", es: "Datos técnicos", pa: "ਤਕਨੀਕੀ ਡਾਟਾ", ar: "البيانات الفنية", hi: "तकनीकी डेटा" }),
                  },
                ]}
              />
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
      {/* Fixed hero: stays pinned while the rest of the page scrolls up over it.
          On mobile it shrinks inward (scroll-tied) into a framed image first. */}
      <section ref={heroShrinkRef} className="fixed inset-x-0 top-0 z-0 h-screen overflow-hidden will-change-transform">
        {/* Background: scroll-driven frame sequence */}
        <div className="absolute inset-0">
          <ScrollFrames frames={FRAME_URLS} scrollRange={typeof window !== "undefined" ? window.innerHeight * 1.75 : 1750} onComplete={setHeroDone} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/50" aria-hidden />
        {/* Soft blur that intensifies as the page scrolls up over the hero */}
        <div ref={blurLayerRef} className="pointer-events-none absolute inset-0 z-[5] will-change-[backdrop-filter,opacity]" aria-hidden />


        {/* Hero content */}
        <div
          className="relative mx-auto flex h-full max-w-6xl items-end justify-end px-6 pt-40 pb-12 md:items-center md:pb-16 md:pt-44 transition-opacity duration-500"
          style={{ opacity: heroDone ? 0 : 1 }}
        >
          <div className="max-w-[min(18rem,80vw)] text-right md:max-w-2xl">
            <div className="reveal-fade is-visible">
              <span className="text-shadow-hero mb-4 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-cream backdrop-blur-sm">
                {t({ en: "Since 2011", fr: "Depuis 2011", zh: "始于 2011 年", es: "Desde 2011", pa: "2011 ਤੋਂ", ar: "منذ عام 2011", hi: "2011 से" })}
              </span>
              <p className="text-shadow-hero mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cream">
                {t({ en: "Custom Living Walls", fr: "Murs végétaux sur mesure", zh: "定制植物墙", es: "Muros vivos personalizados", pa: "ਕਸਟਮ ਲਿਵਿੰਗ ਵਾਲਾਂ", ar: "جدران حية مخصصة", hi: "कस्टम लिविंग वॉल" })}
              </p>
              <h1 className="display-heading-hero text-[2.75rem] leading-[0.95] text-cream md:text-7xl lg:text-8xl">
                {t({ en: "Living works", fr: "Des œuvres d'art", zh: "有生命的", es: "Obras vivas", pa: "ਜੀਵੰਤ ਰਚਨਾਵਾਂ", ar: "أعمال حية", hi: "जीवंत कृतियाँ" })}{" "}
                <span className="whitespace-nowrap">
                  {t({ en: "of art", fr: "vivantes", zh: "艺术作品", es: "de arte", pa: "ਕਲਾ ਦੀਆਂ", ar: "من الفن", hi: "कला की" })}
                </span>
              </h1>
              <p className="text-shadow-hero mt-6 ml-auto max-w-lg text-base font-medium leading-relaxed text-cream md:text-lg">
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
            <div className="mt-8 flex flex-wrap items-center justify-end gap-4 reveal is-visible md:mt-10" style={{ animationDelay: "200ms" }}>
              <a
                href="#work"
                className="slide-cta group relative inline-flex items-center rounded-full border border-cream/40 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream shadow-lg transition-colors hover:bg-cream/20 md:px-7 md:py-3.5"
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

      {/* Everything below scrolls up over the fixed hero. On mobile the spacer is
          taller so the hero's shrink-into-frame plays out before content rises. */}
      <div className={`relative z-10 bg-background ${isMobile ? "mt-[150vh]" : "mt-[175vh]"}`}>

      {/* Scroll-scrubbed panel sequence — second hero (desktop only) */}
      {!isMobile && (
        <ScrollFramesSection id="second-hero" frames={HERO2_FRAME_URLS} scrollLength={1.5} />
      )}

      <div
        ref={philosophyRef}
        className={`relative z-20 ${isMobile ? "" : "-mt-[40vh] will-change-[transform,opacity]"}`}
        style={isMobile ? undefined : { opacity: 0 }}
      >
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
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-14">
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
                    ar: "يُصنع كل جدار أخضر خصيصًا لتحقيق أحلام عملائنا. نؤمن بأن إدخال الطبيعة إلى الداخل يجب أن يكون سلسًا — امتدادًا طبيعًا لمساحتك ورؤيتك.",
                    hi: "हर लिविंग वॉल हमारे ग्राहकों के सपनों को पूरा करने के लिए विशेष रूप से बनाई जाती है। हमारा मानना है कि प्रकृति को घर के अंदर लाना सहज लगना चाहिए — आपकी जगह और दृष्टिकोण का एक निर्बाध विस्तार।",
                  })}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      </div>

      {/* Sticky overlap transition — Maintenance pins to the viewport bottom
          while the Systems panel rises and covers it like a card. */}
      <div className="relative">
        <div ref={maintStickyRef} className="sticky z-0">
          <div ref={maintInnerRef} className="origin-bottom will-change-transform">
            <MaintenanceSection />
          </div>
        </div>

        {/* Systems Showcase — replaces the old gallery with an interactive systems module */}
        <section ref={systemsPanelRef} id="work" className="relative z-20 -mt-[8vh] overflow-hidden rounded-t-[3rem] bg-cream pt-10 text-charcoal shadow-[0_-40px_80px_-40px_rgba(0,0,0,0.45)]">
          <SystemsShowcase />
        </section>
      </div>

      <SustainabilitySection />
      <div className="relative h-5 w-full overflow-hidden md:h-7" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${woodTexture.url})`, backgroundPositionX: "30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />
      </div>
      {isMobile ? <MobileGalleryTeaser /> : <ProjectGallery />}

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
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest">
                {t({ en: "Where We Grow", fr: "Où nous cultivons", zh: "我们的足迹", es: "Dónde crecemos", pa: "ਅਸੀਂ ਕਿੱਥੇ ਵਧਦੇ ਹਾਂ", ar: "أين ننمو", hi: "हम कहाँ बढ़ते हैं" })}
              </p>
              <WordsReveal
                as="h2"
                text={t({
                  en: "Living walls, coast to coast to coast.",
                  fr: "Des murs végétaux, d'un océan à l'autre.",
                  zh: "植物墙，横贯东西两岸，直达北冰洋。",
                  es: "Muros vivos, de costa a costa a costa.",
                  pa: "ਜੀਵੰਤ ਕੰਧਾਂ, ਤੱਟ ਤੋਂ ਤੱਟ ਤੋਂ ਤੱਟ ਤੱਕ।",
                  ar: "جدران حية، من ساحل إلى ساحل إلى ساحل.",
                  hi: "जीवंत दीवारें, तट से तट से तट तक।",
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



      {/* CTA */}
      {/* Quote Form */}
      <section id="quote" className="relative overflow-hidden bg-sage-wash text-charcoal">
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
