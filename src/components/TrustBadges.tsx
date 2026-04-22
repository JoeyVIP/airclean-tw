import { Shield, Lock, CheckCircle, Award, Globe, Zap } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    desc: "每年稽核的企業級安全標準",
  },
  {
    icon: Lock,
    title: "GDPR 合規",
    desc: "完全符合歐盟個人資料保護法規",
  },
  {
    icon: Globe,
    title: "CCPA 認證",
    desc: "加州消費者隱私法案認證通過",
  },
  {
    icon: CheckCircle,
    title: "ISO 27001",
    desc: "國際資訊安全管理系統認證",
  },
  {
    icon: Award,
    title: "業界評分第一",
    desc: "AI 影片平台最高評分，4.8/5 顆星",
  },
  {
    icon: Zap,
    title: "99.9% 正常運行",
    desc: "企業級 SLA 保障，專屬客服支援",
  },
];

// 抽象色塊代表企業客戶，不顯示任何真實品牌名稱
const enterprisePlaceholders = [
  { color: "bg-gray-200", width: "w-20" },
  { color: "bg-gray-200", width: "w-16" },
  { color: "bg-gray-200", width: "w-24" },
  { color: "bg-gray-200", width: "w-18" },
  { color: "bg-gray-200", width: "w-20" },
  { color: "bg-gray-200", width: "w-22" },
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
            信任與安全
          </span>
          <h2
            className="font-semibold text-gray-900 leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1px" }}
          >
            從第一天起就達到企業級標準
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-[480px] mx-auto">
            本平台符合頂尖企業對資安與合規的最高要求，讓您安心使用。
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

        {/* Enterprise social proof — abstract placeholders */}
        <div className="mt-14 text-center">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
            企業客戶信賴使用
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {enterprisePlaceholders.map((item, i) => (
              <div
                key={i}
                className={`h-6 rounded-md ${item.color} ${item.width} opacity-40`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
