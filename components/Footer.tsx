import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/batches", label: "Batches & Fees" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Aadhavan{" "}
              <span className="text-[#D4A373]">Maths</span> Academy
            </p>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Kilpauk&apos;s trusted maths tuition centre since 2010. Maths only.
              Class 6 to 12. CBSE, State Board &amp; ICSE.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
              Pages
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm text-white/80">
              <p className="leading-relaxed">
                No. 14, Kilpauk Garden Road,
                <br />
                Aspiran Garden Colony,
                <br />
                Kilpauk, Chennai – 600010
              </p>
              <p>
                <a
                  href="tel:+919790495049"
                  className="hover:text-white transition-colors"
                >
                  +91 97904 95049
                </a>
              </p>
              <p>
                <a
                  href="mailto:aadhavan.maths@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  aadhavan.maths@gmail.com
                </a>
              </p>
              <p className="text-white/60 text-xs mt-1">
                Mon–Sat: 9 AM – 9 PM &nbsp;|&nbsp; Sun: Closed
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © 2026 Aadhavan Maths Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
