"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "InspectX — Inspection-as-a-Service (App & Web)",
    description:
      "A white-label vehicle inspection platform offered as a service to external enterprise clients like TVS. Enables third-party evaluators to assess two-wheelers on standardized quality parameters through a mobile app, while managers track and manage inspections via a web dashboard. Business outcome: Opened a new SaaS revenue stream for DriveX by monetizing its inspection technology — allowing partners to run their own inspection operations without building tools from scratch.",
    tech: ["React Native", "TypeScript", "Zustand", "TanStack Query", "Fastlane", "NativeWind"],
    color: "from-indigo-500 to-purple-500",
    icon: "🔍",
    link: "#",
    type: "Production App",
    category: "production",
  },
  {
    title: "InspectX Dashboard — Admin Panel",
    description:
      "A centralized operations dashboard for InspectX clients to manage their vehicle inspection workflows end-to-end. Operations teams can review inspection reports, approve or reject cases, download media evidence, and raise queries — all from a single interface. Business outcome: Eliminated manual coordination between field evaluators and back-office teams, reducing case resolution time and enabling clients like TVS to scale inspections without adding operational headcount.",
    tech: ["React.js", "TypeScript", "REST APIs", "RBAC", "Material-UI"],
    color: "from-violet-500 to-indigo-500",
    icon: "📋",
    link: "#",
    type: "Production App",
    category: "production",
  },
  {
    title: "BikeScan — DriveX Internal Inspection App",
    description:
      "DriveX\u2019s core internal inspection app used by 500+ users across multiple business verticals — NBFC lending inspections, C2B exchange evaluations, Technical Centre assessments, QC checks, PDI (Pre-Delivery Inspection), Store PRI, Logistics, and Security Guard verifications. When a vehicle is inspected at PRI, it automatically gets listed on the DriveX website for sale. Business outcome: Digitized the entire vehicle intake pipeline — from procurement to listing — ensuring every vehicle is quality-checked before going live, reducing return rates and building buyer trust.",
    tech: ["React Native", "Fastlane", "JailMonkey", "OTA Updates", "RBAC"],
    color: "from-cyan-500 to-blue-500",
    icon: "🏍️",
    link: "#",
    type: "Production App",
    category: "production",
  },
  {
    title: "ProcX — Procurement Dashboard",
    description:
      "A procurement analytics dashboard that aggregates vehicle sourcing data from B2B and C2B channels into a single view. Helps DriveX procurement teams compare deals across sources, track inventory pipelines, and make data-driven purchasing decisions. Business outcome: Improved procurement efficiency by 50% — enabling the team to process more vehicles faster with better visibility into sourcing channels, directly impacting inventory turnover and margins.",
    tech: ["React.js", "Material-UI", "JavaScript", "REST APIs"],
    color: "from-emerald-500 to-teal-500",
    icon: "📊",
    link: "#",
    type: "Production App",
    category: "production",
  },
  {
    title: "Student Management API",
    description:
      "A backend service for educational institutions to manage student records — handling enrollment, profile updates, and secure access. Provides authenticated endpoints so administrators can efficiently track and organize student data with filtering and pagination.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    color: "from-orange-500 to-red-500",
    icon: "🎓",
    link: "#",
    type: "Personal Project",
    category: "personal",
  },
  {
    title: "Music Streaming API",
    description:
      "A backend service for a music platform that lets users browse and stream tracks while giving admins control over the catalog. Supports role-based access so artists and admins can manage content independently. Deployed on AWS for reliable, always-on availability.",
    tech: ["Spring Boot", "JPA", "Hibernate", "MySQL", "AWS EC2"],
    color: "from-pink-500 to-rose-500",
    icon: "🎵",
    link: "#",
    type: "Personal Project",
    category: "personal",
  },
  {
    title: "Restaurant Management API",
    description:
      "A backend system for restaurants to manage their digital menu, process customer orders, and control staff access through role-based permissions. Serves both mobile and web ordering interfaces with validated, well-documented API endpoints.",
    tech: ["Spring Boot", "RBAC", "Swagger", "REST APIs"],
    color: "from-amber-500 to-yellow-500",
    icon: "🍽️",
    link: "#",
    type: "Personal Project",
    category: "personal",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Production", value: "production" },
  { label: "Personal", value: "personal" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="section-glow-right" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm text-indigo-400 font-medium tracking-wider uppercase mb-3 block">
            What I&apos;ve built
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f.value
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25"
                  : "glass text-slate-400 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              layout
              className="glass rounded-2xl overflow-hidden group hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Card header gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{project.icon}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50"
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
