"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    icon: "🚀",
    title: "Launched InspectX SaaS",
    description: "New product line from BikeScan codebase — zero duplication, faster time-to-market",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: "⚡",
    title: "40% Performance Boost",
    description: "Reduced app bundle 25MB → 19MB via RN 0.84 + React 19 upgrade",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: "💰",
    title: "₹20 Crore Impact",
    description: "Cost savings through ProcX procurement optimization for Drivex operations",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: "🔧",
    title: "End-to-End CI/CD",
    description: "Shipped Fastlane pipeline, eliminating manual releases with automated store deployments",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "📋",
    title: "InspectX Dashboard",
    description: "Built admin panel for inspection management — approve/reject, queries, media downloads",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: "🛡️",
    title: "RBAC for 500+ Users",
    description: "Implemented role-based access control securing data across multiple production apps",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 relative overflow-hidden">
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
            Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="glass rounded-2xl overflow-hidden text-center group hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className={`h-1 bg-gradient-to-r ${item.color}`} />
              <div className="p-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  className="text-5xl mb-4"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
