import { BriefcaseBusiness, Code2, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";

const socialLinks = [
  { label: "GitHub", href: siteConfig.links.github, icon: Code2 },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: BriefcaseBusiness },
  { label: "Email", href: `mailto:${siteConfig.links.email}`, icon: Mail },
].filter((link) => link.href && !link.href.startsWith("mailto:your-email"));

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-white">{siteConfig.brandName}</p>
            <p className="mt-1 text-sm">{siteConfig.name} (Lucy) · {siteConfig.role}</p>
          </div>
          {socialLinks.length > 0 && (
            <div className="flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon aria-hidden="true" size={18} />
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; a teacher-first mindset.</p>
        </div>
      </div>
    </footer>
  );
}
