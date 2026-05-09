import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "15+", label: "Years teaching" },
  { value: "500+", label: "Students taught" },
  { value: "92%", label: "Average score" },
];

const whyCards = [
  {
    icon: "👥",
    title: "Small batches, real attention.",
    body: "Maximum 8 students per batch. Every doubt gets answered. No student is left behind.",
  },
  {
    icon: "🎯",
    title: "Maths only. No distractions.",
    body: "We teach one subject and we teach it well. 15 years of focus.",
  },
  {
    icon: "📅",
    title: "Free Saturday doubt classes.",
    body: "Stuck on a problem during the week? Bring it to Saturday's open session — included in your fees.",
  },
];

const results = [
  { name: "Priya R.", class: "Class 10", board: "CBSE", score: "96/100" },
  { name: "Karthik S.", class: "Class 12", board: "State Board", score: "94/100" },
  { name: "Divya M.", class: "Class 9", board: "CBSE", score: "98/100" },
  { name: "Arjun T.", class: "Class 11", board: "CBSE", score: "91/100" },
];

const batchPreview = [
  { classes: "Class 6 – 7", days: "Mon / Wed / Fri", time: "4:30 – 5:30 PM" },
  { classes: "Class 8", days: "Tue / Thu / Sat", time: "5:00 – 6:00 PM" },
  { classes: "Class 9", days: "Mon – Fri", time: "6:00 – 7:00 PM" },
  { classes: "Class 10", days: "Mon – Sat", time: "6:30 – 8:00 PM" },
  { classes: "Class 11 – 12", days: "Mon – Sat", time: "7:00 – 8:30 PM" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WhySection />
      <AboutSection />
      <ResultsPreview />
      <BatchesPreview />
      <ContactCTA />
    </>
  );
}

// ─── 1. Hero ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[88svh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=80"
        alt="Teacher writing on a classroom whiteboard"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D2818]/75" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-[#D4A373] text-sm font-semibold uppercase tracking-widest mb-4">
            Kilpauk, Chennai • Est. 2010
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Maths, made simple.
            <br />
            <span className="text-[#D4A373]">For Class 6 to 12.</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            Kilpauk&apos;s trusted maths tuition centre. CBSE&nbsp;•&nbsp;State
            Board&nbsp;•&nbsp;ICSE. 15 years of helping students score above 90%.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#c4935e] text-[#0D2818] font-bold px-6 py-3.5 rounded-md transition-all duration-150 hover:shadow-lg text-base"
            >
              Book a Free Demo Class
            </a>
            <a
              href="https://wa.me/919790495049"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-6 py-3.5 rounded-md transition-all duration-150 hover:bg-white/10 text-base"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Trust Strip ───────────────────────────────────────────────────────────

