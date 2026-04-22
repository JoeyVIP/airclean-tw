import { stats } from "@/lib/content";

export function StatsBar() {
  return (
    <section
      className="py-14 border-b"
      style={{ borderColor: "oklch(0.90 0.02 230)" }}
    >
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <p
              className="font-bold text-3xl md:text-4xl leading-none mb-2"
              style={{ color: "oklch(0.55 0.12 230)" }}
            >
              {item.number}
            </p>
            <p className="text-sm font-medium" style={{ color: "oklch(0.45 0.03 230)" }}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
