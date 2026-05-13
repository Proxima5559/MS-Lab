import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/UI";
import { inView } from "@/lib/animations";
import { projects } from "@/lib/constants/constants";
import { Btn } from "@/components/ui/Btn";
import { ArrowRight } from "lucide-react";

export default function Projects({ t, dark }) {
    return (
        <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
                <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="space-y-4">
                    <Eyebrow theme={t}>Selected projects</Eyebrow>
                    <h2 className="lf-display text-4xl font-medium leading-tight sm:text-5xl">
                      Scale, trust,<br /><span className="opacity-25 italic">and execution quality.</span>
                    </h2>
                  </div>
                  <Btn outline theme={t}>See all case studies</Btn>
                </div>
        
                <div className="grid gap-5 xl:grid-cols-3">
                  {projects.map((project, idx) => (
                    <motion.div key={project.title} {...inView(idx * 0.1)}
                      className={`group relative overflow-hidden rounded-sm border lf-noise cursor-pointer transition-all duration-300 ${t.surfaceStrong} hover:border-cyan-500/30`}
                      onMouseEnter={e => dark && (e.currentTarget.style.boxShadow = t.hoverShadow)}
                      onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                    >
                      <div className="h-[2px]" style={{ background:`linear-gradient(90deg,${t.glowB},${t.glowA})` }} />
                      <div className="p-7">
                        <Eyebrow theme={t}>{project.category}</Eyebrow>
                        <h3 className="lf-display mt-5 text-2xl font-medium leading-snug">{project.title}</h3>
                        <p className={`mt-3 text-sm leading-7 ${t.muted}`}>{project.summary}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className={`lf-mono rounded-sm border px-2.5 py-1 text-[9px] tracking-wider uppercase ${t.tagBg}`}>{tag}</span>
                          ))}
                        </div>
                        <div className={`mt-7 flex items-center gap-2 lf-mono text-[10px] tracking-widest uppercase font-medium ${t.soft}`}>
                          Read project overview
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
    );
}