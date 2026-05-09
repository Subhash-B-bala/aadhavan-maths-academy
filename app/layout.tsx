import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-noto-tamil",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Class 10 Maths Tuition in Kilpauk — Aadhavan Maths Academy",
  description:
    "Kilpauk's trusted maths tuition centre. Class 6 to 12, CBSE, State Board & ICSE. 15 years of experience. Small batches. Book a free demo class today.",
  openGraph: {
    title: "Aadhavan Maths Academy — Kilpauk's Trusted Maths Tuition",
    description:
      "Class 6 to 12 maths tuition in Kilpauk, Chennai. CBSE, State Board, ICSE. Small batches. 15+ years experience.",
    siteName: "Aadhavan Maths Academy",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${notoSansTamil.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1B4332] focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
