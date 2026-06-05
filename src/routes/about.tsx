import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { ArrowRight, Camera, Clock, Sparkles, BookHeart, Heart } from "lucide-react";
import about from "@/assets/about.jpg";
import feat2 from "@/assets/feat-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Starshot Wedding Photography" },
      { name: "description", content: "Meet the storyteller behind Starshot — a Sydney wedding photographer devoted to natural, timeless imagery." },
      { property: "og:title", content: "About — Starshot Wedding Photography" },
      { property: "og:description", content: "A Sydney wedding photographer devoted to natural, timeless imagery." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const reasons = [
  { icon: Camera, title: "Experienced eye", text: "Years of photographing Sydney's most loved venues with a calm, prepared presence." },
  { icon: Clock, title: "Fast turnaround", text: "Sneak peeks within a week, full galleries delivered in 4–6 weeks." },
  { icon: Sparkles, title: "Refined editing", text: "Timeless, true-to-life colour with a soft, editorial finish." },
  { icon: BookHeart, title: "Heirloom albums", text: "Hand-bound fine art albums crafted to last generations." },
  { icon: Heart, title: "Stress-free experience", text: "Thoughtful planning support so your day feels effortless." },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Starshot"
        title="A studio devoted to your story"
        subtitle="Sydney-based, available worldwide."
      />

      {/* OUR STORY */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={about} alt="Photographer portrait" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-5"><span className="hairline mr-3" />Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05]">
              Photography rooted in feeling, not formula
            </h2>
            <div className="mt-8 space-y-5 text-charcoal/75 leading-relaxed">
              <p>
                Starshot began with a simple belief: a wedding day is best remembered
                through the small, unscripted moments — the laughter shared, the held
                breath before vows, the warmth of a quiet glance.
              </p>
              <p>
                For more than a decade we've had the privilege of documenting weddings
                across Sydney's most beloved venues, from intimate coastal elopements to
                grand harbourside celebrations.
              </p>
              <p>
                Our work is quiet, considered, and deeply personal — designed to feel as
                timeless in twenty years as it does today.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <Section className="bg-beige/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-5"><span className="hairline mr-3" />Philosophy<span className="hairline ml-3" /></p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05]">
            Natural storytelling. Genuine emotion. <em className="italic text-champagne font-light">Timeless editing.</em>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-10 text-left">
            {[
              { t: "Natural Storytelling", d: "We document your day as it unfolds — present, patient, never intrusive." },
              { t: "Genuine Emotion", d: "We create the space for real moments and capture them with care." },
              { t: "Timeless Editing", d: "Soft, refined tones that age gracefully — never trend-driven." },
            ].map((p) => (
              <div key={p.t}>
                <h3 className="font-serif text-2xl text-charcoal mb-3">{p.t}</h3>
                <p className="text-charcoal/70 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <Section>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-5"><span className="hairline mr-3" />Why Starshot<span className="hairline ml-3" /></p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">A complete, considered experience</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {reasons.map((r) => (
            <div key={r.title} className="bg-ivory p-10 hover:bg-beige/50 transition-colors duration-500">
              <r.icon className="text-champagne mb-5" size={28} strokeWidth={1.2} />
              <h3 className="font-serif text-2xl text-charcoal mb-3">{r.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <img src={feat2} alt="" aria-hidden loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative max-w-2xl mx-auto px-6 text-center text-ivory">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Let's create something beautiful</h2>
          <Link to="/contact" className="mt-8 inline-flex btn-primary !bg-ivory !text-charcoal !border-ivory hover:!bg-transparent hover:!text-ivory">
            Start Your Journey <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
