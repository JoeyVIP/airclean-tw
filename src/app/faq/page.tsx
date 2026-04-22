"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { faq } from "@/lib/content";
import { ChevronDown } from "lucide-react";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b last:border-0"
      style={{ borderColor: "oklch(0.90 0.02 230)" }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-semibold text-sm md:text-base"
          style={{ color: "oklch(0.13 0.02 230)" }}
        >
          {question}
        </span>
        <ChevronDown
          size={18}
          className="shrink-0 transition-transform duration-200"
          style={{
            color: "oklch(0.55 0.12 230)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(0.35 0.03 145)" }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
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
            FAQ
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "oklch(0.13 0.02 230)" }}
          >
            常見問題
          </h1>
          <p className="text-sm mt-2" style={{ color: "oklch(0.45 0.03 230)" }}>
            找不到答案？歡迎透過聯絡頁面直接詢問
          </p>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto px-5 py-12">
          <div
            className="rounded-lg border bg-white px-6"
            style={{ borderColor: "oklch(0.90 0.02 230)" }}
          >
            {faq.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-10 rounded-lg p-8 text-center"
            style={{ backgroundColor: "oklch(0.92 0.06 145)" }}
          >
            <h2
              className="font-bold text-lg mb-2"
              style={{ color: "oklch(0.13 0.02 230)" }}
            >
              還有其他問題？
            </h2>
            <p className="text-sm mb-5" style={{ color: "oklch(0.35 0.04 145)" }}>
              我們很樂意協助您。填寫聯絡表單，通常在 2 個工作天內回覆。
            </p>
            <a
              href="/contact"
              className="inline-block px-7 py-2.5 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "oklch(0.55 0.12 230)" }}
            >
              聯絡我們
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
