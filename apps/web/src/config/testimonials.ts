import type { StudentStory } from "@/types/profile";

export const studentStories = [
  {
    id: "student-a",
    name: "Học viên A",
    initials: "HA",
    result: "IELTS 6.0 → 7.5 · Kết quả minh hoạ",
    quote:
      "Lucy giúp mình nhìn rõ từng lỗi nhỏ và luôn giải thích theo cách rất dễ hiểu. Sau mỗi buổi học, mình biết chính xác cần cải thiện điều gì tiếp theo.",
    teacherNote:
      "Bạn bắt đầu với nền tảng Writing chưa ổn định. Sau quá trình luyện tập có trọng tâm, khả năng tổ chức ý và kiểm soát lỗi đã tiến bộ rõ rệt.",
    isPlaceholder: true,
  },
  {
    id: "student-b",
    name: "Học viên B",
    initials: "HB",
    result: "Tăng 1.5 band IELTS · Kết quả minh hoạ",
    quote:
      "Lộ trình được điều chỉnh theo đúng điểm yếu của mình nên việc học bớt áp lực hơn. Mình tự tin hơn rất nhiều khi bước vào kỳ thi.",
    teacherNote:
      "Điểm thay đổi lớn nhất là sự chủ động. Khi hiểu nguyên nhân của từng lỗi, bạn có thể tự sửa và duy trì kết quả ổn định hơn.",
    isPlaceholder: true,
  },
] satisfies StudentStory[];
