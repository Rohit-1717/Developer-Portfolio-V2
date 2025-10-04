import { CardSpotlight } from "@/components/ui/card-spotlight";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { motion } from "motion/react";

import { ArrowRight, Sparkles } from "lucide-react";

import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiModal,
  SiGithub,
  SiLangchain,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiGit,
  SiAmazonrds,
  SiVercel,
  SiMongodb,
  SiNextdotjs,
  SiRedis,
  SiMysql,
  SiPython,
  SiN8N,
  SiGoogle,
  SiOpenai,
  SiLinux,
  SiFramer,
} from "react-icons/si";
import { HoverEffect } from "@/components/ui/card-hover-effect";

type SkillCategory =
  | "Computer Science"
  | "Programming Languages"
  | "Frontend"
  | "Backend"
  | "Generative AI"
  | "Tools";

interface Skills {
  "Computer Science": string[];
  "Programming Languages": string[];
  Frontend: string[];
  Backend: string[];
  "Generative AI": string[];
  Tools: string[];
}

function About() {
  const skills: Skills = {
    "Computer Science": [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Design Patterns",
      "DBMS",
      "Computer Networks",
      "Operating System",
    ],
    "Programming Languages": ["JavaScript", "TypeScript", "Python"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL"],
    "Generative AI": [
      "N8N",
      "OpenAI",
      "Gemini",
      "LangChain",
      "LangGraph",
      "MCP",
    ],
    Tools: ["Git", "Github", "Docker", "AWS", "Vercel", "Linux"],
  };

  const skillIcons: Record<
    string,
    React.ComponentType<{ className?: string }>
  > = {
    React: SiReact,
    TypeScript: SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": SiNodedotjs,
    Express: SiExpress,
    PostgreSQL: SiPostgresql,
    Docker: SiDocker,
    Git: SiGit,
    AWS: SiAmazonrds,
    Vercel: SiVercel,
    MongoDB: SiMongodb,
    "Next.js": SiNextdotjs,
    Redis: SiRedis,
    MySQL: SiMysql,
    N8N: SiN8N,
    Python: SiPython,
    JavaScript: SiJavascript,
    LangChain: SiLangchain,
    LangGraph: SiLangchain,
    MCP: SiModal,
    Github: SiGithub,
    Gemini: SiGoogle,
    OpenAI: SiOpenai,
    Linux: SiLinux,
    "Framer Motion": SiFramer,
  };

  const skillColors: Record<string, { bg: string; text: string }> = {
    "Data Structures": {
      bg: "bg-yellow-100 dark:bg-yellow-800",
      text: "text-yellow-600 dark:text-yellow-300",
    },
    Algorithms: {
      bg: "bg-orange-100 dark:bg-orange-800",
      text: "text-orange-600 dark:text-orange-300",
    },
    OOP: {
      bg: "bg-red-100 dark:bg-red-800",
      text: "text-red-600 dark:text-red-300",
    },
    DBMS: {
      bg: "bg-green-100 dark:bg-green-800",
      text: "text-green-600 dark:text-green-300",
    },
    "Computer Networks": {
      bg: "bg-blue-100 dark:bg-blue-800",
      text: "text-blue-600 dark:text-blue-300",
    },
    "Operating System": {
      bg: "bg-purple-100 dark:bg-purple-800",
      text: "text-purple-600 dark:text-purple-300",
    },
    "Design Patterns": {
      bg: "bg-pink-100 dark:bg-pink-800",
      text: "text-pink-600 dark:text-pink-300",
    },
    JavaScript: {
      bg: "bg-yellow-100 dark:bg-yellow-700",
      text: "text-yellow-600 dark:text-yellow-200",
    },
    TypeScript: {
      bg: "bg-blue-100 dark:bg-blue-800",
      text: "text-blue-600 dark:text-blue-300",
    },
    Python: {
      bg: "bg-green-100 dark:bg-green-800",
      text: "text-green-600 dark:text-green-300",
    },
    React: {
      bg: "bg-blue-100 dark:bg-blue-800",
      text: "text-blue-600 dark:text-blue-300",
    },
    "Next.js": {
      bg: "bg-gray-100 dark:bg-gray-700",
      text: "text-gray-600 dark:text-gray-300",
    },
    "Tailwind CSS": {
      bg: "bg-teal-100 dark:bg-teal-800",
      text: "text-teal-600 dark:text-teal-300",
    },
    "Framer Motion": {
      bg: "bg-pink-100 dark:bg-pink-800",
      text: "text-pink-600 dark:text-pink-300",
    },
    "Node.js": {
      bg: "bg-green-100 dark:bg-green-800",
      text: "text-green-600 dark:text-green-300",
    },
    Express: {
      bg: "bg-gray-100 dark:bg-gray-700",
      text: "text-gray-600 dark:text-gray-300",
    },
    MongoDB: {
      bg: "bg-green-100 dark:bg-green-900",
      text: "text-green-600 dark:text-green-300",
    },
    PostgreSQL: {
      bg: "bg-blue-100 dark:bg-blue-900",
      text: "text-blue-600 dark:text-blue-300",
    },

    MySQL: {
      bg: "bg-sky-100 dark:bg-sky-800",
      text: "text-sky-600 dark:text-sky-300",
    },
    LangChain: {
      bg: "bg-purple-100 dark:bg-purple-800",
      text: "text-purple-600 dark:text-purple-300",
    },
    LangGraph: {
      bg: "bg-pink-100 dark:bg-pink-800",
      text: "text-pink-600 dark:text-pink-300",
    },
    MCP: {
      bg: "bg-cyan-100 dark:bg-cyan-800",
      text: "text-cyan-600 dark:text-cyan-300",
    },
    Gemini: {
      bg: "bg-yellow-100 dark:bg-yellow-800",
      text: "text-yellow-600 dark:text-yellow-300",
    },
    N8N: {
      bg: "bg-cyan-100 dark:bg-cyan-800",
      text: "text-cyan-600 dark:text-cyan-300",
    },
    OpenAI: {
      bg: "bg-purple-100 dark:bg-purple-800",
      text: "text-purple-600 dark:text-purple-300",
    },
    TensorFlow: {
      bg: "bg-orange-100 dark:bg-orange-800",
      text: "text-orange-600 dark:text-orange-300",
    },
    Git: {
      bg: "bg-red-100 dark:bg-red-800",
      text: "text-red-600 dark:text-red-300",
    },
    Docker: {
      bg: "bg-blue-100 dark:bg-blue-800",
      text: "text-blue-600 dark:text-blue-300",
    },
    AWS: {
      bg: "bg-orange-100 dark:bg-orange-800",
      text: "text-orange-600 dark:text-orange-300",
    },
    Vercel: {
      bg: "bg-gray-100 dark:bg-gray-700",
      text: "text-gray-600 dark:text-gray-300",
    },
    Github: {
      bg: "bg-gray-100 dark:bg-gray-700",
      text: "text-gray-600 dark:text-gray-300",
    },

    Linux: {
      bg: "bg-yellow-100 dark:bg-yellow-700",
      text: "text-yellow-600 dark:text-yellow-200",
    },
    Render: {
      bg: "bg-indigo-100 dark:bg-indigo-800",
      text: "text-indigo-600 dark:text-indigo-300",
    },
    Netlify: {
      bg: "bg-teal-100 dark:bg-teal-800",
      text: "text-teal-600 dark:text-teal-300",
    },
  };

  const cardColors: Record<SkillCategory, string> = {
    "Computer Science": "#f59e0b", // yellow/orange
    "Programming Languages": "#ef4444", // red
    Frontend: "#3b82f6", // blue
    Backend: "#16a34a", // green
    "Generative AI": "#06b6d4", // cyan
    Tools: "#8b5cf6", // purple
  };
  const values = [
    {
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
      link: "#",
    },
    {
      title: "User-Centric",
      description:
        "Putting user experience at the forefront of every decision.",
      link: "#",
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices.",
      link: "#",
    },
    {
      title: "Collaboration",
      description: "Believing in the power of teamwork and open communication.",
      link: "#",
    },
  ];

  const journeyData = [
    {
      phase: "Present",
      description:
        "Building innovative solutions and constantly pushing the boundaries of what's possible with modern web technologies. Focusing on creating impactful projects that solve real problems.",
      dotSize: "w-4 h-4",
      dotPosition: "-left-[9px]",
      dotOpacity: "bg-primary",
      delay: 0,
    },
    {
      phase: "Growth",
      description:
        "Expanded my skill set across the full stack, diving deep into both frontend frameworks and backend architectures. Started contributing to open-source and building projects that matter.",
      dotSize: "w-3 h-3",
      dotPosition: "-left-[7px]",
      dotOpacity: "bg-primary/70",
      delay: 0.2,
    },
    {
      phase: "Beginning",
      description:
        "Started my coding journey with curiosity and determination. Learned the fundamentals and fell in love with the process of turning ideas into reality through code.",
      dotSize: "w-2 h-2",
      dotPosition: "-left-[5px]",
      dotOpacity: "bg-primary/40",
      delay: 0.4,
    },
  ];

  return (
    <GridBackgroundDemo className="relative min-h-screen w-full bg-background text-foreground">
      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Who I Am Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Who I Am ?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I'm Rohit Vishwakarma, a passionate full-stack developer who loves
              building modern, scalable web applications. I enjoy blending
              design with engineering to create meaningful digital experiences
              that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              With a strong foundation in both frontend and backend
              technologies, I specialize in creating seamless, performant
              applications that users love. My journey in tech has been driven
              by curiosity and a desire to solve real-world problems through
              code.
            </p>
          </div>

          <div className="relative flex flex-col items-center max-w-sm mx-auto w-full order-1 lg:order-2">
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-3 -left-3 text-black dark:text-white z-10" />
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-3 -right-3 text-black dark:text-white z-10" />
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-3 -left-3 text-black dark:text-white z-10" />
            <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-3 -right-3 text-black dark:text-white z-10" />

            <div className="relative group w-full">
              <EvervaultCard
                image="/dev-image.jpeg"
                alt="Rohit portrait"
                className="w-full rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 hidden md:flex items-center justify-center bg-black/50 text-white rounded-xl pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-sm sm:text-base font-light text-center">
                  Hover over this card to reveal the developer.
                </p>
              </div>
              <div className="absolute inset-0 rounded-xl overflow-hidden md:hidden">
                <img
                  src="/dev-image.jpeg"
                  alt="Rohit portrait"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              A diverse toolkit for building end-to-end solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {(Object.keys(skills) as SkillCategory[]).map((category) => (
              <CardSpotlight
                key={category}
                className="p-6 sm:p-8 rounded-xl h-full cursor-pointer transition-transform duration-300
                   border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:scale-105
                   bg-white/20 dark:bg-gray-900/20"
                color={cardColors[category]}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-black dark:text-white flex items-center gap-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills[category].map((skill) => {
                    const IconComponent = skillIcons[skill];
                    const colors = skillColors[skill] || {
                      bg: "bg-gray-100 dark:bg-gray-700",
                      text: "text-gray-600 dark:text-gray-300",
                    };
                    return (
                      <span
                        key={skill}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-medium text-xs sm:text-sm ${colors.bg} ${colors.text}`}
                      >
                        {IconComponent ? (
                          <IconComponent className="w-4 h-4" />
                        ) : null}{" "}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </CardSpotlight>
            ))}
          </div>
        </section>

        {/* My Approach Section */}
        <section className="space-y-8 sm:space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              My Approach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              The principles that guide my work
            </p>
          </div>

          <HoverEffect items={values} className="max-w-7xl mx-auto" />
        </section>

        {/* Journey Section */}
        <section className="space-y-8 sm:space-y-10">
          <motion.div
            className="text-center space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              My Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              From curiosity to expertise
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            {journeyData.map((item) => (
              <motion.div
                key={item.phase}
                className="border-l-2 border-primary/30 pl-6 sm:pl-8 pb-6 sm:pb-8 relative group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: item.delay,
                  ease: "easeOut",
                }}
                whileHover={{ x: 8 }}
              >
                {/* Animated dot */}
                <motion.div
                  className={`absolute ${item.dotPosition} top-0 ${item.dotSize} rounded-full ${item.dotOpacity}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: item.delay + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.5 }}
                >
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    initial={{ scale: 1, opacity: 0.7 }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute -inset-2 bg-primary/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <motion.h3
                  className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay + 0.2 }}
                >
                  {item.phase}
                </motion.h3>

                <motion.p
                  className="text-muted-foreground text-sm sm:text-base leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay + 0.3 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator line animation */}
          <motion.div
            className="max-w-3xl mx-auto h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 sm:space-y-8 py-8 sm:py-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-sm mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let's Build Something Together
            </motion.h2>

            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-zinc-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium w-full sm:w-auto overflow-hidden"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              initial="initial"
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative flex items-center justify-center gap-2">
                {/* text container */}
                <span className="relative inline-block min-w-[110px] h-6 overflow-hidden">
                  <motion.span
                    className="absolute left-0 top-0 inline-block whitespace-nowrap"
                    variants={{
                      initial: { y: 0, opacity: 1 },
                      hover: { y: -30, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    Get in Touch
                  </motion.span>

                  <motion.span
                    className="absolute left-0 top-0 inline-block whitespace-nowrap"
                    variants={{
                      initial: { y: 30, opacity: 0 },
                      hover: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    Let&apos;s Create ✨
                  </motion.span>
                </span>

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              className="group px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-slate-800 backdrop-blur-sm rounded-lg font-medium w-full sm:w-auto hover:bg-white/20 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="flex items-center justify-center gap-2">
                View Projects
                <motion.span
                  className="inline-block"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
          </motion.div>
        </section>
      </div>
    </GridBackgroundDemo>
  );
}

export default About;
