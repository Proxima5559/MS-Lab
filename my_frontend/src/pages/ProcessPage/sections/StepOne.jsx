import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/UI";
import { inView, fromLeft, fromRight } from "@/lib/animations";

export default function StepOne({ t, dark }) {
  return (
    <section id="step-01" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
 
          <motion.div
            {...inView(0)}
            className={`mb-12 flex items-end gap-6 border-b pb-8 ${t.line}`}
          >
            <div
              className={`lf-display shrink-0 text-[6rem] font-medium leading-none opacity-[0.07] lg:text-[8rem] ${t.neonText}`}
            >
              01
            </div>
            <div className="space-y-2 pb-1">
              <Eyebrow theme={t}>Discover — Analysis & Architecture</Eyebrow>
              <h2 className="lf-display text-4xl font-medium leading-tight sm:text-5xl">
                We don't write code on day one.
              </h2>
            </div>
          </motion.div>
 
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <motion.div {...fromLeft(0.06)}>
              <p className={`text-base leading-9 ${t.muted}`}>
                We dive deep into your business, audit your data, define Key Performance
                Indicators (KPIs), and map out technical constraints.
              </p>
            </motion.div>
 
            
            <motion.div
              {...fromRight(0.1)}
              className={`rounded-sm border lf-noise p-6 ${t.surfaceGlow}`}
              style={{ boxShadow: dark ? `0 0 24px ${t.glowA}08` : "none" }}
            >
              <div className={`lf-mono mb-2 text-[9px] tracking-widest uppercase ${t.soft}`}>Outcome</div>
              <p className={`lf-display text-lg font-medium leading-snug`}>
                A clear architectural blueprint and project roadmap.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
 
  );
}