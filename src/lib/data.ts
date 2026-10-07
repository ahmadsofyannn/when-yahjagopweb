export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  url: string;
  github: string;
}

export const projects: Record<"id" | "en", Project[]> = {
  id: [
    {
      id: "portfolio-website",
      title: "Website Portofolio",
      description:
        "Website portofolio pribadi interaktif dengan efek 3D, animasi modern, dan dukungan dua bahasa.",
      image: "",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      url: "https://portofolio-demo.com",
      github: "https://github.com/username/portofolio",
    },
    {
      id: "daily-notes-app",
      title: "Aplikasi Catatan Harian",
      description:
        "Aplikasi web untuk mencatat, mengedit, dan mengelola tugas harian dengan penyimpanan data lokal di browser.",
      image: "",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      url: "",
      github: "https://github.com/username/catatan-harian",
    },
    {
      id: "small-business-landing-page",
      title: "Landing Page Usaha Kecil",
      description:
        "Halaman promosi modern untuk usaha kecil menengah (UMKM) lengkap dengan katalog produk dan kontak langsung.",
      image: "",
      tags: ["Next.js", "Tailwind CSS"],
      url: "https://umkm-demo.com",
      github: "https://github.com/username/landing-page-umkm",
    },
  ],
  en: [
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description:
        "An interactive personal portfolio website featuring 3D visual effects, modern animations, and bilingual support.",
      image: "",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      url: "https://portofolio-demo.com",
      github: "https://github.com/username/portofolio",
    },
    {
      id: "daily-notes-app",
      title: "Daily Notes App",
      description:
        "A web application to write, edit, and organize daily tasks with browser local storage persistence.",
      image: "",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      url: "",
      github: "https://github.com/username/catatan-harian",
    },
    {
      id: "small-business-landing-page",
      title: "Small Business Landing Page",
      description:
        "A modern single-page promotional website for small businesses, featuring product listings and direct contact.",
      image: "",
      tags: ["Next.js", "Tailwind CSS"],
      url: "https://umkm-demo.com",
      github: "https://github.com/username/landing-page-umkm",
    },
  ],
};