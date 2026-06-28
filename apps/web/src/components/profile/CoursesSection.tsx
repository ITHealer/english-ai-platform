import { ArrowRight, CheckCircle2, UsersRound } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { profileConfig } from "@/config/profile";

export function CoursesSection() {
  return (
    <Section
      id="courses"
      eyebrow="Courses & services"
      title="Choose the support that fits your next learning goal."
      description="Each course can be adapted after a short level and goals discussion."
      className="bg-slate-50"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {profileConfig.courses.map((course, index) => (
          <Card key={course.title} className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <Badge tone={index === 0 ? "amber" : "brand"}>{index === 0 ? "Popular start" : "Personalized"}</Badge>
              <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-950">{course.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>
            <div className="mt-5 flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
              <UsersRound aria-hidden="true" className="mt-0.5 shrink-0 text-brand-500" size={17} />
              {course.audience}
            </div>
            <ul className="mt-5 space-y-2">
              {course.focus.map((focus) => (
                <li key={focus} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 aria-hidden="true" className="text-emerald-600" size={16} />
                  {focus}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:gap-3 hover:text-brand-700 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
            >
              Ask about this course <ArrowRight aria-hidden="true" size={16} />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}

