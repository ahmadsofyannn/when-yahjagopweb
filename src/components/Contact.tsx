"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import TechText from "@/interactive/techtext";
import { useLanguage } from "@/context/LanguageContext";

type Comment = {
  id: string;
  name: string;
  email?: string;
  text: string;
  createdAt: string;
};

const STORAGE_KEY = "portofolio-komentar";
const MY_EMAIL = "emailkamu@example.com";

const CONTACT_TEXTS = {
  id: {
    srTitle: "Kontak",
    techText: "Kontak",
    contactMe: "Kontak Saya",
    infoDesc: "Ada pertanyaan, diskusi proyek, atau tawaran kerja sama? Kirim pesan lewat formulir ini atau hubungi saya langsung melalui tautan di bawah.",
    mainEmail: "EMAIL UTAMA",
    sendMessage: "Kirim Pesan",
    yourEmail: "Email Anda",
    emailPlaceholder: "masukkan email anda...",
    subject: "Subjek Pesan",
    subjectPlaceholder: "Contoh: Penawaran Project Website",
    yourMessage: "Pesan Anda",
    messagePlaceholder: "Tuliskan detail pesan atau deskripsi proyek Anda di sini...",
    leaveComment: "Tulis Komentar",
    name: "Nama",
    namePlaceholder: "Nama Anda",
    emailNote: "(tidak ditampilkan di website)",
    comment: "Komentar",
    commentPlaceholder: "Tuliskan komentar Anda...",
    submitComment: "Kirim Komentar",
    commentsHeading: "Komentar",
    commentsBadge: "KOMENTAR",
    emptyComments: "Belum ada komentar. Jadilah yang pertama menulis!",
    socialAriaLabel: "Umpan Komentar",
  },
  en: {
    srTitle: "Contact",
    techText: "Contact",
    contactMe: "Contact Me",
    infoDesc: "Have questions, project inquiries, or job offers? Send a message via this form or reach out to me directly through the links below.",
    mainEmail: "MAIN EMAIL",
    sendMessage: "Send Message",
    yourEmail: "Your Email",
    emailPlaceholder: "enter your email...",
    subject: "Subject",
    subjectPlaceholder: "Example: Website Project Proposal",
    yourMessage: "Your Message",
    messagePlaceholder: "Write your message details or project description here...",
    leaveComment: "Leave a Comment",
    name: "Name",
    namePlaceholder: "Your Name",
    emailNote: "(will not be displayed on site)",
    comment: "Comment",
    commentPlaceholder: "Write your comment here...",
    submitComment: "Submit Comment",
    commentsHeading: "Comments",
    commentsBadge: "COMMENTS",
    emptyComments: "No comments yet. Be the first to write one!",
    socialAriaLabel: "Comment Feed",
  },
} as const;

