import { useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

type SubItem = {
  label: string;
  description?: string;
  href: string;
  image?: string;
};

type MenuItem = {
  label: string;
  href: string;
  items: SubItem[];
  description?: string;
  peek?: string;
};

function isInternalHref(href: string) {
  return href.startsWith("/");
}

function isHashHref(href: string) {
  return href.startsWith("#");
}

function NavLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (isInternalHref(href)) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const className =
    "block py-3 text-lg font-medium text-charcoal transition-colors hover:text-forest-deep";
  if (isInternalHref(href) || isHashHref(href)) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function NavMenu({ menus }: { menus: MenuItem[] }) {
  const t = useT();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop hover menus */}
      <div className="hidden items-center gap-1 text-sm font-medium text-charcoal md:flex">
        {menus.map((menu) => {
          const isOpen = open === menu.label;
          return (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpen(menu.label)}
              onMouseLeave={() => setOpen((v) => (v === menu.label ? null : v))}
            >
              <NavLink
                href={menu.href}
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 transition-colors hover:text-terra"
              >
                {menu.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </NavLink>

              {/* Panel */}
              <div
                className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 ${
                  isOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <div
                  className={`w-[min(92vw,32rem)] origin-top rounded-2xl bg-white/95 p-3 shadow-2xl ring-1 ring-charcoal/10 backdrop-blur-md transition-all duration-200 ${
                    isOpen
                      ? "translate-y-0 scale-100 opacity-100"
                      : "-translate-y-1 scale-[0.98] opacity-0"
                  }`}
                >
                  {menu.description && menu.items.length === 0 ? (
                    <div className="p-4">
                      <p className="font-serif text-lg leading-snug text-charcoal">
                        {menu.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                        {menu.description}
                      </p>
                      <NavLink
                        href={menu.href}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest-deep hover:underline"
                      >
                        {t({ en: "Open page →", fr: "Ouvrir la page →", zh: "打开页面 →", es: "Abrir página →", pa: "ਪੰਨਾ ਖੋਲ੍ਹੋ →", ar: "افتح الصفحة ←", hi: "पेज खोलें →" })}
                      </NavLink>
                    </div>
                  ) : menu.items.every((i) => !i.image && !i.description) ? (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 p-2 sm:grid-cols-3">
                      {menu.items.map((item) => (
                        <NavLink
                          key={item.label}
                          href={item.href}
                          className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-charcoal transition-colors hover:bg-charcoal/5 hover:text-forest-deep"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-forest-deep/60 transition-all group-hover:h-2 group-hover:w-2 group-hover:bg-forest-deep" />
                          <span className="truncate">{item.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-1">
                      {menu.items.map((item) => (
                        <NavLink
                          key={item.label}
                          href={item.href}
                          className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-charcoal/5"
                        >
                          {item.image ? (
                            <span
                              className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-cover bg-center ring-1 ring-charcoal/10"
                              style={{ backgroundImage: `url(${item.image})` }}
                              aria-hidden
                            />
                          ) : (
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-terra/10 font-serif text-lg text-terra">
                              {item.label[0]}
                            </span>
                          )}
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-semibold text-charcoal group-hover:text-terra">
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="block truncate text-xs text-charcoal/60">
                                {item.description}
                              </span>
                            )}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setMobileOpen((v) => !v)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/5 text-charcoal md:hidden"
        aria-label={
          mobileOpen
            ? t({ en: "Close menu", fr: "Fermer le menu", zh: "关闭菜单", es: "Cerrar menú", pa: "ਮੀਨੂ ਬੰਦ ਕਰੋ", ar: "إغلاق القائمة", hi: "मेनू बंद करें" })
            : t({ en: "Open menu", fr: "Ouvrir le menu", zh: "打开菜单", es: "Abrir menú", pa: "ਮੀਨੂ ਖੋਲ੍ਹੋ", ar: "فتح القائمة", hi: "मेनू खोलें" })
        }
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? (
          <X className="h-5 w-5" aria-hidden />
        ) : (
          <Menu className="h-5 w-5" aria-hidden />
        )}
      </button>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-24">
          <nav className="flex flex-1 flex-col gap-2">
            {menus.map((menu) => (
              <div key={menu.label} className="border-b border-charcoal/10">
                <MobileNavLink
                  href={menu.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {menu.label}
                </MobileNavLink>
                {menu.description && (
                  <p className="pb-3 text-sm leading-relaxed text-charcoal/60">
                    {menu.description}
                  </p>
                )}
                {menu.items.length > 0 && (
                  <div className="pb-3 pl-4">
                    {menu.items.map((item) => (
                      <MobileNavLink
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </MobileNavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <a
            href="#quote"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-forest-deep px-6 py-3 text-sm font-semibold text-cream"
          >
            {t({ en: "Get a Quote", fr: "Demander un devis", zh: "获取报价", es: "Obtener un presupuesto", pa: "ਕੋਟ ਪ੍ਰਾਪਤ ਕਰੋ", ar: "احصل على عرض سعر", hi: "कोटेशन प्राप्त करें" })}
          </a>
        </div>
      </div>
    </>
  );
}
