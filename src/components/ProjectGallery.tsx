import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { WordsReveal } from "@/components/WordsReveal";
import installCoaldale2 from "../assets/installs/coaldale-2-2.jpg.asset.json";
import delaSalleVideo from "../assets/videos/de-la-salle.mp4.asset.json";
import delaSallePoster from "../assets/videos/de-la-salle.jpg.asset.json";
import atriumWallVideo from "../assets/videos/atrium-wall-clip.mp4.asset.json";
import atriumWallPoster from "../assets/videos/atrium-wall-poster.jpg.asset.json";
import install5221 from "../assets/installs/img-5221.jpg.asset.json";
import installTorontoRes from "../assets/installs/img-toronto-residential.jpeg.asset.json";
import installConexus from "../assets/gallery/conexus-regina-atrium.png.asset.json";
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
import westinCalgaryHd from "../assets/gallery/westin-calgary-enhanced.png.asset.json";
import calgaryResidentialHd from "../assets/gallery/calgary-residential-enhanced.png.asset.json";
import modernOfficeHd from "../assets/gallery/modern-office-enhanced.png.asset.json";
import stantonHospitalHd from "../assets/gallery/stanton-hospital-enhanced.png.asset.json";
import conexusReginaHd from "../assets/gallery/conexus-regina-enhanced.png.asset.json";

