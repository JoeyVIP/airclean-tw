const results = [
  {
    number: "4.7×",
    label: "更高廣告回報",
    desc: "平均而言，使用本平台的品牌獲得比傳統廣告製作高出近 5 倍的回報率",
  },
  {
    number: "95%",
    label: "更快上線速度",
    desc: "從創意到上線廣告只需幾分鐘，不需代理商，不需拍攝現場",
  },
  {
    number: "15×",
    label: "更多創意素材",
    desc: "測試 15 倍以上的廣告變體，讓數據自動選出最佳獲勝廣告",
  },
];

export function Results() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgb(20, 12, 60) 0%, rgb(55, 35, 160) 50%, rgb(87, 60, 255) 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(87,60,255,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full text-white/70 border border-white/20">
            真實成效
          </span>
          <h2
            className="font-semibold text-white leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-1.2px" }}
          >
            讓業績真正動起來的數字
          </h2>
          <p className="mt-4 text-white/60 text-base max-w-[480px] mx-auto">
            數千個品牌已用本平台取代舊有廣告流程，以下是他們的真實成果。
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <p
                className="font-semibold text-white leading-none mb-3"
                style={{ fontSize: "clamp(56px, 8vw, 80px)", letterSpacing: "-2px" }}
              >
                {r.number}
              </p>
              <p className="text-base font-semibold text-white mb-2">{r.label}</p>
              <p className="text-sm text-white/55 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "rgb(87, 60, 255)", boxShadow: "0 0 40px rgba(87,60,255,0.6)" }}
          >
            查看所有案例研究
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
