import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

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
};

function isInternalHref(href: string) {
  return href.startsWith("/");
}

function NavLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (isInternalHref(href)) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function NavMenu({ menus }: { menus: MenuItem[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="hidden items-center gap-1 text-sm font-medium text-cream md:flex">
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
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 transition-colors hover:text-terra-light"
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
                className={`w-[min(92vw,32rem)] origin-top rounded-2xl bg-cream/95 p-3 shadow-2xl ring-1 ring-charcoal/10 backdrop-blur-md transition-all duration-200 ${
                  isOpen
                    ? "translate-y-0 scale-100 opacity-100"
                    : "-translate-y-1 scale-[0.98] opacity-0"
                }`}
              >
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}