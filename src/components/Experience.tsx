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
      "BikeScan — DriveX's core internal inspection app powering 8+ business verticals: NBFC loan inspections, C2B exchange evaluations, Technical Centre assessments, Quality Control checks, Pre-Delivery Inspections (PDI), Store PRI evaluations, Logistics verification, and Security Guard checks. When a vehicle passes PRI inspection, it is automatically listed on the DriveX website — eliminating manual data entry and reducing time-to-list from hours to minutes for 500+ daily active users.",
      "InspectX (App + Web) — Built as an Inspection-as-a-Service product from BikeScan's shared codebase, enabling enterprise clients like TVS to run their own branded vehicle evaluation workflows. Opened a new B2B SaaS revenue stream for DriveX — allowing partners to onboard evaluators, define custom inspection parameters, and generate quality reports without building their own tools.",
      "InspectX Dashboard — Web-based admin panel for InspectX clients to manage the full inspection lifecycle: review reports with photos and scores, approve or reject cases, raise queries to evaluators, and download media evidence. Replaced email/phone-based coordination — cutting average case resolution time and enabling operations teams to handle 3x more inspections without additional headcount.",
      "Maintained BikeScan and InspectX from a single React Native codebase — any feature built once ships to both products, ensuring feature parity and reducing development effort by ~40%",
      "Upgraded React Native 0.74 → 0.84 and React 18 → 19, reducing app bundle size from 25 MB to 19 MB — critical for field evaluators in low-network areas who need fast installs and updates",
      "Built end-to-end CI/CD pipeline with Fastlane — automated builds, code signing, and App Store / Play Store deployments, cutting release cycles from days to hours",
      "Implemented OTA (Over-The-Air) updates — enabling instant bug fixes and feature rollouts to field teams without waiting for app store review (typically 1–3 days)",
      "Boosted app performance by 40% using Zustand for state management and TanStack Query for server-state caching; eliminated unnecessary re-renders with useMemo and useCallback",
      "Migrated UI to NativeWind (Tailwind CSS for React Native) for consistent styling, and implemented Role-Based Access Control (RBAC) — ensuring evaluators, managers, and admins only see data relevant to their role across all verticals",
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
      "ProcX — Built a procurement analytics dashboard that aggregates vehicle sourcing data from B2B and C2B channels into a single view, helping procurement teams compare deals, track inventory pipelines, and make data-driven purchasing decisions",
      "Implemented advanced filtering, bulk export, and real-time updates — improving procurement efficiency by 50%",
      "Optimized UI for large datasets with dynamic EMI calculations, enabling faster deal evaluation for the sourcing team",
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
                className={`absolute top-2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 glow -left-2 ${
                  i % 2 === 0 ? "md:left-auto md:-right-2" : "md:-left-2"
                }`}
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
