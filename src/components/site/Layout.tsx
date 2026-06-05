import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-beige/40">
      <div className="mx-auto max-w-4xl px-6 text-center animate-fade-up">
        <p className="eyebrow mb-6">
          <span className="hairline mr-3" />
          {eyebrow}
          <span className="hairline ml-3" />
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.02]">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-charcoal/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
