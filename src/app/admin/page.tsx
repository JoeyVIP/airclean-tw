"use client";

import { useState } from "react";
import { news, activities } from "@/lib/content";
import { ActLogo } from "@/components/ActLogo";
import { Send, FileText, CalendarDays, ChevronRight } from "lucide-react";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
}

export default function AdminPage() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!command.trim()) return;
    setLoading(true);
    setResponse(null);
    setTimeout(() => {
      setLoading(false);
      setResponse(
        "已收到指令，AI 正在處理...\n（實際串接需配置 Claude API Key）"
      );
    }, 800);
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "oklch(0.97 0.02 230)" }}
    >
      {/* Top bar */}
      <header
        className="px-6 py-4 flex items-center justify-between border-b"
        style={{
          backgroundColor: "oklch(0.15 0.07 230)",
          borderColor: "oklch(0.22 0.08 230)",
        }}
      >
        <div className="flex items-center gap-3">
          <ActLogo variant="light" />
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded"
            style={{
              backgroundColor: "oklch(0.55 0.12 230)",
              color: "white",
            }}
          >
            後台管理
          </span>
        </div>
        <div
          className="flex items-center gap-1.5 text-xs font-medium"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
          ENSCON AI Powered
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-5 py-10 flex flex-col gap-8">
        {/* AI CLI 輸入區 */}
        <section
          className="rounded-xl border overflow-hidden"
          style={{
            backgroundColor: "white",
            borderColor: "oklch(0.90 0.02 230)",
            boxShadow: "0 2px 12px oklch(0.55 0.12 230 / 0.06)",
          }}
        >
          <div
            className="px-6 py-4 border-b flex items-center gap-2"
            style={{ borderColor: "oklch(0.90 0.02 230)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="oklch(0.55 0.12 230)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
            <h1
              className="font-bold text-base"
              style={{ color: "oklch(0.13 0.02 230)" }}
            >
              內容管理後台
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="command"
                className="text-sm font-semibold"
                style={{ color: "oklch(0.13 0.02 230)" }}
              >
                AI 指令
              </label>
              <p className="text-xs" style={{ color: "oklch(0.55 0.04 230)" }}>
                輸入指令，例如：發布一篇新聞稿《空氣品質法修正案通過》，或新增一個 5/20 活動「北部空污監測日」...
              </p>
            </div>

            <textarea
              id="command"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              rows={5}
              placeholder="在此輸入您的內容管理指令..."
              className="w-full rounded-lg border px-4 py-3 text-sm resize-y outline-none transition-colors"
              style={{
                borderColor: "oklch(0.88 0.03 230)",
                color: "oklch(0.13 0.02 230)",
                backgroundColor: "oklch(0.985 0.01 230)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "oklch(0.55 0.12 230)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "oklch(0.88 0.03 230)";
              }}
            />

            <div className="flex items-center justify-between">
              <p className="text-xs" style={{ color: "oklch(0.65 0.04 230)" }}>
                按下送出後，AI 將解析指令並更新網站內容
              </p>
              <button
                type="submit"
                disabled={loading || !command.trim()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                style={{ backgroundColor: "oklch(0.55 0.12 230)" }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    處理中
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    送出給 AI 處理
                  </>
                )}
              </button>
            </div>
          </form>

          {/* AI 回應區 */}
          {response && (
            <div
              className="mx-6 mb-6 rounded-lg p-4 border"
              style={{
                backgroundColor: "oklch(0.96 0.03 230)",
                borderColor: "oklch(0.88 0.05 230)",
              }}
            >
              <p className="text-xs font-semibold mb-1" style={{ color: "oklch(0.48 0.12 230)" }}>
                AI 回應
              </p>
              <pre
                className="text-sm whitespace-pre-wrap"
                style={{ color: "oklch(0.13 0.02 230)" }}
              >
                {response}
              </pre>
            </div>
          )}
        </section>

        {/* 現有內容預覽 */}
        <section
          className="rounded-xl border overflow-hidden"
          style={{
            backgroundColor: "white",
            borderColor: "oklch(0.90 0.02 230)",
            boxShadow: "0 2px 12px oklch(0.55 0.12 230 / 0.06)",
          }}
        >
          <div
            className="px-6 py-4 border-b flex items-center gap-2"
            style={{ borderColor: "oklch(0.90 0.02 230)" }}
          >
            <FileText size={18} color="oklch(0.55 0.12 230)" />
            <h2
              className="font-bold text-base"
              style={{ color: "oklch(0.13 0.02 230)" }}
            >
              目前新聞列表
            </h2>
            <span
              className="ml-auto text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{
                backgroundColor: "oklch(0.92 0.04 230)",
                color: "oklch(0.35 0.10 230)",
              }}
            >
              {news.length} 篇
            </span>
          </div>

          <ul className="divide-y" style={{ borderColor: "oklch(0.94 0.02 230)" }}>
            {news.map((item) => (
              <li
                key={item.id}
                className="px-6 py-4 flex items-start justify-between gap-4"
              >
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
                      style={{
                        backgroundColor: "oklch(0.92 0.04 230)",
                        color: "oklch(0.35 0.10 230)",
                      }}
                    >
                      {item.category}
                    </span>
                    <time
                      className="text-xs"
                      style={{ color: "oklch(0.60 0.04 230)" }}
                    >
                      {formatDate(item.date)}
                    </time>
                  </div>
                  <p
                    className="text-sm font-semibold leading-snug truncate"
                    style={{ color: "oklch(0.13 0.02 230)" }}
                  >
                    {item.title}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className="shrink-0 mt-1"
                  style={{ color: "oklch(0.75 0.04 230)" }}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* 即將舉行活動 */}
        <section
          className="rounded-xl border overflow-hidden"
          style={{
            backgroundColor: "white",
            borderColor: "oklch(0.90 0.02 230)",
            boxShadow: "0 2px 12px oklch(0.55 0.12 230 / 0.06)",
          }}
        >
          <div
            className="px-6 py-4 border-b flex items-center gap-2"
            style={{ borderColor: "oklch(0.90 0.02 230)" }}
          >
            <CalendarDays size={18} color="oklch(0.55 0.12 230)" />
            <h2
              className="font-bold text-base"
              style={{ color: "oklch(0.13 0.02 230)" }}
            >
              即將舉行活動
            </h2>
            <span
              className="ml-auto text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{
                backgroundColor: "oklch(0.92 0.04 230)",
                color: "oklch(0.35 0.10 230)",
              }}
            >
              {activities.length} 項
            </span>
          </div>

          <ul className="divide-y" style={{ borderColor: "oklch(0.94 0.02 230)" }}>
            {activities.map((item) => (
              <li
                key={item.title}
                className="px-6 py-4 flex items-start justify-between gap-4"
              >
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
                      style={{
                        backgroundColor: "oklch(0.92 0.04 230)",
                        color: "oklch(0.35 0.10 230)",
                      }}
                    >
                      {item.tag}
                    </span>
                    <time
                      className="text-xs"
                      style={{ color: "oklch(0.60 0.04 230)" }}
                    >
                      {item.date}
                    </time>
                  </div>
                  <p
                    className="text-sm font-semibold leading-snug"
                    style={{ color: "oklch(0.13 0.02 230)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.55 0.03 230)" }}
                  >
                    {item.location}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className="shrink-0 mt-1"
                  style={{ color: "oklch(0.75 0.04 230)" }}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Footer note */}
        <p
          className="text-center text-xs pb-4"
          style={{ color: "oklch(0.65 0.04 230)" }}
        >
          ENSCON AI 內容管理介面 — 僅限授權人員使用
        </p>
      </main>
    </div>
  );
}
