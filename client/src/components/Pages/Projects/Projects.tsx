import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { motion } from "motion/react";
import { useState } from "react";
import { Github, ExternalLink, Code2, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Manovie",
    description:
      "ManoVie is an AI-powered mental wellness platform that leverages sentiment analysis and data visualization to help users track emotions, understand mental health patterns, and receive personalized well-being insights.",
    image:
      "https://res.cloudinary.com/rohitcloudinary/image/upload/v1760261678/Portfolio%20Projects%20Banners/ManoVie_i09hmo.png",
    tags: ["React", "Node.js", "MongoDB", "Gemini Ai", "Zustand", "JavaScript"],
    github:
      "https://github.com/Rohit-1717/ManoVie---AI-Powered-Mood-Tracking-and-Sentiment-Analysis",
    live: "https://mano-vie-ai-powered-mood-tracking-a.vercel.app/",
    featured: true,
    category: "Web Apps",
  },
  {
    id: 2,
    title: "Morphix AI",
    description:
      "An AI-driven creative ecosystem that empowers users to generate, customize, and scale stunning visuals with lightning-fast performance and powerful APIs — designed for creators, developers, and businesses alike.",
    image:
      "https://res.cloudinary.com/rohitcloudinary/image/upload/v1760262540/Portfolio%20Projects%20Banners/Morphix_Ai_huqexd.png",
    tags: [
      "React",
      "OpenAI",
      "Express",
      "MongoDB",
      "ShadCN",
      "Generative AI",
      "TypeScript",
      "NodeJs",
    ],
    github:
      "https://github.com/Rohit-1717/Text---Image-Generator----Nebius-AI-Studio",
    live: "https://text-image-generator-nebius-v20.vercel.app/",
    featured: true,
    category: "Generative AI",
  },
  {
    id: 3,
    title: "Connectify Messenger",
    description:
      "Connectify Messenger is a powerful, feature-rich real-time messaging application designed for seamless and engaging communication. It combines state-of-the-art technologies to deliver a secure, customizable, and user-friendly experience.",
    image:
      "https://camo.githubusercontent.com/7aa9873deeec6104bc7088293376f3e4bdb32c6f15f7659da089e0e0a5507921/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f726f686974636c6f7564696e6172792f696d6167652f75706c6f61642f76313733373339393732382f436f6e6e6563746966795f4d657373656e6765722d41495f62626a656b342e706e67",
    tags: [
      "React",
      "MongoDB",
      "Express",
      "NodeJs",
      "Tailwind CSS",
      "Socket.IO",
      "Gemini APIs",
    ],
    github: "https://github.com/Rohit-1717/Messaging-Application---Socket.io",
    live: "https://example.com",
    featured: false,
    category: "Web Apps",
  },
  {
    id: 4,
    title: "Developer Portfolio",
    description:
      "A modern, responsive developer portfolio website built with React, TypeScript, and cutting-edge web technologies. Showcasing my projects, skills, and professional journey with an elegant and interactive user experience.",
    image:
      "https://camo.githubusercontent.com/e543223b36a66d9455ce78bdeb6c1b968d74e3a48ab35ce1f5efd7724eccc954/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f726f686974636c6f7564696e6172792f696d6167652f75706c6f61642f76313735393538383238302f506f7274666f6c696f2f53637265656e73686f745f66726f6d5f323032352d31302d30345f31392d35382d31355f646a627166792e706e67",
    tags: [
      "ReactJs",
      "ShadCN",
      "Accertinity UI",
      "Frontend",
      "Framer Motion",
      "NodeJs",
    ],
    github: "https://github.com/Rohit-1717/Developer-Portfolio-V2",
    live: "https://developer-portfolio-v2-alpha.vercel.app/",
    featured: false,
    category: "Web Apps",
  },
];

const filters = ["All", "Featured", "Web Apps", "Generative AI", "Web 3.0"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : activeFilter === "Featured"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.category === activeFilter);

  return (
    <GridBackgroundDemo>
      <div className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center space-y-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 border border-black/50 dark:border-white/10 backdrop-blur-sm mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Code2 className="w-4 h-4 text-blue-500 " />
              <span className="text-sm font-medium ">My Work</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Featured Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A collection of projects I've built, showcasing my skills in web
              development, design, and problem-solving.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-slate-900 shadow-lg"
                    : "bg-white/10 dark:bg-white/5 border border-black/20 dark:border-white/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1 + 0.3,
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </motion.div>
                )}

                {/* Card */}
                <div className="relative h-full bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 dark:border-white/10 overflow-hidden group-hover:border-white/20 dark:group-hover:border-white/20 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Overlay Links */}
                    <motion.div
                      className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-full border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mb-22 mt-16 sm:mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-muted-foreground mb-6">
              Want to see more? Check out my GitHub for additional projects and
              contributions.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:scale-105 transition-transform"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </GridBackgroundDemo>
  );
}

export default Projects;
