import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
        variant === "primary" &&
          "bg-brand-600 text-white shadow-sm hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md",
        variant === "secondary" &&
          "border-2 border-brand-600 bg-white text-brand-600 hover:bg-brand-50",
        variant === "light" &&
          "bg-amber-400 text-slate-950 shadow-sm hover:-translate-y-0.5 hover:bg-amber-300",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

