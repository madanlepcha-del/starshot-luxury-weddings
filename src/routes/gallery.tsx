import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/content/site";

type CategoryId = (typeof gallery.categories)[number]["id"];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Starshots Wedding Photography" },
      { name: "description", content: "A curated gallery of weddings, engagements, elopements and receptions captured across Sydney." },
      { property: "og:title", content: "Gallery — Starshots Wedding Photography" },
      { property: "og:description", content: "Weddings, engagements, elopements and receptions captured across Sydney." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<CategoryId>("all");
  const [open, setOpen] = useState<number | null>(null);

  const shown = filter === "all" ? gallery.images : gallery.images.filter((i) => i.category === filter);

  const move = (dir: number) => {
    if (open == null) return;
    setOpen((o) => (o! + dir + shown.length) % shown.length);
  };

  return (
    <Layout>
      <PageHero
        eyebrow={gallery.hero.eyebrow}
        title={gallery.hero.title}
        subtitle={gallery.hero.subtitle}
      />

      <Section className="!pt-16">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
          {gallery.categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-5 py-2.5 text-[0.7rem] tracking-[0.28em] uppercase border transition-all duration-300 ${
                filter === c.id
                  ? "bg-charcoal text-ivory border-charcoal"
                  : "bg-transparent text-charcoal/70 border-border hover:border-champagne hover:text-charcoal"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
          {shown.map((img, i) => (
            <button
              key={img.src + i}
              onClick={() => setOpen(i)}
              className="mb-4 md:mb-6 block w-full overflow-hidden group break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Section>

      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4 md:p-12 animate-fade-in">
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-5 right-5 md:top-8 md:right-8 text-ivory/80 hover:text-ivory transition">
            <X size={28} />
          </button>
          <button onClick={() => move(-1)} aria-label="Previous" className="absolute left-3 md:left-8 text-ivory/80 hover:text-ivory transition">
            <ChevronLeft size={36} />
          </button>
          <img src={shown[open].src} alt={shown[open].alt} className="max-h-[88vh] max-w-[88vw] object-contain shadow-2xl" />
          <button onClick={() => move(1)} aria-label="Next" className="absolute right-3 md:right-8 text-ivory/80 hover:text-ivory transition">
            <ChevronRight size={36} />
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/60 text-xs tracking-[0.3em] uppercase">
            {open + 1} / {shown.length}
          </p>
        </div>
      )}
    </Layout>
  );
}
