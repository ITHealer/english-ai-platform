import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

import { siteConfig } from "@/config/site";

import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.description,
  keywords: [
    "Nguyễn Mộng Hoà",
    "Lucy IELTS Teacher",
    "English Teacher",
    "IELTS Instructor",
    "IELTS Vietnam",
    "TESOL Teacher",
    "English Education",
    "EdTech",
    "Vietnam",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} (Lucy) | IELTS Teacher`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
