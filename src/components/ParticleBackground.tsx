"use client";
import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Packet {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create nodes
    const nodeCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 90);
    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2.5 + 0.8,
      opacity: Math.random() * 0.5 + 0.15,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    // Data packets traveling along connections
    const packets: Packet[] = [];
    const packetColors = [
      "rgba(99, 102, 241,",   // indigo
      "rgba(6, 182, 212,",    // cyan
      "rgba(168, 85, 247,",   // purple
      "rgba(34, 211, 238,",   // light cyan
    ];

    // Shooting stars
    const shootingStars: ShootingStar[] = [];

    const connectionDistance = 160;
    const mouseDistance = 250;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Spawn packets periodically
    let packetTimer = 0;
    let starTimer = 0;

    const animate = () => {
      timeRef.current += 1;
      packetTimer++;
      starTimer++;

      // Semi-transparent clear for subtle trail effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.15)";
      ctx.fillRect(0, 0, width, height);

      // Animated gradient mesh blobs
      const t = timeRef.current * 0.005;
      const blobs = [
        { x: width * 0.3 + Math.sin(t * 0.7) * 150, y: height * 0.3 + Math.cos(t * 0.5) * 100, r: 300, color: [99, 102, 241] },
        { x: width * 0.7 + Math.cos(t * 0.6) * 120, y: height * 0.7 + Math.sin(t * 0.8) * 130, r: 280, color: [6, 182, 212] },
        { x: width * 0.5 + Math.sin(t * 0.9) * 100, y: height * 0.5 + Math.cos(t * 0.4) * 150, r: 250, color: [168, 85, 247] },
      ];

      for (const blob of blobs) {
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        gradient.addColorStop(0, `rgba(${blob.color.join(",")}, 0.04)`);
        gradient.addColorStop(0.5, `rgba(${blob.color.join(",")}, 0.015)`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Build connection pairs for packets
      const connections: [number, number, number][] = [];

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += node.pulseSpeed;

        // Wrap around edges smoothly
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        // Mouse interaction
        const mdx = node.x - mouseRef.current.x;
        const mdy = node.y - mouseRef.current.y;
        const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mouseDist < mouseDistance && mouseDist > 0) {
          const force = (mouseDistance - mouseDist) / mouseDistance * 0.03;
          node.vx += (mdx / mouseDist) * force;
          node.vy += (mdy / mouseDist) * force;
        }

        // Dampen
        node.vx *= 0.998;
        node.vy *= 0.998;

        // Pulse effect
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        const currentRadius = node.radius + pulse * 1.2;
        const currentOpacity = node.opacity + pulse * 0.15;

        // Draw node glow
        const glowRadius = currentRadius * 5;
        const glow = ctx.createRadialGradient(
          node.x, node.y, currentRadius,
          node.x, node.y, glowRadius
        );
        glow.addColorStop(0, `rgba(99, 102, 241, ${currentOpacity * 0.3})`);
        glow.addColorStop(0.5, `rgba(6, 182, 212, ${currentOpacity * 0.1})`);
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Draw node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        const coreGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, currentRadius
        );
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.8})`);
        coreGradient.addColorStop(1, `rgba(129, 140, 248, ${currentOpacity})`);
        ctx.fillStyle = coreGradient;
        ctx.fill();

        // Pulsing ring on some nodes
        if (node.radius > 1.8) {
          const ringRadius = currentRadius + 4 + pulse * 6;
          const ringOpacity = (1 - pulse) * currentOpacity * 0.3;
          ctx.beginPath();
          ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(99, 102, 241, ${ringOpacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Find connections
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            connections.push([i, j, dist]);
          }
        }
      }

      // Draw connections with gradient
      for (const [i, j, dist] of connections) {
        const alpha = (1 - dist / connectionDistance) * 0.18;
        const gradient = ctx.createLinearGradient(
          nodes[i].x, nodes[i].y,
          nodes[j].x, nodes[j].y
        );
        gradient.addColorStop(0, `rgba(99, 102, 241, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(6, 182, 212, ${alpha * 0.8})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, ${alpha})`);
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Mouse connections with cyan glow
      for (let i = 0; i < nodes.length; i++) {
        const mdx = nodes[i].x - mouseRef.current.x;
        const mdy = nodes[i].y - mouseRef.current.y;
        const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mouseDist < mouseDistance) {
          const alpha = (1 - mouseDist / mouseDistance) * 0.35;
          const gradient = ctx.createLinearGradient(
            nodes[i].x, nodes[i].y,
            mouseRef.current.x, mouseRef.current.y
          );
          gradient.addColorStop(0, `rgba(129, 140, 248, ${alpha})`);
          gradient.addColorStop(1, `rgba(34, 211, 238, ${alpha})`);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Mouse glow cursor
      if (mouseRef.current.x > 0) {
        const cursorGlow = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 80
        );
        cursorGlow.addColorStop(0, "rgba(6, 182, 212, 0.08)");
        cursorGlow.addColorStop(0.5, "rgba(99, 102, 241, 0.03)");
        cursorGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = cursorGlow;
        ctx.fillRect(
          mouseRef.current.x - 80, mouseRef.current.y - 80,
          160, 160
        );
      }

      // Spawn data packets
      if (packetTimer > 30 && connections.length > 0) {
        packetTimer = 0;
        const conn = connections[Math.floor(Math.random() * connections.length)];
        packets.push({
          fromIndex: conn[0],
          toIndex: conn[1],
          progress: 0,
          speed: Math.random() * 0.02 + 0.015,
          color: packetColors[Math.floor(Math.random() * packetColors.length)],
        });
      }

      // Draw and update packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const from = nodes[p.fromIndex];
        const to = nodes[p.toIndex];
        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;

        // Packet glow
        const packetGlow = ctx.createRadialGradient(px, py, 0, px, py, 8);
        packetGlow.addColorStop(0, `${p.color} 0.8)`);
        packetGlow.addColorStop(0.5, `${p.color} 0.2)`);
        packetGlow.addColorStop(1, `${p.color} 0)`);
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = packetGlow;
        ctx.fill();

        // Packet core
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} 1)`;
        ctx.fill();
      }

      // Spawn shooting stars occasionally
      if (starTimer > 200 + Math.random() * 300) {
        starTimer = 0;
        const fromLeft = Math.random() > 0.5;
        shootingStars.push({
          x: fromLeft ? -10 : width + 10,
          y: Math.random() * height * 0.5,
          vx: (fromLeft ? 1 : -1) * (Math.random() * 3 + 4),
          vy: Math.random() * 2 + 1,
          life: 0,
          maxLife: 80 + Math.random() * 40,
          size: Math.random() * 1.5 + 0.5,
        });
      }

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.x += star.vx;
        star.y += star.vy;
        star.life++;

        if (star.life >= star.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }

        const fadeIn = Math.min(star.life / 10, 1);
        const fadeOut = Math.max(1 - (star.life - star.maxLife + 20) / 20, 0);
        const alpha = fadeIn * fadeOut * 0.6;

        // Trail
        const trailLen = 30;
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - star.vx * trailLen, star.y - star.vy * trailLen
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(0.3, `rgba(129, 140, 248, ${alpha * 0.5})`);
        gradient.addColorStop(1, "rgba(129, 140, 248, 0)");
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.vx * trailLen, star.y - star.vy * trailLen);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.size;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size + 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
