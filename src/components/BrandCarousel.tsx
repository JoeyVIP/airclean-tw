// 品牌輪播 — 不顯示任何真實品牌名稱或 logo，改用抽象色塊代表合作企業

const placeholders = [
  { color: "from-violet-400 to-purple-500", width: 80 },
  { color: "from-blue-400 to-indigo-500", width: 100 },
  { color: "from-emerald-400 to-teal-500", width: 72 },
  { color: "from-orange-400 to-amber-500", width: 90 },
  { color: "from-rose-400 to-pink-500", width: 84 },
  { color: "from-cyan-400 to-sky-500", width: 96 },
  { color: "from-fuchsia-400 to-violet-500", width: 76 },
  { color: "from-lime-400 to-green-500", width: 88 },
  { color: "from-red-400 to-rose-500", width: 92 },
  { color: "from-yellow-400 to-orange-500", width: 78 },
  { color: "from-sky-400 to-blue-500", width: 104 },
  { color: "from-indigo-400 to-purple-500", width: 86 },
];

export function BrandCarousel() {
  return (
    <section className="py-14 bg-[rgb(252,252,252)] border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-medium tracking-widest text-gray-400 uppercase mb-8">
        超過 1,000 萬名行銷人信賴使用
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgb(252,252,252) 0%, transparent 100%)" }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgb(252,252,252) 0%, transparent 100%)" }}
        />

        {/* Scrolling track — duplicate for seamless loop */}
        <div className="flex carousel-track" style={{ width: "max-content" }}>
          {[...placeholders, ...placeholders].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-8 shrink-0"
              style={{ height: 48 }}
            >
              <div
                className={`h-8 rounded-lg bg-gradient-to-r ${item.color} opacity-25 hover:opacity-50 transition-opacity duration-300`}
                style={{ width: item.width }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
