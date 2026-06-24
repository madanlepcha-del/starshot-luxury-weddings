import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Mail, MapPin, Instagram, Phone } from "lucide-react";
import { contact } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Starshots Wedding Photography" },
      { name: "description", content: "Enquire about your Sydney wedding photography. We'd love to hear about your day." },
      { property: "og:title", content: "Contact — Starshots Wedding Photography" },
      { property: "og:description", content: "Enquire about your Sydney wedding photography." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      const payload: Record<string, string> = {
        _subject: `New Starshots enquiry from ${fd.get("name") || "website"}`,
        _template: "table",
        _captcha: "false",
      };
      fd.forEach((v, k) => { payload[k] = String(v); });

      const res = await fetch("https://formsubmit.co/ajax/madanlepcha@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
      />

      <Section className="!pt-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <aside className="space-y-10 lg:pr-8 lg:border-r lg:border-border">
            <div>
              <p className="eyebrow mb-4">{contact.studio.label}</p>
              <p className="font-serif text-2xl text-charcoal leading-snug">{contact.studio.text}</p>
            </div>
            <div className="space-y-4 text-charcoal/80">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-champagne transition">
                <Mail size={16} className="text-champagne" /> {contact.email}
              </a>
              <a href={`tel:${contact.phoneHref}`} className="flex items-center gap-3 hover:text-champagne transition">
                <Phone size={16} className="text-champagne" /> {contact.phone}
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-champagne" /> {contact.location}
              </p>
              <a href={contact.instagramHref} className="flex items-center gap-3 hover:text-champagne transition">
                <Instagram size={16} className="text-champagne" /> {contact.instagram}
              </a>
            </div>
            <div className="pt-8 border-t border-border">
              <p className="eyebrow mb-3">{contact.investment.label}</p>
              <p className="text-charcoal/70 leading-relaxed">{contact.investment.text}</p>
            </div>
          </aside>

          <div>
            {submitted ? (
              <div className="bg-beige/40 border border-champagne/40 p-12 text-center">
                <p className="eyebrow mb-4"><span className="hairline mr-3" />{contact.thankYou.eyebrow}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal">{contact.thankYou.title}</h2>
                <p className="mt-4 text-charcoal/70">{contact.thankYou.body}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
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
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button type="submit" disabled={submitting} className="btn-primary mt-4 hover:bg-transparent hover:text-charcoal w-full sm:w-auto disabled:opacity-60">
                  {submitting ? "Sending…" : contact.submitLabel}
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
  label, name, type = "text", required = false, min,
}: {
  label: string; name: string; type?: string; required?: boolean; min?: string;
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
