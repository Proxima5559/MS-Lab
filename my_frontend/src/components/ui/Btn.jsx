import React from "react";

export function Btn({ outline, theme, className = "", children, ...p }) {
  const base = "lf-mono inline-flex items-center justify-center gap-2 rounded-sm border px-6 py-3 text-[11px] tracking-widest uppercase transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const style = outline 
    ? theme.secondary 
    : `${theme.accent} border-transparent`;

  return (
    <button 
      className={`${base} ${style} ${className}`} 
      {...p}
    >
      {children}
    </button>
  );
}