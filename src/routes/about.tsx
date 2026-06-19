import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { ArrowRight, Camera, Clock, Sparkles, BookHeart, Heart, type LucideIcon } from "lucide-react";
import { about_page } from "@/content/site";

const iconMap: Record<string, LucideIcon> = {
  Camera, Clock, Sparkles, BookHeart, Heart,
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Starshots Wedding Photography" },
      { name: "description", content: "Meet the storyteller behind Starshots — a Sydney wedding photographer devoted to natural, timeless imagery." },
      { property: "og:title", content: "About — Starshots Wedding Photography" },
      { property: "og:description", content: "A Sydney wedding photographer devoted to natural, timeless imagery." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow={about_page.hero.eyebrow}
        title={about_page.hero.title}
        subtitle={about_page.hero.subtitle}
      />

      {/* OUR STORY */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={about_page.story.image} alt={about_page.story.imageAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-5"><span className="hairline mr-3" />{about_page.story.eyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05]">
              {about_page.story.title}
            </h2>
            <div className="mt-8 space-y-5 text-charcoal/75 leading-relaxed">
              {about_page.story.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <Section className="bg-beige/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-5"><span className="hairline mr-3" />{about_page.philosophy.eyebrow}<span className="hairline ml-3" /></p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05]">
            {about_page.philosophy.title} <em className="italic text-champagne font-light">{about_page.philosophy.titleItalic}</em>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-10 text-left">
            {about_page.philosophy.pillars.map((p) => (
              <div key={p.title}>
                <h3 className="font-serif text-2xl text-charcoal mb-3">{p.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <Section>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-5"><span className="hairline mr-3" />{about_page.reasons.eyebrow}<span className="hairline ml-3" /></p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">{about_page.reasons.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {about_page.reasons.items.map((r) => {
            const Icon = iconMap[r.iconName] ?? Camera;
            return (
              <div key={r.title} className="bg-ivory p-10 hover:bg-beige/50 transition-colors duration-500">
                <Icon className="text-champagne mb-5" size={28} strokeWidth={1.2} />
                <h3 className="font-serif text-2xl text-charcoal mb-3">{r.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{r.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <img src={about_page.cta.backgroundImage} alt="" aria-hidden loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative max-w-2xl mx-auto px-6 text-center text-ivory">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">{about_page.cta.title}</h2>
          <Link to="/contact" className="mt-8 inline-flex btn-primary !bg-ivory !text-charcoal !border-ivory hover:!bg-transparent hover:!text-ivory">
            {about_page.cta.ctaLabel} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
