import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sprout, Instagram } from "lucide-react";
import logoHeader from "../assets/logo-header.png.asset.json";
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
      zh: "我们回收所有建筑废料——木材、钢材、PVC 和包装材料。",
    },
    {
      key: "pots",
      en: "We recycle all plant pots (300 – 2,000 per living wall).",
      fr: "Nous recyclons tous les pots de plantes (300 à 2 000 par mur végétal).",
      zh: "我们回收所有花盆（每面植生墙 300 至 2,000 个）。",
    },
    {
      key: "local",
      en: "We source plants from local growers wherever possible.",
      fr: "Nous nous approvisionnons en plantes auprès de producteurs locaux dans la mesure du possible.",
      zh: "我们尽可能从本地种植者处采购植物。",
    },
    {
      key: "energy",
      en: "We specify low-energy pumps and LED grow lighting on every install.",
      fr: "Nous privilégions des pompes basse consommation et un éclairage horticole LED pour chaque installation.",
      zh: "我们在每次安装中都采用低能耗水泵和 LED 植物生长灯。",
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
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-charcoal/70 hover:text-forest-deep"
          >
            ← {t({ en: "Back home", fr: "Retour à l'accueil", zh: "返回首页" })}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-forest-deep/30 bg-forest-deep/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
          <Sprout className="h-3.5 w-3.5" aria-hidden />
          {t({ en: "Proudly woman-owned", fr: "Fièrement dirigée par une femme", zh: "自豪地由女性创立经营" })}
        </span>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-charcoal md:text-6xl">
          {t({
            en: "Committed to purifying the air in the spaces where you live and work.",
            fr: "Engagés à purifier l'air des espaces où vous vivez et travaillez.",
            zh: "致力于净化您生活与工作空间中的空气。",
          })}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70">
          {t({
            en: "Vertical Oxygen is a small, hands-on studio. Every wall we build is designed, engineered, and installed by the same two people you'll meet below.",
            fr: "Vertical Oxygen est un petit studio artisanal. Chaque mur que nous construisons est conçu, réalisé et installé par les deux mêmes personnes que vous découvrirez ci-dessous.",
            zh: "Vertical Oxygen 是一家精干且亲力亲为的工作室。我们建造的每一面墙都由您将在下方认识的这两位共同设计、工程实施和安装。",
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
              zh: "Nathalie Callede，Vertical Oxygen 的创始人兼负责人",
            })}
            loading="lazy"
            className="mb-6 aspect-[4/5] w-full rounded-2xl object-cover object-center ring-1 ring-charcoal/10"
          />
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-deep/10 text-forest-deep">
              <Leaf className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-deep">
              {t({ en: "Founder & Principal", fr: "Fondatrice et dirigeante", zh: "创始人兼负责人" })}
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl text-charcoal">Nathalie Callede</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
            {t({
              en: "Vertical Oxygen is the brainchild of principal Nathalie Callede. After seven cold winters in western Canada, her thoughts turned back to a childhood in Africa, where thirteen years exploring beautiful tropical landscapes gave her a lifelong love of plants.",
              fr: "Vertical Oxygen est né de l'esprit de sa dirigeante, Nathalie Callede. Après sept hivers rigoureux dans l'ouest du Canada, ses pensées se sont tournées vers son enfance en Afrique, où treize années passées à explorer de magnifiques paysages tropicaux lui ont inspiré un amour durable des plantes.",
              zh: "Vertical Oxygen 是负责人 Nathalie Callede 的心血结晶。在加拿大西部度过七个寒冬后，她的思绪回到了在非洲度过的童年——十三年探索美丽热带风光的经历，让她终生热爱植物。",
            })}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
            {t({
              en: "She travelled Malaysia, Vietnam, Indonesia, and Hawaii discovering the natural world, and her passion for ethnobotanicals led her to study at the École des Plantes in Paris under François Couplan, the world's leading ethnobotanical specialist.",
              fr: "Elle a parcouru la Malaisie, le Vietnam, l'Indonésie et Hawaï à la découverte du monde naturel, et sa passion pour l'ethnobotanique l'a conduite à étudier à l'École des Plantes à Paris auprès de François Couplan, le plus grand spécialiste mondial de l'ethnobotanique.",
              zh: "她曾游历马来西亚、越南、印度尼西亚和夏威夷，探索自然世界；对民族植物学的热爱促使她前往巴黎的 École des Plantes，师从世界顶尖民族植物学专家 François Couplan。",
            })}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
            {t({
              en: "Nathalie is a LEED AP, an interior landscape designer, and a member of Green Roofs for Healthy Cities. She has a strong belief in building a better, more sustainable world for our children.",
              fr: "Nathalie est certifiée LEED AP, paysagiste d'intérieur et membre de Green Roofs for Healthy Cities. Elle croit fermement en la construction d'un monde meilleur et plus durable pour nos enfants.",
              zh: "Nathalie 拥有 LEED AP 认证，是一名室内景观设计师，并且是 Green Roofs for Healthy Cities 的会员。她坚信要为我们的孩子建设一个更美好、更可持续的世界。",
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
              zh: "Tim Suddaby，Vertical Oxygen 的首席设计师兼施工经理",
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
                zh: "首席设计师兼施工经理",
              })}
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl text-charcoal">Tim Suddaby</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
            {t({
              en: "Tim is the chief designer and construction manager at Vertical Oxygen. He spent his childhood discovering the forests, meadows, rivers, and lakes of the lower mainland in BC, and has over 20 years of experience building high-performance homes and designing and installing renewable energy systems.",
              fr: "Tim est le concepteur en chef et directeur de la construction chez Vertical Oxygen. Il a passé son enfance à explorer les forêts, les prairies, les rivières et les lacs du Lower Mainland en Colombie-Britannique, et possède plus de 20 ans d'expérience dans la construction de maisons haute performance ainsi que dans la conception et l'installation de systèmes d'énergie renouvelable.",
              zh: "Tim 是 Vertical Oxygen 的首席设计师兼施工经理。他的童年是在探索不列颠哥伦比亚省下陆地区的森林、草地、河流与湖泊中度过的，并拥有超过 20 年建造高性能住宅、设计和安装可再生能源系统的经验。",
            })}
          </p>
          <blockquote className="mt-6 border-l-2 border-forest-deep/40 pl-4 font-serif text-lg italic leading-snug text-charcoal">
            {t({
              en: "\"Living walls work so well at cleaning air, capturing airborne chemicals and providing humidity that they should be a no-brainer in any public space — good health begins with the air we breathe.\"",
              fr: "« Les murs végétaux sont si efficaces pour purifier l'air, capter les substances chimiques en suspension et apporter de l'humidité qu'ils devraient s'imposer d'eux-mêmes dans tout espace public — une bonne santé commence par l'air que nous respirons. »",
              zh: "「植生墙在净化空气、捕捉空气中的化学物质以及增加湿度方面表现出色，理应成为任何公共空间的必然之选——良好的健康始于我们呼吸的空气。」",
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
            {t({ en: "Environmental policy", fr: "Politique environnementale", zh: "环境政策" })}
          </span>
          <h2 className="mt-3 font-serif text-4xl text-charcoal">
            {t({ en: "A small footprint, on purpose.", fr: "Une empreinte réduite, volontairement.", zh: "刻意追求，轻装前行。" })}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/75">
            {t({
              en: "At Vertical Oxygen we take our responsibility to the earth seriously. We take the following steps to keep our footprint as minimal as it can be:",
              fr: "Chez Vertical Oxygen, nous prenons notre responsabilité envers la planète très au sérieux. Voici les mesures que nous prenons pour réduire notre empreinte au minimum :",
              zh: "在 Vertical Oxygen，我们认真对待自己对地球的责任。为将我们的环境足迹降至最低，我们采取以下措施：",
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
          {t({ en: "Start a project with us.", fr: "Démarrez un projet avec nous.", zh: "与我们一起开启项目。" })}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/70">
          {t({
            en: "Every wall begins with a conversation about your space, your light, and the feeling you want people to walk into.",
            fr: "Chaque mur commence par une conversation sur votre espace, votre lumière et l'ambiance que vous souhaitez faire ressentir à vos visiteurs.",
            zh: "每一面墙都始于一次对话——关于您的空间、光线，以及您希望人们踏入时感受到的氛围。",
          })}
        </p>
        <Link
          to="/"
          hash="quote"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-deep px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep/90"
        >
          {t({ en: "Request a quote", fr: "Demander un devis", zh: "获取报价" })} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/verticaloxygen/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-forest-deep"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            {t({ en: "Follow us on Instagram", fr: "Suivez-nous sur Instagram", zh: "在 Instagram 上关注我们" })}
          </a>
          <a
            href="https://www.tiktok.com/@verticaloxygenltd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-forest-deep"
          >
            <TikTokIcon className="h-4 w-4" />
            {t({ en: "Follow us on TikTok", fr: "Suivez-nous sur TikTok", zh: "在 TikTok 上关注我们" })}
          </a>
        </div>
      </section>
    </main>
  );
}
