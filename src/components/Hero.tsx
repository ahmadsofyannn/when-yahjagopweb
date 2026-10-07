"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ProfileCard } from "@/interactive/ProfileCard";

// Dynamic import Aurora agar aman dari SSR WebGL / Canvas
const Aurora = dynamic(() => import("@/interactive/Aurora"), {
  ssr: false,
});

const HERO_TEXTS = {
  id: {
    greeting: "HALO, SAYA",
    rolePrefix: "SEORANG",
    roleTitle: "Pengembang Web Front-End",
    viewProjects: "Lihat Proyek",
    contactMe: "Kontak Saya",
    hubungiSaya: "Hubungi Saya",
    socialAriaLabel: "Media Sosial",
  },
  en: {
    greeting: "HELLO, I AM",
    rolePrefix: "AS A",
    roleTitle: "Front-End Web Developer",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    hubungiSaya: "Contact Me",
    socialAriaLabel: "Social Media",
  },
} as const;

export default function Hero() {
  const { lang } = useLanguage();
  const t = HERO_TEXTS[lang] ?? HERO_TEXTS.id;

  const handleContactClick = () => {
    const contactSection = document.getElementById("kontak");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="beranda"
      aria-labelledby="judul-beranda"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-20 md:py-32"
    >
      {/* Background Aurora */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden" aria-hidden="true">
        <Aurora />
      </div>

      {/* Kontainer Utama Konten */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-6 md:flex-row">
        
        {/* Kolom Kiri: Teks & Navigasi */}
        <div className="w-full max-w-xl flex-1 self-start pt-10">
          <header className="mb-6 text-white tracking-tight drop-shadow-sm">
            <p className="mb-2 font-display text-sm font-bold uppercase tracking-widest text-zinc-400 md:text-xl">
              {t.greeting}
            </p>

            <h1
              id="judul-beranda"
              className="mt-3 -mb-1 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Ahmad Sofyan
            </h1>

            <div className="mt-4">
              <span className="font-display text-sm font-bold uppercase tracking-widest text-zinc-400 md:text-xl">
                {t.rolePrefix}
              </span>
              <p className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                {t.roleTitle}
              </p>
            </div>
          </header>

          {/* Social Links */}
          <nav aria-label={t.socialAriaLabel} className="mb-8">
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub Ahmad Sofyan"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-zinc-900/60 text-white transition-all duration-300 hover:scale-110 hover:border-biru hover:text-biru active:scale-95"
                >
                  <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn Ahmad Sofyan"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-zinc-900/60 text-white transition-all duration-300 hover:scale-110 hover:border-biru hover:text-biru active:scale-95"
                >
                  <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.69-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil Instagram Ahmad Sofyan"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-zinc-900/60 text-white transition-all duration-300 hover:scale-110 hover:border-biru hover:text-biru active:scale-95"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 rounded-full border border-white bg-black px-6 py-3 text-sm font-medium text-zinc-200 transition-all hover:scale-105 hover:border-biru hover:text-white active:scale-95"
            >
              {t.viewProjects} <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full border border-white bg-black px-6 py-3 text-sm font-medium text-zinc-200 transition-all hover:scale-105 hover:border-biru hover:text-white active:scale-95"
            >
              {t.contactMe} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Profile Card */}
        <div className="flex w-full max-w-md flex-1 items-center justify-center self-start">
          <div className="w-full max-w-[420px] font-display">
            <ProfileCard
              name=""
              title=""
              handle="Sofyan"
              contactText={t.hubungiSaya}
              avatarUrl="/pp.png"
              miniAvatarUrl="/circle.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleContactClick}
              behindGlowEnabled={true}
              behindGlowColor="rgba(255, 255, 255, 1)"
              behindGlowSize="100%"
            />
          </div>
        </div>

      </div>
    </motion.section>
  );
}