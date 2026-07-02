import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { siteConfig } from "@/config/site";

import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} (Lucy) | ${siteConfig.role}`,
  description: siteConfig.description,
  keywords: [
    "Nguyễn Mộng Hoà",
    "Lucy IELTS Teacher",
    "giáo viên IELTS",
    "luyện thi IELTS",
    "tiếng Anh giao tiếp",
    "English with Lucy",
    "IELTS Vietnam",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} (Lucy) | English with Lucy`,
    description: siteConfig.description,
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} (Lucy) | Giáo viên`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
