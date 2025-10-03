import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/Theme/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed rounded-full w-fit h-fit"
    >
      {/* Sun Icon (Light Mode) */}
      <Sun
        className="h-[1rem] w-[1rem]  rotate-0 transition-all 
                   dark:scale-0 dark:-rotate-90"
      />
      {/* Moon Icon (Dark Mode) */}
      <Moon
        className=" absolute h-[1rem] w-[1rem] scale-0 rotate-90 transition-all 
                   dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
