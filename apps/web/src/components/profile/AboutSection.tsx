import { MapPin, Sparkles } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { profileConfig } from "@/config/profile";

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About Lucy" title="A qualified teacher with a personalized approach.">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <div className="space-y-4 text-base leading-8 text-slate-600">
            {profileConfig.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-700">
            <MapPin aria-hidden="true" className="text-brand-500" size={18} />
            {profileConfig.location}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {profileConfig.teachingFocus.map((focus) => (
              <Badge key={focus} tone="slate">{focus}</Badge>
            ))}
          </div>
        </div>

        <blockquote className="relative self-start rounded-r-2xl border-l-4 border-brand-600 bg-brand-50 p-6 sm:p-8">
          <Sparkles aria-hidden="true" className="mb-5 text-amber-500" size={26} />
          <p className="font-display text-xl leading-8 font-semibold text-brand-700 italic">
            “{profileConfig.philosophy}”
          </p>
          <footer className="mt-5 text-sm font-semibold text-brand-500">— Teaching philosophy</footer>
        </blockquote>
      </div>
    </Section>
  );
}
