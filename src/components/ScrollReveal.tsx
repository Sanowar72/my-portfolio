"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  parallax?: boolean;
  parallaxSpeed?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  parallax = false,
  parallaxSpeed = 0.3,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [80, 0, parallax ? -50 * parallaxSpeed : 0],
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.4],
    [direction === "left" ? -100 : direction === "right" ? 100 : 0, 0],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9, 1],
    [0, 1, 1, parallax ? 0.5 : 1],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3],
    [direction === "scale" ? 0.85 : 1, 1],
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, x, opacity, scale }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StickyRevealProps {
  children: ReactNode;
  className?: string;
}

export function StickyReveal({ children, className = "" }: StickyRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [1, 1, 0.3, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div ref={ref} style={{ opacity, scale, y }} className={className}>
      {children}
    </motion.div>
  );
}

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxText({
  children,
  speed = 0.5,
  className = "",
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
