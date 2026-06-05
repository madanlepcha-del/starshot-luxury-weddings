import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Carousel } from "@/components/site/Carousel";
import { Section, SectionHeader } from "@/components/site/Section";
import { ArrowRight, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import feat1 from "@/assets/feat-1.jpg";
import feat2 from "@/assets/feat-2.jpg";
import feat3 from "@/assets/feat-3.jpg";
import feat4 from "@/assets/feat-4.jpg";
import feat5 from "@/assets/feat-5.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Starshot — Luxury Wedding Photography in Sydney" },
      {
        name: "description",
        content:
          "Starshot is a Sydney-based luxury wedding photography studio capturing timeless, romantic love stories across Australia.",
      },
      { property: "og:title", content: "Starshot — Luxury Wedding Photography in Sydney" },
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

const testimonials = [
  {
    quote:
      "Starshot captured our wedding day with such artistry and grace. Every photograph feels like a film still — we will treasure them forever.",
    author: "Olivia & James",
    venue: "Gunners Barracks, Sydney",
  },
  {
    quote:
      "From the first call to the final album, the entire experience felt effortless and luxurious. The images are breathtaking.",
    author: "Charlotte & Daniel",
    venue: "Palm Beach Elopement",
  },
  {
    quote:
      "We didn't just hire a photographer — we gained a calm, generous presence who made our day even more beautiful.",
    author: "Amelia & Hugo",
    venue: "Bells at Killcare",
  },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Bride and groom embracing at Sydney Harbour sunset"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-ivory">
          <p
            className="eyebrow !text-ivory/80 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="hairline mr-3 !bg-ivory/70" />
            Sydney Wedding Photography
            <span className="hairline ml-3 !bg-ivory/70" />
          </p>
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-5xl leading-[1.02] animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Capturing Timeless
            <br />
            <em className="italic text-champagne font-light">Love Stories</em>
          </h1>
          <p
            className="mt-8 text-base md:text-lg text-ivory/85 max-w-xl font-light animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            Elegant wedding photography across Sydney and beyond.
          </p>
          <Link
            to="/contact"
            className="mt-12 group btn-primary !bg-ivory !text-charcoal !border-ivory hover:!bg-transparent hover:!text-ivory animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            Start Your Journey
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 text-[10px] tracking-[0.4em] uppercase">
          Scroll
        </div>
      </section>

      {/* CAROUSEL */}
      <Section className="!pt-24 !pb-0">
        <SectionHeader
          eyebrow="Featured Weddings"
          title="A glimpse of recent love stories"
          intro="Each wedding is photographed with care, intention, and an eye for the quiet, beautiful moments in between."
        />
      </Section>
      <div className="pb-24 md:pb-32">
        <Carousel
          items={[
            { src: feat1, alt: "Bride in lace gown by window" },
            { src: feat2, alt: "Couple walking on coastal cliffs" },
            { src: feat3, alt: "Luxury reception table" },
            { src: feat4, alt: "First kiss at ceremony" },
            { src: feat5, alt: "First dance under fairy lights" },
          ]}
        />
      </div>

      {/* ABOUT PREVIEW */}
      <Section className="!pt-0 bg-beige/30">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={about}
              alt="Wedding photographer behind the camera"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block w-40 h-40 border border-champagne" />
          </div>
          <div>
            <p className="eyebrow mb-5">
              <span className="hairline mr-3" />
              About Starshot
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              A storyteller behind the lens
            </h2>
            <p className="mt-8 text-charcoal/75 leading-relaxed text-lg">
              Starshot is a Sydney-based wedding photography studio devoted to capturing
              genuine emotion, natural moments, and the quiet beauty of a love that's
              entirely your own.
            </p>
            <p className="mt-5 text-charcoal/70 leading-relaxed">
              Every couple is welcomed into a calm, luxurious experience — from the first
              hello to the final heirloom album. The result: timeless photographs you'll
              return to for a lifetime.
            </p>
            <Link to="/about" className="btn-ghost mt-10 hover:gap-5">
              Learn More
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="Kind Words"
          title="Loved by couples across Sydney"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
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
          src={feat5}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-ivory">
          <p className="eyebrow !text-ivory/70 mb-6">
            <span className="hairline mr-3 !bg-champagne" />
            Enquire Today
            <span className="hairline ml-3 !bg-champagne" />
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
            Ready to Begin <em className="italic text-champagne font-light">Your Story?</em>
          </h2>
          <p className="mt-6 text-ivory/80 max-w-xl mx-auto">
            Limited weddings booked each year to ensure every couple receives our full
            attention and care.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex btn-primary !bg-ivory !text-charcoal !border-ivory hover:!bg-transparent hover:!text-ivory"
          >
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
