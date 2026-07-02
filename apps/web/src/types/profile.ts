export type ProfileTabId = "about" | "courses" | "students" | "contact";

export type NavigationItem = {
  id: ProfileTabId;
  label: string;
};

export type CredentialPoint = {
  emphasis: string;
  detail: string;
};

export type ProfileStat = {
  value: string;
  label: string;
};

export type ProfileConfig = {
  name: string;
  englishName: string;
  eyebrow: string;
  role: string;
  badge: string;
  photo: string;
  credentials: CredentialPoint[];
  philosophy: string;
  stats: ProfileStat[];
};

export type CourseRoadmap = {
  slug: string;
  tag: string;
  title: string;
  sessions: string;
  capacity: string;
  focusLabel: string;
  focus: string[];
  featured?: boolean;
};

export type PricingPackage = {
  name: string;
  schedule: string;
  audience: string;
  price: string;
  total: string;
  popular?: boolean;
};

export type GeneralCourse = {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  consultationTitle: string;
  consultationNote: string;
};

export type CoursesConfig = {
  eyebrow: string;
  title: string;
  description: string;
  general: GeneralCourse;
  ielts: {
    roadmaps: CourseRoadmap[];
    pricingEyebrow: string;
    pricingTitle: string;
    hidePricing: boolean;
    hiddenPricingLabel: string;
    packages: PricingPackage[];
  };
};

export type StudentStory = {
  id: string;
  name: string;
  initials: string;
  result: string;
  quote: string;
  teacherNote: string;
  isPlaceholder: boolean;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: "email" | "phone" | "facebook" | "zalo";
};

export type ContactConfig = {
  isPlaceholder: boolean;
  responseTime: string;
  recipientEmail: string;
  zaloUrl: string;
  methods: ContactMethod[];
  inquiryOptions: string[];
};
