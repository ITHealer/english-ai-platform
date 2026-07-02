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
          background: "linear-gradient(135deg, #fffdf8 0%, #faf3e6 65%, #f5e9dc 100%)",
          color: "#1f2430",
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
            background: "rgba(201, 161, 90, 0.16)",
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
                border: "2px solid #e4d7c2",
                color: "#16213e",
                fontSize: 20,
                fontWeight: 800,
                padding: "0 24px",
              }}
            >
              ENGLISH WITH LUCY
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 28, fontWeight: 800 }}>{siteConfig.name} (Lucy)</span>
              <span style={{ marginTop: 5, fontSize: 18, color: "#6b7280" }}>{siteConfig.role}</span>
            </div>
          </div>
          <div style={{ display: "flex", maxWidth: 960, fontSize: 64, lineHeight: 1.08, fontWeight: 800, letterSpacing: -2 }}>
            Cá nhân hoá lộ trình · Nâng tầm chất lượng
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 20, color: "#16213e", fontWeight: 700 }}>
            IELTS 8.0
            <span style={{ color: "#c9a15a" }}>•</span>
            6 năm kinh nghiệm
            <span style={{ color: "#c9a15a" }}>•</span>
            Lộ trình cá nhân hoá
          </div>
        </div>
      </div>
    ),
    size,
  );
}
