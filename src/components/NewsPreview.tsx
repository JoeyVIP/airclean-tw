import Link from "next/link";
import Image from "next/image";
import { news } from "@/lib/content";
import { ArrowRight } from "lucide-react";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
}

export function NewsPreview() {
  const preview = news.slice(0, 3);

  return (
    <section
      className="py-16 border-t"
      style={{ borderColor: "oklch(0.90 0.02 230)" }}
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(0.48 0.12 230)" }}
            >
              News
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "oklch(0.13 0.02 230)" }}
            >
              最新消息
            </h2>
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

        {/* Featured + side list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured article */}
          <article
            className="md:col-span-2 card-lift rounded-lg border overflow-hidden bg-white"
            style={{ borderColor: "oklch(0.90 0.02 230)" }}
          >
            <div className="h-52 w-full relative overflow-hidden">
              <Image
                src={preview[0].image}
                alt={preview[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                unoptimized
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="act-tag">{preview[0].category}</span>
                <time className="text-xs" style={{ color: "oklch(0.55 0.03 230)" }}>
                  {formatDate(preview[0].date)}
                </time>
              </div>
              <h3
                className="font-bold text-lg leading-snug mb-3"
                style={{ color: "oklch(0.13 0.02 230)" }}
              >
                {preview[0].title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.02 230)" }}>
                {preview[0].excerpt}
              </p>
              <Link
                href={`/news/${preview[0].slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium mt-4 transition-colors"
                style={{ color: "oklch(0.55 0.12 230)" }}
              >
                閱讀全文
                <ArrowRight size={13} />
              </Link>
            </div>
          </article>

          {/* Side list */}
          <div className="flex flex-col gap-4">
            {preview.slice(1).map((item) => (
              <article
                key={item.id}
                className="card-lift rounded-lg border p-5 bg-white"
                style={{ borderColor: "oklch(0.90 0.02 230)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="act-tag">{item.category}</span>
                  <time className="text-xs" style={{ color: "oklch(0.55 0.03 230)" }}>
                    {formatDate(item.date)}
                  </time>
                </div>
                <h3
                  className="font-semibold text-sm leading-snug mb-2"
                  style={{ color: "oklch(0.13 0.02 230)" }}
                >
                  {item.title}
                </h3>
                <Link
                  href={`/news/${item.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                  style={{ color: "oklch(0.55 0.12 230)" }}
                >
                  閱讀全文
                  <ArrowRight size={12} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
