import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-background text-foreground overflow-hidden pb-28 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Radial Fade */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl text-center w-full">
        {/* Small Intro */}
        <Badge
          variant="outline"
          className="mb-6 px-4 py-1 text-sm sm:text-base font-medium"
        >
          Full-Stack Developer 💻
        </Badge>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Hey, I’m{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Rohit
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          I design and build{" "}
          <span className="font-semibold text-foreground">
            intelligent solutions
          </span>{" "}
          that solve real problems, blending modern web engineering with{" "}
          <span className="font-semibold text-foreground">Generative AI</span>.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href="/projects">🚀 See My Work</a>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
            asChild
          >
            <a href="/contact">💼 Hire Me</a>
          </Button>
        </div>

        {/* Open to Work Badge below CTA */}
        {/* <div className="mt-6 flex justify-center">
          <Badge
            variant="default"
            className="px-4 py-1 text-sm sm:text-base bg-primary text-white flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-500 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17l-3.88-3.88-1.41 1.41L9 19 20.3 7.71l-1.41-1.41z" />
            </svg>
            <span className="whitespace-nowrap">Open to Remote Work</span>
          </Badge>
        </div> */}

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <a
            href="http://github.com/rohit-1717"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-vishwakarma-aa2522293/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
          <a
            href="mailto:rohit.developer0523@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
          <a
            href="https://x.com/rohitVish_1717"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaXTwitter className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
