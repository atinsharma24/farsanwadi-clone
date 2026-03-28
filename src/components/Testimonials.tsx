"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { StarRating } from "./StarRating";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-[#333] mb-10">
          What Our Customers Say
        </h2>

        <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          {/* Quote icon */}
          <Quote
            size={40}
            className="text-[#00a50c]/20 absolute top-6 left-6"
          />

          <div className="relative z-10">
            {/* Avatar */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00a50c] to-[#0b6e20] flex items-center justify-center text-white text-xl font-bold font-heading">
              {testimonial.name.charAt(0)}
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              <StarRating rating={testimonial.rating} size={20} />
            </div>

            {/* Text */}
            <blockquote className="text-base md:text-lg text-[#555] leading-relaxed max-w-2xl mx-auto mb-6 italic">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            {/* Name */}
            <p className="font-bold text-[#333] font-heading">
              {testimonial.name}
            </p>
            {testimonial.location && (
              <p className="text-sm text-[#888]">{testimonial.location}</p>
            )}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-[#00a50c]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
