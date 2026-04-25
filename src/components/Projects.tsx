"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "InspectX — Inspection-as-a-Service",
    description:
      "Developed from BikeScan shared codebase, enabling a new SaaS product line with zero code duplication. Maintained multiple production apps from a single React Native codebase with feature parity.",
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
      "Admin dashboard for managing vehicle inspections — view inspection details, download media and reports, approve or reject cases, and raise queries. Streamlined the inspection review workflow for operations teams.",
    tech: ["React.js", "TypeScript", "REST APIs", "RBAC", "Material-UI"],
    color: "from-violet-500 to-indigo-500",
    icon: "📋",
    link: "#",
    type: "Production App",
    category: "production",
  },
  {
    title: "BikeScan — Vehicle Inspection App",
    description:
      "Production mobile app for vehicle inspections. Upgraded RN 0.74→0.84, React 18→19, reduced bundle 25MB→19MB. Built CI/CD with Fastlane, OTA updates, and RBAC for 500+ users.",
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
      "Admin dashboard built with React.js + Material-UI featuring data aggregation from B2B/C2B sources, advanced filtering, export, and real-time updates. Improved usability by 50%.",
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
      "REST API using Node.js, Express.js, and MongoDB for full student administration — CRUD operations, JWT-based authentication, filtering and pagination.",
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
      "Spring Boot REST API for managing music tracks with full CRUD, admin controls, and role-based authorization. Deployed on AWS EC2 for high availability.",
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
      "Built with Spring Boot featuring RBAC, Swagger API docs, menu/order CRUD, and data validation for both mobile and web clients.",
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

                <p className="text-sm text-slate-400 mb-4 leading-relaxed line-clamp-3">
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
