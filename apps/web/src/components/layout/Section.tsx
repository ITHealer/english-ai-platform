import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  headingClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  containerClassName,
  headingClassName,
}: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={title ? titleId : undefined}
      className={cn("py-16 sm:py-20 lg:py-24", className)}
    >
      <div className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {(eyebrow || title || description) && (
          <div className={cn("mb-10 max-w-3xl", headingClassName)}>
            {eyebrow && (
              <p className="mb-3 text-xs font-bold tracking-[0.18em] text-brand-500 uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 id={titleId} className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

