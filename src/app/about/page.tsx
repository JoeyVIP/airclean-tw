import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { about } from "@/lib/content";
import { Leaf, Users, Shield, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = {
  title: "關於我們 | 台灣健康空氣行動聯盟",
  description:
    "認識台灣健康空氣行動聯盟的使命、故事與核心價值。自 2014 年起持續推動台灣空氣品質改善。",
};

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  users: Users,
  shield: Shield,
  heart: Heart,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
        <div
          className="py-14 text-center"
          style={{ backgroundColor: "oklch(0.96 0.02 230)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "oklch(0.48 0.12 230)" }}
          >
            About Us
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "oklch(0.13 0.02 230)" }}
          >
            {about.title}
          </h1>
        </div>

        {/* Mission */}
        <section className="max-w-3xl mx-auto px-5 py-14 text-center">
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "oklch(0.55 0.12 230)" }}
          >
            {about.mission_title}
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "oklch(0.25 0.03 145)" }}
          >
            {about.mission}
          </p>
        </section>

        <hr className="section-divider" />

        {/* Values */}
        <section className="py-14 max-w-6xl mx-auto px-5">
          <h2
            className="text-2xl font-bold mb-10 text-center"
            style={{ color: "oklch(0.13 0.02 230)" }}
          >
            核心價值
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {about.values.map((val) => {
              const Icon = iconMap[val.icon] ?? Leaf;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-lg border text-center bg-white card-lift"
                  style={{ borderColor: "oklch(0.90 0.02 230)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "oklch(0.92 0.06 145)" }}
                  >
                    <Icon size={22} style={{ color: "oklch(0.55 0.12 230)" }} />
                  </div>
                  <h3
                    className="font-bold text-sm mb-2"
                    style={{ color: "oklch(0.13 0.02 230)" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.03 230)" }}>
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="section-divider" />

        {/* Story */}
        <section
          className="py-14"
          style={{ backgroundColor: "oklch(0.97 0.01 145)" }}
        >
          <div className="max-w-3xl mx-auto px-5">
            <h2
              className="text-2xl font-bold mb-8"
              style={{ color: "oklch(0.13 0.02 230)" }}
            >
              {about.story_title}
            </h2>
            {about.story.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-sm md:text-base leading-relaxed mb-4 last:mb-0"
                style={{ color: "oklch(0.25 0.03 145)" }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* Team */}
        <section className="py-14 max-w-6xl mx-auto px-5">
          <h2
            className="text-2xl font-bold mb-10 text-center"
            style={{ color: "oklch(0.13 0.02 230)" }}
          >
            核心團隊
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {about.team.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border p-5 bg-white text-center card-lift"
                style={{ borderColor: "oklch(0.90 0.02 230)" }}
              >
                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.82 0.08 145)" }}
                  aria-hidden="true"
                >
                  <span
                    className="text-xl font-bold"
                    style={{ color: "oklch(0.55 0.12 230)" }}
                  >
                    {member.name[0]}
                  </span>
                </div>
                <h3
                  className="font-bold text-base"
                  style={{ color: "oklch(0.13 0.02 230)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-medium mb-2"
                  style={{ color: "oklch(0.48 0.10 145)" }}
                >
                  {member.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.03 230)" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
