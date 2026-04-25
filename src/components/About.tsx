"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Years Experience", value: "3+", icon: "📅" },
  { label: "Production Apps", value: "5+", icon: "📱" },
  { label: "Business Impact", value: "₹20Cr", icon: "💰" },
  { label: "Performance Boost", value: "40%", icon: "⚡" },
];

const highlights = [
  "React Native & React.js Expert",
  "Shared Codebase Architecture",
  "CI/CD & Fastlane Automation",
  "Performance Optimization",
  "RBAC & Security",
  "OTA Updates & Deployments",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="section-glow-left" />
      <div className="section-glow-right" />
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-indigo-400 font-medium tracking-wider uppercase mb-3 block">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden gradient-border">
                <div className="w-full h-full bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-3 py-2 rounded-lg glass text-sm font-medium text-indigo-300"
              >
                React Native
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-lg glass text-sm font-medium text-cyan-300"
              >
                React.js
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 -right-12 px-3 py-2 rounded-lg glass text-sm font-medium text-purple-300 hidden md:block"
              >
                TypeScript
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity }}
                className="absolute top-1/3 -left-10 px-3 py-2 rounded-lg glass text-sm font-medium text-emerald-300 hidden md:block"
              >
                Fastlane
              </motion.div>

              {/* Decorative ring */}
              <div className="absolute -inset-6 border border-indigo-500/10 rounded-3xl pointer-events-none" />
              <div className="absolute -inset-12 border border-indigo-500/5 rounded-3xl pointer-events-none hidden md:block" />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-5">
              I&apos;m a <span className="text-indigo-400 font-semibold">Frontend Developer</span> based
              in Bangalore with 3+ years of experience building scalable mobile and web applications.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              I specialize in React Native and React.js, with deep expertise in shared codebase
              architecture, performance optimization, and CI/CD automation. I&apos;ve contributed to
              products generating ₹20 Crore in business impact at Drivex Mobility.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              I&apos;m passionate about writing clean, efficient code and building products that make a
              real difference. When I&apos;m not coding, I&apos;m exploring new technologies and
              contributing to the developer community.
            </p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {highlights.map((h, i) => (
                <motion.span
                  key={h}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="px-3 py-1.5 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                >
                  {h}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center group hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="text-lg mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
