"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";

import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { ProfileTabId } from "@/types/profile";

type NavbarProps = {
  activeTab: ProfileTabId;
  onSelectTab: (tab: ProfileTabId) => void;
};

export function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectTab = (tab: ProfileTabId) => {
    setIsOpen(false);
    onSelectTab(tab);
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = navigation.length - 1;
    let nextIndex = index;

    if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
    else if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = lastIndex;
    else return;

    event.preventDefault();
    const nextTab = navigation[nextIndex].id;
    selectTab(nextTab);
    document.getElementById(`desktop-tab-${nextTab}`)?.focus();
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition duration-200",
        isScrolled || isOpen
          ? "border-line bg-page/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-page/90 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => selectTab("about")}
          className="flex min-w-0 items-center gap-3 rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={`${siteConfig.brandName}, về trang giới thiệu`}
        >
          <span className="relative size-10 shrink-0 overflow-hidden rounded-xl border border-line bg-white shadow-sm">
            <Image
              src="/images/lucy-logo.jpg"
              alt="Logo English with Lucy"
              fill
              className="scale-125 object-cover mix-blend-multiply"
              sizes="40px"
            />
          </span>
          <span className="hidden h-8 w-px bg-line sm:block" aria-hidden="true" />
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none font-bold text-primary">
              {siteConfig.englishName} <span className="text-accent">.</span>
            </span>
            <span className="mt-1 hidden text-[10px] font-semibold tracking-[0.14em] text-muted uppercase sm:block">
              {siteConfig.brandName}
            </span>
          </span>
        </button>

        <div
          role="tablist"
          aria-label="Nội dung website"
          className="hidden items-center gap-1 rounded-full border border-line bg-white p-1 lg:flex"
        >
          {navigation.map((item, index) => (
            <button
              key={item.id}
              id={`desktop-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === item.id}
              aria-controls={item.id}
              tabIndex={activeTab === item.id ? 0 : -1}
              onClick={() => selectTab(item.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                activeTab === item.id
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-primary",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => selectTab("contact")}
          className="hidden min-h-11 items-center rounded-full bg-accent px-5 text-sm font-bold text-primary transition hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
        >
          Nhận tư vấn
        </button>

        <button
          type="button"
          className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-white transition hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "grid overflow-hidden border-line transition-[grid-template-rows,opacity] duration-200 lg:hidden",
          isOpen
            ? "grid-rows-[1fr] border-t opacity-100"
            : "pointer-events-none grid-rows-[0fr] border-t-0 opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:px-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectTab(item.id)}
                className={cn(
                  "rounded-xl px-4 py-3 text-left text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-accent",
                  activeTab === item.id
                    ? "bg-primary text-white"
                    : "text-ink hover:bg-primary-soft hover:text-primary",
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => selectTab("contact")}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-primary md:hidden"
            >
              Nhận tư vấn
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
