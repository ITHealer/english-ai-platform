import { Footer } from "@/components/layout/Footer";
import { TabbedProfileShell } from "@/components/layout/TabbedProfileShell";
import { AboutSection } from "@/components/profile/AboutSection";
import { ContactSection } from "@/components/profile/ContactSection";
import { CoursesSection } from "@/components/profile/CoursesSection";
import { TestimonialsSection } from "@/components/profile/TestimonialsSection";

export default function Home() {
  return (
    <TabbedProfileShell
      about={<AboutSection />}
      courses={<CoursesSection />}
      students={<TestimonialsSection />}
      contact={<ContactSection />}
      footer={<Footer />}
    />
  );
}
