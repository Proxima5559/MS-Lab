import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/UI";
import { fromLeft, fromRight } from "@/lib/animations";

export default function StepTwo({ t, dark }) {
  return (
   <section id="step-02" className={`relative z-10 ${t.sectionTint}`}>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
 
         
          <div className="relative">
            <div
              className={`lf-display pointer-events-none select-none absolute -top-6 left-0 text-[10rem] font-medium leading-none opacity-[0.04] lg:text-[14rem] ${t.neonText}`}
            >
              02
            </div>
 
            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div {...fromLeft(0)} className="space-y-5">
                <Eyebrow theme={t}>Prototype — Validation & MVP</Eyebrow>
                <h2 className="lf-display text-4xl font-medium leading-tight sm:text-5xl">
                  Rapid development of a Proof of Concept (PoC) or MVP.
                </h2>
              </motion.div>
 
              <div className="space-y-6">
                <motion.div {...fromRight(0.08)}>
                  <p className={`text-base leading-9 ${t.muted}`}>
                    We use simplified models and available data to prove viability and deliver
                    measurable results within 3 to 6 weeks.
                  </p>
                </motion.div>
 
                <motion.div
                  {...fromRight(0.14)}
                  className={`rounded-sm border lf-noise p-6 ${t.surfaceGlow}`}
                  style={{ boxShadow: dark ? `0 0 24px ${t.glowA}08` : "none" }}
                >
                  <div className={`lf-mono mb-2 text-[9px] tracking-widest uppercase ${t.soft}`}>Outcome</div>
                  <p className="lf-display text-lg font-medium leading-snug">
                    A working prototype and a data-driven decision on scaling.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}