"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "React Native Engineer",
  "React.js Developer",
  "Mobile App Developer",
  "Full Stack Enthusiast",
];

const roleColors = [
  "from-indigo-400 to-cyan-400",
  "from-cyan-400 to-emerald-400",
  "from-violet-400 to-indigo-400",
  "from-pink-400 to-violet-400",
  "from-amber-400 to-orange-400",
];

const techLogos = [
  { name: "React", x: "10%", y: "20%", delay: 0 },
  { name: "TypeScript", x: "85%", y: "15%", delay: 1 },
  { name: "Next.js", x: "75%", y: "75%", delay: 2 },
  { name: "Node.js", x: "15%", y: "80%", delay: 1.5 },
  { name: "Tailwind", x: "90%", y: "45%", delay: 0.5 },
  { name: "MongoDB", x: "5%", y: "50%", delay: 2.5 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 100, -50, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, -80, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl"
        />
      </div>

      {/* Floating tech labels */}
      {techLogos.map((tech) => (
        <motion.div
          key={tech.name}
          className="absolute hidden md:block text-xs font-mono text-indigo-500/15 font-bold"
          style={{ left: tech.x, top: tech.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: tech.delay,
            ease: "easeInOut",
          }}
        >
          {`<${tech.name} />`}
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium glass text-indigo-300">
            👋 Hey there, welcome!
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Md Sanowar Alam</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 h-10 flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`inline-block font-semibold bg-gradient-to-r ${roleColors[roleIndex]} bg-clip-text text-transparent`}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          3+ years of experience building scalable mobile and web applications
          using React Native and React.js. Contributing to ₹20 Crore business impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white transition-all"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold border border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 transition-all"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/Md-Sanowar-Alam-Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold border border-slate-600 text-slate-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-all"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Quick stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {[
            { value: "3+", label: "Years Exp" },
            { value: "5+", label: "Production Apps" },
            { value: "₹20Cr", label: "Business Impact" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
