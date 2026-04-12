import Image from "next/image";

const tools = [
  {
    icon: "/images/img-05.png",
    name: "AI Avatars",
    desc: "700+ realistic AI avatars speaking in 29 languages — no filming required.",
    tag: "Popular",
  },
  {
    icon: "/images/img-06.png",
    name: "URL to Video",
    desc: "Paste any product link and get a complete video ad in under 2 minutes.",
    tag: null,
  },
  {
    icon: "/images/img-07.png",
    name: "Batch Mode",
    desc: "Generate 100+ ad variations simultaneously. Scale creative testing overnight.",
    tag: "New",
  },
  {
    icon: "/images/img-08.png",
    name: "AI Script Writer",
    desc: "Hook-first scripts written by AI trained on 1M+ high-converting ads.",
    tag: null,
  },
  {
    icon: "/images/img-09.png",
    name: "Video Templates",
    desc: "500+ proven ad formats — lifestyle, UGC, testimonial, demo, and more.",
    tag: null,
  },
  {
    icon: "/images/img-10.png",
    name: "Auto A/B Testing",
    desc: "Launch multiple creatives and let AI find your highest-ROAS winner.",
    tag: null,
  },
  {
    icon: "/images/img-11.png",
    name: "Voiceover Studio",
    desc: "Natural AI voices in 30+ languages. Clone your own voice in minutes.",
    tag: null,
  },
  {
    icon: "/images/img-12.png",
    name: "Analytics Hub",
    desc: "Hook rate, watch time, click-through — all the metrics that drive decisions.",
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
            The Toolkit
          </span>
          <h2
            className="font-semibold text-gray-900 leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-1.2px" }}
          >
            Every tool you need to
            <br />
            <span style={{ color: "rgb(87,60,255)" }}>dominate paid social</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
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
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{tool.desc}</p>

              {/* Hover arrow */}
              <div className="mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-semibold" style={{ color: "rgb(87,60,255)" }}>
                  Learn more
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
          ))}
        </div>
      </div>
    </section>
  );
}
