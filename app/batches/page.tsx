import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Batches & Fees — Aadhavan Maths Academy, Kilpauk",
  description:
    "Class 6 to 12 maths tuition batch timings and monthly fees. CBSE, State Board, ICSE. Kilpauk, Chennai. Free demo class for new students.",
};

const batches = [
  {
    classes: "Class 6 – 7",
    board: "All Boards",
    days: "Mon / Wed / Fri",
    time: "4:30 – 5:30 PM",
    fee: "₹2,000",
    seats: "3 seats",
    full: false,
  },
  {
    classes: "Class 8",
    board: "CBSE / State Board",
    days: "Tue / Thu / Sat",
    time: "5:00 – 6:00 PM",
    fee: "₹2,500",
    seats: "2 seats",
    full: false,
  },
  {
    classes: "Class 9",
    board: "CBSE",
    days: "Mon – Fri",
    time: "6:00 – 7:00 PM",
    fee: "₹3,000",
    seats: "Full",
    full: true,
  },
  {
    classes: "Class 10",
    board: "All Boards",
    days: "Mon – Sat",
    time: "6:30 – 8:00 PM",
    fee: "₹3,500",
    seats: "1 seat",
    full: false,
  },
  {
    classes: "Class 11",
    board: "CBSE / State Board",
    days: "Mon – Sat",
    time: "6:00 – 7:30 PM",
    fee: "₹4,000",
    seats: "Open",
    full: false,
  },
  {
    classes: "Class 12",
    board: "CBSE / State Board",
    days: "Mon – Sat",
    time: "7:00 – 8:30 PM",
    fee: "₹4,000",
    seats: "Open",
    full: false,
  },
];

export default function BatchesPage() {
  return (
    <div className="bg-[#FBFAF7] min-h-screen">
      {/* Page header */}
      <div className="bg-[#1B4332] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#D4A373] text-sm font-semibold uppercase tracking-widest mb-2">
            Schedule &amp; pricing
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Batches &amp; Fees
          </h1>
          <p className="text-white/70 mt-3 text-lg max-w-xl">
            All batches are maths-only, max 8 students. Free demo class for every new student.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Desktop table */}
        <FadeIn>
          <div className="hidden md:block overflow-hidden rounded-2xl border border-[#E8E4DC] shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#1B4332] text-white">
                <tr>
                  {["Class", "Board", "Days", "Time", "Monthly Fee", "Seats"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-4 font-semibold text-xs uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {batches.map((b, i) => (
                  <tr
                    key={b.classes}
                    className={`border-t border-[#E8E4DC] ${
                      i % 2 === 0 ? "bg-white" : "bg-[#FBFAF7]"
                    }`}
                  >
                    <td className="px-5 py-4 font-bold text-[#1B4332]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                      {b.classes}
                    </td>
                    <td className="px-5 py-4 text-[#555555]">{b.board}</td>
                    <td className="px-5 py-4 text-[#1A1A1A]">{b.days}</td>
                    <td className="px-5 py-4 font-medium text-[#1A1A1A]">{b.time}</td>
                    <td className="px-5 py-4 font-bold text-[#1B4332]">{b.fee}<span className="font-normal text-[#555555]">/month</span></td>
                    <td className="px-5 py-4">
                      <SeatBadge seats={b.seats} full={b.full} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {batches.map((b, i) => (
            <FadeIn key={b.classes} delay={i * 60}>
              <div className="bg-white border border-[#E8E4DC] rounded-xl p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2
                    className="text-lg font-bold text-[#1B4332]"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {b.classes}
                  </h2>
                  <SeatBadge seats={b.seats} full={b.full} />
                </div>
                <div className="space-y-1.5 text-sm">
                  <Row label="Board" value={b.board} />
                  <Row label="Days" value={b.days} />
                  <Row label="Time" value={b.time} />
                  <Row label="Fee" value={`${b.fee}/month`} highlight />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Fee note */}
        <FadeIn>
          <div className="mt-8 bg-[#1B4332]/5 border border-[#1B4332]/15 rounded-xl px-6 py-4 text-sm text-[#1A1A1A] leading-relaxed">
            <span className="font-semibold text-[#1B4332]">Note:</span> Fees include
            study material and weekly tests. Free demo class for all new students. No
            registration fee.
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="mt-12 text-center">
            <p className="text-[#555555] mb-5 text-lg">
              Interested? Come for a free demo class — no commitment needed.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#c4935e] text-[#0D2818] font-bold px-8 py-4 rounded-md transition-all duration-150 hover:shadow-md text-base"
            >
              Book a Demo →
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function SeatBadge({ seats, full }: { seats: string; full: boolean }) {
  if (full) {
    return (
      <span className="inline-block text-xs font-semibold bg-red-50 text-red-600 border border-red-200 px-2.5 py-1 rounded-full whitespace-nowrap">
        Full
      </span>
    );
  }
  if (seats === "Open") {
    return (
      <span className="inline-block text-xs font-semibold bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full whitespace-nowrap">
        Open
      </span>
    );
  }
  return (
    <span className="inline-block text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full whitespace-nowrap">
      {seats} left
    </span>
  );
}

function Row({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-[#555555]">{label}</span>
      <span className={`text-right ${highlight ? "font-bold text-[#1B4332]" : "text-[#1A1A1A]"}`}>
        {value}
      </span>
    </div>
  );
}
