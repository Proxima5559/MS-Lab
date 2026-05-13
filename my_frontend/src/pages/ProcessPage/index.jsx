import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { PageBackground } from "@/components/ui/Layout";
import { GlowDivider } from "@/components/ui/UI";

import Hero from "./sections/Hero";

const StepOne = lazy(() => import("./sections/StepOne"));
const StepTwo = lazy(() => import("./sections/StepTwo"));
const StepDrei = lazy(() => import("./sections/StepDrei"));

const StepSkeleton = () => (
  <div className="w-full h-80 flex items-center justify-center bg-black/10 animate-pulse rounded-3xl border border-white/5">
    <div className="w-16 h-1 bg-[#d9a406]/10 rounded-full" />
  </div>
);

export default function ProcessPage({ t, dark }) {
  return (
    <>
      <PageBackground t={t} dark={dark} />

      <Hero t={t} dark={dark} />

      <GlowDivider theme={t} dark={dark} />

      <Suspense fallback={<StepSkeleton />}>
        <StepOne t={t} dark={dark} />
      </Suspense>

      <GlowDivider theme={t} dark={dark} />

      <Suspense fallback={<StepSkeleton />}>
        <StepTwo t={t} dark={dark} />
      </Suspense>

      <GlowDivider theme={t} dark={dark} />

      <Suspense fallback={<StepSkeleton />}>
        <StepDrei t={t} dark={dark} />
      </Suspense>

      <GlowDivider theme={t} dark={dark} />
    </>
  );
}