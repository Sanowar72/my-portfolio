"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Drivex Mobility Pvt. Ltd",
    location: "Bangalore",
    period: "Jul 2023 – Present",
    duration: "3+ years",
    icon: "🚀",
    highlights: [
      "Developed InspectX from BikeScan shared codebase, enabling Inspection-as-a-Service — delivered a new product line with zero code duplication",
      "Built InspectX Admin Dashboard for inspection management — approve/reject cases, raise queries, download media and inspection reports",
      "Maintained multiple production apps (BikeScan, InspectX) from a single React Native codebase, ensuring feature parity and faster releases",
      "Upgraded React Native 0.74 → 0.84 and React 18 → 19, reducing bundle size from 25 MB to 19 MB",
      "Built full CI/CD pipeline with Fastlane — automated builds, code signing, and App Store / Play Store deployments",
      "Implemented OTA updates to bypass app store review delays, enabling instant hotfixes",
      "Boosted performance by 40% with Zustand + TanStack Query; reduced re-renders via useMemo, useCallback",
      "Migrated UI to NativeWind (Tailwind CSS) and implemented RBAC securing data access for 500+ users",
    ],
    tech: ["React Native", "React.js", "TypeScript", "Zustand", "TanStack Query", "Fastlane", "NativeWind"],
  },
  {
    role: "Frontend Developer",
    company: "Sirpi Products and Services Pvt. Ltd",
    location: "Bangalore",
    period: "Jan 2023 – Jul 2023",
    duration: "6 months",
    icon: "💼",
    highlights: [
      "Built ProcX admin dashboard in React.js + Material-UI with data aggregation from B2B/C2B sources",
      "Implemented advanced filtering, export, and real-time updates",
      "Optimized UI for large datasets; improved usability by 50% with dynamic EMI calculations",
    ],
    tech: ["React.js", "Material-UI", "JavaScript", "REST APIs"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="section-glow-right" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-5xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-indigo-400 font-medium tracking-wider uppercase mb-3 block">
            Where I&apos;ve worked
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
              className={`relative mb-12 md:w-1/2 pl-8 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
                className="absolute left-0 md:left-auto top-2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 glow md:right-0"
                style={i % 2 === 0 ? { right: "-8px", left: "auto" } : { left: "-8px" }}
              />

              <div className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex items-center gap-2 justify-between">
                    <span className="text-sm text-indigo-400 font-medium">{exp.period}</span>
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-slate-400">
                    {exp.company} • {exp.location}
                  </span>
                  <span className="text-xs text-slate-500">{exp.duration}</span>
                </div>

                <ul className={`space-y-2 mb-4 ${i % 2 === 0 ? "md:text-left" : ""}`}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-slate-300 flex gap-2">
                      <span className="text-indigo-400 mt-1 shrink-0">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-start" : ""}`}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
