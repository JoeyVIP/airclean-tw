import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { news } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
}

export const metadata = {
  title: "最新消息 | 台灣健康空氣行動聯盟",
  description: "台灣健康空氣行動聯盟最新倡議動態、政策進展、科學研究報告。",
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
        <div
          className="py-14 text-center"
          style={{ backgroundColor: "oklch(0.96 0.02 230)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "oklch(0.48 0.12 230)" }}
          >
            News & Updates
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "oklch(0.13 0.02 230)" }}
          >
            最新消息
          </h1>
          <p className="text-sm mt-2" style={{ color: "oklch(0.45 0.03 230)" }}>
            倡議動態、政策進展、科學研究報告
          </p>
        </div>

        {/* News grid */}
        <div className="max-w-6xl mx-auto px-5 py-12">
          {/* Category filter — static decorative */}
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            {["全部", "政策動態", "科學研究", "倡議行動", "組織新聞"].map(
              (cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors"
                  style={
                    cat === "全部"
                      ? {
                          backgroundColor: "oklch(0.55 0.12 230)",
                          color: "white",
                        }
                      : {
                          backgroundColor: "oklch(0.94 0.02 230)",
                          color: "oklch(0.35 0.06 230)",
                        }
                  }
                >
                  {cat}
                </span>
              )
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((item) => (
              <article
                key={item.id}
                className="card-lift rounded-lg border overflow-hidden bg-white flex flex-col"
                style={{ borderColor: "oklch(0.90 0.02 230)" }}
              >
                <div className="h-44 w-full shrink-0 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="act-tag">{item.category}</span>
                    <time
                      className="text-xs"
                      style={{ color: "oklch(0.55 0.03 230)" }}
                    >
                      {formatDate(item.date)}
                    </time>
                  </div>
                  <h2
                    className="font-bold text-base leading-snug mb-2"
                    style={{ color: "oklch(0.13 0.02 230)" }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "oklch(0.45 0.02 230)" }}
                  >
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium mt-4 transition-colors"
                    style={{ color: "oklch(0.55 0.12 230)" }}
                  >
                    閱讀全文
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load more placeholder */}
          <div className="mt-10 text-center">
            <button
              className="px-8 py-2.5 rounded-md border text-sm font-medium transition-colors"
              style={{
                borderColor: "oklch(0.55 0.12 230)",
                color: "oklch(0.55 0.12 230)",
              }}
            >
              載入更多
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
