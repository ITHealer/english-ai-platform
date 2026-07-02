import type { ProfileConfig } from "@/types/profile";

export const profileConfig = {
  name: "Nguyễn Mộng Hoà",
  englishName: "Lucy",
  eyebrow: "Giảng viên IELTS · English with Lucy",
  role: "Cử nhân Ngôn ngữ Anh · IELTS Teacher",
  badge: "IELTS 8.0 · 6 năm kinh nghiệm",
  photo: "/images/lucy-profile-v2.png",
  credentials: [
    {
      emphasis: "Cử nhân Ngôn ngữ Anh",
      detail: "— Trường Đại học Khoa học Xã hội và Nhân văn.",
    },
    {
      emphasis: "Chứng chỉ Giảng dạy tiếng Anh Quốc tế TESOL",
      detail: "— xếp loại Giỏi.",
    },
    {
      emphasis: "Chứng chỉ Nghiệp vụ Sư phạm",
      detail: "— xếp loại Giỏi.",
    },
    {
      emphasis: "IELTS 8.0/9.0",
      detail: "— Listening 9.0, Reading 9.0, Writing Task 2 8.0.",
    },
    {
      emphasis: "6 năm kinh nghiệm giảng dạy",
      detail: "— IELTS, tiếng Anh giao tiếp và tiếng Anh học thuật.",
    },
  ],
  philosophy:
    "Cá nhân hoá lộ trình, nâng tầm chất lượng và giúp mỗi học viên khai mở tiềm năng của chính mình.",
  stats: [
    { value: "6+", label: "Năm kinh nghiệm giảng dạy" },
    { value: "8.0", label: "IELTS Overall" },
    { value: "9.0", label: "Listening & Reading" },
    { value: "8.0", label: "Writing task 2" },
  ],
} satisfies ProfileConfig;
