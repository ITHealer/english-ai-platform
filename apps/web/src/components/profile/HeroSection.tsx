import { ArrowRight, CheckCircle2, Mail, MapPin } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { profileConfig } from "@/config/profile";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/70"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="order-2 animate-enter lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 font-mono text-xs font-medium text-amber-800">
            <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
            {siteConfig.availableFor}
          </div>

          <p className="mb-4 text-sm font-bold tracking-[0.16em] text-brand-600 uppercase">
            {profileConfig.name} <span className="text-amber-600">· Lucy</span>
          </p>

          <p className="mb-3 text-sm font-semibold text-slate-500">{profileConfig.role}</p>

          <h1 className="max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
            {profileConfig.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{profileConfig.summary}</p>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500">
            <MapPin aria-hidden="true" className="text-brand-500" size={17} />
            {profileConfig.location}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#courses">
              View courses <ArrowRight aria-hidden="true" size={17} />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact me <Mail aria-hidden="true" size={17} />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {profileConfig.credentials.map((credential) => (
              <span key={credential} className="inline-flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 aria-hidden="true" className="text-emerald-600" size={16} />
                {credential}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-md animate-enter-delay lg:order-2">
          <div className="relative px-8 pb-8 sm:px-12">
            <div aria-hidden="true" className="absolute inset-8 -z-10 rounded-full bg-brand-100 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_24px_80px_rgba(45,58,140,0.18)]">
              <Image
                src="/images/lucy-profile.jpg"
                alt={`${profileConfig.name} (Lucy), IELTS teacher`}
                width={1128}
                height={2048}
                priority
                className="aspect-[4/5] h-auto w-full object-cover object-[center_36%]"
                sizes="(max-width: 1024px) 360px, 420px"
              />
            </div>
            <div className="absolute right-0 bottom-0 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-lg backdrop-blur">
              <p className="text-xs font-semibold text-brand-600">IELTS 8.0/9.0</p>
              <p className="mt-0.5 text-xs text-slate-500">6 years of teaching experience</p>
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-2 sm:gap-3">
            {profileConfig.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white bg-white/85 p-3 text-center shadow-sm backdrop-blur sm:p-4">
                <dt className="text-[11px] leading-4 text-slate-500 sm:text-xs">{stat.label}</dt>
                <dd className="mb-1 font-display text-base font-extrabold text-brand-600 sm:text-lg">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
