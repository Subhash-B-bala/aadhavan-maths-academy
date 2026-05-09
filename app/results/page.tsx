import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Student Results — Aadhavan Maths Academy, Kilpauk",
  description:
    "See the maths scores our students have achieved across CBSE, State Board and ICSE. Class 6 to 12. Kilpauk, Chennai.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const results: Record<string, { name: string; class: string; board: string; score: string; school?: string }[]> = {
  "2024": [
    { name: "Priya R.", class: "Class 10", board: "CBSE", score: "96/100", school: "DAV Public School" },
    { name: "Karthik S.", class: "Class 12", board: "State Board", score: "194/200", school: "Govt. Higher Secondary" },
    { name: "Divya M.", class: "Class 9", board: "CBSE", score: "98/100" },
    { name: "Arjun T.", class: "Class 11", board: "CBSE", score: "91/100" },
    { name: "Kavitha L.", class: "Class 10", board: "State Board", score: "195/200", school: "Kendriya Vidyalaya" },
    { name: "Rahul P.", class: "Class 8", board: "CBSE", score: "99/100" },
    { name: "Sneha B.", class: "Class 12", board: "CBSE", score: "97/100", school: "SBOA School" },
    { name: "Vikram N.", class: "Class 7", board: "State Board", score: "100/100" },
    { name: "Anitha C.", class: "Class 10", board: "ICSE", score: "95/100", school: "Balalok Matriculation" },
    { name: "Surya K.", class: "Class 11", board: "State Board", score: "190/200" },
  ],
  "2023": [
    { name: "Meena S.", class: "Class 10", board: "CBSE", score: "94/100", school: "Chinmaya Vidyalaya" },
    { name: "Praveen A.", class: "Class 12", board: "CBSE", score: "96/100" },
    { name: "Lakshmi R.", class: "Class 9", board: "State Board", score: "197/200" },
    { name: "Sathish V.", class: "Class 10", board: "State Board", score: "193/200", school: "Govt. Boys School" },
    { name: "Nithya J.", class: "Class 8", board: "CBSE", score: "98/100" },
    { name: "Harish M.", class: "Class 12", board: "State Board", score: "196/200", school: "St. John's School" },
    { name: "Pooja T.", class: "Class 11", board: "CBSE", score: "93/100" },
    { name: "Dinesh C.", class: "Class 10", board: "ICSE", score: "92/100", school: "Good Shepherd School" },
    { name: "Aarthi P.", class: "Class 7", board: "CBSE", score: "100/100" },
    { name: "Vignesh K.", class: "Class 9", board: "CBSE", score: "97/100" },
  ],
  "2022": [
    { name: "Sangeetha R.", class: "Class 12", board: "State Board", score: "195/200", school: "SSLC Board" },
    { name: "Murugan S.", class: "Class 10", board: "CBSE", score: "93/100" },
    { name: "Deepa L.", class: "Class 9", board: "State Board", score: "196/200" },
    { name: "Balaji N.", class: "Class 12", board: "CBSE", score: "95/100", school: "DAV Matriculation" },
    { name: "Revathi A.", class: "Class 10", board: "ICSE", score: "91/100" },
    { name: "Naveen P.", class: "Class 11", board: "CBSE", score: "90/100" },
    { name: "Suganya K.", class: "Class 8", board: "State Board", score: "99/100" },
    { name: "Arun T.", class: "Class 10", board: "State Board", score: "192/200", school: "Pattabiram School" },
    { name: "Keerthana M.", class: "Class 7", board: "CBSE", score: "100/100" },
    { name: "Manikandan V.", class: "Class 12", board: "State Board", score: "193/200" },
  ],
};

const quotes = [
  {
    text: "My son's confidence in maths transformed in 6 months. He went from 58 to 91 in Class 10 boards.",
    author: "Mrs. Priya Suresh",
    detail: "Parent of Class 10 student, 2024",
  },
  {
    text: "Small batches make all the difference. Mr. Aadhavan knew exactly where my daughter was struggling.",
    author: "Mr. Ramesh Venkat",
    detail: "Parent of Class 12 student, 2023",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResultsPage() {
  return (
    <div className="bg-[#FBFAF7] min-h-screen">
      {/* Page header */}
      <div className="bg-[#1B4332] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#D4A373] text-sm font-semibold uppercase tracking-widest mb-2">
            Track record
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Our Students&apos; Results
          </h1>
          <p className="text-white/70 mt-3 text-lg max-w-xl">
            Real scores from real students. 30+ results across 3 years.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {Object.entries(results).map(([year, cards]) => (
          <section key={year} aria-labelledby={`year-${year}`}>
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <h2
                  id={`year-${year}`}
                  className="text-2xl sm:text-3xl font-bold text-[#1B4332]"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {year}
                </h2>
                <div className="flex-1 h-px bg-[#E8E4DC]" />
                <span className="text-sm text-[#555555]">{cards.length} students</span>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {cards.map(({ name, class: cls, board, score, school }, i) => (
                <FadeIn key={`${year}-${name}`} delay={i * 50}>
                  <article className="bg-white border border-[#E8E4DC] rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-3 shrink-0">
                      <svg viewBox="0 0 40 40" className="w-7 h-7 text-[#1B4332]/40" fill="currentColor" aria-hidden="true">
                        <circle cx="20" cy="14" r="8" />
                        <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16" />
                      </svg>
                    </div>
                    <p className="font-bold text-[#1A1A1A] text-sm leading-snug">{name}</p>
                    <p className="text-[#555555] text-xs mt-0.5">{cls}</p>
                    <p className="text-[#555555] text-xs">{board}</p>
                    {school && (
                      <p className="text-[#555555] text-xs mt-0.5 leading-tight">{school}</p>
                    )}
                    <p
                      className="text-[#1B4332] font-bold text-lg mt-auto pt-3"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      {score}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </section>
        ))}

        {/* Parent quotes */}
        <FadeIn>
          <section aria-labelledby="parent-quotes">
            <h2
              id="parent-quotes"
              className="text-2xl font-bold text-[#1B4332] mb-8"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What Parents Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {quotes.map(({ text, author, detail }) => (
                <blockquote
                  key={author}
                  className="bg-white border border-[#E8E4DC] rounded-xl p-6 shadow-sm"
                >
                  <p className="text-[#1A1A1A] leading-relaxed mb-4 italic">
                    &ldquo;{text}&rdquo;
                  </p>
                  <footer>
                    <p className="font-semibold text-[#1B4332] text-sm">{author}</p>
                    <p className="text-[#555555] text-xs mt-0.5">{detail}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="text-center py-4">
            <p className="text-[#555555] mb-5 text-lg">
              Want your child&apos;s name on this page next year?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#c4935e] text-[#0D2818] font-bold px-8 py-4 rounded-md transition-all duration-150 hover:shadow-md text-base"
            >
              Book a Free Demo Class →
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
