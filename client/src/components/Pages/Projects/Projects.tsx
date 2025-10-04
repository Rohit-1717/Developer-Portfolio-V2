import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { motion } from "motion/react";
import { useState } from "react";
import { Github, ExternalLink, Code2, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Web Apps",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered responses, user authentication, and message encryption.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    tags: ["Next.js", "OpenAI", "WebSocket", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Generative AI",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "Collaborative task management tool with drag-and-drop interface, team collaboration, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["React", "TypeScript", "Firebase", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Web Apps",
  },
  {
    id: 4,
    title: "Portfolio Builder",
    description:
      "No-code portfolio builder with customizable templates, drag-and-drop editor, and one-click deployment.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Vue.js", "Express", "AWS", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Web Apps",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with data visualization, custom reports, and export functionality.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Web Apps",
  },
  {
    id: 6,
    title: "Social Media App",
    description:
      "Full-featured social media platform with posts, stories, real-time messaging, and content moderation.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["React Native", "GraphQL", "Redis", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Web Apps",
  },
  {
    id: 7,
    title: "AI Image Generator",
    description:
      "Advanced image generation platform using stable diffusion models with custom prompt engineering and style transfer.",
    image:
      "https://plus.unsplash.com/premium_photo-1726079248086-ad6bec853f36?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Stable Diffusion", "React", "TensorFlow"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Generative AI",
  },
  {
    id: 8,
    title: "NFT Marketplace",
    description:
      "Decentralized NFT marketplace with smart contracts, wallet integration, and royalty distribution system.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["Solidity", "Ethereum", "React", "Web3.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Web 3.0",
  },
  {
    id: 9,
    title: "DeFi Staking Platform",
    description:
      "Decentralized finance platform for token staking, yield farming, and liquidity pool management.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    tags: ["Solidity", "Hardhat", "Next.js", "Ethers.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Web 3.0",
  },
  {
    id: 10,
    title: "AI Content Writer",
    description:
      "GPT-powered content generation tool for blogs, social media, and marketing copy with SEO optimization.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["OpenAI", "Next.js", "Prisma", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Generative AI",
  },
  {
    id: 11,
    title: "DAO Governance Platform",
    description:
      "Decentralized autonomous organization platform with voting mechanisms, proposal creation, and treasury management.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    tags: ["Solidity", "IPFS", "React", "The Graph"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Web 3.0",
  },
  {
    id: 12,
    title: "AI Voice Assistant",
    description:
      "Intelligent voice assistant with natural language processing, context awareness, and multi-language support.",
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
    tags: ["Python", "Whisper AI", "GPT-4", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Generative AI",
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
