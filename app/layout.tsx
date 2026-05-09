import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE_URL = "https://aadhavan-maths-academy.vercel.app";

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
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Class 10 Maths Tuition in Kilpauk — Aadhavan Maths Academy",
    template: "%s — Aadhavan Maths Academy",
  },
  description:
    "Kilpauk's trusted maths tuition centre. Class 6 to 12, CBSE, State Board & ICSE. 15 years of experience. Small batches of 8. Book a free demo class today.",
  keywords: [
    "maths tuition kilpauk",
    "maths tuition chennai",
    "class 10 maths tuition",
    "CBSE maths tuition",
    "state board maths tuition",
    "maths coaching kilpauk",
    "Aadhavan Maths Academy",
  ],
  authors: [{ name: "Aadhavan Maths Academy" }],
  creator: "Aadhavan Maths Academy",
  openGraph: {
    title: "Aadhavan Maths Academy — Kilpauk's Trusted Maths Tuition",
    description:
      "Class 6 to 12 maths tuition in Kilpauk, Chennai. CBSE, State Board, ICSE. Small batches. 15+ years experience. Book a free demo class.",
    url: BASE_URL,
    siteName: "Aadhavan Maths Academy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadhavan Maths Academy — Kilpauk's Trusted Maths Tuition",
    description:
      "Class 6 to 12 maths tuition in Kilpauk, Chennai. CBSE, State Board, ICSE. Small batches. 15+ years experience.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE_URL,
  name: "Aadhavan Maths Academy",
  description:
    "Maths-only tuition centre for Class 6 to 12. CBSE, State Board, ICSE. Small batches of 8 students. Kilpauk, Chennai.",
  url: BASE_URL,
  telephone: "+919790495049",
  email: "aadhavan.maths@gmail.com",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 14, Kilpauk Garden Road, Aspiran Garden Colony",
    addressLocality: "Kilpauk",
    addressRegion: "Tamil Nadu",
    postalCode: "600010",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0822,
    longitude: 80.2368,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash",
  areaServed: {
    "@type": "City",
    name: "Chennai",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
