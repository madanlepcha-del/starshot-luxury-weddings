import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Carousel } from "@/components/site/Carousel";
import { Section, SectionHeader } from "@/components/site/Section";
import { ArrowRight, Quote } from "lucide-react";
import { home } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Starshots — Luxury Wedding Photography in Sydney" },
      {
        name: "description",
        content:
          "Starshots is a Sydney-based luxury wedding photography studio capturing timeless, romantic love stories across Australia.",
      },
      { property: "og:title", content: "Starshots — Luxury Wedding Photography in Sydney" },
      { property: "og:description", content: "Elegant wedding photography across Sydney and beyond." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={home.hero.image}
          alt={home.hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-ivory">
          <p className="eyebrow !text-ivory/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="hairline mr-3 !bg-ivory/70" />
            {home.hero.eyebrow}
            <span className="hairline ml-3 !bg-ivory/70" />
          </p>
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-5xl leading-[1.02] animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {home.hero.title}
            <br />
            <em className="italic text-champagne font-light">{home.hero.titleItalic}</em>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-ivory/85 max-w-xl font-light animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            {home.hero.subtitle}
          </p>
          <Link
            to="/contact"
            className="mt-12 group btn-primary !bg-ivory !text-charcoal !border-ivory hover:!bg-transparent hover:!text-ivory animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            {home.hero.ctaLabel}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 text-[10px] tracking-[0.4em] uppercase">
          Scroll
        </div>
      </section>

      {/* CAROUSEL */}
      <Section className="!pt-24 !pb-0">
        <SectionHeader
          eyebrow={home.carousel.eyebrow}
          title={home.carousel.title}
          intro={home.carousel.intro}
        />
      </Section>
      <div className="pb-24 md:pb-32">
        <Carousel items={[...home.carousel.items]} />
      </div>

      {/* ABOUT PREVIEW */}
      <Section className="!pt-0 bg-beige/30">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={home.aboutPreview.image}
              alt={home.aboutPreview.imageAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block w-40 h-40 border border-champagne" />
          </div>
          <div>
            <p className="eyebrow mb-5">
              <span className="hairline mr-3" />
              {home.aboutPreview.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              {home.aboutPreview.title}
            </h2>
            {home.aboutPreview.paragraphs.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "mt-8 text-charcoal/75 leading-relaxed text-lg" : "mt-5 text-charcoal/70 leading-relaxed"}
              >
                {p}
              </p>
            ))}
            <Link to="/about" className="btn-ghost mt-10 hover:gap-5">
              {home.aboutPreview.ctaLabel}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader eyebrow={home.testimonials.eyebrow} title={home.testimonials.title} />
        <div className="grid md:grid-cols-3 gap-8">
          {home.testimonials.items.map((t) => (
            <figure
              key={t.author}
              className="bg-ivory border border-border p-10 flex flex-col shadow-soft hover:shadow-elegant transition-shadow duration-500"
            >
              <Quote className="text-champagne mb-6" size={28} strokeWidth={1.2} />
              <blockquote className="font-serif text-xl md:text-[1.4rem] leading-[1.5] text-charcoal/90 flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <p className="font-serif text-lg text-charcoal">{t.author}</p>
                <p className="eyebrow mt-2 !text-[0.65rem]">{t.venue}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <img
          src={home.cta.backgroundImage}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-ivory">
          <p className="eyebrow !text-ivory/70 mb-6">
            <span className="hairline mr-3 !bg-champagne" />
            {home.cta.eyebrow}
            <span className="hairline ml-3 !bg-champagne" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
            {home.cta.title} <em className="italic text-champagne font-light">{home.cta.titleItalic}</em>
          </h2>
          <p className="mt-6 text-ivory/80 max-w-xl mx-auto">{home.cta.body}</p>
          <Link
            to="/contact"
            className="mt-10 inline-flex btn-primary !bg-ivory !text-charcoal !border-ivory hover:!bg-transparent hover:!text-ivory"
          >
            {home.cta.ctaLabel}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
