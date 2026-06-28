import { ArrowUpRight, Mail, MessageCircle, Phone, Share2 } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { profileConfig } from "@/config/profile";

const contactItems = [
  {
    label: "Email",
    value: profileConfig.contact.email,
    href: `mailto:${profileConfig.contact.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profileConfig.contact.phone,
    href: profileConfig.contact.phone ? `tel:${profileConfig.contact.phone.replace(/\s/g, "")}` : "",
    icon: Phone,
  },
  {
    label: "Facebook",
    value: profileConfig.contact.facebook,
    href: profileConfig.contact.facebook,
    icon: Share2,
  },
  {
    label: "Zalo",
    value: profileConfig.contact.zalo,
    href: profileConfig.contact.zalo,
    icon: MessageCircle,
  },
].filter((item) => item.value);

const emailIsPlaceholder = profileConfig.contact.email.includes("example.com");

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s discuss the right next step."
      description="Whether you are a parent, learner, fellow teacher, or EdTech collaborator, you are welcome to reach out."
      className="bg-white"
    >
      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:p-10">
        <div>
          <p className="font-display text-xl font-bold text-slate-950">A simple conversation first.</p>
          <p className="mt-3 leading-7 text-slate-600">
            Share your learning goal, current level, or collaboration idea. We can then decide whether the fit is right.
          </p>
          {!emailIsPlaceholder && (
            <Button href={`mailto:${profileConfig.contact.email}`} className="mt-7">
              Send me a message <ArrowUpRight aria-hidden="true" size={17} />
            </Button>
          )}
          {emailIsPlaceholder && (
            <p className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              Contact details are sample content. Update <code className="font-mono font-semibold">src/config/profile.ts</code> before publishing.
            </p>
          )}
        </div>

        <div className="space-y-3">
          {contactItems.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-100 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon aria-hidden="true" size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold tracking-wide text-slate-400 uppercase">{label}</span>
                <span className="mt-0.5 block truncate text-sm font-semibold text-slate-900">{value}</span>
              </span>
              <ArrowUpRight aria-hidden="true" className="text-slate-300 transition group-hover:text-brand-600" size={18} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
