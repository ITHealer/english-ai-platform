export type ProfileStat = {
  value: string;
  label: string;
};

export type Experience = {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
};

export type Credential = {
  title: string;
  detail: string;
  icon: "award" | "certificate" | "clock" | "graduation";
};

export type TeachingMethod = {
  title: string;
  description: string;
  icon: "target" | "sparkles" | "chart" | "message";
};

export type Course = {
  title: string;
  description: string;
  audience: string;
  focus: string[];
};

export type AiTool = {
  title: string;
  description: string;
  status: "Coming soon" | "Planned";
  icon: "bot" | "file" | "chart";
};

export type Contact = {
  email: string;
  phone: string;
  facebook: string;
  zalo: string;
};

export type ProfileConfig = {
  name: string;
  role: string;
  headline: string;
  location: string;
  summary: string;
  bio: string[];
  credentials: string[];
  teachingFocus: string[];
  stats: ProfileStat[];
  experience: Experience[];
  credentialDetails: Credential[];
  teachingMethods: TeachingMethod[];
  courses: Course[];
  aiTools: AiTool[];
  philosophy: string;
  contact: Contact;
};
