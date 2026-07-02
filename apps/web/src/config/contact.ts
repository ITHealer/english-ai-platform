import { siteConfig } from "@/config/site";
import type { ContactConfig } from "@/types/profile";

export const contactConfig = {
  isPlaceholder: true,
  responseTime: "Lucy sẽ phản hồi sớm để hỗ trợ lựa chọn lộ trình phù hợp.",
  recipientEmail: siteConfig.links.email,
  zaloUrl: siteConfig.links.zalo,
  methods: [
    { label: "Zalo", value: siteConfig.links.phone, href: siteConfig.links.zalo, icon: "zalo" },
    { label: "Email", value: siteConfig.links.email, href: `mailto:${siteConfig.links.email}`, icon: "email" },
    { label: "Điện thoại", value: siteConfig.links.phone, href: `tel:${siteConfig.links.phone.replace(/\s/g, "")}`, icon: "phone" },
    { label: "Facebook", value: "English with Lucy", href: siteConfig.links.facebook, icon: "facebook" },
  ],
  inquiryOptions: [
    "Tiếng Anh giao tiếp / nền tảng",
    "IELTS — Runners",
    "IELTS — Sprinters",
    "Chưa chắc, cần tư vấn thêm",
  ],
} satisfies ContactConfig;
