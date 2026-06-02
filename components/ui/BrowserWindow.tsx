import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BrowserWindowProps {
  children: ReactNode;
  url?: string;
  className?: string;
}

export default function BrowserWindow({ children, url = 'app.example.com', className }: BrowserWindowProps) {
  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d12]',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_32px_80px_rgba(0,0,0,0.6)]',
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#111118] border-b border-white/[0.06]">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex items-center gap-2 mx-2 px-3 py-1 rounded-md bg-black/40 border border-white/[0.06]">
          <div className="w-2 h-2 rounded-full border border-white/20 shrink-0" />
          <span className="text-xs text-white/25 font-mono truncate">{url}</span>
        </div>
        <div className="flex gap-2 shrink-0">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-4 h-4 rounded bg-white/[0.04] border border-white/[0.06]" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative overflow-hidden">{children}</div>
    </div>
  );
}
