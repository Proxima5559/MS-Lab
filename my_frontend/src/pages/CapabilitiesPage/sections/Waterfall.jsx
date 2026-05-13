import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/UI";
import { inView } from "@/lib/animations";
import { sections } from "@/lib/constants/constantsCp";
import {Layers} from "lucide-react";
export default function Hero({ t}) {
    return (
        <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div {...inView(0)} className="mb-12 text-center">
            <Eyebrow theme={t} className="justify-center">
              <Layers className="h-3 w-3" /> All capabilities
            </Eyebrow>
            <h2 className="lf-display mt-4 text-3xl font-medium sm:text-4xl">
              Every detail, fully transparent
            </h2>
          </motion.div>

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {sections.flatMap((section, sIdx) => 
              section.items.map((item, iIdx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={`${section.id}-${item.title}`}
                    {...inView(sIdx * 0.05 + iIdx * 0.02)}
                    className="mb-6 break-inside-avoid"
                  >
                    <div
                      className={`group relative overflow-hidden rounded-sm border lf-noise p-6 transition-all duration-300 ${t.surfaceStrong} hover:border-cyan-500/30`}
                    >
                      <div className={`mb-4 inline-flex rounded-sm border p-2 ${t.accentSoft}`}>
                        <ItemIcon className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className={`mt-2 text-sm leading-6 ${t.muted}`}>{item.text}</p>
                      <div className={`mt-4 pt-3 border-t text-right ${t.soft} text-xs`}>
                        {section.eyebrow}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </section>
    );
} 