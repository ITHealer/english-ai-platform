const defaultUrl = "https://your-project.vercel.app";

export const siteConfig = {
  name: "Nguyễn Mộng Hoà",
  englishName: "Lucy",
  brandName: "English with Lucy",
  role: "IELTS Teacher & English Educator",
  description:
    "Nguyễn Mộng Hoà (Lucy) is an IELTS teacher with 6 years of experience in personalized IELTS, general English, and academic English instruction.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? defaultUrl,
  locale: "en_US",
  availableFor: "Personalized IELTS & English learning",
  links: {
    email: "lucy.english@example.com",
    github: "",
    linkedin: "",
  },
} as const;
