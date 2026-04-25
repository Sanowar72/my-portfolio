"use client";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800">
      <div className="animated-line" />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="#home" className="text-2xl font-bold gradient-text">
              Sanowar Alam
            </a>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Frontend Developer specializing in React Native & React.js.
              Building scalable mobile and web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-500 hover:text-indigo-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/Sanowar72" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">
                GitHub
              </a>
              <a href="https://linkedin.com/in/md-sanowar-alam" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">
                LinkedIn
              </a>
              <a href="mailto:mdsanowaralam79@gmail.com" className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">
                mdsanowaralam79@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Md Sanowar Alam. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
