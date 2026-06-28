import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/profile/AboutSection";
import { AiToolsPreviewSection } from "@/components/profile/AiToolsPreviewSection";
import { CertificationsSection } from "@/components/profile/CertificationsSection";
import { ContactSection } from "@/components/profile/ContactSection";
import { CoursesSection } from "@/components/profile/CoursesSection";
import { ExperienceSection } from "@/components/profile/ExperienceSection";
import { HeroSection } from "@/components/profile/HeroSection";
import { TeachingMethodSection } from "@/components/profile/TeachingMethodSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CertificationsSection />
        <TeachingMethodSection />
        <CoursesSection />
        <AiToolsPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

