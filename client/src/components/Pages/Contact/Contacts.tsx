import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { motion } from "motion/react";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaAward } from "react-icons/fa6";
import {
  IoMail,
  IoLocation,
  IoSend,
  IoChatbubbleEllipses,
  IoArrowForward,
  IoFlash,
} from "react-icons/io5";
import { MdCode } from "react-icons/md";
import { HiSparkles, HiUsers } from "react-icons/hi2";
import { BiTimeFive } from "react-icons/bi";

const reasons = [
  {
    icon: IoFlash,
    title: "Lightning Fast Delivery",
    description:
      "I deliver high-quality code on time, every time. Your deadlines are my priority.",
  },
  {
    icon: FaAward,
    title: "Proven Excellence",
    description:
      "50+ successful projects with 100% client satisfaction across diverse industries.",
  },
  {
    icon: MdCode,
    title: "Clean Code Standards",
    description:
      "Maintainable, scalable, and well-documented code that follows best practices.",
  },
  {
    icon: HiUsers,
    title: "Clear Communication",
    description:
      "Regular updates, transparent process, and always available for discussions.",
  },
  {
    icon: BiTimeFive,
    title: "Long-term Partnership",
    description:
      "Post-launch support, maintenance, and continuous improvement of your project.",
  },
  {
    icon: HiSparkles,
    title: "Modern Tech Stack",
    description:
      "Expertise in latest technologies: React, Next.js, Node.js, AI, Web3, and more.",
  },
];

const contactInfo = [
  {
    icon: IoMail,
    label: "Email",
    value: "rohit.developer0523@gmail.com",
    href: "mailto:rohit.developer0523@gmail.com",
  },
  {
    icon: IoLocation,
    label: "Location",
    value: "Bhopal, India",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Rohit-1717?tab=repositories",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/rohit-vishwakarma-aa2522293/",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/rohitVish_1717",
    label: "X (Twitter)",
  },
];

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transparent backdrop-blur-xl border border-slate-300/50 dark:border-white/20 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <IoChatbubbleEllipses className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">Get In Touch</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Let's Work Together
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a project in mind? I'm here to help bring your ideas to life
              with clean code and creative solutions.
            </p>
          </motion.div>

          {/* Why Hire Me Section */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why I'm The Best Choice
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here's what sets me apart from other developers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative h-full bg-transparent backdrop-blur-xl rounded-2xl border border-zinc-300/50 dark:border-white/20 overflow-hidden group-hover:border-zinc-400/60 dark:group-hover:border-white/30 transition-all duration-300 shadow-lg group-hover:shadow-2xl p-6">
                      <div className="flex flex-col items-start gap-4">
                        <div className="p-3 bg-zinc-900 dark:bg-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white dark:text-slate-900" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                            {reason.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Left - Contact Info & Form */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          className="block relative bg-transparent backdrop-blur-xl rounded-2xl border border-zinc-300/50 dark:border-white/20 p-5 hover:border-zinc-400/60 dark:hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-zinc-900 dark:bg-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-5 h-5 text-white dark:text-slate-900" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground mb-1">
                                {info.label}
                              </p>
                              <p className="font-semibold">{info.value}</p>
                            </div>
                            <IoArrowForward className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </a>
                      ) : (
                        <div className="relative bg-transparent backdrop-blur-xl rounded-2xl border border-zinc-300/50 dark:border-white/20 p-5 shadow-lg">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-zinc-900 dark:bg-white rounded-xl">
                              <IconComponent className="w-5 h-5 text-white dark:text-slate-900" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground mb-1">
                                {info.label}
                              </p>
                              <p className="font-semibold">{info.value}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div
                className="relative bg-transparent backdrop-blur-xl rounded-2xl border border-zinc-300/50 dark:border-white/20 p-6 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-4 bg-transparent backdrop-blur-xl border border-slate-300/50 dark:border-white/20 rounded-xl hover:border-slate-400/60 dark:hover:border-white/30 hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative bg-transparent backdrop-blur-xl rounded-2xl border border-slate-300/50 dark:border-white/20 p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent backdrop-blur-xl border border-slate-300/50 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent backdrop-blur-xl border border-slate-300/50 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent backdrop-blur-xl border border-slate-300/50 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-transparent backdrop-blur-xl border border-slate-300/50 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium hover:scale-105 transition-transform shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IoSend className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="relative bg-transparent backdrop-blur-xl rounded-2xl border border-zinc-900/50 dark:border-white/20 p-12 shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how I can help you achieve your goals. From
                concept to deployment, I'm here to make your vision a reality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="mailto:rohit.developer0523@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoMail className="w-5 h-5" />
                  Email Me
                </motion.a>
                <motion.a
                  href="https://github.com/Rohit-1717?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-transparent backdrop-blur-xl border border-zinc-300/50 dark:border-white/20 rounded-lg font-medium hover:bg-white/5 dark:hover:bg-white/5 hover:border-slate-400/60 dark:hover:border-white/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-5 h-5" />
                  View GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </GridBackgroundDemo>
  );
}

export default Contacts;
