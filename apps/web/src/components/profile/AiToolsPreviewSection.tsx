import { BarChart3, Bell, Bot, FileCheck2 } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { profileConfig } from "@/config/profile";

const icons = {
  bot: Bot,
  file: FileCheck2,
  chart: BarChart3,
};

export function AiToolsPreviewSection() {
  return (
    <Section
      id="tools"
      eyebrow="Future AI tools"
      title="A teacher-first English learning platform is taking shape."
      description="The vision: less time on repetitive preparation, more time for useful feedback and human connection."
      className="overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 text-white"
      headingClassName="[&_h2]:text-white [&_p:last-child]:text-brand-100 [&_p:first-child]:text-amber-300"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {profileConfig.aiTools.map((tool) => {
          const Icon = icons[tool.icon];
          return (
            <article key={tool.title} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15">
              <div className="grid size-12 place-items-center rounded-xl bg-white/10 text-amber-300">
                <Icon aria-hidden="true" size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{tool.title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-100">{tool.description}</p>
              <Badge className="mt-5 border-white/15 bg-white/10 text-white" tone="brand">
                {tool.status}
              </Badge>
            </article>
          );
        })}
      </div>
      <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-white/15 bg-white/8 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">Interested in the launch?</p>
          <p className="mt-1 text-sm text-brand-100">Send a quick note — no signup form or spam.</p>
        </div>
        <Button href="#contact" variant="light" className="shrink-0">
          <Bell aria-hidden="true" size={17} /> Get launch updates
        </Button>
      </div>
    </Section>
  );
}

