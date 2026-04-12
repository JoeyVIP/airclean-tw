import Image from "next/image";

const brands = [
  { name: "Amazon", img: "/images/img-01.png" },
  { name: "Google", img: "/images/img-02.png" },
  { name: "Meta", img: "/images/img-03.png" },
  { name: "TikTok", img: "/images/img-04.png" },
  { name: "Shopify", img: "/images/img-05.png" },
  { name: "Walmart", img: "/images/img-06.png" },
  { name: "Adobe", img: "/images/img-07.png" },
  { name: "Salesforce", img: "/images/img-08.png" },
  { name: "HubSpot", img: "/images/img-09.png" },
  { name: "Stripe", img: "/images/img-10.png" },
  { name: "Figma", img: "/images/img-11.png" },
  { name: "Notion", img: "/images/img-12.png" },
  { name: "Slack", img: "/images/img-13.png" },
  { name: "Zoom", img: "/images/img-14.png" },
  { name: "Canva", img: "/images/img-15.png" },
  { name: "Dropbox", img: "/images/img-16.png" },
  { name: "Twilio", img: "/images/img-17.png" },
  { name: "Zendesk", img: "/images/img-18.png" },
];

export function BrandCarousel() {
  return (
    <section className="py-14 bg-[rgb(252,252,252)] border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-medium tracking-widest text-gray-400 uppercase mb-8">
        Trusted by 10M+ marketers at
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
          {[...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-8 shrink-0"
              style={{ height: 48 }}
            >
              <Image
                src={brand.img}
                alt={brand.name}
                width={100}
                height={36}
                className="h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
