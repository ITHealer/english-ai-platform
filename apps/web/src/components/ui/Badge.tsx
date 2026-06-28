import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "brand" | "amber" | "slate" | "success";
};

export function Badge({ className, tone = "brand", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tone === "brand" && "bg-brand-50 text-brand-700",
        tone === "amber" && "border border-amber-200 bg-amber-50 text-amber-800",
        tone === "slate" && "bg-slate-100 text-slate-700",
        tone === "success" && "border border-emerald-200 bg-emerald-50 text-emerald-700",
        className,
      )}
      {...props}
    />
  );
}

