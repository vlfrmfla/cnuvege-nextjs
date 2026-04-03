"use client";

import { useState } from "react";

const notices = [
  "Recruiting new researchers for 2026 — We are looking for graduate and undergraduate intern researchers.",
];

export function NoticeBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const separator = "　　　•　　　";
  const text = notices.join(separator);
  const fullText = text + separator + text;

  return (
    <div className="w-full bg-olive-800 dark:bg-olive-900 text-gray-100 overflow-hidden">
      <div className="flex items-center h-10">
        {/* NOTICE badge */}
        <div className="shrink-0 h-full flex items-center px-4 bg-olive-500">
          <span className="text-xs font-bold tracking-widest text-white">
            NOTICE
          </span>
        </div>

        {/* Scrolling text */}
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="inline-block text-sm px-6">{fullText}</span>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="shrink-0 h-full px-3 flex items-center text-gray-400 hover:text-white transition-colors"
          aria-label="Close notice"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="2" y1="2" x2="12" y2="12" />
            <line x1="12" y1="2" x2="2" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
