import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/ui/UI";
import { inView } from "@/lib/animations";
import { sections } from "@/lib/constants/constantsCp";

export default function Hero({ t, dark }) {
  const containerRef = useRef(null);

  const { scrollXProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"] 
  });

 const smoothProgress = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  
    return (
        <section className="relative z-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div {...inView(0)} className="mb-14 text-center">
            <Eyebrow theme={t} className="justify-center">
              <Sparkles className="h-3 w-3" /> Our expertise
            </Eyebrow>
            <h2 className="lf-display mt-6 text-4xl font-medium leading-tight sm:text-5xl">
              Complete AI solutions
            </h2>
            <p className={`mx-auto mt-4 max-w-2xl text-sm leading-8 ${t.muted}`}>
              End-to-end machine learning systems designed for real-world impact
            </p>
          </motion.div>

          <div className="relative">
            <div ref={containerRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-hide">
              {sections.map((section, sIdx) => {
                const SectionIcon = section.icon;
                return (
                  <motion.div
                    key={section.id}
                    {...inView(sIdx * 0.1)}
                    className="min-w-[85%] snap-start md:min-w-[45%] lg:min-w-[32%]"
                  >
                    <div
                      className={`group relative h-full rounded-sm border lf-noise lf-scanlines p-8 transition-all duration-300 ${t.surfaceGlow} hover:border-cyan-500/30`}
                      style={{ boxShadow: t.cardShadow }}
                    >
                      <div
                        className="absolute left-0 top-0 h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg, ${t.glowB}, ${t.glowA})` }}
                      />
                      
                      <div className={`mb-6 inline-flex rounded-sm border p-3 ${t.accentSoft}`}>
                        <SectionIcon className="h-6 w-6" />
                      </div>
                      
                      <div className="mb-4">
                        <div className={`lf-mono text-xs tracking-widest uppercase ${t.soft}`}>
                          0{sIdx + 1}
                        </div>
                        <h3 className="lf-display mt-1 text-2xl font-medium">{section.eyebrow}</h3>
                      </div>
                      
                      <h4 className="text-xl font-semibold">{section.headline}</h4>
                      <p className={`mt-3 text-sm leading-7 ${t.muted}`}>{section.description}</p>
                      
                      <div className="mt-6 pt-4 border-t" style={{ borderColor: dark ? "#1a2535" : "#f1f5f9" }}>
                        <div className="space-y-3">
                          {section.items.slice(0, 3).map((item) => {
                            const ItemIcon = item.icon;
                            return (
                              <div key={item.title} className="flex items-start gap-3">
                                <div className={`mt-0.5 rounded-sm p-1 ${t.accentSoft}`}>
                                  <ItemIcon className="h-3 w-3" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium">{item.title}</div>
                                  <div className={`text-xs ${t.soft}`}>{item.text.substring(0, 80)}...</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        {section.items.length > 3 && (
                          <div className={`mt-3 text-xs ${t.neonText}`}>+{section.items.length - 3} more capabilities</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
           <div className="mx-auto mt-6 max-w-sm h-1 rounded-full bg-gray-300 overflow-hidden relative">
              <motion.div 
                  className={`absolute left-0 top-0 h-full w-full bg-green-700`}
                  style={{ 
                    scaleX: smoothProgress,
                    transformOrigin: "left"
                  }} 
                />
            </div>
          </div>
        </div>
      </section>
    );
}