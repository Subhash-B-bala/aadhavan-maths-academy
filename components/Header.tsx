"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/batches", label: "Batches" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-[#FBFAF7] transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-none border-b border-[#E8E4DC]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-[#1B4332] font-bold text-lg leading-tight"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Aadhavan<br className="hidden xs:block" />{" "}
          <span className="text-[#D4A373]">Maths</span> Academy
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-150 ${
                pathname === href
                  ? "text-[#1B4332] font-semibold"
                  : "text-[#555555] hover:text-[#1B4332]"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+919790495049"
            className="ml-2 inline-flex items-center gap-1.5 bg-[#1B4332] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#0D2818] transition-colors duration-150"
          >
            <PhoneIcon />
            Call Now
          </a>
        </nav>

        {/* Mobile: Call Now + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+919790495049"
            aria-label="Call Aadhavan Maths Academy"
            className="inline-flex items-center gap-1.5 bg-[#1B4332] text-white text-sm font-semibold px-3 py-2 rounded-md hover:bg-[#0D2818] transition-colors duration-150"
          >
            <PhoneIcon />
            <span className="sr-only sm:not-sr-only">Call Now</span>
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="p-2 rounded-md text-[#1B4332] hover:bg-[#E8E4DC] transition-colors"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#E8E4DC] bg-[#FBFAF7] px-4 pt-3 pb-5 flex flex-col gap-1"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                pathname === href
                  ? "bg-[#1B4332] text-white"
                  : "text-[#1A1A1A] hover:bg-[#E8E4DC]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
