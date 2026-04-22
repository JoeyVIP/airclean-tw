"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { heroSlides } from "@/lib/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Hero() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setActive(index);
      setTimeout(() => setAnimating(false), 600);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((active + 1) % heroSlides.length);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + heroSlides.length) % heroSlides.length);
  }, [active, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[active];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "oklch(0.15 0.06 230)" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            135deg,
            oklch(0.18 0.08 230) 0%,
            oklch(0.25 0.10 235) 50%,
            oklch(0.20 0.07 220) 100%
          )`,
        }}
        aria-hidden="true"
      />

      {/* Ambient radial overlays */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, oklch(0.65 0.14 230 / 0.5) 0%, transparent 55%),
            radial-gradient(circle at 80% 70%, oklch(0.58 0.12 215 / 0.4) 0%, transparent 50%)`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-20 pb-24 text-center text-white">
        {/* Slide dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`切換到第 ${i + 1} 張`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  i === active ? "white" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        {/* Text block */}
        <div key={active} className="hero-fade-in">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.78 0.10 230)" }}
          >
            Air Clean Taiwan
          </p>
          <h1
            className="font-bold leading-tight mb-3"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {slide.title}
            <br />
            <span style={{ color: "oklch(0.78 0.14 220)" }}>
              {slide.subtitle}
            </span>
          </h1>
          <p
            className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            {slide.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 text-sm font-semibold rounded-md text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "oklch(0.55 0.14 230)" }}
            >
              {slide.cta_primary}
            </Link>
            <Link
              href="/about"
              className="px-7 py-3 text-sm font-semibold rounded-md border transition-colors hover:bg-white/10"
              style={{
                color: "rgba(255,255,255,0.85)",
                borderColor: "rgba(255,255,255,0.3)",
              }}
            >
              {slide.cta_secondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="上一張"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
      >
        <ChevronLeft size={20} className="text-white" />
      </button>
      <button
        onClick={next}
        aria-label="下一張"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
      >
        <ChevronRight size={20} className="text-white" />
      </button>

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.99 0 230))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
