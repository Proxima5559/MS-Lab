import React from "react"
import { Btn } from "./Btn";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/UI";

export function Actions({ dark, t }) {
  if (!t) return null;

  return (
   
    <section className={`w-full py-20 px-6 lg:px-10 ${t.page}`}>
      
      
      <div 
        className={`max-w-7xl mx-auto relative z-10 p-10 lg:p-16 rounded-[2.5rem] border ${t.surface}`}
        style={{ boxShadow: dark ? t.cardShadow : 'none' }}
      >
        
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <Eyebrow theme={t}>Ready to build?</Eyebrow>
            <h2 className="lf-display mt-6 text-5xl font-medium leading-tight sm:text-6xl">
              Let's turn your data into a{" "}
              <em
                className={`not-italic ${t.neonText}`}
                style={{ textShadow: dark ? `0 0 50px ${t.glowA}55` : "none" }}
              >
                competitive edge.
              </em>
            </h2>
            <p className={`mt-5 max-w-lg text-sm leading-8 ${t.muted}`}>
              Whether you're starting from scratch or scaling an existing system, we'll
              scope a clear path forward — no commitment required.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <Btn theme={t} className="w-full lg:w-auto">
              Discuss your project <ArrowUpRight className="h-3 w-3" />
            </Btn>
            <Btn outline theme={t} className="w-full lg:w-auto">
              View case studies
            </Btn>
            <p className={`lf-mono mt-2 text-center text-[9px] tracking-wider uppercase lg:text-right ${t.soft}`}>
              No commitment · First call free
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}