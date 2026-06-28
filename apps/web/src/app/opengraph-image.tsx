import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 62%, #fef3c7 100%)",
          color: "#0f172a",
          padding: "72px 82px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 380,
            height: 380,
            borderRadius: 999,
            background: "rgba(45, 58, 140, 0.08)",
            right: -70,
            top: -100,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                minWidth: 255,
                height: 66,
                borderRadius: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                border: "2px solid #e2e8f0",
                color: "#2d3a8c",
                fontSize: 20,
                fontWeight: 800,
                padding: "0 24px",
              }}
            >
              ENGLISH WITH LUCY
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 28, fontWeight: 800 }}>{siteConfig.name} (Lucy)</span>
              <span style={{ marginTop: 5, fontSize: 18, color: "#475569" }}>{siteConfig.role}</span>
            </div>
          </div>
          <div style={{ display: "flex", maxWidth: 960, fontSize: 64, lineHeight: 1.08, fontWeight: 800, letterSpacing: -2 }}>
            Personalized English learning that unlocks your potential.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 20, color: "#2d3a8c", fontWeight: 700 }}>
            English education
            <span style={{ color: "#f59e0b" }}>•</span>
            Personalized learning
            <span style={{ color: "#f59e0b" }}>•</span>
            Practical EdTech
          </div>
        </div>
      </div>
    ),
    size,
  );
}
