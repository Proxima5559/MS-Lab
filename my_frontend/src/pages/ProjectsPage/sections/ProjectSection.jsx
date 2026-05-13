import { motion } from "framer-motion";
import { Eyebrow, GlowDivider } from "@/components/ui/UI";
import { inView, fromLeft, fromRight } from "@/lib/animations";
import { projects, statIcons } from "@/lib/constants/constantsPr";

export default function ProjectSection({ t, dark }) {
  return (
    <>
    {projects.map((project, pIdx) => {
            const ProjectIcon = project.icon;
            const isEven = pIdx % 2 === 0;
     
            return (
              <section
                key={project.id}
                id={project.id}
                className={`relative z-10 ${isEven ? "" : t.sectionTint}`}
              >
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
     
                  <motion.div
                    {...inView(0)}
                    className={`mb-14 flex flex-col gap-5 border-b pb-10 sm:flex-row sm:items-end sm:justify-between ${t.line}`}
                  >
                    <div className="flex items-start gap-5">
                      
                      <div
                        className={`lf-display shrink-0 text-[5rem] font-medium leading-none opacity-10 lg:text-[7rem] ${t.neonText}`}
                        style={{ textShadow: dark ? `0 0 40px ${t.glowA}` : "none" }}
                      >
                        {project.index}
                      </div>
                      <div className="space-y-3 pt-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <Eyebrow theme={t}>{project.category}</Eyebrow>
                          <div className={`rounded-sm border p-1.5 ${t.accentSoft}`}>
                            <ProjectIcon className="h-3.5 w-3.5" />
                          </div>
                        </div>
                        <h2 className="lf-display text-4xl font-medium leading-tight sm:text-5xl">
                          {project.title}
                        </h2>
                      </div>
                    </div>
     
                    <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`lf-mono rounded-sm border px-3 py-1.5 text-[9px] tracking-wider uppercase ${t.tagBg}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
     
     
                  {pIdx === 0 && (
                    <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
                      <div className="space-y-4">
                        {[project.problem, project.solution, project.result].map((block, bIdx) => {
                          const labels = ["problem", "solution", "result"];
                          const BlockIcon = statIcons[labels[bIdx]];
                          const accentColors = [
                            dark ? "border-l-red-500/40"   : "border-l-red-400",
                            dark ? "border-l-cyan-500/50"  : "border-l-blue-500",
                            dark ? "border-l-green-500/40" : "border-l-green-500",
                          ];
                          return (
                            <motion.div
                              key={block.label}
                              {...fromLeft(bIdx * 0.1)}
                              className={`relative overflow-hidden rounded-sm border-l-2 border lf-noise p-6 ${accentColors[bIdx]} ${t.surfaceStrong}`}
                            >
                              <div className="flex items-start gap-4">
                                <div className={`mt-0.5 rounded-sm border p-2 shrink-0 ${t.accentSoft}`}>
                                  <BlockIcon className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className={`lf-mono mb-2 text-[10px] tracking-widest uppercase ${t.soft}`}>
                                    {block.label}
                                  </div>
                                  <p className={`text-sm leading-7 ${t.muted}`}>{block.text}</p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
     
                      <motion.div {...fromRight(0.15)} className="space-y-4 lg:sticky lg:top-24 lg:self-start">
                        <div className={`lf-mono text-[10px] tracking-widest uppercase ${t.soft}`}>
                          Key results
                        </div>
                        {project.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className={`relative overflow-hidden rounded-sm border lf-noise p-5 ${t.surfaceGlow}`}
                            style={{ boxShadow: dark ? `0 0 20px ${t.glowA}08` : "none" }}
                          >
                            <div
                              className={`lf-display text-4xl font-medium ${t.neonText}`}
                              style={{ textShadow: dark ? `0 0 24px ${t.glowA}50` : "none" }}
                            >
                              {m.value}
                            </div>
                            <div className={`lf-mono mt-1.5 text-[10px] tracking-wider uppercase ${t.soft}`}>
                              {m.label}
                            </div>
                            {dark && (
                              <div
                                className="absolute bottom-0 right-0 h-12 w-12"
                                style={{ background: `radial-gradient(circle at 100% 100%, ${t.glowA}15, transparent 70%)` }}
                              />
                            )}
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  )}
     
                  {pIdx === 1 && (
                   
                    <div className="space-y-8">
                    
                      <motion.div
                        {...inView(0)}
                        className={`grid grid-cols-3 divide-x rounded-sm border ${dark ? "divide-[#1e2d42] border-[#1e2d42]" : "divide-slate-200 border-slate-200"} ${t.surface}`}
                      >
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="px-6 py-6">
                            <div
                              className={`lf-display text-4xl font-medium lg:text-5xl ${t.neonText}`}
                              style={{ textShadow: dark ? `0 0 28px ${t.glowA}50` : "none" }}
                            >
                              {m.value}
                            </div>
                            <div className={`lf-mono mt-2 text-[10px] tracking-wider uppercase ${t.soft}`}>
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </motion.div>
     
                      <div className="grid gap-4 md:grid-cols-3">
                        {[project.problem, project.solution, project.result].map((block, bIdx) => {
                          const labels = ["problem", "solution", "result"];
                          const BlockIcon = statIcons[labels[bIdx]];
                          const topColors = [
                            `linear-gradient(90deg, #ef4444, #f97316)`,
                            `linear-gradient(90deg, ${t.glowB}, ${t.glowA})`,
                            `linear-gradient(90deg, #22c55e, #06b6d4)`,
                          ];
                          return (
                            <motion.div
                              key={block.label}
                              {...inView(bIdx * 0.1)}
                              className={`relative overflow-hidden rounded-sm border lf-noise p-6 ${t.surfaceStrong}`}
                            >
                              <div className="absolute left-0 top-0 h-[2px] w-full"
                                style={{ background: topColors[bIdx] }} />
                              <div className={`mb-4 inline-flex rounded-sm border p-2 ${t.accentSoft}`}>
                                <BlockIcon className="h-4 w-4" />
                              </div>
                              <div className={`lf-mono mb-2 text-[10px] tracking-widest uppercase ${t.soft}`}>
                                {block.label}
                              </div>
                              <p className={`text-sm leading-7 ${t.muted}`}>{block.text}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}
     
                  {pIdx === 2 && (
                    <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
     
                      <div className="relative space-y-0">
                        <div
                          className="absolute left-[19px] top-6 bottom-6 w-px"
                          style={{ background: dark ? `linear-gradient(180deg, ${t.glowA}40, ${t.glowB}20, transparent)` : "linear-gradient(180deg, #3b82f640, transparent)" }}
                        />
     
                        {[project.problem, project.solution, project.result].map((block, bIdx) => {
                          const labels = ["problem", "solution", "result"];
                          const BlockIcon = statIcons[labels[bIdx]];
                          const dotColors = [
                            dark ? "bg-red-500/70 border-red-500/30"   : "bg-red-400 border-red-200",
                            dark ? "bg-cyan-500/70 border-cyan-500/30" : "bg-blue-500 border-blue-200",
                            dark ? "bg-green-500/70 border-green-500/30" : "bg-green-500 border-green-200",
                          ];
                          return (
                            <motion.div
                              key={block.label}
                              {...fromLeft(bIdx * 0.12)}
                              className="relative flex gap-6 pb-8 last:pb-0"
                            >
                              <div className={`relative z-10 mt-1 h-10 w-10 shrink-0 rounded-full border-2 flex items-center justify-center ${dotColors[bIdx]}`}>
                                <BlockIcon className="h-4 w-4 text-white" />
                              </div>
                              <div className={`rounded-sm border lf-noise p-5 flex-1 ${t.surfaceStrong}`}>
                                <div className={`lf-mono mb-2 text-[10px] tracking-widest uppercase ${t.soft}`}>
                                  {block.label}
                                </div>
                                <p className={`text-sm leading-7 ${t.muted}`}>{block.text}</p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
     
                  
                      <motion.div {...fromRight(0.1)} className="space-y-4">
                        {project.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className={`group relative overflow-hidden rounded-sm border lf-noise px-8 py-10 transition-all duration-300 ${t.surfaceGlow} hover:border-cyan-500/40`}
                            style={{ boxShadow: dark ? `0 0 24px ${t.glowA}06` : "none" }}
                            onMouseEnter={e => dark && (e.currentTarget.style.boxShadow = t.hoverShadow)}
                            onMouseLeave={e => (e.currentTarget.style.boxShadow = dark ? `0 0 24px ${t.glowA}06` : "none")}
                          >
                            <div
                              className={`lf-display text-6xl font-medium leading-none ${t.neonText}`}
                              style={{ textShadow: dark ? `0 0 40px ${t.glowA}60` : "none" }}
                            >
                              {m.value}
                            </div>
                            <div className={`lf-mono mt-3 text-[10px] tracking-widest uppercase ${t.soft}`}>
                              {m.label}
                            </div>
                            {dark && (
                              <div
                                className="absolute right-0 top-0 h-full w-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ background: `radial-gradient(ellipse at 100% 50%, ${t.glowA}10, transparent 70%)` }}
                              />
                            )}
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  )}
     
                </div>
     
                {pIdx < projects.length - 1 && <GlowDivider theme={t} dark={dark} />}
              </section>
            );
          })}
          </>
  );
}