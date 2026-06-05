import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Mail, MapPin, Instagram, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Starshot Wedding Photography" },
      { name: "description", content: "Enquire about your Sydney wedding photography. We'd love to hear about your day." },
      { property: "og:title", content: "Contact — Starshot Wedding Photography" },
      { property: "og:description", content: "Enquire about your Sydney wedding photography." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to Formspree / Web3Forms / Firebase.
    // Replace the form `action` attribute with your Formspree endpoint, e.g.:
    //   <form action="https://formspree.io/f/yourID" method="POST">
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Let's begin your story"
        subtitle="Share a few details about your day and we'll be in touch within 48 hours."
      />

      <Section className="!pt-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <aside className="space-y-10 lg:pr-8 lg:border-r lg:border-border">
            <div>
              <p className="eyebrow mb-4">Studio</p>
              <p className="font-serif text-2xl text-charcoal leading-snug">By appointment in Sydney, Australia</p>
            </div>
            <div className="space-y-4 text-charcoal/80">
              <a href="mailto:hello@starshot.studio" className="flex items-center gap-3 hover:text-champagne transition">
                <Mail size={16} className="text-champagne" /> hello@starshot.studio
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-champagne" /> Sydney · NSW · Available worldwide
              </p>
              <a href="#" className="flex items-center gap-3 hover:text-champagne transition">
                <Instagram size={16} className="text-champagne" /> @starshot.studio
              </a>
            </div>
            <div className="pt-8 border-t border-border">
              <p className="eyebrow mb-3">Investment</p>
              <p className="text-charcoal/70 leading-relaxed">
                Wedding collections begin at $4,800 AUD. Detailed pricing shared upon enquiry.
              </p>
            </div>
          </aside>

          <div>
            {submitted ? (
              <div className="bg-beige/40 border border-champagne/40 p-12 text-center">
                <p className="eyebrow mb-4"><span className="hairline mr-3" />Thank you</p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Your enquiry is on its way</h2>
                <p className="mt-4 text-charcoal/70">We'll be in touch shortly with availability and next steps.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone Number" name="phone" type="tel" />
                  <Field label="Wedding Date" name="date" type="date" />
                  <Field label="Venue" name="venue" />
                  <Field label="Number of Guests" name="guests" type="number" min="1" />
                </div>
                <div>
                  <label className="eyebrow block mb-3">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-champagne outline-none py-3 text-charcoal placeholder:text-charcoal/40 transition-colors resize-none"
                    placeholder="Tell us about your day…"
                  />
                </div>
                <button type="submit" className="btn-primary mt-4 hover:bg-transparent hover:text-charcoal w-full sm:w-auto">
                  Start Your Journey
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-3">
        {label}{required && <span className="text-champagne ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        className="w-full bg-transparent border-b border-border focus:border-champagne outline-none py-3 text-charcoal placeholder:text-charcoal/40 transition-colors"
      />
    </div>
  );
}
