const posts = [
  {
    tag: "產品更新",
    title: "批量生成模式上線：一夜間產出 100 支廣告變體",
    excerpt:
      "平台史上最重大的更新。批量生成模式讓您同時創建並測試數百支影片廣告素材，大幅提升創意測試效率。",
    date: "2026 年 4 月 8 日",
    readTime: "4 分鐘閱讀",
    gradient: "from-violet-400 to-purple-600",
  },
  {
    tag: "行銷策略",
    title: "2026 年為何影片廣告在各平台完勝靜態圖片",
    excerpt:
      "各大廣告平台的演算法已大幅偏好影片創意。以下是完整數據分析，以及如何搶佔先機的具體方法。",
    date: "2026 年 4 月 3 日",
    readTime: "6 分鐘閱讀",
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    tag: "操作教學",
    title: "三秒鉤子公式：打造讓人停下拇指的廣告秘訣",
    excerpt:
      "廣告效果 90% 取決於前 3 秒。我們分析了 10 萬支廣告後，整理出最有效的開場鉤子類型與寫法。",
    date: "2026 年 3 月 28 日",
    readTime: "8 分鐘閱讀",
    gradient: "from-emerald-400 to-teal-600",
  },
];

export function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
              style={{ color: "rgb(87,60,255)", background: "rgba(87,60,255,0.08)" }}
            >
              資源中心
            </span>
            <h2
              className="font-semibold text-gray-900 leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1px" }}
            >
              向頂尖行銷人學習
            </h2>
          </div>
          <a
            href="#"
            className="shrink-0 text-sm font-semibold flex items-center gap-1.5"
            style={{ color: "rgb(87,60,255)" }}
          >
            查看所有文章
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              {/* Gradient image placeholder */}
              <div className={`h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%), linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 10px 10px",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm"
                  >
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mt-1 text-base font-semibold text-gray-900 leading-snug group-hover:text-[rgb(87,60,255)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
