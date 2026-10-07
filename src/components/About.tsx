"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import LogoLoop from "@/interactive/LogoLoop";
import { useLanguage } from "@/context/LanguageContext";
import TechText from "@/interactive/techtext";

import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiGit,
  SiFigma,
  SiSketch,
  SiDavinciresolve,
  SiObsstudio,
} from "react-icons/si";

// Dynamic import untuk komponen 3D Lanyard agar aman dari SSR / Canvas error
const Lanyard = dynamic(() => import("@/interactive/Lanyard"), {
  ssr: false,
});

interface StackItem {
  title: string;
  href: string;
  node: React.ReactNode;
}

// 1. STACKS BARIS 1
const STACKS_ROW_1: StackItem[] = [
  {
    title: "React",
    href: "https://react.dev",
    node: (
      <div className="group/card flex w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-cyan-500/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-[#61DAFB] transition-transform duration-300 group-hover/card:scale-110">
          <SiReact className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-3 font-display text-sm font-semibold text-white">React</p>
        <span className="mt-1 font-mono text-[10px] font-medium tracking-wider text-white">FRONTEND LIB</span>
      </div>
    ),
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    node: (
      <div className="group/card flex w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-emerald-500/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-[#06B6D4] transition-transform duration-300 group-hover/card:scale-110">
          <SiTailwindcss className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-3 font-display text-sm font-semibold text-white">Tailwind</p>
        <span className="mt-1 font-mono text-[10px] font-medium tracking-wider text-white">CSS FRAMEWORK</span>
      </div>
    ),
  },
  {
    title: "Firebase",
    href: "https://firebase.google.com",
    node: (
      <div className="group/card flex w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-amber-500/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-[#FFCA28] transition-transform duration-300 group-hover/card:scale-110">
          <SiFirebase className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-3 font-display text-sm font-semibold text-white">Firebase</p>
        <span className="mt-1 font-mono text-[10px] font-medium tracking-wider text-white">BACKEND SERVICE</span>
      </div>
    ),
  },
  {
    title: "Next.js",
    href: "https://nextjs.org",
    node: (
      <div className="group/card flex w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-zinc-300/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/80 text-white transition-transform duration-300 group-hover/card:scale-110">
          <SiNextdotjs className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-3 font-display text-sm font-semibold text-white">Next.js</p>
        <span className="mt-1 font-mono text-[10px] font-medium tracking-wider text-white">WEB FRAMEWORK</span>
      </div>
    ),
  },
  {
    title: "Git / Github",
    href: "https://github.com",
    node: (
      <div className="group/card flex w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-rose-500/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-[#F05032] transition-transform duration-300 group-hover/card:scale-110">
          <SiGit className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-3 font-display text-sm font-semibold text-white">Git / Github</p>
        <span className="mt-1 font-mono text-[10px] font-medium tracking-wider text-white">VERSION CONTROL</span>
      </div>
    ),
  },
  {
    title: "Figma",
    href: "https://figma.com",
    node: (
      <div className="group/card flex w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-purple-500/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-[#F24E1E] transition-transform duration-300 group-hover/card:scale-110">
          <SiFigma className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-3 font-display text-sm font-semibold text-white">Figma</p>
        <span className="mt-1 font-mono text-[10px] font-medium tracking-wider text-white">UI/UX DESIGN</span>
      </div>
    ),
  },
];

// 2. STACKS BARIS 2
const STACKS_ROW_2: StackItem[] = [
  {
    title: "Sketch",
    href: "https://sketch.com",
    node: (
      <div className="group/card flex w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-yellow-500/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-[#FDB040] transition-transform duration-300 group-hover/card:scale-110">
          <SiSketch className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-3 font-display text-sm font-semibold text-white">Sketch</p>
        <span className="mt-1 font-mono text-[10px] font-medium tracking-wider text-white">PROTOTYPING</span>
      </div>
    ),
  },
  {
    title: "DaVinci",
    href: "https://blackmagicdesign.com/davinciresolve",
    node: (
      <div className="group/card flex w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-pink-500/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-[#E84E36] transition-transform duration-300 group-hover/card:scale-110">
          <SiDavinciresolve className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-3 font-display text-sm font-semibold text-white">DaVinci</p>
        <span className="mt-1 font-mono text-[10px] font-medium tracking-wider text-white">COLORIST</span>
      </div>
    ),
  },
  {
    title: "OBS Studio",
    href: "https://obsproject.com",
    node: (
      <div className="group/card flex w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-zinc-400/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/80 text-white transition-transform duration-300 group-hover/card:scale-110">
          <SiObsstudio className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-3 font-display text-sm font-semibold text-white">OBS Studio</p>
        <span className="mt-1 font-mono text-[10px] font-medium tracking-wider text-white">STREAMING</span>
      </div>
    ),
  },
];

