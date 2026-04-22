import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "貼上產品網址",
    desc: "系統即時擷取您的產品名稱、圖片、描述與核心賣點，無需手動輸入任何資料。",
    img: "/images/img-19.png",
    imgAlt: "產品網址輸入介面",
    gradient: "from-violet-100 to-purple-200",
  },
  {
    step: "02",
    title: "AI 自動生成腳本",
    desc: "AI 撰寫多種廣告角度，自動挑選最佳 AI 虛擬主播，並在數秒內同步生成旁白配音。",
    img: "/images/img-20.png",
    imgAlt: "AI 腳本生成介面",
    gradient: "from-blue-100 to-indigo-200",
  },
  {
    step: "03",
    title: "自訂品牌風格",
    desc: "更換虛擬主播、調整文案、設定背景音樂並加入您的品牌標誌，每個細節都能輕鬆調整。",
    img: "/images/img-21.png",
    imgAlt: "影片客製化介面",
    gradient: "from-emerald-100 to-teal-200",
  },
  {
    step: "04",
    title: "大規模發布與測試",
    desc: "直接投放至各大廣告平台，讓 AI 自動輪換素材，找出最高 ROAS 的獲勝廣告。",
    img: "/images/img-22.png",
    imgAlt: "多平台發布介面",
    gradient: "from-orange-100 to-amber-200",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 bg-[rgb(252,252,252)]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: "rgb(87,60,255)", background: "rgba(87,60,255,0.08)" }}
          >
            運作流程
          </span>
          <h2
            className="font-semibold text-gray-900 leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-1.2px" }}
          >
            從產品連結到
            <br />
            <span style={{ color: "rgb(87,60,255)" }}>獲勝廣告</span>，只需幾分鐘
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-24">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-16`}
            >
              {/* Text */}
              <div className="flex-1 min-w-0">
                <span
                  className="text-xs font-mono font-semibold tracking-widest"
                  style={{ color: "rgb(87,60,255)" }}
                >
                  步驟 {step.step}
                </span>
                <h3
                  className="mt-3 font-semibold text-gray-900 leading-tight mb-4"
                  style={{ fontSize: "clamp(24px, 3.5vw, 36px)", letterSpacing: "-0.6px" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base max-w-[420px]">{step.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold"
                  style={{ color: "rgb(87,60,255)" }}
                >
                  了解更多
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Image */}
              <div className="flex-1 min-w-0 w-full">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: "0 20px 60px rgba(87,60,255,0.10), 0 4px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className={`w-full h-[300px] bg-gradient-to-br ${step.gradient} flex items-center justify-center relative`}>
                    <Image
                      src={step.img}
                      alt={step.imgAlt}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
