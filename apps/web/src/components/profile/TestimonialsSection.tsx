import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { studentStories } from "@/config/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-bold tracking-[0.18em] text-accent uppercase">Hall of Fame</p>
        <h1 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">Hành trình tiến bộ của học viên</h1>
        <p className="mt-4 text-base leading-7 text-muted">
          Mỗi kết quả là một hành trình riêng, được xây dựng từ mục tiêu rõ ràng và lộ trình học phù hợp.
        </p>
      </header>

      <div className="mt-10 space-y-7">
        {studentStories.map((story, index) => (
          <article
            key={story.id}
            className="grid overflow-hidden rounded-[24px] bg-primary md:grid-cols-2"
          >
            <div
              className={cn(
                "relative flex min-h-72 flex-col items-center justify-center overflow-hidden p-8 text-center sm:p-11",
                index % 2 === 1 && "md:order-2",
              )}
            >
              <span aria-hidden="true" className="absolute top-8 left-8 size-28 rounded-full bg-accent" />
              <span aria-hidden="true" className="absolute right-10 bottom-8 size-16 rounded-full bg-accent-light/40" />
              <div className="relative z-10 grid size-40 place-items-center rounded-full border-4 border-white bg-surface-alt font-display text-5xl font-bold text-primary shadow-2xl">
                {story.initials}
              </div>
              <h2 className="relative z-10 mt-5 text-2xl font-bold text-white">{story.name}</h2>
              <p className="relative z-10 mt-1 text-sm font-semibold text-highlight">{story.result}</p>
              {story.isPlaceholder && <Badge className="relative z-10 mt-4" tone="gold">Nội dung minh hoạ</Badge>}
            </div>

            <div className="flex flex-col justify-center gap-6 p-8 sm:p-11">
              <div>
                <p className="text-[11px] font-bold tracking-[0.15em] text-highlight uppercase">Học viên chia sẻ</p>
                <blockquote className="mt-3 text-sm leading-7 text-white/90 italic">“{story.quote}”</blockquote>
              </div>
              <div className="h-px bg-white/15" />
              <div>
                <p className="text-[11px] font-bold tracking-[0.15em] text-highlight uppercase">Lucy nhận xét</p>
                <p className="mt-3 text-sm leading-7 text-on-dark-muted">{story.teacherNote}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-7 text-sm font-bold text-primary transition hover:gap-3 hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Bắt đầu hành trình của bạn <ArrowRight aria-hidden="true" size={17} />
        </a>
      </div>
    </div>
  );
}
