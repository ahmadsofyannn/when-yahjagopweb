"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const FOOTER_TEXTS = {
  id: {
    builtWith: "Dibuat dengan Next.js & Tailwind CSS.",
    backToTop: "Kembali ke atas",
    navLabel: "Navigasi Footer",
  },
  en: {
    builtWith: "Built with Next.js & Tailwind CSS.",
    backToTop: "Back to top",
    navLabel: "Footer Navigation",
  },
} as const;

export default function Footer() {
  const { lang } = useLanguage();
  const t = FOOTER_TEXTS[lang] ?? FOOTER_TEXTS.id;

  const name = "Ahmad Sofyan";
  const [year, setYear] = useState<number | null>(null);

  // Hindari hydration mismatch dari `new Date().getFullYear()`
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const displayYear = year ?? 2026;

  return (
    <footer className="flex w-full justify-center px-4 pb-8 pt-4">
      {/* Floating Capsule Bar */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border-2 border-white bg-black px-6 py-3.5 shadow-xl backdrop-blur-xl transition-all">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <span className="select-none font-display text-base font-extrabold tracking-tight text-white">
            {name}
          </span>
        </div>

        {/* Copyright & Tech Stack Info (Desktop & Tablet) */}
        <p className="hidden text-center text-xs text-white sm:block">
          &copy; {displayYear} <span className="font-medium text-white">{name}</span>.{" "}
          {t.builtWith}
        </p>

        {/* Copyright Singkat (Mobile) */}
        <p className="text-xs text-white sm:hidden">
          &copy; {displayYear} {name}
        </p>

        {/* Tautan Navigasi Cepat (Back to Top) */}
        <nav aria-label={t.navLabel} className="flex items-center gap-3">
          <a
            href="#beranda"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black text-zinc-300 transition-all hover:border-biru hover:text-biru active:scale-95"
            aria-label={t.backToTop}
            title={t.backToTop}
          >
            <span aria-hidden="true" className="text-sm font-bold">
              ↑
            </span>
          </a>
        </nav>
      </div>
    </footer>
  );
}