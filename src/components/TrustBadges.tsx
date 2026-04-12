import { Shield, Lock, CheckCircle, Award, Globe, Zap } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    desc: "Enterprise-grade security audited annually",
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    desc: "Full compliance with EU data protection laws",
  },
  {
    icon: Globe,
    title: "CCPA Ready",
    desc: "California Consumer Privacy Act certified",
  },
  {
    icon: CheckCircle,
    title: "ISO 27001",
    desc: "International information security standard",
  },
  {
    icon: Award,
    title: "G2 Leader",
    desc: "Top-rated AI video platform — 4.8/5 stars",
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    desc: "Enterprise SLA with dedicated support",
  },
];

const enterpriseLogos = [
  "Nike", "Sony", "L'Oréal", "Unilever", "Samsung", "Microsoft",
];

export function TrustBadges() {
  return (
    <section className="py-20 bg-[rgb(252,252,252)] border-y border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: "rgb(87,60,255)", background: "rgba(87,60,255,0.08)" }}
          >
            Trust & Security
          </span>
          <h2
            className="font-semibold text-gray-900 leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1px" }}
          >
            Enterprise-ready from day one
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-[480px] mx-auto">
            Creatify meets the security and compliance standards that Fortune 500 companies demand.
          </p>
        </div>

        {/* Badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 bg-white hover:border-[rgba(87,60,255,0.3)] transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(87,60,255,0.08)" }}
                >
                  <Icon size={20} style={{ color: "rgb(87,60,255)" }} />
                </div>
                <p className="text-xs font-semibold text-gray-900">{badge.title}</p>
                <p className="text-[11px] text-gray-400 mt-1 leading-tight">{badge.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Enterprise social proof */}
        <div className="mt-14 text-center">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
            Trusted by enterprise teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {enterpriseLogos.map((logo, i) => (
              <span
                key={i}
                className="text-sm font-semibold text-gray-300 hover:text-gray-400 transition-colors cursor-pointer"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
