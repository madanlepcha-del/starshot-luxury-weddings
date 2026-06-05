import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl mb-16 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="eyebrow mb-5">
          <span className="hairline mr-3" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-charcoal/70 leading-relaxed text-base md:text-lg">{intro}</p>
      )}
    </div>
  );
}
