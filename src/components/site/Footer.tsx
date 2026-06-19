import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <p className="font-serif text-3xl tracking-[0.35em]">STARSSHOT</p>
          <p className="text-sm leading-relaxed text-ivory/70 max-w-sm">
            Timeless, romantic wedding photography for couples in Sydney and beyond.
          </p>
        </div>

        <div className="space-y-4">
          <p className="eyebrow !text-ivory/60">Explore</p>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><Link to="/" className="hover:text-champagne transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-champagne transition">About</Link></li>
            <li><Link to="/gallery" className="hover:text-champagne transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-champagne transition">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="eyebrow !text-ivory/60">Connect</p>
          <a href="mailto:hello@starsshot.studio" className="flex items-center gap-2 text-sm text-ivory/80 hover:text-champagne transition">
            <Mail size={15} /> hello@starsshot.studio
          </a>
          <div className="flex gap-4 pt-2">
            <a href="#" aria-label="Instagram" className="text-ivory/80 hover:text-champagne transition"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="text-ivory/80 hover:text-champagne transition"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Starsshot Photography. All rights reserved.</p>
          <p className="tracking-[0.25em] uppercase">Sydney · Australia</p>
        </div>
      </div>
    </footer>
  );
}
