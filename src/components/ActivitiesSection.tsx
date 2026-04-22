import Link from "next/link";
import Image from "next/image";
import { activities } from "@/lib/content";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`;
}

export function ActivitiesSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(0.48 0.12 230)" }}
            >
              Events
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "oklch(0.13 0.02 230)" }}
            >
              最新活動
            </h2>
            <p className="text-sm mt-1" style={{ color: "oklch(0.45 0.03 230)" }}>
              行動不停歇，每一步都算數
            </p>
          </div>
          <Link
            href="/news"
            className="hidden sm:flex items-center gap-1 text-sm font-medium transition-colors"
            style={{ color: "oklch(0.55 0.12 230)" }}
          >
            查看全部
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((item) => (
            <article
              key={item.title}
              className="card-lift rounded-lg border overflow-hidden bg-white"
              style={{ borderColor: "oklch(0.90 0.02 230)" }}
            >
              <div className="h-44 w-full relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="act-tag">{item.tag}</span>
                </div>
                <h3
                  className="font-bold text-base mb-3 leading-snug"
                  style={{ color: "oklch(0.13 0.02 230)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "oklch(0.45 0.02 230)" }}>
                  {item.description}
                </p>
                <div className="flex flex-col gap-1.5 text-xs" style={{ color: "oklch(0.55 0.04 230)" }}>
                  <div className="flex items-center gap-1.5">
                    <CalendarDays size={12} />
                    {formatDate(item.date)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {item.location}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile "more" link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-sm font-medium"
            style={{ color: "oklch(0.55 0.12 230)" }}
          >
            查看全部活動
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
