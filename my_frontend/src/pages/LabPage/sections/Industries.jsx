import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/UI";
import { industries } from "@/lib/constants/constants";
import {
    Gauge,
    Globe2, CheckCircle2, Brain
} from "lucide-react";


export default function Industries({ t }) {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
         
          <div className={`rounded-sm border lf-noise p-7 lg:p-9 ${t.surfaceStrong}`}>
            <Eyebrow theme={t}>Why HENK LAB</Eyebrow>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Globe2,       title: "Global delivery mindset", text: "Positioned for cross-border products and modern engineering teams." },
                { icon: CheckCircle2, title: "Outcome-driven scoping",  text: "Designed to speak in value, not only in algorithms." },
                { icon: Gauge,        title: "Built for scale",          text: "Visual language supports large-project credibility and maturity." },
                { icon: Brain,        title: "Technical depth",          text: "Strong fit for ML engineering, LLM systems, and data-intensive products." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className={`rounded-sm border p-5 transition-all duration-200 ${t.surface} hover:border-cyan-500/25`}>
                    <div className={`mb-3 inline-flex rounded-sm border p-2 ${t.accentSoft}`}><Icon className="h-3.5 w-3.5" /></div>
                    <div className="lf-display text-base font-medium">{item.title}</div>
                    <p className={`mt-1.5 text-xs leading-6 ${t.muted}`}>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`rounded-sm border lf-noise p-7 lg:p-9 ${t.surfaceStrong}`}>
            <Eyebrow theme={t}>Industries</Eyebrow>
            <h3 className="lf-display mt-5 text-2xl font-medium leading-snug">
              Flexible for many domains.<br />
              <span className="opacity-25 italic">Disciplined for enterprise.</span>
            </h3>
            <p className={`mt-3 text-sm leading-7 ${t.muted}`}>Decision-makers get immediate confidence; technical buyers get the depth they need.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {industries.map(item => (
                <span key={item} className={`lf-mono cursor-default rounded-sm border px-3 py-1.5 text-[10px] tracking-wider uppercase transition-colors hover:border-cyan-500/30 ${t.tagBg}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}