function TrustStrip() {
  return (
    <section className="bg-[#1B4332] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p
                className="text-3xl sm:text-4xl font-bold text-[#D4A373]"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {value}
              </p>
              <p className="text-white/70 text-sm sm:text-base mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Why Aadhavan ─────────────────────────────────────────────────────────

function WhySection() {
  return (
    <section className="py-20 bg-[#FBFAF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1B4332] text-center mb-3"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Why Aadhavan Maths Academy?
          </h2>
          <p className="text-center text-[#555555] mb-12 max-w-lg mx-auto">
            Three reasons parents in Kilpauk have trusted us since 2010.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {whyCards.map(({ icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 100}>
              <article className="bg-white border border-[#E8E4DC] rounded-xl p-6 h-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <span className="text-3xl" aria-hidden="true">{icon}</span>
                <h3
                  className="mt-4 text-lg font-bold text-[#1B4332]"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {title}
                </h3>
                <p className="mt-2 text-[#555555] text-sm leading-relaxed">{body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. About the Teacher ────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section className="py-20 bg-white border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <FadeIn className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-[#E8E4DC] shadow-md flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=640&q=80"
                alt="Mr. Sundar Aadhavan, founder of Aadhavan Maths Academy"
                fill
                className="object-cover object-top saturate-[0.85]"
                sizes="(max-width: 640px) 256px, 320px"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={120}>
            <p className="text-[#D4A373] text-sm font-semibold uppercase tracking-widest mb-3">
              About the teacher
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1B4332] mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Mr. Sundar Aadhavan
            </h2>
            <div className="flex flex-wrap gap-2 mb-5">
              {["M.Sc. Mathematics", "B.Ed.", "15 Years Teaching", "Est. 2010"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-[#FBFAF7] border border-[#E8E4DC] text-[#555555] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <p className="text-[#1A1A1A] leading-relaxed text-base">
              Mr. Sundar Aadhavan founded Aadhavan Maths Academy in 2010 with one
              belief: every student can love maths if it&apos;s taught right. With an
              M.Sc. in Mathematics and 15 years of teaching experience across CBSE,
              State Board, and ICSE syllabi, he runs small-batch classes (max 8
              students) where no question is too small.
            </p>
            <p className="mt-4 text-[#1A1A1A] leading-relaxed text-base">
              Located on Kilpauk Garden Road, the centre has helped over 500 students
              improve their maths scores — many from struggling 50s to confident 90s.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 text-[#1B4332] font-semibold border-b-2 border-[#D4A373] hover:text-[#0D2818] transition-colors"
            >
              Book a free demo class →
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── 5. Results Preview ───────────────────────────────────────────────────────

function ResultsPreview() {
  return (
    <section className="py-20 bg-[#FBFAF7] border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#D4A373] text-sm font-semibold uppercase tracking-widest mb-2">
                Student results
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1B4332]"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Our Students&apos; Results
              </h2>
            </div>
            <Link
              href="/results"
              className="hidden sm:inline-flex text-sm font-semibold text-[#1B4332] hover:text-[#0D2818] border-b border-[#D4A373] transition-colors"
            >
              View all results →
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map(({ name, class: cls, board, score }, i) => (
            <FadeIn key={name} delay={i * 80}>
              <article className="bg-white border border-[#E8E4DC] rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                {/* Silhouette avatar */}
                <div className="w-14 h-14 rounded-full bg-[#1B4332]/10 flex items-center justify-center mx-auto mb-3">
                  <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#1B4332]/40" fill="currentColor" aria-hidden="true">
                    <circle cx="20" cy="14" r="8" />
                    <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16" />
                  </svg>
                </div>
                <p className="font-bold text-[#1A1A1A] text-sm">{name}</p>
                <p className="text-[#555555] text-xs mt-0.5">
                  {cls} &bull; {board}
                </p>
                <p
                  className="text-[#1B4332] font-bold text-xl mt-3"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {score}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/results"
              className="text-sm font-semibold text-[#1B4332] border-b border-[#D4A373]"
            >
              View all results →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 6. Batches Preview ───────────────────────────────────────────────────────

function BatchesPreview() {
  return (
    <section className="py-20 bg-white border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#D4A373] text-sm font-semibold uppercase tracking-widest mb-2">
                Timings
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1B4332]"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Batch Schedule
              </h2>
            </div>
            <Link
              href="/batches"
              className="hidden sm:inline-flex text-sm font-semibold text-[#1B4332] hover:text-[#0D2818] border-b border-[#D4A373] transition-colors"
            >
              See fees &amp; availability →
            </Link>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {batchPreview.map(({ classes, days, time }, i) => (
            <FadeIn key={classes} delay={i * 60}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#FBFAF7] border border-[#E8E4DC] rounded-xl px-5 py-4 gap-2">
                <p
                  className="font-bold text-[#1B4332] text-base"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {classes}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-sm text-[#555555]">
                  <span>{days}</span>
                  <span className="hidden sm:block text-[#E8E4DC]">|</span>
                  <span className="font-medium text-[#1A1A1A]">{time}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-8 text-center sm:text-left">
            <Link
              href="/batches"
              className="inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#0D2818] text-white font-semibold px-5 py-2.5 rounded-md transition-colors text-sm"
            >
              See all batches &amp; fees →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 7. Contact CTA ───────────────────────────────────────────────────────────

function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-[#FBFAF7] border-t border-[#E8E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-[#D4A373] text-sm font-semibold uppercase tracking-widest mb-3">
              Get in touch
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1B4332] mb-3"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Ready to start?
            </h2>
            <p className="text-[#555555] text-lg max-w-md mx-auto">
              Book a free demo class — no commitment, just come and see.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact info + map */}
          <FadeIn>
            <div className="space-y-5">
              <ContactRow icon="📍">
                No. 14, Kilpauk Garden Road, Aspiran Garden Colony,
                <br />
                Kilpauk, Chennai – 600010
              </ContactRow>
              <ContactRow icon="📞">
                <a
                  href="tel:+919790495049"
                  className="text-[#1B4332] font-semibold hover:underline"
                >
                  +91 97904 95049
                </a>
              </ContactRow>
              <ContactRow icon="✉️">
                <a
                  href="mailto:aadhavan.maths@gmail.com"
                  className="text-[#1B4332] font-semibold hover:underline"
                >
                  aadhavan.maths@gmail.com
                </a>
              </ContactRow>
              <ContactRow icon="🕐">Mon–Sat: 9 AM – 9 PM &nbsp;|&nbsp; Sun: Closed</ContactRow>

              <div className="flex gap-3 pt-2">
                <a
                  href="tel:+919790495049"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#0D2818] text-white font-semibold px-4 py-3 rounded-md transition-colors text-sm"
                >
                  <PhoneIcon2 />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919790495049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-3 rounded-md transition-colors text-sm"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>

              {/* Embedded Google Map — Kilpauk, Chennai */}
              <div className="mt-4 rounded-xl overflow-hidden border border-[#E8E4DC] shadow-sm aspect-video">
                <iframe
                  title="Aadhavan Maths Academy location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1934453988!2d80.2368!3d13.0822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x788bbdbc42d445a8!2sKilpauk%2C%20Chennai%2C%20Tamil%20Nadu%20600010!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>

          {/* Quick CTA card pointing to full contact page */}
          <FadeIn delay={120}>
            <div className="bg-white border border-[#E8E4DC] rounded-2xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-5" aria-hidden="true">📚</div>
              <h3
                className="text-2xl font-bold text-[#1B4332] mb-3"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Book a Free Demo Class
              </h3>
              <p className="text-[#555555] mb-6 leading-relaxed">
                Fill in your details and we&apos;ll get back to you within 2 hours to
                schedule a free trial class.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full gap-2 bg-[#D4A373] hover:bg-[#c4935e] text-[#0D2818] font-bold px-6 py-4 rounded-md transition-all duration-150 hover:shadow-md text-base"
              >
                Go to Enquiry Form →
              </Link>
              <p className="mt-4 text-xs text-[#555555]">
                We typically reply within 2 hours.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ContactRow({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-sm text-[#1A1A1A]">
      <span className="text-base mt-0.5" aria-hidden="true">{icon}</span>
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon2() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  );
}
