import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Gauge, Building2, ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/UI";
import { Btn } from "@/components/ui/Btn";
import { up } from "@/lib/animations";
import { stats } from "@/lib/constants/constants";

export default function Hero({ t, dark }) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
      <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          <div className="space-y-10">
            <motion.div {...up(0)}>
              <Eyebrow theme={t}><Sparkles className="h-3 w-3" /> ML engineering · high-impact products</Eyebrow>
            </motion.div>

            <motion.div {...up(0.1)} className="space-y-5">
              <h1 className="lf-display text-6xl font-medium leading-[1.07] tracking-tight sm:text-7xl lg:text-[5.5rem]">
                We build{" "}
                <em className={`not-italic ${t.neonText}`}
                  style={{ textShadow: dark ? `0 0 48px ${t.glowA}55` : "none" }}>
                  serious
                </em>
                <br />
                <span className="opacity-25">AI systems</span>
                <br />
                for teams with
                <br />
                serious goals.
              </h1>
              <p className={`max-w-sm text-sm leading-8 ${t.muted}`}>
                HENK LAB is the engineering arm for machine learning, data systems, computer vision, and LLM-driven products — built to move from idea to deployment without losing clarity, speed, or quality.
              </p>
            </motion.div>

            <motion.div {...up(0.2)} className="flex flex-wrap gap-3">
              <Btn theme={t}>Explore our work <ArrowRight className="h-3 w-3" /></Btn>
              <Btn outline theme={t}>Book discovery call</Btn>
            </motion.div>

            <motion.div {...up(0.3)}
              className={`grid grid-cols-2 divide-x divide-y rounded-sm border sm:grid-cols-4 sm:divide-y-0 ${dark ? "border-[#1e2d42] divide-[#1e2d42]" : "border-slate-200 divide-slate-200"} ${t.surface}`}>
              {stats.map((s) => (
                <div key={s.label} className="p-4 lg:p-5">
                  <div className={`lf-display text-3xl font-medium lg:text-4xl ${t.neonText}`}
                    style={{ textShadow: dark ? `0 0 20px ${t.glowA}45` : "none" }}>
                    {s.value}
                  </div>
                  <div className={`lf-mono mt-1.5 text-[9px] leading-5 tracking-wider uppercase ${t.soft}`}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:sticky lg:top-24"
          >
            {dark && (
              <div className="absolute -inset-8 -z-10 rounded-full opacity-25 blur-3xl"
                style={{ background:`radial-gradient(ellipse at 50% 40%,${t.glowA}35,${t.glowB}20,transparent 70%)` }} />
            )}

            <div className={`relative overflow-hidden rounded-sm border lf-noise lf-scanlines ${t.surfaceGlow}`}
              style={{ boxShadow: t.cardShadow }}>

              <div className={`flex items-center justify-between border-b px-5 py-3 ${t.line}`}>
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>
                <span className={`lf-mono text-[10px] tracking-widest uppercase ${t.soft}`}>henk_lab — enterprise_ai.sh</span>
                <div className={`lf-mono lf-pulse rounded-sm border px-2 py-0.5 text-[9px] ${t.accentSoft}`}>● live</div>
              </div>

              <div className={`border-b px-6 py-5 ${t.line}`}>
                <div className={`lf-mono text-[9px] tracking-[0.3em] uppercase ${t.soft}`}>Featured direction</div>
                <div className="lf-display mt-2 text-2xl font-medium">Enterprise AI Delivery</div>
                <div className={`lf-mono mt-1 text-xs ${t.muted}`}>Production systems · Research to deployment</div>
              </div>

              <div className="grid md:grid-cols-2">
                
                <div className={`border-b px-6 py-5 md:border-b-0 md:border-r ${t.line}`}>
                  <div className="mb-5 flex items-center gap-2">
                    <Gauge className={`h-3.5 w-3.5 ${t.neonText}`} />
                    <span className={`lf-mono text-[10px] tracking-widest uppercase ${t.soft}`}>Delivery metrics</span>
                  </div>
                  <div className="space-y-4">
                    {[72, 88, 61].map((n, i) => (
                      <div key={i}>
                        <div className="mb-1.5 flex justify-between">
                          <span className={`lf-mono text-[10px] ${t.soft}`}>{["Model health","Pipeline stability","Business fit"][i]}</span>
                          <span className={`lf-mono text-[10px] font-medium ${t.neonText}`}>{n}%</span>
                        </div>
                        <div className={`h-[3px] overflow-hidden rounded-full ${t.barTrack}`}>
                          <motion.div
                            className={`h-full rounded-full ${t.barFill}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${n}%` }}
                            transition={{ duration: 1.1, delay: 0.7 + i * 0.15, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-5">
                  <div className="mb-5 flex items-center gap-2">
                    <Building2 className={`h-3.5 w-3.5 ${t.neonText}`} />
                    <span className={`lf-mono text-[10px] tracking-widest uppercase ${t.soft}`}>Use cases</span>
                  </div>
                  <div className="space-y-2">
                    {["Executive decision support","Document intelligence systems","Predictive operations","Computer vision inspection"].map(item => (
                      <div key={item}
                        className={`group flex cursor-pointer items-center justify-between rounded-sm border px-3 py-2.5 transition-all duration-200 ${t.surface} hover:border-cyan-500/30`}>
                        <span className={`lf-mono text-[10px] ${t.muted} group-hover:text-white transition-colors`}>{item}</span>
                        <ChevronRight className="h-3 w-3 opacity-30 group-hover:opacity-60 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`border-t px-6 py-3 ${t.line}`}>
                <span className={`lf-mono text-[10px] ${t.soft}`}>
                  <span className={t.neonText}>❯</span> ready to deploy <span className={`lf-blink ${t.neonText}`}>▌</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}