export default function Contact() {
  const { lang } = useLanguage();
  const t = CONTACT_TEXTS[lang] ?? CONTACT_TEXTS.id;

  const [items, setItems] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // Abaikan error jika localStorage diblokir
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Abaikan error kuota localStorage
    }
  }, [items, ready]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedText = text.trim();
    if (!trimmedName || !trimmedText) return;

    setItems((prev) => [
      {
        id: String(Date.now()),
        name: trimmedName,
        email: email.trim(),
        text: trimmedText,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);

    setName("");
    setEmail("");
    setText("");
  }

  const getInitials = (n: string): string => {
    return n
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.section
      id="kontak"
      aria-labelledby="judul-kontak"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-start space-y-12 px-4 pb-16 pt-16"
    >
      {/* HEADER SECTION */}
      <header className="mx-auto my-4 max-w-2xl py-8 pt-14 text-center">
        <h2 id="judul-kontak" className="sr-only">
          {t.srTitle}
        </h2>

        <div className="relative h-30 w-full">
          <TechText
            text={t.techText}
            fontWeight={600}
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

      {/* CARD 1: KONTAK SAYA & KIRIM PESAN */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-[28px] border-2 border-biru bg-zinc-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-biru hover:shadow-[0_0_40px_rgba(82,39,255,0.6)] md:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Kolom Kiri: Informasi Kontak */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4 font-display text-2xl font-extrabold text-white md:text-4xl">
                {t.contactMe}
              </h3>

              <p className="mb-8 text-sm leading-relaxed text-white">
                {t.infoDesc}
              </p>

              <address className="space-y-4 not-italic">
                {/* Email Utama */}
                <div className="flex items-center gap-4 rounded-xl border border-white bg-black p-4 transition-colors hover:border-[#5227ff]">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white bg-black text-white"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white">
                      {t.mainEmail}
                    </p>
                    <a
                      href={`mailto:${MY_EMAIL}`}
                      className="block truncate text-sm font-semibold text-white transition-colors hover:text-[#5227ff]"
                    >
                      {MY_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Grid Instagram & LinkedIn */}
                <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Profil Instagram (buka di tab baru)"
                    className="flex items-center gap-3 rounded-xl border border-white bg-black p-3.5 transition-all hover:border-biru"
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white bg-black text-xs font-bold text-white"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] text-white">Instagram</p>
                      <p className="truncate text-xs font-medium text-slate-200">
                        Instagram (via DM)
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Profil LinkedIn (buka di tab baru)"
                    className="flex items-center gap-3 rounded-xl border border-white bg-black p-3.5 transition-all hover:border-biru"
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white bg-black text-white"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] text-white">LinkedIn</p>
                      <p className="truncate text-xs font-medium text-white">
                        linkedin.com/in/username
                      </p>
                    </div>
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Kolom Kanan: Form Kirim Pesan */}
          <div className="flex flex-col rounded-2xl border border-white bg-black p-6 md:p-8">
            <header className="mb-6 border-b border-zinc-800 pb-4">
              <h3 className="font-display text-xl font-bold text-white">
                {t.sendMessage}
              </h3>
            </header>

            <form action={`mailto:${MY_EMAIL}`} method="get" className="space-y-4">
              <div>
                <label htmlFor="sender-email" className="mb-2 block font-display text-xs text-white">
                  {t.yourEmail}
                </label>
                <input
                  id="sender-email"
                  name="from"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className="w-full rounded-xl border border-white bg-black px-4 py-3 text-sm text-white transition-all placeholder-zinc-400 focus:border-[#5227ff] focus:outline-none focus:ring-1 focus:ring-[#5227ff]"
                />
              </div>

              <div>
                <label htmlFor="subjek" className="mb-2 block font-display text-xs text-white">
                  {t.subject}
                </label>
                <input
                  id="subjek"
                  name="subject"
                  type="text"
                  required
                  placeholder={t.subjectPlaceholder}
                  className="w-full rounded-xl border border-white bg-black px-4 py-3 text-sm text-white transition-all placeholder-zinc-400 focus:border-[#5227ff] focus:outline-none focus:ring-1 focus:ring-[#5227ff]"
                />
              </div>

              <div>
                <label htmlFor="pesan" className="mb-2 block font-display text-xs text-white">
                  {t.yourMessage}
                </label>
                <textarea
                  id="pesan"
                  name="body"
                  rows={4}
                  required
                  placeholder={t.messagePlaceholder}
                  className="w-full resize-none rounded-xl border border-white bg-black px-4 py-3 text-sm text-white transition-all placeholder-zinc-400 focus:border-[#5227ff] focus:outline-none focus:ring-1 focus:ring-[#5227ff]"
                />
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full cursor-pointer items-center justify-between rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black shadow-lg transition-all hover:bg-[#5227ff] hover:text-white active:scale-[0.98]"
              >
                <span>{t.sendMessage}</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10" aria-hidden="true">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </motion.article>

      {/* CARD 2: DISKUSI & FEEDS KOMENTAR */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-[28px] border-2 border-biru bg-zinc-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-biru hover:shadow-[0_0_40px_rgba(82,39,255,0.6)] md:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form Komentar */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4 font-display text-3xl font-extrabold text-white md:text-4xl">
                {t.leaveComment}
              </h3>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nama" className="mb-2 block font-display text-xs text-white">
                    {t.name}
                  </label>
                  <input
                    id="nama"
                    type="text"
                    maxLength={50}
                    required
                    placeholder={t.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white bg-black px-4 py-3 text-sm text-white transition-all placeholder-zinc-400 focus:border-biru focus:outline-none focus:ring-1 focus:ring-biru"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-display text-xs text-white">
                    Email{" "}
                    <span className="text-zinc-300">{t.emailNote}</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white bg-black px-4 py-3 text-sm text-white transition-all placeholder-zinc-400 focus:border-biru focus:outline-none focus:ring-1 focus:ring-biru"
                  />
                </div>

                <div>
                  <label htmlFor="isi-komentar" className="mb-2 block font-display text-xs text-white">
                    {t.comment}
                  </label>
                  <textarea
                    id="isi-komentar"
                    rows={4}
                    maxLength={500}
                    required
                    placeholder={t.commentPlaceholder}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full rounded-xl border border-white bg-black px-4 py-3 text-sm text-white transition-all placeholder-zinc-400 focus:border-biru focus:outline-none focus:ring-1 focus:ring-biru"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 flex w-full cursor-pointer items-center justify-between rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black shadow-lg transition-all hover:bg-[#5227ff] hover:text-white active:scale-[0.98]"
                >
                  <span>{t.submitComment}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10" aria-hidden="true">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Feed Komentar */}
          <aside aria-label={t.socialAriaLabel} className="flex flex-col rounded-2xl border border-white bg-black/60 p-6">
            <div className="mb-4 flex items-center justify-between border-b border-white pb-4">
              <div className="flex items-center gap-2">
                <h4 className="font-display text-xl font-bold text-white">
                  {t.commentsHeading}
                </h4>
                <span className="rounded-full border border-white bg-black px-2.5 py-1 text-xs font-semibold text-white">
                  {items.length} {t.commentsBadge}
                </span>
              </div>
            </div>

            <div className="max-h-[480px] space-y-4 overflow-y-auto pr-2">
              {items.length === 0 ? (
                <div className="flex h-48 items-center justify-center text-center text-sm text-zinc-300">
                  {t.emptyComments}
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((c, i) => (
                    <motion.li
                      key={c.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <article className="rounded-xl border border-white bg-zinc-950 p-4 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white bg-black text-xs font-bold text-white">
                            {getInitials(c.name)}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h5 className="truncate text-sm font-bold text-white">{c.name}</h5>
                              <time dateTime={c.createdAt} className="shrink-0 font-mono text-[10px] text-zinc-300">
                                {new Date(c.createdAt).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </time>
                            </div>

                            <p className="mt-2 whitespace-pre-line rounded-lg border border-white bg-black p-3 text-xs leading-relaxed text-zinc-300">
                              {c.text}
                            </p>
                          </div>
                        </div>
                      </article>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </div>
      </motion.article>
    </motion.section>
  );
}