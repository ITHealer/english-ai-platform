import type { ProfileConfig } from "@/types/profile";

export const profileConfig = {
  name: "Nguyễn Mộng Hoà",
  role: "IELTS Teacher | English name: Lucy",
  headline: "Personalized English learning that unlocks your potential.",
  location: "Vietnam",
  summary:
    "IELTS teacher with 6 years of experience teaching IELTS, general English, and academic English — with a personalized learning path designed around each student's goals.",
  bio: [
    "Lucy, whose full Vietnamese name is Nguyễn Mộng Hoà, is an IELTS teacher with a Bachelor's degree in English Language from the University of Social Sciences and Humanities.",
    "She holds International TESOL and Pedagogical Skills certificates, both graded Excellent, and has 6 years of experience across IELTS, general English, and academic English programs.",
  ],
  credentials: [
    "IELTS 8.0/9.0",
    "TESOL — Excellent",
    "6 years of teaching experience",
  ],
  teachingFocus: [
    "IELTS Reading & Listening",
    "IELTS Writing Task 2",
    "General English",
    "Academic English",
    "Personalized learning paths",
  ],
  stats: [
    { value: "6", label: "Years teaching" },
    { value: "8.0", label: "Overall IELTS" },
    { value: "1:1", label: "Personalized plans" },
  ],
  experience: [
    {
      period: "Present",
      role: "IELTS Teacher",
      organization: "English with Lucy",
      description:
        "Personalized IELTS instruction built around each learner's current level, target score, and individual learning needs.",
      highlights: [
        "IELTS overall score: 8.0/9.0",
        "Listening and Reading: 9.0/9.0",
        "Writing Task 2: 8.0/9.0",
      ],
    },
    {
      period: "6 years",
      role: "English Language Educator",
      organization: "IELTS, General & Academic English programs",
      description:
        "Six years of teaching experience across exam preparation, communicative English, and academically focused English programs.",
      highlights: [
        "IELTS preparation",
        "General English communication",
        "Academic English development",
      ],
    },
  ],
  credentialDetails: [
    {
      title: "B.A. in English Language",
      detail: "University of Social Sciences and Humanities.",
      icon: "graduation",
    },
    {
      title: "International TESOL",
      detail: "English Teaching Certificate — graded Excellent.",
      icon: "certificate",
    },
    {
      title: "Pedagogical Skills",
      detail: "Professional teaching skills certificate — graded Excellent.",
      icon: "certificate",
    },
    {
      title: "IELTS 8.0/9.0",
      detail: "Listening 9.0 · Reading 9.0 · Writing Task 2 8.0.",
      icon: "award",
    },
    {
      title: "6 Years Experience",
      detail: "IELTS, general English, and academic English instruction.",
      icon: "clock",
    },
  ],
  teachingMethods: [
    {
      title: "Goal-led learning",
      description:
        "Every plan starts with the learner's current level, target, and available study time.",
      icon: "target",
    },
    {
      title: "Personalized practice",
      description:
        "Lessons and exercises adapt to recurring mistakes instead of following a rigid template.",
      icon: "sparkles",
    },
    {
      title: "Visible progress",
      description:
        "Small checkpoints make improvement concrete and help us decide what to focus on next.",
      icon: "chart",
    },
    {
      title: "Confidence first",
      description:
        "Students get a safe space to try, make mistakes, ask questions, and use English often.",
      icon: "message",
    },
  ],
  courses: [
    {
      title: "IELTS Foundation",
      description:
        "Build the language base and exam habits needed before moving into intensive IELTS practice.",
      audience: "Learners building toward their target IELTS band",
      focus: ["Reading", "Listening", "Core grammar", "Study strategy"],
    },
    {
      title: "IELTS Skills Intensive",
      description:
        "Targeted practice based on high-level exam experience, including Listening and Reading scores of 9.0.",
      audience: "IELTS learners who need focused skill improvement",
      focus: ["Reading", "Listening", "Writing Task 2", "Error analysis"],
    },
    {
      title: "General & Academic English",
      description:
        "A structured program for clearer communication, stronger foundations, and confident academic language use.",
      audience: "Learners improving communication or academic English",
      focus: ["Communication", "Grammar", "Vocabulary", "Academic language"],
    },
  ],
  aiTools: [
    {
      title: "AI Exercise Generator",
      description:
        "Teachers describe a learning goal and receive an editable exercise set in seconds.",
      status: "Coming soon",
      icon: "bot",
    },
    {
      title: "Smart Auto-Grading",
      description:
        "Students submit answers and receive timely feedback with clear explanations.",
      status: "Planned",
      icon: "file",
    },
    {
      title: "Progress Dashboard",
      description:
        "Teachers see patterns in student mistakes and know what to teach next.",
      status: "Planned",
      icon: "chart",
    },
  ],
  philosophy:
    "Personalize the learning path, elevate the quality, and help every learner unlock their potential.",
  contact: {
    email: "lucy.english@example.com",
    phone: "",
    facebook: "",
    zalo: "",
  },
} satisfies ProfileConfig;
