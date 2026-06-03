'use client';

import { useEffect, useRef } from 'react';

interface CanvasNode {
  id: string;
  label: string;
  fx: number;
  fy: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  color: string;
  radius: number;
  glowRadius: number;
  phase: number;
  phaseSpeed: number;
}

interface Packet {
  progress: number;
  speed: number;
  alpha: number;
}

interface Connection {
  from: CanvasNode;
  to: CanvasNode;
  packets: Packet[];
  nextPacket: number;
  interval: number;
}

const NODE_DATA = [
  { id: 'user',     label: 'Users',      fx: 0.06, fy: 0.45, color: '#22C55E' },
  { id: 'cdn',      label: 'CDN',        fx: 0.22, fy: 0.22, color: '#4ADE80' },
  { id: 'frontend', label: 'Frontend',   fx: 0.32, fy: 0.42, color: '#14B8A6' },
  { id: 'gateway',  label: 'API',        fx: 0.50, fy: 0.32, color: '#EC4899' },
  { id: 'auth',     label: 'Auth',       fx: 0.52, fy: 0.58, color: '#F59E0B' },
  { id: 'backend',  label: 'Backend',    fx: 0.64, fy: 0.38, color: '#10B981' },
  { id: 'cache',    label: 'Cache',      fx: 0.70, fy: 0.20, color: '#F97316' },
  { id: 'database', label: 'Database',   fx: 0.76, fy: 0.56, color: '#A78BFA' },
  { id: 'queue',    label: 'Queue',      fx: 0.84, fy: 0.32, color: '#34D399' },
  { id: 'monitor',  label: 'Monitor',    fx: 0.87, fy: 0.65, color: '#FBBF24' },
];

const CONNECTION_MAP = [
  ['user', 'cdn'],
  ['user', 'frontend'],
  ['cdn', 'frontend'],
  ['frontend', 'gateway'],
  ['gateway', 'auth'],
  ['gateway', 'backend'],
  ['backend', 'cache'],
  ['backend', 'database'],
  ['backend', 'queue'],
  ['queue', 'monitor'],
  ['database', 'monitor'],
  ['auth', 'backend'],
];

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastTime = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);

    // Build nodes
    const nodes: CanvasNode[] = NODE_DATA.map((d) => ({
      ...d,
      x: d.fx * canvas.width,
      y: d.fy * canvas.height,
      baseX: d.fx * canvas.width,
      baseY: d.fy * canvas.height,
      radius: 5,
      glowRadius: 28,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.0004 + Math.random() * 0.0006,
    }));

    const nodeMap = new Map(nodes.map((n) => [n.id, n]));

    // Build connections
    const connections: Connection[] = CONNECTION_MAP.filter(
      ([a, b]) => nodeMap.has(a) && nodeMap.has(b)
    ).map(([a, b]) => ({
      from: nodeMap.get(a)!,
      to: nodeMap.get(b)!,
      packets: [],
      nextPacket: Math.random() * 3000,
      interval: 2500 + Math.random() * 3500,
    }));

    const draw = (time: number) => {
      const dt = Math.min(time - lastTime, 50);
      lastTime = time;

      // Update node floating positions
      nodes.forEach((n) => {
        // Update baseX/Y when canvas resizes
        n.baseX = n.fx * canvas.width;
        n.baseY = n.fy * canvas.height;
        n.phase += n.phaseSpeed * dt;
        const fx = Math.sin(n.phase) * 6;
        const fy = Math.cos(n.phase * 0.73) * 4;
        const px = (mouseX / canvas.width - 0.5) * -18;
        const py = (mouseY / canvas.height - 0.5) * -12;
        n.x = n.baseX + fx + px;
        n.y = n.baseY + fy + py;
      });

      // Update packets
      connections.forEach((conn) => {
        conn.nextPacket -= dt;
        if (conn.nextPacket <= 0) {
          conn.packets.push({ progress: 0, speed: 0.00025 + Math.random() * 0.00015, alpha: 1 });
          conn.nextPacket = conn.interval;
        }
        conn.packets = conn.packets
          .map((p) => ({ ...p, progress: p.progress + p.speed * dt, alpha: p.progress > 0.8 ? (1 - p.progress) / 0.2 : 1 }))
          .filter((p) => p.progress < 1);
      });

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connections.forEach(({ from, to, packets }) => {
        // Base line
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Packets
        packets.forEach((pkt) => {
          const px = from.x + (to.x - from.x) * pkt.progress;
          const py = from.y + (to.y - from.y) * pkt.progress;

          // Glow halo
          const grad = ctx.createRadialGradient(px, py, 0, px, py, 8);
          grad.addColorStop(0, from.color + Math.round(pkt.alpha * 160).toString(16).padStart(2, '0'));
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, 8, 0, Math.PI * 2);
          ctx.fill();

          // Dot core
          ctx.fillStyle = from.color;
          ctx.globalAlpha = pkt.alpha;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(node.phase * 2.5) * 0.25 + 0.75;

        // Outer ambient glow
        const outerGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.glowRadius);
        outerGrad.addColorStop(0, node.color + '28');
        outerGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = outerGrad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
        ctx.strokeStyle = node.color + '40';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Core
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 12 * pulse;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Specular
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.beginPath();
        ctx.arc(node.x - 1.5, node.y - 1.5, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.font = '10px var(--font-geist-mono, monospace)';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.fillText(node.label, node.x, node.y - 13);
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}
