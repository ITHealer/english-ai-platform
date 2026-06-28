import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_12px_32px_rgba(45,58,140,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-[0_4px_12px_rgba(15,23,42,0.06),0_18px_38px_rgba(45,58,140,0.10)]",
        className,
      )}
      {...props}
    />
  );
}

