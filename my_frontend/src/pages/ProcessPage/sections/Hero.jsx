import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ArrowUpRight  } from "lucide-react";
import { Eyebrow } from "@/components/ui/UI";
import { Btn } from "@/components/ui/Btn";
import { up } from "@/lib/animations";
import { steps } from "@/lib/constants/constantsPcs";

export default function Hero({ t, dark }) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-20 lg:px-10 lg:pt-28 lg:pb-28">
            <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
     
              <div className="space-y-8">
                <motion.div {...up(0)}>
                  <Eyebrow theme={t}>
                    <Sparkles className="h-3 w-3" /> Architecture Approach · Process
                  </Eyebrow>
                </motion.div>
     
                <motion.div {...up(0.08)}>
                  <h1 className="lf-display text-6xl font-medium leading-[1.07] tracking-tight sm:text-7xl lg:text-[5.25rem]">
                    From hypothesis
                    <br />
                    to{" "}
                    <em
                      className={`not-italic ${t.neonText}`}
                      style={{ textShadow: dark ? `0 0 48px ${t.glowA}55` : "none" }}
                    >
                      scale.
                    </em>
                    <br />
                    <span className="opacity-25">Predictably.</span>
                  </h1>
                </motion.div>
     
                <motion.div {...up(0.14)}>
                  <p className={`max-w-lg text-base leading-8 ${t.muted}`}>
                    AI development comes with inherent uncertainty. Our process is designed to
                    minimize risk, validate ideas rapidly, and invest strictly in what works.
                  </p>
                </motion.div>
     
                <motion.div {...up(0.2)} className="flex flex-wrap gap-3">
                  <Btn theme={t}>
                    Start a conversation <ArrowUpRight className="h-3 w-3" />
                  </Btn>
                  <Btn outline theme={t}>
                    View case studies <ArrowRight className="h-3 w-3" />
                  </Btn>
                </motion.div>
              </div>
     
             
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-sm border lf-noise lf-scanlines ${t.surfaceGlow}`}
                style={{ boxShadow: t.cardShadow }}
              >
                
                <div className={`flex items-center justify-between border-b px-5 py-3 ${t.line}`}>
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <span className={`lf-mono text-[10px] tracking-widest uppercase ${t.soft}`}>
                    process_overview.sh
                  </span>
                  <div className={`lf-mono lf-pulse rounded-sm border px-2 py-0.5 text-[9px] ${t.accentSoft}`}>
                    ● 3 phases
                  </div>
                </div>
     
                <div className={`divide-y ${dark ? "divide-[#1a2535]" : "divide-slate-100"}`}>
                  {steps.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.index}
                        href={`#step-${s.index}`}
                        className={`group flex items-center gap-4 px-5 py-4 transition-all duration-200 hover:border-cyan-500/10`}
                        style={{ display: "flex" }}
                      >
                        <div className={`lf-mono shrink-0 rounded-sm border px-2.5 py-1.5 text-xs font-medium ${t.accentSoft}`}>
                          {s.index}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="lf-display text-sm font-medium">{s.label}</div>
                          <div className={`lf-mono text-[9px] tracking-wider uppercase ${t.soft}`}>{s.sublabel}</div>
                        </div>
                        <Icon className={`h-3.5 w-3.5 shrink-0 opacity-30 group-hover:opacity-60 transition-opacity ${t.neonText}`} />
                      </a>
                    );
                  })}
                </div>
     
                <div className={`border-t px-5 py-3 ${t.line}`}>
                  <span className={`lf-mono text-[10px] ${t.soft}`}>
                    <span className={t.neonText}>❯</span> scroll to explore{" "}
                    <span className={`lf-blink ${t.neonText}`}>▌</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </section>
     
  );
}