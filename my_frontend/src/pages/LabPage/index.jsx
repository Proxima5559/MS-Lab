import { Suspense, lazy } from "react";
import { PageBackground } from "@/components/ui/Layout";
import { GlowDivider } from "@/components/ui/UI";

import Hero from "./sections/Hero";

// 2. Lazy load the rest
const Capabilities = lazy(() => import("./sections/Capabilities"));
const Projects = lazy(() => import("./sections/Projects"));
const Process = lazy(() => import("./sections/Process"));
const Industries = lazy(() => import("./sections/Industries"));

const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center opacity-20">
    <div className="w-12 h-12 border-2 border-t-[#d9a406] rounded-full animate-spin" />
  </div>
);

export default function LabPage({ t, dark }) {
  return (
    <div className={`lf-body min-h-screen ${t.page} relative overflow-x-hidden`}>
      <PageBackground dark={dark} t={t} />

      <Hero t={t} dark={dark} />

      <GlowDivider theme={t} dark={dark} />

      <Suspense fallback={<SectionLoader />}>
        <Capabilities t={t} dark={dark} />
      </Suspense>
      
      <GlowDivider theme={t} dark={dark} />

      <Suspense fallback={<SectionLoader />}>
        <Projects t={t} dark={dark} />
      </Suspense>

      <GlowDivider theme={t} dark={dark} />

      <Suspense fallback={<SectionLoader />}>
        <Process t={t} dark={dark} />
      </Suspense>

      <GlowDivider theme={t} dark={dark} />

      <Suspense fallback={<SectionLoader />}>
        <Industries t={t} dark={dark} />
      </Suspense>

      <GlowDivider theme={t} />
    </div>
  );
}