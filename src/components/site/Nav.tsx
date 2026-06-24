import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const useDark = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ivory/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link
          to="/"
          className={`font-serif text-2xl tracking-[0.35em] transition-colors ${
            scrolled || open ? "text-charcoal" : "text-ivory"
          }`}
        >
          STARSHOTS
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className={`text-[0.72rem] tracking-[0.3em] uppercase transition-colors ${
                scrolled ? "text-charcoal/80 hover:text-charcoal" : "text-ivory/90 hover:text-ivory"
              }`}
              activeProps={{ className: "!text-champagne" }}
              activeOptions={{ exact: it.to === "/" }}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <button
          className={`md:hidden ${scrolled || open ? "text-charcoal" : "text-ivory"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-ivory">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.3em] uppercase text-charcoal/80"
                activeProps={{ className: "!text-champagne" }}
                activeOptions={{ exact: it.to === "/" }}
              >
                {it.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
