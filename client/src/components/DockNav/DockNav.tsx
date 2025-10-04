import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, FolderKanban, Info, Mail } from "lucide-react";
import { ModeToggle } from "../ThemeToggleButton/mode-toggle";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <FolderKanban className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "About",
      icon: (
        <Info className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    // {
    //   title: "Blog",
    //   icon: (
    //     <BookOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "/blog",
    // },
    {
      title: "Contact",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },

    {
      title: "Theme",
      icon: <ModeToggle />,
      href: "#",
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 md:left-1/2 md:-translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}
