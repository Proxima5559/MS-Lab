import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/UI";
import { inView } from "@/lib/animations";
import { processItems } from "@/lib/constants/constants";


export default function Process({ t, dark }) {
    return (
        <section id="process" className={`relative z-10 ${t.sectionTint}`}>
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
                  <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
                      <Eyebrow theme={t}>How we work</Eyebrow>
                      <h2 className="lf-display text-4xl font-medium leading-tight sm:text-5xl">
                        Clear path<br />
                        <span className="opacity-25 italic">from idea to<br />deployed system.</span>
                      </h2>
                      <p className={`text-sm leading-7 ${t.muted}`}>Two-week sprints with working demos. Feedback loops tight; surprises rare.</p>
                    </div>
                    <div className="space-y-4">
                      {processItems.map((item, idx) => (
                        <motion.div key={item.step} {...inView(idx * 0.08)}
                          className={`flex gap-5 rounded-sm border p-5 lf-noise transition-all duration-300 ${t.surfaceStrong} hover:border-cyan-500/25`}
                          onMouseEnter={e => dark && (e.currentTarget.style.boxShadow = `0 0 20px ${t.glowA}08`)}
                          onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                        >
                          <div className={`lf-mono shrink-0 self-start rounded-sm border px-3 py-2 text-sm font-medium ${t.accentSoft}`}>{item.step}</div>
                          <div>
                            <h3 className="lf-display text-xl font-medium">{item.title}</h3>
                            <p className={`mt-1.5 text-sm leading-7 ${t.muted}`}>{item.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
    );
} 