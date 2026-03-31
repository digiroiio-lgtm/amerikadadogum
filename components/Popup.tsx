"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "popup_shown";

export default function Popup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => {
        setVisible(true);
        localStorage.setItem(STORAGE_KEY, "true");
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60"
      onClick={() => setVisible(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          aria-label="Kapat"
        >
          &times;
        </button>

        <div className="text-4xl mb-4 text-center">🇺🇸</div>
        <h2 className="text-2xl font-bold text-navy text-center mb-2">
          Amerika&apos;da Doğum Planlıyor Musunuz?
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Uzman danışmanlarımız size ücretsiz bilgi verebilir.
        </p>

        <ul className="space-y-2 mb-6">
          {[
            "Amerika'da doğum maliyeti",
            "Doğum vizesi süreci",
            "Hastane seçenekleri",
            "Doğum paketleri",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-gold">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/#form"
          onClick={() => setVisible(false)}
          className="block w-full bg-gold text-navy font-bold py-3 rounded-lg text-center hover:bg-yellow-500 transition-colors"
        >
          Ücretsiz Danışmanlık Al
        </Link>
      </div>
    </div>
  );
}
