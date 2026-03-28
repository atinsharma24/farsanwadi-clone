"use client";

import { useEffect, useRef, useState } from "react";
import { trustStats } from "@/lib/data";

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseFloat(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = eased * target;
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const display = Number.isInteger(target)
    ? Math.round(count).toString()
    : count.toFixed(1);

  return (
    <div ref={ref} className="text-center px-4">
      <p className="text-3xl md:text-4xl font-extrabold text-[#e65100] font-heading">
        {display}
        {suffix}
      </p>
      <p className="text-xs md:text-sm text-[#666] mt-1 font-medium" />
    </div>
  );
}

export function TrustStats() {
  return (
    <section className="bg-[#e6e6e6] py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-center text-lg md:text-xl font-bold text-[#333] mb-6 font-heading">
          Building Trust, One Order at a Time
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-400/30">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-xs md:text-sm text-[#666] mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
