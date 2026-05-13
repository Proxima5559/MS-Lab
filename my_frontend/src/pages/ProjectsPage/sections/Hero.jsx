import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ChevronRight, ArrowUpRight  } from "lucide-react";
import { Eyebrow } from "@/components/ui/UI";
import { Btn } from "@/components/ui/Btn";
import { up } from "@/lib/animations";
import { projects } from "@/lib/constants/constantsPr";

export default function Hero({ t, dark }) {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pt-28">
        <div className="flex flex-col items-center text-center space-y-8">
 
          <motion.div {...up(0)}>
            <Eyebrow theme={t}>
              <Sparkles className="h-3 w-3" /> Case Studies · Projects
            </Eyebrow>
          </motion.div>
 
          <motion.div {...up(0.08)}>
            <h1 className="lf-display max-w-4xl text-6xl font-medium leading-[1.07] tracking-tight sm:text-7xl lg:text-[5.5rem]">
              Architecture{" "}
              <em
                className={`not-italic ${t.neonText}`}
                style={{ textShadow: dark ? `0 0 48px ${t.glowA}55` : "none" }}
              >
                proven
              </em>{" "}
              in the real world.
            </h1>
          </motion.div>
 
          <motion.div {...up(0.14)}>
            <p className={`max-w-2xl text-base leading-8 ${t.muted}`}>
              Examples of systems we have designed and successfully brought to production. A detailed
              breakdown of the business problems, technical challenges, and achieved results.
            </p>
          </motion.div>

 
          <motion.div
            {...up(0.26)}
            className={`mt-4 w-full grid grid-cols-3 divide-x rounded-sm border ${dark ? "border-[#1e2d42] divide-[#1e2d42]" : "border-slate-200 divide-slate-200"} ${t.surface}`}
          >
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className={`group flex flex-col items-center gap-2 px-4 py-5 transition-all duration-200 hover:border-cyan-500/20 sm:flex-row sm:gap-3`}
                >
                  <div className={`rounded-sm border p-2 shrink-0 ${t.accentSoft}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="text-left">
                    <div className={`lf-mono text-[9px] tracking-widest uppercase ${t.soft}`}>{p.index}</div>
                    <div className={`lf-display text-sm font-medium leading-tight`}>{p.title}</div>
                  </div>
                  <ChevronRight className={`ml-auto h-3.5 w-3.5 opacity-20 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all hidden sm:block ${t.neonText}`} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>
  );
}