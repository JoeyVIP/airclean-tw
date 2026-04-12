import Image from "next/image";

const footerLinks = [
  {
    heading: "Product",
    links: [
      "AI Avatars",
      "URL to Video",
      "Batch Mode",
      "AI Script Writer",
      "Video Templates",
      "Auto A/B Testing",
      "Voiceover Studio",
      "Analytics Hub",
    ],
  },
  {
    heading: "Solutions",
    links: [
      "E-Commerce",
      "SaaS & Tech",
      "Agencies",
      "D2C Brands",
      "Enterprise",
      "Small Business",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Blog",
      "Case Studies",
      "Video Examples",
      "Help Center",
      "API Docs",
      "Changelog",
    ],
  },
  {
    heading: "Company",
    links: [
      "About",
      "Careers",
      "Press",
      "Partners",
      "Contact",
      "Legal",
    ],
  },
];

const socials = [
  {
    label: "X (Twitter)",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[rgb(12, 8, 35)] text-white" style={{ backgroundColor: "rgb(12, 8, 35)" }}>
      {/* CTA band */}
      <div
        className="py-16 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgb(20, 12, 60) 0%, rgb(55, 35, 160) 60%, rgb(87, 60, 255) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 50% 60%, rgba(87,60,255,0.4) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[680px] mx-auto px-6">
          <h2
            className="font-semibold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-1.2px" }}
          >
            Ready to scale your ad creative?
          </h2>
          <p className="text-white/65 text-base mb-8">
            Join 10M+ marketers. Start for free — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "rgb(87,60,255)", boxShadow: "0 0 40px rgba(87,60,255,0.5)" }}
            >
              Start for free
            </a>
            <a
              href="#"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white/90 border border-white/25 transition-all hover:bg-white/10"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Creatify AI logo"
              width={120}
              height={22}
              className="h-6 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-white/50 leading-relaxed">
              The AI video ad platform trusted by 10M+ marketers worldwide.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col, i) => (
            <div key={i}>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 Creatify AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
