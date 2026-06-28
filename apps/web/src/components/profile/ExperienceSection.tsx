import { Check } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { profileConfig } from "@/config/profile";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Teaching experience"
      title="Six years helping learners move toward clear English goals."
      description="IELTS preparation, general communication, and academic English taught through personalized learning paths."
      className="bg-white"
    >
      <div className="relative space-y-8 before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-px before:bg-slate-200 sm:before:left-[9px]">
        {profileConfig.experience.map((item) => (
          <article key={`${item.period}-${item.role}`} className="relative grid gap-4 pl-10 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:pl-0">
            <span aria-hidden="true" className="absolute top-2 left-0 size-4 rounded-full border-4 border-white bg-amber-500 ring-2 ring-brand-100 sm:size-5" />
            <p className="font-mono text-xs font-semibold tracking-wide text-brand-600 uppercase sm:pl-10">
              {item.period}
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7">
              <p className="text-sm font-semibold text-brand-500">{item.organization}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-950">{item.role}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-600" size={16} />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
