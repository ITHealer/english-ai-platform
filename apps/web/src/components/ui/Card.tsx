import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[20px] border border-line bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_14px_36px_rgba(22,33,62,0.09)]",
        className,
      )}
      {...props}
    />
  );
}
