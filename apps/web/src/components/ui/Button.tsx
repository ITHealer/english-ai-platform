import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gold" | "light";
};

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary" && "bg-primary text-white hover:-translate-y-0.5 hover:bg-primary-dark",
        variant === "secondary" && "border-2 border-primary bg-transparent text-primary hover:bg-primary-soft",
        variant === "gold" && "bg-accent text-primary hover:-translate-y-0.5 hover:bg-accent-light",
        variant === "light" && "bg-white text-primary hover:-translate-y-0.5 hover:bg-primary-soft",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
