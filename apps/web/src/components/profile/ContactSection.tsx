import { Mail, Phone } from "lucide-react";

import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { ZaloIcon } from "@/components/icons/ZaloIcon";
import { ContactInquiryForm } from "@/components/profile/ContactInquiryForm";
import { contactConfig } from "@/config/contact";
import { cn } from "@/lib/utils";

const icons = {
  email: Mail,
  phone: Phone,
  facebook: FacebookIcon,
  zalo: ZaloIcon,
};

export function ContactSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-bold tracking-[0.18em] text-accent uppercase">Liên hệ</p>
        <h1 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">Cùng tìm lộ trình phù hợp với bạn</h1>
        <p className="mt-4 text-base leading-7 text-muted">{contactConfig.responseTime}</p>
      </header>

      <div className="mt-9 grid items-start gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div>
          <h2 className="text-2xl font-bold text-primary">Kết nối trực tiếp</h2>
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-accent/50 bg-surface-alt px-3 py-2.5 text-sm text-primary">
            <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex size-full motion-safe:animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-success" />
            </span>
            <span><strong>Ưu tiên kết nối qua Zalo</strong> để nhận phản hồi nhanh nhất.</span>
          </div>

          <div className="mt-6 space-y-3">
            {contactConfig.methods.map((method) => {
              const Icon = icons[method.icon];
              const isExternal = method.href.startsWith("http");
              const isPreferred = method.icon === "zalo";

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={cn(
                    "group flex items-center gap-4 rounded-2xl border bg-white p-4 transition hover:translate-x-0.5 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    isPreferred ? "border-[#0068FF]/40 bg-blue-50 shadow-sm" : "border-line",
                  )}
                >
                  <span className={cn(
                    "grid size-11 shrink-0 place-items-center rounded-xl",
                    method.icon === "zalo" && "bg-[#0068FF] text-white",
                    method.icon === "facebook" && "bg-[#1877F2] text-white",
                    method.icon !== "zalo" && method.icon !== "facebook" && "bg-primary-soft text-primary",
                  )}>
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted">{method.label}</span>
                    <span className="mt-0.5 block truncate text-sm font-bold text-primary">{method.value}</span>
                  </span>
                  {isPreferred && (
                    <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
                      Phản hồi nhanh
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>

        <ContactInquiryForm />
      </div>
    </div>
  );
}
