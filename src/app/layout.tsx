import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontBody = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Sofyan | Portofolio Web Developer",
  description:
    "Portofolio Ahmad Sofyan, seorang web developer yang berfokus pada Next.js, React, dan Tailwind CSS.",
  authors: [{ name: "Ahmad Sofyan" }],
  keywords: [
    "Ahmad Sofyan",
    "Web Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Portofolio",
  ],
  openGraph: {
    title: "Ahmad Sofyan | Portofolio Web Developer",
    description:
      "Portofolio Ahmad Sofyan, seorang web developer yang berfokus pada Next.js, React, dan Tailwind CSS.",
    type: "website",
    locale: "id_ID",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="id"
      className={`${fontDisplay.variable} ${fontBody.variable} scroll-smooth dark`}
    >
      <body className="relative flex min-h-screen flex-col bg-[#0d0b14] font-body text-white antialiased">
        <LanguageProvider>
          {/* Header / Navigasi Utama */}
          <Navbar />

          {/* Main Content Area */}
          <main className="relative z-10 flex-1">{children}</main>

          {/* Footer Utama */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}