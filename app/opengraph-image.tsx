import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aadhavan Maths Academy — Kilpauk's trusted maths tuition centre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1B4332",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 60,
            height: 6,
            background: "#D4A373",
            borderRadius: 3,
            marginBottom: 32,
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Aadhavan{" "}
          <span style={{ color: "#D4A373" }}>Maths</span>{" "}
          Academy
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            marginBottom: 40,
          }}
        >
          Kilpauk&apos;s trusted maths tuition centre since 2010
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Class 6 – 12", "CBSE • State Board • ICSE", "15+ Years"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: 999,
                  padding: "8px 20px",
                  fontSize: 20,
                  color: "#FFFFFF",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 18,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          aadhavan-maths-academy.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
