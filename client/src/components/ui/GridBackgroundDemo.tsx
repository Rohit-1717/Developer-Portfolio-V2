import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GridBackgroundProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
  minHeight?: string; // Optional minimum height
}

export function GridBackgroundDemo({
  children,
  className,
  centered = false, // Changed default to false for better content flow
  minHeight = "min-h-screen",
}: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative w-full bg-white dark:bg-black",
        minHeight, // Use min-height instead of fixed height
        centered && "flex items-center justify-center",
        className
      )}
    >
      {/* Grid lines - now covers entire container height */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade - adjusted to work with dynamic height */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Children - now controls the height */}
      <div className="relative z-20 w-full">{children}</div>
    </div>
  );
}