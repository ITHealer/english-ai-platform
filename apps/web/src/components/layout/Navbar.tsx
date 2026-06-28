"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition duration-200",
        isScrolled || isOpen
          ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white/80 backdrop-blur-sm",
      )}
    >
      <nav aria-label="Main navigation" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
            aria-label={`${siteConfig.name}, back to top`}
          >
            <span className="relative size-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/lucy-logo.jpg"
                alt="English with Lucy logo"
                fill
                className="scale-125 object-cover mix-blend-multiply"
                sizes="40px"
              />
            </span>
            <span className="hidden font-display text-sm font-bold text-slate-950 sm:block">
              {siteConfig.brandName}
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-active={activeHref === item.href}
                className="nav-link relative text-sm font-medium text-slate-600 transition hover:text-brand-700 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden min-h-10 items-center rounded-xl border border-brand-600 px-4 text-sm font-semibold text-brand-600 transition hover:bg-brand-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:inline-flex"
            >
              Get in touch
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-xl text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 lg:hidden"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 lg:hidden",
            isOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="min-h-0">
            <div className="grid gap-1 border-t border-slate-100 py-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-brand-600",
                    activeHref === item.href ? "bg-brand-50 text-brand-700" : "text-slate-700",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
