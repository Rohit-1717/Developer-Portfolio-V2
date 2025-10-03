import { cn } from "@/lib/utils";
import type { ReactNode } from "react";


interface GridBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function GridBackgroundDemo({ children, className }: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black",
        className
      )}
    >
      {/* Grid lines */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Children go here */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
