import React from 'react';

export function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative z-10 border-t px-6 py-12 lg:px-12 ${t.line} ${t.bg || ''}`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full animate-pulse bg-teal-500`} />
              <span className={`lf-mono text-xs font-bold md:text-sm tracking-[0.3em] uppercase ${t.main}`}>
                HENK LAB <span className="opacity-40">/ PROTOTYPE CTA</span>
              </span>
            </div>
            <p className={`lf-mono text-[10px] leading-relaxed max-w-[280px] uppercase tracking-wider opacity-60 ${t.soft}`}>
              Architecting modular interfaces for ML · CV · LLM environments. 
              Built for high-density data visualization.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:flex sm:gap-16">
            <div className="flex flex-col gap-4">
              <span className={`lf-mono text-[10px] tracking-[0.2em] uppercase font-semibold opacity-40 ${t.soft}`}>
                Resources
              </span>
              <nav className="flex flex-col gap-2 lf-mono text-[11px] tracking-widest uppercase">
                <a className="hover:text-teal-500 transition-colors" href="#">Documentation</a>
                <a className="hover:text-teal-500 transition-colors" href="#">API Reference</a>
                <a className="hover:text-teal-500 transition-colors" href="#">System Status</a>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <span className={`lf-mono text-[10px] tracking-[0.2em] uppercase font-semibold opacity-40 ${t.soft}`}>
                Connect
              </span>
              <nav className="flex flex-col gap-2 lf-mono text-[11px] tracking-widest uppercase">
                <a className="hover:text-teal-500 transition-colors" href="#">GitHub</a>
                <a className="hover:text-teal-500 transition-colors" href="#">Research Gate</a>
                <a className="hover:text-teal-500 transition-colors" href="#">Contact</a>
              </nav>
            </div>
          </div>
        </div>

        <div className={`mt-12 pt-6 border-t border-dashed flex flex-col gap-4 md:flex-row md:items-center md:justify-between ${t.line} opacity-40`}>
          <div className="flex flex-wrap gap-4 lf-mono text-[9px] tracking-[0.2em] uppercase">
            <span className="px-2 py-0.5 border border-current rounded-sm">V2.4.0-STABLE</span>
            <span>Latency: 24ms</span>
            <span>Node: EU-WEST-1</span>
          </div>

          <span className={`lf-mono text-[10px] tracking-widest uppercase ${t.soft}`}>
            © {currentYear} ENK LAB · ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
}