import Image from "next/image";
import { galleryImages } from "@/lib/content";

export function GalleryCarousel() {
  // Duplicate for seamless loop
  const doubled = [...galleryImages, ...galleryImages];

  return (
    <section
      className="py-16 overflow-hidden"
      style={{ backgroundColor: "oklch(0.97 0.02 230)" }}
    >
      <div className="max-w-6xl mx-auto px-5 mb-8">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "oklch(0.48 0.12 230)" }}
        >
          Gallery
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{ color: "oklch(0.13 0.02 230)" }}
        >
          行動剪影
        </h2>
        <p className="text-sm mt-1" style={{ color: "oklch(0.45 0.03 230)" }}>
          每一張照片，都是改變的力量
        </p>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        <div className="flex gallery-track" style={{ width: "max-content" }}>
          {doubled.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-64 h-44 mx-2 rounded-lg overflow-hidden relative"
              aria-label={img.alt}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="256px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
