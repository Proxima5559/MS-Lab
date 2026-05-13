import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/UI";
import { inView } from "@/lib/animations";
import { sections } from "@/lib/constants/constantsCp";
import { Zap, Cpu, ChevronRight } from "lucide-react";
export default function Hero({ t }) {
    return (
        <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <motion.div {...inView(0)} className="space-y-8">
              <Eyebrow theme={t}>
                <Zap className="h-3 w-3" /> Featured capability
              </Eyebrow>
              <h2 className="lf-display text-4xl font-medium leading-tight sm:text-5xl">
                Production-ready AI infrastructure
              </h2>
              <p className={`text-base leading-8 ${t.muted}`}>
                From data pipelines to model deployment, we build systems that scale with your business.
              </p>
              <div className={`rounded-sm border p-6 ${t.surfaceGlow}`}>
                <div className="flex items-center gap-4">
                  <div className={`rounded-sm border p-3 ${t.accentSoft}`}>
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider">24/7 monitoring</div>
                    <div className="text-sm">99.9% uptime guaranteed</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {sections.slice(0, 4).map((section, sIdx) => {
                const SectionIcon = section.icon;
                return (
                  <motion.div
                    key={section.id}
                    {...inView(sIdx * 0.1)}
                    className={`group flex items-start gap-5 rounded-sm border p-5 transition-all ${t.surfaceStrong} hover:border-cyan-500/20`}
                  >
                    <div className={`rounded-sm border p-2.5 ${t.accentSoft}`}>
                      <SectionIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{section.eyebrow}</h3>
                        <ChevronRight className={`h-4 w-4 opacity-30 ${t.neonText}`} />
                      </div>
                      <p className={`mt-1 text-sm ${t.muted}`}>{section.headline}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
}