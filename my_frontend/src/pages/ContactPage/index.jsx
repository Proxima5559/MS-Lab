import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PageBackground } from "@/components/ui/Layout";
import { Eyebrow } from "@/components/ui/UI";
import { expectations } from "@/lib/constants/constantsCn";
import { up, inView } from "@/lib/animations";
import { Btn } from "@/components/ui/Btn";



export default function ContactPage({  t, dark }) {
  return (
    <>
    <PageBackground t={t} dark={dark} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
 
        <motion.div
          {...up(0)}
          className={`relative overflow-hidden rounded-sm border lf-noise lf-scanlines ${t.surfaceGlow}`}
          style={{ boxShadow: t.ctaShadow }}
        >
          {dark && (
            <>
              <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle, ${t.glowA}, transparent 70%)` }} />
              <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full opacity-15 blur-3xl"
                style={{ background: `radial-gradient(circle, ${t.glowB}, transparent 70%)` }} />
            </>
          )}
 
          <div className={`relative z-10 flex items-center justify-between border-b px-6 py-3 ${t.line}`}>
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
            </div>
            <span className={`lf-mono text-[10px] tracking-widest uppercase ${t.soft}`}>
              discovery_call.sh
            </span>
            <div className={`lf-mono lf-pulse rounded-sm border px-2 py-0.5 text-[9px] ${t.accentSoft}`}>
              ● 45 min
            </div>
          </div>
 
          <div className={`relative z-10 border-b px-8 py-12 lg:px-14 lg:py-16 ${t.line}`}>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-6">
                <Eyebrow theme={t}>
                  <Sparkles className="h-3 w-3" /> Contact · Discovery Call
                </Eyebrow>
                <h1 className="lf-display text-5xl font-medium leading-[1.07] tracking-tight sm:text-6xl lg:text-7xl">
                  Let's build your next{" "}
                  <em
                    className={`not-italic ${t.neonText}`}
                    style={{ textShadow: dark ? `0 0 48px ${t.glowA}55` : "none" }}
                  >
                    high-impact
                  </em>{" "}
                  system.
                </h1>
              </div>
              <div className="space-y-6">
                <p className={`text-base leading-8 ${t.muted}`}>
                  Request a Discovery Call. In 45 minutes, we will discuss your current
                  infrastructure, business goals, and determine if machine learning is the
                  right architectural fit for your challenge.
                </p>
                <Btn theme={t} className="w-full sm:w-auto">
                  Book a discovery call <ArrowUpRight className="h-3 w-3" />
                </Btn>
              </div>
            </div>
          </div>

          <div className="relative z-10 px-8 py-10 lg:px-14 lg:py-12">
            <div className={`lf-mono mb-8 text-[10px] tracking-[0.25em] uppercase ${t.soft}`}>
              What to expect from the call
            </div>
 
            <div className={`grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0 ${dark ? "divide-[#1a2535]" : "divide-slate-100"}`}>
              {expectations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    {...inView(idx * 0.1)}
                    className="group flex flex-col gap-4 py-6 md:px-8 md:py-0 first:md:pl-0 last:md:pr-0"
                  >
                    <div className={`inline-flex rounded-sm border p-2.5 w-fit ${t.accentSoft}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="lf-display text-xl font-medium">{item.title}</div>
                      <p className={`mt-2 text-sm leading-7 ${t.muted}`}>{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
 
      </div>
    </>
  );
}
 