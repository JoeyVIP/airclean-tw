import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Paste your product URL",
    desc: "Creatify instantly pulls your product name, images, description, and key selling points — no manual input needed.",
    img: "/images/img-19.png",
    imgAlt: "Product URL input interface",
  },
  {
    step: "02",
    title: "AI generates video scripts",
    desc: "Our AI writes multiple ad angles, selects the best AI avatars, and syncs voiceovers automatically — in seconds.",
    img: "/images/img-20.png",
    imgAlt: "AI script generation interface",
  },
  {
    step: "03",
    title: "Customize and brand it",
    desc: "Swap avatars, tweak copy, adjust music, and add your logo. Every detail is editable with a few clicks.",
    img: "/images/img-21.png",
    imgAlt: "Video customization interface",
  },
  {
    step: "04",
    title: "Launch and test at scale",
    desc: "Publish directly to Meta, TikTok, and YouTube. Let AI auto-rotate creatives to find your winning ad.",
    img: "/images/img-22.png",
    imgAlt: "Multi-platform publishing interface",
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
            How it works
          </span>
          <h2
            className="font-semibold text-gray-900 leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-1.2px" }}
          >
            From product link to
            <br />
            <span style={{ color: "rgb(87,60,255)" }}>winning ad</span> in minutes
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
                  STEP {step.step}
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
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Image */}
              <div className="flex-1 min-w-0 w-full">
                <div
                  className="rounded-2xl overflow-hidden bg-gray-50"
                  style={{
                    boxShadow: "0 20px 60px rgba(87,60,255,0.10), 0 4px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  <Image
                    src={step.img}
                    alt={step.imgAlt}
                    width={560}
                    height={360}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
