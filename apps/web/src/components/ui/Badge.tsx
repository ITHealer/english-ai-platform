import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "gold" | "navy" | "soft" | "warning";
};

export function Badge({ className, tone = "soft", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold",
        tone === "gold" && "bg-accent text-primary",
        tone === "navy" && "bg-primary text-white",
        tone === "soft" && "bg-primary-soft text-primary",
        tone === "warning" && "border border-accent bg-surface-alt text-primary",
        className,
      )}
      {...props}
    />
  );
}
