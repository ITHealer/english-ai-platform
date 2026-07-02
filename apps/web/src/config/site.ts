const defaultUrl = "https://english-with-lucy.vercel.app";

export const siteConfig = {
  name: "Nguyễn Mộng Hoà",
  englishName: "Lucy",
  brandName: "English with Lucy",
  role: "Giảng viên IELTS & Giáo viên tiếng Anh",
  description:
    "Nguyễn Mộng Hoà (Lucy) là giảng viên IELTS với 6 năm kinh nghiệm, cung cấp lộ trình IELTS và tiếng Anh được cá nhân hoá theo mục tiêu của từng học viên.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? defaultUrl,
  locale: "vi_VN",
  links: {
    email: "monghoams21@gmail.com",
    facebook: "https://www.facebook.com/mowopeace",
    phone: "096 635 7172",
    zalo: "https://zalo.me/0966357172",
  },
} as const;
