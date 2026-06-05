import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Item = { src: string; alt: string };

export function Carousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    timer.current = setInterval(() => go(1), 5000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [go]);

  const restart = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => go(1), 5000);
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-beige"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) { go(dx < 0 ? 1 : -1); restart(); }
        touchX.current = null;
      }}
    >
      <div
        className="flex transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((it, i) => (
          <div key={i} className="relative w-full shrink-0 aspect-[16/10] md:aspect-[21/9]">
            <img
              src={it.src}
              alt={it.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => { go(-1); restart(); }}
        aria-label="Previous"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-ivory/90 hover:bg-ivory text-charcoal w-11 h-11 flex items-center justify-center backdrop-blur transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => { go(1); restart(); }}
        aria-label="Next"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-ivory/90 hover:bg-ivory text-charcoal w-11 h-11 flex items-center justify-center backdrop-blur transition"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); restart(); }}
            aria-label={`Slide ${i + 1}`}
            className={`h-[2px] transition-all duration-500 ${
              i === index ? "w-10 bg-ivory" : "w-5 bg-ivory/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
