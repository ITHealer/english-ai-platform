import { BarChart3, MessageCircleMore, Sparkles, Target } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { profileConfig } from "@/config/profile";

const icons = {
  target: Target,
  sparkles: Sparkles,
  chart: BarChart3,
  message: MessageCircleMore,
};

export function TeachingMethodSection() {
  return (
    <Section
      id="method"
      eyebrow="Teaching method"
      title="A calm, personalized path from confusion to confidence."
      description="The method stays simple: understand the learner, practise the right things, and make progress visible."
      className="bg-white"
    >
      <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {profileConfig.teachingMethods.map((method, index) => {
          const Icon = icons[method.icon];
          return (
            <article key={method.title} className="bg-white p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="grid size-11 place-items-center rounded-xl bg-amber-50 text-amber-700">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <span className="font-mono text-xs font-semibold text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-950">{method.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{method.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

