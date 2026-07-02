import Image from "next/image";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-primary px-4 py-10 text-center text-on-dark-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <span className="relative size-12 overflow-hidden rounded-xl border border-white/15 bg-white">
          <Image
            src="/images/lucy-logo.jpg"
            alt="Logo English with Lucy"
            fill
            className="scale-125 object-cover mix-blend-multiply"
            sizes="48px"
          />
        </span>
        <p className="mt-4 font-display text-xl font-bold text-white">{siteConfig.name} · Lucy</p>
        <p className="mt-1 text-[11px] font-semibold tracking-[0.16em] text-highlight uppercase">
          {siteConfig.brandName}
        </p>
        <p className="mt-5 text-xs">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
