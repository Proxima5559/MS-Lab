import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ChevronRight , ArrowUpRight} from "lucide-react";
import { Eyebrow } from "@/components/ui/UI";
import { Btn } from "@/components/ui/Btn";
import { up } from "@/lib/animations";
import { sections } from "@/lib/constants/constantsCp";

export default function Hero({ t, dark }) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
 
          <div className="space-y-8">
            <motion.div {...up(0)}>
              <Eyebrow theme={t}>
                <Sparkles className="h-3 w-3" /> Capabilities
              </Eyebrow>
            </motion.div>
 
            <motion.div {...up(0.08)}>
              <h1 className="lf-display text-6xl font-medium leading-[1.07] tracking-tight sm:text-7xl lg:text-[5.25rem]">
                Beyond simple{" "}
                <em
                  className={`not-italic ${t.neonText}`}
                  style={{ textShadow: dark ? `0 0 48px ${t.glowA}55` : "none" }}
                >
                  models.
                </em>
                <br />
                <span className="opacity-25">We build complete</span>
                <br />
                AI systems.
              </h1>
            </motion.div>
 
            <motion.div {...up(0.15)}>
              <p className={`max-w-xl text-base leading-8 ${t.muted}`}>
                We don't just train neural networks — we design, deploy, and maintain
                fault-tolerant machine learning systems that integrate seamlessly into your
                business and deliver measurable results.
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
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden rounded-sm border lf-noise lf-scanlines ${t.surfaceGlow}`}
            style={{ boxShadow: t.cardShadow }}
          >
           
            <div className={`flex items-center justify-between border-b px-5 py-3 ${t.line}`}>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>
              <span className={`lf-mono text-[10px] tracking-widest uppercase ${t.soft}`}>
                capabilities_index.sh
              </span>
              <div className={`lf-mono lf-pulse rounded-sm border px-2 py-0.5 text-[9px] ${t.accentSoft}`}>
                ● 4 modules
              </div>
            </div>
 
            <div className="divide-y" style={{ borderColor: dark ? "#1a2535" : "#f1f5f9" }}>
              {sections.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`group flex items-center justify-between px-5 py-4 transition-all duration-200 ${t.surface} hover:border-cyan-500/20`}
                    style={{ display: "flex" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`rounded-sm border p-1.5 ${t.accentSoft}`}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className={`lf-mono text-[10px] tracking-widest uppercase ${t.soft}`}>
                          0{i + 1}
                        </div>
                        <div className="lf-display text-sm font-medium">{s.eyebrow}</div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-3.5 w-3.5 opacity-30 transition-all group-hover:opacity-70 group-hover:translate-x-0.5 ${t.neonText}`}
                    />
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