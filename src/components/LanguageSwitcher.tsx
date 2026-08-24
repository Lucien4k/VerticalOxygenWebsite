import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LANGS, useLang } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  const toggleMenu = () => {
    if (!open) {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) {
        setMenuPosition({
          top: rect.bottom + 8,
          left: Math.max(12, Math.min(rect.right - 160, window.innerWidth - 172)),
        });
      }
    }
    setOpen((value) => !value);
  };

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!ref.current?.contains(target) && !menuRef.current?.contains(target)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleMenu}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        title={current.label}
        className="inline-flex items-center gap-1.5 rounded-full bg-charcoal/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-charcoal/70 ring-1 ring-charcoal/10 transition-colors hover:text-charcoal"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
        </svg>
        <span>{current.short}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <ul
          ref={menuRef}
          role="listbox"
          style={{ top: menuPosition.top, left: menuPosition.left }}
          className="fixed z-[200] min-w-[10rem] overflow-hidden rounded-xl border border-charcoal/10 bg-white/95 py-1 shadow-xl backdrop-blur-md"
        >
          {LANGS.map((l) => {
            const active = l.code === lang;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-xs transition-colors ${
                    active
                      ? "bg-forest-deep text-cream"
                      : "text-charcoal/75 hover:bg-charcoal/5 hover:text-charcoal"
                  }`}
                >
                  <span className="font-semibold">{l.label}</span>
                  <span className={active ? "text-cream/70" : "text-charcoal/40"}>
                    {l.code.toUpperCase()}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>,
        document.body,
      )}
    </div>
  );
}