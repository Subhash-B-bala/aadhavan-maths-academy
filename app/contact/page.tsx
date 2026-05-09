import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact Us — Aadhavan Maths Academy, Kilpauk",
  description:
    "Visit Aadhavan Maths Academy at Kilpauk Garden Road, Chennai. Call +91 97904 95049 or fill the enquiry form to book a free demo class.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FBFAF7] min-h-screen">
      {/* Page header */}
      <div className="bg-[#1B4332] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#D4A373] text-sm font-semibold uppercase tracking-widest mb-2">
            Get in touch
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Visit us or get in touch
          </h1>
          <p className="text-white/70 mt-3 text-lg max-w-xl">
            Book a free demo class. We&apos;re on Kilpauk Garden Road, Chennai.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — contact details + map */}
          <FadeIn>
            <div className="space-y-6">
              <h2
                className="text-2xl font-bold text-[#1B4332]"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Find us here
              </h2>

              <div className="space-y-4">
                <InfoRow icon="📍" label="Address">
                  No. 14, Kilpauk Garden Road,
                  <br />
                  Aspiran Garden Colony,
                  <br />
                  Kilpauk, Chennai – 600010
                </InfoRow>

                <InfoRow icon="📞" label="Phone">
                  <a
                    href="tel:+919790495049"
                    className="text-[#1B4332] font-semibold hover:underline"
                  >
                    +91 97904 95049
                  </a>
                </InfoRow>

                <InfoRow icon="💬" label="WhatsApp">
                  <a
                    href="https://wa.me/919790495049"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B4332] font-semibold hover:underline"
                  >
                    Message us on WhatsApp
                  </a>
                </InfoRow>

                <InfoRow icon="✉️" label="Email">
                  <a
                    href="mailto:aadhavan.maths@gmail.com"
                    className="text-[#1B4332] font-semibold hover:underline"
                  >
                    aadhavan.maths@gmail.com
                  </a>
                </InfoRow>

                <InfoRow icon="🕐" label="Hours">
                  Mon – Sat: 9 AM – 9 PM
                  <br />
                  <span className="text-[#555555]">Sunday: Closed</span>
                </InfoRow>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="tel:+919790495049"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#0D2818] text-white font-semibold px-4 py-3 rounded-lg transition-colors text-sm"
                >
                  <PhoneIcon />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919790495049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-3 rounded-lg transition-colors text-sm"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden border border-[#E8E4DC] shadow-sm aspect-video">
                <iframe
                  title="Aadhavan Maths Academy on Google Maps"
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

          {/* Right — enquiry form */}
          <FadeIn delay={120}>
            <div className="bg-white border border-[#E8E4DC] rounded-2xl p-7 shadow-sm">
              <h2
                className="text-2xl font-bold text-[#1B4332] mb-1"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Book a Free Demo Class
              </h2>
              <p className="text-[#555555] text-sm mb-6">
                Fill in your details and we&apos;ll call you to schedule a free trial.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-lg mt-0.5 shrink-0" aria-hidden="true">{icon}</span>
      <div className="text-sm leading-relaxed">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#555555] mb-0.5">
          {label}
        </p>
        <div className="text-[#1A1A1A]">{children}</div>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