export function ProjectGallery() {
  const t = useT();
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
  return (
      <section id="motion" className="relative overflow-hidden bg-cream text-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-14 grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-terra-light">
                {t({ en: "Project Gallery", fr: "Galerie de projets", zh: "项目图库", es: "Galería de proyectos", pa: "ਪ੍ਰੋਜੈਕਟ ਗੈਲਰੀ", ar: "معرض المشاريع", hi: "प्रोजेक्ट गैलरी" })}
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

          {(() => {
              const items = [
              {
                img: westinCalgary.url,
                key: "westin-calgary",
                title: t({ en: "The Westin, Calgary", fr: "Le Westin, Calgary", zh: "卡尔加里威斯汀酒店", es: "The Westin, Calgary", pa: "ਦ ਵੈਸਟਿਨ, ਕੈਲਗਰੀ", ar: "ذا ويستن، كالغاري", hi: "द वेस्टिन, कैलगरी" }),
                caption: t({ en: "Calgary, AB · Hotel lounge", fr: "Calgary, AB · Salon d'hôtel", zh: "阿尔伯塔省卡尔加里 · 酒店休息区", es: "Calgary, AB · Salón de hotel", pa: "ਕੈਲਗਰੀ, AB · ਹੋਟਲ ਲਾਊਂਜ", ar: "كالغاري، ألبرتا · ردهة فندق", hi: "कैलगरी, AB · होटल लाउंज" }),
                span: "md:col-span-8",
                ratio: "aspect-[4/3]",
              },
              {
                img: installTorontoRes.url,
                key: "toronto-residential",
                title: t({ en: "Toronto Residential", fr: "Résidence à Toronto", zh: "多伦多私人住宅", es: "Residencia en Toronto", pa: "ਟੋਰਾਂਟੋ ਰਿਹਾਇਸ਼", ar: "منزل في تورنتو", hi: "टोरंटो आवासीय" }),
                caption: t({ en: "Toronto, ON · Private residence", fr: "Toronto, ON · Résidence privée", zh: "安大略省多伦多 · 私人住宅", es: "Toronto, ON · Residencia privada", pa: "ਟੋਰਾਂਟੋ, ON · ਨਿੱਜੀ ਨਿਵਾਸ", ar: "تورنتو، أونتاريو · منزل خاص", hi: "टोरंटो, ON · निजी निवास" }),
                span: "md:col-span-4",
                ratio: "aspect-[4/5]",
              },
              {
                img: delaSallePoster.url,
                video: delaSalleVideo.url,
                key: "de-la-salle",
                title: t({ en: "De La Salle", fr: "De La Salle", zh: "De La Salle", es: "De La Salle", pa: "ਡੀ ਲਾ ਸਾਲ", ar: "دي لا سال", hi: "डे ला सैल" }),
                caption: t({ en: "School interior · Living wall in motion", fr: "Intérieur scolaire · Mur végétal en mouvement", zh: "校园室内 · 动态植物墙", es: "Interior escolar · Muro vivo en movimiento", pa: "ਸਕੂਲ ਅੰਦਰੂਨੀ · ਚਲਦੀ ਹੋਈ ਜੀਵੰਤ ਕੰਧ", ar: "داخل المدرسة · جدار حي متحرك", hi: "स्कूल आंतरिक · गतिमान लिविंग वॉल" }),
                span: "md:col-span-4",
                ratio: "aspect-[4/5]",
              },
              {
                img: calgaryResidential.url,
                key: "calgary-residential",
                title: t({ en: "Calgary Residential", fr: "Résidence à Calgary", zh: "卡尔加里私人住宅", es: "Residencia en Calgary", pa: "ਕੈਲਗਰੀ ਰਿਹਾਇਸ਼", ar: "منزل في كالغاري", hi: "कैलगरी आवासीय" }),
                caption: t({ en: "Calgary, AB · Full-height feature", fr: "Calgary, AB · Mur pleine hauteur", zh: "阿尔伯塔省卡尔加里 · 通高主题墙", es: "Calgary, AB · Muro de altura completa", pa: "ਕੈਲਗਰੀ, AB · ਪੂਰੀ-ਉਚਾਈ ਫੀਚਰ", ar: "كالغاري، ألبرتا · جدار بارتفاع كامل", hi: "कैलगरी, AB · पूर्ण-ऊँचाई फीचर" }),
                span: "md:col-span-5",
                ratio: "aspect-[3/4]",
              },
              {
                img: modernOffice.url,
                key: "modern-office",
                title: t({ en: "Modern Office Wall", fr: "Mur de bureau moderne", zh: "现代办公绿墙", es: "Muro de oficina moderna", pa: "ਆਧੁਨਿਕ ਦਫ਼ਤਰੀ ਕੰਧ", ar: "جدار مكتب حديث", hi: "आधुनिक ऑफिस वॉल" }),
                caption: t({ en: "Corporate interior · Mixed tropical planting", fr: "Intérieur d'entreprise · Plantation tropicale mixte", zh: "企业室内 · 混合热带植栽", es: "Interior corporativo · Plantación tropical mixta", pa: "ਕਾਰਪੋਰੇਟ ਅੰਦਰੂਨੀ · ਮਿਸ਼ਰਤ ਟ੍ਰੌਪੀਕਲ ਪੌਦੇ", ar: "داخل الشركة · زراعة استوائية متنوعة", hi: "कॉर्पोरेट इंटीरियर · मिश्रित उष्णकटिबंधीय पौधे" }),
                span: "md:col-span-7",
                ratio: "aspect-[4/3]",
              },
              {
                img: edmontonResidential.url,
                key: "edmonton-residential",
                title: t({ en: "Edmonton Residential", fr: "Résidence à Edmonton", zh: "埃德蒙顿私人住宅", es: "Residencia en Edmonton", pa: "ਐਡਮਿੰਟਨ ਰਿਹਾਇਸ਼", ar: "منزل في إدمونتون", hi: "एडमॉन्टन आवासीय" }),
                caption: t({ en: "Edmonton, AB · Stone niche wall", fr: "Edmonton, AB · Niche en pierre", zh: "阿尔伯塔省埃德蒙顿 · 石材壁龛绿墙", es: "Edmonton, AB · Nicho de piedra", pa: "ਐਡਮਿੰਟਨ, AB · ਪੱਥਰ ਦੀ ਨਿੱਚ", ar: "إدمونتون، ألبرتا · جدار في كوة حجرية", hi: "एडमॉन्टन, AB · पत्थर की निच" }),
                span: "md:col-span-5",
                ratio: "aspect-[3/4]",
              },
              {
                img: stantonHospital.url,
                key: "stanton-hospital",
                title: t({ en: "Stanton Hospital", fr: "Hôpital Stanton", zh: "Stanton 医院", es: "Hospital Stanton", pa: "ਸਟੈਂਟਨ ਹਸਪਤਾਲ", ar: "مستشفى ستانتون", hi: "स्टैंटन अस्पताल" }),
                caption: t({ en: "Yellowknife, NT · Corridor panels", fr: "Yellowknife, T.N.-O. · Panneaux de corridor", zh: "西北地区耶洛奈夫 · 走廊绿墙", es: "Yellowknife, NT · Paneles de corredor", pa: "ਯੈਲੋਨਾਈਫ, NT · ਕੌਰੀਡੋਰ ਪੈਨਲ", ar: "يلونايف · ألواح الممر", hi: "येलोनाइफ, NT · कॉरिडोर पैनल" }),
                span: "md:col-span-7",
                ratio: "aspect-[4/3]",
              },
              {
                img: installConexus.url,
                key: "conexus-regina",
                title: t({ en: "Conexus Credit Union", fr: "Conexus Credit Union", zh: "Conexus 信用联社", es: "Conexus Credit Union", pa: "ਕੋਨੈਕਸਸ ਕ੍ਰੈਡਿਟ ਯੂਨੀਅਨ", ar: "اتحاد كونيكس الائتماني", hi: "कोनेक्सस क्रेडिट यूनियन" }),
                caption: t({ en: "Regina, SK · Three-storey atrium wall", fr: "Regina, SK · Mur d'atrium de trois étages", zh: "萨斯喀彻温省里贾纳 · 三层中庭绿墙", es: "Regina, SK · Muro de atrio de tres pisos", pa: "ਰੇਗੀਨਾ, SK · ਤਿੰਨ-ਮੰਜ਼ਿਲ ਅਟਰੀਅਮ ਕੰਧ", ar: "ريجينا · جدار أتريوم من ثلاثة طوابق", hi: "रेजिना, SK · तीन-मंजिला एट्रियम वॉल" }),
                span: "md:col-span-4",
                ratio: "aspect-[3/4]",
              },
              {
                img: aquaponicFeature.url,
                key: "aquaponic-feature",
                span: "md:col-span-8",
                ratio: "aspect-[4/3]",
                title: t({ en: "Aquaponic Feature", fr: "Mur aquaponique", zh: "鱼菜共生主题墙", es: "Muro acuapónico", pa: "ਐਕੁਆਪੋਨਿਕ ਫੀਚਰ", ar: "جدار أكوابوني", hi: "एक्वापोनिक फीचर" }),
                caption: t({ en: "Living wall with integrated aquarium", fr: "Mur végétal avec aquarium intégré", zh: "植物墙与一体化水族箱", es: "Muro vivo con acuario integrado", pa: "ਏਕੀਕ੍ਰਿਤ ਐਕੁਏਰੀਅਮ ਵਾਲੀ ਜੀਵੰਤ ਕੰਧ", ar: "جدار حي مع حوض سمك مدمج", hi: "एकीकृत एक्वेरियम के साथ लिविंग वॉल" }),
              },
              {
                img: copperFrame.url,
                key: "copper-frame",
                title: t({ en: "Copper Frame Panel", fr: "Panneau à cadre de cuivre", zh: "铜框绿植panel", es: "Panel con marco de cobre", pa: "ਕਾਪਰ ਫਰੇਮ ਪੈਨਲ", ar: "لوحة بإطار نحاسي", hi: "कॉपर फ्रेम पैनल" }),
                caption: t({ en: "Residential accent · Custom copper surround", fr: "Accent résidentiel · Encadrement de cuivre sur mesure", zh: "住宅点缀 · 定制铜质外框", es: "Acento residencial · Marco de cobre a medida", pa: "ਰਿਹਾਇਸ਼ੀ ਐਕਸੈਂਟ · ਕਸਟਮ ਕਾਪਰ ਫਰੇਮ", ar: "لمسة سكنية · إطار نحاسي مخصص", hi: "आवासीय एक्सेंट · कस्टम कॉपर फ्रेम" }),
                span: "md:col-span-5",
                ratio: "aspect-[3/4]",
              },
              {
                img: redDeerInstall.url,
                key: "red-deer-install",
                title: t({ en: "Community & Process", fr: "Communauté et processus", zh: "社区与过程", es: "Comunidad y proceso", pa: "ਕਮਿਊਨਿਟੀ ਅਤੇ ਪ੍ਰਕਿਰਿਆ", ar: "المجتمع والعملية", hi: "समुदाय और प्रक्रिया" }),
                caption: t({ en: "Red Deer, AB · School install day", fr: "Red Deer, AB · Journée d'installation scolaire", zh: "阿尔伯塔省 Red Deer · 校园安装日", es: "Red Deer, AB · Día de instalación escolar", pa: "ਰੈੱਡ ਡੀਅਰ, AB · ਸਕੂਲ ਇੰਸਟਾਲ ਦਿਨ", ar: "ريد دير، ألبرتا · يوم التركيب المدرسي", hi: "रेड डियर, AB · स्कूल इंस्टॉल दिवस" }),
                span: "md:col-span-12",
                ratio: "",
              },
              {
                img: atriumWallPoster.url,
                video: atriumWallVideo.url,
                key: "atrium-wall",
                title: t({ en: "Atrium Feature Wall", fr: "Mur d'atrium signature", zh: "中庭主题绿墙", es: "Muro destacado de atrio", pa: "ਅਟਰੀਅਮ ਫੀਚਰ ਕੰਧ", ar: "جدار أتريوم مميز", hi: "एट्रियम फीचर वॉल" }),
                caption: t({ en: "Modern lobby · Living wall in motion", fr: "Hall moderne · Mur végétal en mouvement", zh: "现代大堂 · 动态植物墙", es: "Lobby moderno · Muro vivo en movimiento", pa: "ਆਧੁਨਿਕ ਲਾਬੀ · ਚਲਦੀ ਹੋਈ ਜੀਵੰਤ ਕੰਧ", ar: "ردهة حديثة · جدار حي متحرك", hi: "आधुनिक लॉबी · गतिमान लिविंग वॉल" }),
                span: "md:col-span-7",
                ratio: "aspect-[4/3]",
              },
              {
                img: wellnessRetail.url,
                key: "wellness-retail",
                title: t({ en: "Wellness Retail Wall", fr: "Mur de boutique bien-être", zh: "健康零售绿墙", es: "Muro de tienda de bienestar", pa: "ਵੈੱਲਨੈੱਸ ਰਿਟੇਲ ਕੰਧ", ar: "جدار متجر العافية", hi: "वेलनेस रिटेल वॉल" }),
                caption: t({ en: "Retail interior · Signage set into planting", fr: "Intérieur commercial · Lettrage intégré à la végétation", zh: "零售室内 · 植栽嵌入式标识", es: "Interior comercial · Rótulo integrado en la vegetación", pa: "ਰਿਟੇਲ ਅੰਦਰੂਨੀ · ਪੌਦਿਆਂ ਵਿੱਚ ਸਾਈਨੇਜ", ar: "داخل المتجر · لافتة مدمجة في النباتات", hi: "रिटेल इंटीरियर · पौधों में लगा साइनेज" }),
                span: "md:col-span-4",
                ratio: "aspect-[4/5]",
              },
              {
                img: install5221.url,
                key: "reception",
                title: t({ en: "Reception Wall", fr: "Mur de réception", zh: "前台绿墙", es: "Muro de recepción", pa: "ਰਿਸੈਪਸ਼ਨ ਦੀਵਾਰ", ar: "جدار الاستقبال", hi: "रिसेप्शन वॉल" }),
                caption: t({ en: "Corporate office · Mixed tropical palette", fr: "Bureaux d'entreprise · Palette tropicale mixte", zh: "企业办公空间 · 混合热带植物配色", es: "Oficina corporativa · Paleta tropical mixta", pa: "ਕਾਰਪੋਰੇਟ ਦਫ਼ਤਰ · ਮਿਸ਼ਰਤ ਟ੍ਰੌਪੀਕਲ ਪੈਲੇਟ", ar: "مكتب الشركة · تشكيلة استوائية متنوعة", hi: "कॉर्पोरेट ऑफिस · मिश्रित उष्णकटिबंधीय पैलेट" }),
                span: "md:col-span-8",
                ratio: "aspect-[16/10]",
              },
              {
                key: "filler",
                span: "md:col-span-4",
                img: "",
                title: "",
                caption: "",
                ratio: "",
              },
              {
                img: installCoaldale2.url,
                key: "coaldale",
                title: t({ en: "Coaldale, Alberta", fr: "Coaldale, Alberta", zh: "阿尔伯塔省 Coaldale", es: "Coaldale, Alberta", pa: "ਕੋਲਡੇਲ, ਐਲਬਰਟਾ", ar: "كولديل، ألبرتا", hi: "कोलडेल, अल्बर्टा" }),
                caption: t({ en: "Community hall · Full-height install", fr: "Salle communautaire · Installation pleine hauteur", zh: "社区活动厅 · 通高安装", es: "Salón comunitario · Instalación de altura completa", pa: "ਕਮਿਊਨਿਟੀ ਹਾਲ · ਪੂਰੀ-ਉਚਾਈ ਇੰਸਟਾਲੇਸ਼ਨ", ar: "قاعة مجتمعية · تركيب بارتفاع كامل", hi: "कम्युनिटी हॉल · पूर्ण-ऊँचाई इंस्टॉलेशन" }),
                span: "md:col-span-5",
                ratio: "aspect-[4/3]",
              },
              {
                img: plantingDetail.url,
                key: "planting-detail",
                title: t({ en: "Planting Detail", fr: "Détail de plantation", zh: "植栽细节", es: "Detalle de plantación", pa: "ਪੌਦੇ ਦਾ ਵੇਰਵਾ", ar: "تفاصيل الزراعة", hi: "प्लांटिंग डिटेल" }),
                caption: t({ en: "Pothos and spider plant, cedar edge", fr: "Pothos et chlorophytum, bordure de cèdre", zh: "绿萝与吊兰 · 雪松边框", es: "Potos y cinta, borde de cedro", pa: "ਪੋਥੋਸ ਤੇ ਸਪਾਈਡਰ ਪਲਾਂਟ, ਸੀਡਰ ਕਿਨਾਰਾ", ar: "بوتس ونبات العنكبوت، حافة أرز", hi: "पोथोस और स्पाइडर प्लांट, सीडर किनारा" }),
                span: "md:col-span-7",
                ratio: "aspect-[4/3]",
              },
              {
                img: westinCalgaryHd.url,
                key: "westin-calgary-hd",
                title: t({ en: "The Westin, Calgary", fr: "Le Westin, Calgary", zh: "卡尔加里威斯汀酒店", es: "The Westin, Calgary", pa: "ਦ ਵੈਸਟਿਨ, ਕੈਲਗਰੀ", ar: "ذا ويستن، كالغاري", hi: "द वेस्टिन, कैलगरी" }),
                caption: t({ en: "Calgary, AB · Lounge detail", fr: "Calgary, AB · Détail du salon", zh: "阿尔伯塔省卡尔加里 · 休息区细节", es: "Calgary, AB · Detalle del salón", pa: "ਕੈਲਗਰੀ, AB · ਲਾਊਂਜ ਵੇਰਵਾ", ar: "كالغاري · تفاصيل الردهة", hi: "कैलगरी, AB · लाउंज डिटेल" }),
                span: "",
                ratio: "",
              },
              {
                img: calgaryResidentialHd.url,
                key: "calgary-residential-hd",
                title: t({ en: "Calgary Residential", fr: "Résidence à Calgary", zh: "卡尔加里私人住宅", es: "Residencia en Calgary", pa: "ਕੈਲਗਰੀ ਰਿਹਾਇਸ਼", ar: "منزل في كالغاري", hi: "कैलगरी आवासीय" }),
                caption: t({ en: "Calgary, AB · Interior feature", fr: "Calgary, AB · Mur signature", zh: "阿尔伯塔省卡尔加里 · 室内主题墙", es: "Calgary, AB · Muro destacado", pa: "ਕੈਲਗਰੀ, AB · ਅੰਦਰੂਨੀ ਫੀਚਰ", ar: "كالغاري · جدار داخلي مميز", hi: "कैलगरी, AB · इंटीरियर फीचर" }),
                span: "",
                ratio: "",
              },
              {
                img: modernOfficeHd.url,
                key: "modern-office-hd",
                title: t({ en: "Modern Office Wall", fr: "Mur de bureau moderne", zh: "现代办公绿墙", es: "Muro de oficina moderna", pa: "ਆਧੁਨਿਕ ਦਫ਼ਤਰੀ ਕੰਧ", ar: "جدار مكتب حديث", hi: "आधुनिक ऑफिस वॉल" }),
                caption: t({ en: "Corporate interior · Full-height planting", fr: "Intérieur d'entreprise · Plantation pleine hauteur", zh: "企业室内 · 通高植栽", es: "Interior corporativo · Plantación de altura completa", pa: "ਕਾਰਪੋਰੇਟ ਅੰਦਰੂਨੀ · ਪੂਰੀ-ਉਚਾਈ ਪੌਦੇ", ar: "داخل الشركة · زراعة بارتفاع كامل", hi: "कॉर्पोरेट इंटीरियर · पूर्ण-ऊँचाई प्लांटिंग" }),
                span: "",
                ratio: "",
              },
              {
                img: stantonHospitalHd.url,
                key: "stanton-hospital-hd",
                title: t({ en: "Stanton Hospital", fr: "Hôpital Stanton", zh: "Stanton 医院", es: "Hospital Stanton", pa: "ਸਟੈਂਟਨ ਹਸਪਤਾਲ", ar: "مستشفى ستانتون", hi: "स्टैंटन अस्पताल" }),
                caption: t({ en: "Yellowknife, NT · Second angle", fr: "Yellowknife, T.N.-O. · Second angle", zh: "西北地区耶洛奈夫 · 另一视角", es: "Yellowknife, NT · Segundo ángulo", pa: "ਯੈਲੋਨਾਈਫ, NT · ਦੂਜਾ ਕੋਣ", ar: "يلونايف · زاوية ثانية", hi: "येलोनाइफ, NT · दूसरा कोण" }),
                span: "",
                ratio: "",
              },
              {
                img: conexusReginaHd.url,
                key: "conexus-regina-hd",
                title: t({ en: "Conexus Credit Union", fr: "Conexus Credit Union", zh: "Conexus 信用联社", es: "Conexus Credit Union", pa: "ਕੋਨੈਕਸਸ ਕ੍ਰੈਡਿਟ ਯੂਨੀਅਨ", ar: "اتحاد كونيكس الائتماني", hi: "कोनेक्सस क्रेडिट यूनियन" }),
                caption: t({ en: "Regina, SK · Atrium detail", fr: "Regina, SK · Détail de l'atrium", zh: "萨斯喀彻温省里贾纳 · 中庭细节", es: "Regina, SK · Detalle del atrio", pa: "ਰੇਗੀਨਾ, SK · ਅਟਰੀਅਮ ਵੇਰਵਾ", ar: "ريجينا · تفاصيل الأتريوم", hi: "रेजिना, SK · एट्रियम डिटेल" }),
                span: "",
                ratio: "",
              },
              ];
              const AR: Record<string, number> = {
                "westin-calgary": 1.3333,
                "toronto-residential": 0.462,
                "de-la-salle": 0.5624,
                "calgary-residential": 0.75,
                "modern-office": 1.3333,
                "edmonton-residential": 0.75,
                "stanton-hospital": 1.3333,
                "conexus-regina": 0.75,
                "aquaponic-feature": 0.6667,
                "copper-frame": 0.6667,
                "red-deer-install": 1.5,
                "atrium-wall": 0.5625,
                "wellness-retail": 1.3333,
                reception: 1.3333,
                coaldale: 0.75,
                "planting-detail": 0.6641,
                "westin-calgary-hd": 1.3333,
                "calgary-residential-hd": 0.75,
                "modern-office-hd": 0.75,
                "stanton-hospital-hd": 1.3333,
                "conexus-regina-hd": 1.3333,
              };
              type GalleryItem = (typeof items)[number];
              const cols: GalleryItem[][] = Array.from({ length: galleryCols }, () => []);
              const heights: number[] = Array.from({ length: galleryCols }, () => 0);
              const filler = items.find((i) => i.key === "filler");
              if (filler) {
                const fi = galleryCols - 1;
                cols[fi].push(filler);
                heights[fi] += 1.15;
              }
              for (const it of items) {
                if (it.key === "filler") continue;
                let m = 0;
                for (let i = 1; i < galleryCols; i++) if (heights[i] < heights[m]) m = i;
                cols[m].push(it);
                heights[m] += 1 / (AR[it.key] ?? 1.3333) + 0.08;
              }
              const render = (p: GalleryItem) =>

              p.key === "filler" ? (
                <div key={p.key} className="mb-3 break-inside-avoid">
                  <div className="flex flex-col justify-between gap-6 bg-forest-deep p-5 text-cream ring-1 ring-charcoal/10 md:p-6">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-cream/70">
                      {t({ en: "Vertical Oxygen", fr: "Vertical Oxygen", zh: "Vertical Oxygen", es: "Vertical Oxygen", pa: "Vertical Oxygen", ar: "Vertical Oxygen", hi: "Vertical Oxygen" })}
                    </p>
                    <p className="text-2xl leading-[1.1] md:text-3xl">
                      {t({ en: "Designed, planted & maintained in Canada.", fr: "Conçu, planté et entretenu au Canada.", zh: "在加拿大设计、种植与维护。", es: "Diseñado, plantado y mantenido en Canadá.", pa: "ਕਨੇਡਾ ਵਿੱਚ ਡਿਜ਼ਾਈਨ, ਲਗਾਏ ਅਤੇ ਰੱਖ-ਰਖਾਅ ਕੀਤੇ ਗਏ।", ar: "مصمم ومزروع وصيانته في كندا.", hi: "कनाडा में डिज़ाइन, लगाए और मेंटेन किए गए।" })}
                    </p>
                    <p className="text-sm leading-snug text-cream/70">
                      {t({ en: "Every wall is planned, planted, and looked after by our Canadian team.", fr: "Chaque mur est planifié, planté et entretenu par notre équipe canadienne.", zh: "每一面墙都由我们的加拿大团队规划、种植与养护。", es: "Cada muro es planificado, plantado y cuidado por nuestro equipo canadiense.", pa: "ਹਰ ਕੰਧ ਸਾਡੀ ਕਨੇਡੀਅਨ ਟੀਮ ਦੁਆਰਾ ਯੋਜਨਾ, ਲਗਾਈ ਅਤੇ ਦੇਖਭਾਲ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।", ar: "كل جدار يتم تخطيطه وزراعته وصيانته من قبل فريقنا الكندي.", hi: "हर दीवार हमारी कनाडाई टीम द्वारा योजना, लगाई और देखभाल की जाती है।" })}
                    </p>
                  </div>
                </div>
              ) : p.key === "red-deer-install" ? (
                <div key={p.key} className="mb-3 break-inside-avoid">
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
                    className="group cursor-zoom-in border-2 border-forest-deep/30 bg-forest-deep/5 p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-deep"
                  >
                    <img
                      src={p.img}
                      alt={`${p.title} — ${p.caption}`}
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: String(AR[p.key] ?? 1.3333) }}
                      className="block h-auto w-full ring-1 ring-charcoal/10"
                    />
                    <figcaption className="pt-3">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-forest-deep">
                        {t({ en: "Behind the wall", fr: "Derrière le mur", zh: "绿墙背后", es: "Detrás del muro", pa: "ਕੰਧ ਦੇ ਪਿੱਛੇ", ar: "خلف الجدار", hi: "दीवार के पीछे" })}
                      </p>
                      <p className="mt-1 text-xl text-forest-deep md:text-2xl">{p.title}</p>
                      <p className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-charcoal/60">
                        {p.caption}
                      </p>
                    </figcaption>
                  </figure>
                </div>
              ) : (
              <div key={p.key} className="mb-3 break-inside-avoid">
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
                  style={{ aspectRatio: String(AR[p.key] ?? 1.3333) }}
                  className="group relative cursor-zoom-in overflow-hidden bg-charcoal/5 ring-1 ring-charcoal/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-deep"
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
                      className="block h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={p.img}
                      alt={`${p.title} — ${p.caption}`}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full object-cover"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent opacity-80" />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                    <p className="text-lg text-cream md:text-xl">
                      {p.title}
                    </p>
                    <p className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-cream/70">
                      {p.caption}
                    </p>
                  </figcaption>
                </figure>
              </div>
              );
              return (
                <div className="flex items-start gap-3">
                  {cols.map((c, i) => (
                    <div key={i} className="min-w-0 flex-1">
                      {c.map((p) => render(p))}
                    </div>
                  ))}
                </div>
              );
            })()}
        </div>

        {installShot && typeof document !== "undefined" && createPortal(
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
              className="absolute right-5 top-5 z-10 cursor-pointer rounded-full bg-cream/10 px-4 py-2 text-sm font-medium text-cream ring-1 ring-cream/25 transition-colors hover:bg-cream/20"
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
          </div>,
          document.body
        )}
      </section>
  );
}
