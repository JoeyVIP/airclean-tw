"use client";

import { useEffect, useState } from "react";

function getTimeWeight(): number {
  const hour = new Date().getHours();
  // 白天多（8-22 點），晚上少（22-8 點）
  if (hour >= 8 && hour < 12) return 1.0;
  if (hour >= 12 && hour < 18) return 1.2;
  if (hour >= 18 && hour < 22) return 0.8;
  return 0.3; // 深夜
}

function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const messages = [
  (n: number) => `有 ${n} 人正在製作影片`,
  (n: number) => `已有 ${n.toLocaleString()} 個品牌透過 AI 影片狂賣商品`,
  (n: number) => `過去 24 小時生成了 ${n.toLocaleString()} 支影片`,
  (n: number) => `${n} 位行銷人正在測試廣告素材`,
];

export function SocialProof() {
  const [currentMsg, setCurrentMsg] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const weight = getTimeWeight();
      const msgIdx = randomInRange(0, messages.length - 1);
      let num: number;

      switch (msgIdx) {
        case 0: // 正在製作影片的人數
          num = randomInRange(Math.floor(8 * weight), Math.floor(47 * weight));
          break;
        case 1: // 品牌總數（累計，跳動）
          num = randomInRange(12400, 12800);
          break;
        case 2: // 24hr 影片數
          num = randomInRange(Math.floor(3200 * weight), Math.floor(8700 * weight));
          break;
        case 3: // 正在測試的人
          num = randomInRange(Math.floor(15 * weight), Math.floor(63 * weight));
          break;
        default:
          num = randomInRange(10, 50);
      }

      setCurrentMsg(messages[msgIdx](num));
      setVisible(true);

      // 5 秒後淡出
      setTimeout(() => setVisible(false), 5000);
    };

    // 首次 3 秒後出現
    const firstTimer = setTimeout(update, 3000);
    // 之後每 8-15 秒隨機出現
    const interval = setInterval(update, randomInRange(8000, 15000));

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 max-w-xs transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div
        className="flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md"
        style={{ background: "rgba(87, 60, 255, 0.9)" }}
      >
        {/* Pulse dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
        </span>
        <p className="text-sm font-medium text-white leading-snug">{currentMsg}</p>
      </div>
    </div>
  );
}
