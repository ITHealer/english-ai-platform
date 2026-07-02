import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { contactConfig } from "@/config/contact";
import { courseRoadmaps, getCourseRoadmap } from "@/config/courses";
import { siteConfig } from "@/config/site";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courseRoadmaps.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseRoadmap(slug);

  if (!course) return {};

  return {
    title: `${course.title} | ${siteConfig.brandName}`,
    description: `Liên hệ Lucy để được hỗ trợ lộ trình ${course.title} phù hợp với mục tiêu học tập.`,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseRoadmap(slug);

  if (!course) notFound();

  return (
    <>
      <header className="border-b border-line bg-page">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <span className="relative size-10 overflow-hidden rounded-xl border border-line bg-white">
            <Image
              src="/images/lucy-logo.jpg"
              alt="Logo English with Lucy"
              fill
              className="scale-125 object-cover mix-blend-multiply"
              sizes="40px"
            />
          </span>
          <div>
            <p className="font-display text-xl leading-none font-bold text-primary">{siteConfig.englishName}.</p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">{siteConfig.brandName}</p>
          </div>
        </div>
      </header>

      <main className="grid min-h-[calc(100svh-9rem)] place-items-center px-4 py-16">
        <div className="w-full max-w-2xl rounded-[20px] border border-line bg-white p-7 text-center shadow-[0_20px_60px_rgba(22,33,62,0.1)] sm:p-12">
          <p className="text-xs font-bold tracking-[0.18em] text-accent uppercase">Chi tiết lộ trình</p>
          <h1 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">{course.title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
            Nội dung chi tiết của lộ trình này đang được cập nhật. Vui lòng liên hệ Lucy để được tư vấn dựa trên trình độ hiện tại, mục tiêu và thời gian học phù hợp nhất.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={contactConfig.zaloUrl} target="_blank" rel="noreferrer" variant="gold">
              Liên hệ qua Zalo
            </Button>
            <Button href="/#courses" variant="secondary">Quay lại khoá học</Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
