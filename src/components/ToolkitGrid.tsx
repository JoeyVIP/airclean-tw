import { Users, Link, Layers, FileText, LayoutTemplate, BarChart2, Mic, PieChart } from "lucide-react";

const tools = [
  {
    Icon: Users,
    name: "AI 虛擬主播",
    desc: "700+ 位逼真 AI 虛擬主播，支援 29 種語言播報，無需任何拍攝。",
    tag: "熱門",
  },
  {
    Icon: Link,
    name: "網址轉影片",
    desc: "貼上任意產品連結，2 分鐘內取得完整影片廣告。",
    tag: null,
  },
  {
    Icon: Layers,
    name: "批量生成模式",
    desc: "同時生成 100+ 支廣告素材，一夜之間完成大規模創意測試。",
    tag: "全新",
  },
  {
    Icon: FileText,
    name: "AI 腳本撰寫",
    desc: "由 AI 訓練自 100 萬支高轉換廣告，生成鉤子優先的廣告腳本。",
    tag: null,
  },
  {
    Icon: LayoutTemplate,
    name: "影片模板庫",
    desc: "500+ 種經過驗證的廣告格式，包含生活情境、UGC、見證、示範等類型。",
    tag: null,
  },
  {
    Icon: BarChart2,
    name: "自動 A/B 測試",
    desc: "同時投放多組素材，讓 AI 自動找出最高 ROAS 的獲勝廣告。",
    tag: null,
  },
  {
    Icon: Mic,
    name: "AI 配音工作室",
    desc: "30+ 種語言的自然 AI 配音，幾分鐘內複製您自己的聲音。",
    tag: null,
  },
  {
    Icon: PieChart,
    name: "數據分析中心",
    desc: "鉤子率、觀看時長、點擊率，所有驅動決策的關鍵指標一目了然。",
    tag: null,
  },
];

export function ToolkitGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: "rgb(87,60,255)", background: "rgba(87,60,255,0.08)" }}
          >
            功能工具箱
          </span>
          <h2
            className="font-semibold text-gray-900 leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-1.2px" }}
          >
            制霸付費社群廣告
            <br />
            <span style={{ color: "rgb(87,60,255)" }}>所需的每一項工具</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => {
            const { Icon } = tool;
            return (
              <div
                key={i}
                className="toolkit-card relative p-6 rounded-2xl border border-gray-100 bg-white cursor-pointer group"
              >
                {/* Tag */}
                {tool.tag && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      color: "rgb(87,60,255)",
                      background: "rgba(87,60,255,0.1)",
                    }}
                  >
                    {tool.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(87,60,255,0.08)" }}
                >
                  <Icon size={20} style={{ color: "rgb(87,60,255)" }} />
                </div>

                {/* Content */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{tool.desc}</p>

                {/* Hover arrow */}
                <div className="mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold" style={{ color: "rgb(87,60,255)" }}>
                    了解更多
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(87,60,255)"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
