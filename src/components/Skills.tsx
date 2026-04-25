"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Mobile",
    icon: "📱",
    color: "from-indigo-500 to-purple-500",
    skills: ["React Native", "NativeWind", "OTA Updates", "JailMonkey", "Android/iOS Build & Signing"],
  },
  {
    title: "Frontend",
    icon: "🌐",
    color: "from-cyan-500 to-blue-500",
    skills: ["React.js (v18/v19)", "JavaScript (ES6+)", "TypeScript", "Material UI", "Tailwind CSS"],
  },
  {
    title: "State & Data",
    icon: "🔄",
    color: "from-emerald-500 to-teal-500",
    skills: ["Zustand", "TanStack Query", "React Query", "Context API"],
  },
  {
    title: "DevOps / CI-CD",
    icon: "🚀",
    color: "from-orange-500 to-red-500",
    skills: ["Fastlane", "Husky", "GitHub Actions", "iOS Provisioning", "Certificate Management"],
  },
  {
    title: "Testing",
    icon: "🧪",
    color: "from-pink-500 to-rose-500",
    skills: ["Vitest", "React Testing Library", "Unit Testing", "Integration Testing"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-amber-500 to-yellow-500",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT", "MongoDB", "MySQL", "AWS EC2"],
  },
];

const tools = [
  "VS Code", "Xcode", "Android Studio", "Postman", "Git", "Figma", "Jira", "Slack",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="section-glow-left" />
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-indigo-400 font-medium tracking-wider uppercase mb-3 block">
            What I work with
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass rounded-2xl overflow-hidden group hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Color bar */}
              <div className={`h-1 bg-gradient-to-r ${cat.color}`} />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  <span className="ml-auto text-xs text-slate-500">{cat.skills.length} skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + i * 0.1 + j * 0.05 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Platforms row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 glass rounded-2xl p-6"
        >
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.0 + i * 0.05 }}
                className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/30 hover:border-indigo-500/30 hover:text-indigo-300 transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
