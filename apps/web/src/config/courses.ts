import type { CourseRoadmap, CoursesConfig } from "@/types/profile";

export const coursesConfig = {
  eyebrow: "Khoá học",
  title: "Lộ trình học phù hợp với từng mục tiêu",
  description:
    "Chọn hướng học phù hợp — củng cố tiếng Anh nền tảng hoặc luyện thi IELTS bài bản theo từng giai đoạn.",
  general: {
    slug: "tieng-anh-nen-tang",
    title: "Tiếng Anh Tổng Quát",
    description:
      "Lộ trình dành cho học viên muốn phát triển tiếng Anh toàn diện theo đúng trình độ hiện tại, từ củng cố kiến thức nền tảng đến mở rộng năng lực học thuật, giao tiếp và định hướng chứng chỉ quốc tế.",
    benefits: [
      "Học 1:1 hoặc nhóm nhỏ theo lịch linh hoạt",
      "Lộ trình cá nhân hoá theo trình độ đầu vào",
      "Phát triển 4 kỹ năng: Nghe, Nói, Đọc, Viết",
      "Củng cố và mở rộng ngữ pháp, từ vựng theo trình độ",
      "Rèn phát âm IPA, phản xạ giao tiếp và khả năng diễn đạt tự nhiên",
      "Định hướng chứng chỉ Cambridge theo từng cấp độ",
      "Phù hợp với nhiều trình độ: học viên cần xây nền, học sinh khá giỏi, học sinh chuyên hoặc học viên muốn học tiếng Anh bài bản và chuyên sâu hơn",
    ],
    consultationTitle: "Liên hệ tư vấn",
    consultationNote: "Lộ trình và học phí được điều chỉnh theo mục tiêu, trình độ hiện tại.",
  },
  ielts: {
    roadmaps: [
      {
        slug: "runners",
        tag: "Khoá nền tảng",
        title: "Runners",
        sessions: "26 buổi",
        capacity: "Online",
        focusLabel: "Trọng tâm",
        focus: [
          "Kiểm tra đầu vào và xây dựng lộ trình cá nhân hoá",
          "Làm quen cấu trúc đề IELTS và tiêu chí chấm điểm",
          "Xây nền ngữ pháp, từ vựng và phát âm học thuật",
          "Học chiến thuật cơ bản cho Listening, Reading, Writing, Speaking",
          "Xây nền Writing Task 1 & Task 2: viết câu, đoạn và bố cục bài",
        ],
      },
      {
        slug: "sprinters",
        tag: "Nâng cao",
        title: "Sprinters",
        sessions: "36 buổi",
        capacity: "",
        focusLabel: "Trọng tâm",
        focus: [
          "Chiến lược đạt band 6.5+ / 7.0+ theo tiêu chí giám khảo",
          "Luyện đề bám sát format thi thật và quản lý thời gian",
          "Chữa Writing chi tiết theo 4 tiêu chí chấm IELTS",
          "Nâng cấp từ vựng học thuật, paraphrase và diễn đạt tự nhiên",
          "Phân tích lỗi sai cá nhân và tối ưu chiến thuật làm bài",
        ],
        featured: true,
      },
    ],
    pricingEyebrow: "Gói học linh hoạt",
    pricingTitle: "Chọn gói phù hợp với kỹ năng bạn cần cải thiện",
    hidePricing: true,
    hiddenPricingLabel: "Liên hệ để nhận báo giá",
    packages: [
      {
        name: "Gói 1",
        schedule: "1 buổi Nghe–Đọc / tuần",
        audience: "Học duy trì, lịch nhẹ",
        price: "2.340.000đ",
        total: "Tổng nhóm: 2.340.000đ / 4 tuần",
      },
      {
        name: "Gói 2",
        schedule: "1 buổi Nói–Viết / tuần",
        audience: "Tập trung Speaking/Writing",
        price: "3.600.000đ",
        total: "Tổng nhóm: 3.600.000đ / 4 tuần",
      },
      {
        name: "Gói 3",
        schedule: "2 buổi Nghe–Đọc / tuần",
        audience: "Củng cố Nghe–Đọc",
        price: "4.680.000đ",
        total: "Tổng nhóm: 4.680.000đ / 4 tuần",
      },
      {
        name: "Gói 4",
        schedule: "1 Nghe–Đọc + 1 Nói–Viết / tuần",
        audience: "Học đều 4 kỹ năng",
        price: "5.940.000đ",
        total: "Tổng nhóm: 5.940.000đ / 4 tuần",
        popular: true,
      },
      {
        name: "Gói 7",
        schedule: "1 Nghe–Đọc + 2 Nói–Viết / tuần",
        audience: "Thi gấp, cần Speaking/Writing",
        price: "9.540.000đ",
        total: "Tổng nhóm: 9.540.000đ / 4 tuần",
      },
      {
        name: "Gói 8",
        schedule: "2 Nghe–Đọc + 2 Nói–Viết / tuần",
        audience: "Tăng tốc toàn diện",
        price: "11.880.000đ",
        total: "Tổng nhóm: 11.880.000đ / 4 tuần",
      },
    ],
  },
} satisfies CoursesConfig;

export const courseRoadmaps: CourseRoadmap[] = [
  {
    slug: coursesConfig.general.slug,
    tag: "Tiếng Anh nền tảng",
    title: coursesConfig.general.title,
    sessions: "Linh hoạt",
    capacity: "1:1 hoặc nhóm nhỏ",
    focusLabel: "Nội dung chính",
    focus: coursesConfig.general.benefits,
  },
  ...coursesConfig.ielts.roadmaps,
];

export function getCourseRoadmap(slug: string) {
  return courseRoadmaps.find((course) => course.slug === slug);
}
