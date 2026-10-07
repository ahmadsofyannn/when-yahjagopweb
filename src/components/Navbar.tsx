"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LABELS = {
  id: { home: "Beranda", about: "Tentang", projects: "Proyek", contact: "Kontak" },
  en: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
} as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { lang, toggleLanguage } = useLanguage();

  const currentLabels = NAV_LABELS[lang] ?? NAV_LABELS.id;

  const navLinks: NavLink[] = [
    { href: "#beranda", label: currentLabels.home },
    { href: "#tentang", label: currentLabels.about },
    { href: "#proyek", label: currentLabels.projects },
    { href: "#kontak", label: currentLabels.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isIndonesian = lang === "id";
  const languageAriaLabel = isIndonesian
    ? "Beralih ke Bahasa Inggris"
    : "Switch to Indonesian";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        aria-label={isIndonesian ? "Navigasi Utama" : "Main Navigation"}
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-6 py-3 text-white transition-all duration-300 ${
          scrolled
            ? "border-2 border-white bg-black shadow-2xl backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Brand/Logo Link */}
        <Link
          href="#beranda"
          className="font-display text-lg font-bold tracking-tight text-white transition-colors"
        >
          Ahmad Sofyan
        </Link>

        {/* Menu Navigasi & Kontrol Bahasa */}
        <div className="flex items-center gap-6 md:gap-8">
          <ul className="font-display flex items-center gap-6 text-sm font-bold text-white md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-block py-1 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Pemisah Vertikal Semantik */}
          <div
            role="separator"
            aria-orientation="vertical"
            className="h-4 w-[2px] bg-white"
          />

          {/* Tombol Toggle Bahasa */}
          <button
            onClick={toggleLanguage}
            type="button"
            aria-label={languageAriaLabel}
            title={languageAriaLabel}
            className="group relative flex cursor-pointer items-center gap-1.5 py-1 text-xs font-semibold text-white transition-all active:scale-95"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span className="uppercase" aria-live="polite">
              {lang}
            </span>
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </button>
        </div>
      </nav>
    </header>
  );
}