import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/UI";
import { inView } from "@/lib/animations";
import { capabilities } from "@/lib/constants/constants";

export default function Capabilities({ t, dark }) {
    return (
        <section id="capabilities" className={`relative z-10 ${t.sectionTint}`}>
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
                  <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                      <Eyebrow theme={t}>Capabilities</Eyebrow>
                      <h2 className="lf-display text-4xl font-medium leading-tight sm:text-5xl">
                        Built for complex ML products,<br />
                        <span className="opacity-25 italic">not demo-only AI.</span>
                      </h2>
                    </div>
                    <p className={`max-w-xs text-sm leading-7 ${t.muted}`}>Strategic enough for leadership. Concrete enough for technical buyers.</p>
                  </div>
        
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {capabilities.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.div key={item.title} {...inView(idx * 0.08)}
                          className={`group relative overflow-hidden rounded-sm border p-6 lf-noise cursor-default transition-all duration-300 ${t.surfaceStrong} hover:border-cyan-500/30`}
                          onMouseEnter={e => dark && (e.currentTarget.style.boxShadow = t.hoverShadow)}
                          onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                        >
                          <div className={`mb-5 inline-flex rounded-sm border p-2.5 ${t.accentSoft}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <h3 className="lf-display text-xl font-medium">{item.title}</h3>
                          <p className={`mt-3 text-sm leading-7 ${t.muted}`}>{item.text}</p>
                          {dark && <div className="absolute bottom-0 right-0 h-16 w-16 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ background:`radial-gradient(circle at 100% 100%,${t.glowA}18,transparent 70%)` }} />}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>
    );
}