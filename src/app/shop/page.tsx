import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { shop } from "@/lib/content";
import Image from "next/image";

export const metadata = {
  title: "響應商品 | 台灣健康空氣行動聯盟",
  description:
    "購買 ACT 響應商品，支持台灣空氣品質改善倡議。每件商品收入 50% 回饋倡議計畫。",
};

export default function ShopPage() {
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
            Shop
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "oklch(0.13 0.02 230)" }}
          >
            {shop.title}
          </h1>
          <p className="text-sm mt-2" style={{ color: "oklch(0.45 0.03 230)" }}>
            {shop.subtitle}
          </p>
        </div>

        {/* Revenue info banner */}
        <div
          className="py-4 px-5 text-center text-sm font-medium leading-relaxed"
          style={{
            backgroundColor: "oklch(0.55 0.12 230)",
            color: "white",
          }}
        >
          購買響應商品，收入的 50% 直接回饋 ACT 的倡議計畫。
        </div>

        {/* Products grid */}
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {shop.items.map((item) => (
              <article
                key={item.id}
                className="card-lift rounded-lg border overflow-hidden bg-white flex flex-col"
                style={{ borderColor: "oklch(0.90 0.02 230)" }}
              >
                <div className="h-40 sm:h-52 w-full relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <span className="absolute top-3 left-3 act-tag z-10">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h2
                    className="font-bold text-base mb-2"
                    style={{ color: "oklch(0.13 0.02 230)" }}
                  >
                    {item.name}
                  </h2>
                  <p
                    className="text-xs leading-relaxed flex-1 mb-4"
                    style={{ color: "oklch(0.45 0.02 230)" }}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold text-lg"
                      style={{ color: "oklch(0.55 0.12 230)" }}
                    >
                      NT$ {item.price.toLocaleString()}
                    </span>
                    <button
                      className="px-4 py-2 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "oklch(0.55 0.12 230)" }}
                      type="button"
                    >
                      洽詢購買
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer note */}
          <p
            className="text-center text-xs mt-10"
            style={{ color: "oklch(0.55 0.03 230)" }}
          >
            商品為展示用途，請透過聯絡我們頁面洽詢訂購事宜。
            <br />
            購買所得 50% 直接支援 ACT 倡議計畫。
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
