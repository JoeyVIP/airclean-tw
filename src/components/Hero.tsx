import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-noise"
      style={{
        background:
          "linear-gradient(135deg, rgb(15, 8, 50) 0%, rgb(40, 20, 120) 40%, rgb(87, 60, 255) 100%)",
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/hero-gradient-noise.png')",
          backgroundSize: "cover",
          mixBlendMode: "overlay",
        }}
      />

      {/* Purple glow blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(87,60,255,0.35) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 pt-28 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
          <span className="text-xs font-medium text-white/80">New</span>
          <span className="w-px h-3 bg-white/30" />
          <span className="text-xs text-white/70">
            AI Video Ads — now with instant A/B testing
          </span>
          <ArrowRight size={12} className="text-white/60" />
        </div>

        {/* Main headline */}
        <h1
          className="font-medium leading-none tracking-tight text-white mb-6"
          style={{
            fontSize: "clamp(56px, 10vw, 120px)",
            letterSpacing: "-2.4px",
            lineHeight: "0.92",
          }}
        >
          AI-powered
          <br />
          video ads
        </h1>

        {/* Subheadline */}
        <p
          className="mt-8 text-white/70 font-normal max-w-[560px] mx-auto"
          style={{ fontSize: "18px", lineHeight: "1.6" }}
        >
          Paste your product URL. Get 10 video ads. Automatically test what converts.
        </p>

        {/* CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-100"
            style={{ backgroundColor: "rgb(87, 60, 255)", boxShadow: "0 0 40px rgba(87,60,255,0.5)" }}
          >
            Start for free
            <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/90 border border-white/25 transition-all hover:bg-white/10"
          >
            Watch demo
          </a>
        </div>

        {/* G2 badge */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <Image
            src="/images/g2-logo.png"
            alt="G2 logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <div className="text-left">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ff6b35">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-white/50 mt-0.5">4.8/5 · 2,400+ reviews</p>
          </div>
        </div>

        {/* Hero preview image */}
        <div className="mt-16 relative">
          <div
            className="rounded-2xl overflow-hidden mx-auto max-w-4xl"
            style={{
              boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            <Image
              src="/images/img-00.png"
              alt="Creatify dashboard preview"
              width={1200}
              height={680}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgb(252,252,252) 0%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
