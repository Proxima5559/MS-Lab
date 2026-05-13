import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { PageBackground } from "@/components/ui/Layout";
import { GlowDivider } from "@/components/ui/UI";
import Hero from "./sections/Hero";

const Slides = lazy(() => import("./sections/Slides"));
const Info = lazy(() => import("./sections/Info"));
const Waterfall = lazy(() => import("./sections/Waterfall"));

const Skeleton = () => <div className="h-96 animate-pulse bg-gray-500/5 rounded-2xl m-4" />;

export default function CapabilitiesPage({ t, dark }) {
  return (
    <>
      <PageBackground t={t} dark={dark} />
 
      <Hero t={t} dark={dark} />
 
      <GlowDivider theme={t} dark={dark} />
 
      <Suspense fallback={<Skeleton />}>
        <Slides t={t} dark={dark} />
      </Suspense>

      <GlowDivider theme={t} dark={dark} />
 
      <Suspense fallback={<Skeleton />}>
        <Info t={t} dark={dark} />
      </Suspense>
      
      <GlowDivider theme={t} dark={dark} />

      <Suspense fallback={<Skeleton />}>
        <Waterfall t={t} dark={dark} />
      </Suspense>

      <GlowDivider theme={t} dark={dark} />
    </>
  );
}