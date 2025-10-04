import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-6 py-6 sm:py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute inset-0 bg-white/20 dark:bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20"
                layoutId="hoverBackground"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    ease: [0.23, 1, 0.32, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  scale: 0.98,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors" />
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl h-full w-full p-6 sm:p-8",
        "bg-white/5 dark:bg-white/5 backdrop-blur-xl",
        "border border-white/10 dark:border-white/10",
        "group-hover:border-white/20 dark:group-hover:border-white/20",
        "group-hover:bg-white/10 dark:group-hover:bg-white/10",
        "transition-all duration-300",
        "shadow-lg shadow-black/5 group-hover:shadow-xl group-hover:shadow-black/10",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-xl sm:text-2xl font-bold text-slate-900 dark:text-white",
        "group-hover:text-blue-600 dark:group-hover:text-blue-400",
        "transition-colors duration-300",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-slate-600 dark:text-slate-400 leading-relaxed",
        "group-hover:text-slate-700 dark:group-hover:text-slate-300",
        "transition-colors duration-300",
        className
      )}
    >
      {children}
    </p>
  );
};
