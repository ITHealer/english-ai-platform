import { Award, BadgeCheck, Clock3, GraduationCap } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { profileConfig } from "@/config/profile";

const icons = {
  award: Award,
  certificate: BadgeCheck,
  clock: Clock3,
  graduation: GraduationCap,
};

export function CertificationsSection() {
  return (
    <Section
      id="credentials"
      eyebrow="Credentials"
      title="A foundation parents and learners can trust."
      description="Academic background, professional teaching certificates, verified English proficiency, and hands-on experience."
      className="bg-slate-50"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profileConfig.credentialDetails.map((credential) => {
          const Icon = icons[credential.icon];
          return (
            <Card key={credential.title}>
              <div className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon aria-hidden="true" size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{credential.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{credential.detail}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
