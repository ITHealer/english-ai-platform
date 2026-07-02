"use client";

import { ArrowRight, CalendarDays, Check, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { coursesConfig } from "@/config/courses";
import { cn } from "@/lib/utils";

type CourseTrack = "general" | "ielts";

export function CoursesSection() {
  const [activeTrack, setActiveTrack] = useState<CourseTrack>("general");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
          {coursesConfig.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl leading-tight font-bold text-primary sm:text-5xl">
          {coursesConfig.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">{coursesConfig.description}</p>
      </header>

      <div className="mt-8 inline-flex rounded-full border border-line bg-white p-1" role="tablist" aria-label="Nhóm khoá học">
        <button
          id="course-tab-general"
          type="button"
          role="tab"
          aria-selected={activeTrack === "general"}
          aria-controls="course-track-general"
          onClick={() => setActiveTrack("general")}
          className={cn(
            "rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-accent",
            activeTrack === "general" ? "bg-primary text-white" : "text-muted hover:text-primary",
          )}
        >
          Tiếng Anh Tổng Quát
        </button>
        <button
          id="course-tab-ielts"
          type="button"
          role="tab"
          aria-selected={activeTrack === "ielts"}
          aria-controls="course-track-ielts"
          onClick={() => setActiveTrack("ielts")}
          className={cn(
            "rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-accent",
            activeTrack === "ielts" ? "bg-primary text-white" : "text-muted hover:text-primary",
          )}
        >
          Luyện Thi IELTS
        </button>
      </div>

      <div
        id="course-track-general"
        role="tabpanel"
        aria-labelledby="course-tab-general"
        hidden={activeTrack !== "general"}
        className="tab-panel mt-8"
      >
        <article className="grid items-center gap-8 rounded-[20px] border border-line bg-white p-6 sm:p-9 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary">{coursesConfig.general.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{coursesConfig.general.description}</p>
            <ul className="mt-5 space-y-3">
              {coursesConfig.general.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-ink">
                  <Check aria-hidden="true" className="mt-0.5 shrink-0 text-success" size={17} />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link
              href={`/courses/${coursesConfig.general.slug}`}
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3 hover:text-accent focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Xem chi tiết khoá học <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="rounded-2xl bg-surface-alt p-7 text-center sm:p-9">
            <p className="font-display text-3xl font-bold text-primary">
              {coursesConfig.general.consultationTitle}
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">
              {coursesConfig.general.consultationNote}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-accent px-6 text-sm font-bold text-primary transition hover:bg-accent-light"
            >
              Nhận tư vấn
            </a>
          </div>
        </article>
      </div>

      <div
        id="course-track-ielts"
        role="tabpanel"
        aria-labelledby="course-tab-ielts"
        hidden={activeTrack !== "ielts"}
        className="tab-panel mt-8"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {coursesConfig.ielts.roadmaps.map((course) => (
            <article
              key={course.slug}
              className={cn(
                "rounded-[20px] border bg-white p-7 sm:p-8",
                course.featured
                  ? "border-accent shadow-[0_14px_38px_rgba(201,161,90,0.2)]"
                  : "border-line",
              )}
            >
              <Badge tone={course.featured ? "gold" : "warning"}>{course.tag}</Badge>
              <h2 className="mt-5 text-4xl tracking-[0.08em] uppercase">{course.title}</h2>
              <div className="mt-5 flex flex-wrap gap-5">
                <div className="flex items-start gap-2 text-sm text-muted">
                  <CalendarDays aria-hidden="true" className="mt-0.5 text-accent" size={17} />
                  <span><strong className="block text-primary">{course.sessions}</strong>Thời lượng</span>
                </div>
                {/* <div className="flex items-start gap-2 text-sm text-muted">
                  <Users aria-hidden="true" className="mt-0.5 text-accent" size={17} />
                </div> */}
              </div>
              <p className="mt-6 text-sm font-bold text-primary">{course.focusLabel}</p>
              <ul className="mt-3 space-y-2">
                {course.focus.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-muted">
                    <span aria-hidden="true" className="text-accent">—</span>{item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/courses/${course.slug}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3 hover:text-accent focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Xem chi tiết lộ trình <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
            {coursesConfig.ielts.pricingEyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary">{coursesConfig.ielts.pricingTitle}</h2>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {coursesConfig.ielts.packages.map((pricePackage) => (
            <article
              key={pricePackage.name}
              className={cn(
                "relative rounded-2xl border bg-white p-6",
                pricePackage.popular ? "border-2 border-accent bg-surface-alt" : "border-line",
              )}
            >
              {pricePackage.popular && (
                <span className="absolute top-0 right-5 rounded-b-lg bg-accent px-3 py-1 text-[11px] font-bold text-primary">
                  Phổ biến
                </span>
              )}
              <h3 className="text-2xl font-bold text-primary">{pricePackage.name}</h3>
              <p className="mt-3 text-sm text-muted">{pricePackage.schedule}</p>
              <Badge className="mt-3" tone="soft">{pricePackage.audience}</Badge>
              <div className="relative mt-5 overflow-hidden rounded-xl" data-pricing-hidden={coursesConfig.ielts.hidePricing}>
                <div
                  aria-hidden={coursesConfig.ielts.hidePricing}
                  className={cn(
                    coursesConfig.ielts.hidePricing && "pointer-events-none select-none blur-[7px] opacity-35",
                  )}
                >
                  <p className="font-display text-3xl font-bold text-primary">
                    {pricePackage.price} <span className="font-sans text-xs font-medium text-muted">/ HS / 4 tuần</span>
                  </p>
                  <p className="mt-1 text-xs text-muted">{pricePackage.total}</p>
                </div>
                {coursesConfig.ielts.hidePricing && (
                  <span className="absolute inset-0 grid place-items-center bg-white/75 px-3 text-center text-sm font-bold text-primary backdrop-blur-[2px]">
                    {coursesConfig.ielts.hiddenPricingLabel}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[20px] bg-primary px-6 py-10 text-center sm:px-10">
          <h2 className="text-3xl font-bold text-white">Chưa chắc chọn gói nào phù hợp?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-on-dark-muted">
            Chia sẻ trình độ hiện tại và mục tiêu của bạn để Lucy hỗ trợ lựa chọn lộ trình phù hợp nhất.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-accent px-7 text-sm font-bold text-primary transition hover:bg-accent-light"
          >
            Nhận tư vấn qua Zalo
          </a>
        </div>
      </div>
    </div>
  );
}
