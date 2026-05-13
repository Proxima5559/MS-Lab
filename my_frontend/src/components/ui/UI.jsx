import React from "react";

export function Eyebrow({ children, theme }) {
  return (
    <span className={`lf-mono inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase ${theme.eyebrow}`}>
      {children}
    </span>
  );
}

export function GlowDivider({ theme, dark }) {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0" style={{ background: dark ? `linear-gradient(90deg, transparent 0%, ${theme.glowA}40 50%, transparent 100%)` : `linear-gradient(90deg, transparent 0%, ${theme.glowA}25 50%, transparent 100%)` }} />
    </div>
  );
}
