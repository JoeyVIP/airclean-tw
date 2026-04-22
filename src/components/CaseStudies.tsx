"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    company: "光澤美妝",
    category: "美妝與保養",
    metric: "4.2× 廣告回報",
    result: "導入 AI 虛擬主播後，光澤美妝取代每月 6 萬元的代理商費用，廣告回報提升 4 倍。",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    company: "健身流",
    category: "健康與健身",
    metric: "+310% 點擊率",
    result: "一夜測試 40 組素材後，找到那個讓點擊率翻三倍的黃金開場白。",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    company: "科技酷品",
    category: "消費電子",
    metric: "削減 90% 製作成本",
    result: "徹底關閉了自家攝影棚，現在每次新品上市直接生成 200 支廣告變體。",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    company: "毛孩精選",
    category: "寵物用品",
    metric: "6× 市場規模",
    result: "3 個月內從 5 個市場擴展至 30 個，12 種語言本地化影片廣告，零次重拍。",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    company: "行者裝備",
    category: "旅行與戶外",
    metric: "創造 600 萬台幣營收",
    result: "單一廣告活動在黑色星期五期間創造超過 600 萬台幣的直接營收。",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    company: "雲端智造",
    category: "B2B 軟體服務",
    metric: "5× 業務管道",
    result: "影片廣告帶動預約 Demo 量成長 5 倍，每個潛在客戶的取得成本從 5,400 元降至 960 元。",
    gradient: "from-cyan-500 to-teal-600",
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
              案例研究
            </span>
            <h2
              className="font-semibold text-gray-900 leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1px" }}
            >
              真實品牌，
              <br />真實成果
            </h2>
          </div>

          {/* Scroll controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="向左捲動"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="向右捲動"
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
              {/* Gradient image placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient}`} />
                {/* Abstract pattern overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 80%, white 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Metric badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-sm font-bold text-white bg-black/30 backdrop-blur-sm">
                    {c.metric}
                  </span>
                </div>
                {/* Company initial */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{c.company[0]}</span>
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
                  閱讀完整案例
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
