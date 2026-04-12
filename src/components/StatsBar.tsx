const stats = [
  {
    number: "20M+",
    label: "Videos created",
    desc: "Every month, marketers generate millions of high-converting video ads",
  },
  {
    number: "10M+",
    label: "Active users",
    desc: "Marketers, agencies, and brands rely on Creatify every day",
  },
  {
    number: "$650M+",
    label: "Revenue driven",
    desc: "Documented ROI across e-commerce, SaaS, and D2C brands",
  },
];

export function StatsBar() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:px-12 first:pl-0 last:pr-0">
              <p
                className="font-semibold leading-none mb-3"
                style={{
                  fontSize: "clamp(48px, 7vw, 80px)",
                  color: "rgb(87, 60, 255)",
                  letterSpacing: "-2px",
                }}
              >
                {stat.number}
              </p>
              <p className="text-base font-semibold text-gray-900 mb-1">{stat.label}</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[220px] mx-auto">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
