import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/UI";
import { inView, fromLeft, fromRight } from "@/lib/animations";

export default function StepOne({ t, dark }) {
  return (
    <section id="step-03" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
 
          <div className="relative">
            <div
              className={`lf-display pointer-events-none select-none absolute -top-6 right-0 text-[10rem] font-medium leading-none opacity-[0.04] lg:text-[14rem] ${t.neonText}`}
            >
              03
            </div>
 
            <motion.div
              {...inView(0)}
              className={`mb-12 border-b pb-8 ${t.line}`}
            >
              <Eyebrow theme={t}>Scale — Production & Deployment</Eyebrow>
              <h2 className="lf-display mt-4 text-4xl font-medium leading-tight sm:text-5xl">
                Transitioning the successful prototype<br className="hidden lg:block" />
                into a fault-tolerant enterprise system.
              </h2>
            </motion.div>
 
            
            <div className="relative grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
              
              <motion.div
                {...fromLeft(0.06)}
                className={`rounded-sm border lf-noise p-6 ${t.surfaceGlow}`}
                style={{ boxShadow: dark ? `0 0 24px ${t.glowA}08` : "none" }}
              >
                <div className={`lf-mono mb-2 text-[9px] tracking-widest uppercase ${t.soft}`}>Outcome</div>
                <p className="lf-display text-lg font-medium leading-snug">
                  A robust, high-load-ready AI system.
                </p>
              </motion.div>
 
              
              <motion.div {...fromRight(0.06)}>
                <p className={`text-base leading-9 ${t.muted}`}>
                  We wrap models into microservices, set up MLOps pipelines, implement
                  monitoring and CI/CD, and transfer knowledge to your internal team.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
 
  );
}