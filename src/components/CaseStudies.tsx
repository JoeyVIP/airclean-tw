"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    company: "GlowSkin",
    category: "Beauty & Skincare",
    metric: "4.2× ROAS",
    result: "Using Creatify's AI avatars, GlowSkin replaced their $20k/month agency spend and saw 4× higher return.",
    img: "/images/img-23.png",
    color: "from-pink-500 to-rose-600",
  },
  {
    company: "FitFlow",
    category: "Health & Fitness",
    metric: "+310% CTR",
    result: "A/B testing 40 variants overnight revealed the single hook that tripled click-through rate.",
    img: "/images/img-24.png",
    color: "from-green-500 to-emerald-600",
  },
  {
    company: "TechGadgets",
    category: "Consumer Electronics",
    metric: "90% cost cut",
    result: "Eliminated their production studio entirely. Now generate 200 ad variants per product launch.",
    img: "/images/img-25.png",
    color: "from-blue-500 to-indigo-600",
  },
  {
    company: "PetLux",
    category: "Pet Products",
    metric: "6× scale",
    result: "Scaled from 5 to 30 markets in 3 months. Localized video ads in 12 languages, zero reshoots.",
    img: "/images/img-26.png",
    color: "from-orange-500 to-amber-600",
  },
  {
    company: "NomadGear",
    category: "Travel & Outdoor",
    metric: "$2.1M revenue",
    result: "Launched a single Creatify campaign that generated $2.1M in direct revenue over Black Friday.",
    img: "/images/img-19.png",
    color: "from-purple-500 to-violet-600",
  },
  {
    company: "CloudStack",
    category: "B2B SaaS",
    metric: "5× pipeline",
    result: "Video ads drove a 5× increase in demo bookings and cut cost-per-lead from $180 to $32.",
    img: "/images/img-20.png",
    color: "from-cyan-500 to-teal-600",
  },
];

export function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-[rgb(252,252,252)]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
              style={{ color: "rgb(87,60,255)", background: "rgba(87,60,255,0.08)" }}
            >
              Case Studies
            </span>
            <h2
              className="font-semibold text-gray-900 leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1px" }}
            >
              Real brands,
              <br />real results
            </h2>
          </div>

          {/* Scroll controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cases.map((c, i) => (
            <div
              key={i}
              className="shrink-0 w-[340px] snap-start rounded-2xl overflow-hidden border border-gray-100 bg-white group cursor-pointer"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              {/* Image with gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.company}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-60`} />
                {/* Metric badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-sm font-bold text-white bg-black/30 backdrop-blur-sm">
                    {c.metric}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-1">{c.category}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-3">{c.company}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.result}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 mt-4 text-xs font-semibold"
                  style={{ color: "rgb(87,60,255)" }}
                >
                  Read case study
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