const ABOUT_TEXTS = {
  id: {
    srTitle: "Tentang Saya",
    techText: "Tentang Saya",
    whoAmI: "Siapa Saya?",
    bio: "Saya adalah seorang web developer yang berfokus pada pengembangan aplikasi web modern menggunakan Next.js, React, dan Tailwind CSS. Berpengalaman dalam membangun antarmuka yang responsif, interaktif, dan berkinerja tinggi.",
  },
  en: {
    srTitle: "About Me",
    techText: "About Me",
    whoAmI: "Who I Am?",
    bio: "I am a web developer focused on modern web development using Next.js, React, and Tailwind CSS. Experienced in building responsive, interactive, and high-performance user interfaces.",
  },
} as const;

export default function About() {
  const { lang } = useLanguage();
  const t = ABOUT_TEXTS[lang] ?? ABOUT_TEXTS.id;

  return (
    <motion.section
      id="tentang"
      aria-labelledby="judul-tentang"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-start space-y-12 px-4 pb-16 pt-20"
    >
      <header className="mx-auto my-4 max-w-2xl text-center pt-12">
        <h2 id="judul-tentang" className="sr-only">
          {t.srTitle}
        </h2>
        <div className="relative h-40 w-full">
          <TechText
            text={t.techText}
            fontWeight={600}
            fontSize={120}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            fontFamily="fpnt-display"
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

      {/* CARD 1: ABOUT ME & LANYARD 3D */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative overflow-hidden rounded-[28px] border-2 border-biru bg-zinc-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-biru hover:shadow-[0_0_40px_rgba(82,39,255,0.6)] md:p-10"
      >
        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* KOLOM KIRI: CONTAINER LANYARD 3D */}
          <figure className="mx-auto w-full max-w-[360px] lg:col-span-5">
            <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white bg-zinc-900/60 sm:h-[480px]">
              <div className="relative h-full w-full">
                <Lanyard
                  frontImage="/lanyard.png"
                  backImage="/back.png"
                  imageFit="cover"
                />
              </div>
            </div>
          </figure>

          {/* KOLOM KANAN: CODE SNIPPET & BIOGRAFI */}
          <div className="flex flex-col space-y-6 lg:col-span-7">
            {/* Terminal / Code Block */}
            <div className="w-full max-w-[420px] rounded-xl border border-white bg-zinc-950 p-5 font-mono text-xs text-zinc-300 shadow-inner sm:text-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-red-500/80" />
                <span className="inline-block h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="inline-block h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <pre className="overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = &#123;
                  {"\n"}  name: <span className="text-emerald-400">'Ahmad Sofyan'</span>,
                  {"\n"}  role: <span className="text-emerald-400">'Full-stack Enthusiast'</span>,
                  {"\n"}  major: <span className="text-emerald-400">'Informatics'</span>,
                  {"\n"}  university: <span className="text-emerald-400">'University of Jember'</span>
                  {"\n"}&#125;;
                </code>
              </pre>
            </div>

            {/* Deskripsi Teks */}
            <div className="max-w-[540px]">
              <h3 className="font-display text-2xl font-extrabold text-white sm:text-4xl">
                {t.whoAmI}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white sm:text-base">
                {t.bio}
              </p>
            </div>
          </div>
        </div>
      </motion.article>

      {/* CARD 2: CREATIVE & TECH STACK (LOGO LOOP INFINITE SCROLL) */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative overflow-hidden rounded-[28px] border-2 border-biru bg-zinc-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-biru hover:shadow-[0_0_40px_rgba(82,39,255,0.6)] md:p-10"
      >
        <header className="mb-8 text-center">
          <h3 className="font-display text-2xl font-extrabold text-white transition-colors md:text-3xl">
            Creative &amp; Tech Stack
          </h3>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-[#5227ff]" />
        </header>

        {/* LogoLoop Baris 1 & Baris 2 */}
        <div className="flex flex-col gap-6">
          <LogoLoop
            logos={STACKS_ROW_1}
            speed={60}
            direction="left"
            gap={16}
            hoverSpeed={0}
            fadeOut={true}
          />

          <LogoLoop
            logos={STACKS_ROW_2}
            speed={60}
            direction="right"
            gap={16}
            hoverSpeed={0}
            fadeOut={true}
          />
        </div>
      </motion.article>
    </motion.section>
  );
}