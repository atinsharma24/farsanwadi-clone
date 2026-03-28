"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/hero/hero-banner-1.png",
    title: "Healthy Choice for Everyone",
    subtitle: "A Good Snack for Your Cravings",
    titleColor: "#0b6e20",
    subtitleColor: "#c88a3a",
  },
  {
    id: 2,
    image: "/images/hero/hero-banner-2.png",
    title: "Mini Khakhra Family Pack",
    subtitle: "Pack of 4 Assorted Flavours",
    titleColor: "#0b6e20",
    subtitleColor: "#c88a3a",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative max-w-7xl mx-auto px-4 pt-6 pb-4">
      <div className="relative rounded-2xl overflow-hidden aspect-[16/7] md:aspect-[16/6] bg-gray-100">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-[8%] md:pt-[6%]">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-heading text-center drop-shadow-lg"
                style={{ color: slide.titleColor }}
              >
                {slide.title}
              </h2>
              <p
                className="text-lg md:text-2xl lg:text-3xl font-semibold mt-2 text-center drop-shadow-md font-heading"
                style={{ color: slide.subtitleColor }}
              >
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-[#0b6e20]" : "bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
