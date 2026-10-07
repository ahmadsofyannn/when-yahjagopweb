"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/lib/data";
import TechText from "@/interactive/techtext";

const PROJECTS_TEXTS = {
  id: {
    title: "Proyek",
    hide: "Sembunyikan",
    seeMore: "Lihat Lainnya",
  },
  en: {
    title: "Projects",
    hide: "See Less",
    seeMore: "See More",
  },
} as const;

export default function Projects() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const { lang } = useLanguage();

  const t = PROJECTS_TEXTS[lang] ?? PROJECTS_TEXTS.id;

  // Ambil data proyek berdasarkan bahasa aktif
  const allProjects = projects[lang] ?? [];
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <motion.section
      id="proyek"
      aria-labelledby="judul-proyek"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-start px-4 pb-16 pt-16"
    >
      {/* Header Section */}
      <header className="mx-auto mb-4 mt-2 max-w-2xl text-center pb-14 pt-16">
        <h2 id="judul-proyek" className="sr-only ">
          {t.title}
        </h2>

        {/* Container TechText */}
        <div className="relative h-30 w-full">
          <TechText
            text={t.title}
            fontWeight={690}
            fontSize={80}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            fontFamily=""
            color="#ffffff"
            accentColor="#0F00FF"
            letterSpacing={-0.05}
            reach={200}
            softness={0.7}
            strokeWidth={1.5}
            speed={1}
            lineStyle="dashed"
            selection
            labels
            draggable
            sweep
          />
        </div>
      </header>

      {/* Grid Card Project */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((p, index) => {
          const hasDemo = Boolean(p.url && p.url !== "#");
          const hasGithub = Boolean(p.github && p.github !== "#");

          return (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col justify-between overflow-hidden rounded-[28px] border-2 border-biru bg-zinc-900/60 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-biru hover:shadow-[0_0_40px_rgba(82,39,255,0.6)]"
            >
              <div>
                {/* Inner Box Gambar */}
                <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white bg-black transition-colors">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`Pratinjau antarmuka proyek ${p.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-xl object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-4">
                      <span className="text-xs font-medium text-white">
                        No Preview
                      </span>
                    </div>
                  )}
                </figure>

                {/* Judul & Deskripsi */}
                <div className="px-2 pb-2 pt-5">
                  <h3 className="font-display text-xl font-bold tracking-tight text-white">
                    {p.title}
                  </h3>

                  {p.description && (
                    <p className="mt-2 text-sm leading-relaxed text-white">
                      {p.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Aksi Kartu: Tombol Demo & GitHub */}
              <div className="flex items-center justify-end gap-2 px-2 pb-1 pt-6">
                {hasDemo ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka demo langsung proyek ${p.title}`}
                    className="inline-flex items-center rounded-full border border-white bg-black px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:border-biru active:scale-95"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5 text-xs font-medium text-zinc-600 hover:border-white hover:text-white">
                    No Demo
                  </span>
                )}

                {hasGithub ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka repositori GitHub proyek ${p.title}`}
                    className="inline-flex items-center rounded-full border border-white bg-black px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:border-biru active:scale-95"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5 text-xs font-medium text-zinc-600 hover:border-white hover:text-white">
                    No GitHub
                  </span>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Tombol See More / See Less */}
      {allProjects.length > 6 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            type="button"
            aria-expanded={showAll}
            aria-controls="proyek"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white bg-black px-6 py-3 text-sm font-semibold text-zinc-200 shadow-lg backdrop-blur-md transition-all hover:border-biru hover:text-white active:scale-95"
          >
            <span aria-hidden="true">{showAll ? "▲" : "▼"}</span>
            {showAll ? t.hide : t.seeMore}
          </button>
        </div>
      )}
    </motion.section>
  );
}